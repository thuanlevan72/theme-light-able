import React, { useState } from 'react';
import { Card, Carousel, Col, Container, Nav, Row, Tab } from "react-bootstrap";

const Pricing = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        const totalSlides = 3;
        if (index < totalSlides - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <React.Fragment>
            <section className="bg-white pt-0">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Card className="bg-dark wow animate__fadeInUp" data-wow-delay="0.2s">
                                <Card.Body className="p-4 p-md-5">
                                    <Row className="align-items-center justify-content-between">
                                        <Col lg={4} className="my-3 text-center text-sm-start">
                                            <h2 className="text-white mb-3">Pricing</h2>
                                            <p className="mb-4 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry&apos;s standard</p>
                                            <ul className="list-inline ms-auto mb-0">
                                                <li className="list-inline-item">
                                                    <button className="avtar avtar-s btn btn-outline-light border-0 customPrev-btn" onClick={handlePrevious}>
                                                        <i className="ti ti-arrow-left f-18"></i>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button className="avtar avtar-s btn btn-outline-light border-0 customNext-btn" onClick={handleNext}>
                                                        <i className="ti ti-arrow-right f-18"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={6} className="my-3 counter-block">
                                            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                                                <Carousel.Item>
                                                    <Tab.Container defaultActiveKey="pills-1home">
                                                        <Nav as="ul" className="nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s"
                                                            id="pills-1tab" role="tablist">
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-1home" id="pills-1home-tab" data-bs-toggle="pill"
                                                                    data-bs-target="#pills-1home" type="button" role="tab" aria-controls="pills-1home"
                                                                    aria-selected="true">Monthly</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-1profile" id="pills-1profile-tab" data-bs-toggle="pill"
                                                                    data-bs-target="#pills-1profile" type="button" role="tab" aria-controls="pills-1profile"
                                                                    aria-selected="false">Yearly</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                        <div className="row g-3 text-center align-items-center">
                                                            <div className="col-sm-6">
                                                                <Tab.Content id="pills-1tabContent">
                                                                    <Tab.Pane eventKey="pills-1home" id="pills-1home" role="tabpanel" aria-labelledby="pills-1home-tab">
                                                                        <span className="counter text-white">$69</span>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="pills-1profile" id="pills-1profile" role="tabpanel" aria-labelledby="pills-1profile-tab">
                                                                        <span className="counter text-white">$269</span>
                                                                    </Tab.Pane>
                                                                </Tab.Content>
                                                                <h4 className="f-w-400 mb-0 text-white text-opacity-50">Standard License</h4>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <ul className="list-unstyled text-start text-white text-opacity-50">
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> Use for single site</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 6 month premium Support </li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 1 year updates</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> For Non-Paying users only</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Tab.Container>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Tab.Container defaultActiveKey="pills-2home">
                                                        <Nav as="ul" className="nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s" id="pills-2tab" role="tablist">
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-2home" id="pills-2home-tab" data-bs-toggle="pill"
                                                                    data-bs-target="#pills-2home" type="button" role="tab" aria-controls="pills-2home"
                                                                    aria-selected="true">Monthly</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-2profile" id="pills-2profile-tab" data-bs-toggle="pill"
                                                                    data-bs-target="#pills-2profile" type="button" role="tab" aria-controls="pills-2profile"
                                                                    aria-selected="false">Yearly</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                        <div className="row g-3 text-center align-items-center">
                                                            <div className="col-6">
                                                                <Tab.Content id="pills-2tabContent">
                                                                    <Tab.Pane eventKey="pills-2home" id="pills-2home" role="tabpanel" aria-labelledby="pills-2home-tab">
                                                                        <span className="counter text-white">$169</span>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="pills-2profile" id="pills-2profile" role="tabpanel" aria-labelledby="pills-2profile-tab">
                                                                        <span className="counter text-white">$469</span>
                                                                    </Tab.Pane>
                                                                </Tab.Content>
                                                                <h4 className="f-w-400 mb-0 text-white text-opacity-50">Extended License</h4>
                                                            </div>
                                                            <div className="col-6">
                                                                <ul className="list-unstyled text-start text-white text-opacity-50">
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> Use for single site</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 6 month premium Support
                                                                    </li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 1 year updates</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> For Non-Paying users only
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Tab.Container>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Tab.Container defaultActiveKey="pills-3home">
                                                        <Nav as="ul" className="nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s" id="pills-3tab" role="tablist">
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-3home" id="pills-3home-tab" data-bs-toggle="pill">Monthly</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item as="li" role="presentation">
                                                                <Nav.Link as="button" eventKey="pills-3profile" id="pills-3profile-tab" data-bs-toggle="pill">Yearly</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                        <div className="row g-3 text-center align-items-center">
                                                            <div className="col-6">
                                                                <Tab.Content id="pills-3tabContent">
                                                                    <Tab.Pane eventKey="pills-3home" id="pills-3home" role="tabpanel"
                                                                        aria-labelledby="pills-3home-tab">
                                                                        <span className="counter text-white">$369</span>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="pills-3profile" id="pills-3profile" role="tabpanel"
                                                                        aria-labelledby="pills-3profile-tab">
                                                                        <span className="counter text-white">$969</span>
                                                                    </Tab.Pane>
                                                                </Tab.Content>
                                                                <h4 className="f-w-400 mb-0 text-white text-opacity-50">Enterprise License</h4>
                                                            </div>
                                                            <div className="col-6">
                                                                <ul className="list-unstyled text-start text-white text-opacity-50">
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> Use for single site</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 6 month premium Support
                                                                    </li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> 1 year updates</li>
                                                                    <li className="my-2"><i className="me-1 ti ti-check text-success"></i> For Non-Paying users only
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Tab.Container>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
}

export default Pricing;