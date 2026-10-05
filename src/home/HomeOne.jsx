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
        <title>AI Software Company in Madurai &amp; Bengaluru | VRM AI</title>
        <meta name="description" content="VRM AI Technology is an AI software company in Madurai &amp; Bengaluru building GenAI platforms, conversational chatbots, voice agents, and ML systems." />
        <meta property="og:title" content="AI Software Company in Madurai &amp; Bengaluru | VRM AI" />
        <meta property="og:description" content="VRM AI Technology is an AI software company in Madurai &amp; Bengaluru building GenAI platforms, conversational chatbots, voice agents, and ML systems." />
        <meta property="og:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />
        <link rel="canonical" href="https://www.vrmaitechnology.com/" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Software Company in Madurai &amp; Bengaluru | VRM AI" />
        <meta name="twitter:description" content="VRM AI Technology is an AI software company in Madurai &amp; Bengaluru building GenAI platforms, conversational chatbots, voice agents, and ML systems." />
        <meta name="twitter:image" content="https://www.vrmaitechnology.com/assets/images/logo/vrm-og-image.png" />

        {/* Organization JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VRM AI Technology Private Limited",
            "alternateName": "VRM AI Technology",
            "url": "https://www.vrmaitechnology.com/",
            "logo": "https://www.vrmaitechnology.com/assets/images/logo/logo.png",
            "telephone": "+91 81233 48355",
            "email": "contactus@vrmaitechnology.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560100",
              "addressCountry": "IN"
            },
            "location": [
              {
                "@type": "Place",
                "name": "Headquarters / Registered Office",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560100",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "Place",
                "name": "Development Center",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Door No.209, 1st Floor, No.147, 5th St, Periyalar Nagar, Tiruppalai",
                  "addressLocality": "Madurai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "625014",
                  "addressCountry": "IN"
                }
              }
            ],
            "areaServed": ["Madurai", "Bengaluru", "Chennai", "India"],
            "sameAs": [
              "https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/",
              "https://x.com/vrmaitechnology",
              "https://www.instagram.com/vrmaitechnology/",
              "https://www.facebook.com/share/1Ck9vJyvW4/"
            ]
          })}
        </script>
      </Helmet>
      <HeaderOne className="header-transparent header-white-text" />
      <BannerOne />
      <HomeOverview />
      <AboutOne />
      <ServiceOne />
      <BusinessGoalOne />
      <WorkflowTestimonials
        title="Why teams keep choosing Workflow AI by VRM AI Technology"
        description="Hiring teams use Workflow AI by VRM AI Technology to move faster with better screening quality, while candidates get a cleaner and more consistent interview experience."
      />
      <ContactForm />
      <WhyChooseUsFooter />
      <FooterOne />

    </div>
  )
}

export default HomeOne;
