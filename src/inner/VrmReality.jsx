import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WOW from 'wow.js';

function VrmReality() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const productImages = [
        "/assets/images/vrm-reality/vrm-reality-hero.webp",
        "/assets/images/vrm-reality/vrm-reality-gallery-1.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-2.png",
        "/assets/images/vrm-reality/vrm-reality-gallery-3.png"
    ];

    const uniqueFeatures = [
        {
            icon: "fal fa-robot",
            title: "AI-Assisted Enquiry Handling",
            desc: "Buyers get immediate answers to questions 24/7, speeding up response times and preventing lost leads."
        },
        {
            icon: "fal fa-map-marked-alt",
            title: "Map-First Property Search",
            desc: "Intuitive geographic navigation allowing buyers to explore neighborhoods, amenities, and listings visually."
        },
        {
            icon: "fal fa-video",
            title: "Physical & Virtual (Zoom) Visits",
            desc: "Complete tour flexibility — prospective buyers can visit on-site or join live guided Zoom walkthroughs from anywhere."
        },
        {
            icon: "fal fa-users-cog",
            title: "Built-In Agent CRM",
            desc: "Zero extra subscriptions or tools needed. Manage your entire lead pipeline, follow-ups, and visit calendars in one place."
        },
        {
            icon: "fal fa-exchange-alt",
            title: "One Unified Workflow",
            desc: "Seamless end-to-end journey from initial buyer search and 1-click enquiry to visit scheduling and deal closure."
        }
    ];

    const stakeholderFeatures = [
        {
            badge: "FOR BUYERS",
            title: "Smart Property Discovery",
            icon: "fal fa-home",
            points: [
                "Search by city, budget, BHK and property type on an interactive map",
                "Filter smoothly between Rent and Buy listings",
                "Send an enquiry in one click without tedious forms",
                "Book physical site visits or virtual Zoom tours from anywhere",
                "Get quick, verified replies directly from property agents"
            ]
        },
        {
            badge: "FOR SELLERS",
            title: "Maximized Listing Reach",
            icon: "fal fa-building",
            points: [
                "List properties with high-resolution photos, price, and pin location",
                "Receive and organize all buyer enquiries in a single dashboard",
                "Track real-time page views and enquiries per listing",
                "Let buyers tour your property in person or remotely over Zoom",
                "Accelerate sales cycles by reaching qualified buyers faster"
            ]
        },
        {
            badge: "FOR AGENTS (CRM)",
            title: "Built-In CRM Pipeline",
            icon: "fal fa-user-tie",
            points: [
                "All leads consolidated in one organized CRM database",
                "Follow up efficiently and track each lead's status pipeline",
                "Manage physical site visit and virtual Zoom tour schedules",
                "Get instant alerts and notifications for new buyer enquiries",
                "Close deals faster without purchasing separate CRM software"
            ]
        }
    ];

    const faqCategories = [
        { id: 'all', label: 'All Questions' },
        { id: 'buyers', label: 'For Buyers' },
        { id: 'sellers', label: 'For Sellers' },
        { id: 'agents', label: 'Agents & CRM' }
    ];

    const faqItems = [
        {
            category: 'buyers',
            categoryLabel: 'For Buyers',
            question: "How does the map-first search help buyers find properties?",
            answer: "Instead of browsing static lists, buyers can explore listings on an interactive geospatial map. You can filter by city, target budget, BHK configuration, and property type, and toggle seamlessly between Rent and Buy options to view available inventory across specific neighborhoods."
        },
        {
            category: 'buyers',
            categoryLabel: 'For Buyers',
            question: "Can buyers book both physical visits and virtual Zoom tours?",
            answer: "Yes. Every listing gives buyers the choice to schedule either an in-person site visit or a live virtual Zoom tour. For NRI or out-of-town buyers, agents can conduct guided live walkthroughs over Zoom without requiring travel."
        },
        {
            category: 'buyers',
            categoryLabel: 'For Buyers',
            question: "How does 1-click enquiry and AI-assisted handling work?",
            answer: "Buyers can send an enquiry with a single click. Our AI-assisted response workflows acknowledge questions instantly with verified property specifications and alert the agent in real time, dramatically reducing wait times."
        },
        {
            category: 'sellers',
            categoryLabel: 'For Sellers',
            question: "How do sellers list properties and monitor buyer interest?",
            answer: "Sellers can easily publish property listings complete with high-resolution photo galleries, pricing details, and verified pin locations. All incoming buyer enquiries are automatically organized into a centralized seller dashboard."
        },
        {
            category: 'sellers',
            categoryLabel: 'For Sellers',
            question: "Can sellers track live listing views and engagement analytics?",
            answer: "Yes. Sellers get real-time performance insights showing total listing views, enquiry frequency, and tour requests per property, helping them gauge market interest and optimize pricing."
        },
        {
            category: 'agents',
            categoryLabel: 'Agents & CRM',
            question: "What capabilities are included in the built-in Agent CRM?",
            answer: "The built-in CRM manages the complete lead lifecycle in one dashboard. Agents can track each prospect's status (New Enquiry, Follow-up, Tour Scheduled, Negotiating, Closed), schedule physical and Zoom visits, and receive immediate alerts for new leads."
        },
        {
            category: 'agents',
            categoryLabel: 'Agents & CRM',
            question: "Do agents need to purchase third-party CRM subscriptions?",
            answer: "No. VRM Reality eliminates the need for separate CRM tools. Everything from lead capture, pipeline status tracking, visit calendar coordination, and follow-up alerts is built directly into the platform."
        },
        {
            category: 'all',
            categoryLabel: 'General',
            question: "What geographic regions and cities does VRM Reality support?",
            answer: "VRM AI Technology serves builders, real estate agencies, and property seekers across Bengaluru, Madurai, Chennai, and other tier-1 and tier-2 property markets throughout India, supported by our offices in Bengaluru and Madurai."
        }
    ];

    const filteredFaqs = activeCategory === 'all'
        ? faqItems
        : faqItems.filter(f => f.category === activeCategory);

    return (
        <div className="vrm-reality-page basic-font-family">
            <Helmet>
                <title>VRM Reality | Smart Real Estate Platform & Agent CRM</title>
                <meta name="description" content="VRM Reality connects buyers, sellers, and agents with map-first search, virtual Zoom visits, AI enquiry handling, and a built-in real estate CRM." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/vrm-reality" />
                <meta property="og:title" content="VRM Reality | Smart Real Estate Platform & Agent CRM" />
                <meta property="og:description" content="VRM Reality connects buyers, sellers, and agents with map-first search, virtual Zoom visits, AI enquiry handling, and a built-in real estate CRM." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VRM Reality | Smart Real Estate Platform & Agent CRM" />
                <meta name="twitter:description" content="VRM Reality connects buyers, sellers, and agents with map-first search, virtual Zoom visits, AI enquiry handling, and a built-in real estate CRM." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "VRM Reality",
                                "operatingSystem": "Web, iOS, Android",
                                "applicationCategory": "BusinessApplication",
                                "description": "VRM Reality connects buyers, sellers, and agents with map-first search, virtual Zoom visits, AI enquiry handling, and a built-in real estate CRM.",
                                "brand": {
                                    "@type": "Organization",
                                    "name": "VRM AI Technology"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": faqItems.map(item => ({
                                    "@type": "Question",
                                    "name": item.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": item.answer
                                    }
                                }))
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
                            <span className="sub-title wow fadeInUp" style={{ color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '14px', display: 'block', marginBottom: '12px' }}>
                                PropTech & Real Estate CRM Platform
                            </span>
                            <h1 className="title text-white wow fadeInUp" data-wow-delay=".2s">VRM Reality</h1>
                            <p className="text-white-50 mt-4 wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                                An end-to-end real estate platform connecting Buyers, Sellers, and Agents into a unified workflow. Explore properties through map-first search, book physical site visits or virtual Zoom tours, and close deals faster with AI-assisted enquiry handling and a built-in agent CRM.
                            </p>
                            <p className="text-white-50 mt-3 wow fadeInUp" data-wow-delay=".35s">
                                Developed at our <Link to="/ai-company-madurai" className="text-white text-decoration-underline">Madurai development center</Link> and Bengaluru headquarters, empowering real estate developers, agencies, and buyers across India.
                            </p>
                            <div className="button-area mt-4 wow fadeInUp d-flex flex-wrap gap-3 align-items-center" data-wow-delay=".4s">
                                <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                    Request a Demo <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                </Link>
                                <a href="#ecosystem" className="btn btn-outline-light" style={{ padding: '14px 28px', borderRadius: '8px', fontWeight: '600' }}>
                                    Explore Platform
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5 mt-lg-0">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src={productImages[0]} alt="VRM Reality Real Estate Platform Dashboard" className="img-fluid rounded shadow" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} width="600" height="600" decoding="async" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Unique Selling Points (What Makes VRM Reality Unique) */}
            <div className="vrm-full-width-section vrm-white-bg ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>Unique Advantages</span>
                                <h2 className="title">Why Choose VRM Reality?</h2>
                                <p className="disc mt-3 mx-auto" style={{ maxWidth: '800px' }}>
                                    Five key differentiators that eliminate fragmented tools and unite every step of the real estate transaction into one frictionless experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 g-4 justify-content-center">
                        {uniqueFeatures.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-feature-card p-4 text-center" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #eef2f6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', height: '100%', transition: 'all 0.3s ease' }}>
                                    <div className="icon-wrapper mb-3" style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59, 78, 204, 0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className={item.icon} style={{ fontSize: '26px', color: '#3B4ECC' }}></i>
                                    </div>
                                    <h5 className="title" style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#11142c' }}>{item.title}</h5>
                                    <p className="disc" style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: '0' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Stakeholder Breakdown (For Buyers, For Sellers, For Agents) */}
            <div id="ecosystem" className="vrm-full-width-section vrm-light-blue-bg ptb--100" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>Platform Ecosystem</span>
                                <h2 className="title">Engineered for Buyers, Sellers, and Agents</h2>
                                <p className="disc mt-3 mx-auto" style={{ maxWidth: '800px' }}>
                                    A tailored experience for every user in the property market, from the first search query to the final contract signature.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {stakeholderFeatures.map((stakeholder, idx) => (
                            <div key={idx} className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`}>
                                <div className="card h-100 p-4" style={{ borderRadius: '20px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 12px 35px rgba(0,0,0,0.05)' }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(59, 78, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px' }}>
                                            <i className={stakeholder.icon} style={{ fontSize: '24px', color: '#3B4ECC' }}></i>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', color: '#3B4ECC', textTransform: 'uppercase' }}>{stakeholder.badge}</span>
                                            <h4 style={{ fontSize: '20px', fontWeight: '700', margin: '0', color: '#111827' }}>{stakeholder.title}</h4>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled mt-3 mb-0" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {stakeholder.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="d-flex align-items-start" style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>
                                                <i className="far fa-check-circle me-2 mt-1" style={{ color: '#10b981', fontSize: '16px', flexShrink: 0 }}></i>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. See VRM Reality in Action: Video Showcase */}
            <div className="vrm-full-width-section vrm-white-bg ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>Live Walkthrough</span>
                                <h2 className="title">See VRM Reality in Action</h2>
                                <p className="disc mt-3 mx-auto" style={{ maxWidth: '750px' }}>
                                    Watch how VRM Reality powers virtual property showcases, dynamic map searches, and real-time remote tour presentations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-wrapper wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', background: '#000' }}>
                                <video width="100%" controls preload="none" poster={productImages[0]} style={{ display: 'block', maxHeight: '560px', objectFit: 'cover' }}>
                                    <source src="/assets/images/vrm-reality/vrm-reality-promo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Interface & Project Gallery */}
            <div className="vrm-full-width-section vrm-light-blue-bg ptb--100" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area mb--50" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>Visual Showcase</span>
                                <h2 className="title">Platform & Listing Gallery</h2>
                                <p className="disc mt-3 mx-auto" style={{ maxWidth: '750px' }}>
                                    Explore high-resolution views of listings, property showcase environments, and platform dashboards built for real estate teams.
                                </p>
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
                                autoplay={{ delay: 3500 }}
                                loop={true}
                                observer={true}
                                observeParents={true}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 2 },
                                }}
                                className="vrm-equal-height-swiper"
                            >
                                {productImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="gallery-item wow fadeInUp" data-wow-delay={`.${index + 2}s`} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
                                            <img src={img} alt={`VRM Reality Property Showcase View ${index + 1}`} style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Modern International Standard FAQ Section */}
            <div className="vrm-full-width-section vrm-white-bg ptb--100 position-relative" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="row g-5 align-items-start">
                        {/* Left Summary & Support Column */}
                        <div className="col-lg-4">
                            <div className="pe-lg-3" style={{ position: 'sticky', top: '120px' }}>
                                <span className="sub-title" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'rgba(59, 78, 204, 0.08)',
                                    color: '#3B4ECC',
                                    padding: '6px 14px',
                                    borderRadius: '30px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px'
                                }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B4ECC', display: 'inline-block' }}></span>
                                    Common Inquiries
                                </span>
                                <h2 className="title" style={{ fontSize: '34px', fontWeight: '800', lineHeight: '1.25', color: '#0f172a', marginBottom: '16px' }}>
                                    Frequently Asked Questions
                                </h2>
                                <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#64748b', marginBottom: '28px' }}>
                                    Explore how VRM Reality simplifies property search, automates inquiry responses, enables Zoom tours, and powers agent CRM pipelines.
                                </p>

                                {/* Direct Support Card */}
                                <div style={{
                                    background: 'linear-gradient(145deg, #f8fafc 0%, #edf2f7 100%)',
                                    borderRadius: '18px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
                                }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: '#3B4ECC',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '18px',
                                            marginRight: '12px',
                                            flexShrink: 0
                                        }}>
                                            <i className="fal fa-headset"></i>
                                        </div>
                                        <div>
                                            <h6 style={{ margin: '0', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Need Custom Clarification?</h6>
                                            <span style={{ fontSize: '13px', color: '#64748b' }}>Our technical specialists are here to assist.</span>
                                        </div>
                                    </div>
                                    <Link to="/contactus#send-message" className="btn w-100" style={{
                                        background: '#0f172a',
                                        color: '#ffffff',
                                        borderRadius: '10px',
                                        padding: '12px 18px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Speak With an Expert <i className="far fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Interactive Accordion Column */}
                        <div className="col-lg-8">
                            {/* Category Filter Pills */}
                            <div className="d-flex flex-wrap gap-2 mb-4" style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                                {faqCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(cat.id);
                                            setOpenIndex(0);
                                        }}
                                        style={{
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '8px 18px',
                                            borderRadius: '24px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            transition: 'all 0.25s ease',
                                            background: activeCategory === cat.id ? '#3B4ECC' : '#f1f5f9',
                                            color: activeCategory === cat.id ? '#ffffff' : '#475569',
                                            boxShadow: activeCategory === cat.id ? '0 4px 14px rgba(59, 78, 204, 0.3)' : 'none'
                                        }}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ Cards */}
                            <div className="d-flex flex-column" style={{ gap: '14px' }}>
                                {filteredFaqs.map((faq, index) => {
                                    const isOpen = openIndex === index;
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                background: '#ffffff',
                                                borderRadius: '16px',
                                                border: isOpen ? '1px solid rgba(59, 78, 204, 0.4)' : '1px solid #e2e8f0',
                                                boxShadow: isOpen ? '0 12px 30px rgba(59, 78, 204, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                                className="w-100 text-start d-flex align-items-center justify-content-between p-4"
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    outline: 'none',
                                                    gap: '16px'
                                                }}
                                                aria-expanded={isOpen}
                                            >
                                                <div className="d-flex flex-column align-items-start">
                                                    <span style={{
                                                        fontSize: '11px',
                                                        fontWeight: '700',
                                                        letterSpacing: '1px',
                                                        textTransform: 'uppercase',
                                                        color: '#3B4ECC',
                                                        marginBottom: '6px'
                                                    }}>
                                                        {faq.categoryLabel}
                                                    </span>
                                                    <span style={{
                                                        fontSize: '16px',
                                                        fontWeight: '700',
                                                        color: isOpen ? '#3B4ECC' : '#0f172a',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        {faq.question}
                                                    </span>
                                                </div>
                                                <div style={{
                                                    width: '36px',
                                                    height: '36px',
                                                    borderRadius: '50%',
                                                    background: isOpen ? '#3B4ECC' : '#f1f5f9',
                                                    color: isOpen ? '#ffffff' : '#64748b',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '14px',
                                                    flexShrink: 0,
                                                    transition: 'all 0.3s ease',
                                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }}>
                                                    <i className={`fal ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div style={{
                                                    padding: '0 24px 24px 24px',
                                                    color: '#475569',
                                                    fontSize: '14.5px',
                                                    lineHeight: '1.7',
                                                    borderTop: '1px solid #f1f5f9',
                                                    paddingTop: '16px'
                                                }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. CTA Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient ptb--80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="title text-white">Elevate Your Real Estate Business with VRM Reality</h2>
                            <p className="disc text-white-50 mt-3" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                                Connect with our PropTech team to experience our map-first search, virtual tour scheduling, and integrated agent CRM built for modern property transactions.
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                Schedule a Consultation <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default VrmReality;