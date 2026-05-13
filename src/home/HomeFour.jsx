import React from 'react'
import HeaderFour from "../components/header/HeaderFour";
import BannerFour from "../components/banner/BannerFour";
import ServiceFour from "../components/service/ServiceFour";
import CallToActionFour from "../components/calltoaction/CallToActionFour";
import BusinessGoalThree from "../components/businessgoal/BusinessGoalThree";
import WorkingProcessTwo from "../components/workingprocess/WorkingProcessTwo";
import TeamThree from "../components/team/TeamThree";
import ContactFormThree from "../components/contactform/ContactFormThree";
import BlogFour from "../components/blog/BlogFour";
import BradnFour from "../components/brand/BradnFour";





import FooterFour from "../components/footer/FooterFour";

function HomeOne() {
    return (
        <div className='home-violet'>

            <HeaderFour />
            <BannerFour />
            <ServiceFour />
            <CallToActionFour />

            <BusinessGoalThree />

            <WorkingProcessTwo />
            <TeamThree />
            <ContactFormThree />
            <BlogFour />
            <BradnFour />
            <FooterFour />

        </div>
    )
}

export default HomeOne