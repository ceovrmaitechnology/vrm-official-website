import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import WOW from 'wow.js';
import heroBg from '../assets/images/workflow/our-products-hero-indian.png';

function ProductsOverview() {
    useEffect(() => {
        new WOW({
            live: false
        }).init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="products-overview-page workflow-page basic-font-family">
            <Helmet>
                <title>AI Products Suite | VRM AI Technology</title>
                <meta name="description" content="Explore VRM AI Technology's intelligent products: Workflow AI recruitment suite, AI Buddy, People Connect, Visionix AI, and VRM Reality." />
                <meta property="og:title" content="AI Products Suite | VRM AI Technology" />
                <meta property="og:description" content="Explore VRM AI Technology's intelligent products: Workflow AI recruitment suite, AI Buddy, People Connect, Visionix AI, and VRM Reality." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Products Suite | VRM AI Technology" />
                <meta name="twitter:description" content="Explore VRM AI Technology's intelligent products: Workflow AI recruitment suite, AI Buddy, People Connect, Visionix AI, and VRM Reality." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.vrmaitechnology.com/products" }
                        ]
                    })}
                </script>
            </Helmet>
            <HeaderOne />

            {/* --- Hero Section --- */}
            <section id="products-hero" className="vrm-hero rts-banner-area" style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #2b2b2bff 0%, #11142c 100%)',
                padding: '120px 0 80px'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 text-start">
                            <div className="vrm-hero__content">
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">Enterprise AI Suite</span>
                                <h1 className="title wow fadeInUp text-white vrm-workflow-hero-title" data-wow-delay=".2s">
                                    AI Software Products &amp; Platforms
                                </h1>
                                <p className="disc wow fadeInUp mt-4 mb-5 vrm-workflow-hero-disc" data-wow-delay=".3s" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Discover our suite of next-generation intelligent platforms, automation systems, and speech training modules built on VRM's state-of-the-art AI technology.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Request Demo <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-self-center justify-content-lg-end justify-content-center">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src={heroBg}
                                    alt="Our Products"
                                loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Product 1: Xpress Screening --- */}
            <div id="xpress-screening" className="rts-about-area rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/xpress-screening/xpress-screening-image.png" alt="Xpress Screening Resume Analysis Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Xpress Screening">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Workflow AI</span>
                                    <h2 className="title">Xpress Screening</h2>
                                </div>
                                <p className="disc">
                                    AI-powered resume screening that analyzes, matches, and ranks candidates to accelerate hiring and improve recruitment accuracy.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/workflow/xpress-screening">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 2: ScreenSage --- */}
            <div id="screensage" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/screensage/screensage-image.png" alt="ScreenSage Interactive Interview Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="ScreenSage">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Workflow AI</span>
                                    <h2 className="title">ScreenSage</h2>
                                </div>
                                <p className="disc">
                                    AI-powered voice interviews that automate candidate screening and deliver structured hiring insights through intelligent conversations.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/workflow/screensage">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 3: VideoSage --- */}
            <div id="videosage" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/videosage/videosage-image-3.png" alt="VideoSage Asynchronous Interview Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="VideoSage">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Workflow AI</span>
                                    <h2 className="title">VideoSage</h2>
                                </div>
                                <p className="disc">
                                    AI-powered video interviews that evaluate communication, technical expertise, and behavioral skills for smarter hiring decisions.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/workflow/videosage">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 4: CodeSage --- */}
            <div id="codesage" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="CodeSage Code Execution Interface" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="CodeSage">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Workflow AI</span>
                                    <h2 className="title">CodeSage</h2>
                                </div>
                                <p className="disc">
                                    AI-powered coding assessments and technical interviews with intelligent proctoring and comprehensive candidate evaluation.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/workflow/codesage">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 5: People Connect --- */}
            <div id="people-connect" className="rts-about-area rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/people-connect/people-connect-image.png" alt="People Connect Citizen Engagement Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="People Connect">
                                    <h2 className="title">People Connect</h2>
                                </div>
                                <p className="disc">
                                    AI-powered citizen engagement platform that modernizes public services through intelligent communication and digital governance.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/people-connect">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 6: AI Buddy --- */}
            <div id="aibuddy" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/aibuddy/aibuddy-image.png" alt="AI Buddy Employee Voice Training Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="AI Buddy">
                                    <h2 className="title">AI Buddy</h2>
                                </div>
                                <p className="disc">
                                    AI-powered language learning platform with personalized coaching, interactive voice practice, and multilingual communication training.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/aibuddy">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 7: Exit Intelligence --- */}
            <div id="exitinterview" className="rts-about-area rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/exitinterview/exitinterview-image.png" alt="Exit Intelligence Operations Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Exit Intelligence">
                                    <h2 className="title">Exit Intelligence</h2>
                                </div>
                                <p className="disc">
                                    AI-powered workforce intelligence that transforms employee feedback into actionable retention and organizational insights.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/exitinterview">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 8: Visionix AI --- */}
            <div id="visionix" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/visionix/visionix-image.png" alt="Visionix AI Face Recognition Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Visionix AI">
                                    <h2 className="title">Visionix AI</h2>
                                </div>
                                <p className="disc">
                                    Visionix AI is a high-speed, secure facial recognition and visual authentication bot. It automates security checks, identity verification, liveness tracking, and employee check-ins/check-outs, giving organizations robust visual logs and high accuracy.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/visionix">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 9: VRM Reality --- */}
            <div id="vrm-real-estate" className="rts-about-area rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/vrm-real-estate/vrm-real-estate-hero.png" alt="VRM Reality Automation Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="VRM Reality">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Real Estate Offering</span>
                                    <h2 className="title">VRM Reality</h2>
                                </div>
                                <p className="disc">
                                    VRM Reality is a premium real estate offering from VRM AI Technology, supported by AI-powered automation.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/vrm-real-estate">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 10: Bench to Deploy (B2D) --- */}
            <div id="bench-to-deploy" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="Bench to Deploy Dashboard" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Bench to Deploy">
                                    <span className="pre-title" style={{ color: '#3B4ECC', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>Product</span>
                                    <h2 className="title">Bench to Deploy (B2D)</h2>
                                </div>
                                <p className="disc">
                                    Bench to Deploy (B2D), a product by VRM AI Technology.
                                </p>
                                <Link className="vrm-btn-product-blue" to="/products/bench-to-deploy">
                                    Learn More <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default ProductsOverview;
