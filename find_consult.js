const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('git grep -n -i "consult" -- src public server scripts', {encoding: 'utf8'});
  fs.writeFileSync('../consulting_hits.txt', out);
} catch (e) {
  fs.writeFileSync('../consulting_hits.txt', e.stdout);
}
