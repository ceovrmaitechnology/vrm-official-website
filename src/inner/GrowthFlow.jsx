import React, { useEffect } from 'react';
import WOW from 'wow.js';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';

function GrowthFlow() {
    useEffect(() => {
        new WOW({
            live: false
        }).init();
    }, []);

    return (
        <div className="growthflow-page">
            <HeaderOne className="header-white-text header-transparent" />

            {/* --- Hero Section --- */}
            <section className="vrm-growthflow-landing-hero">
                <div className="container position-relative z-index-1 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 d-flex flex-column align-items-center">
                            <div className="vrm-hero__content">
                                <span className="vrm-suite-identity wow fadeInUp" data-wow-delay=".1s">GrowthFlowAI</span>
                                <h1 className="vrm-page-title wow fadeInUp" data-wow-delay=".2s" style={{ maxWidth: '900px', marginBottom: '24px', marginLeft: 'auto', marginRight: 'auto' }}>
                                    Manage pre-sales, consultants, and partner-led growth from a single, structured platform.
                                </h1>
                                <p className="vrm-page-desc wow fadeInUp" data-wow-delay=".3s" style={{ maxWidth: '800px', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }}>
                                    The BD & Consultant Management Platform helps organizations track demos, conversions, and commissions while enabling consultants to onboard candidates, refer companies, and receive transparent payouts.
                                </p>
                                <div className="vrm-hero__actions wow fadeInUp" data-wow-delay=".4s">
                                    <Link className="vrm-btn vrm-btn-primary" to="/contactus#send-message">
                                        Get Started <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s" style={{ marginTop: '30px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.7)' }}>
                                    Built with role-based access, automated workflows, and admin-level control.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 1: Business Acquisition --- */}
            <div id="business-acquisition" className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="thumbnail vrm-module-thumbnail">
                                <img src="/assets/images/service/03.jpg" alt="Business Acquisition" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Business">
                                    <p className="pre-title">Module 01</p>
                                    <h2 className="title">Business Acquisition</h2>
                                </div>
                                <p className="disc">
                                    Streamline your business acquisition process with advanced tracking and management tools.
                                    Manage client interactions, track conversions, and monitor performance securely through our central administrative dashboard.
                                </p>
                                <Link className="rts-btn btn-primary" to="/business-acquisition-form">Get Started</Link>
                                <div className="row about-success-wrapper">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 2: Client Acquisition --- */}
            <div id="client-acquisition" className="rts-about-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="thumbnail vrm-module-thumbnail">
                                <img src="/assets/images/service/02.jpg" alt="Client Acquisition" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Client">
                                    <p className="pre-title">Module 02</p>
                                    <h2 className="title">Client Acquisition</h2>
                                </div>
                                <p className="disc">
                                    Empower your consultants to refer companies and candidates efficiently.
                                    Our platform ensures every referral is tracked and every payout is accurate.
                                </p>
                                <Link className="rts-btn btn-primary" to="/client-acquisition-form">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 3: Job Applicant --- */}
            <div id="job-applicant" className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="thumbnail vrm-module-thumbnail">
                                <img src="/assets/images/service/04.jpg" alt="Job Applicant" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Jobs">
                                    <p className="pre-title">Module 03</p>
                                    <h2 className="title">Job Applicant Management</h2>
                                </div>
                                <p className="disc">
                                    Seamlessly onboard candidates and manage the applicant lifecycle with ease.
                                    Integrated workflows ensure no candidate falls through the cracks.
                                </p>
                                <Link className="rts-btn btn-primary" to="/job-applicant-form">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 4: Organization --- */}
            <div id="organization" className="rts-about-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="thumbnail vrm-module-thumbnail">
                                <img src="/assets/images/service/06.jpg" alt="Organization" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="about-inner">
                                <div className="rts-title-area" data-text="Organization">
                                    <p className="pre-title">Module 04</p>
                                    <h2 className="title">Organization Management</h2>
                                </div>
                                <p className="disc">
                                    Gain complete admin-level control over your organization's structure, roles, and permissions.
                                    Ensure compliance and scalability as you grow.
                                </p>
                                <Link className="rts-btn btn-primary" to="/organization-form">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Conclusion / Benefits Section --- */}
            <section className="rts-service-details-area rts-section-gap vrm-brand-gradient-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center wow fadeInUp" data-wow-delay=".2s">
                            <h2 className="title text-white" style={{ marginBottom: '30px' }}>Clarity and Efficiency at Every Stage</h2>
                            <p className="disc text-white-50" style={{ fontSize: '18px', marginBottom: '40px' }}>
                                The platform removes manual effort and uncertainty from business development and consultant management. Every activity—referrals, conversions, commissions, and payouts—is tracked, verified, and governed through clear admin-defined rules.
                            </p>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="service-details-card" style={{ padding: '30px', textAlign: 'center', height: '100%' }}>
                                <div className="thumbnail" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(59, 78, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B4ECC', fontSize: '24px' }}>
                                        <i className="far fa-eye" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h6 className="title">Organizations</h6>
                                    <p className="disc">Gain visibility and control over the entire ecosystem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="service-details-card" style={{ padding: '30px', textAlign: 'center', height: '100%' }}>
                                <div className="thumbnail" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(59, 78, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B4ECC', fontSize: '24px' }}>
                                        <i className="far fa-handshake" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h6 className="title">Consultants</h6>
                                    <p className="disc">Gain trust and timely payouts with transparent tracking.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="service-details-card" style={{ padding: '30px', textAlign: 'center', height: '100%' }}>
                                <div className="thumbnail" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(59, 78, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B4ECC', fontSize: '24px' }}>
                                        <i className="far fa-cogs" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h6 className="title">Admins</h6>
                                    <p className="disc">Gain a system built for accuracy, compliance, and scale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterOne />
        </div>
    );
}

export default GrowthFlow;
