import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
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
                        "areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]
                    })}
                </script>
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>Top AI Innovation Company in Bangalore</h1>
                <p>As a top AI innovation company in Bangalore, VRM AI Technology is headquartered in Bengaluru. We partner with enterprises to deliver cutting-edge generative AI, machine learning, and automation products. Our registered office is located at GoodWorks Infinity Park, Electronic City Phase I.</p>
                <p>We serve Bangalore enterprises remotely and on-site on request. Our engineering and delivery are robustly managed and run from our Madurai office, ensuring top-tier technical quality and agile responsiveness for all client requirements.</p>
                <p>We build our innovative solutions upon a foundation of quality. As an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029), we implement robust quality management systems across our product suite, including Workflow.AI, People Connect (Global), AI Buddy, Exit Intelligence, Visionix AI, and VRM Reality.</p>
                

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
