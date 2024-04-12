import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import navCardBg from "../../assets/images/layout/nav-card-bg.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import logoLight from "../../assets/images/logo-white.svg";
import avatar1 from "../../assets/images/user/avatar-1.jpg";
import Navbar from "./Navbar";

const Header = ({ themeMode }: any) => {
    return (
        <React.Fragment>
            <nav className="pc-sidebar" id="pc-sidebar-hide">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <Link href="/" className="b-brand text-primary">
                            {themeMode === "dark" ?
                                <Image src={logoLight} alt="logo" className="logo-lg landing-logo" />
                                :
                                <Image src={logoDark} alt="logo" className="logo-lg landing-logo" />
                            }
                            <span className="badge bg-brand-color-2 rounded-pill ms-2 theme-version">v1.0</span>
                        </Link>
                    </div>

                    <Navbar />

                    <div className="card nav-action-card bg-brand-color-4">
                        <div className="card-body"
                            style={{ backgroundImage: `url(${navCardBg})` }}>
                            <h5 className="text-dark">Help Center</h5>
                            <p className="text-dark text-opacity-75">Please contact us for more questions.</p>
                            <Link href="https://phoenixcoded.support-hub.io/" className="btn btn-primary" target="_blank">Go to help Center</Link>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="card pc-user-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <Image src={avatar1} alt="user-image" className="user-avtar wid-45 rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3 me-2">
                                    <h6 className="mb-0">Jonh Smith</h6>
                                    <small>Administrator</small>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="btn btn-icon btn-link-secondary avtar arrow-none dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
                                        <i className="ph-duotone ph-windows-logo"></i>
                                    </a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="pc-user-links">
                                                <i className="ph-duotone ph-user"></i>
                                                <span>My Account</span>
                                            </a></li>
                                            <li><a className="pc-user-links">
                                                <i className="ph-duotone ph-gear"></i>
                                                <span>Settings</span>
                                            </a></li>
                                            <li><a className="pc-user-links">
                                                <i className="ph-duotone ph-lock-key"></i>
                                                <span>Lock Screen</span>
                                            </a></li>
                                            <li><a className="pc-user-links">
                                                <i className="ph-duotone ph-power"></i>
                                                <span>Logout</span>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Header;