import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wow.js';

function VrmReality() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const images = [
        "/assets/images/vrm-reality/vrm-reality-hero.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-1.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-2.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-3.png"
    ];

    return (
        <div className="vrm-reality-page basic-font-family">
            <Helmet>
                <title>VRM Reality | VRM AI Technology</title>
                <meta name="description" content="VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, and property workflows." />
                <meta property="og:title" content="VRM Reality | VRM AI Technology" />
                <meta property="og:description" content="VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, and property workflows." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/vrm-reality/vrm-reality-hero.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/vrm-reality" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VRM Reality | VRM AI Technology" />
                <meta name="twitter:description" content="VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, and property workflows." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/vrm-reality/vrm-reality-hero.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vrmaitechnology.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.vrmaitechnology.com/products" },
                            { "@type": "ListItem", "position": 3, "name": "VRM Reality", "item": "https://www.vrmaitechnology.com/products/vrm-reality" }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "VRM Reality",
                                "operatingSystem": "Web, iOS, Android",
                                "applicationCategory": "BusinessApplication",
                                "description": "VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, and property workflows.",
                                "brand": {
                                    "@type": "Organization",
                                    "name": "VRM AI Technology"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What is VRM Reality?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, site visits, and agent operations into one intelligent workflow." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does VRM Reality need special hardware?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "No, it is accessible directly via modern web browsers and mobile devices." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can buyers open tours and book visits on mobile?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, VRM Reality is fully responsive and automated over mobile and WhatsApp." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to deploy VRM Reality workflows?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Turnaround times vary based on project requirements. Please contact us for a tailored implementation plan." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you serve builders in Chennai?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes. VRM AI Technology serves property developers in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request." }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeaderOne />

            {/* 1. Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--120 position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".2s">
                                    VRM Reality
                                </h1>
                                <h2 className="sub-title wow fadeInUp text-white-50" data-wow-delay=".25s" style={{ fontSize: '24px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.85)', marginTop: '8px', marginBottom: '20px' }}>
                                    AI-Powered Real Estate Automation
                                </h2>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".3s">
                                    Turn property enquiries into qualified leads, scheduled site visits, and connected buyer experiences — automatically. VRM Reality brings AI conversations, lead qualification, voice calling, site-visit scheduling, cab coordination, and agent operations together in one intelligent real estate platform.
                                </p>
                                <div className="button-area wow fadeInUp mt-4" data-wow-delay=".4s" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Request a Demo <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src={images[0]} alt="VRM Reality Automation Dashboard" style={{ borderRadius: '20px', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }} loading="lazy" />
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
                                <h2 className="title">Why Choose VRM Reality?</h2>
                                <p className="disc mt-3">
                                    VRM Reality is an AI-powered real estate automation platform that connects buyer conversations, lead qualification, site visits, transportation, and agent operations into one intelligent workflow.
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

            {/* 3. See VRM Reality in Action - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <h2 className="title">See VRM Reality in Action</h2>
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
                                    poster="/assets/images/vrm-reality/vrm-reality-hero.png"
                                >
                                    <source src="/assets/images/vrm-reality/vrm-reality-promo.mp4" type="video/mp4" />
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
                                            <img src={img} alt={`VRM Reality Interface ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. What We’ve Built - Light Blue BG */}
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

            {/* 7. Frequently Asked Questions */}
            <div className="vrm-full-width-section vrm-light-blue-bg ptb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb--40">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>FAQ</span>
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is VRM Reality?</Accordion.Header>
                                    <Accordion.Body>
                                        VRM Reality is an AI-powered real estate automation platform connecting buyer conversations, lead qualification, site visits, and agent operations into one intelligent workflow.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Does it need special hardware?</Accordion.Header>
                                    <Accordion.Body>
                                        No, it is accessible directly via modern web browsers and mobile devices.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can buyers schedule visits over WhatsApp?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, VRM Reality automates 24/7 buyer enquiry handling and site-visit bookings directly through WhatsApp.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How long does it take to prepare a property workflow?</Accordion.Header>
                                    <Accordion.Body>
                                        Turnaround times vary based on project requirements. Please <Link to="/contactus">contact us</Link> for a tailored implementation plan.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do you serve builders in Chennai?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. VRM AI Technology serves property developers in Chennai and across India. Delivery is remote from our Madurai engineering office, with on-site visits on request.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* 8. Partnering for Long-Term Success */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-left text-start">
                                <h2 className="title text-white wow fadeInUp" style={{ fontSize: '36px', lineHeight: '1.25' }}>Transform Real Estate Operations with AI Automation</h2>
                                <p className="disc text-white-50 mt-4 wow fadeInUp" data-wow-delay=".2s">
                                    Empower your real estate sales team with VRM Reality supported by AI automation that manages enquiries, lead qualification, and agent coordination.
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
                                <img src="/assets/images/vrm-reality/vrm-reality-hero.png" alt="VRM Reality Automation" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default VrmReality;