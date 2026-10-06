const fs = require('fs');
const path = require('path');

// 1. Rename tamil nadu file to chennai
try {
    if(fs.existsSync('src/inner/AICompanyTamilNadu.jsx')) {
        fs.renameSync('src/inner/AICompanyTamilNadu.jsx', 'src/inner/AIConsultingChennai.jsx');
    }
} catch (e) {}

// 2. Update Routerpage.jsx
let routerContent = fs.readFileSync('src/home/Routerpage.jsx', 'utf8');
routerContent = routerContent.replace(/AICompanyTamilNadu/g, 'AIConsultingChennai');
routerContent = routerContent.replace(/\/ai-company-tamil-nadu/g, '/ai-consulting-chennai');
fs.writeFileSync('src/home/Routerpage.jsx', routerContent);

// 3. Update sitemap.xml
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
sitemap = sitemap.replace(/\/ai-company-tamil-nadu/g, '/ai-consulting-chennai');
fs.writeFileSync('public/sitemap.xml', sitemap);

// 4. Update VRM Reality Page
const vrmRealityContent = `import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

function VrmReality() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        window.scrollTo(0, 0);
    }, []);

    const productImages = [
        "/assets/images/vrm-reality/vrm-reality-hero.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-1.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-2.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-3.png"
    ];

    return (
        <div className="vrm-reality-page basic-font-family">
            <Helmet>
                <title>VRM Reality | Property Virtual Tour Software & VR Showcase</title>
                <meta name="description" content="Transform property sales with VRM Reality, a VR property showcase platform with immersive virtual tours for builders and agents across India." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/vrm-reality" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "VRM Reality",
                                "operatingSystem": "Web, iOS, Android",
                                "applicationCategory": "BusinessApplication",
                                "description": "Transform property sales with VRM Reality, a VR property showcase platform with immersive virtual tours for builders and agents across India.",
                                "brand": {
                                    "@type": "Organization",
                                    "name": "VRM AI Technology"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What is VRM Reality?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "VRM Reality is an immersive property showcase platform allowing builders and agents to display unbuilt or completed properties via high-quality virtual tours." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does it need special hardware?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "No, it is accessible directly via modern web browsers and mobile devices." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can buyers open tours on mobile?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, VRM Reality is fully responsive and optimized for mobile access." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to prepare a property tour?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Turnaround times vary based on the project size. Please contact us for a detailed estimate based on your specific requirements." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you serve builders in Chennai?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we proudly serve clients in Chennai and across India from our Madurai and Bengaluru centers." }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeaderOne />
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1 className="title text-white">Immersive VR Property Showcase Platform</h1>
                            <p className="text-white-50 mt-4">Welcome to VRM Reality, the cutting-edge property virtual tour software designed specifically for modern builders and property agents. In today's competitive landscape, static images are no longer enough. VRM Reality provides a fully immersive property showcase platform, enabling potential buyers to explore properties dynamically before they are even built.</p>
                            <p className="text-white-50 mt-3">Our platform integrates seamlessly with your existing websites, delivering high-fidelity 3D tours, accurate floor plan representations, and interactive walk-throughs. Whether you are showcasing a luxury villa or a massive commercial complex, our software ensures every detail is captured with stunning realism.</p>
                            <p className="text-white-50 mt-3">Built at our <Link to="/ai-company-madurai" className="text-white text-decoration-underline">Madurai development center</Link> and Bengaluru headquarters, we serve property developers across India, including clients in Chennai. We empower your sales teams to close deals faster by providing an unforgettable remote viewing experience.</p>
                        </div>
                        <div className="col-lg-5">
                            <img src={productImages[0]} alt="VRM Reality Property Virtual Tour Software Dashboard" className="img-fluid rounded shadow" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ptb--100">
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0"><Accordion.Header>What is VRM Reality?</Accordion.Header><Accordion.Body>VRM Reality is an immersive property showcase platform allowing builders and agents to display unbuilt or completed properties via high-quality virtual tours.</Accordion.Body></Accordion.Item>
                    <Accordion.Item eventKey="1"><Accordion.Header>Does it need special hardware?</Accordion.Header><Accordion.Body>No, it is accessible directly via modern web browsers and mobile devices.</Accordion.Body></Accordion.Item>
                    <Accordion.Item eventKey="2"><Accordion.Header>Can buyers open tours on mobile?</Accordion.Header><Accordion.Body>Yes, VRM Reality is fully responsive and optimized for mobile access.</Accordion.Body></Accordion.Item>
                    <Accordion.Item eventKey="3"><Accordion.Header>How long does it take to prepare a property tour?</Accordion.Header><Accordion.Body>Turnaround times vary based on the project size. Please <Link to="/contactus">contact us</Link> for a detailed estimate based on your specific requirements.</Accordion.Body></Accordion.Item>
                    <Accordion.Item eventKey="4"><Accordion.Header>Do you serve builders in Chennai?</Accordion.Header><Accordion.Body>Yes, we proudly serve clients in Chennai and across India from our Madurai and Bengaluru centers.</Accordion.Body></Accordion.Item>
                </Accordion>
            </div>
            <FooterOne />
        </div>
    );
}
export default VrmReality;`;
fs.writeFileSync('src/inner/VrmReality.jsx', vrmRealityContent);

