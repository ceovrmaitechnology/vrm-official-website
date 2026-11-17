const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const http = require("http");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // loads .env from project root (works on Windows & Linux)
const careersDb = require("./careers-db");

const app = express();
const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 3000);

app.use(cors({
  exposedHeaders: ["Content-Disposition"]
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
// Security headers (HSTS, CSP)
app.use((req, res, next) => {
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("Content-Security-Policy", "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';");
  next();
});

// 0. 301 Permanent Redirects for renamed products (1-hop, no chain, no trailing slash)
app.use((req, res, next) => {
  const cleanPath = req.path.replace(/\/+$/, "");
  if (cleanPath === "/products/aibuddy") {
    const host = (req.headers.host || "").toLowerCase();
    const isLocal = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("::1");
    const query = req.url.slice(req.path.length);
    const target = isLocal
      ? `/products/sibuddy${query}`
      : `https://www.vrmaitechnology.com/products/sibuddy${query}`;
    return res.redirect(301, target);
  }
  next();
});

// 1. Guaranteed One-hop canonical domain, protocol & trailing-slash redirect (301)
// Enforces:
// http://vrmaitechnology.com/* -> https://www.vrmaitechnology.com/*
// https://vrmaitechnology.com/* -> https://www.vrmaitechnology.com/*
// http://www.vrmaitechnology.com/* -> https://www.vrmaitechnology.com/*
// Any path with a trailing slash (except /) -> same path without it, e.g. /about-us/ -> /about-us
app.use((req, res, next) => {
  const host = (req.headers.host || "").toLowerCase();
  const isLocal = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("::1");
  if (isLocal) return next();

  const isHttps = req.secure || req.headers["x-forwarded-proto"] === "https";
  const isCanonicalHost = host === "www.vrmaitechnology.com";
  const hasTrailingSlash = req.path.length > 1 && req.path.endsWith("/");

  if (!isHttps || !isCanonicalHost || hasTrailingSlash) {
    const cleanPath = hasTrailingSlash ? req.path.replace(/\/+$/, "") : req.path;
    const query = req.url.slice(req.path.length);
    return res.redirect(301, `https://www.vrmaitechnology.com${cleanPath}${query}`);
  }
  next();
});

// Explicit XML/text content-type handlers for sitemap and robots.txt
app.get("/sitemap.xml", (req, res) => {
  try {
    const xml = careersDb.generateDynamicSitemapXml();
    res.header("Content-Type", "application/xml");
    return res.send(xml);
  } catch (err) {
    const sitemapBuild = path.resolve(__dirname, "../build/sitemap.xml");
    const sitemapPublic = path.resolve(__dirname, "../public/sitemap.xml");
    const filePath = fs.existsSync(sitemapBuild) ? sitemapBuild : sitemapPublic;
    res.header("Content-Type", "application/xml");
    return res.sendFile(filePath);
  }
});

app.get("/robots.txt", (req, res) => {
  const robotsBuild = path.resolve(__dirname, "../build/robots.txt");
  const robotsPublic = path.resolve(__dirname, "../public/robots.txt");
  const filePath = fs.existsSync(robotsBuild) ? robotsBuild : robotsPublic;
  res.header("Content-Type", "text/plain");
  res.sendFile(filePath);
});

// Serve pre-rendered HTML for routes cleanly without automatic trailing slash addition
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) return next();
  
  if (req.path === "/" || req.path === "") {
    const indexPath = path.resolve(__dirname, "../build/index.html");
    if (fs.existsSync(indexPath)) return res.sendFile(indexPath);
    return next();
  }

  // Check if build/<cleanPath>/index.html exists for pre-rendered route
  const cleanPath = req.path.replace(/^\/+|\/+$/g, "");
  const prerenderedFile = path.resolve(__dirname, "../build", cleanPath, "index.html");
  if (fs.existsSync(prerenderedFile)) {
    return res.sendFile(prerenderedFile);
  }

  // Dynamic Careers Job Detail Pages (/careers/:slug)
  if (cleanPath.startsWith("careers/") && cleanPath !== "careers") {
    const slug = cleanPath.slice("careers/".length).replace(/\/.*$/, "");
    const job = careersDb.getJobBySlug(slug);
    if (job && job.status !== "draft") {
      const buildIndex = path.resolve(__dirname, "../build/index.html");
      if (fs.existsSync(buildIndex)) {
        const rawHtml = fs.readFileSync(buildIndex, "utf8");
        const injectedHtml = careersDb.injectJobPrerenderMeta(rawHtml, job);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        return res.send(injectedHtml);
      }
    }
  }

  // Admin SPA routes: /admin, /admin/careers, /admin/login
  if (cleanPath === "admin" || cleanPath.startsWith("admin/")) {
    const buildIndex = path.resolve(__dirname, "../build/index.html");
    if (fs.existsSync(buildIndex)) {
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
      return res.sendFile(buildIndex);
    }
  }

  next();
});

