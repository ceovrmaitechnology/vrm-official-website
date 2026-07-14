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

function WhatsAppAutomation() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/whatsapp/whatsapp-image-1.png",
        "/assets/images/whatsapp/whatsapp-image-2.png",
        "/assets/images/whatsapp/whatsapp-image-3.png",
        "/assets/images/whatsapp/whatsapp-image-4.png"
    ];

    return (
        <div className="screensage-page basic-font-family">
            <HeaderOne />
            <Helmet>
                <title>Lead Connect | AI Customer Engagement | VRM AI</title>
                <meta name="description" content="Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, qualify prospects, and accelerate conversions." />
                <meta property="og:title" content="Lead Connect — AI Customer Engagement Agent" />
                <meta property="og:description" content="Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, qualify prospects, and accelerate conversions." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/whatsapp" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Lead Connect — AI Customer Engagement Agent" />
                <meta name="twitter:description" content="Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, qualify prospects, and accelerate conversions." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    Lead Connect
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Lead Connect empowers businesses with intelligent AI agents that autonomously engage customers, capture opportunities, qualify prospects, schedule appointments, nurture relationships, and accelerate conversions — delivering seamless customer experiences 24×7 with zero manual effort.
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
                                <img src="/assets/images/whatsapp/whatsapp-hero-v2.png" alt="WhatsApp Customer Engagement Team" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', objectPosition: 'center 20%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why Choose WhatsApp Automation - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Key Benefits</span>
                                <h2 className="title">Why Choose Lead Connect?</h2>
                                <p className="disc mt-3">
                                    Siloed customer interaction routes lead to lost sales opportunities and inconsistent support. Lead Connect deploys autonomous AI agents that unify your customer acquisition and engagement funnels, ensuring seamless database synchronization and consistent response standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-comments-alt", title: "Automated Support Flows", desc: "Orchestrate automated chat scripts to resolve client inquiries, handle bookings, and route tickets without team overhead." },
                            { icon: "fal fa-chart-network", title: "Official WhatsApp Business API", desc: "Deploy official messaging profiles using approved templates, securing high deliverability and customer trust indicators." },
                            { icon: "fal fa-bullhorn", title: "Broadcast Campaign Tools", desc: "Distribute service alerts, delivery statuses, and personalized announcements directly to customer chat panels." }
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

            {/* 3. See WhatsApp Automation in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See Lead Connect in Action</h2>
                                <p className="disc mt-3">Observe how chat builders compile custom triggers and pass customer conversations to live desks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                                <video width="100%" controls preload="metadata">
                                    <source src="/assets/images/whatsapp/whatsapp-promo.mp4" type="video/mp4" />
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
                                            <img src={img} alt={`Lead Connect Customer Engagement Interface Dashboard ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                                <p className="disc mt-3">A secure messaging system designed to manage and verify client messaging campaigns.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fal fa-robot", title: "Interactive Chat Routing", desc: "Direct customer conversations to specific support teams or AI agents based on keywords and user choices." },
                            { icon: "fal fa-sitemap", title: "Official Business Verification", desc: "Utilize green tick profiles and template message approvals through the official WhatsApp Business Platform." },
                            { icon: "fal fa-comments", title: "Live Multi-Agent Inbox", desc: "Manage high-volume client channels using a shared support dashboard with smooth manual handoffs." },
                            { icon: "fal fa-sync", title: "CRM Integration Connectors", desc: "Log and update user interaction data automatically within your central CRM and ERP systems." }
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

            {/* 7. Partnering for Long-Term Success - Deep Blue/Gradient BG */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp">Scale Customer Engagement with Lead Connect</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Lead Connect connects directly to your existing customer relationship databases. Our platform scales autonomously to handle high engagement volumes, ensuring your sales and support teams have the real-time insights needed to manage conversions.
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

export default WhatsAppAutomation;
