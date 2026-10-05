import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function Project() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Portfolio' }
    ];
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div className=''>
            <Helmet>
                <title>Our Portfolio & Case Studies | VRM AI Technology</title>
                <meta name="description" content="Explore VRM AI Technology's enterprise portfolio of AI solutions, business growth transformations, and technology implementations." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/project" />
                <meta name="robots" content="noindex, follow" />
                <meta property="og:title" content="Our Portfolio & Case Studies | VRM AI Technology" />
                <meta property="og:description" content="Explore VRM AI Technology's enterprise portfolio of AI solutions, business growth transformations, and technology implementations." />
                <meta property="og:url" content="https://www.vrmaitechnology.com/project" />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Portfolio & Case Studies | VRM AI Technology" />
                <meta name="twitter:description" content="Explore VRM AI Technology's enterprise portfolio of AI solutions, business growth transformations, and technology implementations." />
            </Helmet>

            <HeaderOne />

            <Breadcrumb title="Portfolio" breadcrumbs={breadcrumbs} />

            {/* project section srart */}
            <div className="rts-project-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-button-area-one">
                                <Tabs
                                    activeKey={activeKey}
                                    onSelect={(k) => setActiveKey(k)}
                                    id="controlled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="All Projects" />
                                    <Tab eventKey="profile" title="Business" />
                                    <Tab eventKey="contact" title="Solution" />
                                    <Tab eventKey="marketing" title="Marketing" />
                                </Tabs>
                            </div>
                            <div className="tab-content-area mt--50 mt_sm--30">
                                {activeKey === 'home' && (
                                    <TabContent>
                                        {/* tab product area */}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/01.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/02.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/03.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/04.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/05.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/06.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                        </div>
                                        {/* tab product area end*/}
                                    </TabContent>
                                )}
                                {activeKey === 'profile' && (
                                    <TabContent>
                                        {/* tab product area */}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/06.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/05.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/04.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/03.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/02.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/01.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                        </div>
                                        {/* tab product area end*/}
                                    </TabContent>
                                )}
                                {activeKey === 'contact' && (
                                    <TabContent>
                                        {/* tab product area */}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/06.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/05.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/04.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/03.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/02.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/01.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                        </div>
                                        {/* tab product area end*/}
                                    </TabContent>
                                )}
                                {activeKey === 'marketing' && (
                                    <TabContent>
                                        {/* tab product area */}
                                        <div className="row g-5">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/06.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/05.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/04.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/03.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/02.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                {/* single -product area */}
                                                <div className="rts-product-one">
                                                    <div className="thumbnail-area">
                                                        <img src="assets/images/product/01.jpg"
                                                            alt="VRM AI Solution Portfolio"
                                                        loading="lazy" />
                                                        <Link
                                                            className="rts-btn btn-primary rounded"
                                                            to={'#'}
                                                        >
                                                            <i className="far fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-contact-wrapper">
                                                        <span>Business Solution</span>
                                                        <Link to={'#'}>
                                                            <h5 className="title">Business Growth Check</h5>
                                                        </Link>
                                                        <p className="disc">
                                                            Ultricies nequenulla eros sapien cubilia nostra
                                                            viverra integer ornare prointa
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* single -product area End */}
                                            </div>
                                        </div>
                                        {/* tab product area end*/}
                                    </TabContent>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project section end */}

            <FooterOne />

        </div>
    )
}

export default Project
