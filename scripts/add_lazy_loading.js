const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(getFiles(file));
    else if (file.endsWith('.jsx') || file.endsWith('.js')) results.push(file);
  });
  return results;
}

const files = getFiles(path.resolve(__dirname, '../src'));
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Add loading="lazy" to <img> tags that don't have loading= and are not hero/logo/fetchpriority="high"
  content = content.replace(/<img\b([^>]*?)>/g, (match, attrs) => {
    if (attrs.includes('loading=')) return match;
    if (attrs.includes('fetchpriority="high"') || attrs.includes("fetchpriority='high'")) return match;
    // Keep header logos eager
    if (attrs.includes('logo') && (f.includes('header') || f.includes('Header'))) return match;
    // Add loading="lazy"
    return `<img${attrs} loading="lazy">`;
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
    console.log('Added loading="lazy" in:', path.relative(path.resolve(__dirname, '..'), f));
  }
});

console.log('Total files updated with loading="lazy":', count);
