const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const http = require("http");
const path = require("path");
require("dotenv").config({
  path: "/var/www/VRM-Website/.env"
});

const app = express();
const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 5000);

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 },
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

app.post(
  "/api/contact",
  asyncHandler(async (req, res) => {
    const { name, email, phone, inquiryType, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required." });
    }

    await sendFormMail({
      subject: `Website Contact Form | ${subject || inquiryType || "General Inquiry"}`,
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

    res.json({ success: true });
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
      subject: "GrowthFlow | Client Acquisition Form",
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
  asyncHandler(async (req, res) => {
    const { fullName, email, phone, experience, position, coverLetter } = req.body;
    if (!fullName || !email || !phone || !experience || !position) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    await sendFormMail({
      subject: `Careers Application | ${position}`,
      replyTo: email,
      fields: {
        "Full Name": fullName,
        Email: email,
        Phone: phone,
        Experience: experience,
        Position: position,
        "Cover Letter": coverLetter,
      },
      file: req.file,
    });

    res.json({ success: true });
  })
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
      subject: `GrowthFlow | Job Applicant Form | ${position}`,
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
      subject: "GrowthFlow | Organization Requirement Form",
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
      subject: "GrowthFlow | Business Acquisition Form",
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