import React from 'react'
import { Link } from 'react-router-dom';

function CallToActionTwo() {
    return (
        <div>
            <>
                {/* rts cta area start */}
                <div className="rts-cta-area ptb--100 rts-cta-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cta-three-wrapper">
                                    <h4 className="title">
                                        Need Any Business Consultancy? <Link to="/contactus">Contact With Us</Link>
                                    </h4>
                                    <Link className="rts-btn btn-secondary-3" to="/contactus">
                                        Lets Work Together
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default CallToActionTwo