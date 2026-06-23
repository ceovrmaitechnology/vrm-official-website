import React from 'react'
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import ServiceTen from "../components/service/ServiceTen";
import FaqTwo from "../components/faq/FaqTwo";
import PricingThree from "../components/pricing/PricingThree";




import FooterOne from "../components/footer/FooterOne";

function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];
    return (
        <div className=''>

            <HeaderOne />
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            <ServiceTen />
            <FaqTwo />
            <PricingThree />


            <FooterOne />

        </div>
    )
}

export default OurService