const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

walkDir('src', (filePath) => {
    if (!filePath.endsWith('.jsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    if (content.includes('<script type="application/ld+json">\\n')) {
        content = content.replace(/<script type="application\/ld\+json">\\n/g, '<script type="application/ld+json">\n');
        hasChanges = true;
    }
    if (content.includes('})}\\n                </script>')) {
        content = content.replace(/}\)}\\n                <\/script>/g, '})}\n                </script>');
        hasChanges = true;
    }
    if (content.includes('}\\n</script>')) {
        content = content.replace(/}\\n<\/script>/g, '}\n</script>');
        hasChanges = true;
    }

    if (hasChanges) {
        fs.writeFileSync(filePath, content);
        console.log('Fixed newlines in ' + filePath);
    }
});
