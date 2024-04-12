import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

// img
import imgcustomer from "@assets/images/landing/img-customer-bg.svg";
import Image from "next/image";

const HappyCustomer = () => {
    return (
        <React.Fragment>
            <section className="bg-white pb-0">
                <Container>
                    <Row>
                        <Col>
                            <Card className="bg-dark counter-block wow animate__fadeInUp mb-0" data-wow-delay="0.7s">
                                <Image src={imgcustomer} alt="img" className="img-fluid img-customer-bg" />
                                <Card.Body className="p-4 p-md-5">
                                    <Row className="align-items-center">
                                        <Col lg={6} className="my-3">
                                            <h2 className="text-white mb-4">1000 + happy customer</h2>
                                            <Button href="https://phoenixcoded.com/" variant="primary" target="_blank">
                                                See more review <i className="ph-duotone ph-arrow-square-out"></i>
                                            </Button>
                                        </Col>
                                        <Col lg={6} className="my-3">
                                            <Row className="g-3 align-items-center text-center">
                                                <Col>
                                                    <span className="counter text-white">2.5K+</span>
                                                    <h4 className="f-w-400 mb-0 text-white text-opacity-50">Sales</h4>
                                                </Col>
                                                <Col>
                                                    <span className="counter text-white">4.8/5</span>
                                                    <h4 className="f-w-400 my-3 text-white text-opacity-50">2,442 Average rating</h4>
                                                    <div className="star f-20">
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star-half-alt text-warning"></i>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default HappyCustomer;