
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function AICallingAgent() {
    const [openAccordion, setOpenAccordion] = React.useState(1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    }

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-ai-calling-agent">
            <HeaderOne className="header-white-text" />

            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF', opacity: 1 }}>
                                    Seamless Communication with AI
                                </span>
                                <h1 className="ai-agent-hero-title wow fadeInUp text-white ms-0" data-wow-delay=".3s" style={{ fontSize: '54px', lineHeight: '1.1' }}>
                                    Imagine a Team Member Who is Always On.
                                </h1>
                                <p className="ai-agent-hero-desc wow fadeInUp text-white-50 ms-0" data-wow-delay=".4s" style={{ fontSize: '18px', maxWidth: '600px' }}>
                                    That’s what our AI calling agent does: it feels natural, works 24/7, and handles over 1000 calls simultaneously to keep your business connected.
                                    <br /><br />
                                    At VRM AI, we create enterprise-grade voice agents that automate complex workflows while delivering a human-centric experience.
                                </p>
                                <div className="banner-btn wow fadeInUp mt-5" data-wow-delay=".5s">
                                    <Link to="/contactus#send-message" className="rts-btn btn-white">
                                        Book a Free Consultation <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ai-agent-hero-img-container wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/Solutions/AICallingAgent.png" alt="AI Calling Agent Dashboard" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. What Makes Us Different - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Why Choose Us</span>
                                <h2 className="title">What Makes Our AI Different</h2>
                                <p className="disc mt-3">
                                    We prioritize natural language understanding and emotional intelligence, ensuring your AI agent sounds more like a partner and less like a robot.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            {
                                title: "Inbound Calls",
                                desc: "Handle unlimited concurrent customer queries with zero wait time.",
                                tags: ["Support", "Zero Wait", "24/7"],
                                bgClass: "bg-blue-light",
                                delay: ".2s"
                            },
                            {
                                title: "Outbound Campaigns",
                                desc: "Scale proactive outreach for leads, renewals, and feedback.",
                                tags: ["Sales", "Leads", "Growth"],
                                bgClass: "bg-orange-light",
                                delay: ".4s"
                            },
                            {
                                title: "Multilingual",
                                desc: "Fluent in 95+ languages and dialects for global reach.",
                                tags: ["Global", "95+ Langs", "Native"],
                                bgClass: "bg-green-light",
                                delay: ".6s"
                            },
                            {
                                title: "Real-time Analytics",
                                desc: "Live operational dashboards and sentiment analysis.",
                                tags: ["Insights", "Data", "Live"],
                                bgClass: "bg-purple-light",
                                delay: ".2s"
                            },
                            {
                                title: "Seamless Integration",
                                desc: "Native connections to Salesforce, HubSpot, and custom APIs.",
                                tags: ["CRM", "API", "HubSpot"],
                                bgClass: "bg-pink-light",
                                delay: ".4s"
                            },
                            {
                                title: "Smart Handoff",
                                desc: "Intelligent routing to human agents for complex scenarios.",
                                tags: ["Routing", "Hybrid", "Smart"],
                                bgClass: "bg-yellow-light",
                                delay: ".6s"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={feature.delay}>
                                <div className={`vrm-modern-card ${feature.bgClass}`}>
                                    <div className="vrm-modern-card-content">
                                        <h3 className="title">{feature.title}</h3>
                                        <p className="disc">{feature.desc}</p>
                                        <div className="vrm-card-tags">
                                            {feature.tags.map((tag, i) => (
                                                <span key={i} className="vrm-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="vrm-modern-card-footer">
                                        <span className="explore-text">Explore</span>
                                        <div className="explore-btn">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Industries - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Industries</span>
                                <h2 className="title">Industries We Serve</h2>
                                <p className="disc mt-3">Tailored AI solutions for sectors where communication is critical.</p>
                            </div>
                        </div>
                    </div>

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
                        className="pb-5 vrm-equal-height-swiper"
                        style={{ paddingBottom: '50px' }} // Add padding for shadow and hover effects
                    >
                        {[
                            { title: "Financial Services", desc: "Secure banking support, fraud alerts, and EMI reminders.", img: "/assets/images/service/03.jpg" },
                            { title: "Healthcare", desc: "Patient scheduling, post-care follow-ups, and triage.", img: "/assets/images/service/02.jpg" },
                            { title: "Retail & E-Commerce", desc: "Order tracking, 24/7 support, and personalized offers.", img: "/assets/images/service/04.jpg" },
                            { title: "Real Estate", desc: "Lead qualification, property viewing, and tenant support.", img: "/assets/images/service/08.jpg" },
                            { title: "Logistics", desc: "Delivery coordination, driver support, and tracking updates.", img: "/assets/images/service/05.jpg" },
                            { title: "Hospitality", desc: "Booking management, concierge services, and guest feedback.", img: "/assets/images/service/06.jpg" }
                        ].map((industry, index) => (
                            <SwiperSlide key={index}>
                                <div className="vrm-industry-slide-card bg-white">
                                    <div className="vrm-industry-slide-img-container">
                                        <img src={industry.img} alt={industry.title} />
                                    </div>
                                    <div className="vrm-industry-slide-content">
                                        <h5 className="vrm-industry-slide-title">{industry.title}</h5>
                                        <p className="vrm-industry-slide-desc">{industry.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* 4. Use Cases - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Use Cases</span>
                                <h2 className="title">Proven Applications</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 g-4">
                        {[
                            "Lead Qualification", "Appointment Scheduling", "Customer Feedback",
                            "Payment Reminders", "Order Confirmation", "Event Engagement"
                        ].map((useCase, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="vrm-industry-card p-4 h-100 d-flex align-items-center">
                                    <i className="fas fa-check-circle text-success me-3 fa-lg"></i>
                                    <h5 className="title m-0" style={{ fontSize: '18px' }}>{useCase}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Process Section - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Process</span>
                                <h2 className="title">How We Deploy</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {[
                            { step: "01", title: "Discovery", desc: "We analyze your call flows and objectives." },
                            { step: "02", title: "Design", desc: "Scripting and voice persona creation." },
                            { step: "03", title: "Integration", desc: "Connecting to your CRM and telephony." },
                            { step: "04", title: "Launch", desc: "Live testing and performance tuning." }
                        ].map((process, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${idx * 2}s`}>
                                <div className="vrm-process-step-refined bg-white p-4 h-100">
                                    <span className="step-num" style={{ fontSize: '32px', color: '#CBD5E1', fontWeight: '800' }}>{process.step}</span>
                                    <h5 className="title mt-3">{process.title}</h5>
                                    <p className="disc small">{process.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. Tech Stack - Marquee - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">Our Tech Stack</h2>
                            </div>
                        </div>
                    </div>
                    {/* Infinite Scroll Marquee */}
                    <div className="tech-marquee-wrapper">
                        <div className="tech-marquee-track">
                            {/* Duplicating for infinite effect */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="tech-marquee-item"><i className="fab fa-python fa-lg" style={{ color: '#3776AB' }}></i> Python</div>
                                    <div className="tech-marquee-item"><i className="fab fa-node fa-lg" style={{ color: '#68A063' }}></i> Node.js</div>
                                    <div className="tech-marquee-item"><i className="fab fa-react fa-lg" style={{ color: '#61DAFB' }}></i> React</div>
                                    <div className="tech-marquee-item"><i className="fab fa-aws fa-lg" style={{ color: '#FF9900' }}></i> AWS</div>
                                    <div className="tech-marquee-item"><i className="fab fa-google fa-lg" style={{ color: '#4285F4' }}></i> Google Cloud</div>
                                    <div className="tech-marquee-item"><i className="fas fa-database fa-lg" style={{ color: '#FF6F00' }}></i> TensorFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-server fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
                                    <div className="tech-marquee-item"><i className="fas fa-code-branch fa-lg" style={{ color: '#F05032' }}></i> Git</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. FAQ - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title text-white">Common Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionExample">
                                {[
                                    { q: "What is an AI Calling Agent?", a: "A virtual assistant that handles inbound/outbound calls using natural language processing." },
                                    { q: "Does it sound robotic?", a: "No, we use advanced neural voice synthesis to ensure human-like intonation and latency." },
                                    { q: "Can it integrate with my CRM?", a: "Yes, we support native integrations with major CRMs and custom webhooks." },
                                    { q: "Is it secure?", a: "We adhere to enterprise security standards including data encryption and compliance protocols." },
                                    { q: "How fast can we launch?", a: "Typical deployment takes 2-4 weeks depending on complexity." }
                                ].map((faq, index) => (
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
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${openAccordion === index + 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
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

                {/* SEO Keywords */}

            </div>

            <FooterOne />
        </div>
    );
}

export default AICallingAgent;
