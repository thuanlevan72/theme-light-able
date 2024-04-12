import React from "react";
import { Card, Col, Row, Tab } from "react-bootstrap";

const ProfileOverview = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="ProfileInfo" className="fade" id="user-set-profile" role="tabpanel">
                <Card>
                    <Card.Header>
                        <h5>About me</h5>
                    </Card.Header>
                    <Card.Body>
                        <p className="mb-0">Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer
                            based in Website, I create digital
                            Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Personal Details</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                                <Row>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Full Name</p>
                                        <p className="mb-0">Anshan Handgun</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Father Name</p>
                                        <p className="mb-0">Mr. Deepen Handgun</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0">
                                <Row>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Phone</p>
                                        <p className="mb-0">(+1-876) 8654 239 581</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Country</p>
                                        <p className="mb-0">New York</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0">
                                <Row>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Email</p>
                                        <p className="mb-0">anshan.dh81@gmail.com</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Zip Code</p>
                                        <p className="mb-0">956 754</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <p className="mb-1 text-muted">Address</p>
                                <p className="mb-0">Street 110-B Kalians Bag, Dewan, M.P. New York</p>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Education</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush acc-feeds-list">
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">Master Degree (Year)</p>
                                        <p className="mb-0">2014-2017</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Institute</p>
                                        <p className="mb-0">-</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">Bachelor (Year)</p>
                                        <p className="mb-0">2011-2013</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Institute</p>
                                        <p className="mb-0">Imperial College London</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">School (Year)</p>
                                        <p className="mb-0">2009-2011</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Institute</p>
                                        <p className="mb-0">School of London, England</p>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Employment</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush acc-feeds-list">
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">Senior</p>
                                        <p className="mb-0">Senior UI/UX designer (Year)</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Job Responsibility</p>
                                        <p className="mb-0">Perform task related to project manager with the 100+ team under my
                                            observation. Team management is key
                                            role in this company.</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">Trainee cum Project Manager (Year)</p>
                                        <p className="mb-0">2017-2019</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Job Responsibility</p>
                                        <p className="mb-0">Team management is key role in this company.</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item p-0">
                                <Row>
                                    <Col md={4} className="feed-title">
                                        <p className="mb-1 text-muted">School (Year)</p>
                                        <p className="mb-0">2009-2011</p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1 text-muted">Institute</p>
                                        <p className="mb-0">School of London, England</p>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default ProfileOverview;