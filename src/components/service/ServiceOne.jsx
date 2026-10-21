import React from 'react'
import { Link } from 'react-router-dom';

function ServiceOne() {
    return (
        <div>
            {/* rts service post area Start */}
            <div className="rts-service-area rts-section-gap vrm-enterprise-services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area service text-center wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '10px' }}>
                                <p className="pre-title">Our Services</p>
                                <h2 className="title">High Quality Services</h2>
                                <p className="disc mt-2">
                                    We deliver end‑to‑end AI solutions—from strategy and data pipelines to model deployment and MLOps—so you can ship reliable, enterprise-ready experiences faster.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                    <div className="background-service row g-4 justify-content-center">
                        {/* Service 1: AI Integration Services */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp d-flex" data-wow-delay=".2s">
                            <div className="service-one-inner one d-flex flex-column h-100 w-100">
                                <div className="thumbnail">
                                    <img src="assets/images/service/icon/05.svg"
                                        alt="AI Integration Services"
                                        width="48" height="48" loading="lazy" />
                                </div>
                                <div className="service-details d-flex flex-column flex-grow-1">
                                    <Link to={'/solutions/ai-integration-services'}>
                                        <h5 className="title">AI Integration Services</h5>
                                    </Link>
                                    <p className="disc">
                                        Embed AI into your existing apps and workflows with secure integrations and tailored automations.
                                    </p>
                                    <Link
                                        className="rts-read-more btn-primary mt-auto"
                                        to={'/solutions/ai-integration-services'}
                                    >
                                        <i className="far fa-arrow-right" />
                                        Explore Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: AI Development Services */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp d-flex" data-wow-delay=".3s">
                            <div className="service-one-inner two d-flex flex-column h-100 w-100">
                                <div className="thumbnail">
                                    <img src="assets/images/service/icon/02.svg"
                                        alt="AI Development Services"
                                        width="48" height="48" loading="lazy" />
                                </div>
                                <div className="service-details d-flex flex-column flex-grow-1">
                                    <Link to={'/solutions/ai-development-services'}>
                                        <h5 className="title">AI Development Services</h5>
                                    </Link>
                                    <p className="disc">
                                        Custom AI software engineering, bespoke neural networks, autonomous agents, and scalable cloud architectures.
                                    </p>
                                    <Link
                                        className="rts-read-more btn-primary mt-auto"
                                        to={'/solutions/ai-development-services'}
                                    >
                                        <i className="far fa-arrow-right" />
                                        Explore Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: AI Chatbot Development */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp d-flex" data-wow-delay=".4s">
                            <div className="service-one-inner three d-flex flex-column h-100 w-100">
                                <div className="thumbnail">
                                    <img src="assets/images/service/icon/03.svg"
                                        alt="AI Chatbot Development"
                                        width="48" height="48" loading="lazy" />
                                </div>
                                <div className="service-details d-flex flex-column flex-grow-1">
                                    <Link to={'/solutions/ai-chatbot-development'}>
                                        <h5 className="title">AI Chatbot Development</h5>
                                    </Link>
                                    <p className="disc">
                                        Intelligent multi-channel conversational chatbots with natural language understanding for automated support.
                                    </p>
                                    <Link
                                        className="rts-read-more btn-primary mt-auto"
                                        to={'/solutions/ai-chatbot-development'}
                                    >
                                        <i className="far fa-arrow-right" />
                                        Explore Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 4: AI Calling Agent */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp d-flex" data-wow-delay=".5s">
                            <div className="service-one-inner four d-flex flex-column h-100 w-100">
                                <div className="thumbnail">
                                    <img src="assets/images/service/icon/04.svg"
                                        alt="AI Calling Agent"
                                        width="48" height="48" loading="lazy" />
                                </div>
                                <div className="service-details d-flex flex-column flex-grow-1">
                                    <Link to={'/solutions/ai-calling-agent'}>
                                        <h5 className="title">AI Calling Agent</h5>
                                    </Link>
                                    <p className="disc">
                                        Natural, voice-driven outreach and support that automates customer and sales conversations.
                                    </p>
                                    <Link
                                        className="rts-read-more btn-primary mt-auto"
                                        to={'/solutions/ai-calling-agent'}
                                    >
                                        <i className="far fa-arrow-right" />
                                        Explore Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 5: Machine Learning Services */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp d-flex" data-wow-delay=".6s">
                            <div className="service-one-inner five d-flex flex-column h-100 w-100">
                                <div className="thumbnail">
                                    <img src="assets/images/service/icon/06.svg"
                                        alt="Machine Learning Services"
                                        width="48" height="48" loading="lazy" />
                                </div>
                                <div className="service-details d-flex flex-column flex-grow-1">
                                    <Link to={'/solutions/machine-learning-services'}>
                                        <h5 className="title">Machine Learning Services</h5>
                                    </Link>
                                    <p className="disc">
                                        Custom model development, MLOps, and lifecycle management to keep your AI performant in production.
                                    </p>
                                    <Link
                                        className="rts-read-more btn-primary mt-auto"
                                        to={'/solutions/machine-learning-services'}
                                    >
                                        <i className="far fa-arrow-right" />
                                        Explore Service
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service post area End */}
        </div>
    )
}

export default ServiceOne
