const fs = require('fs');

let contact = fs.readFileSync('src/inner/ContactUs.jsx', 'utf8');

// Replace "Madurai & Bengaluru, India." with "Madurai, India."
contact = contact.replace(/VRM AI Technology, Madurai & Bengaluru, India\./g, 'VRM AI Technology, Madurai, India.');

// Remove Bangalore map links in the 3 cards
// Card 1
contact = contact.replace(/<a\s+href="https:\/\/maps\.app\.goo\.gl\/5pnUj58biWePbEuUA"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="text-muted text-decoration-none hover-primary"\s*>\s*(GoodWorks Infinity Park,<br \/>)\s*(21, 2nd main Rd, near 21, Electronic City Phase I, Electronic City,<br \/>)\s*(Bengaluru, Karnataka 560100\.)\s*<\/a>/s, '<span className="text-muted">$1\n$2\n$3</span>');

// Card 2
contact = contact.replace(/<a\s+href="https:\/\/maps\.app\.goo\.gl\/5pnUj58biWePbEuUA"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="text-white text-decoration-none hover-primary"\s*>\s*(GoodWorks Infinity Park,<br \/>21, 2nd Main Rd, Electronic City Phase I,<br \/>Bengaluru, Karnataka 560100, India)\s*<\/a>/s, '<span className="text-white">$1</span>');

fs.writeFileSync('src/inner/ContactUs.jsx', contact);
