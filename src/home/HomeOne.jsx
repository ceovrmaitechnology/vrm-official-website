import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
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
import SuperintelligenceDirection from "../components/common/SuperintelligenceDirection";

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
      <SEO />
      <HeaderOne className="header-transparent header-white-text" />
      <BannerOne />
      <HomeOverview />
      <AboutOne />
      <ServiceOne />
      <BusinessGoalOne />
      <WorkflowTestimonials
        title="Why teams keep choosing Workflow SI by VRM AI Technology"
        description="Hiring teams use Workflow SI by VRM AI Technology to move faster with better screening quality, while candidates get a cleaner and more consistent interview experience."
      />
      <SuperintelligenceDirection withCtaBand={true} />
      <ContactForm />
      <WhyChooseUsFooter />
      <FooterOne />

    </div>
  )
}

export default HomeOne;
