const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server for build/
function startServer(port = 8089) {
  const buildDir = path.resolve(__dirname, '../build');
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
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
    '.ttf': 'font/ttf',
    '.xml': 'application/xml',
    '.txt': 'text/plain'
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0].split('#')[0];
    if (reqPath === '/') reqPath = '/index.html';
    
    let filePath = path.join(buildDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    
    // SPA fallback
    if (!fs.existsSync(filePath)) {
      filePath = path.join(buildDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (e) {
      res.writeHead(500);
      res.end('Error loading ' + reqPath);
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      resolve(server);
    });
  });
}

async function runLighthouse(url) {
  const chromeLauncher = await import('chrome-launcher');
  const lighthouse = (await import('lighthouse')).default;

  const chrome = await chromeLauncher.launch({
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    formFactor: 'mobile',
    screenEmulation: {
      mobile: true,
      width: 412,
      height: 823,
      deviceScaleFactor: 2.625,
      disabled: false,
    },
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      requestLatencyMs: 562.5,
      downloadThroughputKbps: 1474.56,
      uploadThroughputKbps: 675,
      cpuSlowdownMultiplier: 4
    }
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  const report = runnerResult.lhr;
  return {
    url,
    performance: Math.round((report.categories.performance?.score || 0) * 100),
    accessibility: Math.round((report.categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((report.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((report.categories.seo?.score || 0) * 100)
  };
}

(async () => {
  const port = 8089;
  const server = await startServer(port);
  console.log(`Server started on http://localhost:${port}`);

  const testUrls = [
    `http://localhost:${port}/`,
    `http://localhost:${port}/ai-company-madurai`,
    `http://localhost:${port}/ai-company-bangalore`,
    `http://localhost:${port}/ai-software-services-chennai`,
    `http://localhost:${port}/contactus`
  ];

  const results = [];
  for (const u of testUrls) {
    console.log(`Running Lighthouse mobile audit for ${u}...`);
    try {
      const res = await runLighthouse(u);
      console.log(`Results for ${u}:`, res);
      results.push(res);
    } catch (err) {
      console.error(`Error auditing ${u}:`, err.message);
    }
  }

  server.close();
  fs.writeFileSync('lighthouse_after.json', JSON.stringify(results, null, 2));
  console.log('Saved after scores to lighthouse_after.json');
})();
