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
            q: "What makes VRM AI Technology a leading AI innovation company in Bangalore?",
            a: "Headquartered at GoodWorks Infinity Park in Electronic City Phase I, Bengaluru, VRM AI Technology operates at the epicenter of India’s Silicon Valley. We engineer production-grade Generative AI architectures, multi-agent autonomous workflows, low-latency conversational calling agents, and deep learning algorithms designed for enterprise scale."
        },
        {
            q: "Where is VRM AI Technology located in Bangalore?",
            a: "Our registered office and innovation center is located at GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100. We host enterprise architecture reviews and AI discovery sessions for clients across Bangalore."
        },
        {
            q: "How does VRM AI Technology support Bangalore's tech ecosystem?",
            a: "We collaborate with global enterprise engineering teams, SaaS unicorns, and digital enterprises across Bangalore to integrate advanced AI into existing tech stacks, automate high-volume hiring through Workflow.AI, and streamline multi-channel customer communications."
        },
        {
            q: "What specialized AI solutions does VRM AI provide in Bangalore?",
            a: "Our core solutions include custom Generative AI platform engineering, AI chatbot development with 95+ language support, autonomous voice calling agents, computer vision with Visionix AI, and strategic enterprise AI consulting."
        },
        {
            q: "How does VRM AI handle data security and enterprise compliance?",
            a: "As an ISO 9001:2015 certified organization, we deploy enterprise AI within dedicated virtual private clouds (VPC), implementing end-to-end data encryption, role-based access control (RBAC), and strict zero-data-retention compliance policies for proprietary corporate information."
        }
    ];

    return (
        <div className="rts-ai-consulting-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Innovation Company in Bangalore | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is an AI innovation company in Bangalore, engineering GenAI platforms, chatbots, and enterprise automation from Electronic City." />
                <meta property="og:title" content="AI Innovation Company in Bangalore | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology is an AI innovation company in Bangalore, engineering GenAI platforms, chatbots, and enterprise automation from Electronic City." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Innovation Company in Bangalore | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology is an AI innovation company in Bangalore, engineering GenAI platforms, chatbots, and enterprise automation from Electronic City." />
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
                                    Electronic City Phase I &bull; Silicon Valley of India
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Innovation Company in Bangalore
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Operating from Bangalore’s premier technology hub at Electronic City, VRM AI Technology designs and scales foundational AI systems. We empower global enterprises, high-growth startups, and visionary leaders with production-ready Generative AI platforms, intelligent automation, and conversational speech infrastructure.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Connect with Bangalore Team <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
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
                                    alt="VRM AI Technology Bangalore Innovation Hub"
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
                                Fueling Enterprise Scale
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Pioneering Enterprise AI Architectures from Electronic City
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Bangalore is the undisputed technological capital of India, housing the world’s most demanding engineering leaders and fastest-scaling digital products. In an era where generic AI wrappers fall short of enterprise expectations, VRM AI Technology focuses on deep architectural innovation: robust Retrieval-Augmented Generation (RAG), fine-tuned domain-specific LLMs, and resilient microservices.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                From our Bangalore center, we help Fortune 500 enterprises, tech conglomerates, and growth-stage companies replace fragmented legacy workflows with automated, self-improving AI engines. Our engineers build systems that scale gracefully across millions of interactions without compromising latency, accuracy, or security.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Electronic City Hub</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Centrally located within GoodWorks Infinity Park, Electronic City Phase I.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO 9001:2015 Quality</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Certified development lifecycle with automated testing, CI/CD, and model monitoring.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Bangalore Registered Office
                                </h4>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Connect directly with our senior software architects, AI consultants, and product leaders in Bangalore.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '14px', color: '#334155' }}>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-building text-primary mt-1"></i>
                                        <span><strong>Office:</strong> VRM AI Technology Private Limited<br />GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100</span>
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
                                    <i className="fas fa-calendar-check"></i> Book Bangalore Discovery Call
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
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Enterprise Capabilities</span>
                                <h2 className="title text-white">Full-Stack AI Engineering Built for Bangalore Tech Giants</h2>
                                <p className="disc mt-3 text-white-50">
                                    From algorithmic design to production deployments, we deliver enterprise-grade performance.
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
                                desc: "High-concurrency conversational voice agents handling 24/7 customer support, qualification, and automated outbound appointment confirmations.",
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
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Workflow.AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Cut technical hiring cycles by 70%. Combine automated resume parsing in <Link to="/products/workflow/xpress-screening">Xpress Screening</Link>, AI video assessments in <Link to="/products/workflow/videosage">VideoSage</Link>, and proctored coding assessments in <Link to="/products/workflow/codesage">CodeSage</Link>.
                                    </p>
                                </div>
                                <Link to="/products/workflow" className="vrm-btn-detail mt-3">
                                    Discover Workflow.AI <i className="fas fa-arrow-right"></i>
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
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>VRM Real Estate</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        End-to-end intelligent platform connecting property buyer inquiries, conversational lead qualification, automated voice callbacks, and on-site scheduling in one unified pipeline.
                                    </p>
                                </div>
                                <Link to="/products/vrm-real-estate" className="vrm-btn-detail mt-3">
                                    Discover VRM Real Estate <i className="fas fa-arrow-right"></i>
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
