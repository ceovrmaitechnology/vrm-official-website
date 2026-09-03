import React, { useState } from 'react';
import IsoSealBadge from './IsoSealBadge';
import IsoCertificateModal from './IsoCertificateModal';
import './iso-certificate.css';

function AboutQualityCompliance() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="vrm-about-iso-section">
            <div className="container">
                <div className="vrm-about-iso-card">
                    <div className="row align-items-center g-4">
                        {/* LEFT COLUMN: Section Eyebrow, Headline & Explanation */}
                        <div className="col-lg-6 col-md-12">
                            <div className="vrm-about-iso-left">
                                <span className="vrm-about-iso-eyebrow">QUALITY & COMPLIANCE</span>
                                <h2 className="vrm-about-iso-title">Built on Quality. Designed for Enterprise.</h2>
                                <p className="vrm-about-iso-desc">
                                    Our ISO 9001:2015 certification reflects our commitment to structured quality management, continuous improvement, and consistent delivery across our technology solutions.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Compact ISO 9001:2015 Certification Card */}
                        <div className="col-lg-6 col-md-12">
                            <div className="vrm-about-iso-badge-card">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <IsoSealBadge size={54} dark={true} />
                                    <div>
                                        <h4 className="vrm-about-iso-card-title">ISO 9001:2015 Certified</h4>
                                        <span className="vrm-about-iso-card-sub">Quality Management System</span>
                                    </div>
                                </div>
                                <div className="vrm-about-iso-meta-list">
                                    <div className="vrm-about-iso-meta-item">
                                        <span className="label">Certificate No.</span>
                                        <span className="val">E20260749630</span>
                                    </div>
                                    <div className="vrm-about-iso-meta-item">
                                        <span className="label">Valid Through</span>
                                        <span className="val">20 July 2029</span>
                                    </div>
                                </div>
                                <div className="mt-3 pt-2 border-top border-secondary-subtle">
                                    <button 
                                        onClick={() => setIsModalOpen(true)}
                                        className="vrm-about-iso-cta"
                                    >
                                        View Certificate <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Viewer Modal */}
            <IsoCertificateModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}

export default AboutQualityCompliance;
