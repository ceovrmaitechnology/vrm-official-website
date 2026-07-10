import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import { Modal } from 'react-bootstrap';
import '../careers.css'; // Import custom styles

function Careers() {
    const [show, setShow] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleClose = () => {
        setShow(false);
        setSubmitStatus({ type: '', message: '' });
    };
    const handleShow = (jobTitle = '') => {
        setSelectedJob(jobTitle);
        setSubmitStatus({ type: '', message: '' });
        setShow(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Application submitted successfully! Our HR team will contact you soon.' });
                e.target.reset();
            } else {
                setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again later.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'An error occurred while submitting your application.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        {
            icon: 'fa-microchip',
            title: 'Innovation First',
            desc: 'Work on cutting-edge AI product platforms that defy the status quo.'
        },
        {
            icon: 'fa-brain',
            title: 'Continuous Learning',
            desc: 'Stay ahead with access to advanced AI & ML learning resources.'
        },
        {
            icon: 'fa-chart-line',
            title: 'Rapid Growth',
            desc: 'Accelerate your career with clear paths for advancement and impact.'
        },
        {
            icon: 'fa-users',
            title: 'Collaborative Culture',
            desc: 'Join a team of passionate innovators who support and challenge each other.'
        }
    ];

    const openings = [
        {
            title: 'Senior AI Engineer',
            experience: '5+ Years',
            location: 'Bangalore, India',
            type: 'Full Time'
        },
        {
            title: 'Product Designer (UI/UX)',
            experience: '3-5 Years',
            location: 'Bangalore, India',
            type: 'Full Time'
        },
        {
            title: 'AI Product Manager',
            experience: '4+ Years',
            location: 'Bangalore, India',
            type: 'Full Time'
        },
        {
            title: 'Frontend Developer (React)',
            experience: '2-4 Years',
            location: 'Remote / Hybrid',
            type: 'Full Time'
        }
    ];

    return (
        <div className='careers-page'>
            <Helmet>
        <title>Careers | VRM AI Technology</title>
        <meta name="description" content="Join VRM AI Technology — a born Gen AI company. Explore open roles in AI engineering, product design, and more. Build the future of intelligent automation." />
        <meta property="og:title" content="Careers at VRM AI Technology" />
        <meta property="og:description" content="Join VRM AI Technology — a born Gen AI company. Explore open roles in AI engineering, product design, and more. Build the future of intelligent automation." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
        <link rel="canonical" href="https://www.vrmaitechnology.com/careers" />
      
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Careers at VRM AI Technology" />
                <meta name="twitter:description" content="Join VRM AI Technology — a born Gen AI company. Explore open roles in AI engineering, product design, and more. Build the future of intelligent automation." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
            <HeaderOne className="careers-header-panel" />

            {/* Hero Section */}
            <div className="careers-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="careers-hero-content text-start">
                                <div className="about-hero__badge">
                                    Work With Us
                                </div>
                                <h1 className="careers-hero__title text-white">Careers</h1>
                                <p className="careers-hero__desc text-white-50">
                                    We're solving humanity's toughest challenges with intelligent automation.
                                    Bring your passion and expertise to a team that's redefining what's possible.
                                </p>
                                <div className="careers-hero__actions">
                                    <a href="#openings" className="rts-btn btn-primary">Explore Open Roles</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="careers-hero-image wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src="/assets/images/career/careers-hero-v2.png" alt="Working at VRM" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block', objectPosition: 'center 20%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="careers-intro">
                <div className="container">
                    <div className="row align-items-stretch g-5">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h2 className="careers-section-title">Where Innovation Meets Purpose</h2>
                            <p className="careers-section-desc">
                                There are many tech firms today, but none quite like VRM. We are a BORN GEN AI COMPANY dedicated to leading the revolution in Agentic AI. While others are just beginning to adapt to the new era of technology, we were built from the ground up to transform complex challenges into intelligent, seamless experiences.
                            </p>
                            <p className="careers-section-desc mt-3">
                                We are a team of certified experts with deep experience in AI development, Machine Learning, and strategic consulting who will walk with you through every step of your professional journey.
                            </p>
                            <div className="mt-4">
                                <Link to="/contactus#send-message" className="rts-btn btn-primary">Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-flex h-100">
                            <div className="w-100 h-100 position-relative">
                                <img src="/assets/images/career/career-1-v2.png" alt="Working at VRM" className="w-100 h-100" style={{ objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="careers-benefits">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="careers-section-title">Why Join VRM AI?</h2>
                        <p className="careers-section-desc mx-auto">We invest in our people as much as we invest in our technology.</p>
                    </div>
                    <div className="row g-4">
                        {benefits.map((benefit, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="benefit-card">
                                    <div className="benefit-icon">
                                        <i className={`fas ${benefit.icon}`}></i>
                                    </div>
                                    <h4 className="benefit-title">{benefit.title}</h4>
                                    <p className="benefit-desc">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Current Openings */}
            <div className="careers-openings" id="openings">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="careers-section-title">Current Openings</h2>
                        <p className="careers-section-desc mx-auto">Ready to launch your next chapter? Check out our open positions below.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {openings.map((job, index) => (
                                <div className="job-card" key={index}>
                                    <div className="job-info">
                                        <h4>{job.title}</h4>
                                        <div className="job-meta">
                                            <span className="job-badge"><i className="far fa-briefcase"></i> {job.experience}</span>
                                            <span className="job-badge"><i className="far fa-map-marker-alt"></i> {job.location}</span>
                                            <span className="job-badge"><i className="far fa-clock"></i> {job.type}</span>
                                        </div>
                                    </div>
                                    <div className="job-action text-end mt-3 mt-lg-0">
                                        <button className="rts-btn btn-primary" onClick={() => handleShow(job.title)}>Apply Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="careers-cta">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2>Ready to Start Your Journey?</h2>
                            <p>If you don't see a role that fits but are passionate about what we do, we'd still love to hear from you.</p>
                            <button className="rts-btn btn-white" onClick={() => handleShow('General Application')}>Send General Application</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            <Modal show={show} onHide={handleClose} size="lg" centered className="careers-modal">
                <Modal.Header closeButton style={{ borderBottom: '1px solid #eee', padding: '20px 30px' }}>
                    <Modal.Title style={{ fontSize: '24px', fontWeight: '700', color: '#1c2539' }}>
                        Apply for <span style={{ color: 'var(--color-primary)' }}>{selectedJob}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: '30px' }}>
                    <p style={{ color: '#5D666F', marginBottom: '25px', fontSize: '15px' }}>
                        Please fill out the form below. We'll review your application and get back to you shortly.
                    </p>
                    <div className="contact-form-area-one" style={{ padding: 0, boxShadow: 'none' }}>
                        {submitStatus.message && (
                            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} style={{ borderRadius: '8px' }}>
                                {submitStatus.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-dark">Full Name <span className="text-danger">*</span></label>
                                    <input type="text" name="fullName" placeholder="e.g. John Doe" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0' }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-dark">Email Address <span className="text-danger">*</span></label>
                                    <input type="email" name="email" placeholder="e.g. john@example.com" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0' }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-dark">Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" name="phone" placeholder="+91 81233 48355" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0' }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-dark">Experience (Years) <span className="text-danger">*</span></label>
                                    <select name="experience" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0', width: '100%', backgroundColor: '#fff' }}>
                                        <option value="">Select Experience</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="1-3">1-3 Years</option>
                                        <option value="3-5">3-5 Years</option>
                                        <option value="5+">5+ Years</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-bold small text-dark">Position <span className="text-danger">*</span></label>
                                    <input type="text" name="position" value={selectedJob} readOnly style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0', backgroundColor: '#f8f9fa' }} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-bold small text-dark">Upload Resume/CV (PDF, DOC) <span className="text-danger">*</span></label>
                                    <input className="form-control" name="resume" type="file" accept=".pdf,.doc,.docx" required style={{ padding: '10px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px' }} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-bold small text-dark">Cover Letter</label>
                                    <textarea name="coverLetter" placeholder="Tell us why you're a great fit..." rows={4} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', marginBottom: '0', fontSize: '14px' }} />
                                </div>
                                <div className="col-12 mt-4 text-center">
                                    <button type="submit" disabled={isSubmitting} className="rts-btn btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '8px', opacity: isSubmitting ? 0.7 : 1 }}>
                                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <FooterOne />
        </div>
    )
}

export default Careers;
