import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AICompanyTamilNadu() {
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
            q: "What presence does VRM AI Technology have in Tamil Nadu?",
            a: "VRM AI Technology operates an engineering development center in Madurai, Tamil Nadu, located at Door No.209, 1st Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai, Madurai."
        },
        {
            q: "What AI products does VRM AI Technology offer?",
            a: "Workflow AI, People Connect (Global), AI Buddy, Exit Intelligence, Visionix AI, VRM Reality and Bench to Deploy (B2D)."
        },
        {
            q: "What AI services are available across Tamil Nadu?",
            a: "Custom Generative AI solutions, AI chatbot development, AI calling agents, machine learning services and enterprise software development."
        },
        {
            q: "Does VRM AI Technology build custom AI solutions?",
            a: "Yes. We build custom AI chatbots, AI calling agents, machine learning systems and Generative AI solutions, along with enterprise software development."
        },
        {
            q: "Is VRM AI Technology ISO certified?",
            a: "Yes. VRM AI Technology is ISO 9001:2015 certified for quality management."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>Top Growing AI Company in Tamil Nadu | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is recognized as a top growing AI company in Tamil Nadu. We deliver custom generative AI solutions across the state." />
                <meta property="og:title" content="AI Company in Tamil Nadu | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology operates a staffed development center in Madurai, Tamil Nadu, developing GenAI platforms, calling agents, and custom AI software." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-tamil-nadu" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Company in Tamil Nadu | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology operates a staffed development center in Madurai, Tamil Nadu, developing GenAI platforms, calling agents, and custom AI software." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "AI Company in Tamil Nadu", "item": "https://www.vrmaitechnology.com/ai-company-tamil-nadu" }
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
                                    Staffed Development Center &bull; Madurai, Tamil Nadu
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Software Company in Tamil Nadu
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology develops artificial intelligence solutions from our staffed development center in Madurai, Tamil Nadu. We engineer proprietary Generative AI software, conversational voice agents, recruitment intelligence systems, and custom machine learning pipelines.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Contact Our Team <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/ai-company-madurai" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        View Madurai Center
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIIntegration.png"
                                    alt="AI Software Company in Tamil Nadu - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Tamil Nadu Digital Context */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Regional AI Development
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Developing Intelligent Software from Madurai
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                VRM AI Technology is an AI development company headquartered with corporate governance in Bengaluru and our staffed engineering center located in Madurai, Tamil Nadu.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                Our engineers build practical AI systems that help organizations automate manual processes, structure data, and deploy conversational channels in Tamil and English.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Madurai Development Center</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Staffed center at Poriyalar Nagar, Tiruppalai, Madurai.</p>
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
                                    AI Software Products
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-users-cog text-primary mt-1"></i>
                                        <span><strong>Workflow AI:</strong> Recruitment intelligence platform including <Link to="/products/workflow">Workflow AI</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-landmark text-primary mt-1"></i>
                                        <span><strong>People Connect (Global):</strong> Citizen engagement and feedback management with <Link to="/products/people-connect">People Connect (Global)</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-comments text-primary mt-1"></i>
                                        <span><strong>AI Buddy:</strong> Interactive speaking practice and language tutoring with <Link to="/products/aibuddy">AI Buddy</Link>.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Additional Products:</strong> Exit Intelligence, Visionix AI, VRM Reality, and Bench to Deploy (B2D).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Core Offerings */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Our Capabilities</span>
                                <h2 className="title text-white">Comprehensive AI Solutions Tailored for Tamil Nadu</h2>
                                <p className="disc mt-3 text-white-50">
                                    We build systems designed to operate seamlessly within existing infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-language",
                                title: "Tamil & Multilingual Chatbots",
                                desc: "Empower customer support teams with natural language chatbots that seamlessly understand Tamil and English colloquial phrases.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-phone-alt",
                                title: "Conversational Voice Calling",
                                desc: "Automate outbound follow-ups, payment reminders, and customer survey calls with expressive, human-like voice synthesis.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-microchip",
                                title: "Custom Generative AI Platforms",
                                desc: "Transform corporate knowledge repositories into interactive, secure conversational intelligence systems with enterprise RAG.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-cogs",
                                title: "Industrial Machine Learning",
                                desc: "Predictive maintenance, demand forecasting, and yield optimization models built for Tamil Nadu’s manufacturing enterprises.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-id-badge",
                                title: "Visual Attendance & Security",
                                desc: "Contactless face recognition attendance and perimeter access control using Visionix AI facial intelligence engine.",
                                link: "/products/visionix"
                            },
                            {
                                icon: "fa-handshake",
                                title: "Enterprise AI Strategy",
                                desc: "End-to-end guidance from legacy data assessment to production architecture, led by experienced AI strategists.",
                                link: "/solutions"
                            }
                        ].map((srv, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx % 3 + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                    <div className="thumbnail mb-3">
                                        <i className={`fas ${srv.icon} fa-3x`} style={{ color: '#00C6FF' }}></i>
                                    </div>
                                    <h5 className="title text-white mb-2">{srv.title}</h5>
                                    <p className="disc text-white-50 mb-4">{srv.desc}</p>
                                    <Link to={srv.link} className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
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
                                <p className="disc">Common inquiries about our Tamil Nadu presence and AI capabilities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionTN">
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
                        Partner with Tamil Nadu’s Fastest Growing AI Company
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Empower your organization with intelligent systems built right here in Tamil Nadu. Contact our engineering team for a dedicated discovery session.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Connect with Our Team <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AICompanyTamilNadu;
