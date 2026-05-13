import React, { useEffect, useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import '../assets/css/growthflow-premium.css';

function BusinessAcquisitionForm() {
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

        try {
            const response = await fetch('/api/business-acquisition', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            e.target.reset();
            setSubmitStatus({ type: 'success', message: 'Business acquisition request submitted successfully.' });
        } catch (error) {
            console.error('Business acquisition form error:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="business-acquisition-page">
            <HeaderOne />

            {/* Hero Section */}
            <div className="vrm-growthflow-hero">
                <div className="vrm-hero-blob bg-blob-1"></div>
                <div className="vrm-hero-blob bg-blob-2"></div>
                <div className="container position-relative z-index-1 text-start">
                    <span className="vrm-suite-identity wow fadeInUp" data-wow-delay=".1s">GROWTHFLOWAI</span>
                    <h1 className="vrm-page-title wow fadeInUp" data-wow-delay=".3s">Business Acquisition</h1>
                    <p className="vrm-page-desc wow fadeInUp" data-wow-delay=".5s">
                        Accelerate your market expansion with AI-driven acquisition strategies.
                        Identify high-value targets, automate outreach, and close deals faster with our
                        intelligent ecosystem designed for modern enterprise growth.
                    </p>
                </div>
            </div>

            {/* Section 1: Intelligent Lead Generation */}
            <div className="vrm-section-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">Intelligent Lead Generation</h2>
                            <p className="vrm-section-text">
                                Stop wasting time on cold leads. Our AI engine analyzes millions of data points to
                                identify businesses that match your ideal customer profile with 98% accuracy.
                                We leverage intent data, firmographics, and technographics to pinpoint companies
                                ready to buy.
                            </p>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                                    <span className="fs-5">Real-time intent monitoring</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                                    <span className="fs-5">Automated prospect enrichment</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-check-circle text-primary me-3 fs-5"></i>
                                    <span className="fs-5">Predictive lead scoring</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <img src="/assets/images/service/17.jpg" alt="Lead Generation Analytics" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Data-Driven Targeting */}
            <div className="vrm-section-light">
                <div className="container">
                    <div className="row align-items-center g-5 flex-row-reverse">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">Data-Driven Targeting</h2>
                            <p className="vrm-section-text">
                                Precision is key to acquisition. Our platform maps decision-makers within target organizations
                                and uncovers the best pathways for connection. Visualise complex buying committees and
                                orchestrate multi-touch campaigns that resonate with key stakeholders.
                            </p>
                            <div className="d-flex gap-4 mt-4">
                                <div className="vrm-stat-box">
                                    <h3 className="fw-bold text-primary mb-1">3x</h3>
                                    <p className="mb-0">Pipeline Velocity</p>
                                </div>
                                <div className="vrm-stat-box">
                                    <h3 className="fw-bold text-primary mb-1">45%</h3>
                                    <p className="mb-0">Higher Conversion</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <img src="/assets/images/service/18.jpg" alt="Targeting Dashboard" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Conversion Optimization Engine */}
            <div className="vrm-section-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <h2 className="vrm-section-title">Conversion Optimization Engine</h2>
                            <p className="vrm-section-text">
                                Turn opportunities into closed deals. Our Conversion Engine provides real-time guidance
                                to your sales team, suggesting the next best action based on historical success patterns.
                                Automate follow-ups, schedule meetings, and generate proposals instantly.
                            </p>
                            <a href="#acquisition-form" className="rts-btn btn-primary btn-lg mt-3">
                                Start Your Transformation
                            </a>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <img src="/assets/images/service/19.jpg" alt="Conversion Optimization" className="vrm-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div id="acquisition-form" className="rts-contact-area vrm-brand-gradient-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-12">
                            <div className="contact-form-area-one bg-white p-5 rounded-4 shadow-sm border">
                                <div className="rts-title-area contact text-center mb--50">
                                    <span className="vrm-suite-identity text-primary">GET STARTED</span>
                                    <h2 className="title">Analyze Your Acquisition Needs</h2>
                                </div>
                                {submitStatus.message && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form id="business-acquisition-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Business Name" name="business_name" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="url" placeholder="Business Website Link" name="business_website_link" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Contact Person Name" name="contact_person" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="email" placeholder="Email" name="email" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="tel" placeholder="Phone Number" name="phone" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Estimated Budget" name="budget" className="form-control" />
                                        </div>
                                        <div className="col-12 mb--30">
                                            <textarea placeholder="Describe your acquisition goals and requirements in detail..." name="message" className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-12 mb--30">
                                            <label htmlFor="file-upload" className="form-label fw-bold small text-muted text-uppercase">Upload RFP/Requirements (Optional)</label>
                                            <div className="vrm-file-upload-wrapper">
                                                <input type="file" id="file-upload" name="file" />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="rts-btn btn-primary btn-lg w-100" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit Request'}
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

export default BusinessAcquisitionForm;
