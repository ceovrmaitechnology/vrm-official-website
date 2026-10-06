const fs = require('fs');

// Patch server/index.js
let serverContent = fs.readFileSync('server/index.js', 'utf8');
serverContent = serverContent.replace(
  '"/products/vrm-real-estate": "/products/vrm-reality",',
  '"/products/vrm-real-estate": "/products/vrm-reality",\n  "/solutions/ai-consulting-services": "/solutions",\n  "/ai-consulting": "/solutions",\n  "/products/vevora": "/products/vrm-reality",'
);
fs.writeFileSync('server/index.js', serverContent);

// Patch public/_redirects
let redirectsContent = fs.readFileSync('public/_redirects', 'utf8');
redirectsContent += '\n/solutions/ai-consulting-services /solutions 301\n/ai-consulting /solutions 301\n/products/vevora /products/vrm-reality 301\n';
fs.writeFileSync('public/_redirects', redirectsContent);

// Patch public/.htaccess
let htaccessContent = fs.readFileSync('public/.htaccess', 'utf8');
htaccessContent = htaccessContent.replace(
  'RewriteRule ^products/vrm-real-estate/?$ /products/vrm-reality [R=301,L]',
  'RewriteRule ^products/vrm-real-estate/?$ /products/vrm-reality [R=301,L]\nRewriteRule ^solutions/ai-consulting-services/?$ /solutions [R=301,L]\nRewriteRule ^ai-consulting/?$ /solutions [R=301,L]\nRewriteRule ^products/vevora/?$ /products/vrm-reality [R=301,L]'
);
fs.writeFileSync('public/.htaccess', htaccessContent);

console.log('Redirects patched');
