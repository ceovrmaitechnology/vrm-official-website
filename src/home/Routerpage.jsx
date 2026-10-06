import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import HomeOne from "./HomeOne";

// Lazy-loaded Inner Pages (Code Splitting for Lighthouse Performance)
const SolutionsOverview = lazy(() => import('../inner/SolutionsOverview'));
const AboutUs = lazy(() => import('../inner/AboutUs'));
const ContactUs = lazy(() => import('../inner/ContactUs'));
const Careers = lazy(() => import('../inner/Careers'));
const Workflow = lazy(() => import('../inner/Workflow'));
const XpressScreening = lazy(() => import('../inner/XpressScreening'));
const ScreenSage = lazy(() => import('../inner/ScreenSage'));
const VideoSage = lazy(() => import('../inner/VideoSage'));
const CodeSage = lazy(() => import('../inner/CodeSage'));
const VrmReality = lazy(() => import('../inner/VrmReality'));
const AiBuddy = lazy(() => import('../inner/AiBuddy'));
const PeopleConnect = lazy(() => import('../inner/PeopleConnect'));
const AiExitInterview = lazy(() => import('../inner/AiExitInterview'));
const Visionix = lazy(() => import('../inner/Visionix'));
const BenchToDeploy = lazy(() => import('../inner/BenchToDeploy'));
const AICallingAgent = lazy(() => import('../inner/AICallingAgent'));
// Removed AIConsultingServices
const AIChatbotDevelopment = lazy(() => import('../inner/AIChatbotDevelopment'));
const AIDevelopmentServices = lazy(() => import('../inner/AIDevelopmentServices'));
const AIIntegrationServices = lazy(() => import('../inner/AIIntegrationServices'));
const MachineLearningServices = lazy(() => import('../inner/MachineLearningServices'));
const ProductsOverview = lazy(() => import('../inner/ProductsOverview'));
const AICompanyMadurai = lazy(() => import('../inner/AICompanyMadurai'));
const AICompanyBangalore = lazy(() => import('../inner/AICompanyBangalore'));
const AIConsultingChennai = lazy(() => import('../inner/AIConsultingChennai'));
const AIInnovationIndia = lazy(() => import('../inner/AIInnovationIndia'));

const GenerativeAIDevelopment = lazy(() => import('../inner/GenerativeAIDevelopment'));
const PrivacyPolicy = lazy(() => import('../inner/PrivacyPolicy'));
const TermsConditions = lazy(() => import('../inner/TermsConditions'));
// Removed Articles import
const Error = lazy(() => import('../inner/Error'));

