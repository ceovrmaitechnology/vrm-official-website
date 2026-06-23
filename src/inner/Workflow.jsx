import React, { useEffect } from 'react';
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
            <HeaderOne className="header-white-text header-transparent" />

            {/* --- Hero Section --- */}
            {/* --- Hero Section --- */}
            <section id="workflow-hero" className="vrm-hero rts-banner-area" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background Image */}
                <img
                    src={heroBg}
                    alt="Workflow Hero"
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
                                <span className="pre-title wow fadeInUp text-white-50" data-wow-delay=".1s">Workflow Integration</span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s" style={{ fontSize: '60px', fontWeight: '700', lineHeight: '1.2', marginTop: '10px' }}>
                                    Workflow.AI
                                </h1>
                                <p className="disc wow fadeInUp text-white-50 mt-4 mb-5" data-wow-delay=".3s" style={{ maxWidth: '650px', fontSize: '18px', lineHeight: '1.6' }}>
                                    Streamline Your Recruitment Process. Discover our suite of intelligent tools designed to modernize hiring, assess talent accurately, and save you time securely.
                                </p>
                                <div className="banner-btn wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-primary">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 1: ScreenSage --- */}
            <div id="screensage" className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="thumbnail">
                                <img src="/assets/images/workflow/screensage/screensage-image.png" alt="ScreenSage" style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="ScreenSage">
                                    <p className="pre-title">Module 01</p>
                                    <h2 className="title">ScreenSage</h2>
                                </div>
                                <p className="disc">
                                    ScreenSage empowers organizations to modernize hiring through AI-driven interviews and candidate screening.
                                    By delivering unbiased, consistent, and insight-rich assessments at scale, it enables faster hiring decisions and measurable recruitment outcomes.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/screensage">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 2: VideoSage --- */}
            <div id="videosage" className="rts-about-area rts-section-gap" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="thumbnail">
                                <img src="/assets/images/workflow/videosage/videosage-image.png" alt="VideoSage" style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="VideoSage">
                                    <p className="pre-title">Module 02</p>
                                    <h2 className="title">VideoSage</h2>
                                </div>
                                <p className="disc">
                                    Hire smarter with VideoSage.
                                    Our AI-powered video interview platform delivers consistent, unbiased candidate assessments at scale—backed by real-time insights.
                                </p>
                                <Link className="rts-btn btn-primary" to="/products/workflow/videosage">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 3: CodeSage --- */}
            <div id="codesage" className="rts-about-area rts-section-gap vrm-enterprise-gradient">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="thumbnail">
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="CodeSage" style={{ borderRadius: '15px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="">
                                    <p className="pre-title" style={{ color: '#4CC9F0' }}>Module 03</p>
                                    <h2 className="title text-white">CodeSage</h2>
                                </div>
                                <p className="disc text-white-50">
                                    CodeSage enables scalable, unbiased technical interviews through intelligent code evaluation and real-time feedback—helping teams assess engineering talent accurately and hire with confidence.
                                </p>
                                <Link className="vrm-btn vrm-btn-ghost mt-4" style={{ display: 'inline-flex' }} to="/products/workflow/codesage">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WorkflowTestimonials
                title="Proof that Workflow.AI improves both sides of hiring"
                description="From faster shortlisting for recruiters to more transparent assessments for candidates, these reviews capture how the Workflow.AI suite performs in real hiring environments."
            />

            <FooterOne />
        </div>
    );
}

export default Workflow;
