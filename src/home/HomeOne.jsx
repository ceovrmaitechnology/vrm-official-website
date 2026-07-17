import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import WOW from 'wow.js';
import HeaderOne from "../components/header/HeaderOne";
import BannerOne from "../components/banner/BannerOne";
import HomeOverview from "../components/home/HomeOverview";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import BusinessGoalOne from "../components/businessgoal/BusinessGoalOne";
import WorkflowTestimonials from "../components/testimonials/WorkflowTestimonials";
import ContactForm from "../components/contactform/ContactForm";
import FooterOne from "../components/footer/FooterOne";
import WhyChooseUsFooter from "../components/whychooseus/WhyChooseUsFooter";

function HomeOne() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);

  return (
    <div>
      <Helmet>
        <title>VRM AI Technology | AI Software & Product Development</title>
        <meta name="description" content="VRM AI Technology delivers GenAI platforms, ML systems, and automation products for enterprises. Explore Workflow.AI, People Connect (Global), AI Buddy, and more." />
        <meta property="og:title" content="VRM AI Technology | AI Software & Product Development" />
        <meta property="og:description" content="VRM AI Technology delivers GenAI platforms, ML systems, and automation products for enterprises. Explore Workflow.AI, People Connect (Global), AI Buddy, and more." />
                <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
        <link rel="canonical" href="https://www.vrmaitechnology.com/" />
      
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VRM AI Technology | AI Software & Product Development" />
                <meta name="twitter:description" content="VRM AI Technology delivers GenAI platforms, ML systems, and automation products for enterprises. Explore Workflow.AI, People Connect (Global), AI Buddy, and more." />
                <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
            </Helmet>
      <HeaderOne className="header-transparent header-white-text" />
      <BannerOne />
      <HomeOverview />
      <AboutOne />
      <ServiceOne />
      <BusinessGoalOne />
      <WorkflowTestimonials
        title="Why teams keep choosing WorkflowAI.in"
        description="Hiring teams use WorkflowAI.in to move faster with better screening quality, while candidates get a cleaner and more consistent interview experience."
      />
      <ContactForm />
      <WhyChooseUsFooter />
      <FooterOne />

    </div>
  )
}

export default HomeOne
