const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const routerFile = path.join(srcDir, 'home/Routerpage.jsx');
const routerContent = fs.readFileSync(routerFile, 'utf8');

const routeMatches = [...routerContent.matchAll(/<Route\s+path=["']([^"']+)["']/g)].map(m => m[1]);
const definedRoutes = new Set(routeMatches);
// Also add root and hash variations
definedRoutes.add('/');

function getFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(getFiles(file));
    else if (file.endsWith('.jsx') || file.endsWith('.js')) results.push(file);
  });
  return results;
}

const allFiles = getFiles(srcDir);
const internalLinks = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const linkMatches = [...content.matchAll(/<Link\s+[^>]*?to=["']([^"']+)["']/g)];
  linkMatches.forEach(m => {
    const rawTo = m[1];
    internalLinks.push({ file: path.relative(srcDir, file), to: rawTo });
  });
  const aMatches = [...content.matchAll(/<a\s+[^>]*?href=["'](\/[^"']*)["']/g)];
  aMatches.forEach(m => {
    const rawHref = m[1];
    internalLinks.push({ file: path.relative(srcDir, file), to: rawHref });
  });
});

const broken = [];
internalLinks.forEach(({ file, to }) => {
  if (to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('http')) return;
  const cleanPath = to.split('#')[0].split('?')[0] || '/';
  if (!definedRoutes.has(cleanPath)) {
    broken.push({ file, to, cleanPath });
  }
});

console.log('Total internal links:', internalLinks.length);
console.log('Broken links count:', broken.length);
if (broken.length > 0) {
  console.log(JSON.stringify(broken.slice(0, 30), null, 2));
}
