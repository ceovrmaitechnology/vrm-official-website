import React from 'react'
import { Link } from 'react-router-dom';

function BannerOne() {
    return (
        <div>
            {/* Top Video Section - Full Screen */}
            <section className="vrm-hero rts-banner-area" id="banner" style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '30px', backgroundColor: '#ffffff' }}>
                <video
                    className="vrm-home-hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => console.log("✅ Video loaded")}
                    onPlay={() => console.log("▶️ Video playing")}
                    onError={(e) => console.log("❌ Video error", e)}
                >
                    <source
                        src="/assets/images/home/vrm-hero-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Content Overlay */}
                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="vrm-hero__actions wow fadeInUp" data-wow-delay=".2s">
                                <Link className="vrm-btn vrm-btn-primary vrm-hero-btn" to="/about-us">
                                    Know More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BannerOne
