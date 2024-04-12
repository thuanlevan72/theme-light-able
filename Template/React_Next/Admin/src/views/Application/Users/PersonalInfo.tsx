import React from "react";
import { Button, Card, Col, Form, Row, Tab } from "react-bootstrap";

const PersonalInfo = () => {
    const bioText = `Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.`;
    const addressText = `3379  Monroe Avenue, Fort Myers, Florida(33912)`;
    return (
        <React.Fragment>
            <Tab.Pane eventKey="PersonalInfo" className="fade" id="user-set-information" role="tabpanel">
                <Card>
                    <Card.Header>
                        <h5>Personal Information</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" defaultValue="Anshan" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" defaultValue="Handgun" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" defaultValue="New York" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>Zip code</Form.Label>
                                    <Form.Control type="text" defaultValue="956754" />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="form-group">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control as="textarea" defaultValue={bioText} />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="form-group mb-0">
                                    <Form.Label>Experience</Form.Label>
                                    <select defaultValue="4 year" className="form-control">
                                        <option>Startup</option>
                                        <option>2 year</option>
                                        <option>3 year</option>
                                        <option>4 year</option>
                                        <option>5 year</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Social Network</h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 me-3">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <div className="avtar avtar-xs btn-light-twitter">
                                            <i className="fab fa-twitter f-16"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-0">Twitter</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="btn btn-link-primary">Connect</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1 me-3">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <div className="avtar avtar-xs btn-light-facebook">
                                            <i className="fab fa-facebook-f f-16"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-0">Facebook <small className="text-muted f-w-400">/Anshan Handgun</small></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="btn btn-link-danger">Remove</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 me-3">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <div className="avtar avtar-xs btn-light-linkedin">
                                            <i className="fab fa-linkedin-in f-16"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-0">Linkedin</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <Button variant="link-primary">Connect</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Contact Information</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>Contact Phone</Form.Label>
                                    <Form.Control type="text" defaultValue="(+99) 9999 999 999" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="email" defaultValue="demo@sample.com" />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="form-group">
                                    <Form.Label>Portfolio Url</Form.Label>
                                    <Form.Control type="text" defaultValue="https://demo.com" />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="form-group mb-0">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" defaultValue={addressText} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div className="text-end btn-page">
                    <div className="btn btn-outline-secondary">Cancel</div>
                    <div className="btn btn-primary">Update Profile</div>
                </div>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default PersonalInfo;