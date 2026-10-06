import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIChatbotServices() {
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
            q: "What are enterprise conversational AI chatbots?",
            a: "Enterprise conversational AI chatbots are intelligent software agents powered by large language models, natural language understanding (NLU), and API integration layers. Unlike rule-based bots with static scripts, conversational AI understands intent, context, and sentiment, enabling dynamic, human-like dialogue."
        },
        {
            q: "Which messaging channels do your AI chatbots support?",
            a: "Our chatbots deploy seamlessly across all primary digital customer touchpoints: WhatsApp Business API, web chat widgets, mobile apps (iOS and Android), Microsoft Teams, Slack, and custom enterprise portals."
        },
        {
            q: "How do your chatbots integrate with enterprise CRMs and databases?",
            a: "We engineer bi-directional API connectors for Salesforce, HubSpot, Zoho, SAP, custom SQL/NoSQL databases, and internal webhooks. Chatbots can authenticate users, look up order statuses, create tickets, and update customer profiles in real time."
        },
        {
            q: "Does the chatbot support human agent handoff?",
            a: "Yes. When a conversation involves complex inquiries, negative sentiment, or high-value sales qualification, the bot automatically routes the full conversation context and customer history to live human agents via your existing ticketing platform."
        },
        {
            q: "What languages do your conversational AI systems support?",
            a: "Our conversational engines support numerous global and regional languages, including native multilingual comprehension for English, Tamil, Hindi, Spanish, German, French, and regional mixed dialects."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Chatbot &amp; Conversational AI Services | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology builds conversational AI chatbots, multilingual virtual assistants, and automated customer support platforms for enterprise workflows." />
                <meta property="og:title" content="AI Chatbot &amp; Conversational AI Services | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology builds conversational AI chatbots, multilingual virtual assistants, and automated customer support platforms for enterprise workflows." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-chatbot-development" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Chatbot &amp; Conversational AI Services | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology builds conversational AI chatbots, multilingual virtual assistants, and automated customer support platforms for enterprise workflows." />
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
                                    Enterprise Conversational AI &bull; Omnichannel Automation
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Chatbot &amp; Conversational AI Services
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Transform customer engagement and internal operations with intelligent conversational AI. VRM AI Technology designs, trains, and deploys high-accuracy AI chatbots and virtual assistants that automate a significant portion of routine inquiries with context-aware, multilingual fluency.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Build Your AI Chatbot <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions/ai-calling-agent" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore Voice Calling AI
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIChatbot.png"
                                    alt="AI Chatbot and Conversational AI Services - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Architecture & Business Value */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Smart Interaction Design
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Conversational Systems That Drive True Operational Velocity
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Modern customers expect instantaneous, accurate, and personalized responses across whichever digital channel they prefer. Rigid decision-tree bots create frustration; modern enterprises need conversational platforms capable of interpreting complex intents, managing multi-turn dialogs, and performing live backend transactions.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                VRM AI Technology crafts bespoke conversational architectures combining advanced Natural Language Processing (NLP), domain fine-tuning, and robust middleware integrations. Our chatbots handle lead qualification, customer onboarding, order tracking, and IT support ticketing with enterprise stability and sub-second response latency.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Continuous Omnichannel</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Simultaneous execution across WhatsApp, web, mobile apps, and Slack.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Intelligent Escalation</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Automated sentiment detection with smooth, context-preserved human agent handoff.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Key Chatbot Capabilities
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Contextual Memory:</strong> Retaining conversation history across long dialog turns to avoid repetitive customer questions.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>WhatsApp Business API:</strong> Official green-badge verification, catalog browsing, interactive buttons, and template notifications.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Live Transaction Processing:</strong> Direct database read/write for appointment scheduling, balance inquiries, and order tracking.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Enterprise Security:</strong> End-to-end payload encryption and SOC-2 / ISO 9001:2015 aligned data privacy governance.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Industry Applications */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Tailored Solutions</span>
                                <h2 className="title text-white">Conversational Solutions for Every Industry</h2>
                                <p className="disc mt-3 text-white-50">
                                    Our chatbots are tuned to the precise terminology and workflows of your industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-shopping-cart",
                                title: "E-Commerce & Retail",
                                desc: "Automate order tracking, product recommendations, returns processing, and cart abandonment recovery directly within messaging apps.",
                                link: "/solutions/ai-development-services"
                            },
                            {
                                icon: "fa-home",
                                title: "Real Estate & Housing",
                                desc: "Qualify buyer inquiries around the clock, schedule site visits, and coordinate field agents using our integrated VRM Reality engine.",
                                link: "/products/vrm-reality"
                            },
                            {
                                icon: "fa-user-tie",
                                title: "HR & Recruitment",
                                desc: "Automate candidate screening, interview scheduling, and employee policy queries using our Workflow.AI intelligence platform.",
                                link: "/products/workflow"
                            },
                            {
                                icon: "fa-university",
                                title: "Banking & Financial Services",
                                desc: "Securely resolve account inquiries, guide loan applications, and detect fraudulent transaction queries with encrypted pipelines.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-hospital",
                                title: "Healthcare & Patient Care",
                                desc: "Facilitate appointment booking, doctor directory search, and prescription refill guidance with strict HIPAA-aligned privacy.",
                                link: "/solutions/ai-integration-services"
                            },
                            {
                                icon: "fa-city",
                                title: "Public Sector & Governance",
                                desc: "Orchestrate citizen grievance collection and civic outreach via WhatsApp with our People Connect (Global) platform.",
                                link: "/products/people-connect"
                            }
                        ].map((card, i) => (
                            <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(i % 3 + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                    <div className="thumbnail mb-3">
                                        <i className={`fas ${card.icon} fa-3x`} style={{ color: '#00C6FF' }}></i>
                                    </div>
                                    <h5 className="title text-white mb-2">{card.title}</h5>
                                    <p className="disc text-white-50 mb-4">{card.desc}</p>
                                    <Link to={card.link} className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                        View Details <i className="fas fa-arrow-right ms-1"></i>
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
                                <p className="disc">Everything you need to know about developing and deploying enterprise AI chatbots.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionChatbot">
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
                        Ready to Automate Customer Conversations with AI?
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Speak with our conversational AI specialists to design a customized chatbot roadmap that scales your customer engagement seamlessly.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Contact Us <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AIChatbotServices;