// Serve build & public static files
app.use(express.static(path.resolve(__dirname, "../build"), { maxAge: "1d", redirect: false }));
app.use(express.static(path.resolve(__dirname, "../public"), { maxAge: "1d", redirect: false }));
// Serve public gallery uploads (persists on server disk, cached for performance)
app.use("/uploads/gallery", express.static(path.resolve(__dirname, "uploads/gallery"), { maxAge: "30d" }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 },
});

// Photo uploads for Life at VRM Gallery (Max 8 MB, JPG/PNG/WebP)
const galleryUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    const validExts = [".jpg", ".jpeg", ".png", ".webp"];
    const validMimes = ["image/jpeg", "image/png", "image/webp"];
    if (validMimes.includes(file.mimetype) || validExts.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid image format. Only JPG, PNG, and WebP photos are accepted."));
    }
  }
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatFieldLines(fields) {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</p>`)
    .join("");
}

function normalizeEnv(value) {
  if (typeof value !== "string") return value;
  return value.trim().replace(/^"(.*)"$/, "$1");
}

const SMTP_HOST = normalizeEnv(process.env.SMTP_HOST || process.env.SMTPHOST || "smtp.office365.com");
const SMTP_PORT = Number(normalizeEnv(process.env.SMTP_PORT) || 587);
const SMTP_USER = normalizeEnv(process.env.SMTP_USER || process.env.MAIL_USER);
const SMTP_PASS = normalizeEnv(process.env.SMTP_PASS || process.env.MAIL_PASS);
const MAIL_FROM = normalizeEnv(process.env.MAIL_FROM || process.env.SMTP_FROM) || SMTP_USER;
const MAIL_TO = normalizeEnv(process.env.MAIL_TO) || SMTP_USER;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  // Do not crash boot immediately; return explicit 500 on requests.
  console.warn("SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS must be set. Mail routes will fail until configured.");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    // production-safe fix: Hostinger sometimes intercepts SSL or uses self-signed certs for internal routing
    rejectUnauthorized: false,
  },
  // fail fast if Hostinger blocks the port, rather than hanging indefinitely
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

async function sendFormMail({ subject, replyTo, fields, file }) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    throw new Error("Mail server is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and MAIL_TO.");
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">${escapeHtml(subject)}</h2>
      ${formatFieldLines(fields)}
      <p style="margin-top: 16px; color: #666;">
        Sent from VRM AI website form on ${escapeHtml(new Date().toISOString())}
      </p>
    </div>
  `;

  const mailOptions = {
    from: MAIL_FROM,
    to: MAIL_TO,
    subject,
    html,
  };

  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  if (file) {
    mailOptions.attachments = [
      {
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      },
    ];
  }

  await transporter.sendMail(mailOptions);
}

function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error("Mail Error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send email.", 
        error: error.message,
        code: error.code || "UNKNOWN"
      });
    }
  };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mail-api" });
});

