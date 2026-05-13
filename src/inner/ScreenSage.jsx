import React, { useEffect } from 'react';
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
        "/assets/images/workflow/screensage/screensage-image-2.png",
        "/assets/images/workflow/screensage/screensage-image-3.png"
    ];

    return (
        <div className="screensage-page basic-font-family">
            <HeaderOne />

            {/* 1. Hero Section - Full Width Enterprise Gradient & Background Image */}
            <div className="vrm-full-width-section ptb--120 position-relative" style={{
                backgroundImage: 'linear-gradient(rgba(17, 20, 44, 0.85), rgba(27, 39, 124, 0.9)), url(/assets/images/banner/06.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
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
                                    Modernize Hiring with ScreenSage. Empower organizations to modernise hiring through AI-driven interviews and candidate screening. By delivering unbiased, consistent, and insight-rich assessments at scale, it enables faster hiring decisions and measurable recruitment outcomes.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus" className="vrm-btn vrm-btn-ghost">
                                        Get Started <i className="far fa-arrow-right"></i>
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
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Key Benefits</span>
                                <h2 className="title">Why Choose ScreenSage?</h2>
                                <p className="disc mt-3">
                                    ScreenSage transforms the recruitment landscape by automating the initial stages of hiring, ensuring that every candidate receives a fair and thorough evaluation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-robot", title: "AI-Driven Interviews", desc: "Automate initial screening with intelligent AI agents that conduct consistent, natural language interviews 24/7, freeing up your team to focus on high-value interactions." },
                            { icon: "fal fa-balance-scale", title: "Unbiased & Consistent", desc: "Eliminate unconscious bias with standardized evaluation criteria for every candidate, ensuring a fair hiring process and a diverse talent pool." },
                            { icon: "fal fa-chart-line", title: "Insight-Rich Reports", desc: "Get detailed performance analytics, soft-skill assessments, and actionable insights to make faster, data-backed hiring decisions with confidence." }
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
                                <video width="100%" controls poster="/assets/images/workflow/screensage/screensage-image.png">
                                    <source src="/assets/images/workflow/screensage/AI_Bot_Interviews_Person_Via_Zoom.mp4" type="video/mp4" />
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
                                <p className="disc mt-3">A comprehensive suite of features designed to streamline your hiring workflow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-desktop-alt", title: "AI Monitoring", desc: "Real-time oversight of interview quality and candidate engagement." },
                            { icon: "fal fa-shield-check", title: "Compliance Tracking", desc: "Automated logs and reports to ensure adherence to hiring standards." },
                            { icon: "fal fa-chart-line", title: "Productivity Insights", desc: "Metrics on time-to-hire, funnel efficiency, and interviewer performance." },
                            { icon: "fal fa-globe-americas", title: "Remote Team Intelligence", desc: "Tools optimized for assessing remote candidates and distributed teams." }
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
                                <h2 className="title text-white wow fadeInUp">Partnering for Long-Term Success</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    We don't just provide a tool; we partner with you to transform your talent acquisition strategy.
                                    Our enterprise solutions are designed to scale with your organization, adapting to your evolving needs
                                    and ensuring you stay ahead in the competitive talent market.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus" className="vrm-btn vrm-btn-ghost text-white">
                                        Partner With Us <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Placeholder generic business/handshake image or reusing a relevant asset if available */}
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

export default ScreenSage;
