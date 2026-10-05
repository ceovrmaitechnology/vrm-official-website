import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import WOW from 'wow.js';

function SolutionsOverview() {

    useEffect(() => {
        new WOW({
            live: false
        }).init();
        window.scrollTo(0, 0);
    }, []);

    const solutionsList = [
        {
            id: "ai-consulting-services",
            category: "AI Consulting & Strategy",
            title: "AI Consulting Services",
            disc: "Transform your business with strategic AI roadmap planning, technology readiness assessment, high-impact use-case identification, and ROI-driven AI adoption strategies.",
            link: "/solutions/ai-consulting-services",
            img: "/assets/images/service/solution-ai-consulting.png",
            alt: "AI Consulting Services Strategy Session with Indian Executives"
        },
        {
            id: "ai-integration-services",
            category: "AI Consulting & Strategy",
            title: "AI Integration Services",
            disc: "Seamlessly embed advanced AI capabilities, generative models, and LLM APIs into your existing enterprise software, CRM, ERP, and cloud infrastructure.",
            link: "/solutions/ai-integration-services",
            img: "/assets/images/service/solution-ai-integration.png",
            alt: "AI Integration Services Architecture with Indian Engineering Team"
        },
        {
            id: "ai-development-services",
            category: "AI Development",
            title: "AI Development Services",
            disc: "Custom AI software engineering, bespoke neural networks, autonomous agents, and scalable cloud-native architectures tailored to your business needs.",
            link: "/solutions/ai-development-services",
            img: "/assets/images/service/solution-ai-development.png",
            alt: "Custom AI Development Engineering by Indian Developers"
        },
        {
            id: "ai-chatbot-development",
            category: "AI Development",
            title: "AI Chatbot Development",
            disc: "Build multi-channel conversational AI chatbots with natural language understanding (NLU), automated lead qualification, and continuous customer support.",
            link: "/solutions/ai-chatbot-development",
            img: "/assets/images/service/solution-ai-chatbot.png",
            alt: "AI Chatbot Development Interface with Indian Specialists"
        },
        {
            id: "ai-calling-agent",
            category: "AI & Data",
            title: "AI Calling Agent",
            disc: "Automate inbound and outbound voice interactions with human-like, low-latency AI voice agents for appointment booking, support, and sales outreach.",
            link: "/solutions/ai-calling-agent",
            img: "/assets/images/service/solution-ai-calling.png",
            alt: "AI Calling Agent Dashboard Managed by Indian Support Specialist"
        },
        {
            id: "machine-learning-services",
            category: "AI & Data",
            title: "Machine Learning Services",
            disc: "Harness predictive analytics, computer vision, automated data pipelines, and deep learning algorithms to unlock actionable business intelligence.",
            link: "/solutions/machine-learning-services",
            img: "/assets/images/service/solution-machine-learning.png",
            alt: "Machine Learning Predictive Analytics with Indian Data Science Team"
        }
    ];

    return (
        <div className="solutions-overview-page workflow-page basic-font-family">
            <Helmet>
                <title>AI Solutions &amp; Services | VRM AI Technology</title>
                <meta name="description" content="Explore AI solutions by VRM AI Technology: AI chatbot development, AI calling agents, machine learning services, and enterprise software development." />
                <meta property="og:title" content="AI Solutions &amp; Services | VRM AI Technology" />
                <meta property="og:description" content="Explore AI solutions by VRM AI Technology: AI chatbot development, AI calling agents, machine learning services, and enterprise software development." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/solutions" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Solutions &amp; Services | VRM AI Technology" />
                <meta name="twitter:description" content="Explore AI solutions by VRM AI Technology: AI chatbot development, AI calling agents, machine learning services, and enterprise software development." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.vrmaitechnology.com/solutions" }
                        ]
                    })}
                </script>
            </Helmet>
            
            <HeaderOne />

            {/* --- Hero Section --- */}
            <section id="solutions-hero" className="vrm-hero rts-banner-area" style={{ 
                position: 'relative', 
                minHeight: '65vh', 
                display: 'flex', 
                alignItems: 'center', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1b277c 0%, #0d133e 100%)',
                padding: '120px 0 80px'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 text-start">
                            <div className="vrm-hero__content text-start">
                                <h1 className="title wow fadeInUp text-white vrm-workflow-hero-title mt-2" data-wow-delay=".2s">
                                    AI Software Services &amp; Solutions
                                </h1>
                                <p className="disc wow fadeInUp mt-3 mb-4 vrm-workflow-hero-disc" data-wow-delay=".3s" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '17px', maxWidth: '650px', lineHeight: '1.7' }}>
                                    Transforming businesses through strategic AI consulting, enterprise system integration, custom LLM software engineering, conversational voice agents, and predictive machine learning models.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Schedule a Consultation <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-self-center justify-content-lg-end justify-content-center">
                            <div className="vrm-career-hero-img-container wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/service/solutions-hero.png" alt="VRM AI Solutions Team" className="vrm-career-hero-img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Solutions Grid (Alternating Zig-Zag Layout) --- */}
            {solutionsList.map((item, index) => {
                const isEven = index % 2 === 1;
                const bg = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
                
                return (
                    <div key={item.id} id={item.id} className="rts-about-area rts-section-gap" style={{ background: bg }}>
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className={`col-lg-6 ${isEven ? 'order-lg-2' : ''} wow ${isEven ? 'fadeInRight' : 'fadeInLeft'}`} data-wow-delay=".2s">
                                    <div className="vrm-product-thumbnail" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
                                        <img src={item.img} 
                                            alt={item.alt} 
                                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                                        loading="lazy" />
                                    </div>
                                </div>
                                <div className={`col-lg-6 ${isEven ? 'order-lg-1' : ''} wow ${isEven ? 'fadeInLeft' : 'fadeInRight'}`} data-wow-delay=".2s">
                                    <div className="about-inner">
                                        <div className="rts-title-area">
                                            <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                                                {item.category}
                                            </span>
                                            <h2 className="title" style={{ fontSize: '32px', fontWeight: '700', color: '#11142c', marginBottom: '20px' }}>
                                                {item.title}
                                            </h2>
                                        </div>
                                        <p className="disc" style={{ fontSize: '16px', color: '#555555', lineHeight: '1.7', marginBottom: '30px' }}>
                                            {item.disc}
                                        </p>
                                        <Link className="vrm-btn-product-blue" to={item.link}>
                                            Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Regional Delivery Hubs */}
            <div className="vrm-full-width-section vrm-white-bg py-5">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0e1022' }}>
                                Enterprise AI Delivery Across India
                            </h3>
                            <p style={{ color: '#666', fontSize: '15px', maxWidth: '650px', margin: '8px auto 0' }}>
                                Delivering specialized AI engineering, consulting, and product deployment across our primary innovation hubs and nationwide.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 justify-content-center text-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <h6 style={{ fontWeight: '700', marginBottom: '6px' }}><Link to="/ai-company-bangalore" style={{ color: '#1b277c' }}>Bangalore Innovation Hub</Link></h6>
                                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Electronic City Phase I &bull; GenAI Platform Engineering</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <h6 style={{ fontWeight: '700', marginBottom: '6px' }}><Link to="/ai-company-madurai" style={{ color: '#1b277c' }}>Madurai Development Center</Link></h6>
                                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Tiruppalai &bull; Full-Stack AI Software Development</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <h6 style={{ fontWeight: '700', marginBottom: '6px' }}><Link to="/ai-company-tamil-nadu" style={{ color: '#1b277c' }}>Tamil Nadu Regional Scale</Link></h6>
                                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Manufacturing, Civic Governance &amp; Bilingual Voice</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <h6 style={{ fontWeight: '700', marginBottom: '6px' }}><Link to="/ai-innovation-india" style={{ color: '#1b277c' }}>Pan-India Transformation</Link></h6>
                                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Multilingual LLMs &amp; Sovereign Cloud Architectures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Bottom CTA Section --- */}
            <div className="rts-call-to-action-area rts-section-gap" style={{ background: 'linear-gradient(135deg, #1b277c 0%, #11142c 100%)', padding: '80px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-lg-start text-center">
                            <h2 className="title text-white mb-3" style={{ fontWeight: '700' }}>
                                Ready to Accelerate Your Enterprise with AI?
                            </h2>
                            <p className="text-white-50 mb-0" style={{ fontSize: '17px' }}>
                                Partner with VRM AI Technology to build tailored AI solutions that drive measurable ROI and operational excellence.
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end text-center mt-lg-0 mt-4">
                            <Link 
                                to="/contactus#send-message" 
                                className="vrm-blue-to-white-btn"
                                style={{ padding: '16px 36px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                            >
                                Contact Our Experts <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default SolutionsOverview;
