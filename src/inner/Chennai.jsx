import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function Chennai() {
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
            q: "Do you have an office in Chennai?",
            a: "No. VRM AI Technology has no physical office or staff in Chennai. We work with Chennai clients remotely from our Bengaluru headquarters and Madurai development center."
        },
        {
            q: "Can we see a demo?",
            a: "Yes, we run online demos over video call. You can schedule a session with our engineering team to review our platforms and live implementations."
        },
        {
            q: "Which cities do you serve?",
            a: "We serve businesses across India, remotely. Our development teams in Bengaluru and Madurai deliver solutions nationwide through structured online collaboration."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <SEO />

            <HeaderOne className="header-white-text" />

            {/* 1. Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Remote AI Engineering &bull; Serving Chennai Businesses Online
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    AI Software Services for Chennai Businesses
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    VRM AI Technology works with companies in Chennai remotely, delivering custom Generative AI solutions, intelligent voice agents, automated conversational chatbots, and enterprise software engineering. All delivery is managed online by our specialized teams in Bengaluru and Madurai.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Schedule a Demo <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img
                                    src="/assets/images/Solutions/AIIntegration.png"
                                    alt="AI Software Services for Chennai Businesses - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Remote Engagement & Industries Section */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Remote Delivery Model
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Serving Chennai Enterprises Remotely
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                VRM AI Technology partners with organizations across Chennai through a transparent, remote-first engagement framework. Headquartered in Bengaluru with our primary software development center in Madurai, Tamil Nadu, our engineers collaborate with businesses in Chennai entirely online.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                From tech hubs along OMR and Ambattur industrial corridors to enterprises in Guindy, we deploy intelligent software via scheduled video conferences, interactive screen-sharing sessions, and secure agile development pipelines.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Bengaluru Headquarters</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Corporate governance and technology strategy at Electronic City Phase I.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Madurai Dev Center</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Dedicated software development center at Poriyalar Nagar, Tiruppalai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4 vrm-products-summary-card" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Industries We Work With
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-headset text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>IT Services &amp; BPO:</strong> Conversational AI calling agents, automated ticket triage, and multilingual client support solutions.</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-industry text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>Manufacturing:</strong> Predictive maintenance pipelines, quality inspection systems, and supply chain intelligence.</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-heartbeat text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>Healthcare:</strong> Patient intake automation, clinical document summarization, and diagnostic workflow assistance.</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-graduation-cap text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>Education:</strong> Conversational language tutoring, automated evaluations, and digital learning platforms.</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-city text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>Real Estate:</strong> Spatial visualization tools, automated lead qualification, and property inquiry handling.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-rocket text-primary mt-1"></i>
                                        <span><strong style={{ color: '#0e1022' }}>Startups:</strong> Rapid Generative AI prototyping, domain-specific model tuning, and scalable cloud architectures.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. What We Build */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Capabilities &amp; Platforms</span>
                                <h2 className="title text-white">What We Build for Modern Enterprises</h2>
                                <p className="disc mt-3 text-white-50">
                                    Engineered by our Bengaluru and Madurai technical teams to integrate smoothly with your tech stack.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fa-microchip",
                                title: "Generative AI Development",
                                desc: "Custom retrieval-augmented generation (RAG) platforms, enterprise knowledge retrieval, and domain fine-tuned LLMs.",
                                link: "/generative-ai-development"
                            },
                            {
                                icon: "fa-phone-alt",
                                title: "AI Calling Agents",
                                desc: "Autonomous conversational voice bots that conduct outbound reminders, customer surveys, and inbound client intake.",
                                link: "/solutions/ai-calling-agent"
                            },
                            {
                                icon: "fa-comments",
                                title: "AI Chatbots",
                                desc: "Context-aware conversational agents supporting multilingual workflows with seamless human agent escalation.",
                                link: "/solutions/ai-chatbot-development"
                            },
                            {
                                icon: "fa-chart-line",
                                title: "Machine Learning Services",
                                desc: "Predictive analytics, operational anomaly detection, classification engines, and scalable data intelligence pipelines.",
                                link: "/solutions/machine-learning-services"
                            },
                            {
                                icon: "fa-plug",
                                title: "AI Integration Services",
                                desc: "Connecting modern AI capabilities to existing CRM, ERP, messaging systems, and enterprise cloud databases.",
                                link: "/solutions/ai-integration-services"
                            },
                            {
                                icon: "fa-code",
                                title: "Custom Software Engineering",
                                desc: "Full-cycle web platforms, secure API microservices, and bespoke software systems built for high-performance scale.",
                                link: "/solutions/ai-development-services"
                            }
                        ].map((srv, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx % 3 + 2) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                    <div className="thumbnail mb-3">
                                        <i className={`fas ${srv.icon} fa-3x`} style={{ color: '#00C6FF' }}></i>
                                    </div>
                                    <h5 className="title text-white mb-2">{srv.title}</h5>
                                    <p className="disc text-white-50 mb-4">{srv.desc}</p>
                                    <Link to={srv.link} className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Products Suite Grid */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 className="text-white text-center mb-4" style={{ fontWeight: '800' }}>
                                    Our Proprietary AI Product Suite
                                </h4>
                                <div className="row g-4 text-white">
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/workflow" style={{ color: '#00C6FF' }}>Workflow AI</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Automated resume evaluation, candidate screening, and recruitment intelligence platform.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/people-connect" style={{ color: '#00C6FF' }}>People Connect</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Citizen engagement, stakeholder feedback, and automated communication management.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/aibuddy" style={{ color: '#00C6FF' }}>AI Buddy</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Interactive language learning companion and conversational fluency training tool.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/exitinterview" style={{ color: '#00C6FF' }}>Exit Intelligence</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Objective offboarding interviews and attrition sentiment insights powered by AI.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/vrm-reality" style={{ color: '#00C6FF' }}>VRM Reality</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Immersive spatial property visualization and AI lead intelligence for real estate.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <h6 style={{ color: '#00C6FF', marginBottom: '8px' }}>
                                            <Link to="/products/bench-to-deploy" style={{ color: '#00C6FF' }}>Bench to Deploy</Link>
                                        </h6>
                                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Talent management platform for assessing and deploying enterprise engineers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. How We Work with Chennai Clients */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Structured Collaboration
                                </span>
                                <h2 className="title mt-2">How We Work With Chennai Clients</h2>
                                <p className="disc">A straightforward, remote-first delivery lifecycle designed for velocity and clarity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                step: "01",
                                title: "Online Discovery Call",
                                desc: "We schedule an initial video conference to evaluate your business goals, architectural environment, and technical requirements."
                            },
                            {
                                step: "02",
                                title: "Live Online Demo",
                                desc: "Our engineering team presents interactive product demonstrations and technical proof-of-concepts via screen share."
                            },
                            {
                                step: "03",
                                title: "Build & Delivery",
                                desc: "Engineers in our Bengaluru HQ and Madurai dev center construct the solution with sprint reviews and transparent milestones."
                            },
                            {
                                step: "04",
                                title: "Deployment & Support",
                                desc: "We manage cloud or on-premise deployment, team documentation, and provide ongoing SLA maintenance remotely."
                            }
                        ].map((proc, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 2) * 2}s`}>
                                <div className="p-4 rounded-4 h-100" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                    <span style={{ fontSize: '28px', fontWeight: '800', color: '#3B4ECC', display: 'block', marginBottom: '12px' }}>{proc.step}</span>
                                    <h5 style={{ fontWeight: '700', color: '#0e1022', marginBottom: '10px' }}>{proc.title}</h5>
                                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>{proc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. FAQs Section */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p className="disc">Honest answers about our service delivery model for Chennai businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionChennai">
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

            {/* 6. Our Offices & Internal Links */}
            <div className="vrm-full-width-section vrm-white-bg py-5">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-10">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <h4 style={{ fontWeight: '800', color: '#0e1022', marginBottom: '20px' }}>
                                    Our Physical Offices
                                </h4>
                                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
                                    VRM AI Technology operates exclusively from our corporate headquarters in Bengaluru and software development center in Madurai. We serve Chennai clients remotely.
                                </p>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="p-3 rounded bg-white" style={{ border: '1px solid #cbd5e1' }}>
                                            <h6 style={{ fontWeight: '700', color: '#1b277c', marginBottom: '8px' }}>
                                                Bengaluru (Headquarters)
                                            </h6>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                                VRM AI Technology (OPC) Pvt.Ltd.<br />
                                                GoodWorks Infinity Park, 21, 2nd Main Rd,<br />
                                                Electronic City Phase I,<br />
                                                Bengaluru, Karnataka 560100
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 rounded bg-white" style={{ border: '1px solid #cbd5e1' }}>
                                            <h6 style={{ fontWeight: '700', color: '#1b277c', marginBottom: '8px' }}>
                                                Madurai (Development Center)
                                            </h6>
                                            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                                VRM AI Technology (OPC) Pvt.Ltd.<br />
                                                Door No.209, 1st Floor, No.147, 5th St,<br />
                                                Poriyalar Nagar, Tiruppalai,<br />
                                                Madurai, Tamil Nadu 625014
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-top d-flex flex-wrap gap-3 align-items-center" style={{ fontSize: '14px', color: '#64748b' }}>
                                    <span style={{ fontWeight: '600', color: '#0e1022' }}>Explore Regional Services:</span>
                                    <Link to="/ai-company-bangalore" style={{ color: '#3B4ECC', textDecoration: 'underline' }}>Bengaluru</Link> &bull;
                                    <Link to="/ai-company-madurai" style={{ color: '#3B4ECC', textDecoration: 'underline' }}>Madurai</Link> &bull;
                                    <Link to="/ai-company-tamil-nadu" style={{ color: '#3B4ECC', textDecoration: 'underline' }}>Tamil Nadu</Link> &bull;
                                    <Link to="/solutions" style={{ color: '#3B4ECC', textDecoration: 'underline' }}>AI Services & Solutions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. CTA Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient py-5">
                <div className="container text-center py-4">
                    <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#fff' }}>
                        Ready to Build Enterprise AI for Your Business?
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Connect with our engineering teams in Bengaluru and Madurai for an interactive online demonstration tailored to your organization's workflows.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Schedule a Demo <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default Chennai;
