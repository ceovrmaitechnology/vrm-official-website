import React from 'react';
import { Link } from 'react-router-dom';
import '../../footer.css';

function FooterOne() {
    return (
        <div className="vrm-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1: Company Info */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <Link to="/" className="vrm-footer-logo">
                                <img src="/assets/images/logo/logo.png" alt="VRM AI Technology" className="img-fluid" />
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
                                <a href="https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/" target="_blank" rel="noreferrer" className="vrm-social-link"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="vrm-social-link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/vrmaitechnology/" target="_blank" rel="noreferrer" className="vrm-social-link"><i className="fab fa-instagram"></i></a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="vrm-social-link"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <h5 className="vrm-footer-title">Contact</h5>
                            <ul className="vrm-footer-links">
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Email</span>
                                    <a href="mailto:contactus@vrmaitechnology.com" className="vrm-contact-value">contactus@vrmaitechnology.com</a>
                                </li>
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Sales</span>
                                    <a href="mailto:sales@vrmaitechnology.com" className="vrm-contact-value">sales@vrmaitechnology.com</a>
                                </li>
                                <li className="vrm-contact-link">
                                    <span className="vrm-contact-label">Phone</span>
                                    <a href="tel:+919876543210" className="vrm-contact-value">+91 81233 48355</a>
                                </li>
                            </ul>
                            <div className="vrm-footer-global mt-4">
                                <h6>Global Presence</h6>
                                <p>India | United States</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <h5 className="vrm-footer-title">Solutions</h5>

                            <h6 className="vrm-footer-sub-title">AI Consulting & Strategy</h6>
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
                        <div className="vrm-footer-widget">
                            <h5 className="vrm-footer-title">Products</h5>

                            <Link to="/products/workflow" className="vrm-footer-sub-title">Workflow.AI Modules</Link>
                            <ul className="vrm-footer-links">
                                <li><Link to="/products/workflow/screensage">ScreenSage</Link></li>
                                <li><Link to="/products/workflow/videosage">VideoSage</Link></li>
                                <li><Link to="/products/workflow/codesage">CodeSage</Link></li>
                            </ul>

                            <Link to="/products/growthflowai" className="vrm-footer-sub-title">GrowthFlowAI Suite</Link>
                            <ul className="vrm-footer-links">
                                <li><Link to="/business-acquisition-form">Business Acquisition</Link></li>
                                <li><Link to="/client-acquisition-form">Client Acquisition</Link></li>
                                <li><Link to="/job-applicant-form">Job Applicant</Link></li>
                                <li><Link to="/organization-form">Organization</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 5: Organization */}
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="vrm-footer-widget">
                            <h5 className="vrm-footer-title">Organization</h5>
                            <ul className="vrm-footer-links">
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/contactus#send-message">Support</Link></li>
                                <li><Link to="/contactus#send-message">Contact Us</Link></li>
                                <li><Link to="/contactus#locations">Locations</Link></li>
                            </ul>
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
        </div>
    );
}

export default FooterOne;
