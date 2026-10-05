import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function BenchToDeploy() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.vrmaitechnology.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://www.vrmaitechnology.com/products"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Bench to Deploy (B2D)",
                "item": "https://www.vrmaitechnology.com/products/bench-to-deploy"
            }
        ]
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Bench to Deploy (B2D)",
        "operatingSystem": "Web-based, Cloud",
        "applicationCategory": "BusinessApplication",
        "description": "Bench to Deploy (B2D), a product by VRM AI Technology.",
        "publisher": {
            "@type": "Organization",
            "name": "VRM AI Technology Private Limited",
            "url": "https://www.vrmaitechnology.com/"
        }
    };

    return (
        <div className="rts-service-details-area basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>Bench to Deploy B2D | VRM AI Technology</title>
                <meta name="description" content="Bench to Deploy (B2D), a product by VRM AI Technology." />
                <meta property="og:title" content="Bench to Deploy B2D | VRM AI Technology" />
                <meta property="og:description" content="Bench to Deploy (B2D), a product by VRM AI Technology." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/products/bench-to-deploy" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bench to Deploy B2D | VRM AI Technology" />
                <meta name="twitter:description" content="Bench to Deploy (B2D), a product by VRM AI Technology." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
            </Helmet>

            {/* Hero Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Software Products &bull; VRM AI Technology
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    Bench to Deploy (B2D)
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Bench to Deploy (B2D), a product by VRM AI Technology.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Contact Us to Discuss Your Project <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/products" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        View All Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/service/04.jpg"
                                    alt="Bench to Deploy B2D - VRM AI Technology"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Overview Section */}
            <div className="vrm-full-width-section vrm-white-bg py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0e1022', marginBottom: '20px' }}>
                                About Bench to Deploy (B2D)
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '18px', marginBottom: '32px' }}>
                                Bench to Deploy (B2D), a product by VRM AI Technology.
                            </p>
                            <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '12px 30px' }}>
                                Contact Us <i className="far fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products from VRM AI Technology Suite */}
            <div className="vrm-full-width-section vrm-light-blue-bg py-5">
                <div className="container py-4">
                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0e1022' }}>
                                Other Products by VRM AI Technology
                            </h3>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h5 style={{ fontWeight: '700', color: '#0e1022' }}>Workflow AI</h5>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        AI recruitment screening suite featuring Xpress Screening, ScreenSage, VideoSage, and CodeSage.
                                    </p>
                                </div>
                                <Link to="/products/workflow" className="vrm-btn-detail mt-3">Explore Workflow AI <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h5 style={{ fontWeight: '700', color: '#0e1022' }}>People Connect</h5>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        AI citizen engagement platform.
                                    </p>
                                </div>
                                <Link to="/products/people-connect" className="vrm-btn-detail mt-3">Explore People Connect <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h5 style={{ fontWeight: '700', color: '#0e1022' }}>Exit Intelligence</h5>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                        AI HR offboarding insights through AI-led exit interviews and sentiment analysis.
                                    </p>
                                </div>
                                <Link to="/products/exitinterview" className="vrm-btn-detail mt-3">Explore Exit Intelligence <i className="fas fa-arrow-right"></i></Link>
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
