import React, { useEffect, useState } from 'react';
import ProductVideo from '../components/common/ProductVideo';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wow.js';

function BenchToDeploy() {
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/bench-to-deploy/b2d-promo-poster.jpg",
        "/assets/images/bench-to-deploy/b2d-image-2.png",
        "/assets/images/bench-to-deploy/b2d-image-3.png"
    ];

    return (
        <div className="bench-to-deploy-page basic-font-family">
            <SEO />
            <HeaderOne />

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="vrm-suite-label wow fadeInUp" data-wow-delay=".1s">
                                    TALENT DEPLOYMENT AI
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    Bench to Deploy (B2D)
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Move Unassigned Bench Talent into Active Billing. Empower IT and staffing organizations to analyze bench candidates through automated AI screening, real-time proctored evaluations, and intelligent requisition-matching panels. By delivering structured skill profiles and automated upskilling roadmaps, it transforms idle bench resources into revenue-generating project deployments.
                                </p>
                                <div className="button-area wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Get Started <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/bench-to-deploy/b2d-image.webp" alt="Bench to Deploy Interface" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto', display: 'block' }} width="600" height="600" decoding="async" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose Bench to Deploy AI? - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>KEY BENEFITS</span>
                                <h2 className="title">Why Choose Bench to Deploy AI?</h2>
                                <p className="disc mt-3">
                                    Accelerate bench-to-billing deployment with AI-powered candidate screening, proctored evaluations, and real-time match matrix analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4 justify-content-center">
                        {[
                            {
                                icon: "fal fa-cloud-upload-alt",
                                title: "Automated Talent & Skill Profile Ingestion",
                                desc: "Seamlessly process bench profiles, developer credentials, and skill portfolios in bulk using advanced AI parsing and continuous data alignment."
                            },
                            {
                                icon: "fal fa-code",
                                title: "AI-Proctored Evaluations & CodeSage",
                                desc: "Verify candidate proficiency using browser-based AI video proctoring and real-time Monaco coding sandbox assessments."
                            },
                            {
                                icon: "fal fa-th-large",
                                title: "Intelligent Matchboard Matrix",
                                desc: "Cross-reference bench skills against open project requisitions to instantly identify and rank the best-fit candidate for every open role."
                            },
                            {
                                icon: "fal fa-headset",
                                title: "Automated AI Voice Counseling",
                                desc: "Bridge skill gaps for unassigned bench talent through auto-generated study roadmaps and interactive ScreenSage AI voice calls."
                            },
                            {
                                icon: "fal fa-chart-line",
                                title: "Decision & Bench Intelligence",
                                desc: "Monitor workforce utilization, candidate fit scores, and deployment velocity through live enterprise dashboards and exportable PDF/Excel reports."
                            }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-feature-card text-center" style={{ height: '100%' }}>
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

            {/* 3. See Bench to Deploy in Action - Light Blue BG */}
            {!videoError && (
                <div className="vrm-full-width-section vrm-light-blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="rts-title-area mb--50" data-text="">
                                    <h2 className="title">See Bench to Deploy in Action</h2>
                                    <p className="disc mt-3">From idle bench to billable deployment in one AI-powered workflow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                <ProductVideo
                                    src="/assets/images/bench-to-deploy/b2d-promo.mp4"
                                    poster="/assets/images/bench-to-deploy/b2d-poster-16-9.webp"
                                    title="Bench to Deploy (B2D)"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                                            <img src={img} alt={`Bench to Deploy Interface ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
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
                                <p className="disc mt-3">A unified AI-powered platform that enables IT enterprises, staffing firms, and resource managers to streamline talent intake, automate technical evaluations, and accelerate bench-to-billing deployment through intelligent digital workflows.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                icon: "fal fa-cloud-upload-alt",
                                title: "Seamless Skill Profile Ingestion",
                                desc: "Seamlessly process bench profiles, developer credentials, and skill portfolios in bulk using advanced AI parsing and continuous data alignment."
                            },
                            {
                                icon: "fal fa-code",
                                title: "AI Assessment & Coding Sandbox",
                                desc: "Automate candidate proctoring, technical interview evaluations, Monaco code challenges, and automated PASS/HOLD/FAIL decision scoring."
                            },
                            {
                                icon: "fal fa-user-check",
                                title: "Matchboard Matrix & Role Alignment",
                                desc: "Match unassigned bench talent against open project requisitions and instantly select the single best employee for each open role."
                            },
                            {
                                icon: "fal fa-microphone-alt",
                                title: "AI Voice Outreach & Upskilling",
                                desc: "Engage candidates via interactive AI voice calls, deliver personalized PDF study roadmaps, and pipeline upskilled talent back into active deployment."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                                <div className="vrm-feature-card text-center" style={{ height: '100%' }}>
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
                            { title: "AI Profile & Skill Extraction", icon: "fal fa-id-card" },
                            { title: "Interactive AI Voice Outreach", icon: "fal fa-headset" },
                            { title: "Technical Coding Sandbox", icon: "fal fa-code" },
                            { title: "Matchboard Best-Employee Role Alignment", icon: "fal fa-sitemap" }
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

            {/* 7. Turn Your Bench into Billable Revenue with Bench to Deploy - Deep Blue/Gradient BG */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp" style={{ fontSize: '36px', lineHeight: '1.25' }}>Turn Your Bench into Billable Revenue with Bench to Deploy</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Transform idle bench resources into revenue-generating deployments with AI screening, proctored evaluations, intelligent role matching, and automated upskilling, all from a single enterprise platform.
                                </p>
                                <div className="button-area mt-5 wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Schedule a Demo <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail wow fadeInUp mt-5 mt-lg-0" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: '85%', margin: '0 auto' }}>
                                <img src="/assets/images/service/partnership-indian.png" alt="Talent Deployment Partnership" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default BenchToDeploy;
