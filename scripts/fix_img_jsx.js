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
let fixedFiles = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Fix `/ loading="lazy">` or `/\s*loading="lazy">` to `loading="lazy" />`
  content = content.replace(/\/\s*loading="lazy">/g, 'loading="lazy" />');

  // 2. Any remaining `<img ... >` that doesn't end with `/>`
  // In JSX, img must be self-closing `<img ... />`
  content = content.replace(/<img\b([^>]*?)>/g, (match, attrs) => {
    let trimmed = attrs.trim();
    if (trimmed.endsWith('/')) {
      // It's already ending with /
      return match;
    }
    // Check if the next characters in content are </img> (rare in JSX, but possible)
    return `<img ${trimmed} />`;
  });

  // Clean up any double spaces inside <img  ...
  content = content.replace(/<img\s+/g, '<img ');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    fixedFiles++;
  }
});

console.log('Fixed img JSX syntax in files:', fixedFiles);
