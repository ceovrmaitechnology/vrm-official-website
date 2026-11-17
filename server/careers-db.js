const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const DATA_DIR = path.resolve(__dirname, 'data');
const JOBS_FILE = path.join(DATA_DIR, 'jobs.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');
const APPLICATIONS_FILE = path.join(DATA_DIR, 'applications.json');
const GALLERY_FILE = path.join(DATA_DIR, 'gallery.json');
const ACTIVITY_FILE = path.join(DATA_DIR, 'activity.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const SECRET_FILE = path.join(DATA_DIR, '.jwt_secret');

const UPLOADS_DIR = path.resolve(__dirname, 'uploads');
const RESUMES_DIR = path.join(UPLOADS_DIR, 'resumes');
const GALLERY_DIR = path.join(UPLOADS_DIR, 'gallery');
const GALLERY_THUMBS_DIR = path.join(GALLERY_DIR, 'thumbs');

const SITEMAP_PUBLIC = path.resolve(__dirname, '../public/sitemap.xml');
const SITEMAP_BUILD = path.resolve(__dirname, '../build/sitemap.xml');

// Ensure data directory and uploads exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(RESUMES_DIR)) {
  fs.mkdirSync(RESUMES_DIR, { recursive: true });
}
if (!fs.existsSync(GALLERY_DIR)) {
  fs.mkdirSync(GALLERY_DIR, { recursive: true });
}
if (!fs.existsSync(GALLERY_THUMBS_DIR)) {
  fs.mkdirSync(GALLERY_THUMBS_DIR, { recursive: true });
}

