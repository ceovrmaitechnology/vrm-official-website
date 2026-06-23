import React, { useEffect } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";
import WOW from 'wow.js';

function TermsConditions() {
    useEffect(() => {
        new WOW().init();
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Terms of Service' }
    ];

    return (
        <div className="terms-conditions-page basic-font-family">
            <HeaderOne />
            <Breadcrumb title="Terms of Service" breadcrumbs={breadcrumbs} />

            <div className="rts-section-gap bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="content-area">
                                <h2>Terms of Service</h2>
                                <p className="mt-3">
                                    Last Updated: June 23, 2026
                                </p>
                                <hr />

                                <h4 className="mt-5">1. Terms</h4>
                                <p>
                                    By accessing the website at http://localhost:3001 or any of our properties, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                                </p>

                                <h4 className="mt-5">2. Use License</h4>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information or software) on VRM AI Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul>
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt to decompile or reverse engineer any software contained on VRM AI Technology's website;</li>
                                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                </ul>

                                <h4 className="mt-5">3. Disclaimer</h4>
                                <p>
                                    The materials on VRM AI Technology's website are provided on an 'as is' basis. VRM AI Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>

                                <h4 className="mt-5">4. Limitations</h4>
                                <p>
                                    In no event shall VRM AI Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VRM AI Technology's website, even if VRM AI Technology or a VRM AI Technology authorized representative has been notified orally or in writing of the possibility of such damage.
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

export default TermsConditions;
