import React from 'react';
import { Link } from 'react-router-dom';

function SuperintelligenceDirection({ withCtaBand = false }) {
    return (
        <>
            {/* Our Direction Section */}
            <section className="vrm-direction-section rts-section-gap" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <span className="vrm-direction-eyebrow" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', display: 'block', marginBottom: '14px' }}>
                                Engineering Philosophy
                            </span>
                            <h2 className="vrm-direction-title" style={{ fontSize: '36px', fontWeight: '800', color: '#11142c', marginBottom: '24px', lineHeight: '1.3' }}>
                                Our Direction: Superintelligent Business Operations
                            </h2>
                            <p className="vrm-direction-body mx-auto" style={{ fontSize: '18px', lineHeight: '1.75', color: '#475569', maxWidth: '840px', margin: 0 }}>
                                Superintelligence is where AI systems reason, plan and act with expert-level judgment across a whole business. We are building toward it one workflow at a time: voice agents that handle customer calls, retrieval systems that answer from your own documents, and ML models that learn from your data. Each system is built to be measured, secured and improved after launch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Optional integrated CTA band */}
            {withCtaBand && (
                <div className="vrm-cta-band" style={{ background: 'linear-gradient(135deg, #1b277c 0%, #11142c 100%)', padding: '70px 0', textAlign: 'center' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <h3 className="vrm-cta-band__text text-white mb-4" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1.4' }}>
                                    Ready to put intelligence to work in your business? Book a free AI assessment.
                                </h3>
                                <div>
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 34px', fontSize: '15px' }}>
                                        Book a Free AI Assessment <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SuperintelligenceDirection;