// Ensure jobs.json exists
if (!fs.existsSync(JOBS_FILE)) {
  fs.writeFileSync(JOBS_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Ensure applications.json exists
if (!fs.existsSync(APPLICATIONS_FILE)) {
  fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Ensure gallery.json exists
if (!fs.existsSync(GALLERY_FILE)) {
  fs.writeFileSync(GALLERY_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Ensure activity.json exists
if (!fs.existsSync(ACTIVITY_FILE)) {
  fs.writeFileSync(ACTIVITY_FILE, JSON.stringify([], null, 2), 'utf8');
}

const DEFAULT_SETTINGS = {
  notificationEmails: ['contactus@vrmaitechnology.com'],
  departments: [
    'Engineering',
    'AI & Machine Learning',
    'Product & Design',
    'Marketing & Sales',
    'Operations',
    'Human Resources',
    'Customer Success'
  ],
  locations: ['Bengaluru', 'Madurai', 'Remote', 'Hybrid'],
  jobTypes: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  showGallerySection: true,
  acceptApplications: true,
  updatedAt: new Date().toISOString()
};

// Ensure settings.json exists
if (!fs.existsSync(SETTINGS_FILE)) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2), 'utf8');
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

  let cleanBase = baseContent.replace(/<\/urlset>[\s\S]*$/i, '').trim();
  if (!cleanBase) {
    cleanBase = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  }

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
// ADMIN AUTHENTICATION & MANAGEMENT
// -------------------------------------------------------------

function readAdminsRaw() {
  try {
    if (!fs.existsSync(ADMIN_FILE)) return [];
    const content = fs.readFileSync(ADMIN_FILE, 'utf8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];

    // Normalize admin records & backward compatibility
    return parsed.map((a, idx) => ({
      id: a.id || `admin_${Date.now()}_${idx}`,
      username: String(a.username || '').trim().toLowerCase(),
      displayName: String(a.displayName || a.username || 'Admin User').trim(),
      email: String(a.email || 'contactus@vrmaitechnology.com').trim().toLowerCase(),
      role: a.role === 'admin' ? 'admin' : 'superadmin', // Existing users become superadmin!
      active: a.active !== false,
      forcePasswordChange: !!a.forcePasswordChange,
      tokenVersion: typeof a.tokenVersion === 'number' ? a.tokenVersion : 1,
      passwordHash: a.passwordHash,
      salt: a.salt,
      resetTokenHash: a.resetTokenHash || null,
      resetTokenExpires: a.resetTokenExpires || null,
      createdAt: a.createdAt || new Date().toISOString(),
      updatedAt: a.updatedAt || new Date().toISOString()
    }));
  } catch (e) {
    return [];
  }
}

function sanitizeAdmin(admin) {
  if (!admin) return null;
  const { passwordHash, salt, resetTokenHash, resetTokenExpires, ...safe } = admin;
  return safe;
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

function verifyPassword(password, hash, salt) {
  try {
    const verifyHash = crypto.scryptSync(password, salt, 64).toString('hex');
    const bufA = Buffer.from(hash, 'hex');
    const bufB = Buffer.from(verifyHash, 'hex');
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch (e) {
    return false;
  }
}

function generateTempPassword(length = 14) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
  const bytes = crypto.randomBytes(length);
  let pass = '';
  for (let i = 0; i < length; i++) {
    pass += chars[bytes[i] % chars.length];
  }
  return pass;
}

function getAdminUsers() {
  const admins = readAdminsRaw();
  return admins.map(sanitizeAdmin);
}

function getAdminById(id) {
  if (!id) return null;
  const admins = readAdminsRaw();
  const admin = admins.find(a => String(a.id) === String(id));
  return admin ? sanitizeAdmin(admin) : null;
}

function getAdminByUsernameOrEmail(identifier) {
  if (!identifier) return null;
  const clean = String(identifier).trim().toLowerCase();
  const admins = readAdminsRaw();
  return admins.find(a => a.username.toLowerCase() === clean || a.email.toLowerCase() === clean) || null;
}

function createOrUpdateAdmin(username, password, role = 'superadmin', email = null, displayName = null) {
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
    id: idx !== -1 ? admins[idx].id : `admin_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    username: cleanUser,
    displayName: displayName ? String(displayName).trim() : (idx !== -1 ? admins[idx].displayName : cleanUser),
    email: email ? String(email).trim().toLowerCase() : (idx !== -1 ? admins[idx].email : 'contactus@vrmaitechnology.com'),
    role: role === 'admin' ? 'admin' : 'superadmin',
    active: true,
    forcePasswordChange: false,
    tokenVersion: idx !== -1 ? (admins[idx].tokenVersion || 1) + 1 : 1,
    passwordHash,
    salt,
    resetTokenHash: null,
    resetTokenExpires: null,
    createdAt: idx !== -1 ? admins[idx].createdAt : now,
    updatedAt: now
  };

  if (idx !== -1) {
    admins[idx] = adminObj;
  } else {
    admins.push(adminObj);
  }

  writeJsonAtomic(ADMIN_FILE, admins);
  return sanitizeAdmin(adminObj);
}

function createAdminUser({ username, displayName, email, role = 'admin', customPassword = null }) {
  if (!username || !username.trim()) {
    throw new Error('Username is required.');
  }
  const cleanUsername = String(username).toLowerCase().trim().replace(/[^a-z0-9_.-]/g, '');
  if (cleanUsername.length < 3) {
    throw new Error('Username must be at least 3 characters (letters, numbers, dots, underscores, dashes).');
  }

  const cleanEmail = String(email || '').toLowerCase().trim();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    throw new Error('A valid email address is required.');
  }

  const cleanRole = role === 'superadmin' ? 'superadmin' : 'admin';
  const admins = readAdminsRaw();

  if (admins.some(a => a.username.toLowerCase() === cleanUsername)) {
    throw new Error(`Admin with username "${cleanUsername}" already exists.`);
  }
  if (admins.some(a => a.email && a.email.toLowerCase() === cleanEmail)) {
    throw new Error(`Admin with email "${cleanEmail}" already exists.`);
  }

  const tempPassword = (customPassword && customPassword.length >= 12) ? customPassword : generateTempPassword(14);
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(tempPassword, salt);
  const now = new Date().toISOString();

  const newAdmin = {
    id: `admin_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    username: cleanUsername,
    displayName: String(displayName || cleanUsername).trim(),
    email: cleanEmail,
    role: cleanRole,
    active: true,
    forcePasswordChange: true, // Forces change on first login
    tokenVersion: 1,
    passwordHash,
    salt,
    resetTokenHash: null,
    resetTokenExpires: null,
    createdAt: now,
    updatedAt: now
  };

  admins.push(newAdmin);
  writeJsonAtomic(ADMIN_FILE, admins);

  return {
    user: sanitizeAdmin(newAdmin),
    tempPassword
  };
}

function updateAdminUser(id, updates = {}, currentUserId = null) {
  const admins = readAdminsRaw();
  const idx = admins.findIndex(a => String(a.id) === String(id));
  if (idx === -1) throw new Error(`Admin user with id ${id} not found.`);

  const admin = { ...admins[idx] };

  // Safety: Prevent disabling or demoting the last active superadmin
  if (admin.role === 'superadmin') {
    const activeOtherSuperadmins = admins.filter(a => a.role === 'superadmin' && a.active && String(a.id) !== String(id));
    if (activeOtherSuperadmins.length === 0) {
      if (updates.active === false) {
        throw new Error('Cannot disable the only active superadmin account.');
      }
      if (updates.role && updates.role !== 'superadmin') {
        throw new Error('Cannot demote the only active superadmin.');
      }
    }
  }

  // Safety: Admin cannot disable themselves
  if (currentUserId && String(id) === String(currentUserId) && updates.active === false) {
    throw new Error('You cannot disable your own admin account.');
  }

  if (updates.displayName !== undefined) {
    admin.displayName = String(updates.displayName).trim() || admin.username;
  }
  if (updates.email !== undefined) {
    const cleanEmail = String(updates.email).toLowerCase().trim();
    if (cleanEmail && !cleanEmail.includes('@')) {
      throw new Error('Invalid email address format.');
    }
    if (cleanEmail && admins.some(a => String(a.id) !== String(id) && a.email.toLowerCase() === cleanEmail)) {
      throw new Error(`Email "${cleanEmail}" is already in use by another admin.`);
    }
    admin.email = cleanEmail;
  }
  if (updates.role !== undefined && ['superadmin', 'admin'].includes(updates.role)) {
    admin.role = updates.role;
  }
  if (updates.active !== undefined) {
    admin.active = !!updates.active;
    if (!admin.active) {
      admin.tokenVersion = (admin.tokenVersion || 1) + 1; // Invalidate any active session
    }
  }

  admin.updatedAt = new Date().toISOString();
  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);

  return sanitizeAdmin(admin);
}

function bumpTokenVersion(userId) {
  const admins = readAdminsRaw();
  const idx = admins.findIndex(a => String(a.id) === String(userId));
  if (idx === -1) throw new Error('User not found.');

  const admin = admins[idx];
  admin.tokenVersion = (admin.tokenVersion || 1) + 1;
  admin.updatedAt = new Date().toISOString();
  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);
  return sanitizeAdmin(admin);
}

function updateAdminProfile(userId, { displayName, email }) {
  const admins = readAdminsRaw();
  const idx = admins.findIndex(a => String(a.id) === String(userId));
  if (idx === -1) throw new Error('User not found.');

  const admin = admins[idx];
  if (displayName !== undefined) {
    admin.displayName = String(displayName).trim() || admin.username;
  }
  if (email !== undefined) {
    const cleanEmail = String(email).toLowerCase().trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error('Valid email address is required.');
    }
    if (admins.some(a => String(a.id) !== String(userId) && a.email.toLowerCase() === cleanEmail)) {
      throw new Error(`Email "${cleanEmail}" is already used by another admin account.`);
    }
    admin.email = cleanEmail;
  }
  admin.updatedAt = new Date().toISOString();
  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);
  return sanitizeAdmin(admin);
}

