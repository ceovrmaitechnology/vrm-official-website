const fs = require('fs');

let content = fs.readFileSync('server/index.js', 'utf8');

const regex = /\/\/ Trailing slash redirect: force non-trailing slash for all routes \(SEO canonical\)[\s\S]+?\"\/solutions\/generative-ai-development\": \"\/generative-ai-development\",/m;

const replacement = `// WWW and HTTPS redirect
app.use((req, res, next) => {
  const host = req.headers.host || '';
  const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
  if (isLocal) return next();

  const isHttp = !req.secure && req.headers['x-forwarded-proto'] !== 'https';
  const isNonWww = host === 'vrmaitechnology.com';

  if (isHttp || isNonWww) {
    return res.redirect(301, \`https://www.vrmaitechnology.com\${req.originalUrl}\`);
  }
  next();
});

// Trailing slash redirect: force non-trailing slash for all routes (SEO canonical)
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const newPath = req.path.replace(/\\/+$/, '');
    const query = req.url.slice(req.path.length);
    return res.redirect(301, newPath + query);
  }
  next();
});

const REDIRECT_MAP = {
  "/ai-chatbot-development": "/solutions/ai-chatbot-development",
  "/voice-ai-solutions": "/solutions/ai-calling-agent",
  "/products/b2d": "/products/bench-to-deploy",
  "/products/vrm-real-estate": "/products/vrm-reality",
  "/solutions/generative-ai-development": "/generative-ai-development",`;

content = content.replace(regex, replacement);

fs.writeFileSync('server/index.js', content);
console.log('patched');
