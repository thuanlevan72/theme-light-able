import React, { useEffect } from "react";
import Image from "next/image";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { changeThemeMode } from "src/toolkit/thunk";
import { useDispatch, useSelector } from "react-redux";
// images
import logoDark from "@assets/images/logo-dark.svg";
import logoLight from "@assets/images/logo-white.svg";
import { createSelector } from "reselect";
import Link from "next/link";

const NavBar = () => {
    const dispatch = useDispatch<any>();

    const windowScroll = () => {
        const pageTopbar = document.getElementById("top-nav");
        if (pageTopbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                pageTopbar.classList.remove("top-nav-collapse");
            } else {
                pageTopbar.classList.add("top-nav-collapse");
            }
        }
    };

    if (typeof document !== "undefined") {
        document.onscroll = function () {
            windowScroll();
        };
    }

    useEffect(() => {
        document.body.classList.add("landing-page");
    }, []);

    const selectLayoutProperties = createSelector(
        (state: any) => state.Theme,
        (layout: any) => ({
            themeMode: layout.themeMode
        })
    );
    // Inside your component
    const {
        themeMode
    } = useSelector(selectLayoutProperties);

    /*
      layout settings
      */
    useEffect(() => {
        if (
            themeMode
        ) {
            dispatch(changeThemeMode(themeMode));
        }
    }, [
        themeMode,
        dispatch
    ]);


    return (
        <React.Fragment>
            <nav id="top-nav" className="navbar navbar-expand-md navbar-light default">
                <Container>
                    <Link href="/dashboard" className="pc-navbar-brand">
                        {themeMode === "dark" ?
                            <Image src={logoLight} alt="logo" className="logo-lg" />
                            :
                            <Image src={logoDark} alt="logo" className="logo-lg" />
                        }
                    </Link>
                    <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
                    <Navbar.Collapse id="navbarTogglerDemo01">
                        <Nav as="ul" className="navbar-nav ms-auto mt-lg-0 mt-2 mb-2 mb-lg-0 align-items-start">
                            <Nav.Item as="li" className="px-1">
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="px-1">
                                <Nav.Link href="https://light-able-react-components.vercel.app/">Components</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="px-1">
                                <Nav.Link href="https://pcoded.gitbook.io/light-able/" target="_blank">Documentation</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav as="ul" className="mb-2 mb-lg-0 align-items-start">
                            <NavDropdown bsPrefix="btn btn-icon btn-outline-dark border me-3 border-secondary border-opacity-25 dropdown-toggle arrow-none me-0 rounded"
                                title={<i className="ph-duotone ph-sun-dim text-warning"></i>} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => dispatch(changeThemeMode('dark'))}>
                                    <i className="ph-duotone ph-moon"></i>
                                    Dark
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => dispatch(changeThemeMode('light'))}>
                                    <i className="ph-duotone ph-sun-dim"></i>
                                    Light
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => dispatch(changeThemeMode('light'))}>
                                    <i className="ph-duotone ph-cpu"></i>
                                    Default
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="primary" href="https://phoenixcoded.com/item/light-able-bootstrap-admin-dashboard/" target="_blank">
                                Get Light able <i className="ph-duotone ph-arrow-square-out"></i>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;