import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
import WOW from 'wow.js';


export default function AICompanyBangalore() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "Where is VRM AI Technology's headquarters located in Bangalore?",
            a: "Our corporate headquarters and registered office are situated at GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100."
        },
        {
            q: "What AI services and solutions do you provide to Bangalore enterprises?",
            a: "We engineer enterprise Generative AI applications, custom domain LLMs, conversational voice calling agents, predictive machine learning pipelines, and Workflow AI recruitment automation."
        },
        {
            q: "How does VRM AI Technology deliver projects for Bangalore clients?",
            a: "We offer a blended delivery model: executive strategy, technical architecture, and on-site alignment meetings in Bangalore, backed by robust, high-velocity engineering delivery from our staffed Madurai development center."
        },
        {
            q: "Which tech corridors and business hubs in Bangalore do you serve?",
            a: "We serve organizations across Electronic City Phase I & II, Whitefield, Koramangala, Indiranagar, HSR Layout, Outer Ring Road (ORR), Manyata Tech Park, and the wider Bengaluru metropolitan region."
        },
        {
            q: "Is VRM AI Technology ISO 9001:2015 certified?",
            a: "Yes. VRM AI Technology is an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029), ensuring structured quality management and secure AI system governance."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <Helmet>
                <html lang="en-IN" />
                <title>AI Company in Bengaluru (Bangalore) | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is an AI company in Bengaluru, headquartered in Electronic City. We build custom GenAI solutions, chatbots, voice agents, and ML systems." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />

                <meta property="og:title" content="AI Company in Bengaluru (Bangalore) | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology is an AI company in Bengaluru, headquartered in Electronic City. We build custom GenAI solutions, chatbots, voice agents, and ML systems." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta property="og:url" content="https://www.vrmaitechnology.com/ai-company-bangalore" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Company in Bengaluru (Bangalore) | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology is an AI company in Bengaluru, headquartered in Electronic City. We build custom GenAI solutions, chatbots, voice agents, and ML systems." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                {/* Breadcrumbs JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "AI Company in Bangalore", "item": "https://www.vrmaitechnology.com/ai-company-bangalore" }
                        ]
                    })}
                </script>

                {/* ProfessionalService (LocalBusiness) JSON-LD Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": ["ProfessionalService", "LocalBusiness"],
                        "name": "VRM AI Technology",
                        "legalName": "VRM AI Technology (OPC) Pvt.Ltd",
                        "alternateName": "VRM AI Technology - Bengaluru Headquarters",
                        "url": "https://www.vrmaitechnology.com/ai-company-bangalore",
                        "image": "https://www.vrmaitechnology.com/assets/images/logo/logo.png",
                        "telephone": "+918123348355",
                        "email": "contactus@vrmaitechnology.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I",
                            "addressLocality": "Bengaluru",
                            "addressRegion": "Karnataka",
                            "postalCode": "560100",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/",
                            "https://x.com/vrmaitechnology",
                            "https://www.instagram.com/vrmaitechnology/",
                            "https://www.facebook.com/profile.php?id=61589969476629",
                            "https://www.youtube.com/@vrmaitech"
                        ],
                        "areaServed": ["Bengaluru", "Karnataka", "India"]
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
                                    Corporate Headquarters &bull; Bengaluru, Karnataka
                                </span>
                                <h1 className="title text-white" style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>
                                    Top AI Innovation Company in Bangalore
                                </h1>
                                <p className="text-white-50 mx-auto" style={{ maxWidth: '780px', fontSize: '18px', lineHeight: '1.6' }}>
                                    Powering high-growth tech companies and enterprises across Bangalore with generative AI systems, machine learning architectures, and autonomous agents.
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
                                    src="/assets/images/service/solutions-hero.png"
                                    alt="VRM AI Technology Headquarters in Electronic City Bangalore"
                                    className="img-fluid rounded-4 shadow"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="service-about-content">
                                <span className="pre-title" style={{ color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                                    Enterprise AI Engineering
                                </span>
                                <h2 className="title mt-2 mb-3" style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a' }}>
                                    Accelerating AI Transformation from Electronic City
                                </h2>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                                    As India's undisputed technology capital, Bangalore is the epicentre of digital innovation. VRM AI Technology is headquartered at GoodWorks Infinity Park, Electronic City Phase I, placing our corporate leadership and solutions architecture directly within India’s most vibrant technology ecosystem.
                                </p>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                                    We assist enterprises, mid-market leaders, and emerging tech companies in operationalizing artificial intelligence. Rather than relying on generic wrappers, our team designs production-grade GenAI pipelines, multi-agent frameworks, and domain-adapted machine learning models built for enterprise scale, data privacy, and measurable return on investment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Overview */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12 text-center mb-4">
                            <span className="pre-title" style={{ color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                                Core Competencies
                            </span>
                            <h2 className="title mt-2" style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a' }}>
                                Advanced AI Services for Bangalore Businesses
                            </h2>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-microchip"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Generative AI &amp; LLM Engineering</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    Enterprise RAG systems, specialized fine-tuning, and semantic vector retrieval tailored to internal knowledge repositories and business workflows.
                                </p>
                                <Link to="/generative-ai-development" className="text-primary fw-bold mt-auto text-decoration-none">Explore GenAI &rarr;</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-phone-volume"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Autonomous Voice AI Agents</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    Ultra-low latency conversational voice agents capable of conducting natural outbound follow-ups, inbound service routing, and CRM synchronization.
                                </p>
                                <Link to="/solutions/ai-calling-agent" className="text-primary fw-bold mt-auto text-decoration-none">Explore Calling Agents &rarr;</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ background: '#ffffff' }}>
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}><i className="fas fa-layer-group"></i></div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Custom ML &amp; Enterprise Platforms</h4>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                                    End-to-end machine learning infrastructure, predictive analytics, and automated recruitment workflows via our proprietary <Link to="/products/workflow">Workflow AI</Link> suite.
                                </p>
                                <Link to="/solutions/ai-development-services" className="text-primary fw-bold mt-auto text-decoration-none">Explore AI Services &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    {/* Dual-Hub Advantage & Delivery Model */}
                    <div className="row g-5 align-items-center mt-3 mb-5 p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <div className="col-lg-6">
                            <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                                Our Blended Delivery Model: Strategic Presence, Dedicated Engineering
                            </h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>Headquarters in Bengaluru:</strong> Our registered office at GoodWorks Infinity Park coordinates high-level enterprise roadmaps, governance, solution design, and in-person executive reviews for Bangalore clients.
                            </p>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>Staffed Engineering Center in Madurai:</strong> Full-lifecycle software implementation, continuous training pipelines, quality verification, and DevOps operations are actively executed by our dedicated development team in Madurai, Tamil Nadu. This dual-hub structure delivers cost efficiency, technical excellence, and rapid project delivery.
                            </p>
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                                <strong>On-Site Engagement Across Bangalore Corridors:</strong> We readily conduct on-site discovery workshops, milestone reviews, and deployment integration across Electronic City, Whitefield, Koramangala, Indiranagar, HSR Layout, Outer Ring Road, and Manyata Tech Park.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 rounded-3" style={{ background: '#f1f5f9' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
                                    ISO 9001:2015 Quality &amp; Security Standards
                                </h4>
                                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#475569' }}>
                                    VRM AI Technology operates in compliance with ISO 9001:2015 Quality Management specifications (Certificate No. E20260749630, Valid through 20 July 2029). From automated candidate screening in Workflow AI to intelligent property pipelines in VRM Reality, all systems adhere to rigorous enterprise security and performance benchmarks.
                                </p>
                                <div className="mt-3">
                                    <Link to="/contactus#send-message" className="btn btn-primary px-4 py-2 me-2">Connect in Bangalore</Link>
                                    <Link to="/products" className="btn btn-outline-secondary px-4 py-2">View Product Suite</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registered Office Notice & Contact Details */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12">
                            <div className="bg-white p-4 rounded-4 shadow-sm border">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '22px' }}>Headquarters / Registered Office</h3>
                                        <p className="text-muted mb-2" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                                            <strong>VRM AI Technology (OPC) Pvt.Ltd</strong><br />
                                            GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100, India
                                        </p>
                                        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                                            Corporate Identity Number (CIN): <span className="text-primary fw-bold">U63999KA2026OPC215399</span> &bull; Phone: <span className="text-dark fw-bold">+91 81233 48355</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                        <Link to="/contactus#send-message" className="btn btn-primary px-4 py-2">
                                            <i className="fas fa-envelope me-1"></i> Send Inquiry
                                        </Link>
                                    </div>
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
                                Bangalore AI Innovation Services FAQs
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
                                    Ready to Partner with Bangalore’s AI Innovators?
                                </h3>
                                <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '16px' }}>
                                    Engage with our Bangalore leadership team for enterprise AI adoption, generative modeling, or intelligent system integration.
                                </p>
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <Link to="/contactus#send-message" className="btn btn-primary px-4 py-3 fw-bold">
                                        Schedule Discovery Call
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
