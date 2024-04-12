import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import { THEME_MODE } from "src/Common/layoutConfig";

// Import images
import logoDark from "@assets/images/logo-dark.svg";
import logoWhite from "@assets/images/logo-white.svg";

interface HeaderProps {
    themeMode: string; // Define the type for themeMode
    changeThemeMode: any; // Define the type for changeThemeMode function
}

const Header: React.FC<HeaderProps> = ({ themeMode, changeThemeMode }) => {
    const dispatch = useDispatch<any>();
    // Function to handle theme mode change
    const handleThemeChange = (value: any) => {
        dispatch(changeThemeMode(value));
    };


    return (
        <nav className="default navbar navbar-expand-md navbar-light">
            <div className="container">
                {themeMode === "dark" ?
                    <Link className="navbar-brand " href="/dashboard">
                        <Image src={logoWhite} alt="logo" className="logo-lg" />
                    </Link>
                    :
                    <Link className="navbar-brand " href="/dashboard">
                        <Image src={logoDark} alt="logo" className="logo-lg" />
                    </Link>
                }
                <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
                <Navbar.Collapse id="navbarTogglerDemo01">
                    <Nav as="ul" className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-start">
                        <Nav.Item as="li" className="px-1">
                            <Nav.Link
                                href="https://pcoded.gitbook.io/light-able/"
                                target="_blank"
                            >
                                Documentation
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="px-1">
                            <Nav.Link target="_blank" href="https://light-able-react-light.vercel.app/dashboard">Live Preview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="px-1">
                            <Nav.Link href="../elements/bc_alert.html">Components</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="mb-2 mb-lg-0 align-items-start">
                        <Dropdown as={Nav.Item} className="px-1 me-2 mb-2 mb-md-0">
                            <Dropdown.Toggle
                                as="a"
                                className="btn btn-icon btn-outline-dark border border-secondary border-opacity-25 arrow-none me-0 rounded"
                            >
                                <i className="ph-duotone ph-sun-dim text-warning"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end pc-h-dropdown">
                                <Dropdown.Item
                                    href="#!"
                                    onClick={() => handleThemeChange(THEME_MODE.DARK)}
                                >
                                    <i className="ph-duotone ph-moon"></i>
                                    <span>Dark</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#!"
                                    onClick={() => handleThemeChange(THEME_MODE.LIGHT)}
                                >
                                    <i className="ph-duotone ph-sun-dim"></i>
                                    <span>Light</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#!"
                                    onClick={() => handleThemeChange(THEME_MODE.DEFAULT)}
                                >
                                    <i className="ph-duotone ph-cpu"></i>
                                    <span>Default</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <a
                                href="https://phoenixcoded.com/item/light-able-bootstrap-admin-dashboard/"
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Get Light able{" "}
                                <i className="ph-duotone ph-arrow-square-out"></i>
                            </a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </nav>
    );
};

export default Header;
