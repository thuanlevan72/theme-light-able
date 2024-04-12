import Link from "next/link";
import React from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import Image from "next/image";

import avatar1 from "@assets/images/user/avatar-1.jpg";

const UserInfo = () => {
    return (
        <React.Fragment>
            <Col lg={5} xxl={3}>
                <Card className="overflow-hidden">
                    <Card.Body className="position-relative">
                        <div className="text-center mt-3">
                            <div className="chat-avtar d-inline-flex mx-auto">
                                <Image className="rounded-circle img-fluid wid-90 img-thumbnail"
                                    src={avatar1} alt="User image" />
                                <i className="chat-badge bg-success me-2 mb-2"></i>
                            </div>
                            <h5 className="mb-0">William Bond</h5>
                            <p className="text-muted text-sm">DM on <a href="#" className="link-primary"> @williambond </a> 😍</p>
                            <ul className="list-inline mx-auto my-4">
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s text-white bg-dribbble">
                                        <i className="ti ti-brand-dribbble f-24"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s text-white bg-amazon">
                                        <i className="ti ti-brand-figma f-24"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s text-white bg-pinterest">
                                        <i className="ti ti-brand-pinterest f-24"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s text-white bg-behance">
                                        <i className="ti ti-brand-behance f-24"></i>
                                    </Link>
                                </li>
                            </ul>
                            <Row className="g-3">
                                <Col xs={4}>
                                    <h5 className="mb-0">86</h5>
                                    <small className="text-muted">Post</small>
                                </Col>
                                <Col xs={4} className="border border-top-0 border-bottom-0">
                                    <h5 className="mb-0">40</h5>
                                    <small className="text-muted">Project</small>
                                </Col>
                                <Col xs={4}>
                                    <h5 className="mb-0">4.5K</h5>
                                    <small className="text-muted">Members</small>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                    <Nav variant="pills" className="flex-column list-group list-group-flush account-pills mb-0" id="user-set-tab"
                        role="tablist" aria-orientation="vertical">
                        <Nav.Link eventKey="ProfileInfo" className="list-group-item list-group-item-action" id="user-set-profile-tab">
                            <span className="f-w-500"><i className="ph-duotone ph-user-circle m-r-10"></i>Profile Overview</span>
                        </Nav.Link>
                        <Nav.Link eventKey="PersonalInfo" className="list-group-item list-group-item-action" id="user-set-information-tab">
                            <span className="f-w-500"><i className="ph-duotone ph-clipboard-text m-r-10"></i>Personal Information</span>
                        </Nav.Link>
                        <Nav.Link eventKey="AccountInfo" className="list-group-item list-group-item-action" id="user-set-account-tab">
                            <span className="f-w-500"><i className="ph-duotone ph-notebook m-r-10"></i>Account Information</span>
                        </Nav.Link>
                        <Nav.Link eventKey="ChangePassword" className="list-group-item list-group-item-action" id="user-set-passwort-tab">
                            <span className="f-w-500"><i className="ph-duotone ph-key m-r-10"></i>Change Password</span>
                        </Nav.Link>
                        <Nav.Link eventKey="EmailSetting" className="list-group-item list-group-item-action" id="user-set-email-tab">
                            <span className="f-w-500"><i className="ph-duotone ph-envelope-open m-r-10"></i>Email settings</span>
                        </Nav.Link>
                    </Nav>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Personal information</h5>
                    </Card.Header>
                    <Card.Body className="position-relative">
                        <div className="d-inline-flex align-items-center justify-content-between w-100 mb-3">
                            <p className="mb-0 text-muted me-1">Email</p>
                            <p className="mb-0">anshan@gmail.com</p>
                        </div>
                        <div className="d-inline-flex align-items-center justify-content-between w-100 mb-3">
                            <p className="mb-0 text-muted me-1">Phone</p>
                            <p className="mb-0">(+1-876) 8654 239 581</p>
                        </div>
                        <div className="d-inline-flex align-items-center justify-content-between w-100">
                            <p className="mb-0 text-muted me-1">Location</p>
                            <p className="mb-0">New York</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Skills</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row className="align-items-center mb-3">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">Junior</p>
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "30%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">30%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-3">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">UX Researcher</p>
                            </Col>
                            <Col sm={6} >
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "80%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">80%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-3">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">Wordpress</p>
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">90%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-3">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">HTML</p>
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "30%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">30%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-3">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">Graphic Design</p>
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "95%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">95%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col sm={6} className="mb-2 mb-sm-0">
                                <p className="mb-0">Code Style</p>
                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 me-3">
                                        <div className="progress progress-primary" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">75%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default UserInfo;