function deleteAdminUser(id, currentUserId = null) {
  const admins = readAdminsRaw();
  const admin = admins.find(a => String(a.id) === String(id));
  if (!admin) throw new Error(`Admin user with id ${id} not found.`);

  if (currentUserId && String(id) === String(currentUserId)) {
    throw new Error('You cannot delete your own admin account.');
  }

  if (admin.role === 'superadmin') {
    const otherSuperadmins = admins.filter(a => a.role === 'superadmin' && String(a.id) !== String(id));
    if (otherSuperadmins.length === 0) {
      throw new Error('Cannot delete the last superadmin account.');
    }
  }

  const remaining = admins.filter(a => String(a.id) !== String(id));
  writeJsonAtomic(ADMIN_FILE, remaining);
  return true;
}

function changeAdminPassword(userId, currentPassword, newPassword) {
  if (!newPassword || newPassword.length < 12) {
    throw new Error('New password must be at least 12 characters.');
  }

  const admins = readAdminsRaw();
  const idx = admins.findIndex(a => String(a.id) === String(userId));
  if (idx === -1) throw new Error('User not found.');

  const admin = admins[idx];
  if (!admin.active) throw new Error('Account is disabled.');

  // If forcePasswordChange is true, allow setting new password directly; otherwise verify current password
  if (currentPassword) {
    const valid = verifyPassword(currentPassword, admin.passwordHash, admin.salt);
    if (!valid) throw new Error('Current password is incorrect.');
  } else if (!admin.forcePasswordChange) {
    throw new Error('Current password is required.');
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(newPassword, salt);
  const now = new Date().toISOString();

  admin.passwordHash = passwordHash;
  admin.salt = salt;
  admin.forcePasswordChange = false;
  admin.tokenVersion = (admin.tokenVersion || 1) + 1; // Invalidate all prior sessions!
  admin.resetTokenHash = null;
  admin.resetTokenExpires = null;
  admin.updatedAt = now;

  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);

  return sanitizeAdmin(admin);
}

function superadminResetPassword(adminId, customTempPassword = null) {
  const admins = readAdminsRaw();
  const idx = admins.findIndex(a => String(a.id) === String(adminId));
  if (idx === -1) throw new Error('Admin not found.');

  const admin = admins[idx];
  const tempPassword = (customTempPassword && customTempPassword.length >= 12) ? customTempPassword : generateTempPassword(14);
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(tempPassword, salt);

  admin.passwordHash = passwordHash;
  admin.salt = salt;
  admin.forcePasswordChange = true;
  admin.tokenVersion = (admin.tokenVersion || 1) + 1; // Invalidate sessions
  admin.resetTokenHash = null;
  admin.resetTokenExpires = null;
  admin.updatedAt = new Date().toISOString();

  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);

  return {
    user: sanitizeAdmin(admin),
    tempPassword
  };
}

function requestPasswordReset(identifier) {
  if (!identifier || typeof identifier !== 'string') return null;
  const clean = identifier.trim().toLowerCase();
  const admins = readAdminsRaw();
  const admin = admins.find(a => a.username.toLowerCase() === clean || (a.email && a.email.toLowerCase() === clean));

  if (!admin || !admin.active) {
    return null;
  }

  const rawToken = crypto.randomBytes(32).toString('hex');
  const resetTokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
  const resetTokenExpires = Date.now() + 30 * 60 * 1000; // 30 minutes

  admin.resetTokenHash = resetTokenHash;
  admin.resetTokenExpires = resetTokenExpires;
  admin.updatedAt = new Date().toISOString();

  const idx = admins.findIndex(a => String(a.id) === String(admin.id));
  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);

  return {
    email: admin.email,
    displayName: admin.displayName,
    username: admin.username,
    token: rawToken
  };
}

function completePasswordReset(token, newPassword) {
  if (!token || typeof token !== 'string') {
    throw new Error('Reset token is required.');
  }
  if (!newPassword || newPassword.length < 12) {
    throw new Error('New password must be at least 12 characters.');
  }

  const tokenHash = crypto.createHash('sha256').update(token.trim()).digest('hex');
  const admins = readAdminsRaw();
  const now = Date.now();

  const idx = admins.findIndex(a => a.resetTokenHash === tokenHash && a.resetTokenExpires && a.resetTokenExpires > now);
  if (idx === -1) {
    throw new Error('Invalid or expired password reset link. Please request a new one.');
  }

  const admin = admins[idx];
  if (!admin.active) {
    throw new Error('This account has been disabled. Please contact an administrator.');
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(newPassword, salt);

  admin.passwordHash = passwordHash;
  admin.salt = salt;
  admin.forcePasswordChange = false;
  admin.tokenVersion = (admin.tokenVersion || 1) + 1; // Invalidate all prior sessions
  admin.resetTokenHash = null;
  admin.resetTokenExpires = null;
  admin.updatedAt = new Date().toISOString();

  admins[idx] = admin;
  writeJsonAtomic(ADMIN_FILE, admins);

  return sanitizeAdmin(admin);
}

function verifyAdminCredentials(identifier, password) {
  if (!identifier || !password) return null;
  const clean = String(identifier).trim().toLowerCase();
  const admins = readAdminsRaw();
  const admin = admins.find(a => a.username.toLowerCase() === clean || (a.email && a.email.toLowerCase() === clean));
  if (!admin) return null;

  if (admin.active === false) {
    return { disabled: true };
  }

  const valid = verifyPassword(password, admin.passwordHash, admin.salt);
  if (!valid) return null;

  return sanitizeAdmin(admin);
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

    // Verify user exists and is active, and session version matches
    const admins = readAdminsRaw();
    const admin = admins.find(a => String(a.id) === String(payload.id) || a.username.toLowerCase() === (payload.username || '').toLowerCase());
    if (!admin || admin.active === false) {
      return null;
    }

    if (payload.tokenVersion && admin.tokenVersion && payload.tokenVersion !== admin.tokenVersion) {
      return null; // Session invalidated by password change
    }

    return sanitizeAdmin(admin);
  } catch (e) {
    return null;
  }
}

