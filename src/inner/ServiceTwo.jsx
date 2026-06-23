import React from 'react'
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import ServiceEleven from "../components/service/ServiceEleven";
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
            <ServiceEleven />
            <PricingThree />


            <FooterOne />

        </div>
    )
}

export default OurService