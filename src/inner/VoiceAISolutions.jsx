import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function VoiceAISolutions() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What are Voice AI solutions and conversational calling agents?",
            a: "Voice AI solutions are real-time speech systems that combine low-latency streaming automatic speech recognition (ASR), large language models (LLMs) for reasoning, and neural text-to-speech (TTS) synthesis. They engage in natural, bi-directional phone conversations with human-like latency, intonation, and conversational turns."
        },
        {
            q: "How does your Voice AI sound compared to traditional IVR systems?",
            a: "Traditional Interactive Voice Response (IVR) systems rely on robotic, pre-recorded audio prompts and rigid numeric keypress menus. Our Voice AI solutions use advanced neural acoustic models with emotional inflection, natural breath pauses, and adaptive interruption handling, delivering a conversational experience indistinguishable from a human specialist."
        },
        {
            q: "Can Voice AI integrate directly with our telecom and PBX infrastructure?",
            a: "Yes. Our voice agents connect directly via SIP trunking, WebRTC, Twilio, Asterisk, and enterprise cloud telephony systems. They function seamlessly with your existing call center software, CRM records, and automated dialers."
        },
        {
            q: "What use cases do Voice AI solutions excel at?",
            a: "Primary use cases include inbound customer support, outbound payment reminders, appointment scheduling, technical candidate screening (via ScreenSage), language speaking coaching (via AI Buddy), and real estate lead qualification (via VRM Reality)."
        },
        {
            q: "What happens when a caller asks a question outside the agent's scope?",
            a: "The voice agent executes an intelligent warm transfer. It initiates a SIP refer or bridge transfer to a live human agent while transmitting the complete call audio transcript, caller intent, and verified CRM data directly to the agent's dashboard."
        }
    ];

    return (
        <div className="rts-ai-strategy-services basic-font-family">
            <HeaderOne className="header-white-text" />
            <Helmet>
                <title>Voice AI Solutions | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology delivers voice AI solutions, real-time calling agents, speech synthesis, and conversational telephony automation for modern enterprises." />
                <meta property="og:title" content="Voice AI Solutions | VRM AI Technology" />
                <meta property="og:description" content="VRM AI Technology delivers voice AI solutions, real-time calling agents, speech synthesis, and conversational telephony automation for modern enterprises." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/voice-ai-solutions" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Voice AI Solutions &amp; Conversational Voice Agents | VRM AI Technology" />
                <meta name="twitter:description" content="VRM AI Technology delivers voice AI solutions, real-time calling agents, speech synthesis, and conversational telephony automation for modern enterprises." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    })}
                </script>
            </Helmet>

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF' }}>
                                    Ultra-Low Latency Speech AI &bull; Telephony Automation
                                </span>
                                <h1 className="title wow fadeInUp text-white" data-wow-delay=".3s">
                                    Voice AI Solutions &amp; Conversational Voice Agents
                                </h1>
                                <p className="disc wow fadeInUp text-white-50" data-wow-delay=".4s">
                                    Autonomous voice AI from VRM AI Technology enables conversational voice agents to conduct natural telephone calls for inbound support, automated outbound campaigns, and live candidate screening.
                                </p>
                                <div className="banner-btn wow fadeInUp d-flex flex-wrap gap-3" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn">
                                        Deploy Voice AI Agents <i className="far fa-arrow-right ms-2" style={{ fontSize: '13px' }}></i>
                                    </Link>
                                    <Link to="/solutions/ai-calling-agent" className="vrm-blue-to-white-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                        Calling Agent Architecture
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-image-two wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AICallingAgent.png"
                                    alt="Voice AI Solutions and Conversational Voice Agents - VRM AI"
                                    style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Technical Differentiation */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <span className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Streaming Audio Architecture
                            </span>
                            <h2 className="title mt-2 mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#0e1022', lineHeight: '1.2' }}>
                                Natural Speech Latency Engineered for Real-World Conversations
                            </h2>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '16px' }}>
                                Human conversation depends on split-second timing. Pauses longer than 800 milliseconds feel awkward, disjointed, and robotic. VRM AI Technology utilizes full-duplex streaming audio pipelines that combine streaming speech-to-text, fast inference LLMs, and real-time neural voice synthesis to respond in under 450 milliseconds.
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                                Our conversational voice models support live interruption handling (barge-in): when a caller interrupts the agent mid-sentence, the system immediately halts speech playback, acknowledges the customer's new input, and re-routes the dialog naturally without awkward robotic stutters.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #3B4ECC' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>&lt; 450ms Latency</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Sub-second conversational turns mimicking natural human cadence and intonation.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="p-3 rounded" style={{ background: '#f8fafc', borderLeft: '4px solid #00C6FF' }}>
                                        <h6 style={{ fontWeight: '700', marginBottom: '4px' }}>Full Barge-In Support</h6>
                                        <p style={{ fontSize: '13px', margin: 0, color: '#666' }}>Immediate audio cut-off when caller speaks, allowing effortless multi-turn interruption.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 p-md-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e2e8f8 100%)', border: '1px solid #cbd5e1' }}>
                                <h4 style={{ fontWeight: '800', color: '#1b277c', marginBottom: '16px' }}>
                                    Voice AI Telephony Stack
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: '#334155' }}>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-satellite-dish text-primary mt-1"></i>
                                        <span><strong>SIP Trunk &amp; WebRTC Integration:</strong> Direct interconnect with global telecom carriers, enterprise PBXs, Twilio, and cloud contact centers.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-microphone-alt text-primary mt-1"></i>
                                        <span><strong>Acoustic Neural Synthesis:</strong> Expressive tone modulation matching brand personality with realistic regional accents.</span>
                                    </li>
                                    <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-sync-alt text-primary mt-1"></i>
                                        <span><strong>Live CRM &amp; API Orchestration:</strong> Fetch account details, look up order statuses, and trigger backend workflows during the active phone call.</span>
                                    </li>
                                    <li style={{ marginBottom: '0px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <i className="fas fa-headset text-primary mt-1"></i>
                                        <span><strong>Smart Warm Transfer:</strong> Bridge calls to human customer service representatives with full conversation transcripts and context cards.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Products Powered by Voice AI */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <span className="pre-title" style={{ color: '#00C6FF' }}>Live Platforms</span>
                                <h2 className="title text-white">Proven Voice AI Platforms in Production</h2>
                                <p className="disc mt-3 text-white-50">
                                    Our proprietary enterprise applications demonstrate the speed and reliability of our speech technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                <div className="thumbnail mb-3">
                                    <i className="fas fa-user-check fa-3x" style={{ color: '#00C6FF' }}></i>
                                </div>
                                <h5 className="title text-white mb-2">ScreenSage Voice Screening</h5>
                                <p className="disc text-white-50 mb-4">
                                    Automated first-round candidate voice interviews powered by <Link to="/products/workflow" style={{ color: '#00C6FF' }}>Workflow AI</Link>. Evaluates verbal communication, role competency, and candidate fluency with structured scoring.
                                </p>
                                <Link to="/products/workflow/screensage" className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                    Explore ScreenSage <i className="fas fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#00C6FF' }}>
                                <div className="thumbnail mb-3">
                                    <i className="fas fa-volume-up fa-3x" style={{ color: '#00C6FF' }}></i>
                                </div>
                                <h5 className="title text-white mb-2">AI Buddy Language Coach</h5>
                                <p className="disc text-white-50 mb-4">
                                    Personalized interactive speaking tutor providing real-time acoustic feedback, pronunciation grading, and natural spoken dialogue in multiple languages.
                                </p>
                                <Link to="/products/aibuddy" className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                    Explore AI Buddy <i className="fas fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="vrm-industry-card text-center h-100" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                                <div className="thumbnail mb-3">
                                    <i className="fas fa-door-open fa-3x" style={{ color: '#00C6FF' }}></i>
                                </div>
                                <h5 className="title text-white mb-2">Exit Intelligence</h5>
                                <p className="disc text-white-50 mb-4">
                                    Conduct empathetic, automated conversational exit interviews with departing employees to extract candid retention insights and organizational sentiment.
                                </p>
                                <Link to="/products/exitinterview" className="vrm-btn-detail" style={{ color: '#00C6FF' }}>
                                    Explore Exit Intelligence <i className="fas fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. FAQs Section */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p className="disc">Technical specifications, telephony integration, and deployment workflows for Voice AI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionVoice">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button
                                                className={`accordion-button ${openAccordion === index + 1 ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(index + 1)}
                                            >
                                                {faq.q}
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${openAccordion === index + 1 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. CTA Section */}
            <div className="vrm-full-width-section vrm-enterprise-gradient py-5">
                <div className="container text-center py-4">
                    <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#fff' }}>
                        Transform Your Telephone Communications with Voice AI
                    </h2>
                    <p style={{ maxWidth: '680px', margin: '16px auto 32px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                        Experience a live interactive demonstration of our conversational voice agents. Contact VRM AI Technology to discuss your telephony automation goals.
                    </p>
                    <Link to="/contactus#send-message" className="vrm-blue-to-white-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
                        Book Live Voice AI Demo <i className="far fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default VoiceAISolutions;
