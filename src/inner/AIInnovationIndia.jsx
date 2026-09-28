import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIInnovationIndia() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What defines VRM AI Technology as a leading AI innovation company in India?",
            a: "VRM AI Technology is a born GenAI and machine learning company with major engineering centers in Bengaluru and Madurai. We deliver indigenous, enterprise-grade AI software products and platforms designed for the immense scale, linguistic diversity, and data complexity of India and global markets."
        },
        {
            q: "How does VRM AI support multilingual India?",
            a: "India is home to hundreds of languages and dialects. Our conversational AI engines and calling agents are engineered to understand multilingual interactions, including English, Hindi, Tamil, Telugu, Kannada, and regional mixed-language vernaculars, ensuring seamless consumer engagement across Tier-1, Tier-2, and rural demographics."
        },
        {
            q: "Does VRM AI adhere to Indian data privacy and security regulations?",
            a: "Yes. VRM AI Technology is an ISO 9001:2015 certified company compliant with India's Digital Personal Data Protection Act (DPDP Act) and international data privacy frameworks. We offer on-premise, sovereign cloud, and private VPC deployment models to guarantee zero unauthorized data leakage."
        },
        {
            q: "What enterprise products does VRM AI offer across India?",
            a: "We offer turnkey enterprise platforms including Workflow.AI (recruitment intelligence with ScreenSage, VideoSage, and CodeSage), People Connect (Global) for citizen grievance resolution, AI Buddy for language training, Visionix AI for facial biometric intelligence, and VRM Real Estate automation."
        },
        {
            q: "How can Indian enterprises begin an AI transformation with VRM AI?",
            a: "Organizations can initiate an engagement with our AI strategy and consulting team. We conduct rapid data maturity audits, identify high-impact automation use cases, and deliver proof-of-concept deployments that validate ROI prior to full enterprise rollout."
        }
    ];

    return (
        <div className="rts-ai-consulting-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Innovation Company in India | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is an AI innovation company in India, building enterprise GenAI platforms, multilingual conversational AI, and scalable automation systems." />
                <meta property="og:title" content="AI Innovation Company in India | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology is an AI innovation company in India, building enterprise GenAI platforms, multilingual conversational AI, and scalable automation systems." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-innovation-india" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Innovation Company in India | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology is an AI innovation company in India, building enterprise GenAI platforms, multilingual conversational AI, and scalable automation systems." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

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

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Pan-India Intelligence &bull; Global Enterprise Standard
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Innovation Company in India
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology builds world-class artificial intelligence software and autonomous enterprise products from India for the world. Operating across Bengaluru and Madurai, we deliver custom GenAI platforms, conversational voice agents, and computer vision architectures that drive measurable business outcomes.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Explore Enterprise AI <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/products" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        View Product Suite
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AICallingAgent.png"
                                    alt="AI Innovation Company in India - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. India AI Revolution Context */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Powering Digital India
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Sovereign, Scalable &amp; Multilingual AI Built for India’s Future
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                India’s digital economy is witnessing unprecedented growth, driven by world-leading public digital rails and a thriving enterprise technology ecosystem. As Indian conglomerates and global multinationals seek to capture this momentum, the need for robust, cost-effective, and secure artificial intelligence has never been more critical.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology delivers end-to-end engineering excellence from our dual presence in Bengaluru (Electronic City) and Madurai (Tiruppalai). We specialize in developing production-grade AI platforms that tackle hyper-scale challenges: processing millions of unstructured documents, analyzing complex video interviews, and conducting real-time voice conversations across diverse Indian languages.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Dual-Hub Synergy</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Bengaluru headquarters coupled with a dedicated Madurai engineering development center.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO 9001:2015 Certified</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Rigorous software development lifecycle and continuous model evaluation protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Key Pillars of Our Pan-India Innovation
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Enterprise Hiring Tech:</strong> Automating high-volume recruitment screening across Indian universities and corporations via <Link to="/products/workflow">Workflow.AI</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Citizen Engagement:</strong> Orchestrating civic resolutions across municipalities through <Link to="/products/people-connect">People Connect (Global)</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Voice AI Infrastructure:</strong> Autonomous 24/7 inbound and outbound calling agents with human-like latency and accent familiarity.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Data Sovereignty:</strong> Localized data residency ensuring compliance with India's DPDP Act and enterprise privacy policies.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Core Enterprise Capabilities */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Our Capabilities</span>
                                <h2 className="title text-white">Advanced AI Platforms Engineered for Indian Scale</h2>
                                <p className="disc mt-3 text-white-50">
                                    Delivering high-concurrency, low-latency intelligence across the modern enterprise stack.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-brain",
                                title: "Enterprise Generative AI",
                                desc: "Fine-tuned open-source and proprietary foundation models with vector search for automated internal documentation and analytical intelligence.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-phone-volume",
                                title: "AI Calling Agent Solutions",
                                desc: "Real-time speech-to-speech agents supporting high-volume customer service, telephonic verification, and sales outreach across India.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-comments",
                                title: "AI Chatbots & Conversational Commerce",
                                desc: "Multilingual chatbots deployed on WhatsApp, web portals, and mobile apps with native Indian language understanding.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-chart-line",
                                title: "Machine Learning Solutions",
                                desc: "Predictive algorithms, fraud detection models, and demand forecasting engines tailored for Indian retail, fintech, and manufacturing.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-shield-alt",
                                title: "Visionix AI Computer Vision",
                                desc: "Edge-compatible visual AI for attendance automation, perimeter security, and facial authentication in dense enterprise environments.",
                                link: "/products/visionix"
                            },
                            {
                                icon: "fa-handshake",
                                title: "Enterprise AI Consulting",
                                desc: "Executive advisory, technology selection, and data architecture modernization led by seasoned Indian AI engineers.",
                                link: "/solutions/ai-consulting-services"
                            }
                        ].map((cap, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index % 3 + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                    <div className="thumbnail mb-3">
                                        <i className={`fas ${cap.icon} fa-3x`} style={{ color: '#00C6FF' }}></i>
                                    </div>
                                    <h5 className="title text-white mb-2">{cap.title}</h5>
                                    <p className="disc text-white-50 mb-4">{cap.desc}</p>
                                    <Link to={cap.link} className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. FAQs Section */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p className="disc">Key questions about our Indian operations, security compliance, and delivery model.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionIndia">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button
                                                className={`accordion-button ${openAccordion === index + 1 ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(index + 1)}
                                            >
                                                {faq.q}
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${openAccordion === index + 1 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. CTA Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient py-5">
                <div className="container text-center py-4">
                    <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#fff' }}>
                        Build the Future of Enterprise AI with India’s Leading Innovator
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Discover how VRM AI Technology can transform your operations with intelligent, secure, and production-tested artificial intelligence platforms.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Get Started with VRM AI <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AIInnovationIndia;