// In-memory rate limiting for login attempts (by IP and by identifier)
const loginAttempts = new Map(); // key -> { count, firstAttempt, lockedUntil }

function checkRateLimit(key) {
  const now = Date.now();
  const record = loginAttempts.get(key);
  if (!record) return { allowed: true, remaining: 5 };

  if (record.lockedUntil && now < record.lockedUntil) {
    const waitSeconds = Math.ceil((record.lockedUntil - now) / 1000);
    return {
      allowed: false,
      waitMinutes: Math.ceil(waitSeconds / 60),
      message: `Too many failed login attempts. Locked for ${Math.ceil(waitSeconds / 60)} minute(s).`
    };
  }

  // Reset window after 15 minutes
  if (now - record.firstAttempt > 15 * 60 * 1000) {
    loginAttempts.delete(key);
    return { allowed: true, remaining: 5 };
  }

  const remaining = Math.max(0, 5 - record.count);
  return { allowed: remaining > 0, remaining };
}

function recordLoginResult(key, success) {
  const now = Date.now();
  if (success) {
    loginAttempts.delete(key);
    return;
  }

  let record = loginAttempts.get(key);
  if (!record || now - record.firstAttempt > 15 * 60 * 1000) {
    record = { count: 1, firstAttempt: now, lockedUntil: null };
  } else {
    record.count++;
  }

  if (record.count >= 5) {
    record.lockedUntil = now + 15 * 60 * 1000; // 15 min lock
  }

  loginAttempts.set(key, record);
}

// -------------------------------------------------------------
// GALLERY REPOSITORY
// -------------------------------------------------------------

function readGalleryRaw() {
  try {
    if (!fs.existsSync(GALLERY_FILE)) {
      writeJsonAtomic(GALLERY_FILE, []);
      return [];
    }
    const content = fs.readFileSync(GALLERY_FILE, 'utf8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];

    let modified = false;
    const items = parsed.map(item => {
      let changed = false;
      if ((!item.fileSize || typeof item.fileSize !== 'number') && item.fileName) {
        const mainPath = path.join(GALLERY_DIR, item.fileName);
        if (fs.existsSync(mainPath)) {
          try {
            item.fileSize = fs.statSync(mainPath).size;
            changed = true;
          } catch (_) {}
        }
      }
      if (!item.width || !item.height) {
        item.width = item.width || 1600;
        item.height = item.height || 1067;
        changed = true;
      }
      if (changed) modified = true;
      return item;
    });

    if (modified) {
      try { writeJsonAtomic(GALLERY_FILE, items); } catch (_) {}
    }
    return items;
  } catch (err) {
    console.error('Error reading gallery file:', err.message);
    return [];
  }
}

function getGallery(includeHidden = false) {
  const all = readGalleryRaw();
  const filtered = includeHidden ? all : all.filter(g => g.status === 'published');
  return filtered.sort((a, b) => {
    const orderA = typeof a.order === 'number' ? a.order : 0;
    const orderB = typeof b.order === 'number' ? b.order : 0;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.eventDate || b.createdAt || 0) - new Date(a.eventDate || a.createdAt || 0);
  });
}

function getGalleryItemById(id) {
  if (!id) return null;
  const all = readGalleryRaw();
  return all.find(g => String(g.id) === String(id)) || null;
}

