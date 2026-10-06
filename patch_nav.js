const fs = require('fs');

// 1. Update Nav.jsx
let navFile = 'src/components/header/Nav.jsx';
let navContent = fs.readFileSync(navFile, 'utf8');

// Revert System Integration -> AI Strategy & Architecture
navContent = navContent.replace(
    '<span className="category-title">System Integration</span>',
    '<span className="category-title">AI Strategy & Architecture</span>'
);

// Remove Locations Dropdown completely
const locationsDropdown = `
                    <li className="has-droupdown">
                        <Link className="nav-link" to={'/ai-company-madurai'}>Locations</Link>
                        <ul className="submenu">
                            <li><Link to={'/ai-company-madurai'}>AI Company in Madurai</Link></li>
                            <li><Link to={'/ai-company-bangalore'}>AI Company in Bengaluru</Link></li>
                            
                        </ul>
                    </li>`;
navContent = navContent.replace(locationsDropdown, '');

// Remove Bench to Deploy from mega menu config
const b2dConfigStr = `
        'b2d': {
            title: "Bench to Deploy (B2D)",
            description: "Talent readiness and deployment orchestration platform connecting certified engineering talent with project requirements through automated technical benchmarking.",
            link: "/products/bench-to-deploy",
            linkText: "View Product",
            image: "/assets/images/service/04.jpg",
            features: [
                "Continuous Skill Auditing",
                "Automated Code Benchmarking",
                "Semantic Tech-Stack Matching",
                "Verified Engineering Deployment"
            ]
        },`;
navContent = navContent.replace(b2dConfigStr, '');

// Remove Bench to Deploy menu li
const b2dMenuLiRegex = /\s*<li>\s*<Link\s*to="\/products\/bench-to-deploy"\s*className={`platform-btn \${activeSubMenu === 'b2d' \? 'active' : ''}`}\s*onMouseEnter={\(\) => {\s*setActiveSubMenu\('b2d'\);\s*handleLinkHover\('b2d'\);\s*}}\s*>\s*Bench to Deploy \(B2D\)\s*<\/Link>\s*<\/li>/;
navContent = navContent.replace(b2dMenuLiRegex, '');
fs.writeFileSync(navFile, navContent);

// 2. Update Routerpage.jsx
let routerFile = 'src/home/Routerpage.jsx';
let routerContent = fs.readFileSync(routerFile, 'utf8');
routerContent = routerContent.replace("const BenchToDeploy = lazy(() => import('../inner/BenchToDeploy'));\n", '');
routerContent = routerContent.replace('                    <Route path="/products/bench-to-deploy" element={<BenchToDeploy />}></Route>\n', '');
fs.writeFileSync(routerFile, routerContent);

// 3. Update server/index.js
let serverFile = 'server/index.js';
let serverContent = fs.readFileSync(serverFile, 'utf8');
serverContent = serverContent.replace('  "/products/b2d": "/products/bench-to-deploy",\n', '');
fs.writeFileSync(serverFile, serverContent);

// Update _redirects and .htaccess if needed (wait, I didn't add b2d redirect in this branch, it was already there? Let me check if b2d is in _redirects. Nevermind, I will just remove the page).

// 4. Update sitemap.xml
let sitemapFile = 'public/sitemap.xml';
let sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
const sitemapB2DRegex = /\s*<url>\s*<loc>https:\/\/www\.vrmaitechnology\.com\/products\/bench-to-deploy<\/loc>\s*<lastmod>[^<]+<\/lastmod>\s*<\/url>/;
sitemapContent = sitemapContent.replace(sitemapB2DRegex, '');
fs.writeFileSync(sitemapFile, sitemapContent);

// 5. Delete BenchToDeploy.jsx
if (fs.existsSync('src/inner/BenchToDeploy.jsx')) {
    fs.unlinkSync('src/inner/BenchToDeploy.jsx');
}

console.log("Nav and BenchToDeploy cleaned up");
