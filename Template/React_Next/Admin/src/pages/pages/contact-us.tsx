import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const ContactUs = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Ui kit" subTitle="Contact Us" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9624616075307!2d72.86314569999999!3d21.2333371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3b471f4ce1%3A0x22ace90053cf335!2sPhoenixcoded!5e0!3m2!1sen!2sin!4v1689227733984!5m2!1sen!2sin" loading="lazy" className="contact-map"></iframe>
                            <Row className="justify-content-center">
                                <Col xs={11} sm={9} xl={8}>
                                    <div className="card contact-card-form user-card">
                                        <Card.Body>
                                            <div className="d-flex mb-4">
                                                <div className="flex-grow-1 me-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avtar bg-brand-color-1 text-white me-3">
                                                            <i className="ph-duotone ph-chats-teardrop f-26"></i>
                                                        </div>
                                                        <div>
                                                            <h4 className="f-w-500 mb-1">Contact Us</h4>
                                                            <p className="mb-0">Let&apos;s Start a Conversation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input type="text" className="form-control" placeholder="Enter name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">Subject</label>
                                                        <input type="text" className="form-control" placeholder="Enter Subject" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Email Address" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">Contact No.</label>
                                                        <input type="text" className="form-control" placeholder="Enter Contact No" />
                                                    </div>
                                                </Col>
                                                <div className="col-12">
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">Message</label>
                                                        <textarea className="form-control" rows={3} placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                            </Row>
                                            <div className="d-grid mt-4">
                                                <button type="button" className="btn btn-primary mx-sm-3 mx-md-5">Send Message</button>
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
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

ContactUs.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default ContactUs;