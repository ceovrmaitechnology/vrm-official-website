
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../components/header/HeaderOne';
import FooterOne from '../components/footer/FooterOne';
import WOW from 'wow.js';

function MachineLearningServices() {
    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="rts-machine-learning-services">
            <HeaderOne className="header-white-text" />
            {/* 1. Hero Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content-two">
                                <span className="pre-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#00C6FF', opacity: 1 }}>
                                    Machine Learning
                                </span>
                                <h1 className="ai-agent-hero-title wow fadeInUp text-white ms-0" data-wow-delay=".3s" style={{ fontSize: '54px', lineHeight: '1.1' }}>
                                    Transform Data into Operational Intelligence
                                </h1>
                                <p className="ai-agent-hero-desc wow fadeInUp text-white-50 ms-0" data-wow-delay=".4s" style={{ fontSize: '18px', maxWidth: '600px' }}>
                                    VRM AI Technology’s machine learning services empower organizations through predictive models, automation, and real-time decision support.
                                    <br /><br />
                                    By leveraging advanced algorithms and deep learning frameworks, we help businesses optimize processes, enhance efficiency, and unlock new opportunities for growth.
                                </p>
                                <div className="banner-btn wow fadeInUp mt-5" data-wow-delay=".5s">
                                    <Link to="/contactus" className="rts-btn btn-white">
                                        Book a Free Consultation <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ai-agent-hero-img-container wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/service/07.jpg" alt="Machine Learning Services" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Core Services Section - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Expertise</span>
                                <h2 className="title">Core Machine Learning Services</h2>
                                <p className="disc mt-3">
                                    Our machine learning offerings are engineered for enterprise-grade performance, accuracy, and scalability. We develop tailored ML solutions that solve complex business challenges and deliver measurable value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-brain", title: "Custom Machine Learning Solutions", desc: "We design and implement bespoke machine learning systems to address specific business needs. These solutions automate repetitive tasks, enable personalized customer experiences, and extract meaningful insights from complex datasets, driving competitive advantage and measurable impact." },
                            { icon: "fas fa-code-branch", title: "Machine Learning Model Development", desc: "We architect, train, validate, and deploy machine learning models that deliver reliable prediction and analytical insights. Our capabilities span classification, regression, clustering, anomaly detection, and other advanced model types to ensure your data drives strategic decisions." },
                            { icon: "fas fa-project-diagram", title: "Deep Learning & Neural Networks", desc: "We build deep learning architectures and neural network models for advanced capabilities such as computer vision, natural language understanding, sequence modeling, and pattern recognition — enabling innovation in domains like image analytics, text intelligence, and sensor data interpretation." },
                            { icon: "fas fa-server", title: "ML System Integration", desc: "Our ML system integration services embed trained models into your existing platforms and data pipelines, enabling real-time inference and workflow automation without disrupting core operational systems." }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100 p-5">
                                    <div className="thumbnail mb-4">
                                        <i className={`${service.icon} fa-3x text-primary`}></i>
                                    </div>
                                    <h5 className="title">{service.title}</h5>
                                    <p className="disc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Why Choose Us - Dark Brand Gradient */}
            <div className="vrm-full-width-section ptb--100" style={{ background: 'linear-gradient(135deg, #1b277c, #11142c)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title text-white-50" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '800' }}>Why VRM AI</span>
                                <h2 className="title text-white mt-2">Why Businesses Choose VRM AI Technology</h2>
                                <p className="disc text-white-50 mt-4 mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                                    Choosing the right partner for machine learning services is critical to achieving long-term growth, minimizing risk, and enabling scalable innovation. VRM AI Technology combines advanced technical expertise with a consultative delivery methodology to create ML solutions aligned with strategic business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-4">
                        {[
                            { icon: "fas fa-globe", title: "Enterprise expertise across domains", desc: "Proven experience across FinTech, Healthcare, Retail, Manufacturing, Energy, and Real Estate." },
                            { icon: "fas fa-cogs", title: "Customized development", desc: "Tailored ML strategies and models to match organizational needs." },
                            { icon: "fas fa-expand-arrows-alt", title: "Scalable & future-ready solutions", desc: "Systems engineered to grow with your data and operational demands." },
                            { icon: "fas fa-users-cog", title: "Client-centric approach", desc: "Transparent collaboration and measurable outcome focus." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                <div className="vrm-industry-card text-center h-100 bg-white" style={{ borderRadius: '15px', padding: '40px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                    <div className="thumbnail"><i className={`${item.icon} fa-3x mb-4`} style={{ color: '#3B4ECC' }}></i></div>
                                    <h5 className="title text-dark mb-3">{item.title}</h5>
                                    <p className="disc text-muted m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Tech Stack - Marquee - White BG */}
            <div className="vrm-full-width-section vrm-white-bg">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title">Our Tech Stack</h2>
                                <p className="disc mt-3">We use industry-standard tools and frameworks to build robust ML solutions.</p>
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
                                    <div className="tech-marquee-item"><i className="fas fa-brain fa-lg" style={{ color: '#FF9900' }}></i> TensorFlow</div>
                                    <div className="tech-marquee-item"><i className="fas fa-fire fa-lg" style={{ color: '#EE4C2C' }}></i> PyTorch</div>
                                    <div className="tech-marquee-item"><i className="fas fa-cube fa-lg" style={{ color: '#D00000' }}></i> Keras</div>
                                    <div className="tech-marquee-item"><i className="fas fa-cogs fa-lg" style={{ color: '#F7931E' }}></i> Scikit-learn</div>
                                    <div className="tech-marquee-item"><i className="fas fa-eye fa-lg" style={{ color: '#5C3EE8' }}></i> OpenCV</div>
                                    <div className="tech-marquee-item"><i className="fab fa-aws fa-lg" style={{ color: '#FF9900' }}></i> SageMaker</div>
                                    <div className="tech-marquee-item"><i className="fab fa-microsoft fa-lg" style={{ color: '#00A4EF' }}></i> Azure ML</div>
                                    <div className="tech-marquee-item"><i className="fab fa-google fa-lg" style={{ color: '#4285F4' }}></i> Google AI</div>
                                    <div className="tech-marquee-item"><i className="fab fa-docker fa-lg" style={{ color: '#2496ED' }}></i> Docker</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Our Process - Light Blue BG */}
            <div className="vrm-full-width-section vrm-light-blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <span className="pre-title" style={{ color: '#3B4ECC' }}>Our Approach</span>
                                <h2 className="title">Our Step-by-Step Approach</h2>
                                <p className="disc mt-3">Our structured ML delivery framework ensures that machine learning initiatives align with business outcomes and produce measurable ROI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { step: "01", title: "Discovery & Data Analysis", desc: "We assess business objectives, technical requirements, and data landscapes to identify high-impact ML opportunities and define success criteria." },
                            { step: "02", title: "Model Selection & Development", desc: "We select appropriate algorithms and model architectures and develop ML solutions through iterative training, validation, and tuning to ensure accuracy and reliability." },
                            { step: "03", title: "Custom Solution Deployment", desc: "We deploy machine learning applications tailored to specific use cases, integrating models with enterprise systems and data pipelines to power real-time intelligence." },
                            { step: "04", title: "Integration & Optimization", desc: "We integrate ML models into existing workflows and continuously optimize performance through monitoring, retraining, and refinement to sustain operational effectiveness." }
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

            {/* 6. FAQ Section - Enterprise Gradient */}
            <div className="vrm-full-width-section vrm-enterprise-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rts-title-area" data-text="">
                                <h2 className="title mb-5 text-white">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion vrm-faq-accordion" id="accordionExample">
                                {[
                                    { q: "What are machine learning services?", a: "Machine learning services involve the design, development, and integration of ML models and systems that enable data-driven predictions, automation, and intelligence across business processes." },
                                    { q: "What are custom machine learning solutions?", a: "Custom ML solutions are tailored data-intelligence systems built to address specific organizational requirements, from automation workflows to personalization and predictive insights." },
                                    { q: "What is machine learning model development?", a: "Machine learning model development encompasses algorithm selection, data preprocessing, training, validation, and deployment of models that produce accurate and reliable predictions or classifications." },
                                    { q: "Which industries benefit from ML?", a: "Industries including finance, healthcare, retail, manufacturing, real estate, and energy benefit from ML through automation, enhanced insights, risk reduction, and process optimization." },
                                    { q: "How long does it take to implement ML solutions?", a: "Implementation timelines vary by complexity, data maturity, and integration needs. Typical enterprise ML engagements range from a few weeks for initial models to several months for full production integration and optimization." }
                                ].map((faq, index) => (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button className={`accordion-button ${openAccordion === index + 1 ? '' : 'collapsed'}`} type="button" onClick={() => toggleAccordion(index + 1)}>
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
            </div>

            <FooterOne />
        </div>
    );
}

export default MachineLearningServices;
