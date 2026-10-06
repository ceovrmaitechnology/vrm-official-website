const { execSync } = require('child_process');

async function runTests() {
    console.log("=== REDIRECT TESTS ===");
    
    const urls = [
        { url: "http://localhost:5005/products/vrm-real-estate", headers: "" },
        { url: "http://localhost:5005/solutions/ai-consulting-services", headers: "" },
        { url: "http://localhost:5005/ai-consulting", headers: "" },
        { url: "http://localhost:5005/voice-ai-solutions", headers: "" },
        { url: "http://localhost:5005/", headers: "-H 'Host: vrmaitechnology.com'" },
        { url: "http://localhost:5005/about-us", headers: "-H 'Host: www.vrmaitechnology.com' -H 'X-Forwarded-Proto: http'" }
    ];
    
    for (let item of urls) {
        try {
            const out = execSync('curl -s -I ' + item.headers + ' ' + item.url).toString();
            const location = out.split('\\r\\n').find(l => l.toLowerCase().startsWith('location: '));
            const httpCode = out.split('\\r\\n')[0].trim();
            console.log('Test: ' + item.url + ' ' + item.headers);
            console.log('HTTP: ' + httpCode);
            console.log(location ? location.trim() : 'No Location header');
            console.log('---');
        } catch(e) {
            console.log('Failed for ' + item.url);
        }
    }
}
runTests();
