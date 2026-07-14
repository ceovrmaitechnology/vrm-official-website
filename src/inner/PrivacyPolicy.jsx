import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Privacy Policy' }
    ];

    return (
        <div className="privacy-policy-page basic-font-family">
            <HeaderOne />
            <Helmet>
                <title>Privacy Policy | VRM AI Technology</title>
                <meta name="description" content="Read the Privacy Policy of VRM AI Technology to understand how we collect, protect, and use your personal information across our platform and services." />
                <meta property="og:title" content="Privacy Policy — VRM AI Technology" />
                <meta property="og:description" content="Read the Privacy Policy of VRM AI Technology to understand how we collect, protect, and use your personal information across our platform and services." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
                <link rel="canonical" href="https://www.vrmaitechnology.com/privacy-policy" />
            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy — VRM AI Technology" />
                <meta name="twitter:description" content="Read the Privacy Policy of VRM AI Technology to understand how we collect, protect, and use your personal information across our platform and services." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
            <Breadcrumb title="Privacy Policy" breadcrumbs={breadcrumbs} />

            <div className="rts-section-gap bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="content-area">
                                <h2>Privacy Policy</h2>
                                <p className="mt-3">
                                    Last Updated: June 23, 2026
                                </p>
                                <hr />

                                <h4 className="mt-5">1. Information We Collect</h4>
                                <p>
                                    VRM AI Technology PVT LTD collects information to provide better services to all our users. We collect information in the following ways:
                                </p>
                                <ul>
                                    <li><strong>Information you give us:</strong> For example, our services require you to sign up for an account, fill out contact forms, or send project requests. When you do, we ask for personal information like your name, email address, and telephone number.</li>
                                    <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them, like when you visit a website or view and interact with our content.</li>
                                </ul>

                                <h4 className="mt-5">2. How We Use Information We Collect</h4>
                                <p>
                                    We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect VRM AI Technology and our users. We also use this information to offer you tailored content.
                                </p>

                                <h4 className="mt-5">3. Information Security</h4>
                                <p>
                                    We work hard to protect VRM AI Technology and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
                                </p>
                                <ul>
                                    <li>We encrypt many of our services using SSL.</li>
                                    <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
                                </ul>

                                <h4 className="mt-5">4. Contacting Us</h4>
                                <p>
                                    If you have any questions about this Privacy Policy, please feel free to contact us through our website contact form.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}

export default PrivacyPolicy;
