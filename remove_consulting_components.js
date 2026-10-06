const fs = require('fs');

function replaceInFile(file, replacements) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    for (let r of replacements) {
        if (content.match(r.match)) {
            content = content.replace(r.match, r.replace);
            modified = true;
        }
    }
    if (modified) fs.writeFileSync(file, content);
}

// Nav.jsx
replaceInFile('src/components/header/Nav.jsx', [
    { match: /\s*'ai-consulting':[\s\S]*?\},/, replace: '' },
    { match: /<span className="category-title">AI Consulting & Strategy<\/span>\s*<li><Link to=\{'\/solutions\/ai-consulting-services'\} onMouseEnter=\{[^}]+\}>AI Consulting Services<\/Link><\/li>/, replace: '' }
]);

// SideMenu.jsx
replaceInFile('src/components/header/SideMenu.jsx', [
    { match: /<li className="mobile-menu-link tag mt-2">AI Consulting & Strategy<\/li>\s*<li className="mobile-menu-link"><Link to=\{'\/solutions\/ai-consulting-services'\} onClick=\{toggleSidebar\}>AI Consulting Services<\/Link><\/li>/, replace: '' }
]);

// SolutionsOverview.jsx
replaceInFile('src/inner/SolutionsOverview.jsx', [
    { match: /\{\s*id: "ai-consulting-services",[\s\S]*?alt: "AI Consulting Services Strategy Session with Indian Executives"\s*\},/, replace: '' },
    { match: /Transforming businesses through strategic AI consulting, enterprise system integration, custom LLM software engineering, conversational voice agents, and predictive machine learning models\./, replace: 'Transforming businesses through enterprise system integration, custom LLM software engineering, conversational voice agents, and predictive machine learning models.' },
    { match: /Schedule a Consultation/g, replace: 'Schedule an Assessment' },
    { match: /Delivering specialized AI engineering, consulting, and product deployment across our primary innovation hubs and nationwide\./, replace: 'Delivering specialized AI engineering and product deployment across our primary innovation hubs and nationwide.' }
]);

// FooterOne.jsx
let footer = fs.readFileSync('src/components/footer/FooterOne.jsx', 'utf8');
footer = footer.replace(/<h6 className="vrm-footer-sub-title" style={{ marginTop: '0px' }}>AI Consulting &amp; Strategy<\/h6>\s*<ul className="footer-links">\s*<li><Link to="\/ai-consulting">AI Consulting<\/Link><\/li>\s*<li><Link to="\/solutions\/ai-consulting-services">Strategy &amp; Architecture<\/Link><\/li>\s*<li><Link to="\/solutions\/ai-integration-services">AI Integration Services<\/Link><\/li>\s*<\/ul>/, '');
footer = footer.replace(/(<h6 className="vrm-footer-sub-title">AI Development<\/h6>\s*<ul className="footer-links">)/, '$1\n                                <li><Link to="/solutions/ai-integration-services">AI Integration Services</Link></li>');
fs.writeFileSync('src/components/footer/FooterOne.jsx', footer);

// HomeOverview.jsx
replaceInFile('src/components/home/HomeOverview.jsx', [
    { match: /\{\s*title: "AI Consulting Services",\s*icon: "fa-lightbulb",\s*link: "\/solutions\/ai-consulting-services"\s*\},\s*/, replace: '' }
]);

console.log("Components updated.");
