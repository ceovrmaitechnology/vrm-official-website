import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SideMenu from './SideMenu';


function HeaderOne({ className }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState('auto');

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [isSticky]); // Re-calculate if needed, or just initially. But sticky changes class which might change height? No, sticky class makes it fixed.

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div>

            {/* start header area */}
            <header ref={headerRef} className={`header--sticky header-one ${isSticky ? 'sticky' : ''} ${className || ''}`}>
                <div className="header-main-one">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                                <div className="thumbnail">
                                    <Link to={'/'} >
                                        <img src="/assets/images/logo/logo.png" alt="VRM AI Technologies Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-8 d-flex align-items-center justify-content-end">
                                <div className="main-header d-none d-lg-flex me-4">
                                    <Nav />
                                </div>
                                <div className="button-area d-flex align-items-center">
                                    <Link to="/contactus" state={{ scrollToContact: true }} className="rts-btn btn-primary vrm-btn-compact">
                                        Let's Connect
                                    </Link>
                                    <button
                                        className="menu-btn d-block d-lg-none ms-3 bg-transparent border-0 p-0"
                                        onClick={toggleSidebar}
                                        aria-label="Toggle Menu"
                                    >
                                        <i className="fas fa-bars fs-1" style={{ color: '#1b277c' }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* End header area */}

            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div >
    )
}

export default HeaderOne