function RouterPage() {
    return (
        <div>
            <Router>
                <LoadTop />
                <Suspense fallback={<div className="vrm-route-loader" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
                    <Routes>
                        {/* Core Pages */}
                        <Route path="/" element={<HomeOne />}></Route>
                        <Route path="/about-us" element={<AboutUs />}></Route>
                        <Route path="/contactus" element={<ContactUs />}></Route>
                        <Route path="/careers" element={<Careers />}></Route>
                        <Route path="/solutions" element={<SolutionsOverview />}></Route>
                        <Route path="/our-service" element={<Navigate to="/solutions" replace />}></Route>
                        <Route path="/products" element={<ProductsOverview />}></Route>

                        {/* Location Landing Pages */}
                        <Route path="/ai-company-madurai" element={<AICompanyMadurai />}></Route>
                        <Route path="/ai-company-bangalore" element={<AICompanyBangalore />}></Route>
                        
                        
                        <Route path="/ai-consulting-chennai" element={<AIConsultingChennai />}></Route>
                        <Route path="/ai-innovation-india" element={<AIInnovationIndia />}></Route>

                        {/* Services & Solutions Pages */}
                        <Route path="/generative-ai-development" element={<GenerativeAIDevelopment />}></Route>
                        <Route path="/solutions/generative-ai-development" element={<Navigate to="/generative-ai-development" replace />}></Route>
                        <Route path="/solutions/ai-chatbot-development" element={<AIChatbotDevelopment />}></Route>
                        <Route path="/ai-chatbot-development" element={<Navigate to="/solutions/ai-chatbot-development" replace />}></Route>
                        <Route path="/solutions/ai-calling-agent" element={<AICallingAgent />}></Route>
                        <Route path="/voice-ai-solutions" element={<Navigate to="/solutions/ai-calling-agent" replace />}></Route>
                        <Route path="/solutions/ai-consulting-services" element={<Navigate to="/solutions" replace />}></Route>
                        <Route path="/ai-consulting" element={<Navigate to="/solutions" replace />}></Route>
                        <Route path="/solutions/ai-development-services" element={<AIDevelopmentServices />}></Route>
                        <Route path="/solutions/ai-integration-services" element={<AIIntegrationServices />}></Route>
                        <Route path="/solutions/machine-learning-services" element={<MachineLearningServices />}></Route>

                        {/* Products Pages */}
                        <Route path="/products/workflow" element={<Workflow />}></Route>
                        <Route path="/products/workflow/xpress-screening" element={<XpressScreening />}></Route>
                        <Route path="/products/workflow/screensage" element={<ScreenSage />}></Route>
                        <Route path="/products/workflow/videosage" element={<VideoSage />}></Route>
                        <Route path="/products/workflow/codesage" element={<CodeSage />}></Route>
                        <Route path="/products/people-connect" element={<PeopleConnect />}></Route>
                        <Route path="/products/aibuddy" element={<AiBuddy />}></Route>
                        <Route path="/products/exitinterview" element={<AiExitInterview />}></Route>
                        <Route path="/products/visionix" element={<Visionix />}></Route>
                        <Route path="/products/vrm-reality" element={<VrmReality />}></Route>
                        <Route path="/products/vevora" element={<Navigate to="/products/vrm-reality" replace />}></Route>
                        <Route path="/products/vrm-real-estate" element={<Navigate to="/products/vrm-reality" replace />}></Route>
                        <Route path="/products/bench-to-deploy" element={<BenchToDeploy />}></Route>
                        <Route path="/products/b2d" element={<Navigate to="/products/bench-to-deploy" replace />}></Route>

                        {/* Legal, Articles, 404 */}
                        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                        <Route path="/terms-conditions" element={<TermsConditions />}></Route>

                        <Route path="/404" element={<Error />}></Route>

                        {/* Home variant aliases -> / */}
                        {[
                            "/home-two", "/home-three", "/home-four", "/home-five", "/home-six",
                            "/home-seven", "/home-eight", "/home-nine", "/home-ten"
                        ].map((tPath) => (
                            <Route key={tPath} path={tPath} element={<Navigate to="/" replace />} />
                        ))}

                        {/* Dead template demo routes — no replacement, render Error page */}
                        {[
                            "/service-2", "/service-3", "/service-two", "/service-three",
                            "/appoinment", "/pricing-plane", "/testimonial-style-1", "/testimonials-one",
                            "/project", "/project-details",
                            "/portfolio-style-2", "/portfolio-style-3", "/portfolio-style-4", "/portfolio-style-5",
                            "/team", "/team-style-2", "/team-style-3", "/team-style-4", "/team-style-5", "/team-details",
                            "/blog-list", "/blog-grid", "/blog-details", "/blog/:id", "/blog-details-default",
                            "/onepage-one", "/onepage-two", "/onepage-three", "/onepage-four", "/onepage-five",
                            "/onepage-six", "/onepage-seven", "/onepage-eight", "/onepage-nine", "/onepage-ten"
                        ].map((tPath) => (
                            <Route key={tPath} path={tPath} element={<Error />} />
                        ))}

                        {/* Catch-all 404 */}
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </Suspense>
                <BackToTop />
            </Router>
        </div>
    );
}

export default RouterPage;
