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
        link: "/products/workflow",
        linkText: "Explore Modules",
        image: "/assets/images/service/desk.jpg"
    };

    const defaultGrowthFlowContent = {
        title: "GrowthFlowAI Suite",
        description: "Accelerate your business growth with intelligent acquisition and organizational strategies.",
        link: "/products/growthflowai",
        linkText: "Explore Suite",
        image: "/assets/images/business-goal/01.jpg"
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

        // Products - Workflow.AI
        'screensage': { title: "ScreenSage", description: "Automated candidate screening to save time.", link: "/products/workflow/screensage", linkText: "View Product", image: "/assets/images/workflow/screensage/screensage-image.png" },
        'videosage': { title: "VideoSage", description: "AI video interviews for deeper candidate insights.", link: "/products/workflow/videosage", linkText: "Book Demo", image: "/assets/images/workflow/videosage/videosage-image.png" },
        'codesage': { title: "CodeSage", description: "Intelligent coding assessment platform.", link: "/products/workflow/codesage", linkText: "View Product", image: "/assets/images/workflow/codesage/codesage-image.png" },

        // Products - GrowthFlowAI
        'business-acquisition': { title: "Business Acquisition", description: "Strategies to acquire and grow businesses.", link: "/business-acquisition-form", linkText: "Start Now", image: "/assets/images/business-goal/01.jpg" },
        'client-acquisition': { title: "Client Acquisition", description: "Tools to find and convert high-value clients.", link: "/client-acquisition-form", linkText: "Get Clients", image: "/assets/images/business-goal/02.jpg" },
        'job-applicant': { title: "Job Applicant", description: "Streamline your application process.", link: "/job-applicant-form", linkText: "Apply Now", image: "/assets/images/business-goal/03.jpg" },
        'organization': { title: "Organization", description: "Optimize your organizational structure.", link: "/organization-form", linkText: "Optimize", image: "/assets/images/business-goal/04.jpg" },
    };

    const handleLinkHover = (key) => {
        if (featuredData[key]) {
            setFeaturedContent(featuredData[key]);
        }
    };



    // Handler to switch content on hover (for Products tabs)
    const handleTabHover = (menuName) => {
        setActiveSubMenu(menuName);
        // Also reset featured content to that tab's default
        if (menuName === 'workflow') setFeaturedContent(defaultWorkflowContent);
        if (menuName === 'growthflow') setFeaturedContent(defaultGrowthFlowContent);
    };

    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
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
                        <Link className="nav-link" to={'#'} onClick={(e) => e.preventDefault()}>Products</Link>
                        <div className="mega-menu-container products-refactored-menu">
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
                                            to="/products/growthflowai"
                                            className={`platform-btn ${activeSubMenu === 'growthflow' ? 'active' : ''}`}
                                            onMouseEnter={() => handleTabHover('growthflow')}
                                        >
                                            GrowthFlowAI <i className="far fa-chevron-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub-products-panel">
                                {activeSubMenu === 'workflow' && (
                                    <div className="fade-in">
                                        <h5 style={{
                                            marginBottom: '10px',
                                            color: '#111D5E',
                                            fontSize: '18px',
                                            fontWeight: '800',
                                            paddingLeft: '10px'
                                        }}>Workflow.AI</h5>
                                        <ul style={{ paddingLeft: '0' }}>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/screensage'}
                                                    onMouseEnter={() => handleLinkHover('screensage')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-video" style={{ width: '20px', color: '#3B4ECC' }}></i> ScreenSage
                                                </Link>
                                            </li>
                                            <li style={{ marginBottom: '5px' }}>
                                                <Link
                                                    to={'/products/workflow/videosage'}
                                                    onMouseEnter={() => handleLinkHover('videosage')}
                                                    style={{ paddingLeft: '20px', fontSize: '15px' }}
                                                >
                                                    <i className="far fa-camera-movie" style={{ width: '20px', color: '#3B4ECC' }}></i> VideoSage
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
                                )}
                                {activeSubMenu === 'growthflow' && (
                                    <div className="fade-in">
                                        <h5>GrowthFlowAI Suite</h5>
                                        <ul>
                                            <li><Link to={'/business-acquisition-form'} onMouseEnter={() => handleLinkHover('business-acquisition')}><i className="far fa-briefcase"></i> Business Acquisition</Link></li>
                                            <li><Link to={'/client-acquisition-form'} onMouseEnter={() => handleLinkHover('client-acquisition')}><i className="far fa-user-chart"></i> Client Acquisition</Link></li>
                                            <li><Link to={'/job-applicant-form'} onMouseEnter={() => handleLinkHover('job-applicant')}><i className="far fa-file-user"></i> Job Applicant</Link></li>
                                            <li><Link to={'/organization-form'} onMouseEnter={() => handleLinkHover('organization')}><i className="far fa-sitemap"></i> Organization</Link></li>
                                        </ul>
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
                                        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>{featuredContent.description}</p>
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