// ==============================================================================
// CAREERS & ADMIN API
// ==============================================================================

// Admin Authentication Middleware
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized. Authentication token missing." });
  }
  const admin = careersDb.verifyToken(token);
  if (!admin) {
    return res.status(401).json({ success: false, message: "Unauthorized. Session expired or token invalid." });
  }
  req.admin = admin;
  next();
}

// Superadmin Privilege Middleware
function requireSuperadmin(req, res, next) {
  requireAdmin(req, res, () => {
    if (req.admin.role !== "superadmin") {
      return res.status(403).json({ success: false, message: "Access forbidden. Superadmin privileges required." });
    }
    next();
  });
}

// 1. Public Careers Endpoints (No Auth Required)
app.get("/api/careers/jobs", (req, res) => {
  try {
    const jobs = careersDb.getJobs(false);
    res.json({ success: true, jobs });
  } catch (err) {
    console.error("Error fetching published jobs:", err.message);
    res.status(500).json({ success: false, message: "Failed to retrieve job openings." });
  }
});

app.get("/api/careers/jobs/:slug", (req, res) => {
  try {
    const job = careersDb.getJobBySlug(req.params.slug);
    if (!job || job.status === "draft") {
      return res.status(404).json({ success: false, message: "Job opening not found." });
    }
    if (job.status === "closed") {
      return res.json({
        success: true,
        job: { ...job, closed: true },
        message: "This position has been closed and is no longer accepting applications."
      });
    }
    res.json({ success: true, job });
  } catch (err) {
    console.error("Error fetching job details:", err.message);
    res.status(500).json({ success: false, message: "Failed to retrieve job details." });
  }
});

// 2. Admin Authentication Endpoints
app.post("/api/admin/login", (req, res) => {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "ip";
  const { username = "", password = "" } = req.body || {};
  const identifier = String(username).trim();

  // Rate limit check: per IP and per username/email
  const ipRate = careersDb.checkRateLimit(`ip:${clientIp}`);
  if (!ipRate.allowed) {
    return res.status(429).json({ success: false, message: ipRate.message });
  }
  if (identifier) {
    const userRate = careersDb.checkRateLimit(`user:${identifier.toLowerCase()}`);
    if (!userRate.allowed) {
      return res.status(429).json({ success: false, message: userRate.message });
    }
  }

  if (!identifier || !password) {
    return res.status(400).json({ success: false, message: "Username/email and password are required." });
  }

  const admin = careersDb.verifyAdminCredentials(identifier, password);
  if (!admin) {
    careersDb.recordLoginResult(`ip:${clientIp}`, false);
    careersDb.recordLoginResult(`user:${identifier.toLowerCase()}`, false);
    return res.status(401).json({ success: false, message: "Invalid username or password." });
  }

  if (admin.disabled) {
    return res.status(403).json({ success: false, message: "This account has been disabled. Please contact a superadmin." });
  }

  careersDb.recordLoginResult(`ip:${clientIp}`, true);
  careersDb.recordLoginResult(`user:${identifier.toLowerCase()}`, true);

  const token = careersDb.signToken({
    id: admin.id,
    username: admin.username,
    tokenVersion: admin.tokenVersion
  });

  res.json({
    success: true,
    token,
    user: {
      id: admin.id,
      username: admin.username,
      displayName: admin.displayName,
      email: admin.email,
      role: admin.role,
      forcePasswordChange: !!admin.forcePasswordChange
    }
  });
});

app.get("/api/admin/me", requireAdmin, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.admin.id,
      username: req.admin.username,
      displayName: req.admin.displayName,
      email: req.admin.email,
      role: req.admin.role,
      forcePasswordChange: !!req.admin.forcePasswordChange
    }
  });
});

