const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const buildDir = path.resolve(__dirname, '../build');
const routerFile = path.join(srcDir, 'home/Routerpage.jsx');
const sitemapFile = path.resolve(__dirname, '../public/sitemap.xml');

const routerContent = fs.readFileSync(routerFile, 'utf8');

// Parse regular imports
const importMatches = [...routerContent.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g)];
// Parse lazy imports: const X = lazy(() => import('...'))
const lazyMatches = [...routerContent.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\)/g)];

const importMap = {};
function resolveComponent(compName, rawPath) {
  let compPath = rawPath;
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
}

importMatches.forEach(m => resolveComponent(m[1], m[2]));
lazyMatches.forEach(m => resolveComponent(m[1], m[2]));

// Parse routes from router
const routeMatches = [
  ...routerContent.matchAll(/<Route\s+path=["']([^"']+)["']\s+element=\{<(\w+)\s*\/>\}><\/Route>/g),
  ...routerContent.matchAll(/<Route\s+path=["']([^"']+)["']\s+element=\{<Navigate\s+to=["']([^"']+)["']/g)
];

const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
const sitemapRoutes = [...sitemapContent.matchAll(/<loc>https:\/\/www\.vrmaitechnology\.com([^<]*)<\/loc>/g)].map(m => m[1] || '/');

// Collect all unique route paths
const allRoutes = new Set();
// Add router routes
const routerRoutes = [];
const redirectMap = {};
for (const m of routeMatches) {
  const rPath = m[1];
  if (rPath.startsWith('/onepage-')) continue;
  if (m[2] && !m[0].includes('Navigate')) {
    routerRoutes.push({ route: rPath, component: m[2] });
    allRoutes.add(rPath);
  } else if (m[0].includes('Navigate')) {
    redirectMap[rPath] = m[2];
    allRoutes.add(rPath);
  }
}
sitemapRoutes.forEach(r => allRoutes.add(r));

// Specific routes mentioned in prompt: /articles, /privacy-policy, /terms-conditions, /project, /team, /team-details, /blog-list, /blog-grid, /voice-ai-solutions, /ai-chatbot-development, /ai-consulting
['/articles', '/privacy-policy', '/terms-conditions', '/project', '/team', '/team-details', '/blog-list', '/blog-grid', '/voice-ai-solutions', '/ai-chatbot-development', '/ai-consulting'].forEach(r => allRoutes.add(r));

// Load baseline audit data if available
let baselineMap = {};
const baselineFile = path.resolve(__dirname, '../audit_table_data.json');
if (fs.existsSync(baselineFile)) {
  try {
    const baseList = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
    baseList.forEach(item => {
      baselineMap[item.route] = item;
    });
  } catch (e) {}
}

const auditResults = [];

for (const route of Array.from(allRoutes).sort()) {
  const isRedirect = !!redirectMap[route];
  const targetRedirect = redirectMap[route];

  // Check prerendered HTML first
  let htmlPath;
  if (route === '/' || route === '') {
    htmlPath = path.join(buildDir, 'index.html');
  } else {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    htmlPath = path.join(buildDir, cleanRoute, 'index.html');
  }

  let title = '';
  let desc = '';
  let canonical = '';
  let h1 = '';
  let schemas = [];
  let wordCount = 0;
  let inSitemap = sitemapRoutes.includes(route);
  let status = 'OK';

  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) title = titleMatch[1].replace(/&amp;/g, '&').trim();

    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    if (descMatch) desc = descMatch[1].replace(/&amp;/g, '&').trim();

    const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
    if (canonMatch) canonical = canonMatch[1].trim();

    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) h1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

    const schemaMatches = [...html.matchAll(/["']@type["']\s*:\s*["'](\w+)["']/g)];
    schemas = [...new Set(schemaMatches.map(s => s[1]))];

    // Word count from body text
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyText = (bodyMatch ? bodyMatch[1] : html)
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z]+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    wordCount = bodyText ? bodyText.split(' ').filter(w => w.length > 1).length : 0;
  } else {
    // If not in build, check JSX component
    const rObj = routerRoutes.find(r => r.route === route);
    if (rObj && importMap[rObj.component] && fs.existsSync(importMap[rObj.component])) {
      const jsx = fs.readFileSync(importMap[rObj.component], 'utf8');
      const titleMatch = jsx.match(/<title>([\s\S]*?)<\/title>/i);
      if (titleMatch) title = titleMatch[1].replace(/&amp;/g, '&').trim();

      const descMatch = jsx.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
      if (descMatch) desc = descMatch[1].replace(/&amp;/g, '&').trim();

      const canonMatch = jsx.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
      if (canonMatch) canonical = canonMatch[1].trim();

      const h1Match = jsx.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      if (h1Match) h1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      else {
        const breadMatch = jsx.match(/<Breadcrumb\s+title=["']([^"']+)["']/i);
        if (breadMatch) h1 = breadMatch[1].trim();
      }

      const schemaMatches = [...jsx.matchAll(/["']@type["']\s*:\s*["'](\w+)["']/g)];
      schemas = [...new Set(schemaMatches.map(s => s[1]))];

      const stripped = jsx.replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
                          .replace(/<script[\s\S]*?<\/script>/gi, '')
                          .replace(/<style[\s\S]*?<\/style>/gi, '')
                          .replace(/<[^>]+>/g, ' ')
                          .replace(/\{[^}]+\}/g, ' ')
                          .replace(/\s+/g, ' ')
                          .trim();
      wordCount = stripped ? stripped.split(' ').filter(w => w.length > 1).length : 0;
    }
  }

  // Determine status & before values
  const before = baselineMap[route] || {};
  const beforeH1 = before.h1 || (before.route ? '(None)' : 'N/A');
  const beforeTitle = before.title || '';
  const beforeDesc = before.desc || '';

  if (isRedirect) {
    status = `301 Redirect -> ${targetRedirect}`;
  } else if (!inSitemap && !fs.existsSync(htmlPath)) {
    status = 'Noindex / Removed from sitemap';
  } else if (!inSitemap) {
    status = 'Noindex (Prerendered)';
  } else {
    const issues = [];
    if (!title) issues.push('No Title');
    else if (title.length > 60) issues.push(`Title ${title.length}>60`);
    if (!desc) issues.push('No Desc');
    else if (desc.length > 155) issues.push(`Desc ${desc.length}>155`);
    if (!h1) issues.push('No H1');
    if (!canonical) issues.push('No Canonical');
    status = issues.length > 0 ? issues.join(', ') : 'OK (Indexed)';
  }

  auditResults.push({
    route,
    title,
    titleLen: title.length,
    desc,
    descLen: desc.length,
    h1Before: beforeH1,
    h1After: h1 || (isRedirect ? `Redirects to ${targetRedirect}` : 'None'),
    canonical,
    schemas: schemas.join(', ') || 'None',
    wordCount,
    inSitemap,
    status
  });
}

fs.writeFileSync(path.resolve(__dirname, '../audit_table_full.json'), JSON.stringify(auditResults, null, 2), 'utf8');
console.log(`Generated full audit table with ${auditResults.length} routes.`);
