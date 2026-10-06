const fs = require('fs');

// Routerpage.jsx
let routerFile = 'src/home/Routerpage.jsx';
let routerContent = fs.readFileSync(routerFile, 'utf8');
if (!routerContent.includes('<Route path="/voice-ai-solutions" element={<Navigate to="/solutions/ai-calling-agent" replace />}></Route>')) {
    routerContent = routerContent.replace(
        '<Routes>',
        '<Routes>\n                    <Route path="/voice-ai-solutions" element={<Navigate to="/solutions/ai-calling-agent" replace />}></Route>'
    );
    fs.writeFileSync(routerFile, routerContent);
}

// .htaccess
let htaccessFile = 'public/.htaccess';
let htaccessContent = fs.readFileSync(htaccessFile, 'utf8');
if (!htaccessContent.includes('RewriteRule ^voice-ai-solutions/?$ /solutions/ai-calling-agent [R=301,L]')) {
    htaccessContent = htaccessContent.replace(
        'RewriteRule ^products/vrm-real-estate/?$ /products/vrm-reality [R=301,L]',
        'RewriteRule ^voice-ai-solutions/?$ /solutions/ai-calling-agent [R=301,L]\nRewriteRule ^products/vrm-real-estate/?$ /products/vrm-reality [R=301,L]'
    );
    fs.writeFileSync(htaccessFile, htaccessContent);
}

// _redirects
let redirectsFile = 'public/_redirects';
let redirectsContent = fs.readFileSync(redirectsFile, 'utf8');
if (!redirectsContent.includes('/voice-ai-solutions /solutions/ai-calling-agent 301')) {
    redirectsContent += '\n/voice-ai-solutions /solutions/ai-calling-agent 301\n';
    fs.writeFileSync(redirectsFile, redirectsContent);
}

console.log('Voice AI Redirects patched');
