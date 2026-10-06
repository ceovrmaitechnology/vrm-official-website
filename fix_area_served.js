const fs = require('fs');
const path = require('path');

const CORRECT_AREA = '["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walkDir(p, callback);
        else callback(p);
    });
}

// List of known incorrect areaServed values to replace
const WRONG_PATTERNS = [
    '"areaServed": ["Madurai", "Bengaluru", "India"]',
    '"areaServed": ["Madurai", "Bangalore", "India"]',
    '"areaServed": ["Bangalore", "Madurai", "India"]',
    '"areaServed": ["Bangalore", "Madurai", "Tamil Nadu", "India"]',
    '"areaServed": ["Madurai", "Bangalore", "Tamil Nadu", "India"]',
    '"areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]',
    '"areaServed": ["Bangalore", "Madurai", "Chennai", "Tamil Nadu", "India"]',
];

walkDir('src', (filePath) => {
    if (!filePath.endsWith('.jsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const wrong of WRONG_PATTERNS) {
        if (content.includes(wrong)) {
            content = content.split(wrong).join('"areaServed": ' + CORRECT_AREA);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log('Updated: ' + filePath);
    }
});

// Also handle the HomeOne.jsx which had areaServed: ["Madurai", "Bengaluru", "India"] as a multi-line
walkDir('src', (filePath) => {
    if (!filePath.endsWith('.jsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    // Match multi-line areaServed arrays that need updating
    const multiLine = /\"areaServed\": \[\s*\n\s*\"Madurai\",\s*\n\s*\"Bengaluru\",\s*\n\s*\"India\"\s*\n\s*\]/g;
    const correctMultiLine = '"areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]';
    if (multiLine.test(content)) {
        content = content.replace(multiLine, correctMultiLine);
        fs.writeFileSync(filePath, content);
        console.log('Updated multiline: ' + filePath);
    }
});

console.log('Done.');
