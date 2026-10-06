const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

(async () => {
  const buildDir = path.resolve(__dirname, '../build');
  if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found! Run npm run build first.');
    process.exit(1);
  }

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
  };

  // Static server serving build/
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0].split('#')[0];
    let filePath = path.join(buildDir, reqPath);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(buildDir, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
  });

  const PORT = 8097;
  await new Promise(r => server.listen(PORT, r));

  // Extract all routes from sitemap.xml
  const sitemapXml = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8');
  const locMatches = [...sitemapXml.matchAll(/<loc>https:\/\/www\.vrmaitechnology\.com([^<]*)<\/loc>/g)];
  const routes = locMatches.map(m => m[1] || '/');
  if (!routes.includes('/404')) {
    routes.push('/404');
  }

  function getChromePath() {
    if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
      return process.env.PUPPETEER_EXECUTABLE_PATH;
    }
    if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) {
      return process.env.CHROME_BIN;
    }
    const candidates = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      path.join(process.env.LOCALAPPDATA || '', 'Google/Chrome/Application/chrome.exe'),
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium-browser',
      '/usr/bin/chromium',
      '/snap/bin/chromium'
    ];
    for (const c of candidates) {
      if (c && fs.existsSync(c)) return c;
    }
    return null;
  }

  const chromePath = getChromePath();
  if (!chromePath) {
    console.error('[PRERENDER ERROR] No Chrome/Chromium executable found on this system. Production build requires Chrome for SEO prerendering.');
    server.close();
    process.exit(1);
  }

  console.log(`Starting pre-render for ${routes.length} routes using browser at: ${chromePath}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
    });
  } catch (err) {
    console.error(`[PRERENDER ERROR] Could not launch browser: ${err.message}. Production build requires successful prerendering.`);
    server.close();
    process.exit(1);
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  page.on('console', msg => console.log('[PAGE LOG]', msg.text()));
  page.on('pageerror', err => console.error('[PAGE ERROR]', err));

  let successCount = 0;
  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });

      // Wait for React root to mount children
      await page.waitForSelector('#root > *', { timeout: 12000 }).catch(() => {});

      // Poll until react-helmet-async injects <title> and <link rel="canonical">
      const canonicalTarget = route === '/' || route === '' ? 'https://www.vrmaitechnology.com' : `https://www.vrmaitechnology.com${route.startsWith('/') ? route : '/' + route}`;
      
      try {
        await page.waitForFunction((targetUrl, isErrorRoute) => {
          const t = document.querySelector('title');
          const c = document.querySelector('link[rel="canonical"]');
          if (isErrorRoute) {
             return t && t.textContent && t.textContent.trim().length > 0;
          }
          return t && t.textContent && t.textContent.trim().length > 0 &&
                 c && c.href && (c.href === targetUrl || c.href === targetUrl + '/');
        }, { timeout: 15000 }, canonicalTarget, route === '/404');
      } catch (e) {
        console.error(`[PRERENDER ERROR] ${route}: Timeout waiting for title and canonical (${canonicalTarget}).`);
        process.exit(1);
      }

      // Extra settle for any remaining async renders
      await new Promise(r => setTimeout(r, 400));

      const html = await page.content();
      let outPath;
      if (route === '/' || route === '') {
        outPath = path.join(buildDir, 'index.html');
      } else {
        const routeClean = route.startsWith('/') ? route.slice(1) : route;
        const targetDir = path.join(buildDir, routeClean);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        outPath = path.join(targetDir, 'index.html');
      }

      fs.writeFileSync(outPath, html, 'utf8');
      successCount++;
      console.log(`[PRERENDER ${successCount}/${routes.length}] ${route} -> ${path.relative(buildDir, outPath)}`);
    } catch (err) {
      console.error(`[PRERENDER ERROR] Failed on ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();
  console.log(`Pre-rendering completed! Successfully rendered ${successCount}/${routes.length} routes.`);
})();
