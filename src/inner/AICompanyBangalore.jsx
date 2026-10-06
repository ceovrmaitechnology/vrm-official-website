import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import { Link } from 'react-router-dom';

export default function AICompanyBangalore() {
    return (
        <div>
            <Helmet>
                <title>AI Software Company in Bangalore | VRM AI Technology</title>
                <meta name="description" content="VRM AI Technology is headquartered in Bangalore, building generative AI, agentic AI and machine learning solutions for enterprises." />
                <link rel="canonical" href="https://www.vrmaitechnology.com/ai-company-bangalore" />
            </Helmet>
            <HeaderOne />
            <div className="container ptb--120">
                <h1>AI Software Company in Bangalore</h1>
                <p>VRM AI Technology is headquartered in Bangalore, building generative AI, agentic AI, and machine learning solutions for enterprises. Operating from GoodWorks Infinity Park in Electronic City Phase I, our headquarters drives the strategic vision and client engagement for our global operations.</p>
                <p>We specialize in identifying high-impact areas for digital transformation and seamlessly integrating platforms like <Link to="/products/vrm-reality">VRM Reality</Link> into existing business frameworks. Our Bangalore office coordinates closely with our Madurai development center to ensure that every solution is delivered with excellence. <Link to="/contactus">Contact us</Link> to start your transformation journey.</p>
            </div>
            <FooterOne />
        </div>
    );
}