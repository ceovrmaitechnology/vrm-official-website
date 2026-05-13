import React, { useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";

function JobApplicantForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/job-applicant', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            e.target.reset();
            setSubmitStatus({ type: 'success', message: 'Application submitted successfully. Our team will contact you soon.' });
        } catch (error) {
            console.error('Job applicant form error:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="job-applicant-form-page">
            <HeaderOne className="header-white-text" />

            {/* Hero Section */}
            <div className="vrm-growthflow-hero">
                <div className="vrm-hero-blob bg-blob-3"></div>
                <div className="vrm-hero-blob bg-blob-1"></div>
                <div className="container position-relative z-index-1 text-start">
                    <span className="vrm-suite-identity wow fadeInUp" data-wow-delay=".1s">GrowthflowAI</span>
                    <h1 className="vrm-page-title wow fadeInUp" data-wow-delay=".3s">Job Applicant</h1>
                    <p className="vrm-page-desc wow fadeInUp" data-wow-delay=".5s">
                        Discover and apply for matching opportunities. Build your profile, map your experience, and stay updated with intelligent screening workflows.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="vrm-section-light">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/marketing-team-discussing-growth-strategies-in-coworking-office.jpg.jpeg" alt="Smart Profile Management" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>Smart Profile Management</h4>
                                <p className="text-muted">Manage resumes, experience, and skill data efficiently.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/Hero_REC_ATS.jpeg" alt="Real-Time tracking" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>Real-Time Application Tracking</h4>
                                <p className="text-muted">Track job status updates and notifications seamlessly.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="vrm-feature-card p-4">
                                <img src="/assets/images/about/AI-Powered-Matching.png" alt="AI-Powered Matching" className="vrm-feature-image mb-4" style={{ height: '220px', objectFit: 'cover' }} />
                                <h4>AI-Powered Matching</h4>
                                <p className="text-muted">Get matched with the right roles using intelligent screening.</p>
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
                                    <span className="vrm-suite-identity text-primary">Join Our Team</span>
                                    <h2 className="title">Fill the Application</h2>
                                </div>
                                {submitStatus.message && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form id="job-applicant-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="Full Name" name="full_name" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="email" placeholder="Email" name="email" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="tel" placeholder="Phone Number" name="phone" required className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb--30">
                                            <input type="text" placeholder="City" name="city" required className="form-control" />
                                        </div>
                                        <div className="col-lg-12 col-12 mb--30">
                                            <input type="text" placeholder="Position You Are Applying For" name="position" required className="form-control" />
                                        </div>
                                        <div className="col-12 mb--30">
                                            <textarea placeholder="Tell us briefly about your experience or why you want this position" name="experience" className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-12 mb--30">
                                            <label htmlFor="file-upload" className="form-label fw-bold small text-muted text-uppercase">Upload Resume/CV (Optional)</label>
                                            <div className="vrm-file-upload-wrapper">
                                                <input type="file" id="file-upload" name="file" className="form-control" style={{ padding: '10px' }} />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="rts-btn btn-primary btn-lg w-100" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
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

export default JobApplicantForm;
