import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wow.js';

function Visionix() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/visionix/visionix-image.png",
        "/assets/images/visionix/visionix-image-2.png",
        "/assets/images/visionix/visionix-image-3.png",
        "/assets/images/visionix/visionix-image-4.png"
    ];

    return (
        <div className="visionix-page basic-font-family">
            <HeaderOne />
            <Helmet>
                <title>Visionix AI | Facial Recognition & Verification | VRM AI</title>
                <meta name="description" content="Automate security, attendance, and biometric verification with Visionix AI face recognition engine." />
                <meta property="og:title" content="Visionix AI — Face Recognition & Biometric Verification" />
                <meta property="og:description" content="Automate security, attendance, and biometric verification with Visionix AI face recognition engine." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/visionix" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Visionix AI — Face Recognition & Biometric Verification" />
                <meta name="twitter:description" content="Automate security, attendance, and biometric verification with Visionix AI face recognition engine." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>

            {/* 1. Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    Visionix AI
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Automate security, attendance, and biometric verification with Visionix AI face recognition engine. Our visual intelligence platform uses deep learning models to identify, match, and verify individuals with high accuracy and low latency.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost">
                                        Schedule Consultation <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/visionix/visionix-image.png" alt="Visionix AI Face Recognition Dashboard" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose Visionix AI */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Key Benefits</span>
                                <h2 className="title">Why Choose Visionix AI?</h2>
                                <p className="disc mt-3">
                                    Traditional security gates and manual attendance logs create operational bottlenecks and compromise accuracy. Visionix AI replaces manual processes with real-time biometric identification, scaling verification speeds with low latency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-eye", title: "Real-Time Detection", desc: "Scan and detect faces within milliseconds, handling multiple detections concurrently." },
                            { icon: "fal fa-shield-alt", title: "Liveness Anti-Spoofing", desc: "Identify and prevent spoofing attempts utilizing advanced depth and physical motion analysis." },
                            { icon: "fal fa-fingerprint", title: "Biometric Integration", desc: "Easily integrate facial matches into legacy entry points, security gates, and mobile portals." },
                            { icon: "fal fa-chart-bar", title: "Verification Analytics", desc: "Track employee attendance logs, check-ins, and guest volume through a central panel." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-feature-card text-center">
                                    <div className="icon-wrapper">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h5 className="title">{item.title}</h5>
                                    <p className="disc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. See Visionix AI in Action */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See Visionix AI in Action</h2>
                                <p className="disc mt-3">Observe how the facial mesh technology maps features and authenticates access in real time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                                <video width="100%" controls preload="metadata">
                                    <source src="/assets/images/visionix/visionix-promo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Interface Gallery */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Visual Tour</span>
                                <h2 className="title">Interface Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                observer={true}
                                observeParents={true}
                                touchStartPreventDefault={false}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 2 },
                                }}
                                className="vrm-equal-height-swiper"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="gallery-item wow fadeInUp" data-wow-delay={`.${index + 2}s`} style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
                                            <img src={img} alt={`Visionix AI Interface Dashboard ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. What We’ve Built for You */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">What We’ve Built for You</h2>
                                <p className="disc mt-3">An intelligent facial scanning sandbox designed to scale enterprise visual security.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-eye", title: "Biometric Matching Nodes", desc: "Connect high-speed facial matching nodes with low latency to existing IP cameras." },
                            { icon: "fal fa-shield-alt", title: "Security Spoof Prevention", desc: "Block spoofing attempts using photos, videos, or 3D masks automatically." },
                            { icon: "fal fa-fingerprint", title: "Database Sync Bot", desc: "Synchronize identity cards, staff credentials, and security records instantly." },
                            { icon: "fal fa-chart-bar", title: "Attendance Dashboard", desc: "Generate automatic, daily audit trails and visual logs for operational integrity." }
                        ].map((feature, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                                <div className="vrm-feature-card text-center">
                                    <div className="icon-wrapper">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h5 className="title">{feature.title}</h5>
                                    <p className="disc">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 7. What We Can Offer */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">What We Can Offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { title: "24/7 Biometric Security", icon: "fal fa-clock" },
                            { title: "Scalable Matching Nodes", icon: "fal fa-road" },
                            { title: "Enterprise Verification Reports", icon: "fal fa-chart-pie" },
                            { title: "Secure API Access Logs", icon: "fal fa-network-wired" }
                        ].map((offer, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                                <div className="offer-card text-center p-4" style={{ border: '1px solid #eaeaea', borderRadius: '15px', height: '100%', transition: 'all 0.3s' }}>
                                    <div className="icon mb-3">
                                        <i className={`${offer.icon} fa-3x`} style={{ color: '#3B4ECC' }}></i>
                                    </div>
                                    <h5 className="title">{offer.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. Partnering for Long-Term Success */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp">Scale Your Biometric Verification</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Visionix AI integrates into your enterprise security workflow to automate identity verification. Our platform scales across regional offices and facilities, delivering secure visual authentication metrics to maintain high-security standards.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost text-white">
                                        Schedule Consultation <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail wow fadeInUp mt-5 mt-lg-0" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: '85%', margin: '0 auto' }}>
                                <img src="/assets/images/service/partnership-indian.png" alt="Enterprise Partnership" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default Visionix;
