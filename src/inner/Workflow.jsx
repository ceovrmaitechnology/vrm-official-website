import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import WOW from 'wow.js';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import WorkflowTestimonials from "../components/testimonials/WorkflowTestimonials";
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/workflow/main-image.jpeg';

function Workflow() {
    useEffect(() => {
        new WOW({
            live: false
        }).init();
    }, []);

    return (
        <div className="workflow-page">
            <Helmet>
                <title>WorkflowAI | Recruitment Intelligence Suite | VRM AI</title>
                <meta name="description" content="A unified enterprise recruitment intelligence suite by VRM AI Technology. Optimize talent acquisition with ScreenSage, VideoSage, and CodeSage." />
                <meta property="og:title" content="WorkflowAI — Enterprise Recruitment Intelligence Suite" />
                <meta property="og:description" content="A unified enterprise recruitment intelligence suite by VRM AI Technology. Optimize talent acquisition with ScreenSage, VideoSage, and CodeSage." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/workflow" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WorkflowAI — Enterprise Recruitment Intelligence Suite" />
                <meta name="twitter:description" content="A unified enterprise recruitment intelligence suite by VRM AI Technology. Optimize talent acquisition with ScreenSage, VideoSage, and CodeSage." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
            <HeaderOne className="header-white-text header-transparent" />

            {/* --- Hero Section --- */}
            <section id="workflow-hero" className="vrm-hero rts-banner-area" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image */}
                <img
                    src={heroBg}
                    alt="Workflow Hero Background"
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
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">Talent Acquisition Suite</span>
                                <h1 className="title wow fadeInUp text-white vrm-workflow-hero-title" data-wow-delay=".2s">
                                    WorkflowAI
                                </h1>
                                <p className="disc wow fadeInUp text-white-50 mt-4 mb-5 vrm-workflow-hero-disc" data-wow-delay=".3s">
                                    Designed for Talent Acquisition Leaders and HR Operations, WorkflowAI provides a structured suite of assessment tools to optimize candidate evaluation pipelines, reduce screening times, and improve selection outcomes.
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

            {/* --- Section 1: Xpress Screening --- */}
            <div id="xpress-screening" className="rts-about-area rts-section-gap">
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
                                    <p className="pre-title">Module 01</p>
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

            {/* --- Section 2: ScreenSage --- */}
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
                                    <p className="pre-title">Module 02</p>
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

            {/* --- Section 3: VideoSage --- */}
            <div id="videosage" className="rts-about-area rts-section-gap">
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
                                    <p className="pre-title">Module 03</p>
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

            {/* --- Section 4: CodeSage --- */}
            <div id="codesage" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="vrm-product-thumbnail">
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="CodeSage Code Execution Interface" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="">
                                    <p className="pre-title">Module 04</p>
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

            <WorkflowTestimonials
                title="Proof that WorkflowAI improves both sides of hiring"
                description="From faster shortlisting for recruiters to structured assessments for candidates, these reviews capture how the WorkflowAI suite performs in real hiring environments."
            />

            <FooterOne />
        </div>
    );
}

export default Workflow;
