const fs = require('fs');
const path = require('path');

function extract(filePath, label) {
  if (!fs.existsSync(filePath)) {
    console.log(`\n=== ${label} ===\nFILE NOT FOUND: ${filePath}\n`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)
    || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  console.log(`\n${'='.repeat(70)}`);
  console.log(`=== ${label} ===`);
  console.log(`${'='.repeat(70)}`);
  console.log(`<title>: ${titleMatch ? titleMatch[1].trim() : 'NOT FOUND'}`);
  console.log(`<meta description>: ${descMatch ? descMatch[1] : 'NOT FOUND'}`);
  console.log(`<link canonical>: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}`);
  console.log(`<h1> count: ${h1Matches.length}`);
  h1Matches.forEach((m, i) => {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    console.log(`  h1[${i}]: ${text.substring(0, 120)}`);
  });
  console.log(`JSON-LD blocks: ${jsonLdMatches.length}`);
  jsonLdMatches.forEach((m, i) => {
    try {
      const parsed = JSON.parse(m[1]);
      console.log(`  ld+json[${i}]: @type=${parsed['@type']}`);
    } catch(e) {
      console.log(`  ld+json[${i}]: (parse error)`);
    }
  });
}

const buildDir = path.resolve(__dirname, '../build');
extract(path.join(buildDir, 'index.html'), '/  (Home)');
extract(path.join(buildDir, 'ai-company-madurai/index.html'), '/ai-company-madurai');
extract(path.join(buildDir, 'ai-software-services-chennai/index.html'), '/ai-software-services-chennai');
