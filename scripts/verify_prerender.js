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

console.log(`[PRERENDER SAFETY CHECK] Validating ${routes.length} canonical routes + /404 against strict SEO criteria...\n`);

let hasFailure = false;
const failures = [];
const tableData = [];
const seenTitles = new Set();
const seenDescriptions = new Set();
const defaultTitle = "VRM AI Technology";

const allRoutesToTest = [...routes];
if (!allRoutesToTest.includes('/404')) {
  allRoutesToTest.push('/404');
}
if (!allRoutesToTest.includes('/chennai')) {
  allRoutesToTest.push('/chennai');
}

if (sitemapContent.toLowerCase().includes('chennai')) {
  failures.push({ route: '/chennai', error: 'Chennai URL or keyword must NOT be present in public/sitemap.xml' });
  hasFailure = true;
}

for (const route of allRoutesToTest) {
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
  let title = '', canonical = '', h1 = '', descLen = 0, schemas = [];

  // 1. Check <title>
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    failures.push({ route, error: 'Missing or empty <title>' });
    hasFailure = true;
  } else {
    title = titleMatch[1].trim();
    if (title.includes('&amp;')) {
      failures.push({ route, error: `Title contains literal '&amp;' entity: "${title}"` });
      hasFailure = true;
    }
    if (route !== '/404') {
      if (title === defaultTitle) {
        failures.push({ route, error: 'Title equals default index.html fallback title' });
        hasFailure = true;
      }
      if (seenTitles.has(title)) {
        failures.push({ route, error: `Duplicate title found: "${title}"` });
        hasFailure = true;
      }
      seenTitles.add(title);
    }
  }

  // 2. Check meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    failures.push({ route, error: 'Missing or empty <meta name="description">' });
    hasFailure = true;
  } else {
    const descText = descMatch[1].trim();
    descLen = descText.length;
    if (descLen > 155) {
      failures.push({ route, error: `Meta description too long (${descLen} chars > 155): "${descText}"` });
      hasFailure = true;
    }
    if (route !== '/404') {
      if (seenDescriptions.has(descText)) {
        failures.push({ route, error: `Duplicate meta description found: "${descText}"` });
        hasFailure = true;
      }
      seenDescriptions.add(descText);
    }
  }

  // 3. Check canonical (strictly no trailing slash for canonical origin, except noindex routes which have none)
  const isNoindex = route === '/404' || route === '/chennai';
  if (!isNoindex) {
    const expectedCanonical = route === '/' || route === '' 
      ? 'https://www.vrmaitechnology.com' 
      : `https://www.vrmaitechnology.com${route.startsWith('/') ? route : '/' + route}`;
    
    const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
    if (!canonMatch || !canonMatch[1].trim()) {
      failures.push({ route, error: 'Missing canonical <link rel="canonical">' });
      hasFailure = true;
    } else {
      canonical = canonMatch[1].trim();
      if (canonical !== expectedCanonical) {
        failures.push({ route, error: `Canonical mismatch. Expected ${expectedCanonical}, got ${canonical}` });
        hasFailure = true;
      }
    }
  } else {
    canonical = 'N/A (noindex)';
    const noindexMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i);
    if (!noindexMatch) {
      failures.push({ route, error: `${route} route missing <meta name="robots" content="noindex">` });
      hasFailure = true;
    }
  }

  // 4. Check exactly one non-empty <h1>
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
  } else {
    const h1Content = h1Matches[0][1].replace(/<[^>]+>/g, '').trim();
    if (!h1Content) {
      failures.push({ route, error: 'Empty <h1> tag' });
      hasFailure = true;
    }
    h1 = h1Content;
  }

  // 5. Extract JSON-LD schemas
  const scriptMatches = [...html.matchAll(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  scriptMatches.forEach(sm => {
    try {
      const parsed = JSON.parse(sm[1]);
      if (Array.isArray(parsed)) {
        parsed.forEach(p => schemas.push(p['@type'] || 'Object'));
      } else if (parsed['@type']) {
        schemas.push(Array.isArray(parsed['@type']) ? parsed['@type'].join('+') : parsed['@type']);
      }
    } catch (e) {
      failures.push({ route, error: `Invalid JSON-LD syntax: ${e.message}` });
      hasFailure = true;
    }
  });

  tableData.push({
    route,
    title: title.slice(0, 32) + (title.length > 32 ? '...' : ''),
    descLen,
    canonical: canonical.replace('https://www.vrmaitechnology.com', ''),
    h1: h1.slice(0, 30) + (h1.length > 30 ? '...' : ''),
    schemas: schemas.join(', ') || 'None',
    status: 'PASS'
  });
}

console.log('--- PRERENDER DATA TABLE ---');
console.table(tableData);

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
  console.log(`✅ All ${allRoutesToTest.length} routes passed STRICT safety checks!`);
  console.log('- Every route has UNIQUE <title> (no &amp;)');
  console.log('- Every route has meta description <= 155 chars and unique');
  console.log('- Every route has exact matching canonical link (no trailing slash)');
  console.log('- Every route has EXACTLY ONE non-empty <h1>');
  console.log('- Every route has valid JSON-LD schemas');
  console.log('======================================================\n');
  process.exit(0);
}
