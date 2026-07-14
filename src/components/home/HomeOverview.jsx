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
                        <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>Intelligent Products Powered by WorkflowAI.in</h2>
                    </div>
                    <div className="vrm-hero__cards--two-columns" style={{ marginBottom: '80px' }}>
                        {[
                            {
                                id: 1,
                                icon: "assets/images/service/icon/04.svg",
                                category: "Resume Intelligence",
                                title: "Xpress Screening",
                                desc: "AI-powered resume parsing and candidate matching that evaluates, structures, and ranks talent at scale.",
                                link: "/products/workflow/xpress-screening",
                                bgImage: "assets/images/workflow/xpress-screening/xpress-screening-image.png"
                            },
                            {
                                id: 2,
                                icon: "assets/images/service/icon/01.svg",
                                category: "Smart Assessment",
                                title: "ScreenSage",
                                desc: "Smart screen monitoring & insights to keep distributed teams aligned, secure, and compliant.",
                                link: "/products/workflow/screensage",
                                bgImage: "assets/images/workflow/screensage/screensage-image.png"
                            },
                            {
                                id: 3,
                                icon: "assets/images/service/icon/02.svg",
                                category: "Video Intelligence",
                                title: "VideoSage",
                                desc: "AI-powered video intelligence for analysis, summarization, and rapid content search.",
                                link: "/products/workflow/videosage",
                                bgImage: "assets/images/workflow/videosage/videosage-image-3.png"
                            },
                            {
                                id: 4,
                                icon: "assets/images/service/icon/03.svg",
                                category: "Technical Evaluation",
                                title: "CodeSage",
                                desc: "Intelligent code analysis & automation to accelerate delivery and improve software quality.",
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
                        <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>Specialized AI Solutions for Enterprise Outreach & Training</h2>
                    </div>
                    <div className="vrm-hero__cards--two-columns">
                        {[
                            {
                                id: 5,
                                icon: "assets/images/service/icon/04.svg",
                                category: "Interactive Voice Training",
                                title: "AI Buddy",
                                desc: "AI-powered voice coaching, pronunciation analysis, and multilingual conversation practice.",
                                link: "/products/aibuddy",
                                bgImage: "assets/images/aibuddy/aibuddy-image.png"
                            },
                            {
                                id: 6,
                                icon: "assets/images/service/icon/02.svg",
                                category: "Citizen Engagement",
                                title: "People Connect",
                                desc: "AI-powered citizen engagement, issue verification, and decision intelligence platform.",
                                link: "/products/people-connect",
                                bgImage: "assets/images/people-connect/people-connect-image.png"
                            },
                            {
                                id: 7,
                                icon: "assets/images/service/icon/01.svg",
                                category: "HR Offboarding",
                                title: "Exit Intelligence",
                                desc: "AI-powered employee exit interview automation, retry engine, and HR insights platform.",
                                link: "/products/exitinterview",
                                bgImage: "assets/images/exitinterview/exitinterview-image.png"
                            },
                            {
                                id: 8,
                                icon: "assets/images/service/icon/03.svg",
                                category: "Lead Engagement",
                                title: "Lead Connect",
                                desc: "Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, and qualify prospects 24x7.",
                                link: "/products/whatsapp",
                                bgImage: "assets/images/whatsapp/whatsapp-hero-v2.png"
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
