
import React from 'react';

function WhyChooseUsFooter() {
    return (
        <div className="rts-section-gap vrm-hero" style={{ background: '#050505', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="vrm-hero__glow" style={{ opacity: 0.5 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="vrm-hero__panel vrm-hero__why" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                    <div className="vrm-hero__section-header wow fadeInUp" data-wow-delay=".2s">
                        <p className="vrm-hero__eyebrow">Why Choose Us</p>
                        <h2>Built to deliver AI-first outcomes</h2>
                    </div>
                    <div className="vrm-footer-why__grid wow fadeInUp" data-wow-delay=".4s">
                        <div className="vrm-footer-why__card">
                            <div className="icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3>AI-First Product Company</h3>
                            <p>Born to innovate with AI at the core of everything we build.</p>
                        </div>
                        <div className="vrm-footer-why__card">
                            <div className="icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Custom + Product Solutions</h3>
                            <p>Tailored AI implementations combined with scalable product platforms.</p>
                        </div>
                        <div className="vrm-footer-why__card">
                            <div className="icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Secure & Compliant</h3>
                            <p>Enterprise-grade security and compliance built into every layer.</p>
                        </div>
                        <div className="vrm-footer-why__card">
                            <div className="icon">
                                <i className="fas fa-industry"></i>
                            </div>
                            <h3>Industry-Ready Deployment</h3>
                            <p>Rapid deployment models designed for real-world business impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUsFooter;
