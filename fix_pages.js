const fs = require('fs');
const path = require('path');

// 1. Delete AIConsultingChennai.jsx
if (fs.existsSync('src/inner/AIConsultingChennai.jsx')) {
    fs.unlinkSync('src/inner/AIConsultingChennai.jsx');
}

// 2. Update Routerpage.jsx
let router = fs.readFileSync('src/home/Routerpage.jsx', 'utf8');
router = router.replace(/import AIConsultingChennai from '\.\.\/inner\/AIConsultingChennai';/g, "const AICompanyTamilNadu = lazy(() => import('../inner/AICompanyTamilNadu'));");
router = router.replace(/const AIConsultingChennai = lazy\(\(\) => import\('\.\.\/inner\/AIConsultingChennai'\)\);/g, "const AICompanyTamilNadu = lazy(() => import('../inner/AICompanyTamilNadu'));");
router = router.replace(/<Route path="\/ai-consulting-chennai" element={<AIConsultingChennai \/>}><\/Route>/g, '<Route path="/ai-company-tamil-nadu" element={<AICompanyTamilNadu />}></Route>');
fs.writeFileSync('src/home/Routerpage.jsx', router);

// 3. Update sitemap.xml
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
sitemap = sitemap.replace(/\/ai-consulting-chennai/g, '/ai-company-tamil-nadu');
fs.writeFileSync('public/sitemap.xml', sitemap);

// 4. Update AICompanyBangalore.jsx
let bangalore = fs.readFileSync('src/inner/AICompanyBangalore.jsx', 'utf8');
// Rewrite bangalore content safely
const bangaloreNewContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

export default function AICompanyBangalore() {
    return (
        <div>
            <Helmet>
                <title>Top AI Innovation Company in Bangalore | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is a top AI innovation company in Bangalore. Headquartered in Bengaluru, we deliver generative AI solutions remotely and on-site." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "legalName": "VRM AI Technology (OPC) Private Limited",
                        "name": "VRM AI Technology",
                        "url": "https://www.vrmaitechnology.com/",
                        "telephone": "+91 81233 48355",
                        "email": "contactus@vrmaitechnology.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I",
                            "addressLocality": "Bengaluru",
                            "addressRegion": "Karnataka",
                            "postalCode": "560100",
                            "addressCountry": "IN"
                        },
                        "areaServed": ["Bangalore", "Madurai", "Chennai", "Tamil Nadu", "India"]
                    })}
                </script>
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>Top AI Innovation Company in Bangalore</h1>
                <p>As a top AI innovation company in Bangalore, VRM AI Technology is headquartered in Bengaluru. We partner with enterprises to deliver cutting-edge generative AI, machine learning, and automation products. Our registered office is located at GoodWorks Infinity Park, Electronic City Phase I.</p>
                <p>We serve Bangalore enterprises remotely and on-site on request. Our engineering and delivery are robustly managed and run from our Madurai office, ensuring top-tier technical quality and agile responsiveness for all client requirements.</p>
                <p>We build our innovative solutions upon a foundation of quality. As an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029), we implement robust quality management systems across our product suite, including Workflow.AI, People Connect (Global), AI Buddy, Exit Intelligence, Visionix AI, and VRM Reality.</p>
                <p>Our commitment to excellence is proven by our case studies: [FILL: Case Study 1], [FILL: Case Study 2].</p>

                <h2 className="mt-5 mb-4">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is VRM AI Technology based in Bangalore?</Accordion.Header>
                        <Accordion.Body>Yes, our registered office and headquarters are in Bengaluru, while our engineering and delivery team is based in Madurai.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do you offer on-site support in Bangalore?</Accordion.Header>
                        <Accordion.Body>We serve Bangalore enterprises remotely, with on-site visits and support available upon request.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What AI platforms do you provide?</Accordion.Header>
                        <Accordion.Body>We offer a robust suite of products including Workflow.AI, People Connect, AI Buddy, Exit Intelligence, Visionix AI, and VRM Reality.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <FooterOne />
        </div>
    );
}
`;
fs.writeFileSync('src/inner/AICompanyBangalore.jsx', bangaloreNewContent);

// 5. Update AIInnovationIndia.jsx (Pan-India Page)
let panIndia = fs.readFileSync('src/inner/AIInnovationIndia.jsx', 'utf8');
if (!panIndia.includes('Serving businesses in Chennai')) {
    const chennaiSection = `
                <h2 className="mt-5">Custom AI Solutions for Chennai Businesses</h2>
                <p>Are you looking for an AI company serving Chennai? VRM AI Technology is proud to partner with businesses across the nation. Serving businesses in Chennai and across India, delivered remotely and on-site on request, we provide generative AI and machine learning platforms that drive measurable ROI without requiring you to build an internal engineering team.</p>
                
                <h3 className="mt-4 mb-3">Frequently Asked Questions</h3>
                <Accordion className="mb-5">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do you serve Chennai?</Accordion.Header>
                        <Accordion.Body>Yes, as a premier AI company serving Chennai, we deliver enterprise-grade AI solutions to Chennai clients remotely from our headquarters and development centers, with on-site visits upon request.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
`;
    panIndia = panIndia.replace('</div>\n            <FooterOne />', chennaiSection + '            </div>\n            <FooterOne />');
    fs.writeFileSync('src/inner/AIInnovationIndia.jsx', panIndia);
}

// 6. Fix VrmReality.jsx H1 and Schema Price
let vrmReality = fs.readFileSync('src/inner/VrmReality.jsx', 'utf8');
vrmReality = vrmReality.replace(/<h1 className="title text-white">Immersive VR Property Showcase Platform<\/h1>/, '<h1 className="title text-white">VRM Reality</h1>');
vrmReality = vrmReality.replace(/"offers":\s*\{\s*"@type":\s*"Offer",\s*"price":\s*"0",\s*"priceCurrency":\s*"INR"\s*\},/g, ''); // just in case it was there from my previous edits
fs.writeFileSync('src/inner/VrmReality.jsx', vrmReality);

// 7. Update AICompanyTamilNadu.jsx SEO and keyword
let tamilNadu = fs.readFileSync('src/inner/AICompanyTamilNadu.jsx', 'utf8');
tamilNadu = tamilNadu.replace(/<title>.*?<\/title>/, '<title>Top Growing AI Company in Tamil Nadu | VRM AI Technology</title>');
tamilNadu = tamilNadu.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="VRM AI Technology is recognized as a top growing AI company in Tamil Nadu. We deliver custom generative AI solutions across the state." />');
if(!tamilNadu.includes('top growing AI company in Tamil Nadu')) {
    tamilNadu = tamilNadu.replace(/<h1>.*?<\/h1>/, '<h1>Top Growing AI Company in Tamil Nadu</h1>');
}
fs.writeFileSync('src/inner/AICompanyTamilNadu.jsx', tamilNadu);

console.log("Pages generated/fixed.");
