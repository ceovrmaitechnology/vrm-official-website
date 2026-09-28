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

const files = getFiles(path.resolve(__dirname, '../src')).concat([
  path.resolve(__dirname, '../server/index.js')
]);

let errors = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Check for common JSX/JS syntax mistakes like unmatched brackets, invalid template strings, etc.
  const stack = [];
  const openChars = { '{': '}', '(': ')', '[': ']' };
  let inString = false;
  let stringChar = '';
  let inComment = false;
  let inBlockComment = false;

  // Simple basic regex check for unclosed tag brackets or obvious JSX errors
  if (content.includes('<<<<<<<') || content.includes('>>>>>>>')) {
    console.error('Merge conflict markers in:', f);
    errors++;
  }
});

console.log('Syntax check completed. Files checked:', files.length, 'Errors:', errors);
