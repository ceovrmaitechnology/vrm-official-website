import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IsoSealBadge from '../iso/IsoSealBadge';
import IsoCertificateModal from '../iso/IsoCertificateModal';
import '../../footer.css';
import '../iso/iso-certificate.css';

function FooterOne() {
    const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCertificationsClick = (e) => {
        e.preventDefault();
        if (window.location.pathname === '/' || window.location.pathname === '') {
            const element = document.getElementById('iso-certifications');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                window.history.pushState(null, '', '/#iso-certifications');
            }
        } else {
            // Navigate to home and trigger smooth scroll to ISO section
            navigate('/', { state: { scrollToIso: true } });
        }
    };

    return (
        <div className="vrm-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1: Company Info */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <Link to="/" className="vrm-footer-logo">
                                <picture><source srcSet="/assets/images/logo/logo.webp" type="image/webp" /><img src="/assets/images/logo/logo.png" alt="VRM AI Technology" className="img-fluid" width="197" height="92" /></picture>
                            </Link>
                            <p className="vrm-footer-desc">
                                We delivered intelligent GenAI, automation platforms, and machine learning systems for modern businesses to drive measurable impact.
                            </p>
                            <div className="vrm-footer-address">
                                <h6>Registered Office</h6>
                                <p>
                                    VRM AI Technology Private Limited<br />
                                    GoodWorks Infinity Park, 21, 2nd main Rd,<br />
                                    Electronic City Phase I,<br />
                                    Bengaluru, Karnataka 560100
                                </p>
                            </div>
                            <div className="vrm-social-icons">
                                <a href="https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/" target="_blank" rel="noreferrer" className="vrm-social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://x.com/vrmaitechnology" target="_blank" rel="noreferrer" className="vrm-social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/vrmaitechnology/" target="_blank" rel="noreferrer" className="vrm-social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/share/1Ck9vJyvW4/" target="_blank" rel="noreferrer" className="vrm-social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <h5 className="vrm-footer-title">Contact</h5>
                            <ul className="vrm-footer-links">
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Email</span>
                                    <a href="mailto:contactus@vrmaitechnology.com" className="vrm-contact-value" style={{ fontSize: '13px' }}>contactus@vrmaitechnology.com</a>
                                </li>
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Sales</span>
                                    <a href="mailto:sales@vrmaitechnology.com" className="vrm-contact-value" style={{ fontSize: '13px' }}>sales@vrmaitechnology.com</a>
                                </li>
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">HR</span>
                                    <a href="mailto:hr@vrmaitechnology.com" className="vrm-contact-value" style={{ fontSize: '13px' }}>hr@vrmaitechnology.com</a>
                                </li>
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Phone</span>
                                    <a href="tel:+918123348355" className="vrm-contact-value" style={{ fontSize: '13px' }}>+91 81233 48355</a>
                                </li>
                            </ul>
                            <div className="vrm-footer-global mt-4">
                                <h6>Our Locations</h6>
                                <p>India (Bengaluru & Madurai)</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget vrm-footer-widget-solutions">
                            <h5 className="vrm-footer-title">Solutions</h5>

                            <h6 className="vrm-footer-sub-title" style={{ marginTop: '0px' }}>AI Consulting & Strategy</h6>
                            <ul className="vrm-footer-links">
                                <li><Link to="/solutions/ai-consulting-services">AI Consulting Services</Link></li>
                                <li><Link to="/solutions/ai-integration-services">AI Integration Services</Link></li>
                            </ul>

                            <h6 className="vrm-footer-sub-title">AI Development</h6>
                            <ul className="vrm-footer-links">
                                <li><Link to="/solutions/ai-development-services">AI Development Services</Link></li>
                                <li><Link to="/solutions/ai-chatbot-development">AI Chatbot Development</Link></li>
                            </ul>

                            <h6 className="vrm-footer-sub-title">AI & Data</h6>
                            <ul className="vrm-footer-links">
                                <li><Link to="/solutions/ai-calling-agent">AI Calling Agent</Link></li>
                                <li><Link to="/solutions/machine-learning-services">Machine Learning Services</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Products */}
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget vrm-footer-widget-products">
                            <h5 className="vrm-footer-title">Products</h5>
                             <ul className="vrm-footer-links">
                                <li className="vrm-footer-dropdown" style={{ marginBottom: '18px' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <Link to="/products/workflow" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            Workflow.AI
                                        </Link>
                                        <span 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setIsWorkflowOpen(!isWorkflowOpen);
                                            }}
                                            style={{ 
                                                cursor: 'pointer', 
                                                padding: '5px 10px', 
                                                display: 'inline-flex', 
                                                alignItems: 'center' 
                                            }}
                                        >
                                            <i className="far fa-chevron-down vrm-footer-chevron" style={{ 
                                                fontSize: '9px', 
                                                transition: 'transform 0.3s',
                                                transform: isWorkflowOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}></i>
                                        </span>
                                    </div>
                                    <ul className={`vrm-footer-dropdown-menu ${isWorkflowOpen ? 'is-open' : ''}`} style={{ listStyle: 'none', paddingLeft: '15px' }}>
                                        <li style={{ marginBottom: '8px' }}><Link to="/products/workflow/xpress-screening" style={{ fontSize: '13px' }}>Xpress Screening</Link></li>
                                        <li style={{ marginBottom: '8px' }}><Link to="/products/workflow/screensage" style={{ fontSize: '13px' }}>ScreenSage</Link></li>
                                        <li style={{ marginBottom: '8px' }}><Link to="/products/workflow/videosage" style={{ fontSize: '13px' }}>VideoSage</Link></li>
                                        <li style={{ marginBottom: '0px' }}><Link to="/products/workflow/codesage" style={{ fontSize: '13px' }}>CodeSage</Link></li>
                                    </ul>
                                </li>
                                <li style={{ marginBottom: '18px' }}>
                                    <Link to="/products/aibuddy" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI Buddy</Link>
                                </li>
                                <li style={{ marginBottom: '18px' }}>
                                    <Link to="/products/people-connect" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>People Connect (Global)</Link>
                                </li>
                                <li style={{ marginBottom: '18px' }}>
                                    <Link to="/products/exitinterview" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Exit Intelligence</Link>
                                </li>
                                <li style={{ marginBottom: '18px' }}>
                                    <Link to="/products/whatsapp" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Lead Connect</Link>
                                </li>
                                <li style={{ marginBottom: '18px' }}>
                                    <Link to="/products/visionix" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Visionix AI</Link>
                                </li>
                                <li style={{ marginBottom: '0px' }}>
                                    <Link to="/products/vrm-real-estate" style={{ fontWeight: '700', color: '#11142c', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>VRM Real Estate</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 5: Organization & Quality & Compliance */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget vrm-footer-widget-organization">
                            <h5 className="vrm-footer-title">Organization</h5>
                            <ul className="vrm-footer-links">
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><a href="/#iso-certifications" onClick={handleCertificationsClick}>Certifications</a></li>
                                <li><Link to="/contactus#send-message">Support</Link></li>
                                <li><Link to="/contactus#send-message">Contact Us</Link></li>
                                <li><Link to="/contactus#locations">Locations</Link></li>
                            </ul>

                            {/* CHANGE 1 — CREATE A "QUALITY & COMPLIANCE" AREA */}
                            <h5 className="vrm-footer-title" style={{ marginTop: '24px', marginBottom: '12px' }}>Quality & Compliance</h5>

                            {/* CHANGE 2 & 3 — ISO CERTIFICATION CARD */}
                            <div className="vrm-footer-iso-box">
                                <div style={{ flexShrink: 0 }}>
                                    <IsoSealBadge size={52} dark={true} />
                                </div>
                                <div className="vrm-footer-iso-text">
                                    <h6 className="vrm-footer-iso-title">ISO 9001:2015 Certified</h6>
                                    <div className="vrm-footer-iso-subtitle">Quality Management System</div>
                                    <div className="vrm-footer-iso-num">Certificate No. E20260749630</div>
                                    <div className="vrm-footer-iso-num">Valid through 20 July 2029</div>
                                    {/* CHANGE 4 — VIEW CERTIFICATE */}
                                    <button 
                                        onClick={() => setIsModalOpen(true)} 
                                        className="vrm-footer-iso-link"
                                    >
                                        View Certificate <i className="fas fa-arrow-right" style={{ fontSize: '10px' }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="vrm-footer-bottom">
                <div className="container">
                    <div className="vrm-copyright">
                        <p className="vrm-copyright-text">
                            Copyright &copy; 2026 VRM AI Technology. All rights reserved.
                        </p>
                        <div className="vrm-footer-policy">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <span style={{ color: '#333' }}>|</span>
                            <Link to="/terms-conditions">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Document Modal */}
            <IsoCertificateModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}

export default FooterOne;
