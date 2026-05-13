
import React from 'react';

function AboutOne() {
    return (
        <div>

            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50 d-flex flex-column justify-content-center">
                            <div className="rts-title-area wow fadeInUp" data-wow-delay=".2s">

                                <h2 className="title">Driving Innovation Through Artificial Intelligence</h2>
                            </div>
                            <div className="about-inner wow fadeInUp" data-wow-delay=".4s">
                                <p className="disc">
                                    VRM AI Technology is an AI solutions and product-based company delivering intelligent Gen AI, automation platforms, and machine learning systems for modern businesses. We design, build, and deploy AI-powered solutions that help organizations automate workflows, improve customer engagement, and make smarter business decisions. We are a Gen AI company focused on creating scalable, secure, and real-world AI services and products that drive measurable business impact.
                                </p>
                                {/* start about success area */}
                                <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Built to deliver AI-first outcomes</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">AI-first product company</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Custom + product-based AI solutions</p>
                                        </div>
                                    </div>
                                    {/* left wrapper end */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Secure, scalable, and compliant architecture</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Industry-ready AI deployment</p>
                                        </div>
                                    </div>
                                </div>
                                {/* start about success area */}
                                {/* about founder & get in touch start */}

                                {/* about founder & get in touch end */}
                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1 d-none d-lg-flex h-100">
                            <div className="about-one-thumbnail w-100 h-100 position-relative">
                                <img
                                    src="assets/images/home/home-1.png"
                                    alt="about-finbiz"
                                    className="w-100 h-100"
                                    style={{ borderRadius: '16px' }}
                                />
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}

        </div >
    )
}

export default AboutOne
