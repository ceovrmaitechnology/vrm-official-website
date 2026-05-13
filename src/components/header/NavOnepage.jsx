import React from 'react'
import { Link } from 'react-scroll';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li >
                        <Link className="nav-item" to="banner"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000} >
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="service"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Services
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="goal"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Goal
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="blog-section"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Blog
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="address"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Address
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClass="active"
                            to="f-contact"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav