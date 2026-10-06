const http = require('http');

const routes = [
    '/', 
    '/ai-company-madurai', 
    '/ai-company-bangalore', 
    '/ai-software-services-chennai', 
    '/contactus', 
    '/products/workflow', 
    '/products/vrm-reality', 
    '/products/exitinterview', 
    '/ai-consulting', 
    '/pricing-plane', 
    '/fake-404-url'
];

function fetchUrl(url, redirectCount = 0) {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let location = res.headers.location;
                if (!location.startsWith('http')) {
                    location = new URL(location, url).href;
                }
                resolve(fetchUrl(location, redirectCount + 1));
                return;
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const titleMatch = data.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
                const canonicalMatch = data.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) || data.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
                const h1Match = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);

                let h1Text = "NOT FOUND";
                if (h1Match) {
                    h1Text = h1Match[1].replace(/<[^>]+>/g, '').trim();
                }

                resolve({
                    status: res.statusCode,
                    redirects: redirectCount,
                    title: titleMatch ? titleMatch[1].trim() : "NOT FOUND",
                    canonical: canonicalMatch ? canonicalMatch[1].trim() : "NOT FOUND",
                    h1: h1Text
                });
            });
        }).on('error', (err) => {
            resolve({ error: err.message });
        });
    });
}

(async () => {
    console.log("Route | Status | Redirects | Title | Canonical | H1");
    for (const route of routes) {
        const url = 'http://localhost:5000' + route;
        const res = await fetchUrl(url);
        if (res.error) {
            console.log(`${route} | ERROR: ${res.error}`);
        } else {
            console.log(`${route} | ${res.status} | ${res.redirects} | ${res.title} | ${res.canonical} | ${res.h1}`);
        }
    }
})();
