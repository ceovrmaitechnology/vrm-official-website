import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IsoSealBadge from './IsoSealBadge';
import IsoCertificateModal from './IsoCertificateModal';
import './iso-certificate.css';

function IsoCertificateSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const shouldScroll = location.hash === '#iso-certifications' || 
                             location.state?.scrollToIso || 
                             window.location.hash === '#iso-certifications';

        if (shouldScroll) {
            const timer = setTimeout(() => {
                const element = document.getElementById('iso-certifications');
                if (element) {
                    const headerOffset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [location]);

    const handleViewCertificate = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section className="vrm-iso-section" id="iso-certifications">
            <div className="container">
                <div className="vrm-iso-card wow fadeInUp" data-wow-delay=".2s">
                    <div className="row align-items-center">
                        {/* Left Column: Badge, Heading, Description, Certificate Number */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <div className="vrm-iso-badge-pill">
                                ✦ CERTIFIED FOR EXCELLENCE
                            </div>
                            <h2 className="vrm-iso-title">ISO 9001:2015 Certified</h2>
                            <p className="vrm-iso-desc mb-3">
                                Committed to quality management, continuous improvement, and customer satisfaction.
                            </p>
                            <div className="vrm-iso-cert-no">
                                Certificate No. <strong>E20260749630</strong>
                            </div>
                        </div>

                        {/* Middle Column: ISO Seal Badge */}
                        <div className="col-lg-3 col-md-6 text-center mb-4 mb-md-0">
                            <div className="vrm-iso-seal-wrapper">
                                <IsoSealBadge size={140} dark={true} />
                            </div>
                        </div>

                        {/* Right Column: View Certificate CTA */}
                        <div className="col-lg-3 col-md-6 text-lg-end text-center">
                            <div className="vrm-iso-btn-wrapper">
                                <button
                                    onClick={handleViewCertificate}
                                    className="vrm-iso-btn"
                                >
                                    View Certificate <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Document Modal */}
            <IsoCertificateModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}

export default IsoCertificateSection;
