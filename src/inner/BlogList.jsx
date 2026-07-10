
import React from 'react';
import HeaderOne from "../components/header/HeaderOne";
import post from '../data/post.json';
import BlogGridMain from './BlogGridMain';
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function BlogList() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog List' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Blog List" breadcrumbs={breadcrumbs} />

            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* rts blog post area */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            {post.map((data, index) => {
                                return (
                                    <div key={index} className="blog-single-post-listing">
                                        {
                                            <BlogGridMain
                                                blogID={data.id}
                                                blogImage={`${data.image}`}
                                                blogAuthor={data.author}
                                                blogPublishedDate={data.publishedDate}
                                                blogCategory={data.category}
                                                blogTitle={data.title}
                                                descripTion={data.descripTion}
                                            />
                                        }
                                    </div>
                                )
                            }).slice(0, 4)}

                            {/* pagination area */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                        <div className="pagination">
                                            <button className="active">01</button>
                                            <button>02</button>
                                            <button>03</button>
                                            <button>04</button>
                                            <button>
                                                <i className="fal fa-angle-double-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination area End */}
                        </div>
                        {/* rts-blog post end area */}
                        {/*rts blog wized area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60">
                            {/* single wized start */}
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Search Hear</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input
                                            className="Search"
                                            type="text"
                                            placeholder="Enter Keyword"
                                        />
                                        <button>
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Solution Model
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                More Business <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                VRM AI Solutions <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Consulting Busiuness
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/02.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/03.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="gallery-inner">
                                        <div className="row-1 single-row">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/01.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/02.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/03.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                        <div className="row-2 single-row">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/04.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/05.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/06.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Popular Tags</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <Link to={'#'}>Services</Link>
                                        <Link to={'#'}>Business</Link>
                                        <Link to={'#'}>Growth</Link>
                                        <Link to={'#'}>Finance</Link>
                                        <Link to={'#'}>UI/UX Design</Link>
                                        <Link to={'#'}>Solution</Link>
                                        <Link to={'#'}>Speed</Link>
                                        <Link to={'#'}>Strategy</Link>
                                        <Link to={'#'}>Technology</Link>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link to="#">
                                        <img src="assets/images/logo/logo.jpeg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" to={'/contactus'}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {/* single wized End */}
                        </div>
                        {/* rts- blog wized end area */}
                    </div>
                </div>
            </div>

            <FooterOne />

        </div>
    )
}

export default BlogList