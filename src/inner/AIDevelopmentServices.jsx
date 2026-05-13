
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIDevelopmentServices() {
    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-ai-development-services">
            <HeaderOne className="header-white-text" />
            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">
                                    AI Development
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    AI Development Services
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Our AI development services empower organizations to harness advanced artificial intelligence for smarter decision-making, workflow automation, and scalable innovation.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus" className="vrm-btn vrm-btn-ghost">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIDevelopment.png" alt="AI Development Services" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Core Services Section - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Expertise</span>
                                <h2 className="title">Core AI Development Services</h2>
                                <p className="disc mt-3">
                                    We offer end-to-end AI engineering capabilities designed for enterprise scalability, security, and long-term adaptability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {/* Service Cards */}
                        {[
                            { icon: "fas fa-microchip", title: "Custom AI Solutions", desc: "Design and develop AI applications tailored to your business workflows, enabling automation, personalization, and data-driven decision-making with measurable impact." },
                            { icon: "fas fa-robot", title: "Machine Learning Development", desc: "Architect, train, and deploy machine learning models for applications such as predictive analytics, anomaly detection, recommendation engines, and advanced insights extraction." },
                            { icon: "fas fa-language", title: "Natural Language Processing (NLP)", desc: "Build solutions powered by advanced NLP techniques for conversational AI, text analysis, semantic search, sentiment detection, and contextual understanding." },
                            { icon: "fas fa-eye", title: "Computer Vision", desc: "Develop AI-based image and video recognition systems to support use cases like healthcare diagnostics, manufacturing quality inspection, visual search, and automation." }
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

            {/* 3. Why Choose Us - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Why VRM AI</span>
                                <h2 className="title">Why Businesses Choose VRM AI Technology</h2>
                                <p className="disc mt-3">Choosing the right AI development partner ensures that your AI investments deliver measurable, long-term business value.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-globe", title: "Cross-industry expertise", desc: "Proven deployments in FinTech, Healthcare, Retail, Manufacturing, PropTech, and Energy." },
                            { icon: "fas fa-pencil-ruler", title: "Tailored digital solutions", desc: "Customized AI development aligned with unique business needs and operational priorities." },
                            { icon: "fas fa-rocket", title: "Innovation & scalability", desc: "Cutting-edge technologies designed for secure, future-ready, and scalable solutions." },
                            { icon: "fas fa-users", title: "Client-first approach", desc: "Transparent partnerships focused on measurable results and long-term success." }
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
                                <p className="disc mt-3">Great AI solutions require a strong technology foundation. We use modern, secure, and high-performance tools.</p>
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
                                    <div className="tech-marquee-item"><i className="fas fa-brain fa-lg" style={{ color: '#FF9900' }}></i> TensorFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-fire fa-lg" style={{ color: '#EE4C2C' }}></i> PyTorch</div>
                                    <div className="tech-marquee-item"><i className="fas fa-cube fa-lg" style={{ color: '#D00000' }}></i> Keras</div>
                                    <div className="tech-marquee-item"><i className="fas fa-cogs fa-lg" style={{ color: '#F7931E' }}></i> Scikit-learn</div>
                                    <div className="tech-marquee-item"><i className="fas fa-eye fa-lg" style={{ color: '#5C3EE8' }}></i> OpenCV</div>
                                    <div className="tech-marquee-item"><i className="fab fa-aws fa-lg" style={{ color: '#FF9900' }}></i> SageMaker</div>
                                    <div className="tech-marquee-item"><i className="fab fa-microsoft fa-lg" style={{ color: '#00A4EF' }}></i> Azure AI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-google fa-lg" style={{ color: '#4285F4' }}></i> Google AI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-docker fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
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
                                <p className="disc mt-3">Our structured AI development methodology ensures minimal risk, optimal performance, and measurable value.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { step: "01", title: "Discovery & Planning", desc: "We assess business goals, technical needs, and data assets to define a strategic AI roadmap." },
                            { step: "02", title: "Architecture & Design", desc: "We design scalable AI system architectures, data models, integration blueprints, and deployment strategies." },
                            { step: "03", title: "Development & Training", desc: "We build and train AI models, develop software components, and implement secure backend systems." },
                            { step: "04", title: "Testing & Optimization", desc: "We conduct rigorous testing, including performance benchmarking and model validation, and optimize systems." },
                            { step: "05", title: "Deployment & Support", desc: "We deploy AI systems into production with structured rollout plans, monitoring controls, and ongoing support." }
                        ].map((process, idx) => (
                            <div key={idx} className={`${idx >= 3 ? 'col-lg-6' : 'col-lg-4'} col-md-6 wow fadeInUp`} data-wow-delay={`.${idx * 2}s`}>
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
                                    { q: "What are AI development services?", a: "AI development services include end-to-end creation of AI systems that automate processes, provide predictive insights, and integrate intelligent functionality into enterprise applications." },
                                    { q: "How do AI solutions benefit businesses?", a: "AI delivers operational efficiency, data-driven decision support, automation of manual tasks, enhanced customer interactions, and insights that drive strategic advantage." },
                                    { q: "Can AI handle enterprise-scale operations?", a: "Yes. Modern AI systems are engineered for high concurrency, robust performance, and integration with enterprise-grade infrastructure and workflows." },
                                    { q: "Which industries benefit from AI development?", a: "Industries such as finance, healthcare, retail, manufacturing, real estate, and energy benefit from AI adoption through automation, predictive analytics, and advanced insights." },
                                    { q: "How do I begin with your AI development services?", a: "Start with a consultation where we assess your business needs, data readiness, and workflow architecture, then define a tailored AI roadmap for implementation." }
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
        </div>
    );
}

export default AIDevelopmentServices;