async function processAndSaveGalleryImage({ fileBuffer, originalName, caption, category, eventDate, altText, status }) {
  if (!fileBuffer || !Buffer.isBuffer(fileBuffer)) {
    throw new Error('Valid image file buffer is required.');
  }

  let metadata;
  try {
    metadata = await sharp(fileBuffer).metadata();
  } catch (err) {
    throw new Error('Unsupported or corrupted image file.');
  }

  const validFormats = ['jpeg', 'jpg', 'png', 'webp'];
  if (!metadata.format || !validFormats.includes(metadata.format.toLowerCase())) {
    throw new Error(`Unsupported image format: ${metadata.format}. Only JPG, PNG, and WebP are allowed.`);
  }

  const baseFileName = `gallery_${Date.now()}_${crypto.randomBytes(4).toString('hex')}.webp`;
  const mainFilePath = path.join(GALLERY_DIR, baseFileName);
  const thumbFilePath = path.join(GALLERY_THUMBS_DIR, baseFileName);

  // Generate web-optimized 1600px max width image (rotate() auto-orients and strips EXIF/GPS)
  const mainImageBuffer = await sharp(fileBuffer)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();

  const mainMeta = await sharp(mainImageBuffer).metadata();
  fs.writeFileSync(mainFilePath, mainImageBuffer);

  // Generate 600px thumbnail
  const thumbImageBuffer = await sharp(fileBuffer)
    .rotate()
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  fs.writeFileSync(thumbFilePath, thumbImageBuffer);

  const allGallery = readGalleryRaw();
  const validCategories = ['Fun Friday', 'Festival', 'Team Event', 'Office'];
  const cleanCategory = validCategories.includes(category) ? category : 'Team Event';
  const cleanStatus = status === 'hidden' ? 'hidden' : 'published';

  const newItem = {
    id: `gal_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    caption: String(caption || '').trim(),
    category: cleanCategory,
    eventDate: eventDate || new Date().toISOString().slice(0, 10),
    altText: String(altText || caption || 'Life at VRM AI Technology').trim(),
    status: cleanStatus,
    imagePath: `/uploads/gallery/${baseFileName}`,
    thumbPath: `/uploads/gallery/thumbs/${baseFileName}`,
    fileName: baseFileName,
    order: allGallery.length,
    fileSize: mainImageBuffer.length,
    width: mainMeta.width || 1600,
    height: mainMeta.height || 1067,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const updatedGallery = [newItem, ...allGallery];
  updatedGallery.forEach((item, idx) => {
    item.order = idx;
  });
  writeJsonAtomic(GALLERY_FILE, updatedGallery);
  return newItem;
}

function updateGalleryItem(id, updates = {}) {
  const all = readGalleryRaw();
  const idx = all.findIndex(g => String(g.id) === String(id));
  if (idx === -1) throw new Error(`Gallery item with id ${id} not found.`);

  const item = { ...all[idx] };
  if (updates.caption !== undefined) item.caption = String(updates.caption).trim();
  if (updates.altText !== undefined) item.altText = String(updates.altText).trim();
  if (updates.eventDate !== undefined) item.eventDate = updates.eventDate;
  if (updates.category !== undefined) {
    const valid = ['Fun Friday', 'Festival', 'Team Event', 'Office'];
    if (valid.includes(updates.category)) item.category = updates.category;
  }
  if (updates.status !== undefined) {
    if (['published', 'hidden'].includes(updates.status)) item.status = updates.status;
  }

  // Alt text is mandatory before a photo can be published
  if (item.status === 'published' && (!item.altText || !item.altText.trim())) {
    throw new Error('Alt text is mandatory before a photo can be published.');
  }

  item.updatedAt = new Date().toISOString();

  all[idx] = item;
  writeJsonAtomic(GALLERY_FILE, all);
  return item;
}

async function replaceGalleryImage(id, { fileBuffer, originalName }) {
  if (!fileBuffer || !Buffer.isBuffer(fileBuffer)) {
    throw new Error('Valid image file buffer is required.');
  }

  let metadata;
  try {
    metadata = await sharp(fileBuffer).metadata();
  } catch (err) {
    throw new Error('Unsupported or corrupted image file.');
  }

  const validFormats = ['jpeg', 'jpg', 'png', 'webp'];
  if (!metadata.format || !validFormats.includes(metadata.format.toLowerCase())) {
    throw new Error(`Unsupported image format: ${metadata.format}. Only JPG, PNG, and WebP are allowed.`);
  }

  const all = readGalleryRaw();
  const idx = all.findIndex(g => String(g.id) === String(id));
  if (idx === -1) throw new Error(`Gallery item with id ${id} not found.`);

  const item = { ...all[idx] };
  const baseFileName = item.fileName || `gallery_${Date.now()}_${crypto.randomBytes(4).toString('hex')}.webp`;
  const mainFilePath = path.join(GALLERY_DIR, baseFileName);
  const thumbFilePath = path.join(GALLERY_THUMBS_DIR, baseFileName);

  const mainImageBuffer = await sharp(fileBuffer)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();

  const mainMeta = await sharp(mainImageBuffer).metadata();
  fs.writeFileSync(mainFilePath, mainImageBuffer);

  const thumbImageBuffer = await sharp(fileBuffer)
    .rotate()
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  fs.writeFileSync(thumbFilePath, thumbImageBuffer);

  item.fileName = baseFileName;
  item.imagePath = `/uploads/gallery/${baseFileName}`;
  item.thumbPath = `/uploads/gallery/thumbs/${baseFileName}`;
  item.fileSize = mainImageBuffer.length;
  item.width = mainMeta.width || 1600;
  item.height = mainMeta.height || 1067;
  item.updatedAt = new Date().toISOString();

  all[idx] = item;
  writeJsonAtomic(GALLERY_FILE, all);
  return item;
}

function bulkGalleryAction(ids, action) {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error('At least one photo must be selected.');
  }

  const idSet = new Set(ids.map(String));
  const all = readGalleryRaw();

  if (action === 'publish') {
    // Validate that all target photos have non-empty alt text
    for (const item of all) {
      if (idSet.has(String(item.id))) {
        if (!item.altText || !item.altText.trim()) {
          throw new Error(`Cannot publish: Photo "${item.caption || item.id}" has no alt text. Alt text is mandatory.`);
        }
      }
    }
    let affected = 0;
    all.forEach(item => {
      if (idSet.has(String(item.id))) {
        item.status = 'published';
        item.updatedAt = new Date().toISOString();
        affected++;
      }
    });
    writeJsonAtomic(GALLERY_FILE, all);
    return { affected, action: 'publish' };
  } else if (action === 'hide') {
    let affected = 0;
    all.forEach(item => {
      if (idSet.has(String(item.id))) {
        item.status = 'hidden';
        item.updatedAt = new Date().toISOString();
        affected++;
      }
    });
    writeJsonAtomic(GALLERY_FILE, all);
    return { affected, action: 'hide' };
  } else if (action === 'delete') {
    let affected = 0;
    const remaining = [];
    all.forEach(item => {
      if (idSet.has(String(item.id))) {
        if (item.fileName) {
          try {
            const m = path.join(GALLERY_DIR, item.fileName);
            const t = path.join(GALLERY_THUMBS_DIR, item.fileName);
            if (fs.existsSync(m)) fs.unlinkSync(m);
            if (fs.existsSync(t)) fs.unlinkSync(t);
          } catch (_) {}
        }
        affected++;
      } else {
        remaining.push(item);
      }
    });
    remaining.forEach((g, idx) => { g.order = idx; });
    writeJsonAtomic(GALLERY_FILE, remaining);
    return { affected, action: 'delete' };
  } else {
    throw new Error(`Invalid bulk action: ${action}`);
  }
}

function reorderGallery(orderedIds) {
  if (!Array.isArray(orderedIds)) throw new Error('orderedIds must be an array of IDs');
  const all = readGalleryRaw();
  const idToItem = new Map(all.map(item => [String(item.id), item]));

  const reordered = [];
  for (const id of orderedIds) {
    const item = idToItem.get(String(id));
    if (item) {
      reordered.push(item);
      idToItem.delete(String(id));
    }
  }
  for (const item of idToItem.values()) {
    reordered.push(item);
  }

  reordered.forEach((item, idx) => {
    item.order = idx;
    item.updatedAt = new Date().toISOString();
  });

  writeJsonAtomic(GALLERY_FILE, reordered);
  return reordered;
}

function deleteGalleryItem(id) {
  const all = readGalleryRaw();
  const item = all.find(g => String(g.id) === String(id));
  if (!item) throw new Error(`Gallery item with id ${id} not found.`);

  if (item.fileName) {
    const mainPath = path.join(GALLERY_DIR, item.fileName);
    const thumbPath = path.join(GALLERY_THUMBS_DIR, item.fileName);
    if (fs.existsSync(mainPath)) {
      try { fs.unlinkSync(mainPath); } catch (e) { console.error('Error deleting main photo:', e.message); }
    }
    if (fs.existsSync(thumbPath)) {
      try { fs.unlinkSync(thumbPath); } catch (e) { console.error('Error deleting thumb photo:', e.message); }
    }
  }

  const remaining = all.filter(g => String(g.id) !== String(id));
  remaining.forEach((g, idx) => { g.order = idx; });
  writeJsonAtomic(GALLERY_FILE, remaining);
  return true;
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

  modified = modified.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${escapeHtml(jobTitle)}</title>`);

  const descTag = `<meta name="description" content="${escapeHtml(metaDesc)}" />`;
  if (/<meta[^>]*name=["']description["'][^>]*>/i.test(modified)) {
    modified = modified.replace(/<meta[^>]*name=["']description["'][^>]*>/i, descTag);
  } else {
    modified = modified.replace('</head>', `  ${descTag}\n</head>`);
  }

  const canonTag = `<link rel="canonical" href="${jobUrl}" />`;
  if (/<link[^>]*rel=["']canonical["'][^>]*>/i.test(modified)) {
    modified = modified.replace(/<link[^>]*rel=["']canonical["'][^>]*>/i, canonTag);
  } else {
    modified = modified.replace('</head>', `  ${canonTag}\n</head>`);
  }

  const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jobPostingSchema, null, 2)}\n</script>`;
  modified = modified.replace('</head>', `  ${schemaScript}\n</head>`);

  return modified;
}

// -------------------------------------------------------------
// APPLICATIONS REPOSITORY
// -------------------------------------------------------------

function readApplicationsRaw() {
  try {
    if (!fs.existsSync(APPLICATIONS_FILE)) {
      writeJsonAtomic(APPLICATIONS_FILE, []);
      return [];
    }
    const content = fs.readFileSync(APPLICATIONS_FILE, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading applications file:', error.message);
    return [];
  }
}

function getApplications() {
  const all = readApplicationsRaw();
  return all.sort((a, b) => new Date(b.appliedAt || 0) - new Date(a.appliedAt || 0));
}

function getApplicationById(id) {
  if (!id) return null;
  const all = readApplicationsRaw();
  return all.find(a => String(a.id) === String(id)) || null;
}

function saveApplication({ fullName, email, phone, experience, position, coverLetter, originalFileName, fileBuffer }) {
  const all = readApplicationsRaw();
  const now = new Date().toISOString();

  let storedFileName = null;
  if (fileBuffer && originalFileName) {
    const rawExt = path.extname(originalFileName).toLowerCase();
    const safeExt = ['.pdf', '.doc', '.docx'].includes(rawExt) ? rawExt : '.pdf';
    storedFileName = `resume_${Date.now()}_${crypto.randomBytes(4).toString('hex')}${safeExt}`;
    const targetPath = path.join(RESUMES_DIR, storedFileName);
    fs.writeFileSync(targetPath, fileBuffer);
  }

  const appRecord = {
    id: `app_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
    fullName: String(fullName || '').trim(),
    email: String(email || '').trim().toLowerCase(),
    phone: String(phone || '').trim(),
    experience: String(experience || '').trim(),
    position: String(position || 'General Application').trim(),
    coverLetter: String(coverLetter || '').trim(),
    originalFileName: originalFileName ? String(originalFileName).replace(/[^\w\s.-]/g, '_') : null,
    storedFileName,
    status: 'new',
    appliedAt: now,
    updatedAt: now
  };

  const updated = [appRecord, ...all];
  writeJsonAtomic(APPLICATIONS_FILE, updated);
  return appRecord;
}

function updateApplicationStatus(id, newStatus) {
  const allowed = ['new', 'reviewed', 'shortlisted', 'rejected'];
  if (!allowed.includes(newStatus)) {
    throw new Error(`Invalid status. Must be one of: ${allowed.join(', ')}`);
  }
  const all = readApplicationsRaw();
  const idx = all.findIndex(a => String(a.id) === String(id));
  if (idx === -1) throw new Error(`Application with id ${id} not found`);

  all[idx].status = newStatus;
  all[idx].updatedAt = new Date().toISOString();
  writeJsonAtomic(APPLICATIONS_FILE, all);
  return all[idx];
}

function deleteApplication(id) {
  const all = readApplicationsRaw();
  const app = all.find(a => String(a.id) === String(id));
  if (!app) throw new Error(`Application with id ${id} not found`);

  if (app.storedFileName) {
    const filePath = path.join(RESUMES_DIR, app.storedFileName);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error('Error deleting resume file:', err.message);
      }
    }
  }

  const filtered = all.filter(a => String(a.id) !== String(id));
  writeJsonAtomic(APPLICATIONS_FILE, filtered);
  return true;
}

function getResumeFilePath(storedFileName) {
  if (!storedFileName) return null;
  const safeBase = path.basename(storedFileName);
  const targetPath = path.join(RESUMES_DIR, safeBase);
  if (fs.existsSync(targetPath)) {
    return targetPath;
  }
  return null;
}

function readActivityRaw() {
  try {
    if (!fs.existsSync(ACTIVITY_FILE)) return [];
    const content = fs.readFileSync(ACTIVITY_FILE, 'utf8');
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;

    // Backfill from actual real jobs, applications, gallery if activity.json is empty
    const backfilled = [];
    const jobs = readJobsRaw();
    jobs.forEach(j => {
      backfilled.push({
        id: `act_init_job_${j.id}`,
        type: 'job',
        text: j.status === 'published' ? `Published job opening "${j.title}"` : `Saved job opening "${j.title}" as draft`,
        admin: 'Admin',
        timestamp: j.postedAt || j.createdAt || new Date().toISOString()
      });
    });
    const apps = readApplicationsRaw();
    apps.forEach(a => {
      backfilled.push({
        id: `act_init_app_${a.id}`,
        type: 'application',
        text: `New application received from ${a.fullName} for ${a.position}`,
        admin: 'Applicant',
        timestamp: a.appliedAt || a.createdAt || new Date().toISOString()
      });
    });
    const gallery = readGalleryRaw();
    gallery.forEach(g => {
      backfilled.push({
        id: `act_init_gal_${g.id}`,
        type: 'photo',
        text: `Uploaded photo "${g.caption || g.altText || 'employee moment'}" to Life at VRM`,
        admin: 'Admin',
        timestamp: g.uploadedAt || g.createdAt || new Date().toISOString()
      });
    });
    backfilled.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    if (backfilled.length > 0) {
      writeJsonAtomic(ACTIVITY_FILE, backfilled.slice(0, 50));
      return backfilled;
    }
    return [];
  } catch (error) {
    console.error('Error reading activity file:', error.message);
    return [];
  }
}

function logActivity({ type = 'info', text, admin = 'Admin' }) {
  try {
    const all = readActivityRaw();
    const entry = {
      id: `act_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
      type: type || 'info',
      text: String(text).trim(),
      admin: String(admin || 'Admin').trim(),
      timestamp: new Date().toISOString()
    };
    const updated = [entry, ...all].slice(0, 50);
    writeJsonAtomic(ACTIVITY_FILE, updated);
    return entry;
  } catch (err) {
    console.error('Error logging activity:', err.message);
    return null;
  }
}

function getActivity(limit = 5) {
  const all = readActivityRaw();
  return all.slice(0, limit);
}

// -------------------------------------------------------------
// SETTINGS REPOSITORY
// -------------------------------------------------------------

function getSettings() {
  try {
    if (!fs.existsSync(SETTINGS_FILE)) {
      writeJsonAtomic(SETTINGS_FILE, DEFAULT_SETTINGS);
      return { ...DEFAULT_SETTINGS };
    }
    const raw = fs.readFileSync(SETTINGS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      notificationEmails: Array.isArray(parsed.notificationEmails) && parsed.notificationEmails.length > 0 ? parsed.notificationEmails : DEFAULT_SETTINGS.notificationEmails,
      departments: Array.isArray(parsed.departments) && parsed.departments.length > 0 ? parsed.departments : DEFAULT_SETTINGS.departments,
      locations: Array.isArray(parsed.locations) && parsed.locations.length > 0 ? parsed.locations : DEFAULT_SETTINGS.locations,
      jobTypes: Array.isArray(parsed.jobTypes) && parsed.jobTypes.length > 0 ? parsed.jobTypes : DEFAULT_SETTINGS.jobTypes,
      showGallerySection: parsed.showGallerySection !== false,
      acceptApplications: parsed.acceptApplications !== false,
      updatedAt: parsed.updatedAt || new Date().toISOString()
    };
  } catch (err) {
    console.error('Error reading settings file:', err.message);
    return { ...DEFAULT_SETTINGS };
  }
}

function updateSettings(updates = {}) {
  const current = getSettings();
  const next = { ...current };

  if (updates.notificationEmails !== undefined) {
    let emails = [];
    if (Array.isArray(updates.notificationEmails)) {
      emails = updates.notificationEmails;
    } else if (typeof updates.notificationEmails === 'string') {
      emails = updates.notificationEmails.split(',').map(s => s.trim());
    }
    const validEmails = emails.map(e => String(e).trim().toLowerCase()).filter(e => e.includes('@'));
    if (validEmails.length === 0) {
      throw new Error('At least one valid notification email address is required.');
    }
    next.notificationEmails = validEmails;
  }

  if (updates.departments !== undefined) {
    if (!Array.isArray(updates.departments) || updates.departments.length === 0) {
      throw new Error('At least one department is required.');
    }
    next.departments = updates.departments.map(d => String(d).trim()).filter(Boolean);
  }

  if (updates.locations !== undefined) {
    if (!Array.isArray(updates.locations) || updates.locations.length === 0) {
      throw new Error('At least one location is required.');
    }
    next.locations = updates.locations.map(l => String(l).trim()).filter(Boolean);
  }

  if (updates.jobTypes !== undefined) {
    if (!Array.isArray(updates.jobTypes) || updates.jobTypes.length === 0) {
      throw new Error('At least one job type is required.');
    }
    next.jobTypes = updates.jobTypes.map(t => String(t).trim()).filter(Boolean);
  }

  if (updates.showGallerySection !== undefined) {
    next.showGallerySection = !!updates.showGallerySection;
  }

  if (updates.acceptApplications !== undefined) {
    next.acceptApplications = !!updates.acceptApplications;
  }

  next.updatedAt = new Date().toISOString();
  writeJsonAtomic(SETTINGS_FILE, next);
  return next;
}

// -------------------------------------------------------------
// CSV EXPORT
// -------------------------------------------------------------

function exportApplicationsCsv() {
  const apps = getApplications();
  const headers = ['Full Name', 'Email', 'Phone', 'Position', 'Experience', 'Status', 'Applied Date'];

  const escapeCsv = (val) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = [headers.map(escapeCsv).join(',')];

  apps.forEach(app => {
    const row = [
      app.fullName || '',
      app.email || '',
      app.phone || '',
      app.position || '',
      app.experience || '',
      app.status || '',
      app.appliedAt || ''
    ];
    rows.push(row.map(escapeCsv).join(','));
  });

  return rows.join('\r\n');
}

// -------------------------------------------------------------
// GA4 CAREER VIEWS (REAL DATA ONLY)
// -------------------------------------------------------------

let ga4ViewsCache = {
  timestamp: 0,
  data: null
};

async function getCareerPageViews() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const credentialsPath = process.env.GA4_CREDENTIALS_JSON || process.env.GA4_KEY_FILE || process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!propertyId || !credentialsPath) {
    return { configured: false, reason: 'GA4_PROPERTY_ID or credentials not configured' };
  }

  const now = Date.now();
  if (ga4ViewsCache.data && (now - ga4ViewsCache.timestamp < 60 * 60 * 1000)) {
    return { configured: true, ...ga4ViewsCache.data, cached: true };
  }

  try {
    let BetaAnalyticsDataClient;
    try {
      const gaModule = require('@google-analytics/data');
      BetaAnalyticsDataClient = gaModule.BetaAnalyticsDataClient;
    } catch (_) {
      return { configured: false, reason: '@google-analytics/data package not installed' };
    }

    const analyticsDataClient = new BetaAnalyticsDataClient({
      keyFilename: path.resolve(credentialsPath)
    });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        { startDate: '30daysAgo', endDate: 'today' }
      ],
      dimensions: [
        { name: 'pagePath' }
      ],
      metrics: [
        { name: 'screenPageViews' }
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: '/careers'
          }
        }
      }
    });

    let totalViews = 0;
    if (response && response.rows) {
      response.rows.forEach(row => {
        const metricVal = row.metricValues && row.metricValues[0]?.value;
        if (metricVal) totalViews += parseInt(metricVal, 10) || 0;
      });
    }

    const result = { totalViews, period: 'Last 30 Days' };
    ga4ViewsCache = { timestamp: now, data: result };
    return { configured: true, ...result };
  } catch (err) {
    console.warn('[GA4] Failed to fetch GA4 report:', err.message);
    return { configured: false, error: err.message };
  }
}

module.exports = {
  getJobs,
  getJobBySlug,
  getJobById,
  saveJob,
  updateJobStatus,
  deleteJob,
  logActivity,
  getActivity,
  generateDynamicSitemapXml,
  syncSitemap,
  readAdminsRaw,
  getAdminUsers,
  getAdminById,
  getAdminByUsernameOrEmail,
  createOrUpdateAdmin,
  createAdminUser,
  updateAdminUser,
  updateAdminProfile,
  bumpTokenVersion,
  deleteAdminUser,
  changeAdminPassword,
  superadminResetPassword,
  requestPasswordReset,
  completePasswordReset,
  verifyAdminCredentials,
  signToken,
  verifyToken,
  checkRateLimit,
  recordLoginResult,
  sanitizeAdmin,
  injectJobPrerenderMeta,
  getApplications,
  getApplicationById,
  saveApplication,
  updateApplicationStatus,
  deleteApplication,
  getResumeFilePath,
  getGallery,
  getGalleryItemById,
  processAndSaveGalleryImage,
  replaceGalleryImage,
  bulkGalleryAction,
  updateGalleryItem,
  reorderGallery,
  deleteGalleryItem,
  getSettings,
  updateSettings,
  exportApplicationsCsv,
  getCareerPageViews
};
