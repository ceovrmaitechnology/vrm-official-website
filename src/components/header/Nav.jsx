import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
    const [activeSubMenu, setActiveSubMenu] = useState('workflow');

    // Default content for panels
    const defaultSolutionsContent = {
        title: "AI Development",
        description: "Transform your business with custom AI solutions tailored to your specific needs.",
        link: "/solutions/ai-development-services",
        linkText: "Explore Service",
        image: "/assets/images/service/desk.jpg"
    };

    const defaultWorkflowContent = {
        title: "Workflow.AI Modules",
        description: "Streamline your recruitment process with our advanced AI-driven screening and interviewing tools.",
        link: "/products",
        linkText: "Explore Modules",
        image: "/assets/images/service/desk.jpg"
    };

    const [featuredContent, setFeaturedContent] = useState(defaultSolutionsContent);

    // Data for dynamic hover content
    const featuredData = {
        // Solutions
        'ai-consulting': { title: "AI Consulting", description: "Strategic guidance to leverage AI for business growth.", link: "/solutions/ai-consulting-services", linkText: "Learn More", image: "/assets/images/service/02.jpg" },
        'ai-integration': { title: "AI Integration", description: "Seamlessly integrate AI into your existing workflows.", link: "/solutions/ai-integration-services", linkText: "Learn More", image: "/assets/images/service/03.jpg" },
        'ai-development': { title: "AI Development", description: "Custom AI solutions built for your unique challenges.", link: "/solutions/ai-development-services", linkText: "Learn More", image: "/assets/images/service/04.jpg" },
        'chatbot': { title: "AI Chatbots", description: "Intelligent chatbots to enhance customer engagement.", link: "/solutions/ai-chatbot-development", linkText: "Learn More", image: "/assets/images/service/05.jpg" },
        'calling-agent': { title: "AI Calling Agent", description: "Automated calling systems for efficient communication.", link: "/solutions/ai-calling-agent", linkText: "Learn More", image: "/assets/images/service/06.jpg" },
        'ml-services': { title: "Machine Learning", description: "Advanced ML models to drive data-backed decisions.", link: "/solutions/machine-learning-services", linkText: "Learn More", image: "/assets/images/service/07.jpg" },

        // Products - Workflow.AI Modules
        'xpress-screening': { title: "Xpress Screening", description: "AI-powered resume screening that analyzes, matches, and ranks candidates to accelerate hiring and improve recruitment accuracy.", link: "/products/workflow/xpress-screening", linkText: "View Product", image: "/assets/images/workflow/xpress-screening/xpress-screening-image.png" },
        'screensage': { title: "ScreenSage", description: "AI-powered voice interviews that automate candidate screening and deliver structured hiring insights through intelligent conversations.", link: "/products/workflow/screensage", linkText: "View Product", image: "/assets/images/workflow/screensage/screensage-image.png" },
        'videosage': { title: "VideoSage", description: "AI-powered video interviews that evaluate communication, technical expertise, and behavioral skills for smarter hiring decisions.", link: "/products/workflow/videosage", linkText: "Book Demo", image: "/assets/images/workflow/videosage/videosage-image-3.png" },
        'codesage': { title: "CodeSage", description: "AI-powered coding assessments and technical interviews with intelligent proctoring and comprehensive candidate evaluation.", link: "/products/workflow/codesage", linkText: "View Product", image: "/assets/images/workflow/codesage/codesage-image.png" },

        // Products - AI Products
        'workflow': { title: "Workflow.AI", description: "An enterprise AI platform that automates business workflows, streamlines operations, and orchestrates intelligent processes across the organization.", link: "/products/workflow", linkText: "View Product", image: "/assets/images/service/desk.jpg" },
        'aibuddy': { 
            title: "AI Buddy", 
            description: "AI-powered language learning platform with personalized coaching, interactive voice practice, and multilingual communication training.", 
            link: "/products/aibuddy", 
            linkText: "View Product", 
            image: "/assets/images/aibuddy/aibuddy-image.png",
            features: [
                "AI-Powered Language Coaching",
                "Multi-Language Conversation Practice",
                "Real-Time Pronunciation Feedback",
                "Personalized Learning Journeys"
            ]
        },
        'people-connect': { 
            title: "People Connect (Global)", 
            description: "AI-powered citizen engagement platform that modernizes public services through intelligent communication and digital governance.", 
            link: "/products/people-connect", 
            linkText: "View Product", 
            image: "/assets/images/people-connect/people-connect-image.png",
            features: [
                "Citizen engagement portal",
                "Real-time grievance tracking",
                "Public sentiment analysis",
                "Automated communication"
            ]
        },
        'exitinterview': { 
            title: "Exit Intelligence", 
            description: "AI-powered workforce intelligence that transforms employee feedback into actionable retention and organizational insights.", 
            link: "/products/exitinterview", 
            linkText: "View Product", 
            image: "/assets/images/exitinterview/exitinterview-image.png",
            features: [
                "AI-Powered Exit Interviews",
                "Employee Sentiment Analysis",
                "Attrition & Workforce Insights",
                "Executive HR Dashboards"
            ]
        },
        'whatsapp': { 
            title: "Lead Connect", 
            description: "AI-powered customer engagement platform that automates conversations, lead nurturing, campaigns, and sales workflows 24/7.", 
            link: "/products/whatsapp", 
            linkText: "View Product", 
            image: "/assets/images/whatsapp/whatsapp-hero-v2.png",
            features: [
                "AI Customer Conversations",
                "Smart Lead Qualification",
                "Campaign Automation",
                "CRM & Workflow Integration"
            ]
        },
        'visionix': { 
            title: "Visionix AI", 
            description: "Automate biometric security, liveness verification, and employee check-ins.", 
            link: "/products/visionix", 
            linkText: "View Product", 
            image: "/assets/images/visionix/visionix-image.png",
            features: [
                "Real-time face recognition",
                "Biometric gate integration",
                "Liveness detection bot",
                "Secure visual logging panels"
            ]
        },
    };

    const handleLinkHover = (key) => {
        if (featuredData[key]) {
            setFeaturedContent(featuredData[key]);
        }
    };

    const handleTabHover = (menuName) => {
        setActiveSubMenu(menuName);
        if (menuName === 'workflow') {
            setFeaturedContent(defaultWorkflowContent);
        }
    };

    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                    <li><Link className="nav-link" to={'/'}>Home</Link></li>

                    <li className="has-droupdown" onMouseEnter={() => setFeaturedContent(defaultSolutionsContent)}>
                        <Link className="nav-link" to={'#'} onClick={(e) => e.preventDefault()}>Solutions</Link>
                        <div className="mega-menu-container solutions-mega-menu">
                            <div className="left-panel">
                                <div className="service-category">
                                    <span className="category-title">AI Consulting & Strategy</span>
                                    <ul>
                                        <li><Link to={'/solutions/ai-consulting-services'} onMouseEnter={() => handleLinkHover('ai-consulting')}>AI Consulting Services</Link></li>
                                        <li><Link to={'/solutions/ai-integration-services'} onMouseEnter={() => handleLinkHover('ai-integration')}>AI Integration Services</Link></li>
                                    </ul>
                                </div>
                                <div className="service-category">
                                    <span className="category-title">AI Development</span>
                                    <ul>
                                        <li><Link to={'/solutions/ai-development-services'} onMouseEnter={() => handleLinkHover('ai-development')}>AI Development Services</Link></li>
                                        <li><Link to={'/solutions/ai-chatbot-development'} onMouseEnter={() => handleLinkHover('chatbot')}>AI Chatbot Development</Link></li>
                                    </ul>
                                </div>
                                <div className="service-category">
                                    <span className="category-title">AI & Data</span>
                                    <ul>
                                        <li><Link to={'/solutions/ai-calling-agent'} onMouseEnter={() => handleLinkHover('calling-agent')}>AI Calling Agent</Link></li>
                                        <li><Link to={'/solutions/machine-learning-services'} onMouseEnter={() => handleLinkHover('ml-services')}>Machine Learning Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-panel-highlight" style={{
                                backgroundImage: `url(${featuredContent.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '0 12px 12px 0',
                                padding: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                {/* Overlay for readability */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                                    zIndex: 1
                                }}></div>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h4 style={{ color: '#fff' }}>{featuredContent.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>{featuredContent.description}</p>
                                    <Link to={featuredContent.link} className="highlight-btn" style={{ background: '#fff', color: '#333' }}>{featuredContent.linkText}</Link>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="has-droupdown" onMouseEnter={() => handleTabHover('workflow')}>
                        <Link className="nav-link" to={'/products'}>Products</Link>
                        <div className="mega-menu-container products-refactored-menu" style={{ width: '900px', left: '-200px' }}>
                            <div className="platforms-panel">
                                <ul>
                                    <li>
                                        <Link
                                            to="/products/workflow"
                                            className={`platform-btn ${activeSubMenu === 'workflow' ? 'active' : ''}`}
                                            onMouseEnter={() => handleTabHover('workflow')}
                                        >
                                            Workflow.AI <i className="far fa-chevron-right"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products/aibuddy"
                                            className={`platform-btn ${activeSubMenu === 'aibuddy' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setActiveSubMenu('aibuddy');
                                                handleLinkHover('aibuddy');
                                            }}
                                        >
                                            AI Buddy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products/people-connect"
                                            className={`platform-btn ${activeSubMenu === 'people-connect' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setActiveSubMenu('people-connect');
                                                handleLinkHover('people-connect');
                                            }}
                                        >
                                            People Connect (Global)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products/exitinterview"
                                            className={`platform-btn ${activeSubMenu === 'exitinterview' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setActiveSubMenu('exitinterview');
                                                handleLinkHover('exitinterview');
                                            }}
                                        >
                                            Exit Intelligence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products/whatsapp"
                                            className={`platform-btn ${activeSubMenu === 'whatsapp' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setActiveSubMenu('whatsapp');
                                                handleLinkHover('whatsapp');
                                            }}
                                        >
                                            Lead Connect
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products/visionix"
                                            className={`platform-btn ${activeSubMenu === 'visionix' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setActiveSubMenu('visionix');
                                                handleLinkHover('visionix');
                                            }}
                                        >
                                            Visionix AI
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub-products-panel">
                                {activeSubMenu === 'workflow' ? (
                                    <div className="fade-in">
                                        <h5 style={{
                                            marginBottom: '10px',
                                            color: '#111D5E',
                                            fontSize: '18px',
                                            fontWeight: '800',
                                            paddingLeft: '10px'
                                        }}>Workflow.AI Modules</h5>
                                        <ul style={{ paddingLeft: '0' }}>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/xpress-screening'}
                                                    onMouseEnter={() => handleLinkHover('xpress-screening')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-file-search" style={{ width: '20px', color: '#3B4ECC' }}></i> Xpress Screening
                                                </Link>
                                            </li>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/screensage'}
                                                    onMouseEnter={() => handleLinkHover('screensage')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-desktop" style={{ width: '20px', color: '#3B4ECC' }}></i> ScreenSage
                                                </Link>
                                            </li>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/videosage'}
                                                    onMouseEnter={() => handleLinkHover('videosage')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-video" style={{ width: '20px', color: '#3B4ECC' }}></i> VideoSage
                                                </Link>
                                            </li>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/codesage'}
                                                    onMouseEnter={() => handleLinkHover('codesage')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-code" style={{ width: '20px', color: '#3B4ECC' }}></i> CodeSage
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="fade-in" style={{ padding: '0 10px' }}>
                                        <h5 style={{
                                            marginBottom: '8px',
                                            color: '#111D5E',
                                            fontSize: '18px',
                                            fontWeight: '800'
                                        }}>{featuredContent.title}</h5>
                                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginBottom: '15px' }}>
                                            {featuredContent.description}
                                        </p>
                                        {featuredContent.features && (
                                            <ul style={{ paddingLeft: '0', listStyle: 'none', margin: '0' }}>
                                                {featuredContent.features.map((feature, idx) => (
                                                    <li key={idx} style={{ 
                                                        fontSize: '13.5px', 
                                                        color: '#444', 
                                                        marginBottom: '8px',
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        <i className="far fa-check-circle" style={{ 
                                                            color: '#3B4ECC', 
                                                            marginRight: '8px',
                                                            fontSize: '14px' 
                                                        }}></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="featured-product-panel">
                                <div className="content-relative fade-in" style={{
                                    backgroundImage: `url(${featuredContent.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    padding: '30px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    {/* Overlay for readability */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                        zIndex: 1
                                    }}></div>
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>{featuredContent.title}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>{featuredContent.description}</p>
                                        <Link to={featuredContent.link} className="explore-btn" style={{ background: '#fff', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: '500' }}>{featuredContent.linkText}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li><Link className="nav-link" to={'/careers'}>Careers</Link></li>
                    <li><Link className="nav-link" to={'/about-us'}>About Us</Link></li>

                </ul>
            </nav>
        </div>
    )
}
