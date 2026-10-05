import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import Breadcrumb from './Breadcrumb';
import WOW from 'wow.js';

function Articles() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Articles' }
    ];

    return (
        <div className="articles-page basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>AI Articles &amp; Technical Insights | VRM AI</title>
                <meta name="description" content="Read technical articles and insights on Generative AI, conversational voice agents, and machine learning architectures by VRM AI Technology." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/articles" />
                <meta name="robots" content="noindex, follow" />
                <meta property="og:title" content="AI Articles &amp; Technical Insights | VRM AI" />
                <meta property="og:description" content="Read technical articles and insights on Generative AI, conversational voice agents, and machine learning architectures by VRM AI Technology." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Articles &amp; Technical Insights | VRM AI" />
                <meta name="twitter:description" content="Read technical articles and insights on Generative AI, conversational voice agents, and machine learning architectures by VRM AI Technology." />
            </Helmet>

            <Breadcrumb title="AI Articles &amp; Technical Insights" breadcrumbs={breadcrumbs} />

            <div className="rts-blog-list-area rts-section-gap bg-white">
                <div className="container" style={{ maxWidth: '960px' }}>
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <p className="disc">
                                Explore engineering perspectives, implementation notes, and research updates from our artificial intelligence development teams in Madurai and Bengaluru.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 rounded-4 shadow-sm border h-100">
                                <span className="badge bg-primary mb-2">Conversational AI</span>
                                <h4>Architecting Enterprise AI Voice Calling Agents</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                    Exploring sub-500ms audio pipeline orchestration, streaming speech-to-text, and conversational turn-taking for enterprise telephony.
                                </p>
                                <Link to="/solutions/ai-calling-agent" className="vrm-btn-detail">Explore Calling Solutions &rarr;</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 rounded-4 shadow-sm border h-100">
                                <span className="badge bg-info text-white mb-2">Generative AI</span>
                                <h4>Production Generative AI Systems</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                                    Techniques for eliminating model errors, managing enterprise document pipelines, and deploying reliable conversational interfaces.
                                </p>
                                <Link to="/generative-ai-development" className="vrm-btn-detail">Explore GenAI Solutions &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default Articles;
