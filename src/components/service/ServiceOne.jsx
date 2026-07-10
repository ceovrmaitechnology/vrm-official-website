import React from 'react'
import { Link } from 'react-router-dom';
function ServiceOne() {
    return (
        <div>
            <>
                {/* rts service post area  Start*/}
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
                        <div className="background-service row">
                            {/* start single Service */}

                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/04.svg"
                                            alt="AI automation service dashboard"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/solutions/ai-calling-agent'}>
                                            <h5 className="title">AI Calling Agent</h5>
                                        </Link>
                                        <p className="disc">
                                            Natural, voice-driven outreach and support that scales customer and sales conversations 24/7.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/solutions/ai-calling-agent'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay=".4s">
                                <div className="service-one-inner five">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/05.svg"
                                            alt="AI automation service dashboard"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/solutions/ai-integration-services'}>
                                            <h5 className="title">AI Integration Services</h5>
                                        </Link>
                                        <p className="disc">
                                            Embed AI into your existing apps and workflows with secure integrations and tailored automations.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/solutions/ai-integration-services'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay=".6s">
                                <div className="service-one-inner six">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/06.svg"
                                            alt="AI automation service dashboard"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/solutions/machine-learning-services'}>
                                            <h5 className="title">Machine Learning Services</h5>
                                        </Link>
                                        <p className="disc">
                                            Custom model development, MLOps, and lifecycle management to keep your AI performant in production.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            to={'/solutions/machine-learning-services'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                        </div>
                        {/* <div className="row mt--40">
                            <div className="col-12">
                                <div className="rts-title-area text-center">
                                    <p className="pre-title">Why Choose Us</p>
                                    <h3 className="title">Built to deliver AI-first outcomes</h3>
                                </div>
                                <ul className="list-unstyled d-flex flex-column gap-2 align-items-center mt-3">
                                    <li><i className="fas fa-check-circle me-2 text-primary"></i>AI-first product company</li>
                                    <li><i className="fas fa-check-circle me-2 text-primary"></i>Custom + product-based AI solutions</li>
                                    <li><i className="fas fa-check-circle me-2 text-primary"></i>Secure, scalable, and compliant architecture</li>
                                    <li><i className="fas fa-check-circle me-2 text-primary"></i>Industry-ready AI deployment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cta-one-bg col-12">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">
                                            Let’s discuss about how we can help make your business better
                                        </h3>
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" to={'/contactus'}>
                                            Lets Work Together
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* rts service post area ENd */}
            </>

        </div>
    )
}

export default ServiceOne
