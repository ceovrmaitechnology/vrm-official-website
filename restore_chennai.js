const fs = require('fs');

let file = 'src/inner/AIInnovationIndia.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add the section "Serving businesses in Chennai and across India"
let chennaiSection = `
            {/* Chennai Section */}
            <div className="vrm-full-width-section vrm-white-bg" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title mb-4" style={{ fontSize: '32px', fontWeight: '800', color: '#0e1022' }}>
                                Serving businesses in Chennai and across India
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                India's technology ecosystem requires robust, scalable infrastructure and precise engineering. Our teams are dedicated to building systems that support growth and streamline operations for modern enterprises. We understand the local market nuances and the global standards expected by our partners.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology serves businesses in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request. Registered office: Bengaluru.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                Our continuous investment in research and development ensures that our software platforms remain secure, highly available, and aligned with the latest industry regulations and best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
`;

// Insert before {/* 4. FAQs Section */}
content = content.replace('{/* 4. FAQs Section */}', chennaiSection + '\n            {/* 4. FAQs Section */}');

// 2. Add FAQ "Do you serve Chennai?"
let chennaiFAQ = `
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Do you serve Chennai?</Accordion.Header>
                                <Accordion.Body>
                                    VRM AI Technology serves businesses in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request. Registered office: Bengaluru.
                                </Accordion.Body>
                            </Accordion.Item>
`;

content = content.replace('</Accordion>', chennaiFAQ + '\n                        </Accordion>');

fs.writeFileSync(file, content);

// Add Chennai to areaServed in schemas
const schemaFiles = [
    'src/inner/AICompanyBangalore.jsx',
    'src/inner/AICompanyMadurai.jsx',
    'src/inner/AICompanyTamilNadu.jsx',
    'src/inner/AIInnovationIndia.jsx',
    'src/home/HomeOne.jsx',
    'src/inner/AIDevelopmentServices.jsx',
    'src/inner/AIIntegrationServices.jsx'
];

schemaFiles.forEach(sf => {
    if (fs.existsSync(sf)) {
        let sc = fs.readFileSync(sf, 'utf8');
        sc = sc.replace(/"areaServed": \["Bangalore", "Madurai", "Tamil Nadu", "India"\]/g, '"areaServed": ["Bangalore", "Madurai", "Chennai", "Tamil Nadu", "India"]');
        sc = sc.replace(/"areaServed": \["Madurai", "Bangalore", "Tamil Nadu", "India"\]/g, '"areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]');
        sc = sc.replace(/"areaServed": \["Madurai", "Tamil Nadu", "India"\]/g, '"areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]');
        fs.writeFileSync(sf, sc);
    }
});

console.log("Chennai restored");
