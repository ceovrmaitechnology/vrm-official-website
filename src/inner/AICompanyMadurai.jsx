import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

/*
 * NOTE / VERIFICATION SOURCE:
 * Madurai Development Center is verified from existing codebase:
 * File: src/inner/ContactUs.jsx (Lines 455-484)
 * Address: Door No,209, 1ST Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014
 * Contact: +91 81233 48355 / contactus@vrmaitechnology.com
 */

function AICompanyMadurai() {
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
            q: "Where is VRM AI Technology located in Madurai?",
            a: "Our development center is at Door No.209, 1st Floor, No.147, 5th St, Periyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014, India."
        },
        {
            q: "What does the Madurai development center do?",
            a: "It is our staffed development center, where our team designs and deploys AI software including Generative AI platforms, AI chatbots, AI calling agents and machine learning systems."
        },
        {
            q: "What AI products does VRM AI Technology offer?",
            a: "Workflow AI, People Connect, AI Buddy, Exit Intelligence, Visionix AI, VRM Reality and Bench to Deploy (B2D)."
        },
        {
            q: "Does VRM AI Technology build custom AI solutions?",
            a: "Yes. We build custom AI chatbots, AI calling agents, machine learning systems and Generative AI solutions, along with enterprise software development."
        },
        {
            q: "Is VRM AI Technology ISO certified?",
            a: "Yes. VRM AI Technology is ISO 9001:2015 certified."
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
                "name": "Madurai Development Center",
                "item": "https://www.vrmaitechnology.com/ai-company-madurai"
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "VRM AI Technology - Madurai Development Center",
        "image": "https://www.vrmaitechnology.com/assets/images/logo/logo.png",
        "url": "https://www.vrmaitechnology.com/ai-company-madurai",
        "telephone": "+91 81233 48355",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Door No.209, 1st Floor, No.147, 5th St, Periyalar Nagar, Tiruppalai",
            "addressLocality": "Madurai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "625014",
            "addressCountry": "IN"
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "VRM AI Technology Private Limited",
            "url": "https://www.vrmaitechnology.com/"
        }
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
                <title>AI Software Company in Madurai | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is an AI software company in Madurai engineering GenAI platforms, conversational chatbots, and enterprise ML software." />
                <meta property="og:title" content="AI Software Company in Madurai | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology is an AI software company in Madurai engineering GenAI platforms, conversational chatbots, and enterprise ML software." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-madurai" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Software Company in Madurai | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology is an AI software company in Madurai engineering GenAI platforms, conversational chatbots, and enterprise ML software." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Madurai Development Center &bull; Southern Tamil Nadu Tech Hub
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Development Company in Madurai
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology powers enterprise transformation from Madurai, Tamil Nadu. We engineer next-generation artificial intelligence software, custom generative AI platforms, autonomous calling agents, and deep learning systems that deliver quantifiable business value for modern enterprises worldwide.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Schedule Madurai Consultation <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/products" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AIDevelopment.png"
                                    alt="VRM AI Technology Development Center in Madurai"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Madurai Tech Ecosystem & Mission */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Tier-2 Innovation Powerhouse
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Building World-Class AI Products from the Heart of Madurai
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Madurai is celebrated for its heritage and industry, and stands at the forefront of Tamil Nadu’s emerging digital corridor. With academic institutions producing skilled software engineers, mathematicians, and data scientists, Madurai offers an environment for high-retention, focused deep tech research and development.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                At VRM AI Technology, our Madurai development center bridges local technical expertise with modern engineering standards. We develop production-ready artificial intelligence systems that help enterprises automate manual operations, extract actionable intelligence from unstructured data, and scale their customer touchpoints seamlessly.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Engineering Precision</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Full-stack AI architectures adhering to ISO 9001:2015 certified quality management controls.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Scalable Product Delivery</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Structured product delivery cycles with focused engineering execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Visit Our Madurai Development Center
                                </h4>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Our doors are open to founders, enterprise executives, and technology innovators across Madurai, Tiruchirappalli, Tirunelveli, and the wider Southern Tamil Nadu ecosystem.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', fontSize: '14px', color: '#334155' }}>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                                        <span><strong>Address:</strong> Door No.209, 1st Floor, No.147, 5th St, Periyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014, India</span>
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
                                <div style={{ marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', height: '220px', border: '1px solid #cbd5e1' }}>
                                    <iframe
                                        title="VRM AI Technology Madurai Development Center Location Map"
                                        src="https://maps.google.com/maps?q=Door+No.209,+1st+Floor,+No.147,+5th+St,+Periyalar+Nagar,+Tiruppalai,+Madurai,+Tamil+Nadu+625014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=VRM+AI+Technology+(OPC)+Pvt.Ltd,+Door+No,209,+1ST+Floor,+No.147,+5th+St,+Poriyalar+Nagar,+Tiruppalai,+Madurai,+Tamil+Nadu+625014"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="vrm-btn-detail"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '8px', background: '#1b277c', color: '#fff', textDecoration: 'none', fontSize: '13px' }}
                                    >
                                        <i className="fas fa-map-marked-alt"></i> View Google Business Profile
                                    </a>
                                    <Link
                                        to="/contactus#send-message"
                                        className="vrm-btn-detail"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '8px', background: 'rgba(27,39,124,0.1)', color: '#1b277c', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}
                                    >
                                        Contact Development Team <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Core Software & Product Offerings */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Our Capabilities</span>
                                <h2 className="title text-white">Full-Spectrum AI Services Developed in Madurai</h2>
                                <p className="disc mt-3 text-white-50">
                                    We combine foundational research with production-grade engineering to deliver end-to-end artificial intelligence solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-brain",
                                title: "Generative AI Development",
                                desc: "Custom LLM fine-tuning, RAG (Retrieval-Augmented Generation) architectures, and enterprise vector databases designed for secure internal intelligence.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-comments",
                                title: "AI Chatbot Engineering",
                                desc: "Conversational chatbots supporting Tamil and English across WhatsApp, mobile, web, and enterprise messaging.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-phone-volume",
                                title: "AI Voice Calling Agents",
                                desc: "Autonomous low-latency conversational voice agents capable of conducting natural inbound support and outbound verification calls.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-cogs",
                                title: "Custom Machine Learning",
                                desc: "Predictive modeling, regression analytics, and neural network pipelines integrated directly into enterprise software environments.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-eye",
                                title: "Computer Vision & Biometrics",
                                desc: "Automated facial recognition, visual surveillance analysis, and biometric verification powered by our proprietary Visionix AI engine.",
                                link: "/products/visionix"
                            },
                            {
                                icon: "fa-chess",
                                title: "AI Strategy & Consulting",
                                desc: "Actionable AI readiness audits, feasibility assessments, model evaluation, and governance roadmaps to maximize return on AI investment.",
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
                                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Flagship Enterprise Products */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Proprietary Platforms</span>
                                <h2 className="title">Flagship AI Products Built by Our Teams</h2>
                                <p className="disc mt-3">
                                    Explore the intelligent software platforms engineered by VRM AI Technology to solve high-impact industry bottlenecks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-primary mb-3">Recruitment Intelligence</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>Workflow AI</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        A unified talent acquisition suite comprising <Link to="/products/workflow/xpress-screening">Xpress Screening</Link>, <Link to="/products/workflow/screensage">ScreenSage</Link> voice interviews, <Link to="/products/workflow/videosage">VideoSage</Link> behavioral analysis, and <Link to="/products/workflow/codesage">CodeSage</Link> proctored technical evaluations.
                                    </p>
                                </div>
                                <Link to="/products/workflow" className="vrm-btn-detail mt-3">
                                    Explore Workflow AI <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-success mb-3">Citizen Engagement</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>People Connect</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        AI-powered public grievance management and civic feedback orchestration connecting communities with municipal administrators via WhatsApp, voice, and GPS-verified resolution workflows.
                                    </p>
                                </div>
                                <Link to="/products/people-connect" className="vrm-btn-detail mt-3">
                                    Explore People Connect <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-info text-white mb-3">Language &amp; Speech</span>
                                    <h4 style={{ fontWeight: '700', color: '#0e1022' }}>AI Buddy</h4>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        An interactive AI language tutor and speaking coach providing personalized conversational feedback, accent refinement, and dynamic fluency exercises for learners worldwide.
                                    </p>
                                </div>
                                <Link to="/products/aibuddy" className="vrm-btn-detail mt-3">
                                    Explore AI Buddy <i className="fas fa-arrow-right"></i>
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
                                <p className="disc text-white-50">Common inquiries regarding our Madurai operations and AI product development services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionMadurai">
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
                        Ready to Build Next-Generation AI with Our Madurai Team?
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: '#666', fontSize: '16px', lineHeight: '1.8' }}>
                        Whether you are looking to deploy an enterprise GenAI platform or build custom machine learning pipelines, VRM AI Technology in Madurai delivers unmatched technical execution.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Start Your AI Journey Today <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AICompanyMadurai;
