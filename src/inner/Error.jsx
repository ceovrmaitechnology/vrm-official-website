import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";

function Error() {

    return (
        <div className=''>

            <HeaderOne />
            <Helmet>
                <title>Page Not Found | VRM AI Technology</title>
                <meta name="description" content="Sorry, the page you are looking for does not exist on VRM AI Technology." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/404" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            {/* rts- 404 area start */}
            <div className="rts-404-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="404wrapper text-center">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/shape/404.png" alt="404 Page Not Found Illustration" loading="lazy" />
                                </div>
                                <h1 className="title mt--40">Oops! Nothing Was Found</h1>
                                <p className="disc">
                                    Sorry, we couldn’t find the page you were looking for. You can return to our homepage or explore our core offerings below.
                                </p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                                    <Link className="rts-btn btn-primary" to={'/'}>
                                        Back To Homepage
                                    </Link>
                                    <Link className="rts-btn btn-secondary" to={'/products'} style={{ padding: '12px 24px', borderRadius: '6px', border: '1px solid #3B4ECC', color: '#3B4ECC', textDecoration: 'none', fontWeight: '600' }}>
                                        Explore Products
                                    </Link>
                                    <Link className="rts-btn btn-secondary" to={'/solutions'} style={{ padding: '12px 24px', borderRadius: '6px', border: '1px solid #3B4ECC', color: '#3B4ECC', textDecoration: 'none', fontWeight: '600' }}>
                                        View Solutions
                                    </Link>
                                    <Link className="rts-btn btn-secondary" to={'/contactus'} style={{ padding: '12px 24px', borderRadius: '6px', border: '1px solid #3B4ECC', color: '#3B4ECC', textDecoration: 'none', fontWeight: '600' }}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts- 404 area end */}

            <FooterOne />

        </div>
    )
}

export default Error
