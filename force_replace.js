const fs = require('fs');

function forceReplace(file, regex, replacement) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content);
}

// Nav
forceReplace('src/components/header/Nav.jsx', /<span className="category-title">AI Consulting & Strategy<\/span>[\s\S]*?<li><Link to=\{'\/solutions\/ai-consulting-services'\} onMouseEnter=\{[^}]+\}>AI Consulting Services<\/Link><\/li>/, '');

// sitemap
forceReplace('public/sitemap.xml', /<url>\s*<loc>https:\/\/www\.vrmaitechnology\.com\/solutions\/ai-consulting-services<\/loc>\s*<\/url>/, '');

// AICompanyBangalore, AICompanyMadurai, AICompanyChennai, AICompanyTamilNadu, AIInnovationIndia, GenerativeAIDevelopment
const innerFiles = [
    'src/inner/AICompanyBangalore.jsx',
    'src/inner/AICompanyMadurai.jsx',
    'src/inner/AICompanyChennai.jsx',
    'src/inner/AICompanyTamilNadu.jsx',
    'src/inner/AIInnovationIndia.jsx',
    'src/inner/GenerativeAIDevelopment.jsx',
    'src/inner/AboutUs.jsx'
];

for (let file of innerFiles) {
    forceReplace(file, /\{\s*title: "AI Strategy & Consulting",[\s\S]*?link: "\/solutions\/ai-consulting-services"\s*\},/g, '');
    forceReplace(file, /\{\s*title: "AI Architecture Consulting",[\s\S]*?link: "\/solutions\/ai-consulting-services"\s*\},/g, '');
    forceReplace(file, /\{\s*title: "Enterprise AI Consulting",[\s\S]*?link: "\/solutions\/ai-consulting-services"\s*\},/g, '');
    forceReplace(file, /<div className="col-lg-6 col-md-6 col-sm-12 col-12">\s*<div className="single-about-service-inner">\s*<div className="icon">\s*<img src="\/assets\/images\/Solutions\/AIConsultingService\.png"[^>]+>\s*<\/div>\s*<h4 className="service-title-about">AI solutions<\/h4>\s*<Link to="\/solutions\/ai-consulting-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"><\/i><\/Link>\s*<\/div>\s*<\/div>/g, '');
}

// AICompanyTamilNadu
forceReplace('src/inner/AICompanyTamilNadu.jsx', /desc: "[^"]*AI consultants\.",/g, 'desc: "End-to-end guidance from legacy data assessment to production architecture, led by experienced AI specialists.",');
