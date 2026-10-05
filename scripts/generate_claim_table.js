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
const claimResults = [];

for (const claim of targetClaims) {
  const claimRegex = new RegExp(claim.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');

  for (const file of allFiles) {
    const relFile = path.relative(path.resolve(__dirname, '..'), file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // Also check if it existed on main
    let mainContent = '';
    try {
      mainContent = execSync(`git show main:${relFile}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch (e) {
      mainContent = '';
    }

    const inCurrent = claimRegex.test(content);
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
  Status: r.status
})));
