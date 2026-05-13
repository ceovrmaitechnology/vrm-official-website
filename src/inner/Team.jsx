import React, { useState } from 'react';


import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";


function ProjectThree() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Team Style 1' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Team Style 1" breadcrumbs={breadcrumbs} />




            {/* team area start*/}
            <div className="rts-team-area rts-section-gap bg-team-color">
                <div className="container">
                    <div className="row g-5">
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/06.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Archer Graham</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/07.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Amelia Clover</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/08.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Beckett Hayden</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/09.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Julian Wyat</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/10.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Archer Graham</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/11.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Amelia Clover</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/12.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Beckett Hayden</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                        {/* team single start */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="team-single-one-start">
                                <div className="team-image-area">
                                    <Link to={'/team-details'}>
                                        <img
                                            src="assets/images/team/tm/13.jpg"
                                            alt="Business_Team_single"
                                        />
                                        <div className="team-social">
                                            <div className="main">
                                                <i className="fal fa-plus" />
                                            </div>
                                            <div className="team-social-one">
                                                <i className="fab fa-youtube" />
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-instagram" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="single-details">
                                    <Link to={'/team-details'}>
                                        <h5 className="title">Julian Wyat</h5>
                                    </Link>
                                    <p>Finance Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* team single end */}
                    </div>
                </div>
            </div>
            {/* team area End */}






            <FooterOne />

        </div>
    )
}

export default ProjectThree