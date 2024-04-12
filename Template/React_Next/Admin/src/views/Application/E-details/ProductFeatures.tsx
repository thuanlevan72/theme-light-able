import React from "react";
import { Card, Col, Nav, Row, Tab, Table } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';

// img
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import Image from "next/image";
import Link from "next/link";

const ProductFeatures = () => {
    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="Features">
                <Card>
                    <Card.Header className="pb-0">
                        <Nav as="ul" variant="tabs" className="profile-tabs mb-0" id="myTab" role="tablist">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="Features">Features </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="Specifications">Specifications</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="Overview">Overview </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="Reviews">Reviews<span className="badge bg-light-primary rounded-pill px-2 ms-2">275</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey="Features" id="ecomtab-1" role="tabpanel" aria-labelledby="ecomtab-tab-1">
                                <div className="table-responsive">
                                    <Table className="table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="text-muted py-1">Band :</td>
                                                <td className="py-1">Smart Band</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted py-1">Compatible Devices :</td>
                                                <td className="py-1">Smartphones</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted py-1">Ideal For :</td>
                                                <td className="py-1">Unisex</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted py-1">Lifestyle :</td>
                                                <td className="py-1">Fitness | Indoor | Sports | Swimming | Outdoor</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted py-1">Basic Features :</td>
                                                <td className="py-1">Calendar | Date & Time | Timer/Stop Watch</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted py-1">Health Tracker :</td>
                                                <td className="py-1">Heart Rate | Exercise Tracker</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Specifications" id="ecomtab-2" role="tabpanel" aria-labelledby="ecomtab-tab-2">
                                <Row className="gy-3">
                                    <Col md={6}>
                                        <h5>Product Category</h5>
                                        <hr className="mb-3 mt-1" />
                                        <div className="table-responsive">
                                            <Table className="mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-muted py-1 border-top-0">Wearable Device Type:</td>
                                                        <td className="py-1 border-top-0">Smart Band</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted py-1">Compatible Devices :</td>
                                                        <td className="py-1">Smartphones</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted py-1">Ideal For :</td>
                                                        <td className="py-1">Unisex</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h5>Manufacturer Details</h5>
                                        <hr className="mb-3 mt-1" />
                                        <div className="table-responsive">
                                            <Table className="mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-muted py-1 border-top-0">Brand :</td>
                                                        <td className="py-1 border-top-0">Apple</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted py-1">Model Series :</td>
                                                        <td className="py-1">Watch SE</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted py-1">Model Number :</td>
                                                        <td className="py-1">MYDT2HN/A</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Overview" id="ecomtab-3" role="tabpanel" aria-labelledby="ecomtab-tab-3">
                                <div className="table-responsive">
                                    <p className="text-muted"
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                                        standard dummy text ever since the 1500s,
                                        <strong className="text-body"
                                        >“When an unknown printer took a galley of type and scrambled it to make a type specimen book.”</strong
                                        >
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularized in the 1960s with the release of Lestrade sheets containing Lorem Ipsum passages, and
                                        more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <p className="text-muted mb-0"
                                    >It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.</p
                                    >
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Reviews" id="ecomtab-4" role="tabpanel" aria-labelledby="ecomtab-tab-4">
                                <Card>
                                    <Card.Body>
                                        <Row className="justify-content-between align-items-center">
                                            <Col xxl={4} xl={5}>
                                                <h2 className="mb-3"><b>3.5<small className="text-muted f-18">/5</small></b></h2>
                                                <p className="mb-2 text-muted">Based on 275 reviews</p>
                                                <div className="star mb-3 f-20">
                                                    <Rating
                                                        initialValue={3.5}
                                                        size={28}
                                                        allowFraction={true}
                                                    />
                                                </div>
                                            </Col>
                                            <Col xxl={4} xl={5}>
                                                <div className="d-flex align-items-center">
                                                    <div className="w-100">
                                                        <div className="row align-items-center my-2">
                                                            <div className="col">
                                                                <div className="progress" style={{ height: "4px" }}>
                                                                    <div className="progress-bar bg-warning" style={{ width: "30%" }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <p className="mb-0 text-muted">5 Stars</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center my-2">
                                                            <div className="col">
                                                                <div className="progress" style={{ height: "4px" }}>
                                                                    <div className="progress-bar bg-warning" style={{ width: "60%" }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <p className="mb-0 text-muted">4 Stars</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center my-2">
                                                            <div className="col">
                                                                <div className="progress" style={{ height: "4px" }}>
                                                                    <div className="progress-bar bg-warning" style={{ width: "75%" }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <p className="mb-0 text-muted">3 Stars</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center my-2">
                                                            <div className="col">
                                                                <div className="progress" style={{ height: "4px" }}>
                                                                    <div className="progress-bar bg-warning" style={{ width: "40%" }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <p className="mb-0 text-muted">2 Stars</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <div className="progress" style={{ height: "4px" }}>
                                                                    <div className="progress-bar bg-warning" style={{ width: "55%" }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <p className="mb-0 text-muted">1 Stars</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <div className="media align-items-start">
                                            <div className="chat-avtar">
                                                <Image className="img-radius img-fluid" src={avatar1} width={40} alt="User image" />
                                                <div className="bg-success chat-badge"></div>
                                            </div>
                                            <div className="media-body ms-3">
                                                <h6 className="mb-1">Harriet Wilson</h6>
                                                <p className="text-muted text-sm mb-1">2 hour ago</p>
                                                <div className="star">
                                                    <Rating
                                                        initialValue={3.5}
                                                        size={25}
                                                        allowFraction={true}
                                                    />
                                                </div>
                                                <p className="mb-0 text-muted mt-1"
                                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&apos;s standard dummy text ever since the 1500.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className="card-body">
                                        <div className="media align-items-start">
                                            <div className="chat-avtar">
                                                <Image className="img-radius img-fluid" src={avatar2} width={40} alt="User image" />
                                                <div className="bg-success chat-badge"></div>
                                            </div>
                                            <div className="media-body ms-3">
                                                <h6 className="mb-1">Lou Olson</h6>
                                                <p className="text-muted text-sm mb-1">2 hour ago</p>
                                                <div className="star">
                                                    <Rating
                                                        initialValue={2.5}
                                                        size={25}
                                                        allowFraction={true}
                                                    />
                                                </div>
                                                <p className="mb-2 text-muted mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                    industry&apos;s standard dummy text ever since the 1500.</p>
                                                <Link href="#" className="link-primary mb-1">https://phoenixcoded.net/</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <div className="text-center mt-3">
                                    <button className="btn btn-link-primary">View more comments</button>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>
        </React.Fragment >
    );
}

export default ProductFeatures;