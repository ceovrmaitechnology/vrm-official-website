import React, { useState } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';



function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Testimonial Style 1' }
    ];

    return (
        <div className=''>

            <HeaderOne />
            <Breadcrumb title="Testimonial Style 1" breadcrumbs={breadcrumbs} />


            {/* start client review area start */}
            <div className="rts-client-review-two rts-section-gapTop pb--120">
                <div className="container">
                    <div className="row mt--30">
                        <div className="title-area left-right testimonial-h2 inner">
                            <div className="title-left">
                                <span>Our Testimonial</span>
                                <h2 className="title mt--15">Our Client Reviews</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-12">
                            <div className="swiper ">

                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh2_clients"
                                    speed={700}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 },
                                        900: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        580: { slidesPerView: 2 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <Link to={'#'} className="thumbnail thumb">
                                                    <img
                                                        src="assets/images/testimonials/02.png"
                                                        alt="testimonials_area"
                                                    />
                                                </Link>
                                                <div className="discription">
                                                    <Link to={'#'}>
                                                        <h6 className="title">David Smith</h6>
                                                    </Link>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <Link to={'#'}>
                                                        <img
                                                            src="assets/images/testimonials/icon/logo-01.png"
                                                            alt="Client_logo"
                                                        />
                                                    </Link>
                                                    <div className="star-icon icon-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <Link to={'#'} className="thumbnail thumb">
                                                    <img
                                                        src="assets/images/testimonials/02.png"
                                                        alt="testimonials_area"
                                                    />
                                                </Link>
                                                <div className="discription">
                                                    <Link to={'#'}>
                                                        <h6 className="title">David Smith</h6>
                                                    </Link>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <Link to={'#'}>
                                                        <img
                                                            src="assets/images/testimonials/icon/logo-01.png"
                                                            alt="Client_logo"
                                                        />
                                                    </Link>
                                                    <div className="star-icon icon-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <Link to={'#'} className="thumbnail thumb">
                                                    <img
                                                        src="assets/images/testimonials/02.png"
                                                        alt="testimonials_area"
                                                    />
                                                </Link>
                                                <div className="discription">
                                                    <Link to={'#'}>
                                                        <h6 className="title">David Smith</h6>
                                                    </Link>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <Link to={'#'}>
                                                        <img
                                                            src="assets/images/testimonials/icon/logo-01.png"
                                                            alt="Client_logo"
                                                        />
                                                    </Link>
                                                    <div className="star-icon icon-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <Link to={'#'} className="thumbnail thumb">
                                                    <img
                                                        src="assets/images/testimonials/02.png"
                                                        alt="testimonials_area"
                                                    />
                                                </Link>
                                                <div className="discription">
                                                    <Link to={'#'}>
                                                        <h6 className="title">David Smith</h6>
                                                    </Link>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <Link to={'#'}>
                                                        <img
                                                            src="assets/images/testimonials/icon/logo-01.png"
                                                            alt="Client_logo"
                                                        />
                                                    </Link>
                                                    <div className="star-icon icon-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <Link to={'#'} className="thumbnail thumb">
                                                    <img
                                                        src="assets/images/testimonials/02.png"
                                                        alt="testimonials_area"
                                                    />
                                                </Link>
                                                <div className="discription">
                                                    <Link to={'#'}>
                                                        <h6 className="title">David Smith</h6>
                                                    </Link>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <Link to={'#'}>
                                                        <img
                                                            src="assets/images/testimonials/icon/logo-01.png"
                                                            alt="Client_logo"
                                                        />
                                                    </Link>
                                                    <div className="star-icon icon-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start client review area end */}


            <FooterOne />

        </div>
    )
}

export default OurService