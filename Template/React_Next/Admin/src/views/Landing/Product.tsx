import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//img
import prodClick from "@assets/images/landing/img-click-prod.png"

const Product = () => {
    return (
        <React.Fragment>
            <section className="bg-dark product-section pb-0">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col xl={10}>
                            <h2 className="text-white wow animate__fadeInUp section-title mb-0" data-wow-delay="0.2s">Run your entire business
                                from one single
                                product, built just for moving companies.</h2>
                        </Col>
                        <Col md={8} xl={6}>
                            <p className="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
                                Lorem
                                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard dummy text ever since the 1500s.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center product-cards-block">
                        <Col xs={12} className="position-relative">
                            <Image src={prodClick} alt="img"
                                className="img-fluid img-arrow d-none d-lg-inline-block" />
                        </Col>
                        <Col xl={10}>
                            <Row className="justify-content-center text-center">
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="0.5s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-wechat-logo text-primary"></i>
                                            <h5 className="mt-3 mb-0">Chat with friends </h5>
                                        </div>
                                    </a>
                                </Col>
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="0.6s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-shopping-cart text-primary"></i>
                                            <h5 className="mt-3 mb-0">Shopping store</h5>
                                        </div>
                                    </a>
                                </Col>
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="0.7s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-envelope-simple text-primary"></i>
                                            <h5 className="mt-3 mb-0">Inbox </h5>
                                        </div>
                                    </a>
                                </Col>
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="0.8s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-user-circle-plus text-primary"></i>
                                            <h5 className="mt-3 mb-0">Post your story</h5>
                                        </div>
                                    </a>
                                </Col>
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="0.9s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-calendar-plus text-primary"></i>
                                            <h5 className="mt-3 mb-0">Set Schedule</h5>
                                        </div>
                                    </a>
                                </Col>
                                <Col xl={2} md={3} xs={6}>
                                    <a href="#" className="card wow animate__fadeInUp" data-wow-delay="1.0s" style={{ textDecoration: "none" }}>
                                        <div className="card-body">
                                            <i className="ph-duotone ph-lock-key text-primary"></i>
                                            <h5 className="mt-3 mb-0">Chat with friends </h5>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Product;