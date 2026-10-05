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
            q: "What does VRM AI Technology do as an AI company in India?",
            a: "VRM AI Technology develops AI software solutions, including custom Generative AI platforms, conversational chatbots, voice calling agents and machine learning systems."
        },
        {
            q: "Where are VRM AI Technology's offices located in India?",
            a: "Our registered corporate office is in Bengaluru, Karnataka, and our staffed development center is in Madurai, Tamil Nadu."
        },
        {
            q: "Is VRM AI Technology ISO certified?",
            a: "Yes. VRM AI Technology is ISO 9001:2015 certified for quality management."
        },
        {
            q: "What products does VRM AI Technology offer across India?",
            a: "Workflow AI, People Connect, AI Buddy, Exit Intelligence, Visionix AI, VRM Reality and Bench to Deploy (B2D)."
        },
        {
            q: "How can organizations work with VRM AI Technology?",
            a: "Organizations can reach out through our Contact Us page or call +91 81233 48355 to discuss their project requirements."
        }
    ];

    return (
        <div className="rts-ai-consulting-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Software &amp; Solutions in India | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology develops AI software from our Madurai engineering center and Bengaluru registered office, delivering GenAI, chatbots, and ML systems." />
                <meta property="og:title" content="AI Software &amp; Solutions in India | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology develops AI software from our Madurai engineering center and Bengaluru registered office, delivering GenAI, chatbots, and ML systems." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-innovation-india" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Software &amp; Solutions in India | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology develops AI software from our Madurai engineering center and Bengaluru registered office, delivering GenAI, chatbots, and ML systems." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "AI Innovation in India", "item": "https://www.vrmaitechnology.com/ai-innovation-india" }
                        ]
                    })}
                </script>

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
                                    Enterprise AI Engineering &bull; India
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Software Solutions in India
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology builds artificial intelligence software and enterprise products from India. With our registered office in Bengaluru and staffed development center in Madurai, we deliver custom GenAI platforms, conversational voice agents, and machine learning systems.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Contact Us <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
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
                                    alt="AI Software Solutions in India - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. India AI Context */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                AI Software Development
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Engineering Scalable AI Software Across India
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                India’s digital economy is expanding rapidly, driving strong demand for reliable, well-architected artificial intelligence systems.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology provides AI software development with our corporate registered office in Bengaluru and our staffed engineering center in Madurai. We specialize in developing production-grade AI platforms, conversational calling systems, and custom machine learning pipelines.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Offices</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Bengaluru registered office and Madurai staffed development center.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO 9001:2015 Certified</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Certified quality management procedures for software delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Enterprise AI Products
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Workflow AI:</strong> Recruitment intelligence platform including <Link to="/products/workflow">Workflow AI</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>People Connect:</strong> Citizen engagement and feedback management with <Link to="/products/people-connect">People Connect</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>AI Buddy:</strong> Speaking practice and interactive language tutoring via <Link to="/products/aibuddy">AI Buddy</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Enterprise Software:</strong> Custom Generative AI platforms, AI calling agents, and machine learning software.</span>
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
