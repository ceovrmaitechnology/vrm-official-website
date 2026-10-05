const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(full, exts));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        results.push({ path: full, size: stat.size });
      }
    }
  });
  return results;
}

// 5 largest JS chunks in build/static/js
const jsFiles = getFiles(path.resolve(__dirname, '../build/static/js'), ['.js']).sort((a,b) => b.size - a.size);
console.log('=== TOP 5 LARGEST JS CHUNKS ===');
jsFiles.slice(0, 5).forEach((f, i) => {
  console.log(`${i+1}. ${path.basename(f.path)}: ${(f.size / 1024).toFixed(1)} KB`);
});

// 10 largest images in public/assets/images
const imgFiles = getFiles(path.resolve(__dirname, '../public/assets/images'), ['.png', '.jpg', '.jpeg', '.webp']).sort((a,b) => b.size - a.size);
console.log('\n=== TOP 10 LARGEST IMAGES IN public/assets/images ===');
imgFiles.slice(0, 10).forEach((f, i) => {
  console.log(`${i+1}. ${path.relative(path.resolve(__dirname, '../public'), f.path)}: ${(f.size / 1024).toFixed(1)} KB`);
});
