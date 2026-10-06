const fs = require('fs');

let home = fs.readFileSync('src/home/HomeOne.jsx', 'utf8');

const sameAsArray = [
    "https://x.com/vrmaitechnology",
    "https://www.youtube.com/@vrmaitech",
    "https://www.facebook.com/profile.php?id=61589969476629",
    "https://www.linkedin.com/in/subbulakshmi-varatharajan-517757393"
];

// In generate_seo_pages.js I injected the schema but didn't include sameAs. Let's add it.
home = home.replace(/"addressCountry": "IN"\s*\},/g, '"addressCountry": "IN"\n                        },\n                        "sameAs": ' + JSON.stringify(sameAsArray) + ',\n                        "iso6523": "0151:E20260749630",\n                        "description": "ISO 9001:2015 Certified",');

fs.writeFileSync('src/home/HomeOne.jsx', home);
