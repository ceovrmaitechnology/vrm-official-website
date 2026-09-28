const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');

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
let errors = 0;

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  try {
    parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx']
    });
  } catch (err) {
    console.error(`Syntax error in ${path.relative(path.resolve(__dirname, '..'), f)}: ${err.message}`);
    errors++;
  }
});

console.log(`Babel JSX validation completed. Total files checked: ${files.length}. Syntax errors: ${errors}`);
