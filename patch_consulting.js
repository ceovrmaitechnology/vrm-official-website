const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

function processFiles() {
    const skipFiles = ['post.json', 'BlogDetails.jsx', 'BlogDetailsDefault.jsx', 'patch_consulting.js', 'package-lock.json', '.htaccess', '_redirects', 'sitemap.xml', 'Routerpage.jsx'];
    
    const dirs = ['src', 'public'];
    dirs.forEach(dir => {
        walkDir(dir, (filePath) => {
            if (skipFiles.some(skip => filePath.includes(skip))) return;
            if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.webp') || filePath.endsWith('.mp4')) return;
            
            let content = fs.readFileSync(filePath, 'utf8');
            let newContent = content;
            
            // Fix text instances explicitly without touching CSS classes or routes
            newContent = newContent.replace(/Apex Consulting/g, 'Apex Solutions');
            newContent = newContent.replace(/Enterprise AI Consulting/g, 'Enterprise AI Strategy');
            newContent = newContent.replace(/AI consultants/g, 'AI strategists');
            
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent);
                console.log('Updated ' + filePath);
            }
        });
    });
}
processFiles();
