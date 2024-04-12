import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";

const LoginModal = () => {
    //login modal
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    }

    //register modal
    const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

    const toggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    }
    return (
        <>
            <BreadcrumbItem mainTitle="Ui kit" subTitle="Login Modal" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row className="form-group mb-0">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Login Modal</label>
                                <Col lg={6} md={9} sm={12}>
                                    <button
                                        onClick={toggleLoginModal}
                                        className="btn btn-primary"
                                    >Login</button>
                                    <p className="text-muted mt-3 mb-0">click above button to open login modal</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal fade centered className="login-modal" show={showLoginModal} onHide={toggleLoginModal}>
                <div className="modal-content card mb-0 user-card">
                    <Modal.Body className="modal-body">
                        <div className="d-flex mb-4">
                            <div className="flex-grow-1 me-3">
                                <h4 className="f-w-500 mb-1">Login with your email</h4>
                                <p className="mb-3">Don&apos;t have an Account?
                                    <Link
                                        href="#"
                                        className="link-primary ms-2"
                                        onClick={() => {
                                            setShowLoginModal(false);
                                            setShowRegisterModal(true);
                                        }}
                                    >Create Account</Link></p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default" onClick={() => setShowLoginModal(false)}>
                                    <i className="ti ti-x f-20"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="d-flex mt-1 justify-content-between align-items-center">
                            <div className="form-check">
                                <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                <label className="form-check-label text-muted" htmlFor="customCheckc1">Remember me?</label>
                            </div>
                        </div>
                        <div className="d-grid mt-4">
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                        <div className="saprator my-3">
                            <span>Or continue with</span>
                        </div>
                        <div className="text-center">
                            <ul className="list-inline mx-auto mt-3 mb-0">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/" className="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                                        <i className="fab fa-facebook-f text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/" className="avtar avtar-s rounded-circle bg-twitter" target="_blank">
                                        <i className="fab fa-twitter text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://myaccount.google.com/" className="avtar avtar-s rounded-circle bg-googleplus" target="_blank">
                                        <i className="fab fa-google text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>

            <Modal fade centered className="login-modal" show={showRegisterModal} onHide={toggleRegisterModal}>
                <div className="modal-content card mb-0 user-card">
                    <Modal.Body>
                        <div className="d-flex mb-4">
                            <div className="flex-grow-1 me-3">
                                <h4 className="f-w-500 mb-1">Register with your email</h4>
                                <p className="mb-3">Already have an Account?
                                    <Link
                                        href="#"
                                        className="link-primary"
                                        onClick={() => {
                                            setShowRegisterModal(false);
                                            setShowLoginModal(true);
                                        }}
                                    > Log in</Link></p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default" onClick={() => setShowRegisterModal(false)}>
                                    <i className="ti ti-x f-20"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter Email Address" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                        </div>
                        <div className="d-flex mt-1 justify-content-between align-items-center">
                            <div className="form-check">
                                <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                <label className="form-check-label text-muted" htmlFor="customCheckc1">I agree to all the Terms & Condition</label>
                            </div>
                        </div>
                        <div className="d-grid mt-4">
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                        <div className="saprator my-3">
                            <span>Or continue with</span>
                        </div>
                        <div className="text-center">
                            <ul className="list-inline mx-4 mt-3 mb-0">
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
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}

LoginModal.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


export default LoginModal