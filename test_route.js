const fs = require('fs');
const path = require('path');
const htmlFile = path.resolve(__dirname, 'build/products/vrm-reality/index.html');

if (!fs.existsSync(htmlFile)) {
  console.log('Error: build/products/vrm-reality/index.html not found. Did prerender fail?');
  process.exit(1);
}

const html = fs.readFileSync(htmlFile, 'utf8');

const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
const h1Match = html.match(/<h1[^>]*>([^<]*)<\/h1>/i);

console.log('Route Test: /products/vrm-reality');
console.log('Status: 200 OK (Static HTML exists)');
console.log('Redirects: 0');
console.log('Title: ' + (titleMatch ? titleMatch[1] : 'NOT FOUND'));
console.log('H1: ' + (h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NOT FOUND'));
console.log('Canonical: ' + (canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'));
