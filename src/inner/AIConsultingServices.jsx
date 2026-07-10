import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AIConsultingServices() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    }

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-ai-consulting-services">
            {/* Header: White text mode for dark gradient hero */}
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Consulting Services | Strategy & Execution | VRM AI</title>
                <meta name="description" content="AI consulting by VRM AI Technology. We design data-driven AI strategies, ML model architectures, and enterprise solutions for global business scale." />
                <meta property="og:title" content="AI Consulting Services — Strategy, Architecture & Execution" />
                <meta property="og:description" content="AI consulting by VRM AI Technology. We design data-driven AI strategies, ML model architectures, and enterprise solutions for global business scale." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/solutions/ai-consulting-services" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Consulting Services — Strategy, Architecture & Execution" />
                <meta name="twitter:description" content="AI consulting by VRM AI Technology. We design data-driven AI strategies, ML model architectures, and enterprise solutions for global business scale." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>AI Consulting Services</span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    Transform Raw Data Into Actionable Intelligence
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Our AI consulting services support organizations in designing and implementing data-driven AI solutions. We specialize in AI strategy development, machine learning model design, and enterprise-grade deployment to improve efficiency and enable scalable innovation.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="rts-btn btn-white">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIConsultingService.png" alt="AI Consulting" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Core Services - White Background */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Expertise</span>
                                <h2 className="title">Core AI Consulting Services</h2>
                                <p className="disc mt-3">
                                    We provide end-to-end AI consulting services that encompass strategic planning, system architecture, and enterprise-scale execution.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {/* Service Cards with existing styles */}
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-industry-card text-center">
                                <div className="thumbnail">
                                    <i className="fas fa-chess fa-3x text-primary mb-3"></i>
                                </div>
                                <h5 className="title">AI Strategy Consulting</h5>
                                <p className="disc">Systematically identify and prioritize AI use cases with measurable business impact. We conduct in-depth assessments and define governance-aligned AI roadmaps that integrate seamlessly with your business strategy.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="vrm-industry-card text-center">
                                <div className="thumbnail">
                                    <i className="fas fa-building fa-3x text-primary mb-3"></i>
                                </div>
                                <h5 className="title">Enterprise AI Consulting</h5>
                                <p className="disc">Support large-scale AI adoption across departments. We architect and deploy secure, scalable AI systems that integrate with enterprise data platforms for HR automation, IT ops, and compliance.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="vrm-industry-card text-center">
                                <div className="thumbnail">
                                    <i className="fas fa-tools fa-3x text-primary mb-3"></i>
                                </div>
                                <h5 className="title">AI Implementation Support</h5>
                                <p className="disc">Structured delivery combining deep technical expertise with industry best practices. We integrate AI solutions into existing IT ecosystems and establish monitoring processes to ensure stability.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-industry-card text-center">
                                <div className="thumbnail">
                                    <i className="fas fa-tachometer-alt fa-3x text-primary mb-3"></i>
                                </div>
                                <h5 className="title">AI Performance Optimization</h5>
                                <p className="disc">Continuous performance monitoring, model tuning, and optimization workflows. We analyze inference results and retrain models to ensure reliable, cost-effective AI systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Why Choose Us - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Why VRM AI</span>
                                <h2 className="title text-white">Why Businesses Choose VRM AI Technology</h2>
                                <p className="disc mt-3 text-white-50">We bridge the gap between strategy and execution by combining deep domain expertise, proven methodologies, and scalable AI solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fa-brain", title: "Proven AI Expertise", desc: "Deep technical expertise across AI, ML, and advanced analytics." },
                            { icon: "fa-clipboard-list", title: "Tailored Strategies", desc: "Solutions designed through detailed analysis of workflows." },
                            { icon: "fa-layer-group", title: "Enterprise Scalability", desc: "Systems designed to scale across teams and global markets." },
                            { icon: "fa-chart-line", title: "Measurable Outcomes", desc: "We prioritize quantifiable business outcomes through defined KPIs." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                                    <div className="thumbnail"><i className={`fas ${item.icon} fa-3x mb-3`} style={{ color: '#00C6FF' }}></i></div>
                                    <h5 className="title text-white">{item.title}</h5>
                                    <p className="disc text-white-50">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Tech Stack - Infinite Marquee - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">Our Tech Stack</h2>
                                <p className="disc">Built on modern, secure, and scalable foundations.</p>
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
                                    <div className="tech-marquee-item"><i className="fas fa-brain fa-lg" style={{ color: '#FF6F00' }}></i> TensorFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-fire fa-lg" style={{ color: '#EE4C2C' }}></i> PyTorch</div>
                                    <div className="tech-marquee-item"><i className="fab fa-aws fa-lg" style={{ color: '#FF9900' }}></i> AWS SageMaker</div>
                                    <div className="tech-marquee-item"><i className="fab fa-google fa-lg" style={{ color: '#4285F4' }}></i> Google Cloud AI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-microsoft fa-lg" style={{ color: '#00A4EF' }}></i> Azure AI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-docker fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
                                    <div className="tech-marquee-item"><i className="fas fa-network-wired fa-lg" style={{ color: '#326CE5' }}></i> Kubernetes</div>
                                    <div className="tech-marquee-item"><i className="fas fa-database fa-lg" style={{ color: '#4479A1' }}></i> SQL/NoSQL</div>
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
                                <p className="disc mt-3">Structured delivery aligning AI with business strategy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { num: "01", title: "Discovery & Analysis", desc: "Evaluate objectives and data architecture." },
                            { num: "02", title: "AI Strategy Consulting", desc: "Define roadmap, milestones, and metrics." },
                            { num: "03", title: "Implementation", desc: "Deploy production-grade AI solutions." },
                            { num: "04", title: "Optimization", desc: "Continuous monitoring and scaling." }
                        ].map((step, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                                <div className="vrm-process-step-refined h-100 p-4 bg-white">
                                    <span className="step-num" style={{ fontSize: '40px', fontWeight: '800', color: '#E2E8F0' }}>{step.num}</span>
                                    <h5 className="title mt-3">{step.title}</h5>
                                    <p className="disc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. FAQ Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title text-white">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionExample">
                                {[
                                    { q: "What are AI consulting services?", a: "AI consulting services help organizations identify high-impact opportunities, define data-driven strategies, and implement AI solutions that improve operational efficiency, mitigate risk, and deliver measurable business growth." },
                                    { q: "How does AI strategy consulting benefit your business?", a: "AI strategy consulting defines a structured roadmap for AI adoption, ensuring technology investments are aligned with business objectives, optimized for ROI, and designed to scale with future operational and growth requirements." },
                                    { q: "What is enterprise AI consulting?", a: "Enterprise AI consulting supports large organizations in deploying AI solutions across multiple departments and functions in a secure, compliant, and scalable manner. It ensures consistent governance, efficient adoption, and cross-functional insights." },
                                    { q: "Which industries benefit from these services?", a: "Industries including finance, healthcare, retail, manufacturing, real estate, and energy leverage AI consulting services to drive automation, improve operational efficiency, and enable data-driven innovation." },
                                    { q: "How do I begin with your services?", a: "Engagement begins with a consultation where we assess business workflows, evaluate data readiness and system architecture, and define a tailored AI roadmap designed for seamless adoption and measurable business outcomes." }
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

export default AIConsultingServices;
