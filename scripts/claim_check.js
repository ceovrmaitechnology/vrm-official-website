const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const terms = [
    'CRM integration',
    'CRM',
    'multilingual voice',
    'human handoff',
    'REST APIs',
    'REST API',
    'Kafka pipelines',
    'Kafka',
    'containerized deployments',
    'containerized',
    'WhatsApp',
    'LLM fine-tuning',
    'fine-tuning',
    'RAG',
    'Retrieval-Augmented',
    'computer vision',
    'DPDP Act',
    'DPDP',
    'zero-data-retention',
    'VPC',
    'Virtual Private Cloud',
    'role-based access control',
    'RBAC',
    'vector databases',
    'vector database',
    'premier',
    'top-tier',
    'cost-effective'
];

function walk(dir, list = []) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, list);
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
            list.push(fullPath);
        }
    });
    return list;
}

const allFiles = walk(path.join(__dirname, '../src'));
const publicIndex = path.join(__dirname, '../public/index.html');
if (fs.existsSync(publicIndex)) allFiles.push(publicIndex);

const results = [];

allFiles.forEach(filePath => {
    const rel = path.relative(path.join(__dirname, '..'), filePath);
    const gitPath = rel.replace(/\\/g, '/');
    let origContent = null;
    try {
        origContent = execSync(`git show main:${gitPath}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch (e) {
        origContent = null; // file didn't exist on main
    }

    const content = fs.readFileSync(filePath, 'utf8');

    terms.forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'i');
        if (regex.test(content)) {
            const lines = content.split('\n');
            lines.forEach((line, idx) => {
                if (regex.test(line)) {
                    const trimmedLine = line.trim();
                    let isOriginal = false;
                    if (origContent !== null) {
                        if (origContent.includes(trimmedLine) || regex.test(origContent)) {
                            isOriginal = true;
                        }
                    }
                    results.push({
                        term,
                        file: gitPath,
                        lineNum: idx + 1,
                        text: trimmedLine.substring(0, 120),
                        status: isOriginal ? 'ORIGINAL' : 'ADDED-BY-AI'
                    });
                }
            });
        }
    });
});

fs.writeFileSync(path.join(__dirname, '../claims_audit.json'), JSON.stringify(results, null, 2));
console.log(`Scan completed. Total matches: ${results.length}`);
const addedCount = results.filter(r => r.status === 'ADDED-BY-AI').length;
const origCount = results.filter(r => r.status === 'ORIGINAL').length;
console.log(`ORIGINAL: ${origCount}, ADDED-BY-AI: ${addedCount}`);
