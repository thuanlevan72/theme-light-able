import NonLayout from "@layout/NonLayout";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

// img
import logodark from "@assets/images/logo-dark.svg";

const Registerv2 = () => {
    return (
        <React.Fragment>
            <div className="auth-main v2">
                <div className="bg-overlay bg-dark"></div>
                <div className="auth-wrapper">
                    <div className="auth-sidecontent">
                        <div className="auth-sidefooter">
                            <Image src={logodark} className="img-brand img-fluid" alt="images" />
                            <hr className="mb-3 mt-4" />
                            <Row>
                                <div className="col my-1">
                                    <p className="m-0">Light Able ♥ crafted by Team <Link href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</Link></p>
                                </div>
                                <div className="col-auto my-1">
                                    <ul className="list-inline footer-link mb-0">
                                        <li className="list-inline-item"><Link href="../index">Home</Link></li>
                                        <li className="list-inline-item"><Link href="https://pcoded.gitbook.io/light-able/" target="_blank">Documentation</Link></li>
                                        <li className="list-inline-item"><Link href="https://phoenixcoded.support-hub.io/" target="_blank">Support</Link></li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="auth-form">
                        <Card className="my-5 mx-3">
                            <Card.Body>
                                <h4 className="f-w-500 mb-1">Register with your email</h4>
                                <p className="mb-3">Already have an Account? <Link href="../pages/login-v2" className="link-primary">Log in</Link></p>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group mb-3">
                                            <Form.Control type="text" placeholder="First Name" />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group mb-3">
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-group mb-3">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </div>
                                <div className="form-group mb-3">
                                    <Form.Control type="number" placeholder="Phone number" />
                                </div>
                                <div className="form-group mb-3">
                                    <Form.Control type="password" placeholder="Password" />
                                </div>
                                <div className="form-group mb-3">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="d-flex mt-1 justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                        <label className="form-check-label text-muted" htmlFor="customCheckc1">I agree to all the Terms & Condition</label>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <button type="button" className="btn btn-primary">Create Account</button>
                                </div>
                                <div className="saprator my-3">
                                    <span>Or continue with</span>
                                </div>
                                <div className="text-center">
                                    <ul className="list-inline mx-auto mt-3 mb-0">
                                        <li className="list-inline-item">
                                            <Link href="https://www.facebook.com/" className="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                                                <i className="fab fa-facebook-f text-white"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://twitter.com/" className="avtar avtar-s rounded-circle bg-twitter" target="_blank">
                                                <i className="fab fa-twitter text-white"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://myaccount.google.com/" className="avtar avtar-s rounded-circle bg-googleplus" target="_blank">
                                                <i className="fab fa-google text-white"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

Registerv2.getLayout = (page: ReactElement) => {
    return (
        <NonLayout>
            {page}
        </NonLayout>
    )
};

export default Registerv2;