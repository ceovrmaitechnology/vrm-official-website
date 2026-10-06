const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const webpFiles = [
    'public/assets/images/Solutions/AICallingAgent.webp',
    'public/assets/images/Solutions/AIChatbot.webp',
    'public/assets/images/Solutions/AIConsultingService.webp',
    'public/assets/images/Solutions/AIDevelopment.webp',
    'public/assets/images/Solutions/AIIntegration.webp',
    'public/assets/images/about/04.webp',
    'public/assets/images/about/1.webp',
    'public/assets/images/about/about-1-v2.webp',
    'public/assets/images/about/about-1.webp',
    'public/assets/images/about/about-2.webp',
    'public/assets/images/faq/customer.webp',
    'public/assets/images/faq/education.webp',
    'public/assets/images/faq/hospitality-1.webp',
    'public/assets/images/faq/info.webp',
    'public/assets/images/faq/logistics.webp',
    'public/assets/images/faq/steel-factory.webp',
    'public/assets/images/home/driving-innovation-ai-landscape.webp',
    'public/assets/images/home/home-2.webp',
    'public/assets/images/home/indian-collab.webp',
    'public/assets/images/logo/logo.webp'
];

console.log('| File | Status |');
console.log('| --- | --- |');

for (const file of webpFiles) {
    const baseName = path.basename(file);
    let isUsed = false;
    try {
        const out = execSync(`git grep -l "${baseName}"`, { encoding: 'utf8' }).trim();
        if (out) isUsed = true;
    } catch (e) {
        // git grep returns 1 if not found
    }
    
    if (isUsed) {
        console.log(`| ${file} | Used |`);
    } else {
        console.log(`| ${file} | Deleted |`);
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    }
}
