import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";
import HomeFive from "./HomeFive";
import HomeSix from "./HomeSix";
import HomeSeven from "./HomeSeven";
import HomeEight from "./HomeEight";
import HomeNine from "./HomeNine";
import HomeTen from "./HomeTen";
// inner pages
import OurService from "../inner/OurService";
import ServiceTwo from "../inner/ServiceTwo";
import ServiceThree from "../inner/ServiceThree";
import ServiceDetails from "../inner/ServiceDetails";
import Appoinment from "../inner/Appoinment";
import AboutUs from "../inner/AboutUs";
import PricingPlane from "../inner/PricingPlane";
import TestimonialsOne from "../inner/TestimonialsOne";
import Error from "../inner/Error";
import PrivacyPolicy from "../inner/PrivacyPolicy";
import TermsConditions from "../inner/TermsConditions";
import Project from "../inner/Project";
import ProjectTwo from "../inner/ProjectTwo";
import ProjectThree from "../inner/ProjectThree";
import ProjectFour from "../inner/ProjectFour";
import ProjectFive from "../inner/ProjectFive";
import ProjectDetails from "../inner/ProjectDetails";
import Team from "../inner/Team";
import TeamTwo from "../inner/TeamTwo";
import TeamThree from "../inner/TeamThree";
import TeamFour from "../inner/TeamFour";
import TeamFive from "../inner/TeamFive";
import TeamDetails from "../inner/TeamDetails";
import BlogList from "../inner/BlogList";
import BlogGrid from '../inner/BlogGrid';
import BlogDetails from '../inner/BlogDetails';
import BlogDetailsDefault from '../inner/BlogDetailsDefault';
import ContactUs from '../inner/ContactUs';
import Careers from '../inner/Careers';
import Workflow from '../inner/Workflow';
import XpressScreening from '../inner/XpressScreening';
import ScreenSage from '../inner/ScreenSage';
import VideoSage from '../inner/VideoSage';
import CodeSage from '../inner/CodeSage';
import AiBuddy from '../inner/AiBuddy';
import PeopleConnect from '../inner/PeopleConnect';
import AiExitInterview from '../inner/AiExitInterview';
import Visionix from '../inner/Visionix';
import AICallingAgent from '../inner/AICallingAgent';
import AIConsultingServices from '../inner/AIConsultingServices';
import AIChatbotDevelopment from '../inner/AIChatbotDevelopment';
import AIDevelopmentServices from '../inner/AIDevelopmentServices';
import AIIntegrationServices from '../inner/AIIntegrationServices';
import MachineLearningServices from '../inner/MachineLearningServices';
import WhatsAppAutomation from '../inner/WhatsAppAutomation';
import ProductsOverview from '../inner/ProductsOverview';

// onepage
import OnepageOne from '../onepage/OnepageOne';
import OnepageTwo from '../onepage/OnepageTwo';
import OnepageThree from '../onepage/OnepageThree';
import OnepageFour from '../onepage/OnepageFour';
import OnepageFIve from '../onepage/OnepageFIve';
import OnepageSix from '../onepage/OnepageSix';
import OnepageSeven from '../onepage/OnepageSeven';
import OnepageEight from '../onepage/OnepageEight';
import OnepageNine from '../onepage/OnepageNine';
import OnepageTen from '../onepage/OnepageTen';

