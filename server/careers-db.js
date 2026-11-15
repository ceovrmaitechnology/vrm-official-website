const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.resolve(__dirname, 'data');
const JOBS_FILE = path.join(DATA_DIR, 'jobs.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');
const SECRET_FILE = path.join(DATA_DIR, '.jwt_secret');
const SITEMAP_PUBLIC = path.resolve(__dirname, '../public/sitemap.xml');
const SITEMAP_BUILD = path.resolve(__dirname, '../build/sitemap.xml');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure jobs.json exists
if (!fs.existsSync(JOBS_FILE)) {
  fs.writeFileSync(JOBS_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Get or initialize JWT Secret
function getJwtSecret() {
  if (process.env.ADMIN_JWT_SECRET && process.env.ADMIN_JWT_SECRET.trim()) {
    return process.env.ADMIN_JWT_SECRET.trim();
  }
  if (fs.existsSync(SECRET_FILE)) {
    try {
      const savedSecret = fs.readFileSync(SECRET_FILE, 'utf8').trim();
      if (savedSecret) return savedSecret;
    } catch (e) {
      // fallback to generated
    }
  }
  const newSecret = crypto.randomBytes(48).toString('hex');
  try {
    fs.writeFileSync(SECRET_FILE, newSecret, 'utf8');
  } catch (e) {}
  return newSecret;
}

const JWT_SECRET = getJwtSecret();

// Atomic JSON write
function writeJsonAtomic(filePath, data) {
  const tmpPath = `${filePath}.${Date.now()}.${Math.random().toString(36).slice(2, 8)}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmpPath, filePath);
}

// Slugify helper
function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// -------------------------------------------------------------
// JOBS REPOSITORY
// -------------------------------------------------------------

function readJobsRaw() {
  try {
    if (!fs.existsSync(JOBS_FILE)) {
      writeJsonAtomic(JOBS_FILE, []);
      return [];
    }
    const content = fs.readFileSync(JOBS_FILE, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading jobs file:', error.message);
    return [];
  }
}

function getJobs(includeUnpublished = false) {
  const allJobs = readJobsRaw();
  if (includeUnpublished) {
    return allJobs.sort((a, b) => new Date(b.postedAt || b.createdAt || 0) - new Date(a.postedAt || a.createdAt || 0));
  }
  return allJobs
    .filter(j => j.status === 'published')
    .sort((a, b) => new Date(b.postedAt || b.createdAt || 0) - new Date(a.postedAt || a.createdAt || 0));
}

function getJobBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = String(slug).toLowerCase().trim();
  const allJobs = readJobsRaw();
  return allJobs.find(j => String(j.slug).toLowerCase() === cleanSlug) || null;
}

function getJobById(id) {
  if (!id) return null;
  const allJobs = readJobsRaw();
  return allJobs.find(j => String(j.id) === String(id)) || null;
}

function ensureUniqueSlug(desiredSlug, currentJobId = null) {
  let baseSlug = slugify(desiredSlug) || `job-${Date.now()}`;
  let uniqueSlug = baseSlug;
  let counter = 1;
  const allJobs = readJobsRaw();

  while (allJobs.some(j => j.slug === uniqueSlug && String(j.id) !== String(currentJobId))) {
    counter++;
    uniqueSlug = `${baseSlug}-${counter}`;
  }
  return uniqueSlug;
}

function saveJob(jobData, existingId = null) {
  const allJobs = readJobsRaw();
  const now = new Date().toISOString();

  // Clean arrays / text
  const formatList = (val) => {
    if (Array.isArray(val)) return val.map(s => String(s).trim()).filter(Boolean);
    if (typeof val === 'string') {
      return val.split('\n').map(s => s.replace(/^[-*•\d.)\s]+/, '').trim()).filter(Boolean);
    }
    return [];
  };

  const status = ['draft', 'published', 'closed'].includes(jobData.status) ? jobData.status : 'draft';
  const slug = ensureUniqueSlug(jobData.slug || jobData.title, existingId);

  // Default validThrough: 90 days from postedAt
  const postedAt = jobData.postedAt || (status === 'published' ? now : null);
  let validThrough = jobData.validThrough;
  if (!validThrough && postedAt) {
    const validDate = new Date(new Date(postedAt).getTime() + 90 * 24 * 60 * 60 * 1000);
    validThrough = validDate.toISOString();
  }

  const cleanJob = {
    id: existingId ? String(existingId) : `job_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    slug,
    title: (jobData.title || '').trim(),
    department: (jobData.department || '').trim(),
    location: (jobData.location || 'Bengaluru').trim(), // Bengaluru / Madurai / Remote
    employmentType: (jobData.employmentType || 'Full-time').trim(), // Full-time / Internship / Contract
    experience: (jobData.experience || '').trim(),
    shortDescription: (jobData.shortDescription || '').trim(),
    responsibilities: formatList(jobData.responsibilities),
    requirements: formatList(jobData.requirements),
    applyEmail: 'contactus@vrmaitechnology.com',
    applyLink: (jobData.applyLink || '').trim(),
    status,
    postedAt,
    validThrough,
    createdAt: jobData.createdAt || now,
    updatedAt: now
  };

  let updatedJobs;
  if (existingId) {
    const idx = allJobs.findIndex(j => String(j.id) === String(existingId));
    if (idx === -1) {
      throw new Error(`Job with id ${existingId} not found`);
    }
    cleanJob.createdAt = allJobs[idx].createdAt || cleanJob.createdAt;
    updatedJobs = [...allJobs];
    updatedJobs[idx] = cleanJob;
  } else {
    updatedJobs = [cleanJob, ...allJobs];
  }

  writeJsonAtomic(JOBS_FILE, updatedJobs);
  syncSitemap();
  return cleanJob;
}

function updateJobStatus(id, newStatus) {
  if (!['draft', 'published', 'closed'].includes(newStatus)) {
    throw new Error('Invalid status. Must be draft, published, or closed.');
  }

  const allJobs = readJobsRaw();
  const idx = allJobs.findIndex(j => String(j.id) === String(id));
  if (idx === -1) throw new Error(`Job with id ${id} not found`);

  const now = new Date().toISOString();
  const job = { ...allJobs[idx] };
  job.status = newStatus;
  job.updatedAt = now;

  if (newStatus === 'published' && !job.postedAt) {
    job.postedAt = now;
    if (!job.validThrough) {
      job.validThrough = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();
    }
  }

  allJobs[idx] = job;
  writeJsonAtomic(JOBS_FILE, allJobs);
  syncSitemap();
  return job;
}

function deleteJob(id) {
  const allJobs = readJobsRaw();
  const filtered = allJobs.filter(j => String(j.id) !== String(id));
  if (filtered.length === allJobs.length) {
    throw new Error(`Job with id ${id} not found`);
  }
  writeJsonAtomic(JOBS_FILE, filtered);
  syncSitemap();
  return true;
}

// -------------------------------------------------------------
// SITEMAP SYNC & GENERATION
// -------------------------------------------------------------

function generateDynamicSitemapXml() {
  const baseSitemapFile = fs.existsSync(SITEMAP_PUBLIC) ? SITEMAP_PUBLIC : SITEMAP_BUILD;
  let baseContent = '';
  if (fs.existsSync(baseSitemapFile)) {
    baseContent = fs.readFileSync(baseSitemapFile, 'utf8');
  }

  // Remove closing </urlset> if present
  let cleanBase = baseContent.replace(/<\/urlset>[\s\S]*$/i, '').trim();
  if (!cleanBase) {
    cleanBase = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  }

  // Find published jobs
  const publishedJobs = getJobs(false);
  const jobUrlsXml = publishedJobs.map(job => {
    const lastMod = (job.updatedAt || job.postedAt || new Date().toISOString()).slice(0, 10);
    return `  <url>\n    <loc>https://www.vrmaitechnology.com/careers/${job.slug}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`;
  }).join('\n');

  if (jobUrlsXml) {
    return `${cleanBase}\n${jobUrlsXml}\n</urlset>\n`;
  }
  return `${cleanBase}\n</urlset>\n`;
}

function syncSitemap() {
  try {
    const xml = generateDynamicSitemapXml();
    if (fs.existsSync(path.resolve(__dirname, '../build'))) {
      fs.writeFileSync(SITEMAP_BUILD, xml, 'utf8');
    }
  } catch (err) {
    console.error('Error syncing sitemap:', err.message);
  }
}

// -------------------------------------------------------------
// ADMIN AUTHENTICATION
// -------------------------------------------------------------

function readAdminsRaw() {
  try {
    if (!fs.existsSync(ADMIN_FILE)) return [];
    const content = fs.readFileSync(ADMIN_FILE, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

function verifyPassword(password, hash, salt) {
  const verifyHash = crypto.scryptSync(password, salt, 64).toString('hex');
  const bufA = Buffer.from(hash, 'hex');
  const bufB = Buffer.from(verifyHash, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function createOrUpdateAdmin(username, password) {
  if (!username || !password || password.length < 8) {
    throw new Error('Username and password (min 8 characters) are required.');
  }

  const cleanUser = String(username).trim().toLowerCase();
  const admins = readAdminsRaw();
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(password, salt);
  const now = new Date().toISOString();

  const idx = admins.findIndex(a => a.username.toLowerCase() === cleanUser);
  const adminObj = {
    id: idx !== -1 ? admins[idx].id : `admin_${Date.now()}`,
    username: cleanUser,
    passwordHash,
    salt,
    createdAt: idx !== -1 ? admins[idx].createdAt : now,
    updatedAt: now
  };

  if (idx !== -1) {
    admins[idx] = adminObj;
  } else {
    admins.push(adminObj);
  }

  writeJsonAtomic(ADMIN_FILE, admins);
  return { id: adminObj.id, username: adminObj.username };
}

function verifyAdminCredentials(username, password) {
  if (!username || !password) return null;
  const cleanUser = String(username).trim().toLowerCase();
  const admins = readAdminsRaw();
  const admin = admins.find(a => a.username.toLowerCase() === cleanUser);
  if (!admin) return null;

  const valid = verifyPassword(password, admin.passwordHash, admin.salt);
  if (!valid) return null;
  return { id: admin.id, username: admin.username };
}

// Stateless HMAC-SHA256 Token
function signToken(payload, expiresInMs = 24 * 60 * 60 * 1000) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({
    ...payload,
    exp: Date.now() + expiresInMs,
    iat: Date.now()
  })).toString('base64url');

  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${body}`)
    .digest('base64url');

  return `${header}.${body}.${signature}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts;

  const expectedSig = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${body}`)
    .digest('base64url');

  const bufA = Buffer.from(signature);
  const bufB = Buffer.from(expectedSig);
  if (bufA.length !== bufB.length || !crypto.timingSafeEqual(bufA, bufB)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) {
      return null; // Expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}

// In-memory rate limiting for login attempts
const loginAttempts = new Map(); // ip -> { count, firstAttempt, lockedUntil }

function checkRateLimit(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record) return { allowed: true, remaining: 5 };

  if (record.lockedUntil && now < record.lockedUntil) {
    const waitSeconds = Math.ceil((record.lockedUntil - now) / 1000);
    return {
      allowed: false,
      waitMinutes: Math.ceil(waitSeconds / 60),
      message: `Too many failed attempts. Try again in ${Math.ceil(waitSeconds / 60)} minute(s).`
    };
  }

  // Reset window after 15 minutes
  if (now - record.firstAttempt > 15 * 60 * 1000) {
    loginAttempts.delete(ip);
    return { allowed: true, remaining: 5 };
  }

  const remaining = Math.max(0, 5 - record.count);
  return { allowed: remaining > 0, remaining };
}

function recordLoginResult(ip, success) {
  const now = Date.now();
  if (success) {
    loginAttempts.delete(ip);
    return;
  }

  let record = loginAttempts.get(ip);
  if (!record || now - record.firstAttempt > 15 * 60 * 1000) {
    record = { count: 1, firstAttempt: now, lockedUntil: null };
  } else {
    record.count++;
  }

  if (record.count >= 5) {
    record.lockedUntil = now + 15 * 60 * 1000; // 15 min lock
  }

  loginAttempts.set(ip, record);
}

// -------------------------------------------------------------
// SSR HTML META INJECTION
// -------------------------------------------------------------

function escapeHtml(str) {
  return String(str || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function injectJobPrerenderMeta(html, job) {
  const CANONICAL_ORIGIN = 'https://www.vrmaitechnology.com';
  const jobUrl = `${CANONICAL_ORIGIN}/careers/${job.slug}`;
  const jobTitle = `${job.title} | Careers | VRM AI Technology`;
  const metaDesc = (job.shortDescription || `${job.title} opening at VRM AI Technology in ${job.location}. Apply today.`).slice(0, 155);

  const employmentTypeSchema = job.employmentType === 'Full-time' ? 'FULL_TIME' :
                               job.employmentType === 'Internship' ? 'INTERN' : 'CONTRACTOR';

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.shortDescription || job.title,
    datePosted: (job.postedAt || job.createdAt || new Date().toISOString()).slice(0, 10),
    validThrough: (job.validThrough || new Date(Date.now() + 90 * 86400000).toISOString()).slice(0, 10),
    employmentType: employmentTypeSchema,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'VRM AI Technology',
      sameAs: CANONICAL_ORIGIN,
      logo: `${CANONICAL_ORIGIN}/assets/images/logo/logo-header.webp`
    },
    jobLocation: job.location === 'Remote' ? undefined : {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location === 'Bengaluru' ? 'Bengaluru' : 'Madurai',
        addressRegion: job.location === 'Bengaluru' ? 'Karnataka' : 'Tamil Nadu',
        addressCountry: 'IN'
      }
    },
    applicantLocationRequirements: job.location === 'Remote' ? {
      '@type': 'Country',
      name: 'India'
    } : undefined,
    jobLocationType: job.location === 'Remote' ? 'TELECOMMUTE' : undefined,
    experienceRequirements: job.experience || undefined,
    occupationalCategory: job.department || undefined
  };

  let modified = html;

  // Replace Title
  modified = modified.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${escapeHtml(jobTitle)}</title>`);

  // Replace Description
  const descTag = `<meta name="description" content="${escapeHtml(metaDesc)}" />`;
  if (/<meta[^>]*name=["']description["'][^>]*>/i.test(modified)) {
    modified = modified.replace(/<meta[^>]*name=["']description["'][^>]*>/i, descTag);
  } else {
    modified = modified.replace('</head>', `  ${descTag}\n</head>`);
  }

  // Canonical
  const canonTag = `<link rel="canonical" href="${jobUrl}" />`;
  if (/<link[^>]*rel=["']canonical["'][^>]*>/i.test(modified)) {
    modified = modified.replace(/<link[^>]*rel=["']canonical["'][^>]*>/i, canonTag);
  } else {
    modified = modified.replace('</head>', `  ${canonTag}\n</head>`);
  }

  // Inject Schema
  const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jobPostingSchema, null, 2)}\n</script>`;
  modified = modified.replace('</head>', `  ${schemaScript}\n</head>`);

  return modified;
}

module.exports = {
  getJobs,
  getJobBySlug,
  getJobById,
  saveJob,
  updateJobStatus,
  deleteJob,
  generateDynamicSitemapXml,
  syncSitemap,
  createOrUpdateAdmin,
  verifyAdminCredentials,
  signToken,
  verifyToken,
  checkRateLimit,
  recordLoginResult,
  injectJobPrerenderMeta
};

