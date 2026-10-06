import React, { useEffect, useState } from 'react';
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
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes. VRM AI Technology serves property developers in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request." }
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
                            <h1 className="title text-white">VRM Reality</h1>
                            <p className="text-white-50 mt-4">Welcome to VRM Reality, the cutting-edge property virtual tour software designed specifically for modern builders and property agents. In today's competitive landscape, static images are no longer enough. VRM Reality provides a fully immersive property showcase platform, enabling potential buyers to explore properties dynamically before they are even built.</p>
                            <p className="text-white-50 mt-3">Our platform integrates seamlessly with your existing websites, delivering high-fidelity 3D tours, accurate floor plan representations, and interactive walk-throughs. Whether you are showcasing a luxury villa or a massive commercial complex, our software ensures every detail is captured with stunning realism.</p>
                            <p className="text-white-50 mt-3">Built at our <Link to="/ai-company-madurai" className="text-white text-decoration-underline">Madurai development center</Link> and Bengaluru headquarters, we serve property developers across India, . We empower your sales teams to close deals faster by providing an unforgettable remote viewing experience.</p>
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
                    <Accordion.Item eventKey="4"><Accordion.Header>Do you serve builders in Chennai?</Accordion.Header><Accordion.Body>Yes. VRM AI Technology serves property developers in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request.</Accordion.Body></Accordion.Item>
                </Accordion>
            </div>
            <FooterOne />
        </div>
    );
}
export default VrmReality;