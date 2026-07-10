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

function CodeSage() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/workflow/codesage/codesage-image.png",
        "/assets/images/workflow/codesage/codesage-image-2.png",
        "/assets/images/workflow/codesage/codesage-image-3.png",
        "/assets/images/workflow/codesage/codesage-image-4.png"
    ];

    return (
        <div className="codesage-page basic-font-family">
            <HeaderOne />

            {/* 1. Hero Section - Full Width Enterprise Gradient & Background Image */}
            <div className="vrm-full-width-section ptb--120 position-relative" style={{
                backgroundImage: 'linear-gradient(rgba(17, 20, 44, 0.85), rgba(27, 39, 124, 0.9)), url(/assets/images/banner/08.jpg)',
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
                                    CodeSage
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Assess Engineering Talent Accurately. CodeSage enables scalable, unbiased technical interviews through intelligent code evaluation and real-time feedback—helping teams assess engineering talent accurately and hire with confidence.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost">
                                        Get Started <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/workflow/codesage/codesage-image.png" alt="CodeSage Interface" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose CodeSage - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Core Features</span>
                                <h2 className="title">Why Choose CodeSage?</h2>
                                <p className="disc mt-3">
                                    CodeSage provides a robust environment for evaluating technical skills, from algorithmic thinking to real-world system design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-code", title: "Code Evaluation", desc: "Intelligent analysis of code quality, efficiency, and correctness in real-time, supporting multiple languages and frameworks." },
                            { icon: "fal fa-code-branch", title: "Algorithmic Challenges", desc: "Access a vast library of challenges designed to test problem-solving skills, data structure knowledge, and algorithmic thinking." },
                            { icon: "fal fa-tasks", title: "Role-Specific Tasks", desc: "Tailored assessments for different engineering roles (Frontend, Backend, DevOps, Data Science) to ensure relevant skills testing." }
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

            {/* 3. See CodeSage in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See CodeSage in Action</h2>
                                <p className="disc mt-3">A powerful IDE in your browser for seamless technical assessments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                                <video width="100%" controls preload="metadata">
                                    <source src="/assets/images/workflow/codesage/codesage-promo.mp4" type="video/mp4" />
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
                                            <img src={img} alt={`CodeSage Interface ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                                <p className="disc mt-3">Tools designed by engineers, for engineers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-fingerprint", title: "Plagiarism Detection", desc: "Ensure code originality with advanced similarity checking." },
                            { icon: "fal fa-check-double", title: "Auto-Grading", desc: "Instant scoring for standard algorithms and coding tasks." },
                            { icon: "fal fa-user-friends", title: "Pair Programming", desc: "Real-time collaborative editing for live technical interviews." },
                            { icon: "fal fa-terminal", title: "Execution Sandbox", desc: "Secure environment to run and test code in 30+ languages." }
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
                            { title: "Technical Benchmarks", icon: "fal fa-tachometer-alt" },
                            { title: "Skill Mapping", icon: "fal fa-sitemap" },
                            { title: "Team Analytics", icon: "fal fa-users-class" },
                            { title: "Hiring Roadmap", icon: "fal fa-map-signs" }
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
                                    CodeSage helps you build world-class engineering teams.
                                    By standardizing technical assessments, we reduce hiring time
                                    and improve the quality of every hire, ensuring your tech team is ready for any challenge.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-btn vrm-btn-ghost text-white">
                                        Partner With Us <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail wow fadeInUp mt-5 mt-lg-0" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                                <img src="/assets/images/service/03.jpg" alt="Engineering Leadership" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default CodeSage;
