import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wow.js';

function Vevora() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/vevora/vevora-hero.png",
        "/assets/images/vevora/vevora-gallery-1.png",
        "/assets/images/vevora/vevora-gallery-2.png",
        "/assets/images/vevora/vevora-gallery-3.png"
    ];

    return (
        <div className="vevora-page basic-font-family">
            <Helmet>
                <title>Vevora | AI-Powered Real Estate Automation Platform — VRM AI Technology</title>
                <meta name="description" content="Vevora is an AI-powered real estate automation platform that connects buyer conversations, lead qualification, voice calling, site visits, cab coordination, and agent operations into one intelligent workflow." />
                <meta property="og:title" content="Vevora | AI-Powered Real Estate Automation Platform — VRM AI Technology" />
                <meta property="og:description" content="Turn property enquiries into qualified leads, scheduled site visits, and connected buyer experiences — automatically with Vevora." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/vevora/vevora-hero.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/vevora" />
            </Helmet>

            <HeaderOne />

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    Vevora Real Estate
                                </h1>
                                <h2 className="sub-title wow fadeInUp text-white-50" data-wow-delay=".25s" style={{ fontSize: '24px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.85)', marginTop: '8px', marginBottom: '20px' }}>
                                    AI-Powered Real Estate Automation
                                </h2>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Turn property enquiries into qualified leads, scheduled site visits, and connected buyer experiences — automatically. Vevora brings AI conversations, lead qualification, voice calling, site-visit scheduling, cab coordination, and agent operations together in one intelligent real estate platform.
                                </p>
                                <div className="button-area wow fadeInUp mt-4" data-wow-delay=".4s" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost">
                                        Request a Demo <i className="far fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/vevora/vevora-hero.png" alt="Vevora AI Real Estate Automation Dashboard" style={{ borderRadius: '20px', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Benefits - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>KEY BENEFITS</span>
                                <h2 className="title">Why Choose Vevora?</h2>
                                <p className="disc mt-3">
                                    Vevora is an AI-powered real estate automation platform that connects buyer conversations, lead qualification, site visits, transportation, and agent operations into one intelligent workflow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-comments", title: "AI-Powered WhatsApp", desc: "Automate buyer conversations and site-visit requests 24/7." },
                            { icon: "fal fa-fire", title: "Smart Lead Scoring", desc: "Automatically identify HOT, WARM, and COLD leads based on buyer intent." },
                            { icon: "fal fa-car", title: "Automated Site Visits", desc: "Coordinate scheduling, confirmations, reminders, and cab transportation." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
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

            {/* 3. See Vevora in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See Vevora in Action</h2>
                                <p className="disc mt-3">Experience the power of automated real estate lead qualification and site-visit coordination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', backgroundColor: '#0f172a' }}>
                                <video
                                    width="100%"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    poster="/assets/images/vevora/vevora-hero.png"
                                >
                                    <source src="/assets/images/vevora/vevora-promo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Interface Gallery - White BG */}
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
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 2 },
                                }}
                                className="vrm-equal-height-swiper"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="gallery-item wow fadeInUp" data-wow-delay={`.${index + 2}s`} style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
                                            <img src={img} alt={`Vevora Interface ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" decoding="async" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. What We’ve Built for You - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">What We’ve Built for You</h2>
                                <p className="disc mt-3">A complete AI-powered real estate automation platform designed to streamline buyer enquiries from initial message to property site visit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-comments", title: "AI WhatsApp Bot", desc: "Automate 24/7 buyer enquiry handling and site-visit booking over WhatsApp." },
                            { icon: "fal fa-phone-alt", title: "AI Voice Calling", desc: "Automated voice assistance in Tamil & English to verify intent and coordinate appointments." },
                            { icon: "fal fa-car", title: "Cab & Visit Automation", desc: "Automatically assign driver, generate OTP, and coordinate buyer transportation." },
                            { icon: "fal fa-table", title: "Agent Portal & Live Sync", desc: "Unified agent dashboard synchronized with live Google Sheets in real time." }
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

            {/* 6. What We Can Offer - White BG */}
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
                            { title: "Custom Real Estate Workflows", icon: "fal fa-cogs" },
                            { title: "Real-Time Lead Analytics", icon: "fal fa-chart-pie" },
                            { title: "Enterprise Security & OTP", icon: "fal fa-shield-check" },
                            { title: "Dedicated Support", icon: "fal fa-headset" }
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

            {/* 7. Partnering for Long-Term Success - Enterprise Gradient BG */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp" style={{ fontSize: '36px', lineHeight: '1.25' }}>Transform Real Estate Operations with AI Automation</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Empower your real estate sales team with Vevora AI that automates enquiries, scores leads, schedules site visits, and connects agents at enterprise scale.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost text-white">
                                        Schedule a Demo <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail wow fadeInUp mt-5 mt-lg-0" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: '85%', margin: '0 auto' }}>
                                <img src="/assets/images/vevora/vevora-hero.png" alt="Enterprise Real Estate Automation" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default Vevora;
