const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/VRM Reality/gi, 'VRM Reality');
    content = content.replace(/VRM Reality/gi, 'VRM Reality');
    content = content.replace(/vrm-reality/gi, 'vrm-reality');
    content = content.replace(/vrm_reality/gi, 'vrm_reality');
    content = content.replace(/VRM Reality/gi, 'VRM Reality');
    content = content.replace(/Reality/gi, 'Reality');
    content = content.replace(/VRM Reality/gi, 'VRM Reality');
    content = content.replace(/VrmReality/g, 'VrmReality'); // for component names

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'build' && file !== '.git') {
                processDirectory(fullPath);
            }
        } else {
            const ext = path.extname(fullPath);
            if (['.js', '.jsx', '.html', '.css', '.json', '.xml', '.txt', ''].includes(ext) || file === '_redirects' || file === '.htaccess') {
                replaceInFile(fullPath);
            }
        }
    }
}

// 1. Rename files and directories
try {
    if (fs.existsSync('src/inner/VrmReality.jsx')) {
        fs.renameSync('src/inner/VrmReality.jsx', 'src/inner/VrmReality.jsx');
        console.log('Renamed VrmReality.jsx -> VrmReality.jsx');
    }
    if (fs.existsSync('public/assets/images/vrm-reality')) {
        fs.renameSync('public/assets/images/vrm-reality', 'public/assets/images/vrm-reality');
        console.log('Renamed directory vrm-reality -> vrm-reality');
    }
    // Rename files inside the directory
    if (fs.existsSync('public/assets/images/vrm-reality')) {
        const imgs = fs.readdirSync('public/assets/images/vrm-reality');
        for (const img of imgs) {
            if (img.includes('vrm-reality')) {
                fs.renameSync(
                    path.join('public/assets/images/vrm-reality', img),
                    path.join('public/assets/images/vrm-reality', img.replace(/vrm-reality/g, 'vrm-reality'))
                );
            }
        }
    }
} catch (e) {
    console.error('Rename error:', e);
}

// 2. Process all files
processDirectory(path.resolve('.'));
console.log('Text replacement complete.');
