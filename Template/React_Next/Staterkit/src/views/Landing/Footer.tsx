import Image from "next/image";
import React from "react";
import Link from "next/link";

//img
import logoDark from "@assets/images/logo-dark.svg";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 wow animate__fadeInUp" data-wow-delay="0.2s">
                                <Image src={logoDark} alt="image" className="img-fluid mb-3" />
                                <p className="mb-4">Since 2017, More than 50K+ Developers trust the Phoenixcoded Digital Product. Mantis React is
                                    Manage under their Experienced
                                    Team Players.</p>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="0.6s">
                                        <h5 className="mb-4">Company</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">About</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Blog</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Team</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Free Version</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="0.8s">
                                        <h5 className="mb-4">Help & Support</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Documentation</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Contact us</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Support</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">RoadMap</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="1s">
                                        <h5 className="mb-4">Useful Resources</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Terms & Condition</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Privacy Policy</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">Licencse</Link></li>
                                            <li><Link style={{ textDecoration: "none" }} href="#" target="_blank">FAQ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col my-1 wow animate__fadeInUp" data-wow-delay="0.4s">
                                <p className="mb-0">© Handcrafted by Team <a href="https://themeforest.net/user/phoenixcoded"
                                    target="_blank">Phoenixcoded</a></p>
                            </div>
                            <div className="col-auto my-1">
                                <ul className="list-inline footer-sos-link mb-0">
                                    <li className="list-inline-item wow animate__fadeInUp" data-wow-delay="0.4s">
                                        <Link href="https://fb.com/phoenixcoded">
                                            <i className="ph-duotone ph-facebook-logo f-20"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;