function RouterPage() {
    return (
        <div>
            <Router>
                <LoadTop />
                <Routes>
                    <Route path="/" element={<HomeOne />}></Route>
                    <Route path="/home-two" element={<HomeTwo />}></Route>
                    <Route path="/home-three" element={<HomeThree />}></Route>
                    <Route path="/home-four" element={<HomeFour />}></Route>
                    <Route path="/home-five" element={<HomeFive />}></Route>
                    <Route path="/home-six" element={<HomeSix />}></Route>
                    <Route path="/home-seven" element={<HomeSeven />}></Route>
                    <Route path="/home-eight" element={<HomeEight />}></Route>
                    <Route path="/home-nine" element={<HomeNine />}></Route>
                    <Route path="/home-ten" element={<HomeTen />}></Route>
                    <Route path="/our-service" element={<OurService />}></Route>
                    <Route path="/service-2" element={<ServiceTwo />}></Route>
                    <Route path="/service-3" element={<ServiceThree />}></Route>
                    <Route path="/service-details" element={<ServiceDetails />}></Route>
                    <Route path="/appoinment" element={<Appoinment />}></Route>
                    <Route path="/about-us" element={<AboutUs />}></Route>
                    <Route path="/pricing-plane" element={<PricingPlane />}></Route>
                    <Route path="/testimonial-style-1" element={<TestimonialsOne />}></Route>
                    <Route path="/404" element={<Error />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/portfolio-style-2" element={<ProjectTwo />}></Route>
                    <Route path="/portfolio-style-3" element={<ProjectThree />}></Route>
                    <Route path="/portfolio-style-4" element={<ProjectFour />}></Route>
                    <Route path="/portfolio-style-5" element={<ProjectFive />}></Route>
                    <Route path="/project-details" element={<ProjectDetails />}></Route>
                    <Route path="/team" element={<Team />}></Route>
                    <Route path="/team-style-2" element={<TeamTwo />}></Route>
                    <Route path="/team-style-3" element={<TeamThree />}></Route>
                    <Route path="/team-style-4" element={<TeamFour />}></Route>
                    <Route path="/team-style-5" element={<TeamFive />}></Route>
                    <Route path="/team-details" element={<TeamDetails />}></Route>
                    <Route path="/blog-list" element={<BlogList />}></Route>
                    <Route path="/blog-grid" element={<BlogGrid />}></Route>
                    <Route path="/blog-details" element={<BlogDetails />}></Route>
                    <Route path="/blog/:id" element={<BlogDetails />}></Route>
                    <Route path="/blog-details-default" element={<BlogDetailsDefault />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                    <Route path="/careers" element={<Careers />}></Route>
                    <Route path="/products" element={<ProductsOverview />}></Route>
                    <Route path="/products/workflow" element={<Workflow />}></Route>
                    <Route path="/products/workflow/xpress-screening" element={<XpressScreening />}></Route>
                    <Route path="/products/workflow/screensage" element={<ScreenSage />}></Route>
                    <Route path="/products/workflow/videosage" element={<VideoSage />}></Route>
                    <Route path="/products/workflow/codesage" element={<CodeSage />}></Route>
                    <Route path="/products/aibuddy" element={<AiBuddy />}></Route>
                    <Route path="/products/people-connect" element={<PeopleConnect />}></Route>
                    <Route path="/products/exitinterview" element={<AiExitInterview />}></Route>
                    <Route path="/products/whatsapp" element={<WhatsAppAutomation />}></Route>
                    <Route path="/products/visionix" element={<Visionix />}></Route>
                    <Route path="/solutions/ai-calling-agent" element={<AICallingAgent />}></Route>
                    <Route path="/solutions/ai-consulting-services" element={<AIConsultingServices />}></Route>
                    <Route path="/solutions/ai-chatbot-development" element={<AIChatbotDevelopment />}></Route>
                    <Route path="/solutions/ai-development-services" element={<AIDevelopmentServices />}></Route>
                    <Route path="/solutions/ai-integration-services" element={<AIIntegrationServices />}></Route>
                    <Route path="/solutions/machine-learning-services" element={<MachineLearningServices />}></Route>

                    {/* onepage */}
                    <Route path="/onepage-one" element={<OnepageOne />}></Route>
                    <Route path="/onepage-two" element={<OnepageTwo />}></Route>
                    <Route path="/onepage-three" element={<OnepageThree />}></Route>
                    <Route path="/onepage-four" element={<OnepageFour />}></Route>
                    <Route path="/onepage-five" element={<OnepageFIve />}></Route>
                    <Route path="/onepage-six" element={<OnepageSix />}></Route>
                    <Route path="/onepage-seven" element={<OnepageSeven />}></Route>
                    <Route path="/onepage-eight" element={<OnepageEight />}></Route>
                    <Route path="/onepage-nine" element={<OnepageNine />}></Route>
                    <Route path="/onepage-ten" element={<OnepageTen />}></Route>
                    <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                    <Route path="/terms-conditions" element={<TermsConditions />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <BackToTop />
            </Router>
        </div>
    )
}

export default RouterPage