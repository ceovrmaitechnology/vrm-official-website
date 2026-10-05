const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

(async () => {
  const buildDir = path.resolve(__dirname, '../build');
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

  await new Promise(r => server.listen(8099, r));

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8099/ai-company-madurai', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#root > *', { timeout: 10000 });

  const title = await page.title();
  const h1 = await page.$eval('h1', el => el.innerText).catch(() => 'no h1');
  console.log('Pre-render test successful!');
  console.log('Title:', title);
  console.log('H1:', h1);

  await browser.close();
  server.close();
})();
