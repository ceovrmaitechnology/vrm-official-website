import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function AICompanyChennai() {
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
            q: "Does VRM AI Technology have an office in Chennai?",
            a: "No. We serve Chennai businesses remotely from our Madurai development center and Bengaluru registered office."
        },
        {
            q: "How does VRM AI Technology work with Chennai businesses?",
            a: "We serve Chennai businesses remotely from our Madurai development center and Bengaluru registered office. Use our Contact Us page or call +91 81233 48355 to discuss your requirements."
        },
        {
            q: "What AI services are available for Chennai businesses?",
            a: "Custom Generative AI solutions, AI chatbot development, AI calling agents, machine learning services and enterprise software development."
        },
        {
            q: "Which products can Chennai organizations use?",
            a: "Workflow AI, People Connect, AI Buddy, Exit Intelligence, Visionix AI, VRM Reality and Bench to Deploy (B2D)."
        },
        {
            q: "How can a Chennai business get started?",
            a: "Use our Contact Us page or call +91 81233 48355 to discuss your requirements."
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
                "name": "AI Software Services for Chennai",
                "item": "https://www.vrmaitechnology.com/ai-software-services-chennai"
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
                <title>AI Software Services for Chennai | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology delivers AI software and GenAI solutions for Chennai businesses remotely from our Madurai development center & Bengaluru HQ." />
                <meta property="og:title" content="AI Software Services for Chennai | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology delivers AI software and GenAI solutions for Chennai businesses remotely from our Madurai development center & Bengaluru HQ." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-software-services-chennai" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Software Services for Chennai | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology delivers AI software and GenAI solutions for Chennai businesses remotely from our Madurai development center & Bengaluru HQ." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Remote Engineering &bull; Serving Chennai Industry
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Software Services for Chennai Businesses
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology engineers intelligent software solutions for Chennai businesses remotely from our Madurai development center and Bengaluru registered office. While we maintain no physical office in Chennai, our specialized engineering team delivers full-scale AI development with high technical rigor.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Discuss Your Chennai Project <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIDevelopment.png"
                                    alt="AI Software Services for Chennai by VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Remote Service Delivery Model */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Transparent Remote Delivery
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '32px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Delivering High-Performance AI Without Physical Overhead
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Chennai is a major commercial and technology hub in Southern India. Companies across the region require agile AI development partners who combine deep technical rigor with transparent communication and rapid delivery cycles.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                VRM AI Technology serves Chennai clients remotely through modern distributed workflows. Our staffed engineering team operates from our development center in Madurai, with corporate governance at our Bengaluru registered office. We do not maintain an office in Chennai, providing our clients direct access to technical teams and structured delivery models.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>ISO 9001:2015 Certified</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Quality management workflows ensuring rigorous software engineering across all remote client deliveries.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Remote Engineering</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Engineered from our Madurai development center with corporate governance at our Bengaluru registered office.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    How We Partner with Chennai Businesses
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '15px', color: '#334155', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Dedicated Engineering Pods:</strong> Agile development sprints with developers and project managers.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Continuous Collaboration:</strong> Regular communication, structured milestones, and project reviews keeping your team informed.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Quality Engineering:</strong> Standardized code quality checks adhering to ISO 9001:2015 quality management procedures.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-check-circle text-primary mt-1"></i>
                                        <span><strong>Direct Contact:</strong> Call +91 81233 48355 or use our contact form to discuss requirements.</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/contactus#send-message"
                                    className="vrm-btn-detail"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: '#1b277c', color: '#fff', textDecoration: 'none' }}
                                >
                                    Book Technical Consultation <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Core AI Services for Chennai Organizations */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Tailored AI Capabilities</span>
                                <h2 className="title text-white">Full-Spectrum AI Services Delivered to Chennai</h2>
                                <p className="disc mt-3 text-white-50">
                                    From modernizing customer interactions to building predictive machine learning engines, we deliver end-to-end artificial intelligence services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-comments",
                                title: "AI Chatbot Development",
                                desc: "Custom conversational AI bots supporting Tamil, English, and multiple languages for customer service, ecommerce, and field operations across Chennai.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-phone-volume",
                                title: "AI Calling Agents",
                                desc: "Autonomous voice AI agents handling automated inbound inquiries, payment reminders, and appointment scheduling with natural speech synthesis.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-brain",
                                title: "Generative AI Solutions",
                                desc: "Custom Generative AI workflows, document processing, and enterprise knowledge systems tailored to business data.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-cogs",
                                title: "Machine Learning Services",
                                desc: "Predictive analytics, demand forecasting, and diagnostic machine learning models for enterprise data environments.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-laptop-code",
                                title: "Enterprise Software Development",
                                desc: "Modern full-stack web and mobile application engineering, cloud infrastructure migration, and API integration for scalable business operations.",
                                link: "/solutions/ai-development-services"
                            },
                            {
                                icon: "fa-chess",
                                title: "AI Architecture Consulting",
                                desc: "Feasibility evaluations, technology roadmap planning, model benchmarking, and compliance assessments for expanding organizations.",
                                link: "/solutions/ai-consulting-services"
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
                                        Explore Service <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Products for Chennai Companies */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Software Products</span>
                                <h2 className="title">Proven Software Platforms for Chennai Industry</h2>
                                <p className="disc mt-3">
                                    Our suite of proprietary software platforms addresses high-volume recruitment, citizen engagement, workplace retention, and automated operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-primary mb-3">Recruitment Automation</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Workflow AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Accelerate IT and manufacturing hiring with our AI recruitment suite, featuring <Link to="/products/workflow/xpress-screening">Xpress Screening</Link>, <Link to="/products/workflow/screensage">ScreenSage</Link> voice interviews, <Link to="/products/workflow/videosage">VideoSage</Link> behavioral screening, and <Link to="/products/workflow/codesage">CodeSage</Link> proctored assessments.
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
                                    <span className="badge bg-success mb-3">Public Services</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>People Connect</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Civic feedback orchestration and multi-channel grievance management platform connecting urban administrative teams with community members via automated conversational workflows.
                                    </p>
                                </div>
                                <Link to="/products/people-connect" className="vrm-btn-detail mt-3">
                                    Discover People Connect <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-info text-white mb-3">HR Analytics</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Exit Intelligence</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Automated offboarding interviews and structured attrition analytics, helping HR directors across Chennai software firms detect early turnover indicators and retain critical talent.
                                    </p>
                                </div>
                                <Link to="/products/exitinterview" className="vrm-btn-detail mt-3">
                                    Discover Exit Intelligence <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-secondary mb-3">Biometrics</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Visionix AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Facial recognition, visual verification, and biometric security systems tailored for commercial complexes, industrial plants, and healthcare facilities.
                                    </p>
                                </div>
                                <Link to="/products/visionix" className="vrm-btn-detail mt-3">
                                    Discover Visionix AI <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-warning text-dark mb-3">Real Estate</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>VRM Reality</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Premium real estate offering from VRM AI Technology, supported by AI-powered automation.
                                    </p>
                                </div>
                                <Link to="/products/vrm-real-estate" className="vrm-btn-detail mt-3">
                                    Discover VRM Reality <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-dark text-white mb-3">Talent Deployment</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Bench to Deploy (B2D)</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        Bench to Deploy (B2D), a product by VRM AI Technology.
                                    </p>
                                </div>
                                <Link to="/products/bench-to-deploy" className="vrm-btn-detail mt-3">
                                    Discover Bench to Deploy <i className="fas fa-arrow-right"></i>
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
                                <p className="disc text-white-50">Clear information regarding how we partner remotely with businesses located in Chennai.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionChennai">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id={`headingChennai${index}`}>
                                            <button
                                                className={`accordion-button ${openAccordion === index + 1 ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(index + 1)}
                                            >
                                                {faq.q}
                                            </button>
                                        </h2>
                                        <div id={`collapseChennai${index}`} className={`accordion-collapse collapse ${openAccordion === index + 1 ? 'show' : ''}`}>
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
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0e1022' }}>
                        Ready to Build Advanced AI for Your Chennai Business?
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: '#666', fontSize: '16px', lineHeight: '1.8' }}>
                        Connect directly with our engineering leadership to explore how our development center in Madurai and corporate office in Bengaluru can accelerate your software roadmap.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Schedule a Consultation <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AICompanyChennai;
