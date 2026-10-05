import React from 'react';
import { Helmet } from 'react-helmet-async';

import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function Team() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Team Style 1' }
    ];
    return (
        <div className=''>
            <Helmet>
                <title>Our Leadership & AI Experts Team | VRM AI Technology</title>
                <meta name="description" content="Meet the expert team of AI engineers, software architects, and business strategists powering VRM AI Technology." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/team" />
                <meta name="robots" content="noindex, follow" />
                <meta property="og:title" content="Our Leadership & AI Experts Team | VRM AI Technology" />
                <meta property="og:description" content="Meet the expert team of AI engineers, software architects, and business strategists powering VRM AI Technology." />
                <meta property="og:url" content="https://www.vrmaitechnology.com/team" />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Leadership & AI Experts Team | VRM AI Technology" />
                <meta name="twitter:description" content="Meet the expert team of AI engineers, software architects, and business strategists powering VRM AI Technology." />
            </Helmet>

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
                                        <img src="assets/images/team/tm/06.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/07.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/08.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/09.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/10.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/11.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/12.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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
                                        <img src="assets/images/team/tm/13.jpg"
                                            alt="Business_Team_single"
                                        loading="lazy" />
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

export default Team
