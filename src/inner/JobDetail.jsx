import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import { Modal } from 'react-bootstrap';
import '../careers.css';

const CANONICAL_ORIGIN = 'https://www.vrmaitechnology.com';

function JobDetail() {
    const { slug } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);
        setError(null);

        fetch(`/api/careers/jobs/${slug}`)
            .then(res => {
                if (!res.ok && res.status !== 200) {
                    throw new Error('Position not found');
                }
                return res.json();
            })
            .then(data => {
                if (isMounted) {
                    if (data && data.success && data.job) {
                        setJob(data.job);
                    } else {
                        setError('Position not found');
                    }
                }
            })
            .catch(err => {
                if (isMounted) setError(err.message || 'Failed to load position');
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        return () => { isMounted = false; };
    }, [slug]);

    const handleCloseModal = () => {
        setShowModal(false);
        setSubmitStatus({ type: '', message: '' });
    };

    const handleOpenModal = () => {
        setSubmitStatus({ type: '', message: '' });
        setShowModal(true);
    };

    const handleSubmitApplication = async (e) => {
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
                setSubmitStatus({
                    type: 'success',
                    message: 'Application submitted successfully! Our talent acquisition team will review your profile shortly.'
                });
                formElement.reset();
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to submit application. Please send your resume to contactus@vrmaitechnology.com.'
                });
            }
        } catch (err) {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please email your resume directly to contactus@vrmaitechnology.com.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="job-detail-page">
                <Helmet>
                    <title>Loading Opportunity | Careers | VRM AI Technology</title>
                </Helmet>
                <HeaderOne className="careers-header-panel" />
                <div className="container py-5 my-5 text-center">
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading job opening...</span>
                    </div>
                    <p className="mt-3 text-muted">Retrieving position details...</p>
                </div>
                <FooterOne />
            </div>
        );
    }

    if (error || !job) {
        return (
            <div className="job-detail-page">
                <Helmet>
                    <title>Job Not Found | Careers | VRM AI Technology</title>
                    <meta name="robots" content="noindex, follow" />
                </Helmet>
                <HeaderOne className="careers-header-panel" />
                <div className="container py-5 my-5 text-center">
                    <div className="p-5 bg-white rounded-3 shadow-sm border mx-auto" style={{ maxWidth: '650px' }}>
                        <i className="far fa-briefcase text-muted mb-3" style={{ fontSize: '48px' }}></i>
                        <h2 className="mb-3" style={{ color: '#1c2539' }}>Position Not Available</h2>
                        <p className="text-muted mb-4">
                            The job opening you are looking for is either no longer available or the link is incorrect.
                            You can explore all our current openings or send your resume to our team.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/careers" className="rts-btn btn-primary">
                                View Open Roles
                            </Link>
                            <a href="mailto:contactus@vrmaitechnology.com" className="rts-btn btn-secondary">
                                Contact Team
                            </a>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </div>
        );
    }

    const isClosed = job.status === 'closed' || job.closed;
    const pageTitle = `${job.title} | Careers | VRM AI Technology`;
    const metaDescription = (job.shortDescription || `${job.title} job opening at VRM AI Technology in ${job.location}. Apply today.`).slice(0, 155);
    const canonicalUrl = `${CANONICAL_ORIGIN}/careers/${job.slug}`;

    const employmentTypeSchema = job.employmentType === 'Full-time' ? 'FULL_TIME' :
                                 job.employmentType === 'Internship' ? 'INTERN' : 'CONTRACTOR';

    const jobPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.shortDescription || job.title,
        datePosted: (job.postedAt || job.createdAt || new Date().toISOString()).slice(0, 10),
        validThrough: (job.validThrough || new Date(Date.now() + 90 * 86400000).toISOString()).slice(0, 10),
        employmentType: employmentTypeSchema,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'VRM AI Technology',
            sameAs: CANONICAL_ORIGIN,
            logo: `${CANONICAL_ORIGIN}/assets/images/logo/logo-header.webp`
        },
        jobLocation: job.location === 'Remote' ? undefined : {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location === 'Bengaluru' ? 'Bengaluru' : 'Madurai',
                addressRegion: job.location === 'Bengaluru' ? 'Karnataka' : 'Tamil Nadu',
                addressCountry: 'IN'
            }
        },
        applicantLocationRequirements: job.location === 'Remote' ? {
            '@type': 'Country',
            name: 'India'
        } : undefined,
        jobLocationType: job.location === 'Remote' ? 'TELECOMMUTE' : undefined,
        experienceRequirements: job.experience || undefined,
        occupationalCategory: job.department || undefined
    };

    return (
        <div className="job-detail-page">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                {isClosed && <meta name="robots" content="noindex, follow" />}

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="VRM AI Technology" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={metaDescription} />

                {/* JobPosting Schema */}
                {!isClosed && (
                    <script type="application/ld+json">
                        {JSON.stringify(jobPostingSchema)}
                    </script>
                )}
            </Helmet>

            <HeaderOne className="careers-header-panel" />

            {/* Job Header Hero */}
            <div className="careers-hero py-5" style={{ background: 'linear-gradient(135deg, #0b132b 0%, #1c2539 100%)' }}>
                <div className="container">
                    <nav aria-label="breadcrumb" className="mb-3">
                        <ol className="breadcrumb mb-0" style={{ background: 'transparent' }}>
                            <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/careers" className="text-white-50 text-decoration-none">Careers</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{job.title}</li>
                        </ol>
                    </nav>

                    <div className="row align-items-center justify-content-between g-4">
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="badge bg-primary px-3 py-2" style={{ fontSize: '13px' }}>{job.department}</span>
                                <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '13px' }}>{job.employmentType || 'Full-time'}</span>
                                {isClosed && (
                                    <span className="badge bg-danger px-3 py-2" style={{ fontSize: '13px' }}>Position Closed</span>
                                )}
                            </div>
                            <h1 className="careers-hero__title text-white mb-3" style={{ fontSize: '38px', fontWeight: '800' }}>
                                {job.title}
                            </h1>
                            <div className="d-flex flex-wrap gap-4 text-white-50 small">
                                <span><i className="far fa-map-marker-alt text-primary me-2"></i> {job.location}</span>
                                <span><i className="far fa-briefcase text-primary me-2"></i> {job.experience}</span>
                                {job.postedAt && (
                                    <span><i className="far fa-calendar-alt text-primary me-2"></i> Posted {new Date(job.postedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            {isClosed ? (
                                <button className="rts-btn btn-secondary disabled" disabled style={{ opacity: 0.65 }}>
                                    Position Closed
                                </button>
                            ) : (
                                <button className="rts-btn btn-primary" onClick={handleOpenModal} style={{ padding: '14px 30px', fontSize: '16px' }}>
                                    Apply for this Role
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Position Closed Notice Banner if Closed */}
            {isClosed && (
                <div className="bg-warning-subtle border-bottom py-3">
                    <div className="container text-center">
                        <p className="mb-0 text-dark fw-medium">
                            <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                            This position has been closed and is no longer accepting new applications.
                            Please check our <Link to="/careers" className="text-primary fw-bold text-decoration-underline">Careers Page</Link> for other opportunities or email your resume to <a href="mailto:contactus@vrmaitechnology.com" className="text-primary fw-bold">contactus@vrmaitechnology.com</a>.
                        </p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="py-5" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm border mb-4">
                                <h3 className="h4 fw-bold mb-3" style={{ color: '#1c2539' }}>Role Overview</h3>
                                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                                    {job.shortDescription}
                                </p>

                                {job.responsibilities && job.responsibilities.length > 0 && (
                                    <div className="mt-5">
                                        <h3 className="h4 fw-bold mb-3" style={{ color: '#1c2539' }}>Key Responsibilities</h3>
                                        <ul className="list-unstyled mb-0" style={{ color: '#475569' }}>
                                            {job.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="d-flex align-items-start mb-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                                                    <i className="fas fa-check-circle text-primary me-3 mt-1" style={{ fontSize: '16px', flexShrink: 0 }}></i>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {job.requirements && job.requirements.length > 0 && (
                                    <div className="mt-5">
                                        <h3 className="h4 fw-bold mb-3" style={{ color: '#1c2539' }}>Candidate Requirements</h3>
                                        <ul className="list-unstyled mb-0" style={{ color: '#475569' }}>
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="d-flex align-items-start mb-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                                                    <i className="fas fa-arrow-right text-primary me-3 mt-1" style={{ fontSize: '14px', flexShrink: 0 }}></i>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {!isClosed && (
                                    <div className="mt-5 pt-4 border-top text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                                        <div>
                                            <h4 className="h5 fw-bold mb-1" style={{ color: '#1c2539' }}>Interested in this position?</h4>
                                            <p className="text-muted small mb-0">Submit your application today and build the future of AI with us.</p>
                                        </div>
                                        <button className="rts-btn btn-primary" onClick={handleOpenModal} style={{ padding: '12px 28px' }}>
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="bg-white p-4 rounded-3 shadow-sm border mb-4">
                                <h4 className="h5 fw-bold mb-4" style={{ color: '#1c2539' }}>Position Summary</h4>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted small">Department</span>
                                        <span className="fw-semibold text-dark small">{job.department}</span>
                                    </li>
                                    <li className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted small">Location</span>
                                        <span className="fw-semibold text-dark small">{job.location}</span>
                                    </li>
                                    <li className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted small">Employment Type</span>
                                        <span className="fw-semibold text-dark small">{job.employmentType || 'Full-time'}</span>
                                    </li>
                                    <li className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted small">Experience</span>
                                        <span className="fw-semibold text-dark small">{job.experience}</span>
                                    </li>
                                    <li className="d-flex justify-content-between py-2">
                                        <span className="text-muted small">Contact</span>
                                        <a href="mailto:contactus@vrmaitechnology.com" className="fw-semibold text-primary small">
                                            contactus@vrmaitechnology.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-4 rounded-3 shadow-sm border">
                                <h4 className="h5 fw-bold mb-3" style={{ color: '#1c2539' }}>Why Join VRM AI?</h4>
                                <p className="text-muted small mb-3">
                                    Be part of a born-GenAI powerhouse solving complex industry challenges with autonomous agentic intelligence.
                                </p>
                                <div className="d-flex flex-column gap-2 small">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fas fa-check text-primary"></i>
                                        <span>Cutting-edge Agentic AI platforms</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fas fa-check text-primary"></i>
                                        <span>High-impact cross-functional work</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fas fa-check text-primary"></i>
                                        <span>Continuous learning and mentorship</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-top">
                                    <Link to="/careers" className="text-primary fw-semibold small text-decoration-none d-flex align-items-center gap-1">
                                        <i className="far fa-arrow-left"></i> View All Openings
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="careers-modal">
                <Modal.Header closeButton style={{ borderBottom: '1px solid #eee', padding: '20px 30px' }}>
                    <Modal.Title style={{ fontSize: '22px', fontWeight: '700', color: '#1c2539' }}>
                        Apply for <span style={{ color: 'var(--color-primary)' }}>{job.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: '30px' }}>
                    <p style={{ color: '#5D666F', marginBottom: '25px', fontSize: '15px' }}>
                        Please complete the application form below. Our recruiting team will review your profile and contact you.
                    </p>
                    {submitStatus.message && (
                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} style={{ borderRadius: '8px' }}>
                            {submitStatus.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmitApplication}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-dark">Full Name <span className="text-danger">*</span></label>
                                <input type="text" name="fullName" placeholder="e.g. John Doe" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: 0 }} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-dark">Email Address <span className="text-danger">*</span></label>
                                <input type="email" name="email" placeholder="e.g. john@example.com" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: 0 }} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-dark">Phone Number <span className="text-danger">*</span></label>
                                <input type="text" name="phone" placeholder="+91 73977 51037" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: 0 }} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-dark">Experience <span className="text-danger">*</span></label>
                                <select name="experience" required style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: 0, width: '100%', backgroundColor: '#fff' }}>
                                    <option value="">Select Experience</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold small text-dark">Position</label>
                                <input type="text" name="position" value={job.title} readOnly style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', height: 'auto', marginBottom: 0, backgroundColor: '#f8f9fa' }} />
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold small text-dark">Resume / CV (PDF, DOC, DOCX) <span className="text-danger">*</span></label>
                                <input className="form-control" name="resume" type="file" accept=".pdf,.doc,.docx" required style={{ padding: '10px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px' }} />
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold small text-dark">Cover Letter (Optional)</label>
                                <textarea name="coverLetter" placeholder="Briefly describe why you are interested in this position..." rows={4} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 15px', marginBottom: 0, fontSize: '14px' }} />
                            </div>
                            <div className="col-12 mt-4 text-center">
                                <button type="submit" disabled={isSubmitting} className="rts-btn btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '8px', opacity: isSubmitting ? 0.7 : 1 }}>
                                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <FooterOne />
        </div>
    );
}

export default JobDetail;

