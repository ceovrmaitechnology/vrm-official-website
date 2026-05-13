import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function BusinessGoalOne() {
    return (
        <div>
            {/* business goal area */}
            <div className="rts-business-goal rts-section-gap" id='goal'>
                <div className="container">
                    <div className="row align-items-stretch">
                        {/* business goal left */}
                        <div className="col-lg-6 d-none d-lg-flex h-100">
                            <div className="business-goal-one wow fadeInUp w-100 h-100 d-flex position-relative" data-wow-delay=".2s">
                                <img
                                    className="w-100 h-100 flex-grow-1"
                                    src="/assets/images/home/home-2.png"
                                    alt="Business_Goal"
                                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                                />
                            </div>
                        </div>
                        {/* business goal right */}
                        <div className="col-lg-6">
                            <div className="business-goal-right wow fadeInRight" data-wow-delay=".4s">
                                <div className="rts-title-area business text-start pl--30">

                                    <h2 className="title">We manage business globally</h2>
                                </div>
                                <div className="rts-business-goal pl--30">
                                    <div className="single-goal">
                                        <img
                                            src="/assets/images/business-goal/icon/01.svg"
                                            alt="Custom AI Solutions Icon"
                                            className="thumb"
                                        />
                                        <div className="goal-wrapper">
                                            <h6 className="title">Custom AI Solutions</h6>
                                            <p className="disc">
                                                We design and integrate tailored generative AI workflows that align perfectly with your unique operational and strategic goals.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-goal">
                                        <img
                                            src="/assets/images/business-goal/icon/02.svg"
                                            alt="Enterprise Scale Security Icon"
                                            className="thumb"
                                        />
                                        <div className="goal-wrapper">
                                            <h6 className="title">Enterprise Scale & Security</h6>
                                            <p className="disc">
                                                Deploy intelligent applications securely across your entire organization with robust compliance, monitoring, and MLOps infrastructure.
                                            </p>
                                            <div className="goal-button-wrapper mt-4">
                                                <Link
                                                    to={'/contactus'}
                                                    className="rts-btn btn-primary color-h-black vrm-btn-compact"
                                                >
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right area business ENd */}
                    </div>
                </div>
            </div>
            {/* business goal area End */}
        </div>
    )
}

export default BusinessGoalOne