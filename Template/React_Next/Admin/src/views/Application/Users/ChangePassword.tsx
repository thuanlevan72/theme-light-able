import Image from "next/image";
import React from "react";
import { Card, Col, Form, Row, Tab } from "react-bootstrap";

// img
import passwordAlert from "@assets/images/application/img-accout-password-alert.png";
import Link from "next/link";

const ChangePassword = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="ChangePassword" className="fade" id="user-set-passwort" role="tabpanel"
                aria-labelledby="user-set-passwort-tab">
                <Card className="alert alert-warning p-0">
                    <Card.Body>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 me-3">
                                <h4 className="alert-heading">Alert!</h4>
                                <p className="mb-2">Your Password will expire in every 3 months. So change it periodically.</p>
                                <a href="#" className="alert-link"><u>Do not share your password</u></a>
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={passwordAlert} alt="img" className="img-fluid wid-80" />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Change Password</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item pt-0 px-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Current Password <span
                                        className="text-danger">*</span>
                                    </label>
                                    <Col md={8} sm={12}>
                                        <Form.Control type="password" />
                                        <div className="form-text"> Forgot password? <Link href="#" className="link-primary">Click here</Link></div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">New Password <span
                                        className="text-danger">*</span></label>
                                    <Col md={8} sm={12}>
                                        <Form.Control type="password" />
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item pb-0 px-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Confirm Password <span
                                        className="text-danger">*</span></label>
                                    <Col md={8} sm={12}>
                                        <Form.Control type="password" />
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="text-end">
                        <div className="btn btn-outline-secondary me-2">Cancel</div>
                        <div className="btn btn-primary">Change Password</div>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default ChangePassword;