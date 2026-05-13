
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIChatbotDevelopment() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    }

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-ai-chatbot-development">
            <HeaderOne className="header-white-text" />

            {/* 1. Hero Section - Enterprise Gradient & Background Image */}
            <div className="vrm-full-width-section ptb--120 position-relative" style={{
                backgroundImage: 'linear-gradient(rgba(17, 20, 44, 0.85), rgba(27, 39, 124, 0.9)), url(/assets/images/banner/04.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-start">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".2s">AI Chatbot Development Services</span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s" style={{ fontSize: '60px', fontWeight: '700', lineHeight: '1.2' }}>
                                    AI Chatbot Development
                                </h1>
                                <p className="disc wow fadeInUp text-white-50 mt-4 mb-5" data-wow-delay=".4s" style={{ maxWidth: '650px', fontSize: '18px', lineHeight: '1.6' }}>
                                    Build intelligent, scalable, and secure AI-powered chatbot solutions designed to enhance customer engagement, automate workflows, and drive enterprise growth. Our conversational AI systems leverage advanced NLP and machine learning to deliver seamless, human-like interactions.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".5s">
                                    <Link to="/contactus" className="vrm-btn vrm-btn-ghost">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIChatbot.png" alt="AI Chatbot Development" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Core Services - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Capabilities</span>
                                <h2 className="title">Core Chatbot Development Services</h2>
                                <p className="disc mt-3">
                                    We provide end-to-end AI chatbot development services encompassing solution architecture, conversation design, and enterprise-scale deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {/* Service Cards using vrm-industry-card style */}
                        {[
                            { icon: "fas fa-headset", title: "Customer Support Chatbots", desc: "Manage high-concurrency interactions with advanced intent classification. Provide real-time, accurate responses and automate issue resolution to ensure 24/7 availability." },
                            { icon: "fas fa-shopping-cart", title: "E-commerce Chatbots", desc: "Leverage localized product discovery and guided shopping. Integrated with inventory and payment systems to drive higher conversion rates and improved satisfaction." },
                            { icon: "fas fa-building", title: "Enterprise Chatbot Solutions", desc: "Support HR, IT, and operational workflows through advanced intent routing and role-based access control. Improve operational efficiency and workforce productivity." },
                            { icon: "fas fa-bullhorn", title: "Lead Generation & Qualification", desc: "Automate lead capture, enrichment, and qualification using intent detection. Evaluate lead readiness in real time and route qualified prospects to sales teams." }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100 p-5">
                                    <div className="thumbnail mb-4">
                                        <i className={`${service.icon} fa-3x text-primary`}></i>
                                    </div>
                                    <h5 className="title">{service.title}</h5>
                                    <p className="disc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Why Choose Us - Enterprise Gradient BG */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#4CC9F0' }}>Why VRM AI</span>
                                <h2 className="title text-white">Why Businesses Choose VRM AI</h2>
                                <p className="disc mt-3 text-white-50">We deliver enterprise-grade AI chatbot solutions built on advanced NLP pipelines, machine learning models, and scalable architectures.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-brain", title: "Advanced AI Expertise", desc: "Utilizing Large Language Models (LLMs) and optimized NLP pipelines for high-accuracy and adaptive systems." },
                            { icon: "fas fa-plug", title: "Seamless Integration", desc: "Deploy across web, mobile, and enterprise platforms using standardized APIs and secure middleware." },
                            { icon: "fas fa-expand-arrows-alt", title: "Scalable & Future-Ready", desc: "Cloud-native architectures with horizontal autoscaling to support high-concurrency traffic and rapid expansion." },
                            { icon: "fas fa-chart-bar", title: "Measurable Results", desc: "Data-driven performance measurement through comprehensive analytics including intent accuracy and conversion tracking." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100">
                                    <div className="thumbnail"><i className={`${item.icon} fa-3x text-primary mb-3`}></i></div>
                                    <h5 className="title">{item.title}</h5>
                                    <p className="disc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Tech Stack - Marquee - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">Our Tech Stack</h2>
                            </div>
                        </div>
                    </div>
                    {/* Infinite Scroll Marquee */}
                    <div className="tech-marquee-wrapper">
                        <div className="tech-marquee-track">
                            {/* Duplicating for infinite effect */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="tech-marquee-item"><i className="fab fa-python fa-lg" style={{ color: '#3776AB' }}></i> Python</div>
                                    <div className="tech-marquee-item"><i className="fab fa-node fa-lg" style={{ color: '#68A063' }}></i> Node.js</div>
                                    <div className="tech-marquee-item"><i className="fab fa-react fa-lg" style={{ color: '#61DAFB' }}></i> React</div>
                                    <div className="tech-marquee-item"><i className="fas fa-brain fa-lg" style={{ color: '#FF9900' }}></i> OpenAI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-google fa-lg" style={{ color: '#4285F4' }}></i> DialogFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-database fa-lg" style={{ color: '#FF6F00' }}></i> TensorFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-server fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
                                    <div className="tech-marquee-item"><i className="fas fa-code-branch fa-lg" style={{ color: '#F05032' }}></i> Git</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Our Process - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Approach</span>
                                <h2 className="title">Our Step-by-Step Approach</h2>
                                <p className="disc mt-3">Our structured delivery framework ensures AI chatbot solutions are aligned with business objectives and continuously optimized.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { step: "01", title: "Discovery & Planning", desc: "Analyze business objectives and workflows to identify high-impact use cases and define an implementation plan." },
                            { step: "02", title: "Development & Training", desc: "Design intelligent models, train them with high-quality datasets, and apply validation and tuning processes." },
                            { step: "03", title: "Testing & Optimization", desc: "Conduct functional and accuracy testing. Apply continuous fine-tuning to improve response quality." },
                            { step: "04", title: "Monitoring & Improvement", desc: "Monitor performance using analytics and KPIs to ensure the chatbot evolves with business needs." }
                        ].map((process, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${idx * 2}s`}>
                                <div className="vrm-process-step-refined bg-white p-4 h-100">
                                    <span className="step-num" style={{ fontSize: '32px', color: '#CBD5E1', fontWeight: '800' }}>{process.step}</span>
                                    <h5 className="title mt-3">{process.title}</h5>
                                    <p className="disc small">{process.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. FAQ Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title mb-5 text-white">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionExample">
                                {[
                                    { q: "What are AI chatbot development services?", a: "AI chatbot development services involve designing, building, and deploying intelligent conversational systems that use natural language processing and machine learning to interact with users. These chatbots automate communication, execute tasks, and integrate with enterprise systems." },
                                    { q: "How do AI chatbots improve business operations?", a: "AI chatbots improve business operations by automating repetitive interactions, reducing response times, and providing consistent, accurate information. They streamline workflows and reduce manual workload across teams." },
                                    { q: "Can AI chatbots be customized for my business needs?", a: "Yes. AI chatbots are fully customizable based on your business workflows, industry requirements, and use cases. Conversation flows, integrations, and intelligence models are tailored to align with your operational goals." },
                                    { q: "Can chatbots integrate with existing systems?", a: "Absolutely. AI chatbots are designed to integrate seamlessly with existing platforms such as CRM, ERP, ticketing systems, and databases through secure APIs and data pipelines." },
                                    { q: "Are AI chatbots scalable for enterprise use?", a: "Yes. Enterprise-grade chatbots are built on scalable, cloud-native architectures that support high-concurrency traffic and growing user demands while maintaining performance and reliability." },
                                    { q: "Do AI chatbots support multiple languages?", a: "Yes. AI chatbots can be trained to support multiple languages and regional contexts, enabling organizations to deliver consistent, localized experiences to global audiences." },
                                    { q: "How secure are AI chatbot solutions?", a: "Security is a core design principle. AI chatbot solutions implement secure authentication, role-based access control, encrypted data exchange, and compliance-aligned data handling." },
                                    { q: "Which industries benefit most from AI chatbots?", a: "Industries such as finance, healthcare, retail, e-commerce, manufacturing, real estate, and energy benefit significantly from AI chatbots by automating interactions and enabling data-driven engagement." },
                                    { q: "How do we get started with AI chatbot development?", a: "Engagement typically begins with a discovery and consultation phase. Based on this analysis, a structured chatbot roadmap is defined, followed by development, deployment, and ongoing optimization." }
                                ].map((faq, index) => (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button className={`accordion-button ${openAccordion === index + 1 ? '' : 'collapsed'}`} type="button" onClick={() => toggleAccordion(index + 1)}>
                                                {faq.q}
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${openAccordion === index + 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
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

            <FooterOne />
        </div >
    );
}

export default AIChatbotDevelopment;
