import React, { useState } from 'react';




import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";


function Project() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio Style 2' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Portfolio Style 2" breadcrumbs={breadcrumbs} />


            {/*case-study-area start*/}
            <section className="case-study-area case-bg2 nav-style-1 pt--115 pt_md--60 pt_xs--60 pb--115 pb_md--60 pb_xs--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/06.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Solution</h6>
                                        <h5 className="fs-20 text-heding3">Digital Startup Agency</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/02.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Marketing</h6>
                                        <h5 className="fs-20 text-heding3">Business Growth Check</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/03.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Business Growth</h6>
                                        <h5 className="fs-20 text-heding3">Digital Business Path</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/04.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Marketing</h6>
                                        <h5 className="fs-20 text-heding3">Business Growth Model</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/05.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Solution</h6>
                                        <h5 className="fs-20 text-heding3">Strategy Growth Check</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="item">
                                <div className="cases-wrapper2">
                                    <div className="item-image">
                                        <img src="assets/images/product/06.jpg" alt="Image" />
                                    </div>
                                    <div className="item-content">
                                        <h6>Business Growth</h6>
                                        <h5 className="fs-20 text-heding3">Marketing Solution</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, conse ctetur a dipisicing elit
                                        </p>
                                    </div>
                                    <Link to={'/project-details'} className="read-more">
                                        Case Details{" "}
                                        <span className="f-right">
                                            <i className="far fa-long-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*case-study-area end*/}


            <FooterOne />

        </div>
    )
}

export default Project