import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
import '../about-us.css'; // Import custom styles

function AboutUs() {
    return (
        <div className='about-page'>
            <Helmet>
                <title>About Us | VRM AI Technology</title>
                <meta name="description" content="Learn about VRM AI Technology — a born Gen AI company delivering intelligent platforms, ML systems, and AI consulting for enterprises worldwide." />
                <meta property="og:title" content="About VRM AI Technology" />
                <meta property="og:description" content="Learn about VRM AI Technology — a born Gen AI company delivering intelligent platforms, ML systems, and AI consulting for enterprises worldwide." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/about-us" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About VRM AI Technology" />
                <meta name="twitter:description" content="Learn about VRM AI Technology — a born Gen AI company delivering intelligent platforms, ML systems, and AI consulting for enterprises worldwide." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
            <HeaderOne className="about-header-panel" />

            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="about-hero-content text-start">

                                <h1 className="about-hero__title text-white">About Us</h1>
                                <p className="about-hero__desc text-white-50">
                                    VRM AI Technology has pioneered AI services and products, consistently delivering measurable business value with the latest generative AI technology and automation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-hero-image wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src="/assets/images/about/about-1-v2.png" alt="VRM AI Team" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block', objectPosition: 'center 15%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Driving Innovation Section */}
            <div className="about-innovation">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        <div className="col-lg-6 d-none d-lg-flex h-100">
                            <div className="image-area w-100 h-100 position-relative">
                                <img
                                    className="img-fluid w-100 h-100"
                                    src="/assets/images/about/about-2.png"
                                    alt="Innovation"
                                    style={{ objectFit: 'cover', borderRadius: '16px' }}
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
                            <div className="mv-card mv-card-premium w-100" style={{ backgroundImage: 'url(/assets/images/about/05-v2.jpg)' }}>
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
                            <div className="mv-card mv-card-premium w-100" style={{ backgroundImage: 'url(/assets/images/about/04-v2.jpg)' }}>
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
                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb">
                                    <img src="/assets/images/Solutions/AICallingAgent.png" alt="AI Calling Agent" />
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">AI Calling Agent</h4>
                                    <p className="service-desc-about">24/7 intelligent voice assistants that handle complex customer interactions naturally.</p>
                                    <Link to="/solutions/ai-calling-agent" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb">
                                    <img src="/assets/images/Solutions/AIConsultingService.png" alt="AI Consulting" />
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">AI Consulting</h4>
                                    <p className="service-desc-about">Strategic guidance to identify high-impact AI opportunities for your business.</p>
                                    <Link to="/solutions/ai-consulting-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-about">
                                <div className="service-thumb">
                                    <img src="/assets/images/Solutions/AIDevelopment.png" alt="AI Development" />
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title-about">AI Development</h4>
                                    <p className="service-desc-about">Custom AI model development tailored to your specific operational needs.</p>
                                    <Link to="/solutions/ai-development-services" className="read-more-btn">Read More <i className="fas fa-arrow-right"></i></Link>
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
                                            Contact us to discuss how our AI-driven products and enterprise AI services can create measurable value and innovation for your business. We start with a consultation to understand your needs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
                            <div className="thumbnail position-relative" style={{ maxWidth: '480px', width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                                <img src="/assets/images/faq/02.png" alt="Why Choose Us" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Let's Discuss / CTA Section (Moved Below Why Choose Us) */}
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
