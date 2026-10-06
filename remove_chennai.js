const fs = require('fs');

function forceReplace(file, regex, replacement) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content);
}

// Routerpage.jsx
forceReplace('src/home/Routerpage.jsx', /const AICompanyChennai = lazy\(\(\) => import\('\.\.\/inner\/AICompanyChennai'\)\);\n?/, '');
forceReplace('src/home/Routerpage.jsx', /<Route path="\/ai-software-services-chennai" element=\{<AICompanyChennai \/>\}><\/Route>\n?/, '');
forceReplace('src/home/Routerpage.jsx', /<Route path="\/ai-company-chennai" element=\{<Navigate to="\/ai-software-services-chennai" replace \/>\}><\/Route>\n?/, '');

// sitemap.xml
forceReplace('public/sitemap.xml', /<url>\s*<loc>https:\/\/www\.vrmaitechnology\.com\/ai-software-services-chennai<\/loc>\s*<lastmod>[^<]+<\/lastmod>\s*<\/url>\n?/, '');

// server/index.js
forceReplace('server/index.js', /\s*"\/ai-company-chennai": "\/ai-software-services-chennai",\n?/, '\n');

// public/.htaccess
forceReplace('public/.htaccess', /\s*RewriteRule \^ai-company-chennai\/\?\$ \/ai-software-services-chennai \[R=301,L\]\n?/, '\n');

// public/_redirects
forceReplace('public/_redirects', /\/ai-company-chennai\s*\/ai-software-services-chennai\s*301!\n?/, '');

// FooterOne.jsx
forceReplace('src/components/footer/FooterOne.jsx', /<li style=\{\{ marginBottom: '6px' \}\}>\s*<Link to="\/ai-software-services-chennai" style=\{\{ fontSize: '13px' \}\}>Chennai Services<\/Link>\s*<\/li>\n?/, '');

// Nav.jsx
forceReplace('src/components/header/Nav.jsx', /<li><Link to=\{'\/ai-software-services-chennai'\}>AI Services in Chennai \(Remote\)<\/Link><\/li>\n?/, '');

// SideMenu.jsx
forceReplace('src/components/header/SideMenu.jsx', /<li className="mobile-menu-link"><Link to=\{'\/ai-software-services-chennai'\} onClick=\{toggleSidebar\}>AI Services in Chennai \(Remote\)<\/Link><\/li>\n?/, '');
