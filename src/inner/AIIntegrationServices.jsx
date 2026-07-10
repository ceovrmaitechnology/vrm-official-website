import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIIntegrationServices() {
    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-ai-integration-services">
            <HeaderOne />
            <Helmet>
                <title>AI Integration Services | API & Data Pipelines | VRM AI</title>
                <meta name="description" content="Embed AI workflows into your existing enterprise IT systems with expert integration services. REST APIs, Kafka pipelines, and containerized deployments." />
                <meta property="og:title" content="AI Integration Services — Secure API & Data Pipeline Engineering" />
                <meta property="og:description" content="Embed AI workflows into your existing enterprise IT systems with expert integration services. REST APIs, Kafka pipelines, and containerized deployments." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/solutions/ai-integration-services" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Integration Services — Secure API & Data Pipeline Engineering" />
                <meta name="twitter:description" content="Embed AI workflows into your existing enterprise IT systems with expert integration services. REST APIs, Kafka pipelines, and containerized deployments." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">
                                    AI Integration
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    AI Integration Service
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Seamlessly integrate advanced AI capabilities into your existing enterprise systems. Our AI integration services ensure secure, scalable, and high-performance implementation across platforms, enabling automation, intelligence, and operational efficiency.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIIntegration.png" alt="AI Integration Services" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }} />
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
                                <h2 className="title">Core AI Integration Services</h2>
                                <p className="disc mt-3">
                                    We provide end-to-end AI integration services that encompass system architecture design, integration engineering, and enterprise-scale deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-network-wired", title: "System integration with AI", desc: "Our system integration with AI approach enables seamless interoperability between existing software, enterprise applications, and AI-powered services." },
                            { icon: "fas fa-cogs", title: "AI implementation services", desc: "We align implementations with enterprise infrastructure, security controls, and operational standards to ensure controlled rollouts, system stability, and measurable business impact." },
                            { icon: "fas fa-plug", title: "Custom API & platform integration", desc: "We design and implement secure, scalable APIs that integrate AI services with existing enterprise platforms to ensure reliable inter-system communication." },
                            { icon: "fas fa-database", title: "AI data integration", desc: "Our data integration services establish robust pipelines to consolidate structured and unstructured data, ensuring datasets are AI-ready for reliable model training and inference." }
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
                                <h2 className="title text-white">Why Businesses Choose VRM AI Technology</h2>
                                <p className="disc mt-3 text-white-50">Selecting the right AI integration partner is essential to transforming artificial intelligence into a scalable, enterprise-wide capability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-sync-alt", title: "Seamless integration", desc: "We enable seamless interoperability between legacy and modern platforms using standardized APIs and secure data pipelines." },
                            { icon: "fas fa-check-circle", title: "Proven AI implementation", desc: "Our AI implementation services deliver production-ready AI solutions engineered for security, scalability, and reliability." },
                            { icon: "fas fa-forward", title: "Future-ready approach", desc: "We architect integration solutions using modular, cloud-native principles to support backward compatibility and extensibility." },
                            { icon: "fas fa-chart-line", title: "Measurable business value", desc: "Each integration initiative is designed with defined performance metrics and ROI benchmarks to improve productivity." }
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
                                <p className="disc mt-3">Our solutions are built on a modern, secure, and scalable technology foundation engineered for high performance and long-term reliability.</p>
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
                                    <div className="tech-marquee-item"><i className="fas fa-network-wired fa-lg" style={{ color: '#007ACC' }}></i> REST APIs</div>
                                    <div className="tech-marquee-item"><i className="fas fa-server fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
                                    <div className="tech-marquee-item"><i className="fas fa-dharmachakra fa-lg" style={{ color: '#326CE5' }}></i> Kubernetes</div>
                                    <div className="tech-marquee-item"><i className="fab fa-aws fa-lg" style={{ color: '#FF9900' }}></i> AWS Lambda</div>
                                    <div className="tech-marquee-item"><i className="fab fa-microsoft fa-lg" style={{ color: '#00A4EF' }}></i> Azure Functions</div>
                                    <div className="tech-marquee-item"><i className="fas fa-database fa-lg" style={{ color: '#4479A1' }}></i> SQL/NoSQL</div>
                                    <div className="tech-marquee-item"><i className="fas fa-lock fa-lg" style={{ color: '#00C7B7' }}></i> OAuth 2.0</div>
                                    <div className="tech-marquee-item"><i className="fas fa-project-diagram fa-lg" style={{ color: '#E0234E' }}></i> GraphQL</div>
                                    <div className="tech-marquee-item"><i className="fas fa-exchange-alt fa-lg" style={{ color: '#F05032' }}></i> Kafka</div>
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
                                <p className="disc mt-3">Our structured AI integration methodology is designed to minimize operational disruption while maximizing deployment efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { step: "01", title: "Assessment & Planning", desc: "We assess existing systems, operational workflows, and data readiness to identify integration requirements." },
                            { step: "02", title: "System Integration", desc: "We identify and design integration points where AI capabilities can be embedded into existing platforms." },
                            { step: "03", title: "AI Implementation", desc: "We deploy and configure AI solutions within production environments, ensuring alignment with business objectives." },
                            { step: "04", title: "Testing & Optimization", desc: "We validate system performance, fine-tune model outputs, and optimize infrastructure to ensure long-term scalability." }
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
                                    { q: "What are AI integration services?", a: "AI integration services embed artificial intelligence capabilities into existing enterprise systems and workflows, enabling seamless interoperability, efficient adoption, and measurable business impact." },
                                    { q: "How does system integration with AI help your business?", a: "System integration with AI improves enterprise efficiency by enabling seamless interoperability between core systems and AI-driven services through standardized interfaces and data pipelines." },
                                    { q: "What is included in AI implementation services?", a: "AI implementation services encompass structured deployment of AI solutions into production environments, integration with enterprise systems, and establishment of monitoring and performance controls." },
                                    { q: "Do I need to replace my existing software to use AI?", a: "No. AI capabilities can be embedded into existing enterprise systems using integration layers, adapters, and middleware, allowing organizations to extend current platforms without disruptive replacements." },
                                    { q: "Which industries benefit the most from AI integration?", a: "Industries such as finance, healthcare, retail, manufacturing, real estate, and energy benefit significantly by embedding intelligent automation and predictive analytics into existing workflows." }
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

export default AIIntegrationServices;
