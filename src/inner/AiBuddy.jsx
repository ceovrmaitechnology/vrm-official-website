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

function AiBuddy() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/aibuddy/aibuddy-image.png",
        "/assets/images/aibuddy/aibuddy-image-2.png",
        "/assets/images/aibuddy/aibuddy-image-3.png",
        "/assets/images/aibuddy/aibuddy-image-4.png"
    ];

    return (
        <div className="aibuddy-page basic-font-family">
            <HeaderOne />
            <Helmet>
                <title>AI Buddy | Voice Coaching & Training | VRM AI</title>
                <meta name="description" content="Build customer-ready teams with AI Buddy. Train employees using automated speech simulations, pronunciation analytics, and custom coaching profiles." />
                <meta property="og:title" content="AI Buddy — Voice Coaching & Training Platform" />
                <meta property="og:description" content="Build customer-ready teams with AI Buddy. Train employees using automated speech simulations, pronunciation analytics, and custom coaching profiles." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/aibuddy" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Buddy — Voice Coaching & Training Platform" />
                <meta name="twitter:description" content="Build customer-ready teams with AI Buddy. Train employees using automated speech simulations, pronunciation analytics, and custom coaching profiles." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    AI Buddy
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Customer-facing communication relies on consistent voice delivery and clear articulation. AI Buddy conducts automated interactive speech assessments and scenario training, scoring pronunciation accuracy in real-time to optimize team readiness workflows.
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
                                <img src="/assets/images/aibuddy/aibuddy-image.png" alt="AI Buddy Employee Voice Training Dashboard" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose AI Buddy - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Key Benefits</span>
                                <h2 className="title">Why Choose AI Buddy?</h2>
                                <p className="disc mt-3">
                                    Individual call center coaching consumes hours of management overhead and delivers subjective feedback. AI Buddy automates conversational skill mapping, helping L&D leaders verify speaking confidence using structured pronunciation grading panels.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-microphone", title: "Automated Conversation Practice", desc: "Simulate real-world client calls and support scenarios, allowing team members to practice speaking flow and receive immediate evaluation." },
                            { icon: "fal fa-language", title: "Pronunciation Analytics", desc: "Grade voice responses on syllable stress, articulation clarity, and overall comprehension to track team communication metrics." },
                            { icon: "fal fa-comments", title: "Custom Training Scenarios", desc: "Configure custom support scripts, onboarding dialogues, and technical product definitions for targeted coaching campaigns." },
                            { icon: "fal fa-chart-line", title: "L&D Tracking Dashboards", desc: "Monitor team-wide progress, average speech accuracy scores, and program completion rates using a unified analytics dashboard." }
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

            {/* 3. See AI Buddy in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See AI Buddy in Action</h2>
                                <p className="disc mt-3">Observe how the pronunciation engine tracks candidate audio segments and scores phoneme articulation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                                <video width="100%" controls preload="metadata">
                                    <source src="/assets/images/aibuddy/aibuddy-promo.mp4" type="video/mp4" />
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
                                            <img src={img} alt={`AI Buddy Interface Dashboard ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                                <p className="disc mt-3">An intelligent voice assessment sandbox designed to scale support training programs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-microphone", title: "Interactive Audio Logging", desc: "Record and evaluate candidate speech segments automatically for structured training review." },
                            { icon: "fal fa-language", title: "Intelligent Accent Grading", desc: "Analyze phonetic delivery compared to target locales, providing clear accent optimization metrics." },
                            { icon: "fal fa-comments", title: "Scenario-Based Simulation", desc: "Practice handling complex customer escalations, sales presentations, or daily operations dialogues." },
                            { icon: "fal fa-chart-line", title: "Progress Analytics Boards", desc: "Evaluate long-term pronunciation improvement and track competency growth over training phases." }
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
                            { title: "24/7 AI Voice Practice", icon: "fal fa-clock" },
                            { title: "Targeted Training Paths", icon: "fal fa-road" },
                            { title: "Enterprise Score Tracking", icon: "fal fa-chart-pie" },
                            { title: "API Support Integrations", icon: "fal fa-network-wired" }
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
                                <h2 className="title text-white wow fadeInUp">Standardize Customer Engagement Voices</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    AI Buddy integrates into your corporate training workflow to automate conversational coaching. Our platform scales across regional branches, delivering the structured pronunciation metrics needed to maintain consistent client communication standards.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost text-white">
                                        Schedule Consultation <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail wow fadeInUp mt-5 mt-lg-0" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src="/assets/images/service/04.jpg" alt="Enterprise Partnership" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default AiBuddy;