app.post("/api/admin/change-password", requireAdmin, (req, res) => {
  try {
    const { currentPassword = "", newPassword = "" } = req.body || {};
    if (!newPassword || newPassword.length < 12) {
      return res.status(400).json({ success: false, message: "New password must be at least 12 characters long." });
    }

    const updated = careersDb.changeAdminPassword(req.admin.id, currentPassword, newPassword);
    const newToken = careersDb.signToken({
      id: updated.id,
      username: updated.username,
      tokenVersion: updated.tokenVersion
    });

    res.json({
      success: true,
      message: "Password changed successfully.",
      token: newToken,
      user: updated
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.post("/api/admin/forgot-password", async (req, res) => {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "ip";
  const rate = careersDb.checkRateLimit(`forgot:${clientIp}`);
  if (!rate.allowed) {
    return res.status(429).json({ success: false, message: rate.message });
  }

  const { identifier = "" } = req.body || {};
  if (!identifier.trim()) {
    return res.status(400).json({ success: false, message: "Username or email is required." });
  }

  try {
    const resetReq = careersDb.requestPasswordReset(identifier);
    if (resetReq && resetReq.email) {
      const host = req.get("host") || "www.vrmaitechnology.com";
      const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
      const proto = isLocal ? "http" : "https";
      const resetLink = `${proto}://${host}/admin/reset-password?token=${resetReq.token}`;

      try {
        await sendFormMail({
          subject: "VRM AI Admin | Password Reset Request",
          replyTo: "contactus@vrmaitechnology.com",
          fields: {
            "Admin Account": resetReq.username,
            "Recipient": resetReq.displayName || resetReq.username,
            "Reset Link": `<a href="${resetLink}" style="display:inline-block;padding:10px 20px;background:#0d6efd;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:bold;">Reset Admin Password</a><br><small style="color:#888;">Link URL: ${resetLink}</small>`,
            "Valid For": "30 minutes (Single use only)",
            "Security Notice": "If you did not initiate this request, you can safely ignore this email. Your password has not been changed."
          }
        });
        console.log(`[AUTH] Password reset email sent to ${resetReq.email} for admin "${resetReq.username}"`);
      } catch (mailErr) {
        console.error(`[AUTH ERROR] Could not dispatch reset email: ${mailErr.message}`);
      }
    }
  } catch (err) {
    console.error("[AUTH ERROR] Forgot password processing error:", err.message);
  }

  // Consistent response to prevent user enumeration
  return res.json({
    success: true,
    message: "If the account exists, a reset email was sent."
  });
});

app.post("/api/admin/reset-password", (req, res) => {
  try {
    const { token = "", newPassword = "" } = req.body || {};
    if (!token.trim()) {
      return res.status(400).json({ success: false, message: "Reset token is required." });
    }
    if (!newPassword || newPassword.length < 12) {
      return res.status(400).json({ success: false, message: "New password must be at least 12 characters long." });
    }

    careersDb.completePasswordReset(token, newPassword);
    res.json({
      success: true,
      message: "Password has been reset successfully. You can now log in with your new password."
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 3. Admin Job Management Endpoints (Auth Required)
app.get("/api/admin/careers/jobs", requireAdmin, (req, res) => {
  try {
    const jobs = careersDb.getJobs(true);
    res.json({ success: true, jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/admin/careers/jobs", requireAdmin, (req, res) => {
  try {
    const { title, department, location, employmentType, experience, shortDescription } = req.body || {};
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: "Job title is required." });
    }
    if (!department || !department.trim()) {
      return res.status(400).json({ success: false, message: "Department is required." });
    }
    if (!shortDescription || !shortDescription.trim()) {
      return res.status(400).json({ success: false, message: "Short description is required." });
    }

    const job = careersDb.saveJob(req.body);
    try {
      careersDb.logActivity({
        type: 'job',
        text: job.status === 'published' ? `Published job opening "${job.title}"` : `Saved job opening "${job.title}" as draft`,
        admin: req.admin?.displayName || req.admin?.username || 'Admin'
      });
    } catch (_) {}
    res.json({ success: true, job });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.put("/api/admin/careers/jobs/:id", requireAdmin, (req, res) => {
  try {
    const { title, department, shortDescription } = req.body || {};
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: "Job title is required." });
    }
    if (!department || !department.trim()) {
      return res.status(400).json({ success: false, message: "Department is required." });
    }
    if (!shortDescription || !shortDescription.trim()) {
      return res.status(400).json({ success: false, message: "Short description is required." });
    }

    const job = careersDb.saveJob(req.body, req.params.id);
    res.json({ success: true, job });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.patch("/api/admin/careers/jobs/:id/status", requireAdmin, (req, res) => {
  try {
    const { status } = req.body || {};
    if (!status || !['draft', 'published', 'closed'].includes(status)) {
      return res.status(400).json({ success: false, message: "Status must be 'draft', 'published', or 'closed'." });
    }
    const job = careersDb.updateJobStatus(req.params.id, status);
    try {
      careersDb.logActivity({
        type: 'job',
        text: `Updated job opening "${job.title}" status to ${status}`,
        admin: req.admin?.displayName || req.admin?.username || 'Admin'
      });
    } catch (_) {}
    res.json({ success: true, job });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.delete("/api/admin/careers/jobs/:id", requireAdmin, (req, res) => {
  try {
    careersDb.deleteJob(req.params.id);
    res.json({ success: true, message: "Job deleted successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 4. Admin Applications Management Endpoints (Auth Required)
app.get("/api/admin/careers/applications", requireAdmin, (req, res) => {
  try {
    const applications = careersDb.getApplications();
    res.json({ success: true, applications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/api/admin/careers/applications/:id", requireAdmin, (req, res) => {
  try {
    const application = careersDb.getApplicationById(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }
    res.json({ success: true, application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.patch("/api/admin/careers/applications/:id/status", requireAdmin, (req, res) => {
  try {
    const { status } = req.body || {};
    const updated = careersDb.updateApplicationStatus(req.params.id, status);
    res.json({ success: true, application: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.delete("/api/admin/careers/applications/:id", requireAdmin, (req, res) => {
  try {
    careersDb.deleteApplication(req.params.id);
    res.json({ success: true, message: "Application deleted successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.get("/api/admin/careers/applications/:id/resume", requireAdmin, (req, res) => {
  try {
    const application = careersDb.getApplicationById(req.params.id);
    if (!application || !application.storedFileName) {
      return res.status(404).json({ success: false, message: "No resume attached to this application." });
    }
    const filePath = careersDb.getResumeFilePath(application.storedFileName);
    if (!filePath || !fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, message: "Resume file not found on server disk." });
    }
    const downloadName = application.originalFileName || `resume_${application.fullName.replace(/\s+/g, '_')}${path.extname(application.storedFileName)}`;
    res.download(filePath, downloadName, (downloadErr) => {
      if (downloadErr && !res.headersSent) {
        res.status(500).json({ success: false, message: "Failed to send resume file." });
      }
    });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
});

// 5. Superadmin Account Management Endpoints
app.get("/api/admin/users", requireSuperadmin, (req, res) => {
  try {
    const users = careersDb.getAdminUsers();
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/admin/users", requireSuperadmin, (req, res) => {
  try {
    const { username, displayName, email, role, customPassword } = req.body || {};
    const created = careersDb.createAdminUser({
      username,
      displayName,
      email,
      role,
      customPassword
    });
    res.json({
      success: true,
      user: created.user,
      tempPassword: created.tempPassword,
      message: `Admin user "${created.user.username}" created successfully.`
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.patch("/api/admin/users/:id", requireSuperadmin, (req, res) => {
  try {
    const updated = careersDb.updateAdminUser(req.params.id, req.body, req.admin.id);
    res.json({ success: true, user: updated, message: "Admin user updated successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.post("/api/admin/users/:id/reset-password", requireSuperadmin, (req, res) => {
  try {
    const result = careersDb.superadminResetPassword(req.params.id);
    res.json({
      success: true,
      user: result.user,
      tempPassword: result.tempPassword,
      message: "Password reset successfully. Temporary password generated."
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.delete("/api/admin/users/:id", requireSuperadmin, (req, res) => {
  try {
    careersDb.deleteAdminUser(req.params.id, req.admin.id);
    res.json({ success: true, message: "Admin account deleted successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 6. Public & Admin Gallery Endpoints (Life at VRM)
app.get("/api/careers/gallery", (req, res) => {
  try {
    const gallery = careersDb.getGallery(false);
    res.json({ success: true, gallery });
  } catch (err) {
    console.error("Error fetching gallery:", err.message);
    res.status(500).json({ success: false, message: "Failed to retrieve gallery photos." });
  }
});

app.get("/api/admin/gallery", requireAdmin, (req, res) => {
  try {
    const gallery = careersDb.getGallery(true);
    res.json({ success: true, gallery });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/admin/gallery", requireAdmin, galleryUpload.single("photo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please select an image file to upload." });
    }

    const { caption = "", category = "Team Event", eventDate = "", altText = "", status = "published" } = req.body || {};
    if (!altText.trim()) {
      return res.status(400).json({ success: false, message: "Alt text is required for accessibility and SEO." });
    }

    const photo = await careersDb.processAndSaveGalleryImage({
      fileBuffer: req.file.buffer,
      originalName: req.file.originalname,
      caption,
      category,
      eventDate,
      altText,
      status
    });

    try {
      careersDb.logActivity({
        type: 'photo',
        text: `Uploaded photo "${photo.caption || photo.altText || 'employee moment'}" to Life at VRM`,
        admin: req.admin?.displayName || req.admin?.username || 'Admin'
      });
    } catch (_) {}

    res.json({
      success: true,
      photo,
      message: "Photo uploaded and processed successfully."
    });
  } catch (err) {
    console.error("[GALLERY UPLOAD ERROR]", err);
    res.status(400).json({ success: false, message: err.message });
  }
});

app.put("/api/admin/gallery/:id", requireAdmin, (req, res) => {
  try {
    const updated = careersDb.updateGalleryItem(req.params.id, req.body || {});
    res.json({ success: true, photo: updated, message: "Gallery photo updated successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.patch("/api/admin/gallery/reorder", requireAdmin, (req, res) => {
  try {
    const { orderedIds } = req.body || {};
    const reordered = careersDb.reorderGallery(orderedIds);
    res.json({ success: true, gallery: reordered, message: "Gallery order updated successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.delete("/api/admin/gallery/:id", requireAdmin, (req, res) => {
  try {
    careersDb.deleteGalleryItem(req.params.id);
    res.json({ success: true, message: "Photo deleted successfully." });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 7. Recent Admin Activity Log
app.get("/api/admin/careers/activity", requireAdmin, (req, res) => {
  try {
    const activity = careersDb.getActivity(5);
    res.json({ success: true, activity });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post(
  "/api/contact",
  asyncHandler(async (req, res) => {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Request body is required.",
      });

    }

    const {
      name = "",
      email = "",
      phone = "",
      inquiryType = "",
      subject = "",
      message = "",
    } = req.body;

    if (!name.trim() || !email.trim() || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }


    await sendFormMail({
      subject: `Website Contact Form | ${
        subject || inquiryType || "General Inquiry"
      }`,
      replyTo: email,
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        "Inquiry Type": inquiryType,
        Subject: subject,
        Message: message,
      },
    });

    return res.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  })
);

app.post(
  "/api/client-acquisition",
  asyncHandler(async (req, res) => {
    const { name, email, company, phone, service_interest, industry, message } = req.body;
    if (!name || !email || !company || !phone || !service_interest) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    await sendFormMail({
      subject: "VRM AI | Client Acquisition Form",
      replyTo: email,
      fields: {
        Name: name,
        Email: email,
        Company: company,
        Phone: phone,
        "Service Interest": service_interest,
        Industry: industry,
        Message: message,
      },
    });

    res.json({ success: true });
  })
);

app.post(
  "/api/apply",
  upload.single("resume"),
  async (req, res) => {
    try {
      const { fullName, email, phone, experience, position, coverLetter } = req.body || {};
      if (!fullName || !email || !phone || !experience || !position) {
        return res.status(400).json({ success: false, message: "Please fill all required fields." });
      }

      // Upload security: Validate file format if attached
      if (req.file) {
        const ext = path.extname(req.file.originalname || '').toLowerCase();
        if (!['.pdf', '.doc', '.docx'].includes(ext)) {
          return res.status(400).json({
            success: false,
            message: "Invalid file type. Only PDF, DOC, and DOCX resumes are accepted."
          });
        }
      }

      // 1. Save application record & resume file persistently to server/data and server/uploads
      const appRecord = careersDb.saveApplication({
        fullName,
        email,
        phone,
        experience,
        position,
        coverLetter,
        originalFileName: req.file ? req.file.originalname : null,
        fileBuffer: req.file ? req.file.buffer : null
      });

      try {
        careersDb.logActivity({
          type: 'application',
          text: `New application received from ${fullName} for ${position}`,
          admin: 'Applicant'
        });
      } catch (_) {}

      // 2. Email notification to contactus@vrmaitechnology.com
      try {
        await sendFormMail({
          subject: `Careers Application | ${position} - ${fullName}`,
          replyTo: email,
          fields: {
            "Applicant Name": fullName,
            "Email Address": email,
            "Phone Number": phone,
            "Experience": experience,
            "Position": position,
            "Cover Letter": coverLetter || "None provided",
            "Application ID": appRecord.id,
            "Submission Time": new Date().toISOString()
          },
          file: req.file,
        });
        console.log(`[CAREERS] Application email notification sent for ${fullName} (${position})`);
      } catch (mailErr) {
        console.warn(`[CAREERS] Application ${appRecord.id} saved to disk, but email notification failed: ${mailErr.message}`);
      }

      return res.json({
        success: true,
        message: "Application submitted successfully! Our talent acquisition team will review your profile shortly."
      });
    } catch (err) {
      console.error("[CAREERS ERROR] Failed to process application:", err);
      return res.status(500).json({
        success: false,
        message: "An error occurred while saving your application. Please email contactus@vrmaitechnology.com."
      });
    }
  }
);

app.post(
  "/api/job-applicant",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    const { full_name, email, phone, city, position, experience } = req.body;
    if (!full_name || !email || !phone || !city || !position) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    await sendFormMail({
      subject: `VRM AI | Job Applicant Form | ${position}`,
      replyTo: email,
      fields: {
        "Full Name": full_name,
        Email: email,
        Phone: phone,
        City: city,
        Position: position,
        Experience: experience,
      },
      file: req.file,
    });

    res.json({ success: true });
  })
);

app.post(
  "/api/organization",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    const { company_name, company_website_link, contact_person, email, phone, budget, message } = req.body;
    if (!company_name || !company_website_link || !contact_person || !email || !phone) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    await sendFormMail({
      subject: "VRM AI | Organization Requirement Form",
      replyTo: email,
      fields: {
        "Company Name": company_name,
        "Website Link": company_website_link,
        "Contact Person": contact_person,
        Email: email,
        Phone: phone,
        Budget: budget,
        Message: message,
      },
      file: req.file,
    });

    res.json({ success: true });
  })
);

app.post(
  "/api/business-acquisition",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    const { business_name, business_website_link, contact_person, email, phone, budget, message } = req.body;
    if (!business_name || !business_website_link || !contact_person || !email || !phone) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    await sendFormMail({
      subject: "VRM AI | Business Acquisition Form",
      replyTo: email,
      fields: {
        "Business Name": business_name,
        "Website Link": business_website_link,
        "Contact Person": contact_person,
        Email: email,
        Phone: phone,
        "Estimated Budget": budget,
        Message: message,
      },
      file: req.file,
    });

    res.json({ success: true });
  })
);

// Duplicate canonical/slash redirect moved to top

const REDIRECT_MAP = {
  "/products/b2d": "/products/bench-to-deploy",
  "/products/vrm-real-estate": "/products/vrm-reality",
  "/solutions/ai-consulting-services": "/solutions",
  "/ai-consulting": "/solutions",
  "/products/vevora": "/products/vrm-reality",
  "/solutions/generative-ai-development": "/generative-ai-development",
  "/our-service": "/solutions",
  // Template demo routes redirected to home
  "/home-two": "/", "/home-three": "/", "/home-four": "/", "/home-five": "/",
  "/home-six": "/", "/home-seven": "/", "/home-eight": "/", "/home-nine": "/", "/home-ten": "/"
};

const GONE_ROUTES = new Set([
  "/service-2", "/service-3", "/service-two", "/service-three",
  "/appoinment", "/pricing-plane", "/testimonial-style-1", "/testimonials-one",
  "/project", "/project-details",
  "/portfolio-style-2", "/portfolio-style-3", "/portfolio-style-4", "/portfolio-style-5",
  "/team", "/team-style-2", "/team-style-3", "/team-style-4", "/team-style-5", "/team-details",
  "/blog-list", "/blog-grid", "/blog-details", "/blog-details-default",
  "/onepage-one", "/onepage-two", "/onepage-three", "/onepage-four", "/onepage-five",
  "/onepage-six", "/onepage-seven", "/onepage-eight", "/onepage-nine", "/onepage-ten"
]);

// 301 Redirect Middleware (real replacements only)
app.use((req, res, next) => {
  const reqPath = req.path.replace(/\/+$/, "") || "/";
  if (REDIRECT_MAP[reqPath]) {
    return res.redirect(301, REDIRECT_MAP[reqPath]);
  }
  // Dead template routes: 410 Gone
  if (GONE_ROUTES.has(reqPath)) {
    res.status(410);
    const error404File = path.resolve(__dirname, "../build/404/index.html");
    if (fs.existsSync(error404File)) return res.sendFile(error404File);
    return res.send("410 Gone");
  }
  next();
});

// SPA Fallback: serve 404 for unknown non-API routes
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) return next();
  const prerendered404 = path.resolve(__dirname, "../build/404/index.html");
  const fallback404 = path.resolve(__dirname, "../build/404.html");
  const file404 = fs.existsSync(prerendered404) ? prerendered404 : (fs.existsSync(fallback404) ? fallback404 : null);

  if (file404) {
    res.status(404);
    return res.sendFile(file404);
  }

  const buildIndex = path.resolve(__dirname, "../build/index.html");
  if (fs.existsSync(buildIndex)) {
    if (req.path !== "/") {
      res.status(404);
    }
    return res.sendFile(buildIndex);
  }
  next();
});

const server = http.createServer({ maxHeaderSize: 64 * 1024 }, app);

server.listen(PORT, async () => {
  console.log(`Mail API running on http://localhost:${PORT}`);
  try {
    if (SMTP_HOST && SMTP_USER) {
      console.log(`Verifying SMTP connection to ${SMTP_HOST}:${SMTP_PORT}...`);
      await transporter.verify();
      console.log("✅ SMTP Connection Verified Successfully on startup.");
    }
  } catch (error) {
    console.error("❌ SMTP Verification Failed on startup:", error.message);
    console.error("This usually indicates Hostinger is blocking the port or authentication failed.");
  }
});

app.post("/test", (req, res) => {
  console.log("TEST HIT");
  res.json({ success: true });
});
