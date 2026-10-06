const fs = require('fs');
let c = fs.readFileSync('server/index.js', 'utf8');
c = c.replace('"/products/b2d": "/products/bench-to-deploy",', '"/products/b2d": "/products/bench-to-deploy",\n  "/products/vevora": "/products/vrm-reality",');
fs.writeFileSync('server/index.js', c);
