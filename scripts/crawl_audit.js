const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const routerFile = path.join(srcDir, 'home/Routerpage.jsx');
const routerContent = fs.readFileSync(routerFile, 'utf8');

// Parse route imports and route definitions
const importMatches = [...routerContent.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g)];
const importMap = {};
importMatches.forEach(m => {
  const compName = m[1];
  let compPath = m[2];
  if (!compPath.endsWith('.jsx') && !compPath.endsWith('.js')) {
    const fullPathJsx = path.resolve(path.join(srcDir, 'home'), compPath + '.jsx');
    const fullPathJs = path.resolve(path.join(srcDir, 'home'), compPath + '.js');
    if (fs.existsSync(fullPathJsx)) compPath = fullPathJsx;
    else if (fs.existsSync(fullPathJs)) compPath = fullPathJs;
    else compPath = path.resolve(path.join(srcDir, 'home'), compPath);
  } else {
    compPath = path.resolve(path.join(srcDir, 'home'), compPath);
  }
  importMap[compName] = compPath;
});

const routeMatches = [...routerContent.matchAll(/<Route\s+path=["']([^"']+)["']\s+element=\{<(\w+)\s*\/>\}><\/Route>/g)];

const results = [];

// Also add default fallback
routeMatches.forEach(m => {
  const routePath = m[1];
  if (routePath.startsWith('/onepage-')) return;
  const compName = m[2];
  const compFile = importMap[compName];

  if (!compFile || !fs.existsSync(compFile)) {
    results.push({
      route: routePath,
      compName,
      file: 'NOT FOUND',
      title: '',
      desc: '',
      h1: '',
      canonical: '',
      schemas: [],
      wordCount: 0,
      status: 'needs fix'
    });
    return;
  }

  const content = fs.readFileSync(compFile, 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Meta description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';

  // Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const canonical = canonMatch ? canonMatch[1].trim() : '';

  // H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let h1 = '';
  if (h1Match) {
    h1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim();
  } else {
    const breadcrumbMatch = content.match(/<Breadcrumb\s+title=["']([^"']+)["']/i);
    if (breadcrumbMatch) {
      h1 = breadcrumbMatch[1].trim();
    }
  }

  // Schema types
  const schemaMatches = [...content.matchAll(/["']@type["']\s*:\s*["'](\w+)["']/g)];
  const schemas = [...new Set(schemaMatches.map(s => s[1]))];

  // Approximate word count from JSX text (stripping tags, scripts, imports)
  const strippedText = content
    .replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = strippedText ? strippedText.split(' ').filter(w => w.length > 1).length : 0;

  let issues = [];
  if (!title) issues.push('Missing title');
  else if (title.length > 60) issues.push(`Title > 60 chars (${title.length})`);
  else if (/[A-Z\s]{6,}/.test(title.replace('VRM AI Technology', '').replace('VRM AI', ''))) issues.push('ALL CAPS in title');

  if (!desc) issues.push('Missing meta description');
  else if (desc.length > 155) issues.push(`Desc > 155 chars (${desc.length})`);

  if (!h1) issues.push('Missing H1');
  if (!canonical) issues.push('Missing canonical');

  results.push({
    route: routePath,
    compName,
    file: path.relative(srcDir, compFile),
    title,
    desc,
    h1,
    canonical,
    schemas,
    wordCount: words,
    issues,
    status: issues.length === 0 ? 'OK' : 'needs fix'
  });
});

fs.writeFileSync(path.join(__dirname, '../audit_after_data.json'), JSON.stringify(results, null, 2), 'utf8');
console.log(`Saved audit of ${results.length} pages to audit_after_data.json`);
