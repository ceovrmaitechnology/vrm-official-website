import React, { useState } from 'react';


import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";


function ProjectThree() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio Style 3' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Portfolio Style 3" breadcrumbs={breadcrumbs} />


            {/*portfolio-area start*/}
            <section className="portfolio-area style-3 pt--110 pb--90 pt--md--60 pb--md-30 pt_xs--60 pb_xs--30">
                <div className="container">
                    <div className="grid row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat3">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/01.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Development</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">Digital Startup Agency</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat1">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/02.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Branding</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">Business Growth Check</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat2">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/03.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Design</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">Digital Business Path</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat1">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/04.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Branding</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">Mobile App Design</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat4">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/05.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Marketing</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">SEO Marketing Website</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 grid-item cat2">
                            <div className="portfolio-wrapper2 mb-30">
                                <div className="img-fluid">
                                    <img src="assets/images/product/06.jpg" alt="Portfolio Img" />
                                    <div className="portfolio-content">
                                        <Link className="fw-bold text-white" to={'/project-details'}>
                                            Veiw Details{" "}
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <div className="text">
                                        <p className="p-category">
                                            <Link href="#">Design</Link>
                                        </p>
                                        <div className="p-title">
                                            <Link href="#">Creative Fashion Designer</Link>
                                        </div>
                                    </div>
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