import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//import images
import logoDark from "../assets/images/logo-dark.svg";
import Image from 'next/image';

const FooterComponent = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container className="title mb-0">
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h2 className="mb-3">Be the first to know</h2>
                            <p className="mb-4 mb-md-0">
                                Simply submit your email, we share you the top news related to
                                Able Pro feature updates, roadmap, and news.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </Col>
                                <div className="col-auto">
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-top">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Image src={logoDark} alt="image" className="footer-logo img-fluid mb-3" />
                                <p className="mb-4">Since 2014, over 6.3K developers have placed their trust in Phoenixcoded&apos;s Templates.
                                    
                                    Light Able is managed by their experienced team of professionals.</p>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col sm={4} className="my-3 my-sm-0">
                                        <h5 className="mb-4">Company</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link href="#" target="_blank">About</Link></li>
                                            <li><Link href="#" target="_blank">Blog</Link></li>
                                            <li><Link href="#" target="_blank">Team</Link></li>
                                            <li><Link href="#" target="_blank">Free Version</Link></li>
                                        </ul>
                                    </Col>
                                    <Col sm={4} className="my-3 my-sm-0">
                                        <h5 className="mb-4">Help & Support</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link href="#" target="_blank">Documentation</Link></li>
                                            <li><Link href="#" target="_blank">Contact us</Link></li>
                                            <li><Link href="#" target="_blank">Support</Link></li>
                                            <li><Link href="#" target="_blank">RoadMap</Link></li>
                                        </ul>
                                    </Col>
                                    <Col sm={4} className="my-3 my-sm-0">
                                        <h5 className="mb-4">Useful Resources</h5>
                                        <ul className="list-unstyled footer-link">
                                            <li><Link href="#" target="_blank">Terms & Condition</Link></li>
                                            <li><Link href="#" target="_blank">Privacy Policy</Link></li>
                                            <li><Link href="#" target="_blank">Licencse</Link></li>
                                            <li><Link href="#" target="_blank">FAQ</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <Container>
                        <Row className="align-items-center">
                            <Col className="my-1">
                                <p className="m-0">Made with &#9829; by Team <a href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</a></p>
                            </Col>
                            <div className="col-auto my-1">
                                <ul className="list-inline footer-sos-link mb-0">
                                    <li className="list-inline-item wow animate__fadeInUp">
                                        <Link href="https://fb.com/phoenixcoded"><i className="ph-duotone ph-facebook-logo f-20"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default FooterComponent;
