import React from 'react';
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
                        "name": "VRM AI Technology (OPC) Pvt.Ltd",
                        "alternateName": "Madurai Development Center",
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
                        },
                        "areaServed": ["Madurai", "Bangalore", "Chennai", "Tamil Nadu", "India"]
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
}