import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import WOW from 'wow.js';
import heroBg from '../assets/images/workflow/main-image.jpeg';

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
                <title>Our AI Products | Suite Overview | VRM AI</title>
                <meta name="description" content="Explore VRM's next-generation AI products. We design products for workflow recruitment screening, speech coaching training, citizen sentiment, and chat routing." />
                <meta property="og:title" content="Our AI Products Suite Overview | VRM AI" />
                <meta property="og:description" content="Explore VRM's next-generation AI products. We design products for workflow recruitment screening, speech coaching training, citizen sentiment, and chat routing." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products" />
            </Helmet>
            <HeaderOne className="header-white-text header-transparent" />

            {/* --- Hero Section --- */}
            <section id="products-hero" className="vrm-hero rts-banner-area" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image */}
                <img
                    src={heroBg}
                    alt="Products Hero Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-start">
                            <div className="vrm-hero__content">
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">Enterprise AI Suite</span>
                                <h1 className="title wow fadeInUp text-white vrm-workflow-hero-title" data-wow-delay=".2s">
                                    Our Products
                                </h1>
                                <p className="disc wow fadeInUp mt-4 mb-5 vrm-workflow-hero-disc" data-wow-delay=".3s" style={{ color: '#555' }}>
                                    Discover our suite of next-generation intelligent platforms, automation systems, and speech training modules built on VRM's state-of-the-art AI technology.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-primary">
                                        Request Demo <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
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
                                <img src="/assets/images/workflow/xpress-screening/xpress-screening-image.png" alt="Xpress Screening Resume Analysis Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Xpress Screening">
                                    <h2 className="title">Xpress Screening</h2>
                                </div>
                                <p className="disc">
                                    Automate early-stage resume processing and candidate profiling. 
                                    Our matching intelligence extracts skills from candidate profiles, aligns qualifications with role requirements, and scores matches to help recruiting teams identify qualified candidates efficiently.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/xpress-screening">Learn More</Link>
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
                                <img src="/assets/images/workflow/screensage/screensage-image.png" alt="ScreenSage Interactive Interview Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="ScreenSage">
                                    <h2 className="title">ScreenSage</h2>
                                </div>
                                <p className="disc">
                                    Conduct structured, consistent preliminary assessments at scale. 
                                    Through automated interactive interviews, ScreenSage evaluates candidate skills based on defined role rubrics, providing teams with objective data to improve hiring pipeline flow.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/screensage">Learn More</Link>
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
                                <img src="/assets/images/workflow/videosage/videosage-image-3.png" alt="VideoSage Asynchronous Interview Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="VideoSage">
                                    <h2 className="title">VideoSage</h2>
                                </div>
                                <p className="disc">
                                    Coordinate and review asynchronous candidate interviews without scheduling friction. 
                                    VideoSage records candidate responses and generates summaries alongside grading profiles, enabling recruitment teams to collaborate on candidate reviews asynchronously.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/videosage">Learn More</Link>
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
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="CodeSage Code Execution Interface" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="CodeSage">
                                    <h2 className="title">CodeSage</h2>
                                </div>
                                <p className="disc">
                                    Assess candidate programming capabilities through a secure browser compiler. 
                                    CodeSage automates technical challenge grading and provides plagiarism alerts, allowing engineering managers to run secure, structured technical assessments.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/codesage">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 5: AI Buddy --- */}
            <div id="aibuddy" className="rts-about-area rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/aibuddy/aibuddy-image.png" alt="AI Buddy Employee Voice Training Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="AI Buddy">
                                    <h2 className="title">AI Buddy</h2>
                                </div>
                                <p className="disc">
                                    Customer-facing communication relies on consistent voice delivery and clear articulation. 
                                    AI Buddy conducts automated interactive speech assessments and scenario training, scoring pronunciation accuracy in real-time to optimize team readiness workflows.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/aibuddy">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 6: People Connect --- */}
            <div id="people-connect" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/people-connect/people-connect-image.png" alt="People Connect Citizen Engagement Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="People Connect">
                                    <h2 className="title">People Connect</h2>
                                </div>
                                <p className="disc">
                                    Constituency feedback is often bottlenecked by siloed intake channels and manual logging. 
                                    People Connect streamlines citizen engagement by orchestrating automated voice calling, official WhatsApp Business outreach, and real-time decision panels.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/people-connect">Learn More</Link>
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
                                <img src="/assets/images/exitinterview/exitinterview-image.png" alt="Exit Intelligence Operations Dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Exit Intelligence">
                                    <h2 className="title">Exit Intelligence</h2>
                                </div>
                                <p className="disc">
                                    Employee exit surveys suffer from low participation and superficial feedback. 
                                    Exit Intelligence automates the offboarding outreach using voice conversation campaigns, compiling structured sentiment logs to help HR leaders analyze attrition.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/exitinterview">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Product 8: Lead Connect --- */}
            <div id="whatsapp" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/whatsapp/whatsapp-hero-v2.png" alt="Lead Connect Business Automation System" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Lead Connect">
                                    <h2 className="title">Lead Connect</h2>
                                </div>
                                <p className="disc">
                                    Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, qualify prospects, schedule appointments, nurture relationships, and accelerate conversions — delivering seamless customer experiences 24×7 with zero manual effort.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/whatsapp">Learn More</Link>
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
