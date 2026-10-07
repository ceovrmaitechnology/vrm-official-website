import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
import WOW from 'wow.js';

export default function AICompanyMadurai() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "Where is VRM AI Technology's development center located in Madurai?",
            a: "Our staffed engineering development center is located at Door No,209, 1ST Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014."
        },
        {
            q: "What AI software solutions are engineered at the Madurai facility?",
            a: "Our Madurai engineering hub develops Generative AI platforms, intelligent conversational chatbots, autonomous voice calling agents, machine learning pipelines, Visionix AI computer vision, and Workflow AI modules."
        },
        {
            q: "Can businesses in Madurai schedule an in-person meeting or technical consultation?",
            a: "Yes. Local enterprises, startups, and institutions in Madurai can schedule on-site discussions, product demonstrations, and technical discovery workshops directly at our Tiruppalai facility or at their premises."
        },
        {
            q: "Which areas and industrial zones in Madurai do you serve?",
            a: "We actively serve businesses across Tiruppalai, Poriyalar Nagar, Iyer Bungalow, K.K. Nagar, Anna Nagar, Mattuthavani, Othakadai, Tallakulam, and surrounding industrial corridors across Madurai district."
        },
        {
            q: "Is VRM AI Technology an ISO certified software company in Madurai?",
            a: "Yes. VRM AI Technology is an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029) ensuring rigorous software quality and data security across every product release."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <Helmet>
                <html lang="en-IN" />
                <title>AI Development Company in Madurai | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is an AI development company in Madurai, engineering generative AI, voice bots, and ML systems for businesses across India." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-madurai" />

                <meta property="og:title" content="AI Development Company in Madurai | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology operates a staffed engineering development center in Tiruppalai, Madurai, delivering GenAI, conversational voice agents, and ML software." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta property="og:url" content="https://www.vrmaitechnology.com/ai-company-madurai" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Development Company in Madurai | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology operates a staffed engineering development center in Tiruppalai, Madurai, delivering GenAI, conversational voice agents, and ML software." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                {/* Breadcrumbs JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "AI Development Company in Madurai", "item": "https://www.vrmaitechnology.com/ai-company-madurai" }
                        ]
                    })}
                </script>

                {/* LocalBusiness / ProfessionalService Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "VRM AI Technology",
                        "legalName": "VRM AI Technology (OPC) Pvt.Ltd",
                        "alternateName": "VRM AI Technology - Madurai Development Center",
                        "url": "https://www.vrmaitechnology.com/ai-company-madurai",
                        "image": "https://www.vrmaitechnology.com/assets/images/logo/logo.png",
                        "telephone": "+918123348355",
                        "email": "contactus@vrmaitechnology.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Door No,209, 1ST Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai",
                            "addressLocality": "Madurai",
                            "addressRegion": "Tamil Nadu",
                            "postalCode": "625014",
                            "addressCountry": "IN"
                        },
                        "hasMap": "https://share.google/Low7HbzJnoFKyBI1d",
                        "sameAs": [
                            "https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/",
                            "https://x.com/vrmaitechnology",
                            "https://www.instagram.com/vrmaitechnology/",
                            "https://www.facebook.com/profile.php?id=61589969476629",
                            "https://www.youtube.com/@vrmaitech",
                            "https://share.google/Low7HbzJnoFKyBI1d"
                        ],
                        "areaServed": ["Madurai", "Tamil Nadu", "India"]
                    })}
                </script>

                {/* FAQPage JSON-LD Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <HeaderOne className="header-white-text" />

            {/* Breadcrumb Section */}
            <div className="breadcrumb-area-bg bg_image" style={{ padding: '160px 0 80px 0', background: 'linear-gradient(135deg, #0e1022 0%, #171b3e 100%)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <span className="sub-title" style={{ color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '14px', display: 'block', marginBottom: '12px' }}>
                                    Staffed Engineering Center &bull; Madurai, Tamil Nadu
                                </span>
                                <h1 className="title text-white" style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>
                                    AI Development Company in Madurai
                                </h1>
                                <p className="text-white-50 mx-auto" style={{ maxWidth: '780px', fontSize: '18px', lineHeight: '1.6' }}>
                                    Engineering enterprise Generative AI systems, conversational voice agents, and custom machine learning software from our Tiruppalai development facility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="rts-service-area rts-section-gap" style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="container">
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="service-about-image-wrapper">
                                <img
                                    src="/assets/images/service/solution-ai-development.png"
                                    alt="VRM AI Technology Development Center in Madurai"
                                    className="img-fluid rounded-4 shadow"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="service-about-content">
                                <span className="pre-title" style={{ color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                                    Local Expertise &bull; Global Delivery
                                </span>
                                <h2 className="title mt-2 mb-3" style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a' }}>
                                    Pioneering Next-Generation AI from Madurai
                                </h2>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                                    Located in the heart of South Tamil Nadu, VRM AI Technology operates a fully staffed development center at Poriyalar Nagar, Tiruppalai, Madurai. Our engineering team builds, trains, and deploys high-impact artificial intelligence platforms for enterprises across India and overseas markets.
                                </p>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                                    Madurai is rapidly establishing itself as a premier destination for software and deep-tech talent. By tapping into top-tier graduates from renowned academic and technical institutions, our center drives end-to-end product development—from foundational model fine-tuning to real-time voice orchestration and secure cloud deployment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Core Services Section */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12 text-center mb-4">
                            <span className="pre-title" style={{ color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                                Engineering Capabilities
                            </span>
                            <h2 className="title mt-2" style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a' }}>
                                AI Solutions Engineered at Our Madurai Facility
                            </h2>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-brain"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Custom Generative AI</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    We architect domain-adapted LLMs, Retrieval-Augmented Generation (RAG) engines, and custom enterprise knowledge bots tailored to proprietary business data.
                                </p>
                                <Link to="/generative-ai-development" className="text-primary fw-bold mt-auto text-decoration-none">Explore GenAI &rarr;</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-headset"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>AI Calling Agents &amp; Chatbots</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    Build sub-second latency speech bots in English, Tamil, and Hindi that conduct automated customer qualification, appointment booking, and support resolution.
                                </p>
                                <Link to="/solutions/ai-calling-agent" className="text-primary fw-bold mt-auto text-decoration-none">Explore Voice AI &rarr;</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-cogs"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Workflow Automation &amp; ML</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    Automate multi-step operational pipelines with our proprietary platforms, including <Link to="/products/workflow">Workflow AI</Link> for recruitment screening and <Link to="/products/vrm-reality">VRM Reality</Link> for 3D property virtual tours and showcase.
                                </p>
                                <Link to="/solutions/machine-learning-services" className="text-primary fw-bold mt-auto text-decoration-none">Explore ML Services &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    {/* How We Work & Local Areas */}
                    <div className="row g-5 align-items-center mt-3 mb-5 p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <div className="col-lg-6">
                            <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                                How We Partner with Local &amp; National Clients
                            </h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>On-Site Collaboration in Madurai:</strong> For organizations based in Madurai, our engineering leadership is available for in-person consultations, technical architecture sessions, and system onboarding at your offices or at our Tiruppalai development facility.
                            </p>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>National &amp; Global Remote Delivery:</strong> For clients across Bangalore, Chennai, Mumbai, Delhi, and international locations, our Madurai facility functions as an agile delivery hub with daily standups, sprint reviews, and direct developer communication.
                            </p>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>Local Coverage Across Madurai:</strong> We actively support industrial, healthcare, retail, educational, and real estate businesses located across Tiruppalai, Poriyalar Nagar, Iyer Bungalow, K.K. Nagar, Anna Nagar, Mattuthavani, Othakadai, Tallakulam, and the broader Madurai district.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 rounded-3" style={{ background: '#f1f5f9' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
                                    ISO 9001:2015 Quality Commitment
                                </h4>
                                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#475569' }}>
                                    Quality is embedded in our engineering culture. As an ISO 9001:2015 Certified software organization (Certificate No. E20260749630, Valid through 20 July 2029), every solution developed in Madurai adheres to internationally recognized benchmarks for code reliability, vulnerability management, and service excellence.
                                </p>
                                <div className="mt-3">
                                    <Link to="/contactus#send-message" className="btn btn-primary px-4 py-2 me-2">Schedule Consultation</Link>
                                    <Link to="/products" className="btn btn-outline-secondary px-4 py-2">Explore Products</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps & Directions */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12">
                            <div className="bg-white p-4 rounded-4 shadow-sm border">
                                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                                    <div>
                                        <h3 className="fw-bold text-dark mb-1" style={{ fontSize: '22px' }}>Visit Our Madurai Development Center</h3>
                                        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                                            Door No,209, 1ST Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a href="https://share.google/Low7HbzJnoFKyBI1d" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                                            <i className="fas fa-directions me-1"></i> Get Directions
                                        </a>
                                        <a href="https://share.google/Low7HbzJnoFKyBI1d" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                            <i className="fas fa-star me-1"></i> Review us on Google
                                        </a>
                                    </div>
                                </div>
                                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '360px', border: '1px solid #e2e8f0' }}>
                                    <iframe
                                        title="VRM AI Technology Madurai Development Center Map"
                                        src="https://maps.google.com/maps?q=Door+No.209,+1st+Floor,+No.147,+5th+St,+Poriyalar+Nagar,+Tiruppalai,+Madurai,+Tamil+Nadu+625014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* City-Specific FAQ Section */}
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-4">
                            <span className="pre-title" style={{ color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                                Frequently Asked Questions
                            </span>
                            <h2 className="title mt-2" style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a' }}>
                                Madurai AI Development Center FAQs
                            </h2>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <Accordion defaultActiveKey="0">
                                {faqs.map((faq, idx) => (
                                    <Accordion.Item eventKey={String(idx)} key={idx} className="mb-3 border rounded-3 overflow-hidden">
                                        <Accordion.Header>
                                            <span style={{ fontWeight: '700', fontSize: '16px', color: '#1e293b' }}>{faq.q}</span>
                                        </Accordion.Header>
                                        <Accordion.Body style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
                                            {faq.a}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    {/* Call to Action Bar */}
                    <div className="row mt-5 pt-4">
                        <div className="col-12 text-center">
                            <div className="p-5 rounded-4 text-white" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                                <h3 className="text-white mb-3" style={{ fontSize: '28px', fontWeight: '800' }}>
                                    Build Scalable AI Solutions with Our Madurai Engineering Team
                                </h3>
                                <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '16px' }}>
                                    Connect with our technical architects to explore custom generative models, voice agents, or enterprise automation tailored to your business needs.
                                </p>
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <Link to="/contactus#send-message" className="btn btn-primary px-4 py-3 fw-bold">
                                        Contact Madurai Office
                                    </Link>
                                    <a href="tel:+918123348355" className="btn btn-outline-light px-4 py-3 fw-bold">
                                        Call: +91 81233 48355
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}