import React from 'react';
import { Link } from 'react-router-dom';
import './home-overview.css';


function HomeOverview() {
    return (
        <>
            {/* Solutions Overview Section */}
            {/* Solutions Overview CTA Section */}
            <section className="vrm-cta-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="vrm-cta-banner__content wow fadeInUp" data-wow-delay=".2s">
                                {/* <p className="pre-title">Solutions Overview</p> */}
                                <h2 className="title">VRM  AI Technology Is Trusted Source in Product And Support</h2>
                                <p className="desc">
                                    At VRM AI Technology, trust is the foundation of everything we build. We deliver innovative, AI-powered products designed to solve real-world business challenges with precision, scalability, and reliability. Our solutions are crafted with enterprise-grade architecture, ensuring performance, security, and seamless integration.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="vrm-hero__cards">
                    {[
                        {
                            id: 1,
                            icon: "assets/images/service/icon/01.svg",
                            title: "AI Consulting Services",
                            desc: "Our AI Consulting Services help organizations unlock the true potential of Artificial Intelligence. We guide businesses through every stage of their AI journey from strategy and feasibility analysis to development, deployment, and optimization.",
                            link: "/solutions/ai-consulting-services",
                            bgImage: "assets/images/about/1.jpeg"
                        },
                        {
                            id: 2,
                            icon: "assets/images/service/icon/02.svg",
                            title: "AI Development Services",
                            desc: "Our AI Development Services focus on designing, building, and deploying advanced AI-powered systems tailored to your business needs. We transform complex ideas into scalable, secure, and high-performance AI applications that enhance efficiency, automate workflows, and accelerate innovation.",
                            link: "/solutions/ai-development-services",
                            bgImage: "assets/images/about/2.jpeg"
                        },
                        {
                            id: 3,
                            icon: "assets/images/service/icon/03.svg",
                            title: "Our Products",
                            desc: "AI-powered interview automation platform designed to streamline and modernize the hiring process. It enables organizations to conduct structured, intelligent, and scalable candidate evaluations through advanced AI technology.",
                            link: "/products/workflowai",
                            bgImage: "assets/images/about/3.jpeg"
                        }
                    ].map((product) => (
                        <div key={product.id} className="vrm-product-card wow fadeInUp" data-wow-delay=".3s">
                            <div
                                className="vrm-product-card-bg"
                                style={{ backgroundImage: `url(${product.bgImage})` }}
                            ></div>
                            <div className="vrm-product-card__content">
                                <div className="vrm-hero__icon">
                                    <img src={product.icon} alt={product.title} />
                                </div>
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                                <Link className="vrm-btn-detail" to={product.link}>
                                    Know More<i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Products Highlight Section */}
            <section className="vrm-products-highlight" style={{ paddingTop: '100px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="vrm-overview__section-header wow fadeInUp" data-wow-delay=".2s" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="vrm-overview__eyebrow" style={{ color: '#3B4ECC', fontWeight: '700', textAlign: 'center', margin: '0 auto', display: 'block' }}>Products Highlight</p>
                        <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>Intelligent Products Powered by WorkFlow.AI</h2>
                    </div>
                    <div className="vrm-hero__cards">
                        {[
                            {
                                id: 1,
                                icon: "assets/images/service/icon/01.svg",
                                title: "ScreenSage",
                                desc: "Smart screen monitoring & insights to keep distributed teams aligned, secure, and compliant.",
                                link: "/products/workflow/screensage",
                                bgImage: "assets/images/workflow/screensage/screensage-image.png"
                            },
                            {
                                id: 2,
                                icon: "assets/images/service/icon/02.svg",
                                title: "VideoSage",
                                desc: "AI-powered video intelligence for analysis, summarization, and rapid content search.",
                                link: "/products/workflow/videosage",
                                bgImage: "assets/images/workflow/videosage/videosage-image.png"
                            },
                            {
                                id: 3,
                                icon: "assets/images/service/icon/03.svg",
                                title: "CodeSage",
                                desc: "Intelligent code analysis & automation to accelerate delivery and improve software quality.",
                                link: "/products/workflow/codesage",
                                bgImage: "assets/images/workflow/codesage/codesage-image.png"
                            }
                        ].map((product) => (
                            <div key={product.id} className="vrm-product-card wow fadeInUp" data-wow-delay=".3s">
                                <div
                                    className="vrm-product-card-bg"
                                    style={{ backgroundImage: `url(${product.bgImage})` }}
                                ></div>
                                <div className="vrm-product-card__content">
                                    <div className="vrm-hero__icon">
                                        <img src={product.icon} alt={product.title} />
                                    </div>
                                    <h3>{product.title}</h3>
                                    <p>{product.desc}</p>
                                    <Link className="vrm-btn-detail" to={product.link}>
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeOverview;


