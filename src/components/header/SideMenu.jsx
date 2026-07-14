import React from 'react';
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
            {isSidebarOpen && (
                <div 
                    className="sidebar-backdrop" 
                    onClick={toggleSidebar} 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(14, 16, 19, 0.6)',
                        zIndex: 999998,
                        backdropFilter: 'blur(3px)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                />
            )}
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
                                    <Link className="menu-link" to={'#'} onClick={(e) => { e.preventDefault(); toggleMenu(1); }}>
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

                                <li className="menu-item">
                                    <Link className="menu-link" to={'/products'} onClick={toggleSidebar}>
                                        Products
                                    </Link>
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
