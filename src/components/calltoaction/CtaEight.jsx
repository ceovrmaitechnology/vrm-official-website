import React from 'react'
import { Link } from 'react-router-dom'

function CtaEight() {
    return (
        <div>
            {/* cta section start */}
            <div className="rts-cta-section-start rts-section-gap cta-bg-h2">
                <div className="container">
                    <div className="row">
                        <div className="cta-h2-wrapper text-center">
                            <div className="icon">
                                <a href="/">
                                    <i className="fas fa-phone-alt" />
                                </a>
                            </div>
                            <div className="body">
                                <p className="info">
                                    Contact Our Agent For Any kind off Business Help{" "}
                                    <span>(24/7 Available)</span>
                                </p>
                                <a href="tel:+918123348355" className="number">
                                    +91 81233 48355
                                </a>
                                <Link to="/contactus" className="rts-btn btn-primary-2">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta section end */}
        </div>
    )
}

export default CtaEight