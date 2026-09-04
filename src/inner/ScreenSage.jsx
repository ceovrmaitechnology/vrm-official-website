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

function ScreenSage() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/workflow/screensage/screensage-image.png",
        "/assets/images/workflow/screensage/screensage-gallery-1.png",
        "/assets/images/workflow/screensage/screensage-gallery-2.png",
        "/assets/images/workflow/screensage/screensage-gallery-3.png"
    ];

    return (
        <div className="screensage-page basic-font-family">
            <Helmet>
                <title>ScreenSage | AI Voice Screening &amp; Candidate Assessment | Workflow.AI</title>
                <meta name="description" content="Automate first-round screening with ScreenSage. Conduct AI-powered voice interviews, evaluate candidate communication and skills, and receive structured scorecards." />
                <meta property="og:title" content="ScreenSage | AI Voice Screening &amp; Candidate Assessment | Workflow.AI" />
                <meta property="og:description" content="Automate first-round screening with ScreenSage. Conduct AI-powered voice interviews, evaluate candidate communication and skills, and receive structured scorecards." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta property="og:url" content="https://www.vrmaitechnology.com/products/workflow/screensage" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/workflow/screensage" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ScreenSage | AI Voice Screening &amp; Candidate Assessment | Workflow.AI" />
                <meta name="twitter:description" content="Automate first-round screening with ScreenSage. Conduct AI-powered voice interviews, evaluate candidate communication and skills, and receive structured scorecards." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
            <HeaderOne />

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="vrm-suite-label wow fadeInUp" data-wow-delay=".1s">
                                    WORKFLOW.AI
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    ScreenSage
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Automate first-round candidate screening with AI-powered voice interviews that evaluate communication, experience, technical knowledge, and role suitability—delivering structured hiring insights before recruiters ever make a call.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost">
                                        Schedule a Demo <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/workflow/screensage/screensage-image.png" alt="ScreenSage AI Dashboard" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose ScreenSage - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>KEY BENEFITS</span>
                                <h2 className="title">Why Choose ScreenSage?</h2>
                                <p className="disc mt-3">
                                    Replace manual screening calls with AI-powered voice interviews that deliver faster evaluations, consistent assessments, and actionable hiring insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-microphone", title: "AI Voice Screening", desc: "Automatically conducts structured voice interviews using intelligent conversational AI." },
                            { icon: "fal fa-search", title: "Intelligent Candidate Evaluation", desc: "Evaluates communication, work experience, technical knowledge, and role suitability." },
                            { icon: "fal fa-analytics", title: "Structured Hiring Insights", desc: "Generates interview summaries, AI scorecards, transcripts, and hiring recommendations." }
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

            {/* 3. See ScreenSage in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See ScreenSage in Action</h2>
                                <p className="disc mt-3">Experience the power of automated, intelligent interviewing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                                <video width="100%" controls preload="metadata">
                                    <source src="/assets/images/workflow/screensage/screensage-promo.mp4" type="video/mp4" />
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
                                            <img src={img} alt={`ScreenSage Interface ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                                <p className="disc mt-3">A complete AI-powered voice interview platform designed to automate candidate screening from the first conversation to recruiter review.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-phone-alt", title: "AI Voice Interviews", desc: "Conduct natural, role-specific phone interviews with AI-powered conversations." },
                            { icon: "fal fa-user-friends", title: "Candidate Management", desc: "Invite candidates, schedule interviews, and manage screening workflows from a unified dashboard." },
                            { icon: "fal fa-brain", title: "AI Interview Analysis", desc: "Analyze communication skills, technical responses, work experience, and candidate confidence." },
                            { icon: "fal fa-file-alt", title: "Reports & Insights", desc: "Access interview recordings, call transcripts, AI summaries, scorecards, and downloadable reports." }
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

            {/* 7. What We Can Offer - White BG */}
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
                            { title: "Custom AI Workflows", icon: "fal fa-cogs" },
                            { title: "Real-Time Analytics", icon: "fal fa-chart-pie" },
                            { title: "Enterprise Security", icon: "fal fa-shield-check" },
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

            {/* 6. Partnering for Long-Term Success - Deep Blue/Gradient BG */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp" style={{ fontSize: '36px', lineHeight: '1.25' }}>Transform Candidate Screening with AI Voice Interviews</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Empower your recruitment team with AI-powered voice screening that automates candidate interviews, delivers intelligent hiring insights, and accelerates recruitment at enterprise scale.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost text-white">
                                        Schedule a Demo <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Placeholder generic business/handshake image or reusing a relevant asset if available */}
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

export default ScreenSage;
