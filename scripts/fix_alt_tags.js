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
let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Replace alt="" with descriptive alt based on src or context
  content = content.replace(/<img\b([^>]*?)alt=["']\s*["']([^>]*?)>/g, (match, before, after) => {
    const full = before + after;
    let descriptive = "VRM AI Technology";
    const srcMatch = full.match(/src=["']([^"']+)["']/);
    if (srcMatch) {
      const src = srcMatch[1];
      const base = path.basename(src, path.extname(src));
      if (src.includes('team')) descriptive = `VRM AI Team Member ${base}`;
      else if (src.includes('faq')) descriptive = `VRM AI Business Solutions Discussion`;
      else if (src.includes('about')) descriptive = `VRM AI Enterprise Capabilities ${base}`;
      else if (src.includes('contact')) descriptive = `VRM AI Contact Support`;
      else if (src.includes('testimonials') || src.includes('client')) descriptive = `VRM AI Enterprise Client Partner`;
      else if (src.includes('banner')) descriptive = `VRM AI Technology Banner Graphic`;
      else if (src.includes('service')) descriptive = `VRM AI Service Overview ${base}`;
      else if (src.includes('process')) descriptive = `VRM AI Execution Process Step ${base}`;
      else if (src.includes('brand')) descriptive = `Enterprise Partner Logo ${base}`;
      else if (src.includes('logo')) descriptive = `VRM AI Technology Official Logo`;
      else descriptive = `VRM AI Technology ${base.replace(/[-_]/g, ' ')}`;
    }
    return `<img${before}alt="${descriptive}"${after}>`;
  });

  // If <img does not have any alt attribute at all
  content = content.replace(/<img\b((?:(?!alt=)[^>])*?)>/g, (match, attrs) => {
    if (attrs.includes('alt=')) return match;
    let descriptive = "VRM AI Technology";
    const srcMatch = attrs.match(/src=["']([^"']+)["']/);
    if (srcMatch) {
      const src = srcMatch[1];
      const base = path.basename(src, path.extname(src));
      if (src.includes('team')) descriptive = `VRM AI Team Member ${base}`;
      else if (src.includes('logo')) descriptive = `VRM AI Technology Official Logo`;
      else descriptive = `VRM AI Technology ${base.replace(/[-_]/g, ' ')}`;
    }
    return `<img${attrs} alt="${descriptive}">`;
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
    console.log('Updated alts in:', path.relative(path.resolve(__dirname, '..'), f));
  }
});

console.log('Total files updated with descriptive alt text:', updatedCount);
