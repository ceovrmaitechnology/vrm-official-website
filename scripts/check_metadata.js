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

const files = getFiles(path.resolve(__dirname, '../src/inner')).concat([
  path.resolve(__dirname, '../src/home/HomeOne.jsx'),
  path.resolve(__dirname, '../public/index.html')
]);

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const tMatch = c.match(/<title>([^<]+)<\/title>/);
  const dMatch = c.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const canonMatch = c.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const hasHelmet = c.includes('<Helmet');
  const rel = path.relative(path.resolve(__dirname, '..'), f);
  console.log(rel);
  console.log('  Helmet:', hasHelmet ? 'YES' : 'NO');
  console.log('  Title:', tMatch ? tMatch[1] : 'MISSING');
  console.log('  Desc (' + (dMatch ? dMatch[1].length : 0) + '):', dMatch ? dMatch[1] : 'MISSING');
  console.log('  Canonical:', canonMatch ? canonMatch[1] : 'MISSING');
});
