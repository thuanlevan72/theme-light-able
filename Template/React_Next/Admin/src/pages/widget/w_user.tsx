import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from "next/image";

//import images
import userCover from "@assets/images/application/img-user-cover-1.jpg";
import avatar1 from "@assets/images/user/avatar-1.jpg";
import Link from "next/link";

const WidgetUser = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Widget" subTitle="User" />
            <Row>
                <Col md={6} xl={4}>
                    <Card className="user-card">
                        <Card.Body>
                            <div className="user-cover-bg">
                                <Image src={userCover} alt="image" className="img-fluid" />
                                <div className="cover-data">
                                    <div className="d-inline-flex align-items-center">
                                        <i className="ph-duotone ph-star text-warning me-1"></i>
                                        4.5 <small className="text-white text-opacity-50">/ 5</small>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-avtar card-user-image">
                                <Image src={avatar1} alt="user-image" className="img-thumbnail rounded-circle " />
                                <i className="chat-badge bg-success"></i>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">William Bond</h6>
                                    <p className="text-muted text-sm mb-0">DM on
                                        <Link href="#" className="text-primary">@williambond</Link></p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button className="btn btn-primary btn-sm">Message</button>
                                    <button className="btn btn-outline-secondary btn-sm ms-1">Follow</button>
                                </div>
                            </div>
                            <Row className="g-3 my-3 text-center">
                                <Col xs={4}>
                                    <h5 className="mb-0">86</h5>
                                    <small className="text-muted">Post</small>
                                </Col>
                                <div className="col-4 border border-top-0 border-bottom-0">
                                    <h5 className="mb-0">40</h5>
                                    <small className="text-muted">Project</small>
                                </div>
                                <Col xs={4}>
                                    <h5 className="mb-0">4.5K</h5>
                                    <small className="text-muted">Members</small>
                                </Col>
                            </Row>
                            <div className="saprator my-3">
                                <span>Skills</span>
                            </div>
                            <div className="text-center">
                                <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                                <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                                <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
                            </div>
                            <div className="saprator my-3">
                                <span>Task completed</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 me-2">
                                    <div className="progress" style={{ height: "8px;" }}>
                                        <div className="progress-bar bg-primary" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <h6 className="mb-0">30%</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="position-relative">
                            <div className="text-center mt-3">
                                <div className="chat-avtar d-inline-flex mx-auto">
                                    <Image
                                        className="rounded-circle img-fluid wid-90 img-thumbnail"
                                        src={avatar1}
                                        alt="User image"
                                    />
                                    <i className="chat-badge bg-danger me-2 mb-2"></i>
                                </div>
                                <h5 className="mb-0">William Bond</h5>
                                <p className="text-muted text-sm">DM on <Link href="#" className="link-primary"> @williambond </Link> 😍</p>
                                <ul className="list-inline mx-auto mt-4 mb-0">
                                    <li className="list-inline-item">
                                        <Link href="#" className="avtar avtar-s btn-light-secondary">
                                            <i className="ph-duotone ph-phone f-24"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#" className="avtar avtar-s btn-light-secondary">
                                            <i className="ph-duotone ph-video-camera f-24"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#" className="avtar avtar-s btn-light-secondary">
                                            <i className="ph-duotone ph-messenger-logo f-24"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className="position-relative">
                            <div className="text-center mt-3">
                                <div className="chat-avtar d-inline-flex mx-auto">
                                    <Image
                                        className="rounded-circle img-fluid wid-90 img-thumbnail"
                                        src={avatar1}
                                        alt="User image"
                                    />
                                    <i className="chat-badge bg-danger me-2 mb-2"></i>
                                </div>
                                <h5 className="mb-0">William Bond</h5>
                                <p className="text-muted text-sm">DM on <Link href="#" className="link-primary"> @williambond </Link> 😍</p>
                                <Row>
                                    <Col xs={6}>
                                        <div className="d-grid"><button className="btn btn-primary">Accept</button></div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="d-grid"><button className="btn btn-outline-secondary">Decline</button></div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Add Fund</h5>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="a"
                                        className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                                        href="#"
                                        aria-expanded="false"
                                    >
                                        <i className="ti ti-dots-vertical f-18"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Today</Dropdown.Item>
                                        <Dropdown.Item href="#">Weekly</Dropdown.Item>
                                        <Dropdown.Item href="#">Monthly</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="text-center">
                                <p className="mb-1">Amount</p>
                                <h3>$100</h3>
                                <ul className="list-inline my-3">
                                    <li className="list-inline-item"><span className="badge border bg-light-primary">$100</span></li>
                                    <li className="list-inline-item"><span className="badge border bg-transparent border text-body">$150</span></li>
                                    <li className="list-inline-item"><span className="badge border bg-transparent border text-body">$200</span></li>
                                    <li className="list-inline-item"><span className="badge border bg-transparent border text-body">$250</span></li>
                                </ul>
                            </div>
                            <div className="border rounded p-3 my-3">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avatar1} alt="user-image" className="avtar rounded-circle wid-45 hei-45" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-0">Able pro</h6>
                                        <small className="text-muted">@ableprodevelop</small>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="a"
                                            className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                                            href="#"
                                            aria-expanded="false"
                                        >
                                            <i className="ti ti-dots-vertical f-18"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#">Today</Dropdown.Item>
                                            <Dropdown.Item href="#">Weekly</Dropdown.Item>
                                            <Dropdown.Item href="#">Monthly</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary">Confirm</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

WidgetUser.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default WidgetUser;