// 5. Update Chennai Page
const chennaiContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';

export default function AIConsultingChennai() {
    return (
        <div>
            <Helmet>
                <title>AI Software Solutions for Chennai Businesses | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology partners with Chennai businesses on custom generative AI, automation and machine learning platforms, delivered remotely." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-consulting-chennai" />
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>Custom AI Software Solutions for Chennai Businesses</h1>
                <p>Are you a business looking for cutting-edge digital transformation? VRM AI Technology partners with Chennai businesses on custom generative AI, automation, and machine learning platforms, delivered remotely from our Bengaluru headquarters and Madurai development center. We empower enterprises to modernize their workflows without the overhead of maintaining an in-house engineering team.</p>
                <p>Our solutions range from agentic AI systems that handle complex customer interactions, to internal productivity tools like <Link to="/products/vrm-reality">VRM Reality</Link>. By focusing on measurable ROI, we ensure that every solution we deploy directly contributes to your bottom line.</p>
                <p>While we do not maintain a physical office in Chennai, our remote delivery model ensures seamless communication, agile sprints, and enterprise-grade support for our Chennai clients. <Link to="/contactus">Contact us</Link> today to learn how we can transform your business.</p>
            </div>
            <FooterOne />
        </div>
    );
}`;
fs.writeFileSync('src/inner/AIConsultingChennai.jsx', chennaiContent);

// 6. Update Madurai Page
const maduraiContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';

export default function AICompanyMadurai() {
    return (
        <div>
            <Helmet>
                <title>AI Development Company in Madurai | VRM AI Technology</title>
                <meta name="description" content="Our Madurai development center engineers generative AI, machine learning and automation products for clients across India." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-madurai" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "VRM AI Technology - Madurai Development Center",
                        "telephone": "+91 81233 48355",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Door No.209, 1st Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai",
                            "addressLocality": "Madurai",
                            "addressRegion": "Tamil Nadu",
                            "postalCode": "625014",
                            "addressCountry": "IN"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            "opens": "09:30",
                            "closes": "19:00"
                        }
                    })}
                </script>
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>AI Development Company in Madurai</h1>
                <p>Located in the heart of Tamil Nadu, our Madurai development center engineers generative AI, machine learning, and automation products for clients across India. It serves as the core engineering hub for our flagship platforms, including <Link to="/products/vrm-reality">VRM Reality</Link> and Workflow AI.</p>
                <p>We leverage top-tier technical talent to deliver scalable enterprise solutions. From building autonomous agents to developing predictive data models, our Madurai team ensures rapid deployment and continuous innovation. <Link to="/contactus">Contact us</Link> to collaborate with our engineering team.</p>
            </div>
            <FooterOne />
        </div>
    );
}`;
fs.writeFileSync('src/inner/AICompanyMadurai.jsx', maduraiContent);

// 7. Update Bangalore Page
const bangaloreContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';

export default function AICompanyBangalore() {
    return (
        <div>
            <Helmet>
                <title>AI Software Company in Bangalore | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is headquartered in Bangalore, building generative AI, agentic AI and machine learning solutions for enterprises." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>AI Software Company in Bangalore</h1>
                <p>VRM AI Technology is headquartered in Bangalore, building generative AI, agentic AI, and machine learning solutions for enterprises. Operating from GoodWorks Infinity Park in Electronic City Phase I, our headquarters drives the strategic vision and client engagement for our global operations.</p>
                <p>We specialize in identifying high-impact areas for digital transformation and seamlessly integrating platforms like <Link to="/products/vrm-reality">VRM Reality</Link> into existing business frameworks. Our Bangalore office coordinates closely with our Madurai development center to ensure that every solution is delivered with excellence. <Link to="/contactus">Contact us</Link> to start your transformation journey.</p>
            </div>
            <FooterOne />
        </div>
    );
}`;
fs.writeFileSync('src/inner/AICompanyBangalore.jsx', bangaloreContent);

// 8. Inject sitewide schema into HomeOne.jsx
let homeContent = fs.readFileSync('src/home/HomeOne.jsx', 'utf8');
const orgSchema = `
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "legalName": "VRM AI TECHNOLOGY (OPC) PRIVATE LIMITED",
                        "url": "https://www.vrmaitechnology.com/",
                        "logo": "https://www.vrmaitechnology.com/assets/images/logo/logo.png",
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
                        "areaServed": ["Bangalore", "Madurai", "Chennai", "Tamil Nadu", "India"],
                        "location": [
                            {
                                "@type": "ProfessionalService",
                                "name": "VRM AI Technology - Madurai Development Center",
                                "telephone": "+91 81233 48355",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Door No.209, 1st Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai",
                                    "addressLocality": "Madurai",
                                    "addressRegion": "Tamil Nadu",
                                    "postalCode": "625014",
                                    "addressCountry": "IN"
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:30",
                                    "closes": "19:00"
                                }
                            }
                        ]
                    })}
                </script>
`;
if(!homeContent.includes('Organization')) {
    homeContent = homeContent.replace('</Helmet>', orgSchema + '</Helmet>');
    fs.writeFileSync('src/home/HomeOne.jsx', homeContent);
}

console.log('Successfully generated all components.');
