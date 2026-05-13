import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SideMenu({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <div className="body-mobile d-block">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="menu-item">
                                    <Link className="menu-link" to={'/'} onClick={toggleSidebar}>
                                        Home
                                    </Link>
                                </li>

                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" to={'#'} onClick={() => toggleMenu(1)}>
                                        Solutions
                                    </Link>
                                    <ul className={`submenu ${openMenu === 1 ? 'active' : ''}`}>
                                        <li className="mobile-menu-link tag">AI Consulting & Strategy</li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/ai-consulting-services'} onClick={toggleSidebar}>AI Consulting Services</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/ai-integration-services'} onClick={toggleSidebar}>AI Integration Services</Link></li>

                                        <li className="mobile-menu-link tag mt-2">AI Development</li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/ai-development-services'} onClick={toggleSidebar}>AI Development Services</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/ai-chatbot-development'} onClick={toggleSidebar}>AI Chatbot Development</Link></li>

                                        <li className="mobile-menu-link tag mt-2">AI & Data</li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/ai-calling-agent'} onClick={toggleSidebar}>AI Calling Agent</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/solutions/machine-learning-services'} onClick={toggleSidebar}>Machine Learning Services</Link></li>
                                    </ul>
                                </li>

                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" to={'#'} onClick={() => toggleMenu(2)}>
                                        Products
                                    </Link>
                                    <ul className={`submenu ${openMenu === 2 ? 'active' : ''}`}>
                                        <li className="mobile-menu-link tag">WorkFlow.AI</li>
                                        <li className="mobile-menu-link"><Link to={'/products/workflow/screensage'} onClick={toggleSidebar}>ScreenSage</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/products/workflow/videosage'} onClick={toggleSidebar}>VideoSage</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/products/workflow/codesage'} onClick={toggleSidebar}>CodeSage</Link></li>
                                        <li className="mobile-menu-link tag mt-2">GrowthFlowAI</li>
                                        <li className="mobile-menu-link"><Link to={'/business-acquisition-form'} onClick={toggleSidebar}>Business Acquisition</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/client-acquisition-form'} onClick={toggleSidebar}>Client Acquisition</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/job-applicant-form'} onClick={toggleSidebar}>Job Applicant</Link></li>
                                        <li className="mobile-menu-link"><Link to={'/organization-form'} onClick={toggleSidebar}>Organization</Link></li>
                                    </ul>
                                </li>

                                <li className="menu-item">
                                    <Link className="menu-link" to={'/careers'} onClick={toggleSidebar}>
                                        Careers
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" to={'/about-us'} onClick={toggleSidebar}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" to={'/contactus#send-message'} onClick={toggleSidebar}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <Link
                            to="/contactus#send-message"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                            onClick={toggleSidebar}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>


        </div>
    )
}

export default SideMenu
