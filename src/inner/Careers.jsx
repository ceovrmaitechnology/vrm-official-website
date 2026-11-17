import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
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
    const [openings, setOpenings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [gallery, setGallery] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxPhoto, setLightboxPhoto] = useState(null);

    useEffect(() => {
        let isMounted = true;
        fetch('/api/careers/jobs')
            .then(res => res.json())
            .then(data => {
                if (isMounted && data.success && Array.isArray(data.jobs)) {
                    setOpenings(data.jobs);
                }
            })
            .catch(() => {
                // Ignore fetch error on initial prerender
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        fetch('/api/careers/gallery')
            .then(res => res.json())
            .then(data => {
                if (isMounted && data.success && Array.isArray(data.gallery)) {
                    setGallery(data.gallery);
                }
            })
            .catch(() => {
                // Ignore fetch error on initial prerender
            });

        return () => { isMounted = false; };
    }, []);

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

        const formElement = e.target;
        const formData = new FormData(formElement);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData
            });

            const result = await response.json().catch(() => ({}));
            if (response.ok && result.success) {
                setSubmitStatus({ type: 'success', message: 'Application submitted successfully! Our team will contact you soon.' });
                formElement.reset();
            } else {
                setSubmitStatus({ type: 'error', message: result.message || 'Failed to submit application. Please email contactus@vrmaitechnology.com.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'An error occurred while submitting your application. Please email your resume to contactus@vrmaitechnology.com.' });
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

    const categories = ['All', ...new Set(gallery.map(g => g.category).filter(Boolean))];
    const filteredGallery = activeCategory === 'All' ? gallery : gallery.filter(g => g.category === activeCategory);

    return (
        <div className='careers-page'>
            <SEO />
            <HeaderOne className="careers-header-panel" />

            {/* Hero Section */}
            <div className="careers-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="careers-hero-content text-start">
                                <div className="about-hero__badge">
                                    Work With Us
                                </div>
                                <h1 className="careers-hero__title text-white">Careers</h1>
                                <p className="careers-hero__desc text-white">
                                    We're solving humanity's toughest challenges with intelligent automation.
                                    Bring your passion and expertise to a team that's redefining what's possible.
                                </p>
                                <div className="careers-hero__actions">
                                    <a href="#openings" className="rts-btn btn-primary">Explore Open Roles</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-self-center justify-content-lg-end justify-content-center">
                            <div className="vrm-career-hero-img-container wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/career/careers-hero-v2.png" alt="Working at VRM" className="vrm-career-hero-img" loading="lazy" />
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
                                There are many tech firms today, but none quite like VRM. We are a BORN-GEN AI COMPANY dedicated to leading the revolution in Agentic AI. While others are just beginning to adapt to the new era of technology, we were built from the ground up to transform complex challenges into intelligent, seamless experiences.
                            </p>
                            <p className="careers-section-desc mt-3">
                                Join a team of certified experts with deep experience in AI development, Machine Learning, and strategic planning, and grow with us through every step of your professional journey.
                            </p>
                            <div className="mt-4">
                                <Link to="/contactus#send-message" className="rts-btn btn-primary">Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-self-center justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                            <div className="vrm-career-img-container">
                                <img src="/assets/images/career/career-1-v2.png" alt="Working at VRM" className="vrm-career-img" loading="lazy" />
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

            {/* Life at VRM Section (Completely hidden if 0 published photos) */}
            {gallery && gallery.length > 0 && (
                <div className="careers-gallery-section py-5" id="life-at-vrm" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6', borderBottom: '1px solid #eef2f6' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <div className="about-hero__badge mb-2 d-inline-block" style={{ color: 'var(--color-primary)', background: 'rgba(13,110,253,0.08)', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600' }}>
                                Team & Culture
                            </div>
                            <h2 className="careers-section-title mb-2">Life at VRM</h2>
                            <p className="careers-section-desc mx-auto" style={{ maxWidth: '640px' }}>
                                A glimpse into our team culture, Fun Fridays, festive celebrations, and everyday moments of innovation.
                            </p>

                            {/* Category Filter Tabs */}
                            {categories.length > 1 && (
                                <div
                                    className="careers-gallery-filter-wrap"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginTop: '1.5rem',
                                        width: '100%'
                                    }}
                                >
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            type="button"
                                            className={`careers-gallery-pill ${activeCategory === cat ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(cat)}
                                            style={{
                                                width: 'auto',
                                                maxWidth: 'max-content',
                                                flex: '0 0 auto'
                                            }}
                                        >
                                            {cat} {cat === 'All' ? `(${gallery.length})` : `(${gallery.filter(g => g.category === cat).length})`}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Photo Grid */}
                        <div
                            className="careers-gallery-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                justifyContent: 'center',
                                gap: '24px',
                                width: '100%',
                                maxWidth: filteredGallery.length === 1 ? '360px' : filteredGallery.length === 2 ? '744px' : '1140px',
                                margin: '0 auto'
                            }}
                        >
                            {filteredGallery.map((photo) => (
                                <div
                                    className="careers-gallery-item"
                                    key={photo.id}
                                    style={{
                                        width: '100%',
                                        maxWidth: '360px',
                                        margin: '0 auto',
                                        display: 'flex'
                                    }}
                                >
                                    <div
                                        className="card border-0 shadow-sm overflow-hidden h-100 careers-gallery-card"
                                        style={{
                                            width: '100%',
                                            maxWidth: '360px',
                                            borderRadius: '16px',
                                            cursor: 'pointer',
                                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                            background: '#fff',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                        onClick={() => setLightboxPhoto(photo)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '';
                                        }}
                                    >
                                        <div style={{ position: 'relative', paddingTop: '68%', background: '#e2e8f0', overflow: 'hidden' }}>
                                            <img
                                                src={photo.thumbPath || photo.imagePath}
                                                alt={photo.altText || photo.caption || 'Life at VRM AI Technology'}
                                                loading="lazy"
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <span
                                                className="badge bg-dark bg-opacity-75 text-white position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill"
                                                style={{ backdropFilter: 'blur(4px)', fontSize: '11px', letterSpacing: '0.5px' }}
                                            >
                                                {photo.category}
                                            </span>
                                        </div>
                                        <div className="card-body p-4 d-flex flex-column justify-content-between">
                                            {photo.caption && (
                                                <p className="card-text text-dark fw-semibold mb-2" style={{ fontSize: '15px', lineHeight: '1.4' }}>
                                                    {photo.caption}
                                                </p>
                                            )}
                                            <div className="d-flex align-items-center justify-content-between text-muted small mt-2 pt-2 border-top">
                                                <span><i className="far fa-calendar-alt text-primary me-1"></i> {photo.eventDate || (photo.createdAt || '').slice(0, 10)}</span>
                                                <span className="text-primary fw-semibold" onClick={(e) => { e.stopPropagation(); setLightboxPhoto(photo); }}>
                                                    <i className="far fa-expand-alt me-1"></i> View Photo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Current Openings */}
            <div className="careers-openings" id="openings">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="careers-section-title">Current Openings</h2>
                        <p className="careers-section-desc mx-auto">Ready to launch your next chapter? Explore opportunities to join our team below.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {isLoading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading opportunities...</span>
                                    </div>
                                    <p className="text-muted mt-3">Loading open roles...</p>
                                </div>
                            ) : openings.length > 0 ? (
                                openings.map((job, index) => (
                                    <div className="job-card mb-4" key={job.id || job.slug || index} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #eef2f6', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                            <div className="job-info">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <span className="badge bg-light text-primary border" style={{ fontSize: '12px', padding: '5px 12px', borderRadius: '20px' }}>{job.department}</span>
                                                    <span className="badge bg-light text-dark border" style={{ fontSize: '12px', padding: '5px 12px', borderRadius: '20px' }}>{job.employmentType || 'Full-time'}</span>
                                                </div>
                                                <h4 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '700' }}>
                                                    <Link to={`/careers/${job.slug}`} style={{ color: '#1c2539', textDecoration: 'none' }}>
                                                        {job.title}
                                                    </Link>
                                                </h4>
                                                <div className="job-meta d-flex flex-wrap gap-3 text-muted small mb-2">
                                                    <span><i className="far fa-map-marker-alt text-primary me-1"></i> {job.location}</span>
                                                    <span><i className="far fa-briefcase text-primary me-1"></i> {job.experience}</span>
                                                </div>
                                                {job.shortDescription && (
                                                    <p className="text-muted small mb-0" style={{ maxWidth: '650px', lineHeight: '1.5' }}>
                                                        {job.shortDescription}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="job-action d-flex align-items-center gap-2 mt-2 mt-md-0 flex-shrink-0">
                                                <Link to={`/careers/${job.slug}`} className="rts-btn btn-secondary" style={{ padding: '10px 18px', fontSize: '14px' }}>
                                                    View Details
                                                </Link>
                                                <button className="rts-btn btn-primary" onClick={() => handleShow(job.title)} style={{ padding: '10px 18px', fontSize: '14px' }}>
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-openings-card text-center p-5" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                                    <div className="no-openings-icon mb-4" style={{ fontSize: '48px', color: 'var(--color-primary)' }}>
                                        <i className="far fa-briefcase"></i>
                                    </div>
                                    <h4 className="mb-2" style={{ fontWeight: '700', color: '#1c2539' }}>No Openings Right Now</h4>
                                    <p className="text-muted mx-auto" style={{ maxWidth: '540px', fontSize: '15px', lineHeight: '1.6', marginBottom: '22px' }}>
                                        No openings right now, send your resume to <a href="mailto:contactus@vrmaitechnology.com" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>contactus@vrmaitechnology.com</a>.
                                    </p>
                                    <button className="rts-btn btn-primary" onClick={() => handleShow('General Application')}>Send Resume / Apply</button>
                                </div>
                            )}
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

            {/* Gallery Lightbox Modal */}
            <Modal
                show={!!lightboxPhoto}
                onHide={() => setLightboxPhoto(null)}
                size="lg"
                centered
                className="gallery-lightbox-modal"
            >
                <Modal.Header closeButton style={{ borderBottom: '1px solid #eee', padding: '16px 24px' }}>
                    <div className="d-flex align-items-center gap-2">
                        {lightboxPhoto && (
                            <>
                                <span className="badge bg-primary px-3 py-2 rounded-pill" style={{ fontSize: '12px' }}>
                                    {lightboxPhoto.category}
                                </span>
                                <span className="text-muted small">
                                    <i className="far fa-calendar-alt me-1"></i> {lightboxPhoto.eventDate || (lightboxPhoto.createdAt || '').slice(0, 10)}
                                </span>
                            </>
                        )}
                    </div>
                </Modal.Header>
                <Modal.Body className="p-0 text-center bg-black" style={{ minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {lightboxPhoto && (
                        <img
                            src={lightboxPhoto.imagePath}
                            alt={lightboxPhoto.altText || lightboxPhoto.caption}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '75vh',
                                objectFit: 'contain',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                    )}
                </Modal.Body>
                {lightboxPhoto && (lightboxPhoto.caption || lightboxPhoto.altText) && (
                    <Modal.Footer className="bg-light d-flex justify-content-between align-items-center px-4 py-3">
                        <div className="text-start">
                            {lightboxPhoto.caption && (
                                <p className="mb-0 fw-semibold text-dark" style={{ fontSize: '15px' }}>
                                    {lightboxPhoto.caption}
                                </p>
                            )}
                            {lightboxPhoto.altText && lightboxPhoto.altText !== lightboxPhoto.caption && (
                                <small className="text-muted d-block mt-1">{lightboxPhoto.altText}</small>
                            )}
                        </div>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => setLightboxPhoto(null)}>
                            Close
                        </button>
                    </Modal.Footer>
                )}
            </Modal>

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
                                    <input type="tel" name="phone" placeholder="e.g. +91 98765 43210" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: '0' }} />
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
                                <div className="col-12 mt-2">
                                    <p className="text-muted" style={{ fontSize: '12px', lineHeight: '1.5', marginBottom: 0 }}>
                                        <i className="fas fa-shield-alt text-primary me-1"></i>
                                        By submitting this application, you consent to VRM AI Technology processing your personal data and resume for recruitment purposes in accordance with our <Link to="/privacy-policy" target="_blank" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                                    </p>
                                </div>
                                <div className="col-12 mt-3 text-center">
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
