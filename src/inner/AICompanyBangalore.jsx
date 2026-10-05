import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AICompanyBangalore() {
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
            q: "What does VRM AI Technology do in Bengaluru?",
            a: "Bengaluru is the registered office and corporate headquarters of VRM AI Technology Private Limited. We provide custom Generative AI solutions, AI chatbot development, AI calling agents, machine learning services and enterprise software development."
        },
        {
            q: "Where is VRM AI Technology located in Bengaluru?",
            a: "Our registered office is at GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100, India. Our staffed development center is located in Madurai, Tamil Nadu."
        },
        {
            q: "How does VRM AI Technology work with Bengaluru organizations?",
            a: "We collaborate with businesses across Bengaluru through our registered office and remote delivery from our Madurai development center. Contact us via our website or call +91 81233 48355 to discuss requirements."
        },
        {
            q: "What products are offered by VRM AI Technology?",
            a: "Workflow AI, People Connect, AI Buddy, Exit Intelligence, Visionix AI, VRM Reality and Bench to Deploy (B2D)."
        },
        {
            q: "Is VRM AI Technology ISO certified?",
            a: "Yes. VRM AI Technology is ISO 9001:2015 certified for quality management."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.vrmaitechnology.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Bengaluru Registered Office",
                "item": "https://www.vrmaitechnology.com/ai-company-bangalore"
            }
        ]
    };

    const faqSchema = {
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
    };

    return (
        <div className="rts-ai-consulting-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Software Solutions &amp; Registered Office Bengaluru | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology Private Limited is registered in Bengaluru with staffed engineering in Madurai, delivering GenAI, calling agents, and ML systems." />
                <meta property="og:title" content="AI Software Solutions &amp; Registered Office Bengaluru | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology Private Limited is registered in Bengaluru with staffed engineering in Madurai, delivering GenAI, calling agents, and ML systems." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Software Solutions &amp; Registered Office Bengaluru | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology Private Limited is registered in Bengaluru with staffed engineering in Madurai, delivering GenAI, calling agents, and ML systems." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Corporate Registered Office &bull; Bengaluru, Karnataka
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Software Solutions for Bengaluru Enterprises
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology Private Limited maintains its corporate registered office in Bengaluru, with engineering development centered at our staffed development center in Madurai. We deliver production-ready Generative AI platforms, conversational calling agents, and custom machine learning software for organizations across India.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Contact Us <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore AI Solutions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIConsultingService.png"
                                    alt="VRM AI Technology Bengaluru Registered Office"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Bangalore Innovation Landscape */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Enterprise AI Solutions
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Engineering AI Solutions for Enterprise Needs
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Bengaluru is a major technology center in India. Organizations require reliable AI development partners who combine technical depth with dependable engineering execution.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology delivers custom Generative AI solutions, conversational voice agents, and enterprise software designed to automate complex operations and improve business efficiency. Our engineering team in Madurai works with organizations to build software adhering to ISO 9001:2015 quality management standards.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Registered Office</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO 9001:2015 Certified</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Quality management certified processes for software engineering.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Bengaluru Registered Office
                                </h4>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Connect with VRM AI Technology Private Limited through our registered office or contact channels.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '14px', color: '#334155' }}>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-building text-primary mt-1"></i>
                                        <span><strong>Registered Office:</strong> VRM AI Technology Private Limited<br />GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100, India<br /><em style={{ fontSize: '12px', color: '#64748b' }}>(Registered office - no staffed operations)</em></span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fas fa-id-card text-primary"></i>
                                        <span><strong>CIN:</strong> U63999KA2026OPC215399</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fas fa-phone-alt text-primary"></i>
                                        <span><strong>Phone:</strong> <a href="tel:+918123348355" style={{ color: '#1b277c', fontWeight: '600' }}>+91 81233 48355</a></span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fas fa-envelope text-primary"></i>
                                        <span><strong>Email:</strong> <a href="mailto:contactus@vrmaitechnology.com" style={{ color: '#1b277c', fontWeight: '600' }}>contactus@vrmaitechnology.com</a></span>
                                    </li>
                                </ul>
                                <Link
                                    to="/contactus#send-message"
                                    className="vrm-btn-detail"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', background: '#1b277c', color: '#fff', textDecoration: 'none' }}
                                >
                                    <i className="fas fa-calendar-check"></i> Book Bengaluru Discovery Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Enterprise Solutions for Bangalore Businesses */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Technical Capabilities</span>
                                <h2 className="title text-white">Full-Stack AI Engineering Built for Bengaluru Innovators</h2>
                                <p className="disc mt-3 text-white-50">
                                    From algorithmic design to production deployments, we deliver robust performance and reliable software engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-robot",
                                title: "Generative AI Platform Development",
                                desc: "Custom private LLM architectures, domain-tuned embeddings, and hybrid vector search pipelines designed for enterprise knowledge retrieval.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-headset",
                                title: "Enterprise AI Calling Agents",
                                desc: "High-concurrency conversational voice agents handling automated customer support, qualification, and automated outbound appointment confirmations.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-project-diagram",
                                title: "AI Integration & Data Pipelines",
                                desc: "Seamless RESTful API and message-queue integrations connecting AI intelligence into legacy ERPs, CRMs, and cloud data warehouses.",
                                link: "/solutions/ai-integration-services"
                            },
                            {
                                icon: "fa-comment-dots",
                                title: "Multilingual Conversational AI",
                                desc: "Enterprise chatbot systems equipped with intent recognition, contextual memory, and human handoff protocols across all communication channels.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-chart-network",
                                title: "Machine Learning Engineering",
                                desc: "Custom predictive models, anomaly detection, and automated MLOps pipelines supporting real-time inference at scale.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-lightbulb",
                                title: "AI Strategy & Consulting",
                                desc: "Objective feasibility audits, architectural roadmaps, and ROI modeling led by experienced artificial intelligence strategists.",
                                link: "/solutions/ai-consulting-services"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx % 3 + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                    <div className="thumbnail mb-3">
                                        <i className={`fas ${item.icon} fa-3x`} style={{ color: '#00C6FF' }}></i>
                                    </div>
                                    <h5 className="title text-white mb-2">{item.title}</h5>
                                    <p className="disc text-white-50 mb-4">{item.desc}</p>
                                    <Link to={item.link} className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Products Spotlight */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Production Platforms</span>
                                <h2 className="title">Proven AI Products Powering Business Growth</h2>
                                <p className="disc mt-3">
                                    Our turnkey AI platforms are built to be deployed immediately into enterprise workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-primary mb-3">Hiring Intelligence</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Workflow AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Accelerate technical hiring. Combine automated resume parsing in <Link to="/products/workflow/xpress-screening">Xpress Screening</Link>, AI video assessments in <Link to="/products/workflow/videosage">VideoSage</Link>, and proctored coding assessments in <Link to="/products/workflow/codesage">CodeSage</Link>.
                                    </p>
                                </div>
                                <Link to="/products/workflow" className="vrm-btn-detail mt-3">
                                    Discover Workflow AI <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-danger text-white mb-3">Computer Vision</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Visionix AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Next-generation facial recognition and visual intelligence engine delivering seamless biometric attendance, security tracking, and automated multi-camera surveillance analysis.
                                    </p>
                                </div>
                                <Link to="/products/visionix" className="vrm-btn-detail mt-3">
                                    Discover Visionix AI <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-warning text-dark mb-3">PropTech AI</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>VRM Reality</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        End-to-end intelligent platform connecting property buyer inquiries, conversational lead qualification, automated voice callbacks, and on-site scheduling in one unified pipeline.
                                    </p>
                                </div>
                                <Link to="/products/vrm-real-estate" className="vrm-btn-detail mt-3">
                                    Discover VRM Reality <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. FAQs Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <h2 className="title text-white">Frequently Asked Questions</h2>
                                <p className="disc text-white-50">Insights into our Bangalore operations, engineering methodology, and client engagements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionBangalore">
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

            {/* 6. CTA Section */}
            <div className="vrm-full-width-section vrm-white-bg py-5">
                <div className="container text-center py-4">
                    <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#0e1022' }}>
                        Accelerate Your Enterprise AI Strategy in Bangalore
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: '#666', fontSize: '16px', lineHeight: '1.8' }}>
                        Partner with VRM AI Technology at Electronic City. Let us engineer tailored, production-ready AI solutions that unlock new efficiencies and scale your operations.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Contact Bangalore Office <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AICompanyBangalore;
