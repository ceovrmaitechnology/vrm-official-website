const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

const skipFiles = ['node_modules', '.git', 'build', 'restore_people_connect.js'];

walkDir('src', (filePath) => {
    if (skipFiles.some(skip => filePath.includes(skip))) return;
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx') && !filePath.endsWith('.json')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/People Connect(?!\s*\(Global\))/g, 'People Connect (Global)');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log('Restored People Connect (Global) in ' + filePath);
    }
});
