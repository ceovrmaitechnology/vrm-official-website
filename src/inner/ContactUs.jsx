import React, { useEffect, useState } from 'react';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import GlobalMap from '../components/map/GlobalMap';
import { useLocation } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../assets/css/contact-premium.css';

const ContactUs = () => {
    const location = useLocation();
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const getScrollTargetId = () => {
        if (location.state?.scrollToContact) {
            return 'send-message';
        }
        if (location.state?.scrollTo) {
            return location.state.scrollTo;
        }
        if (location.state?.scroll) {
            return location.state.scroll;
        }
        if (location.hash) {
            return location.hash.replace('#', '');
        }
        const params = new URLSearchParams(location.search);
        if (params.get('scroll')) {
            return params.get('scroll');
        }
        return 'send-message'; // default scroll target
    };

    const resolveScrollTargetId = (targetId) => {
        if (!targetId) return null;
        if (targetId === 'send-message' || targetId === 'send-message-section' || targetId === 'contact-form') {
            return 'contact-section-wrapper';
        }
        return targetId;
    };

    const scrollToElement = (element) => {
        if (!element) return false;
        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 96;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const scrollTarget = Math.max(elementTop - headerHeight - 16, 0);
        window.scrollTo({ top: scrollTarget, behavior: 'auto' });
        return true;
    };

    const scrollToSection = (targetId) => {
        const resolvedId = resolveScrollTargetId(targetId);
        if (!resolvedId) return false;
        const element = document.getElementById(resolvedId);
        return scrollToElement(element);
    };

    useEffect(() => {
        const targetId = getScrollTargetId();
        if (!targetId) return;

        // Perform initial scroll
        scrollToSection(targetId);

        // Perform follow-up scrolls to adjust for layout shifts (e.g. animations, stylesheet loads)
        const timeouts = [100, 300, 600, 1000].map(delay =>
            setTimeout(() => {
                scrollToSection(targetId);
            }, delay)
        );

        return () => timeouts.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            inquiryType: formData.get('inquiryType'),
            message: formData.get('message'),
            phone
        };

        if (!data.name || !data.email || !data.inquiryType || !data.message) {
            setStatus({ type: 'error', message: 'Please fill all required fields.' });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/contact' ,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            e.target.reset();
            setPhone('');
            setStatus({ type: 'success', message: 'Message sent successfully. Our team will contact you soon.' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-us-page basic-font-family">
            <HeaderOne className="header-white-text" />

            {/* 1. Premium Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--150 position-relative overflow-hidden">
                {/* Visual Blobs */}
                <div className="vrm-hero-blob bg-blob-1"></div>
                <div className="vrm-hero-blob bg-blob-2"></div>

                <div className="container position-relative z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <span className="vrm-suite-label text-white-50 wow fadeInUp" data-wow-delay=".1s">GET IN TOUCH</span>
                            <h1 className="title wow fadeInUp text-white display-3 fw-bold mt-3" data-wow-delay=".2s">
                                Let's Build Something <span className="text-gradient-gold">Extraordinary</span>
                            </h1>
                            <p className="disc wow fadeInUp text-white-50 mt-4 fs-5 mx-auto" data-wow-delay=".3s" style={{ maxWidth: '750px', lineHeight: '1.8' }}>
                                From AI strategy to full-scale implementation, we are your partners in innovation. Connect with us to explore how VRM AI can transform your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Get In Touch & Form Section - Floating Card Layout */}
            <div className="vrm-full-width-section bg-light ptb--100 position-relative" style={{ marginTop: '-80px', zIndex: '2' }}>
                <div className="container">
                    <div id="contact-section-wrapper" className="row g-5">
                        {/* Left Side: Contact Info with Decorative BG */}
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".2s">
                            <div className="contact-left-area pe-lg-5 pt-lg-5">
                                <h2 className="title fw-bold mb-4 text-dark display-6">Contact Information</h2>
                                <p className="disc mb-5 text-muted">
                                    Our team is available 24/7 to answer your queries. Reach out through any of our official channels
                                </p>

                                <div className="contact-details mt-5">
                                    {/* Email Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-box">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Email Us</h5>
                                            <p>For general inquiries and support</p>
                                            <a href="mailto:contactus@vrmaitechnology.com" className="contact-link">
                                                contactus@vrmaitechnology.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Visit Us Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-box">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Visit Us</h5>
                                            <p>Come see our innovation hub</p>
                                            <a 
                                                href="https://www.google.com/maps/search/?api=1&query=VRM+AI+Technology+(OPC)+Pvt.Ltd,+Door+No,209,+1ST+Floor,+No.147,+5th+St,+Poriyalar+Nagar,+Tiruppalai,+Madurai,+Tamil+Nadu+625014" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="contact-link"
                                            >
                                                VRM AI Technologies, Madurai & Bengaluru, India.
                                            </a>
                                        </div>
                                    </div>

                                    {/* Follow Us Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-box">
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Follow Us</h5>
                                            <div className="social-links-premium">
                                                <a href="https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/" target="_blank" rel="noreferrer" className="social-btn-premium"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="https://www.facebook.com/share/1Ck9vJyvW4/" target="_blank" rel="noreferrer" className="social-btn-premium"><i className="fab fa-facebook-f"></i></a>
                                                <a href="https://x.com/vrmaitechnology" target="_blank" rel="noreferrer" className="social-btn-premium"><i className="fab fa-twitter"></i></a>
                                                <a href="https://www.instagram.com/vrmaitechnology/" target="_blank" rel="noreferrer" className="social-btn-premium"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Premium Contact Form */}
                        <div id="send-message-section" className="col-lg-7 wow fadeInUp" data-wow-delay=".4s">
                            <div id="contact-form" className="contact-form-premium-wrapper">
                                <h3 className="mb-4 fw-bold">Send us a Message</h3>
                                {status.message && (
                                    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {status.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label">YOUR NAME</label>
                                            <input type="text" name="name" className="vrm-input-premium" placeholder="John Doe" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">EMAIL ADDRESS</label>
                                            <input type="email" name="email" className="vrm-input-premium" placeholder="john@company.com" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">PHONE NUMBER</label>
                                            <PhoneInput
                                                country={'in'}
                                                enableSearch={true}
                                                disableDropdown={true}
                                                value={phone}
                                                onChange={setPhone}
                                                inputClass="vrm-input-premium"
                                                containerClass="w-100"
                                                buttonClass="vrm-input-premium-btn"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">INQUIRY TYPE</label>
                                            <div className="position-relative">
                                                <select name="inquiryType" className="vrm-input-premium appearance-none bg-white" defaultValue="" required>
                                                    <option value="" disabled>Select Inquiry Type</option>
                                                    <option value="solutions">AI Solutions</option>
                                                    <option value="products">Products</option>
                                                    <option value="careers">Careers</option>
                                                    <option value="partnership">Partnership</option>
                                                </select>
                                                <i className="fas fa-chevron-down position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">MESSAGE</label>
                                            <textarea name="message" className="vrm-input-premium" rows="5" placeholder="Tell us more about your project needs..." required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="vrm-btn-premium-submit w-100" disabled={loading}>
                                                {loading ? 'Sending...' : <>Send Message <i className="far fa-paper-plane ms-2"></i></>}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--50 text-white position-relative overflow-hidden p-0 m-0">
                <div className="w-100 p-0 m-0" style={{ opacity: '0.8' }}>
                    <GlobalMap />
                </div>
            </div>

            {/* 4. CIN Section with Premium Hover Cards */}
            <div id="locations" className="vrm-full-width-section bg-white ptb--100">
                <div className="container">
                    <div className="row mb-5 text-center">
                        <div className="col-12">
                            <div className="d-inline-block px-5 py-3 rounded-pill bg-light border mb-4">
                                <h5 className="mb-0 fw-bold text-dark">Corporate Identity Number (CIN) : <span className="text-primary">U63999KA2026OPC215399</span></h5>
                            </div>
                            <h2 className="title display-6 fw-bold mb-3">Official Registration</h2>
                            <p className="disc text-muted mx-auto" style={{ maxWidth: '800px' }}>
                                VRM AI Technology Private Limited is rigorously compliant and officially registered under the Ministry of Corporate Affairs.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Registered Address */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-feature-card text-center h-100">
                                <div className="icon-wrapper mb-4">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h4 className="title mb-3">Development Center</h4>
                                <p className="disc text-muted">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=VRM+AI+Technology+(OPC)+Pvt.Ltd,+Door+No,209,+1ST+Floor,+No.147,+5th+St,+Poriyalar+Nagar,+Tiruppalai,+Madurai,+Tamil+Nadu+625014"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted text-decoration-none hover-primary"
                                    >
                                        Door No,209, 1ST Floor, No.147, 5th St,<br />
                                        Poriyalar Nagar, Tiruppalai, Madurai,<br />
                                        Tamil Nadu 625014
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Corporate Office */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="vrm-feature-card text-center h-100">
                                <div className="icon-wrapper mb-4">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h4 className="title mb-3">Corporate Office</h4>
                                <p className="disc text-muted">
                                    <a
                                        href="https://maps.app.goo.gl/5pnUj58biWePbEuUA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted text-decoration-none hover-primary"
                                    >
                                        GoodWorks Infinity Park,<br />
                                        21, 2nd main Rd, near 21, Electronic City Phase I, Electronic City,<br />
                                        Bengaluru, Karnataka 560100.
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="vrm-feature-card text-center h-100">
                                <div className="icon-wrapper mb-4">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h4 className="title mb-3">Working Hours</h4>
                                <p className="disc text-muted">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday - Sunday: Closed<br />
                                    <span className="fw-bold text-primary mt-2 d-block">Support: 24/7 (Email)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Pre-Footer CTA */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--100 text-center position-relative overflow-hidden">
                <div className="vrm-hero-blob bg-blob-2" style={{ top: '-50px', left: '10%' }}></div>
                <div className="container position-relative z-index-1">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title text-white mb-4 fw-bold display-4">Ready to Innovate?</h2>
                            <p className="text-white-50 mb-5 mx-auto fs-5" style={{ maxWidth: '600px' }}>
                                Let's discuss your vision and how our AI solutions can bring it to life.
                            </p>
                            <a href="mailto:contactus@vrmaitechnology.com" className="vrm-btn bg-white text-primary btn-lg shadow-lg">
                                Start the Conversation <i className="far fa-comment-alt ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Our Offices - Dark Cards Section (New Request) */}
            <div className="vrm-full-width-section bg-light ptb--100">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <span className="vrm-suite-label text-primary">OUR LOCATIONS</span>
                            <h2 className="title fw-bold text-dark mt-2">Visit Our Offices</h2>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* USA Card */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-office-card">
                                <div className="office-card-header">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="office-flag-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="48" height="36" className="vrm-flag-icon">
                                                <g fillRule="evenodd">
                                                    <path fill="#bd3d44" d="M0 0h640v480H0" />
                                                    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
                                                    <path fill="#192f5d" d="M0 0h296v258H0" />
                                                    <g fill="#fff">
                                                        <g id="us-star">
                                                            <path id="s" d="M247 11c0 1.6-1.3 3-2.9 3L243 17l2.1-5-4.4 3 5.4-.1-4.4-3 5.4-.1L247 17l-1-6 1-3z" />
                                                            <use xlinkHref="#s" y="42" />
                                                            <use xlinkHref="#s" y="84" />
                                                            <use xlinkHref="#s" y="126" />
                                                            <use xlinkHref="#s" y="168" />
                                                        </g>
                                                        <use xlinkHref="#us-star" x="25" />
                                                        <use xlinkHref="#us-star" x="50" />
                                                        <use xlinkHref="#us-star" x="75" />
                                                        <use xlinkHref="#us-star" x="100" />
                                                        <use xlinkHref="#us-star" x="125" />
                                                        <g id="us-star-row-2">
                                                            <use xlinkHref="#s" x="12.5" y="21" />
                                                            <use xlinkHref="#s" x="37.5" y="21" />
                                                            <use xlinkHref="#s" x="62.5" y="21" />
                                                            <use xlinkHref="#s" x="87.5" y="21" />
                                                            <use xlinkHref="#s" x="112.5" y="21" />
                                                        </g>
                                                        <use xlinkHref="#us-star-row-2" y="42" />
                                                        <use xlinkHref="#us-star-row-2" y="84" />
                                                        <use xlinkHref="#us-star-row-2" y="126" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <h4 className="office-card-title">United States</h4>
                                    </div>
                                    <div className="office-location-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <ul className="office-details-list">
                                    <li>
                                        <i className="fas fa-location-arrow"></i>
                                        <span>San Francisco, CA 94107, United States</span>
                                    </li>
                                    {/* <li>
                                        <i className="fas fa-phone-alt"></i>
                                        <span>+91 8123348355</span>
                                    </li> */}
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>contactus@vrmaitechnology.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* India Card */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="vrm-office-card">
                                <div className="office-card-header">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="office-flag-wrapper">
                                            <img
                                                src="/assets/images/india.png"
                                                alt="Flag of India"
                                                className="vrm-flag-icon"
                                                style={{ width: '48px', height: 'auto', borderRadius: '4px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <h4 className="office-card-title">India</h4>
                                    </div>
                                    <div className="office-location-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <ul className="office-details-list">
                                    <li>
                                        <i className="fas fa-location-arrow"></i>
                                        <span>
                                            <a
                                                href="https://maps.app.goo.gl/5pnUj58biWePbEuUA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white text-decoration-none hover-primary"
                                            >
                                                GoodWorks Infinity Park,<br />21, 2nd main Rd, near 21, Electronic City Phase I, Electronic City,<br />Bengaluru, Karnataka 560100.
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-alt"></i>
                                        <span>+91 8123348355</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>contactus@vrmaitechnology.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
};

export default ContactUs;