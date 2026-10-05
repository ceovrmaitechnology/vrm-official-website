const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetClaims = [
  'CRM integration',
  'multilingual voice',
  'human handoff',
  'REST APIs',
  'Kafka pipelines',
  'containerized deployments',
  'WhatsApp',
  'LLM fine-tuning',
  'RAG',
  'computer vision',
  'DPDP Act'
];

function getAllSrcFiles(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getAllSrcFiles(full));
    } else if (/\.(jsx?|tsx?|html)$/.test(f)) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = getAllSrcFiles(path.resolve(__dirname, '../src'));
// also public/index.html
allFiles.push(path.resolve(__dirname, '../public/index.html'));

const claimResults = [];
const cacheMain = {};

for (const claim of targetClaims) {
  const claimRegex = new RegExp('\\b' + claim.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');

  for (const file of allFiles) {
    const relFile = path.relative(path.resolve(__dirname, '..'), file).replace(/\\/g, '/');
    const currentContent = fs.readFileSync(file, 'utf8');

    if (!cacheMain[relFile]) {
      try {
        cacheMain[relFile] = execSync(`git show main:${relFile}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      } catch (e) {
        cacheMain[relFile] = '';
      }
    }
    const mainContent = cacheMain[relFile];

    const inCurrent = claimRegex.test(currentContent);
    const inMain = claimRegex.test(mainContent);

    if (inCurrent || inMain) {
      let pageName = relFile.replace('src/inner/', '').replace('src/components/', '').replace('src/', '');
      claimResults.push({
        claim,
        file: relFile,
        page: pageName,
        inCurrent,
        inMain,
        status: inMain ? 'ORIGINAL' : 'ADDED-BY-AI'
      });
    }
  }
}

fs.writeFileSync(path.resolve(__dirname, '../claims_final_table.json'), JSON.stringify(claimResults, null, 2));
console.log(`Found ${claimResults.length} total claim matches across codebase.`);
console.table(claimResults.map(r => ({
  Claim: r.claim,
  Page: r.page,
  InCurrent: r.inCurrent,
  InMain: r.inMain,
  Status: r.status
})));
