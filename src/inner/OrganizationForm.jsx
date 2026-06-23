import React, { useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";

function OrganizationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/organization', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            e.target.reset();
            setSubmitStatus({ type: 'success', message: 'Organization request submitted successfully.' });
        } catch (error) {
            console.error('Organization form error:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="organization-form-page">
            <HeaderOne className="header-white-text" />

            {/* Hero Section */}
            <div className="vrm-growthflow-hero">
                <div className="vrm-hero-blob bg-blob-3"></div>
                <div className="vrm-hero-blob bg-blob-1"></div>
                <div className="container position-relative z-index-1 text-start">
                    <span className="vrm-suite-identity wow fadeInUp" data-wow-delay=".1s">GrowthflowAI</span>
                    <h1 className="vrm-page-title wow fadeInUp" data-wow-delay=".3s">Organization</h1>
                    <p className="vrm-page-desc wow fadeInUp" data-wow-delay=".5s">
                        Gain comprehensive insights and structured workflows to manage enterprise-level hiring requirements and organization scaling.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="vrm-section-light">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/job.jpg.jpeg" alt="Requirement Posting" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>Requirement Posting</h4>
                                <p className="text-muted">Post hiring requirements with structured workflows.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/candidate management.jpeg" alt="Candidate Management" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>Candidate Management</h4>
                                <p className="text-muted">Manage shortlisted candidates with centralized dashboard.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/analytics and reporting.jpeg" alt="Analytics & Reporting" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>Analytics & Reporting</h4>
                                <p className="text-muted">Gain insights with detailed performance tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-contact-area vrm-brand-gradient-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-12">
                            <div className="contact-form-area-one bg-white p-5 rounded-4 shadow-sm border">
                                <div className="rts-title-area contact text-center mb--50">
                                    <span className="vrm-suite-identity text-primary">Organization</span>
                                    <h2 className="title">Post Your Requirements Here</h2>
                                </div>
                                {submitStatus.message && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form id="organization-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Company Name" name="company_name" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="url" placeholder="Company Website Link" name="company_website_link" required className="form-control" />
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
                                            <input type="text" placeholder="Budget" name="budget" className="form-control" />
                                        </div>
                                        <div className="col-12 mb--30">
                                            <textarea placeholder="Describe your requirement in detail..." name="message" className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-12 mb--30">
                                            <label htmlFor="file-upload" className="form-label fw-bold small text-muted text-uppercase">Upload File (Optional)</label>
                                            <div className="vrm-file-upload-wrapper">
                                                <input type="file" id="file-upload" name="file" className="form-control" style={{ padding: '10px' }} />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="rts-btn btn-primary btn-lg w-100" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default OrganizationForm;
