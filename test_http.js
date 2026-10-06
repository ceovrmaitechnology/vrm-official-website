const http = require('http');

function testUrl(path, host, headers = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 5005,
            path: path,
            method: 'HEAD',
            headers: {
                'Host': host,
                ...headers
            }
        };
        const req = http.request(options, (res) => {
            console.log('Test: ' + path + ' (Host: ' + host + ')');
            console.log('HTTP: ' + res.statusCode);
            if (res.headers.location) {
                console.log('Location: ' + res.headers.location);
            }
            console.log('---');
            resolve();
        });
        req.on('error', reject);
        req.end();
    });
}

async function run() {
    await testUrl('/products/vrm-real-estate', 'localhost:5005');
    await testUrl('/solutions/ai-consulting-services', 'localhost:5005');
    await testUrl('/ai-consulting', 'localhost:5005');
    await testUrl('/voice-ai-solutions', 'localhost:5005');
    await testUrl('/', 'vrmaitechnology.com'); // Test non-www to www HTTPS
    await testUrl('/about-us', 'www.vrmaitechnology.com', { 'x-forwarded-proto': 'http' }); // Test HTTP to HTTPS
}
run();
