const fs = require('fs');
const path = require('path');

// ✅ Hero/Above-fold images — இவற்றை lazy ஆக்கக்கூடாது
const SKIP_PATTERNS = [
  'logo',
  'Logo', 
  'hero',
  'banner',
  'Banner',
  'vrm-hero',
  'about/1.jpeg',  // preload செய்த image
];

// Process செய்ய வேண்டிய folders
const SRC_DIR = path.join(__dirname, 'src');

let totalFiles = 0;
let totalImgFixed = 0;
let skippedImgs = 0;

function shouldSkip(imgTag) {
  return SKIP_PATTERNS.some(pattern => imgTag.includes(pattern));
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileImgCount = 0;
  let fileSkipCount = 0;

  // Match all <img ...> tags (single or multiline)
  const imgRegex = /<img\b([^>]*?)(\s*\/?>)/gs;

  const newContent = content.replace(imgRegex, (fullMatch, attrs, closing) => {
    // Already has loading attribute — skip
    if (attrs.includes('loading=')) {
      fileSkipCount++;
      return fullMatch;
    }

    // Hero/Logo images — skip
    if (shouldSkip(fullMatch)) {
      fileSkipCount++;
      return fullMatch;
    }

    // width & height இல்லாத images-க்கு warn மட்டும் செய்
    if (!attrs.includes('width') || !attrs.includes('height')) {
      console.warn(`  ⚠️  No width/height: ${filePath.replace(SRC_DIR, 'src')}`);
      console.warn(`     → ${fullMatch.substring(0, 80)}...`);
    }

    // ✅ loading="lazy" decoding="async" சேர்
    fileImgCount++;
    modified = true;
    return `<img${attrs} loading="lazy" decoding="async"${closing}`;
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    totalFiles++;
    totalImgFixed += fileImgCount;
    console.log(`✅ Fixed ${fileImgCount} img(s) in: ${filePath.replace(SRC_DIR, 'src')}`);
  }

  skippedImgs += fileSkipCount;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // node_modules, build skip
      if (file === 'node_modules' || file === 'build') return;
      walkDir(fullPath);
    } else if (/\.(jsx|js|tsx|ts|html)$/.test(file)) {
      processFile(fullPath);
    }
  });
}

console.log('🚀 Lazy Loading Script Starting...\n');
walkDir(SRC_DIR);
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Files modified  : ${totalFiles}`);
console.log(`✅ Images fixed    : ${totalImgFixed}`);
console.log(`⏭️  Images skipped  : ${skippedImgs} (logo/hero/already-lazy)`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ Done! npm run build இப்போது run செய்யுங்கள்.');
