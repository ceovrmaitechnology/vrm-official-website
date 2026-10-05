const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function walk(dir, list = []) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, list);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            list.push(fullPath);
        }
    });
    return list;
}

const files = walk(srcDir);
files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes('BreadcrumbList')) {
        const rel = path.relative(path.join(__dirname, '..'), f);
        // Find lines between "itemListElement" and the closing bracket
        const lines = content.split('\n');
        let capturing = false;
        let block = [];
        for (let line of lines) {
            if (line.includes('itemListElement')) {
                capturing = true;
            }
            if (capturing) {
                block.push(line.trim());
                if (line.includes(']') && block.length > 1) {
                    break;
                }
            }
        }
        console.log(rel + ':\n  ' + block.join(' '));
    }
});
