const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetImages = [
  'public/assets/images/about/about-1-v2.png',
  'public/assets/images/home/home-2.png',
  'public/assets/images/Solutions/AIDevelopment.png',
  'public/assets/images/Solutions/AIChatbot.png',
  'public/assets/images/Solutions/AIConsultingService.png',
  'public/assets/images/Solutions/AIIntegration.png',
  'public/assets/images/about/about-2.png',
  'public/assets/images/Solutions/AICallingAgent.png',
  'public/assets/images/about/about-1.png',
  'public/assets/images/about/04.png',
  'public/assets/images/home/driving-innovation-ai-landscape.png',
  'public/assets/images/home/indian-collab.png'
];

(async () => {
  console.log('Optimizing images...');
  for (const relPath of targetImages) {
    const fullPath = path.resolve(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) continue;

    const originalSize = fs.statSync(fullPath).size;
    const ext = path.extname(fullPath);
    const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, '.webp');

    // 1. Generate WebP (quality 80, max width 1200)
    await sharp(fullPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath + '.tmp');
    
    fs.renameSync(webpPath + '.tmp', webpPath);
    const webpSize = fs.statSync(webpPath).size;

    // 2. Also compress the original PNG in place (max width 1200, compressed png)
    await sharp(fullPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 80, palette: true })
      .toFile(fullPath + '.tmp');

    fs.renameSync(fullPath + '.tmp', fullPath);
    const newPngSize = fs.statSync(fullPath).size;

    console.log(`${relPath}:`);
    console.log(`  Original PNG: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`  Compressed PNG: ${(newPngSize / 1024).toFixed(1)} KB (-${((1 - newPngSize/originalSize)*100).toFixed(0)}%)`);
    console.log(`  Generated WebP: ${(webpSize / 1024).toFixed(1)} KB (-${((1 - webpSize/originalSize)*100).toFixed(0)}%)`);
  }
  console.log('\nAll targeted images optimized successfully!');
})();
