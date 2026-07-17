import React from 'react';
import { Link } from 'react-router-dom';
import './home-overview.css';

function HomeOverview() {
    return (
        <>
            {/* Solutions Overview Section */}
            {/* Solutions Overview CTA Section */}
            <section className="vrm-cta-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="vrm-cta-banner__content wow fadeInUp" data-wow-delay=".2s">
                                {/* <p className="pre-title">Solutions Overview</p> */}
                                <h2 className="title">VRM  AI Technology Is Trusted Source in Product And Support</h2>
                                <p className="desc">
                                    At VRM AI Technology, trust is the foundation of everything we build. We deliver innovative, AI-powered products designed to solve real-world business challenges with precision, scalability, and reliability. Our solutions are crafted with enterprise-grade architecture, ensuring performance, security, and seamless integration.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="vrm-hero__cards">
                    {[
                        {
                            id: 1,
                            icon: "assets/images/service/icon/01.svg",
                            title: "AI Consulting Services",
                            desc: "Empowering your business with strategic AI guidance. We help you identify opportunities, evaluate feasibility, and build a clear roadmap to integrate artificial intelligence into your business model.",
                            link: "/solutions/ai-consulting-services",
                            bgImage: "assets/images/about/1.jpeg"
                        },
                        {
                            id: 2,
                            icon: "assets/images/service/icon/02.svg",
                            title: "AI Development Services",
                            desc: "Building custom, high-performance AI solutions. From intelligent chatbots to machine learning models, we transform your complex business requirements into scalable, secure, and production-ready applications.",
                            link: "/solutions/ai-development-services",
                            bgImage: "assets/images/about/2.jpeg"
                        },
                        {
                            id: 3,
                            icon: "assets/images/service/icon/04.svg",
                            title: "AI Chatbot Development",
                            desc: "Developing intelligent, conversational AI chatbots. We design custom NLP solutions, automate customer support, and deploy smart virtual assistants to enhance engagement across all channels.",
                            link: "/solutions/ai-chatbot-development",
                            bgImage: "assets/images/about/04.jpg"
                        }
                    ].map((product) => (
                        <div key={product.id} className="vrm-product-card wow fadeInUp" data-wow-delay=".3s">
                            <div
                                className="vrm-product-card-bg"
                                style={{ backgroundImage: `url(${product.bgImage})` }}
                            ></div>
                            <div className="vrm-product-card__content">
                                <div className="vrm-hero__icon">
                                    <img src={product.icon} alt={product.title} />
                                </div>
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                                <Link className="vrm-btn-detail" to={product.link}>
                                    Know More<i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products Highlight Section */}
            <section className="vrm-products-highlight">
                <div className="container">
                    {/* Workflow Section */}
                    <div className="vrm-overview__section-header wow fadeInUp" data-wow-delay=".2s" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="vrm-overview__eyebrow" style={{ color: '#3B4ECC', fontWeight: '700', textAlign: 'center', margin: '0 auto', display: 'block' }}>Products Highlight</p>
                        <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>Enterprise AI Solutions Built on the WorkflowAI Platform</h2>
                    </div>
                    <div className="vrm-hero__cards--two-columns" style={{ marginBottom: '80px' }}>
                        {[
                            {
                                id: 1,
                                icon: "assets/images/service/icon/04.svg",
                                category: "Resume Intelligence",
                                title: "Xpress Screening",
                                desc: "AI-powered resume screening that identifies, ranks, and matches the best candidates with speed and precision.",
                                link: "/products/workflow/xpress-screening",
                                bgImage: "assets/images/workflow/xpress-screening/xpress-screening-image.png"
                            },
                            {
                                id: 2,
                                icon: "assets/images/service/icon/01.svg",
                                category: "Smart Assessment",
                                title: "ScreenSage",
                                desc: "Automated AI voice interviews that evaluate candidates and deliver structured hiring insights in real time.",
                                link: "/products/workflow/screensage",
                                bgImage: "assets/images/workflow/screensage/screensage-image.png"
                            },
                            {
                                id: 3,
                                icon: "assets/images/service/icon/02.svg",
                                category: "Video Intelligence",
                                title: "VideoSage",
                                desc: "AI-driven video interviews that assess communication, confidence, and role readiness through intelligent analysis.",
                                link: "/products/workflow/videosage",
                                bgImage: "assets/images/workflow/videosage/videosage-image-3.png"
                            },
                            {
                                id: 4,
                                icon: "assets/images/service/icon/03.svg",
                                category: "Technical Evaluation",
                                title: "CodeSage",
                                desc: "AI-powered coding assessments with automated technical interviews, proctoring, and intelligent candidate evaluation in one unified platform.",
                                link: "/products/workflow/codesage",
                                bgImage: "assets/images/workflow/codesage/codesage-image.png"
                            }
                        ].map((product) => (
                            <div key={product.id} className="vrm-product-card wow fadeInUp" data-wow-delay=".3s">
                                <div
                                    className="vrm-product-card-bg"
                                    style={{ backgroundImage: `url(${product.bgImage})` }}
                                ></div>
                                <div className="vrm-product-card__content">
                                    <div className="vrm-hero__icon">
                                        <img src={product.icon} alt={product.title} />
                                    </div>
                                    <span style={{ 
                                        fontSize: '13px', 
                                        fontWeight: '700', 
                                        textTransform: 'uppercase', 
                                        color: '#3B4ECC', 
                                        letterSpacing: '1px', 
                                        display: 'block', 
                                        marginBottom: '8px' 
                                    }}>
                                        {product.category}
                                    </span>
                                    <h3>{product.title}</h3>
                                    <p>{product.desc}</p>
                                    <Link className="vrm-btn-detail" to={product.link}>
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Standalone Products Section */}
                    <div className="vrm-overview__section-header wow fadeInUp" data-wow-delay=".2s" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="vrm-overview__eyebrow" style={{ color: '#3B4ECC', fontWeight: '700', textAlign: 'center', margin: '0 auto', display: 'block' }}>Dedicated Engines</p>
                        <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>Specialized AI Solutions for Workforce, Learning & Customer Engagement</h2>
                    </div>
                    <div className="vrm-hero__cards--two-columns">
                        {[
                            {
                                id: 5,
                                icon: "assets/images/service/icon/04.svg",
                                category: "Interactive Voice Training",
                                title: "AI Buddy",
                                desc: "An intelligent AI language coach that helps users learn, practice, and communicate naturally in multiple languages with personalized AI coaching.",
                                link: "/products/aibuddy",
                                bgImage: "assets/images/aibuddy/aibuddy-image.png"
                            },
                            {
                                id: 6,
                                icon: "assets/images/service/icon/02.svg",
                                category: "Citizen Engagement",
                                title: "People Connect (Global)",
                                desc: "AI-powered citizen engagement platform connecting governments and communities through intelligent digital services.",
                                link: "/products/people-connect",
                                bgImage: "assets/images/people-connect/people-connect-image.png"
                            },
                            {
                                id: 7,
                                icon: "assets/images/service/icon/01.svg",
                                category: "HR Offboarding",
                                title: "Exit Intelligence",
                                desc: "Transform employee exits into actionable workforce insights with AI-powered interviews and sentiment analysis.",
                                link: "/products/exitinterview",
                                bgImage: "assets/images/exitinterview/exitinterview-image.png"
                            },
                            {
                                id: 8,
                                icon: "assets/images/service/icon/03.svg",
                                category: "Lead Engagement",
                                title: "Lead Connect",
                                desc: "Autonomous AI agents that manage WhatsApp campaigns, qualify leads, engage customers, and drive conversions 24/7.",
                                link: "/products/whatsapp",
                                bgImage: "assets/images/whatsapp/whatsapp-hero-v2.png"
                            },
                            {
                                id: 9,
                                icon: "assets/images/service/icon/02.svg",
                                category: "Visual Intelligence",
                                title: "Visionix AI",
                                desc: "Automate visual authentication, security tracking, and attendance management with Visionix AI face recognition engine.",
                                link: "/products/visionix",
                                bgImage: "assets/images/visionix/visionix-image.png"
                            }
                        ].map((product) => (
                            <div key={product.id} className="vrm-product-card wow fadeInUp" data-wow-delay=".3s">
                                <div
                                    className="vrm-product-card-bg"
                                    style={{ backgroundImage: `url(${product.bgImage})` }}
                                ></div>
                                <div className="vrm-product-card__content">
                                    <div className="vrm-hero__icon">
                                        <img src={product.icon} alt={product.title} />
                                    </div>
                                    <span style={{ 
                                        fontSize: '13px', 
                                        fontWeight: '700', 
                                        textTransform: 'uppercase', 
                                        color: '#3B4ECC', 
                                        letterSpacing: '1px', 
                                        display: 'block', 
                                        marginBottom: '8px' 
                                    }}>
                                        {product.category}
                                    </span>
                                    <h3>{product.title}</h3>
                                    <p>{product.desc}</p>
                                    <Link className="vrm-btn-detail" to={product.link}>
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeOverview;
