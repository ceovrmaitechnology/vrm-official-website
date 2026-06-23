import React, { useState } from 'react';


import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";


function ProjectThree() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio Style 4' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Portfolio Style 4" breadcrumbs={breadcrumbs} />


            {/*portfolio-area start*/}
            <section className="portfolio-area style-4 pt--120 pb--120 pt_xs--60 pt_xs--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/01.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/02.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/03.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/04.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/05.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="portfolio-wrapper">
                                    <div className="img-fluid">
                                        <img src="assets/images/product/06.jpg" alt="Portfolio Img" />
                                    </div>
                                    <div className="single-portfolio">
                                        <span>UI &amp; UX, IT Solution</span>
                                        <h4 className="portfolio-title text-white">
                                            Smartrics Web Solution
                                        </h4>
                                    </div>
                                    <Link className="pf-btn" to={'/project-details'}>
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*portfolio-area end*/}




            <FooterOne />

        </div>
    )
}

export default ProjectThree