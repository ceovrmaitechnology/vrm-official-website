const fs = require('fs');

function replaceInFile(file, matchStr, replaceStr) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(new RegExp(matchStr, 'g'), replaceStr);
    fs.writeFileSync(file, content);
}

replaceInFile('src/components/footer/FooterOne.jsx', '<h6 className="vrm-footer-sub-title" style={{ marginTop: \'0px\' }}>AI Consulting &amp; Strategy</h6>[\\s\\S]*?<li><Link to="/solutions/ai-integration-services">AI Integration Services</Link></li>\\s*</ul>', '');
let footer = fs.readFileSync('src/components/footer/FooterOne.jsx', 'utf8');
if (!footer.includes('AI Integration Services')) {
    footer = footer.replace(/<h6 className="vrm-footer-sub-title">AI Development<\/h6>\s*<ul className="footer-links">/, '<h6 className="vrm-footer-sub-title">AI Development</h6>\n                                <ul className="footer-links">\n                                <li><Link to="/solutions/ai-integration-services">AI Integration Services</Link></li>');
    fs.writeFileSync('src/components/footer/FooterOne.jsx', footer);
}

replaceInFile('src/components/header/Nav.jsx', '<span className="category-title">AI Consulting & Strategy</span>[\\s\\S]*?<li><Link to={\'/solutions/ai-consulting-services\'} onMouseEnter={() => handleLinkHover(\'ai-consulting\')}>AI Consulting Services</Link></li>', '');

replaceInFile('src/components/home/HomeOverview.jsx', '\\{[\\s\\S]*?title: "AI Consulting Services",[\\s\\S]*?link: "/solutions/ai-consulting-services"[\\s\\S]*?\\},', '');

replaceInFile('src/inner/SolutionsOverview.jsx', 'category: "AI Consulting & Strategy",', 'category: "AI Strategy & Architecture",');

let globFiles = [
    'src/inner/AICompanyBangalore.jsx',
    'src/inner/AICompanyChennai.jsx',
    'src/inner/AICompanyMadurai.jsx',
    'src/inner/AICompanyTamilNadu.jsx',
    'src/inner/AIInnovationIndia.jsx',
    'src/inner/AboutUs.jsx',
    'src/inner/GenerativeAIDevelopment.jsx',
];
for(let file of globFiles) {
    if (!fs.existsSync(file)) continue;
    let c = fs.readFileSync(file, 'utf8');
    c = c.replace(/\{\s*title: "AI Strategy & Consulting",[^\}]+link: "\/solutions\/ai-consulting-services"\s*\},?/g, '');
    c = c.replace(/\{\s*title: "AI Architecture Consulting",[^\}]+link: "\/solutions\/ai-consulting-services"\s*\},?/g, '');
    c = c.replace(/\{\s*title: "Enterprise AI Consulting",[^\}]+link: "\/solutions\/ai-consulting-services"\s*\},?/g, '');
    c = c.replace(/<div className="col-lg-6 col-md-6 col-sm-12 col-12">\s*<div className="single-about-service-inner">\s*<div className="icon">\s*<img src="\/assets\/images\/Solutions\/AIConsultingService\.png"[^>]+>\s*<\/div>\s*<h4 className="service-title-about">AI solutions<\/h4>\s*<Link to="\/solutions\/ai-consulting-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"><\/i><\/Link>\s*<\/div>\s*<\/div>/g, '');
    
    // AICompanyChennai.jsx leftovers
    c = c.replace(/Book Technical Consultation/g, 'Book Technical Assessment');
    c = c.replace(/Schedule a Consultation/g, 'Schedule an Assessment');
    
    fs.writeFileSync(file, c);
}

// Remove sitemap line
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
sitemap = sitemap.replace(/<url>\s*<loc>https:\/\/www\.vrmaitechnology\.com\/solutions\/ai-consulting-services<\/loc>\s*<\/url>/, '');
fs.writeFileSync('public/sitemap.xml', sitemap);
