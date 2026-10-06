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

function processSchema(json) {
    let changed = false;
    // Helper to recursively find schemas
    function traverse(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
            obj.forEach(traverse);
            return;
        }
        if (obj['@type'] && ['Service', 'ProfessionalService', 'Organization', 'LocalBusiness', 'WebSite'].includes(obj['@type'])) {
            if (obj['@type'] !== 'WebSite') {
                obj['areaServed'] = ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"];
                changed = true;
            }
        } else if (obj['@type'] && (obj['@type'].includes('Service') || obj['@type'].includes('Organization') || obj['@type'].includes('LocalBusiness'))) {
             obj['areaServed'] = ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"];
             changed = true;
        }
        Object.keys(obj).forEach(k => traverse(obj[k]));
    }
    traverse(json);
    return changed;
}

const skipFiles = ['node_modules', '.git', 'build'];

walkDir('src', (filePath) => {
    if (skipFiles.some(skip => filePath.includes(skip))) return;
    if (!filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Regex to match JSON inside <script type="application/ld+json">{JSON.stringify(...)}</script>
    // Since some files just have raw JSON text inside the script tags, let's use a simpler approach.
    const regex = /<script type="application\/ld\+json">\s*(?:\{JSON\.stringify\()?([\s\S]*?)(?:\)\})?\s*<\/script>/g;
    
    content = content.replace(regex, (match, p1) => {
        try {
            let json = JSON.parse(p1);
            if (processSchema(json)) {
                hasChanges = true;
                // Prettify with 24 spaces (or whatever indentation matches)
                const newJsonStr = JSON.stringify(json, null, 4).replace(/\\n/g, '\\n').replace(/\\"/g, '\\"');
                // Since this is evaluated at runtime in React usually via dangerousSetInnerHTML or just raw text
                // wait, if it was inside {JSON.stringify(...)} we need to wrap it back
                if (match.includes('{JSON.stringify(')) {
                    return '<script type="application/ld+json">\\n                    {JSON.stringify(' + newJsonStr + ')}\\n                </script>';
                } else {
                    return '<script type="application/ld+json">\\n' + newJsonStr + '\\n</script>';
                }
            }
        } catch(e) {
            // Some might not be valid JSON directly if it has template literals or dynamic data
            // console.log("Failed to parse JSON in " + filePath);
        }
        return match;
    });
    
    // For HomeOne which has a raw object literal, the regex might fail. Let's do string replacement for HomeOne directly if needed.
    if (hasChanges) {
        fs.writeFileSync(filePath, content);
        console.log('Updated areaServed in ' + filePath);
    }
});
