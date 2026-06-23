import React, { useEffect, useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import '../assets/css/growthflow-premium.css';

function ClientAcquisitionForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/client-acquisition', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            e.target.reset();
            setSubmitStatus({ type: 'success', message: 'Client acquisition request submitted successfully.' });
        } catch (error) {
            console.error('Client acquisition form error:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="client-acquisition-page">
            <HeaderOne className="header-white-text" />

            {/* Hero Section */}
            <div className="vrm-growthflow-hero">
                <div className="vrm-hero-blob bg-blob-3"></div>
                <div className="vrm-hero-blob bg-blob-1"></div>
                <div className="container position-relative z-index-1 text-start">
                    <span className="vrm-suite-identity wow fadeInUp" data-wow-delay=".1s">GROWTHFLOWAI</span>
                    <h1 className="vrm-page-title wow fadeInUp" data-wow-delay=".3s">Client Acquisition</h1>
                    <p className="vrm-page-desc wow fadeInUp" data-wow-delay=".5s">
                        Revolutionize how you attract and retain clients. Our AI-driven ecosystem
                        automates the entire lifecycle—from intelligent targeting and personalized
                        outreach to predictive retention strategies—ensuring sustainable growth.
                    </p>
                </div>
            </div>

            {/* Section 1: AI-Powered Client Targeting */}
            <div className="vrm-section-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">AI-Powered Client Targeting</h2>
                            <p className="vrm-section-text">
                                Don't just cast a wide net—spearfish your ideal clients. Our algorithms analyze
                                vast datasets to identify prospects with the highest propensity to convert.
                                We map buyer personas to actual behavior, ensuring your message lands in front
                                of the right eyes at the exact right moment.
                            </p>
                            <div className="row g-4 mt-3">
                                <div className="col-md-6">
                                    <div className="vrm-feature-card p-3">
                                        <h5 className="mb-2">Behavioral Analysis</h5>
                                        <p className="small mb-0 text-muted">Track digital footprints to understand intent.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="vrm-feature-card p-3">
                                        <h5 className="mb-2">Lookalike Modeling</h5>
                                        <p className="small mb-0 text-muted">Find more clients like your best ones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <img src="/assets/images/about/about-2.png" alt="Client Targeting AI" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Automated Outreach & Engagement */}
            <div className="vrm-section-light">
                <div className="container">
                    <div className="row align-items-center g-5 flex-row-reverse">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">Automated Outreach & Engagement</h2>
                            <p className="vrm-section-text">
                                Scale your personalization. Whether it's email, social, or chat, our system orchestrates
                                multi-channel campaigns that feel human. Dynamic content adaptation ensures every
                                interaction is relevant, driving higher open rates and deeper engagement without
                                manual overhead.
                            </p>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                                    <span className="fs-5">Hyper-personalized messaging</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                                    <span className="fs-5">Multi-channel sequence automation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <img src="/assets/images/about/about-5.png" alt="Automated Outreach" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Retention Strategy Intelligence */}
            <div className="vrm-section-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">Retention Strategy Intelligence</h2>
                            <p className="vrm-section-text">
                                Acquisition is only half the battle. Our predictive churn models alert you to at-risk
                                accounts before they leave. Identify upsell opportunities and automate customer
                                success workflows to turn satisfied clients into loyal brand advocates.
                            </p>
                            <a href="#client-form" className="rts-btn btn-primary btn-lg mt-3">
                                Analyze Your Client Lifecycle
                            </a>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <img src="/assets/images/about/customer analytics and strategy.webp" alt="Retention Strategy" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div id="client-form" className="rts-contact-area vrm-brand-gradient-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-12">
                            <div className="contact-form-area-one bg-white p-5 rounded-4 shadow-sm border">
                                <div className="rts-title-area contact text-center mb--50">
                                    <span className="vrm-suite-identity text-primary">GET STARTED</span>
                                    <h2 className="title">Client Acquisition Strategy</h2>
                                </div>
                                {submitStatus.message && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form id="client-acquisition-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Your Name" name="name" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="email" placeholder="Email Address" name="email" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Company Name" name="company" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="tel" placeholder="Phone Number" name="phone" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <select name="service_interest" className="vrm-custom-select" required>
                                                <option value="">Select Primary Interest</option>
                                                <option value="lead_gen">Lead Generation</option>
                                                <option value="outreach">Automated Outreach</option>
                                                <option value="retention">Client Retention</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Target Audience/Industry" name="industry" className="form-control" />
                                        </div>
                                        <div className="col-12 mb--30">
                                            <textarea placeholder="Tell us about your client acquisition goals..." name="message" className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="rts-btn btn-primary btn-lg w-100" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Get Strategic Insights'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default ClientAcquisitionForm;
