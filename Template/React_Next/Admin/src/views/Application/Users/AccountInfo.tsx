import Link from "next/link";
import React from "react";
import { Card, Col, Form, Row, Tab } from "react-bootstrap";

const AccountInfo = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="AccountInfo" className="fade" id="user-set-account" role="tabpanel" aria-labelledby="user-set-account-tab">
                <Card>
                    <Card.Header>
                        <h5>General Settings</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Username <span
                                        className="text-danger">*</span></label>
                                    <Col md={8} sm={12}>
                                        <Form.Control type="text" defaultValue="Ashoka_Tano_16" />
                                        <div className="form-text">
                                            Your Profile URL: <a href="#" className="link-primary">https://pc.com/Ashoka_Tano_16</a>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Account Email <span
                                        className="text-danger">*</span></label>
                                    <Col md={8} sm={12}>
                                        <Form.Control type="text" defaultValue="demo@sample.com" />
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Language</label>
                                    <Col md={8} sm={12}>
                                        <select className="form-control">
                                            <option>Washington</option>
                                            <option>India</option>
                                            <option>Africa</option>
                                            <option>New York</option>
                                            <option>Malaysia</option>
                                        </select>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <Row className="form-group mb-0">
                                    <label className="col-form-label col-md-4 col-sm-12 text-md-end">Sign in Using <span
                                        className="text-danger">*</span></label>
                                    <Col md={8} sm={12}>
                                        <select className="form-control">
                                            <option>Password</option>
                                            <option>Face Recognition</option>
                                            <option>Thumb Impression</option>
                                            <option>Key</option>
                                            <option>Pin</option>
                                        </select>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Advance Settings</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-1">Secure Browsing</p>
                                        <p className="text-muted text-sm mb-0">Browsing Securely ( https ) when it&apos;s necessary</p>
                                    </div>
                                    <div className="form-check form-switch p-0">
                                        <input className="form-check-input h4 position-relative m-0" type="checkbox" role="switch" defaultChecked />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-1">Login Notifications</p>
                                        <p className="text-muted text-sm mb-0">Notify when login attempted from other place</p>
                                    </div>
                                    <div className="form-check form-switch p-0">
                                        <input className="form-check-input h4 position-relative m-0" type="checkbox" role="switch" defaultChecked />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-1">Login Approvals</p>
                                        <p className="text-muted text-sm mb-0">Approvals is not required when login from unrecognized
                                            devices.</p>
                                    </div>
                                    <div className="form-check form-switch p-0">
                                        <input className="form-check-input h4 position-relative m-0" type="checkbox" role="switch" defaultChecked />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Recognized Devices</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-2">
                                        <div className="d-flex align-items-center">
                                            <div className="avtar bg-light-primary">
                                                <i className="ph-duotone ph-desktop f-24"></i>
                                            </div>
                                            <div className="ms-2">
                                                <p className="mb-1">Celt Desktop</p>
                                                <p className="mb-0 text-muted">4351 Deans Lane</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="text-success d-inline-block me-2">
                                            <i className="fas fa-circle f-10 me-2"></i>
                                            Current Active
                                        </div>
                                        <Link href="#!" className="text-danger"><i className="feather icon-x-circle"></i></Link>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-2">
                                        <div className="d-flex align-items-center">
                                            <div className="avtar bg-light-primary">
                                                <i className="ph-duotone ph-device-tablet-camera f-24"></i>
                                            </div>
                                            <div className="ms-2">
                                                <p className="mb-1">Imco Tablet</p>
                                                <p className="mb-0 text-muted">4185 Michigan Avenue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="text-muted d-inline-block me-2">
                                            <i className="fas fa-circle f-10 me-2"></i>
                                            Active 5 days ago
                                        </div>
                                        <Link href="#!" className="text-danger"><i className="feather icon-x-circle"></i></Link>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-2">
                                        <div className="d-flex align-items-center">
                                            <div className="avtar bg-light-primary">
                                                <i className="ph-duotone ph-device-mobile-camera f-24"></i>
                                            </div>
                                            <div className="ms-2">
                                                <p className="mb-1">Albs Mobile</p>
                                                <p className="mb-0 text-muted">3462 Fairfax Drive</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="text-muted d-inline-block me-2">
                                            <i className="fas fa-circle f-10 me-2"></i>
                                            Active 1 month ago
                                        </div>
                                        <Link href="#!" className="text-danger"><i className="feather icon-x-circle"></i></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Active Sessions</h5>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-2">
                                        <div className="d-flex align-items-center">
                                            <div className="avtar bg-light-primary">
                                                <i className="ph-duotone ph-desktop f-24"></i>
                                            </div>
                                            <div className="ms-2">
                                                <p className="mb-1">Celt Desktop</p>
                                                <p className="mb-0 text-muted">4351 Deans Lane</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-link-danger">Logout</button>
                                </div>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-2">
                                        <div className="d-flex align-items-center">
                                            <div className="avtar bg-light-primary">
                                                <i className="ph-duotone ph-device-tablet-camera f-24"></i>
                                            </div>
                                            <div className="ms-2">
                                                <p className="mb-1">Moon Tablet</p>
                                                <p className="mb-0 text-muted">4185 Michigan Avenue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-link-danger">Logout</button>
                                </div>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="text-end">
                        <button className="btn btn-outline-dark me-2">Clear</button>
                        <button className="btn btn-primary">Update Profile</button>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default AccountInfo;