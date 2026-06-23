import React, { useEffect } from 'react';
import WOW from 'wow.js';
import HeaderOne from "../components/header/HeaderOne";
import BannerOne from "../components/banner/BannerOne";
import HomeOverview from "../components/home/HomeOverview";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import BusinessGoalOne from "../components/businessgoal/BusinessGoalOne";
import WorkflowTestimonials from "../components/testimonials/WorkflowTestimonials";
// import Counterup from "../components/counterup/Counterup";
// import GalleryOne from "../components/gallery/GalleryOne";
// import BrandOne from "../components/brand/BrandOne";
// import TeamOne from "../components/team/TeamOne";
// import Feature from "../components/feature/Feature";
// import TestimonialOne from "../components/testimonials/TestimonialOne";
// import BlogOne from "../components/blog/BlogOne";
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
      <HeaderOne className="header-transparent header-white-text" />
      <BannerOne />
      <HomeOverview />
      <AboutOne />
      <ServiceOne />
      <BusinessGoalOne />
      <WorkflowTestimonials
        title="Why teams keep choosing Workflow.AI"
        description="Hiring teams use Workflow.AI to move faster with better screening quality, while candidates get a cleaner and more consistent interview experience."
      />
      {/* <Counterup /> */}
      {/* <GalleryOne /> */}
      {/* <BrandOne />
      <TeamOne /> */}
      {/* <Feature />
      <TestimonialOne /> */}
      {/* <BlogOne /> */}
      <ContactForm />
      <WhyChooseUsFooter />
      <FooterOne />

    </div>
  )
}

export default HomeOne
