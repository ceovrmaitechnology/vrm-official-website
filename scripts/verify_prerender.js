const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '../build');
const sitemapFile = path.resolve(__dirname, '../public/sitemap.xml');

if (!fs.existsSync(buildDir)) {
  console.error('[PRERENDER SAFETY CHECK FAILED] build/ directory does not exist.');
  process.exit(1);
}

if (!fs.existsSync(sitemapFile)) {
  console.error('[PRERENDER SAFETY CHECK FAILED] public/sitemap.xml does not exist.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>https:\/\/www\.vrmaitechnology\.com([^<]*)<\/loc>/g)];
const routes = locMatches.map(m => m[1] || '/');

console.log(`[PRERENDER SAFETY CHECK] Validating ${routes.length} routes against SEO criteria...`);

let hasFailure = false;
const failures = [];

for (const route of routes) {
  let filePath;
  if (route === '/' || route === '') {
    filePath = path.join(buildDir, 'index.html');
  } else {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    filePath = path.join(buildDir, cleanRoute, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    failures.push({ route, error: `Missing prerendered file: ${path.relative(buildDir, filePath)}` });
    hasFailure = true;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Check <title>
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    failures.push({ route, error: 'Missing or empty <title>' });
    hasFailure = true;
  }

  // 2. Check meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    failures.push({ route, error: 'Missing or empty <meta name="description">' });
    hasFailure = true;
  }

  // 3. Check canonical
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                     html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  if (!canonMatch || !canonMatch[1].trim()) {
    failures.push({ route, error: 'Missing or empty canonical <link rel="canonical">' });
    hasFailure = true;
  }

  // 4. Check exactly one <h1>
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) {
    failures.push({ route, error: 'Missing <h1> tag (0 found)' });
    hasFailure = true;
  } else if (h1Matches.length > 1) {
    failures.push({ 
      route, 
      error: `Multiple <h1> tags found (${h1Matches.length}): ${h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).join(' | ')}` 
    });
    hasFailure = true;
  }
}

if (hasFailure) {
  console.error('\n======================================================');
  console.error('❌ PRERENDER SAFETY CHECK FAILED');
  console.error('======================================================');
  failures.forEach(f => {
    console.error(`- Route ${f.route}: ${f.error}`);
  });
  console.error('======================================================\n');
  process.exit(1);
} else {
  console.log('\n======================================================');
  console.log(`✅ All ${routes.length} prerendered routes passed safety checks!`);
  console.log('- Every route has <title>');
  console.log('- Every route has meta description');
  console.log('- Every route has canonical link');
  console.log('- Every route has EXACTLY ONE <h1>');
  console.log('======================================================\n');
  process.exit(0);
}
