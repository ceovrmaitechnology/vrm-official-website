import React from 'react';
import SEO from '../components/common/SEO';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
import AboutQualityCompliance from '../components/iso/AboutQualityCompliance';
import SuperintelligenceDirection from '../components/common/SuperintelligenceDirection';
import '../about-us.css'; // Import custom styles

function AboutUs() {
    return (
        <div className='about-page'>
            <SEO />
            <HeaderOne className="about-header-panel" />

            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="about-hero-content text-start">
                                <div className="about-hero__badge">
                                    Who We Are
                                </div>
                                <h1 className="about-hero__title text-white">About Us</h1>
                                <p className="about-hero__desc text-white">
                                    VRM AI Technology is a pioneer in enterprise AI solutions and product development. We design, deploy, and scale high-performance generative AI platforms and custom machine learning systems that streamline operations, elevate customer engagement, and drive sustained business growth. By combining deep technical expertise with strategic execution, we empower organizations worldwide to transform workflows and innovate confidently in an AI-first era.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-self-center justify-content-lg-end justify-content-center">
                            <div className="vrm-about-hero-img-container wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/about/about-1-v2.png" alt="VRM AI Team" className="vrm-about-hero-img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Driving Innovation Section */}
            <div className="about-innovation">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        <div className="col-lg-6 d-flex align-self-center justify-content-center mb-4 mb-lg-0">
                            <div className="vrm-about-innovation-img-container">
                                <img className="vrm-about-innovation-img"
                                    src="/assets/images/about/about-2.png"
                                    alt="Innovation"
                                    loading="lazy"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/assets/images/about/about-1.png" }} // Fallback
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="content-area">
                                <span className="section-label">VRM AI Technology</span>
                                <h2 className="section-title">Driving Innovation Through Artificial Intelligence</h2>
                                <p className="section-desc">
                                    VRM AI Technology is an AI solutions and product-based powerhouse. We design, build, and deploy intelligent GenAI platforms and machine learning systems that solve complex real-world problems.
                                </p>
                                <p className="section-desc">
                                    Our focus is on scalability, security, and measurable business impact. We help organizations modernize their workflows, enhance customer engagement, and unlock new growth opportunities through data-driven intelligence.
                                </p>

                                <div className="about-progress-wrapper">
                                    <div className="single-progress">
                                        <div className="progress-top">
                                            <p className="progress-title">Business Strategy</p>
                                            <span className="persectage">85%</span>
                                        </div>
                                        <div className="meter">
                                            <span style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <div className="single-progress">
                                        <div className="progress-top">
                                            <p className="progress-title">AI Implementation</p>
                                            <span className="persectage">95%</span>
                                        </div>
                                        <div className="meter">
                                            <span style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="about-mission-vision vrm-mission-vision-bg">
                <div className="container">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-md-6 d-flex">
                            <div className="mv-card mv-card-premium w-100">
                                <div className="mv-card-bg" style={{ backgroundImage: 'url(/assets/images/about/05-v2.jpg)' }}></div>
                                <div className="mv-card-overlay"></div>
                                <div className="mv-card-content">
                                    <div className="mv-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h3 className="mv-title">Our Mission</h3>
                                    <p className="mv-desc">
                                        To empower businesses globally with intelligent AI solutions that create measurable value, streamline operations, and foster sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="mv-card mv-card-premium w-100">
                                <div className="mv-card-bg" style={{ backgroundImage: 'url(/assets/images/about/04-v2.jpg)' }}></div>
                                <div className="mv-card-overlay"></div>
                                <div className="mv-card-content">
                                    <div className="mv-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <h3 className="mv-title">Our Vision</h3>
                                    <p className="mv-desc">
                                        To become the global leader in AI-driven enterprise products, defining the standard for intelligent automation and human-AI collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Provide Section */}
            <div className="about-services">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-label">Our Expertise</span>
                        <h2 className="section-title">What We Provide</h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {/* Service 1: AI Integration Services */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb service-thumb-ai-integration">
                                    <Link to="/solutions/ai-integration-services">
                                        <img src="/assets/images/Solutions/AIIntegration.png" alt="AI Integration Services" loading="lazy" />
                                    </Link>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">
                                        <Link to="/solutions/ai-integration-services">AI Integration Services</Link>
                                    </h4>
                                    <p className="service-desc-about">Seamlessly embed enterprise AI capabilities, generative models, and intelligent workflows into your existing business systems.</p>
                                    <Link to="/solutions/ai-integration-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: AI Development Services */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb service-thumb-ai-development">
                                    <Link to="/solutions/ai-development-services">
                                        <img src="/assets/images/Solutions/AIDevelopment.png" alt="AI Development Services" loading="lazy" />
                                    </Link>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">
                                        <Link to="/solutions/ai-development-services">AI Development Services</Link>
                                    </h4>
                                    <p className="service-desc-about">Custom AI model engineering, bespoke neural networks, autonomous agents, and scalable cloud architectures tailored to your business.</p>
                                    <Link to="/solutions/ai-development-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: AI Chatbot Development */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb service-thumb-ai-chatbot">
                                    <Link to="/solutions/ai-chatbot-development">
                                        <img src="/assets/images/Solutions/AIChatbot.png" alt="AI Chatbot Development" loading="lazy" />
                                    </Link>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">
                                        <Link to="/solutions/ai-chatbot-development">AI Chatbot Development</Link>
                                    </h4>
                                    <p className="service-desc-about">Intelligent multi-channel conversational chatbots with natural language understanding for automated support and customer engagement.</p>
                                    <Link to="/solutions/ai-chatbot-development" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 4: AI Calling Agent */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb service-thumb-ai-calling">
                                    <Link to="/solutions/ai-calling-agent">
                                        <img src="/assets/images/Solutions/AICallingAgent.png" alt="AI Calling Agent" loading="lazy" />
                                    </Link>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">
                                        <Link to="/solutions/ai-calling-agent">AI Calling Agent</Link>
                                    </h4>
                                    <p className="service-desc-about">Autonomous intelligent voice assistants that handle complex customer interactions, appointment bookings, and inquiries naturally.</p>
                                    <Link to="/solutions/ai-calling-agent" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 5: Machine Learning Services */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb service-thumb-ml">
                                    <Link to="/solutions/machine-learning-services">
                                        <img src="/assets/images/Solutions/MachineLearning.png" alt="Machine Learning Services" loading="lazy" />
                                    </Link>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">
                                        <Link to="/solutions/machine-learning-services">Machine Learning Services</Link>
                                    </h4>
                                    <p className="service-desc-about">Advanced predictive analytics, automated data pipelines, and machine learning models to unlock actionable business intelligence.</p>
                                    <Link to="/solutions/machine-learning-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="about-why-choose">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <span className="section-label d-block mb-3" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Why Choose Us</span>
                            <h2 className="section-title">We Are Experienced <br /> <span style={{ color: '#3B4ECC' }}>AI Solutions</span> Partners</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch g-5">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="faq-accordion-area">
                                <Accordion defaultActiveKey="0" className="vrm-faq-accordion">
                                    <Accordion.Item eventKey="0" className="accordion-item-about">
                                        <Accordion.Header className="accordion-button-about">01. How can AI help my business?</Accordion.Header>
                                        <Accordion.Body className="accordion-body-about">
                                            We design and deploy AI-powered solutions that help organizations automate workflows, improve customer engagement, and make smarter business decisions based on data.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="accordion-item-about">
                                        <Accordion.Header className="accordion-button-about">02. What services do you offer?</Accordion.Header>
                                        <Accordion.Body className="accordion-body-about">
                                            We deliver Intelligent GenAI, Automation Platforms, and Machine Learning Systems tailored to drive measurable business impact for your organization.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className="accordion-item-about">
                                        <Accordion.Header className="accordion-button-about">03. How do we get started?</Accordion.Header>
                                        <Accordion.Body className="accordion-body-about">
                                            Contact us to discuss how our AI-driven products and enterprise AI services can create measurable value and innovation for your business.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                            <div className="why-choose-thumbnail position-relative">
                                <img src="/assets/images/faq/02.png" alt="Collaborative Team Meeting with City Views - Why Choose Us" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PART 2 — ABOUT US PAGE: Quality & Compliance Section */}
            <AboutQualityCompliance />

            {/* Our Direction Section */}
            <SuperintelligenceDirection withCtaBand={false} />

            {/* Let's Discuss / CTA Section */}
            <div className="about-cta">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="about-cta__title">Ready to Transform Your Business?</h2>
                            <p className="about-cta__desc mx-auto" style={{ maxWidth: '600px' }}>
                                Let's discuss how our AI solutions can help you achieve your goals.
                                Partner with us for a smarter, faster future.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <Link to="/contactus#send-message" className="rts-btn btn-white text-center">Let's Work Together</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    )
}

export default AboutUs;
