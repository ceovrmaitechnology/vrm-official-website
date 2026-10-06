const fs = require('fs');
const path = require('path');

const routes = [
    '/',
    '/ai-company-madurai',
    '/ai-company-bangalore',
    '/ai-software-services-chennai',
    '/contactus',
    '/products/workflow',
    '/products/vrm-reality',
    '/products/exitinterview'
];

console.log("=== TASK 2: Tag Counts ===");
console.log("Route | <title> count | name=\"description\" count | rel=\"canonical\" count | <h1> count");

for (const route of routes) {
    let filePath = path.join(__dirname, 'build', route === '/' ? 'index.html' : route, 'index.html');
    if (route === '/') {
        filePath = path.join(__dirname, 'build', 'index.html');
    }
    
    if (!fs.existsSync(filePath)) {
        console.log(`${route} | FILE NOT FOUND`);
        continue;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    const titleMatches = content.match(/<title/gi) || [];
    const descMatches = content.match(/name=["']description["']/gi) || [];
    const canonicalMatches = content.match(/rel=["']canonical["']/gi) || [];
    const h1Matches = content.match(/<h1/gi) || [];
    
    console.log(`${route} | ${titleMatches.length} | ${descMatches.length} | ${canonicalMatches.length} | ${h1Matches.length}`);
}

console.log("\n=== TASK 6a: Title and Description Lengths ===");
console.log("Route | Title | Title Length | Description Length");

const allRoutes = [
    '/', '/about-us', '/contactus', '/careers', 
    '/ai-company-madurai', '/ai-company-bangalore', '/ai-software-services-chennai',
    '/ai-company-tamil-nadu', '/ai-innovation-india', '/solutions',
    '/generative-ai-development', '/solutions/ai-chatbot-development',
    '/solutions/ai-calling-agent', '/solutions/ai-consulting-services',
    '/solutions/ai-development-services', '/solutions/ai-integration-services',
    '/solutions/machine-learning-services', '/products', '/products/workflow',
    '/products/workflow/xpress-screening', '/products/workflow/screensage',
    '/products/workflow/videosage', '/products/workflow/codesage',
    '/products/people-connect', '/products/aibuddy', '/products/exitinterview',
    '/products/visionix', '/products/vrm-reality', '/products/bench-to-deploy',
    '/privacy-policy', '/terms-conditions', '/404', '/pricing-plane', '/fake-404-url'
];

for (const route of allRoutes) {
    let filePath = path.join(__dirname, 'build', route === '/' ? 'index.html' : route, 'index.html');
    if (route === '/') {
        filePath = path.join(__dirname, 'build', 'index.html');
    } else if (route === '/404') {
        filePath = path.join(__dirname, 'build', '404.html');
    } else if (route === '/fake-404-url' || route === '/pricing-plane') {
        filePath = path.join(__dirname, 'build', '404.html'); // prerender doesn't output these separately, it just handles 404
    }
    
    // For React app built with prerender, if it doesn't exist, we skip
    if (!fs.existsSync(filePath)) {
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "NOT FOUND";
    const titleLength = title !== "NOT FOUND" ? title.length : 0;
    
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) || 
                      content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : "NOT FOUND";
    const descLength = desc !== "NOT FOUND" ? desc.length : 0;
    
    console.log(`${route} | ${title} | ${titleLength} | ${descLength}`);
}
