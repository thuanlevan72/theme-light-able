import React from "react";
import { Card, Col, Dropdown, Nav, Tab, TabContainer } from "react-bootstrap";

//import images
import earningBg from "@assets/images/widget/img-earning-bg.svg";
import Image from "next/image";

const Earnings = () => {
    return (
        <>
            <Col md={12} xl={8}>
                <Card className="bg-brand-color-3 earning-card statistics-card-1">
                    <Card.Body className="overflow-hidden">
                        <Image
                            src={earningBg}
                            alt="img"
                            className="img-fluid img-bg h-100"
                        />
                        <TabContainer defaultActiveKey="earnings-mon">
                            <Nav
                                className="nav-fill nav-pills align-items-center justify-content-center mb-5"
                                id="pills-tab"
                                role="tablist"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-mon"
                                        href="#earnings-mon"
                                        role="tab"
                                        aria-controls="earnings-mon"
                                        aria-selected="true"
                                    >
                                        Mon
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-tue"
                                        href="#earnings-tue"
                                        role="tab"
                                        aria-controls="earnings-tue"
                                        aria-selected="false"
                                    >
                                        Tue
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-wed"
                                        href="#earnings-wed"
                                        role="tab"
                                        aria-controls="earnings-wed"
                                        aria-selected="false"
                                    >
                                        Wed
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-thu"
                                        href="#earnings-thu"
                                        role="tab"
                                        aria-controls="earnings-thu"
                                        aria-selected="false"
                                    >
                                        Thu
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-fri"
                                        href="#earnings-fri"
                                        role="tab"
                                        aria-controls="earnings-fri"
                                        aria-selected="false"
                                    >
                                        Fri
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-sat"
                                        href="#earnings-sat"
                                        role="tab"
                                        aria-controls="earnings-sat"
                                        aria-selected="false"
                                    >
                                        Sat
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="earnings-sun"
                                        href="#earnings-sun"
                                        role="tab"
                                        aria-controls="earnings-sun"
                                        aria-selected="false"
                                    >
                                        Sun
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="tabContent-pills">
                                <Tab.Pane
                                    id="earnings-mon"
                                    eventKey="earnings-mon"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-mon"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">984,632</h3>
                                                <span className="badge bg-light-danger ms-2">10%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-tue"
                                    eventKey="earnings-tue"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-tue"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">222,586</h3>
                                                <span className="badge bg-light-success ms-2">30%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-wed"
                                    eventKey="earnings-wed"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-wed"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">859,745</h3>
                                                <span className="badge bg-light-primary ms-2">50%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-thu"
                                    eventKey="earnings-thu"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-thu"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">785,684</h3>
                                                <span className="badge bg-light-warning ms-2">40%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-fri"
                                    eventKey="earnings-fri"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-fri"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">123,486</h3>
                                                <span className="badge bg-light-info ms-2">60%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-sat"
                                    eventKey="earnings-sat"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-sat"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">859,745</h3>
                                                <span className="badge bg-light-primary ms-2">50%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane
                                    className="fade"
                                    id="earnings-sun"
                                    eventKey="earnings-sun"
                                    role="tabpanel"
                                    aria-labelledby="pills-earnings-sun"
                                >
                                    <div className="media align-items-center">
                                        <div className="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                            <i className="ph-duotone ph-chart-bar text-white f-30"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <div className="d-inline-flex align-items-center mb-1">
                                                <h3 className="mb-0 text-white">222,586</h3>
                                                <span className="badge bg-light-success ms-2">30%</span>
                                            </div>
                                            <p className="mb-0 text-white text-opacity-75">Total Earnings</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Earnings;