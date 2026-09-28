const fs = require('fs');
const path = require('path');
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const srcDir = path.resolve(__dirname, '../src');
const files = getFiles(srcDir);
const missingAlt = [];
const missingLazy = [];

files.forEach(fullPath => {
  const relPath = path.relative(path.resolve(__dirname, '..'), fullPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const imgMatches = content.matchAll(/<img\b([^>]*?)>/g);
  for (const m of imgMatches) {
    const attrs = m[1];
    if (!attrs.includes('alt=') || /alt=["']\s*["']/.test(attrs)) {
      missingAlt.push({ file: relPath, tag: m[0] });
    }
    if (!attrs.includes('loading=') && !attrs.includes('fetchpriority="high"') && !attrs.includes("fetchpriority='high'")) {
      missingLazy.push({ file: relPath, tag: m[0] });
    }
  }
});

console.log('=== MISSING OR EMPTY ALT TAGS === (' + missingAlt.length + ')');
const byFileAlt = {};
missingAlt.forEach(x => {
  byFileAlt[x.file] = (byFileAlt[x.file] || 0) + 1;
});
console.log(byFileAlt);

console.log('\n=== MISSING LOADING="LAZY" === (' + missingLazy.length + ')');
const byFileLazy = {};
missingLazy.forEach(x => {
  byFileLazy[x.file] = (byFileLazy[x.file] || 0) + 1;
});
console.log(byFileLazy);
