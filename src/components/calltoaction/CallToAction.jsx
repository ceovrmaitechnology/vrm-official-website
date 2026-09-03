import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
    return (
        <div>

            {/* cta section start */}
            <div className="rts-cta-section-start rts-section-gap vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="cta-h2-wrapper text-center">
                            <div className="icon">
                                <a href="/">
                                    <i className="fas fa-phone-alt" style={{ color: '#fff' }} />
                                </a>
                            </div>
                            <div className="body">
                                <p className="info text-white">
                                    Contact Our AI Agents For Business Solutions{" "}
                                    <span style={{ color: '#a5b4fc' }}>(24/7 Available)</span>
                                </p>
                                <a href="tel:+918123348355" className="number text-white">
                                    +91 81233 48355
                                </a>
                                <Link to="/contactus" className="rts-btn btn-primary-2" style={{ background: '#fff', color: '#1b277c' }}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CallToAction