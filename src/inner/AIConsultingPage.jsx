import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIConsultingPage() {
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
            q: "What does an enterprise AI consulting engagement entail?",
            a: "Our AI consulting engagements begin with a comprehensive audit of your organization's business processes, data infrastructure, and strategic objectives. We evaluate technical feasibility, model compute costs, define enterprise governance policies, and produce an actionable implementation roadmap prioritized by measurable ROI."
        },
        {
            q: "How does VRM AI Technology ensure tangible return on investment (ROI)?",
            a: "We avoid speculative experimentation by focusing on high-impact, deterministic use cases such as high-volume customer service automation, intelligent recruitment screening, predictive operational analytics, and internal knowledge search. Each initiative is tied to clear KPI milestones before software development commences."
        },
        {
            q: "Do we need an existing in-house data science team to work with VRM AI?",
            a: "No. While we frequently collaborate with client engineering teams, VRM AI Technology provides end-to-end full-lifecycle delivery. We handle data preparation, model selection, API engineering, user interface deployment, and ongoing production monitoring."
        },
        {
            q: "How does VRM AI help choose between open-source models and proprietary APIs?",
            a: "Model selection is determined by your security requirements, latency constraints, and total cost of ownership. We evaluate whether on-premise open-weights models (like Llama or Mistral) or managed cloud foundation models provide the optimal balance of privacy, speed, and unit economics."
        },
        {
            q: "How long does an initial AI strategy and readiness assessment take?",
            a: "A typical enterprise AI readiness assessment takes between 2 to 4 weeks, culminating in a detailed architectural blueprint, risk mitigation matrix, vendor-agnostic stack recommendation, and pilot proof-of-concept scope."
        }
    ];

    return (
        <div className="rts-ai-consulting-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Consulting Services &amp; Strategy | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology offers strategic AI consulting services, data architecture audits, ROI modeling, and enterprise machine learning implementation roadmaps." />
                <meta property="og:title" content="AI Consulting Services &amp; Strategy | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology offers strategic AI consulting services, data architecture audits, ROI modeling, and enterprise machine learning implementation roadmaps." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-consulting" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Consulting Services &amp; Strategy | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology offers strategic AI consulting services, data architecture audits, ROI modeling, and enterprise machine learning implementation roadmaps." />
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
                                    Strategic Advisory &bull; Enterprise Implementation
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Consulting Services &amp; Strategic Implementation
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Bridge the gap between artificial intelligence ambition and production execution. VRM AI Technology delivers data-driven AI strategy consulting, enterprise readiness assessments, and model architecture design that de-risk investment and accelerate operational transformation.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Request Strategic Consultation <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIConsultingService.png"
                                    alt="AI Consulting Services and Strategic Implementation - VRM AI"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Consulting Methodology */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Structured Execution
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                De-Risking AI Adoption Through Rigorous Engineering Strategy
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Navigating the rapid evolution of foundation models, vector databases, and MLOps tools can be overwhelming. Without clear architectural blueprints and governance controls, organizations risk expensive pilot failures, hallucination liabilities, and runaway cloud compute costs.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology acts as your objective technical copilot. We help enterprise leaders systematically audit data readiness, select optimal model architectures, implement ethical guardrails, and deploy scalable solutions that integrate frictionlessly into legacy IT ecosystems.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Vendor-Agnostic</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Objective model and infrastructure recommendations tailored strictly to your business needs.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO Certified Quality</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Certified development and compliance workflows aligned with ISO 9001:2015 standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Our 4-Stage Consulting Framework
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <span className="badge bg-primary mt-1" style={{ width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>1</span>
                                        <div><strong>Discovery &amp; Readiness Audit:</strong> Assessing data hygiene, API accessibility, security requirements, and organizational bandwidth.</div>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <span className="badge bg-primary mt-1" style={{ width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>2</span>
                                        <div><strong>Architectural Blueprinting:</strong> Defining model pipelines, vector indexing, GPU compute sizing, and data privacy guardrails.</div>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <span className="badge bg-primary mt-1" style={{ width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>3</span>
                                        <div><strong>Pilot Proof-of-Concept:</strong> Rapid prototype engineering to validate model accuracy, latency benchmarks, and business ROI.</div>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <span className="badge bg-primary mt-1" style={{ width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>4</span>
                                        <div><strong>Production Scale &amp; MLOps:</strong> Full deployment, CI/CD pipeline integration, automated drift monitoring, and staff training.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Consulting Domains */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Our Focus Areas</span>
                                <h2 className="title text-white">Strategic Consulting Advisory Practice</h2>
                                <p className="disc mt-3 text-white-50">
                                    Comprehensive advisory coverage spanning foundational models to operational integrations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-compass",
                                title: "Enterprise AI Strategy Consulting",
                                desc: "Align business KPIs with technical feasibility. We prioritize AI use cases by financial ROI, ease of integration, and competitive differentiation.",
                                link: "/solutions/ai-consulting-services"
                            },
                            {
                                icon: "fa-project-diagram",
                                title: "Generative AI Architecture Design",
                                desc: "Select between private open-weights models and managed foundation APIs. We design secure RAG architectures and multi-agent systems.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-plug",
                                title: "Enterprise System Integration",
                                desc: "Architect low-latency API gateways, event streaming pipelines, and microservices connecting AI directly into your ERP and CRM platforms.",
                                link: "/solutions/ai-integration-services"
                            },
                            {
                                icon: "fa-headset",
                                title: "Telephony & Conversational Strategy",
                                desc: "Evaluate speech-to-speech AI architectures, telephony carrier interconnects, and automated calling agent integration workflows.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-user-check",
                                title: "Recruitment Automation Advisory",
                                desc: "Modernize high-volume talent acquisition pipelines using AI screening, speech evaluations, and automated proctored technical assessments.",
                                link: "/products/workflow"
                            },
                            {
                                icon: "fa-shield-check",
                                title: "AI Governance & Architecture",
                                desc: "Establish bias mitigation, output auditing, and enterprise architecture standards.",
                                link: "/solutions/machine-learning-services"
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

            {/* 4. FAQs Section */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p className="disc">Common questions about our consulting methodology, timelines, and deliverables.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionConsulting">
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
                        Ready to Build a Winning Enterprise AI Strategy?
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Schedule a preliminary discovery session with our senior AI architects. We will evaluate your technical landscape and outline an actionable roadmap to success.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Book Discovery Consultation <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AIConsultingPage;
