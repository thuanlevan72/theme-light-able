import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from "next/image";

//import images
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import GERMANY from "@assets/images/widget/GERMANY.jpg";
import USA from "@assets/images/widget/USA.jpg";
import AUSTRALIA from "@assets/images/widget/AUSTRALIA.jpg";
import UK from "@assets/images/widget/UK.jpg";
import BRAZIL from "@assets/images/widget/BRAZIL.jpg";
import Link from "next/link";

const WidgetData = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Widget" subTitle="Data" />
            <Row>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between py-3">
                            <h5 className="mb-0">Team members</h5>
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="avtar avtar-s btn-link-secondary arrow-none" href="#!">
                                    <i className="ti ti-dots-vertical f-18"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                    <Dropdown.Item href="#">Weekly</Dropdown.Item>
                                    <Dropdown.Item href="#">Monthly</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <ul className="list-group list-group-flush border-top-0">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avatar1} width={50} alt="user-image" className="user-avtar rounded wid-50 hie-50" />
                                    </div>
                                    <div className="flex-grow-1 mx-2">
                                        <h6 className="mb-1">David Jones</h6>
                                        <p className="mb-0">Project Leader</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="text-muted mb-0">5 min ago</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avatar3} width={50} alt="user-image" className="user-avtar rounded wid-50 hie-50" />
                                    </div>
                                    <div className="flex-grow-1 mx-2">
                                        <h6 className="mb-1">Robert Smith</h6>
                                        <p className="mb-0">HR Manager</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="text-muted mb-0">Yesterday</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avatar5} width={50} alt="user-image" className="user-avtar rounded wid-50 hie-50" />
                                    </div>
                                    <div className="flex-grow-1 mx-2">
                                        <h6 className="mb-1">John larry</h6>
                                        <p className="mb-0">Developer</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="text-muted mb-0">1 hour ago</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body className="pb-0">
                            <div className="d-flex align-items-center">
                                <h5 className="mb-0">Conversion Rate</h5>
                                <i className="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Conversion Rate"></i>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <h2>5.63</h2>
                                <p>%</p>
                                <span className="badge bg-light-success ms-2"><i className="ti ti-arrow-up me-1"></i> 3.4%</span>
                            </div>
                        </Card.Body>
                        <div className="table-body card-body pt-0 px-0">
                            <div className="table-responsive">
                                <table className="table table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6 className="f-w-500 mb-0">Added to Cart</h6>
                                                <span className="d-block text-muted">5 visits</span>
                                            </td>
                                            <td className="text-end">7.04</td>
                                            <td className="text-end"><i className="ti ti-arrow-up text-success"></i> 4.0%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="f-w-500 mb-0">Reached Checkout</h6>
                                                <span className="d-block text-muted">5 visits</span>
                                            </td>
                                            <td className="text-end">7.04</td>
                                            <td className="text-end"><i className="ti ti-arrow-up text-success"></i> 2.0%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="f-w-500 mb-0">Purchased</h6>
                                                <span className="d-block text-muted">4 orders</span>
                                            </td>
                                            <td className="text-end">5.63</td>
                                            <td className="text-end"><i className="ti ti-arrow-down text-danger"></i> 1.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </Col>
                <div className="col-xl-4 col-md-12">
                    <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between py-3">
                            <h5 className="mb-0">My Task</h5>
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#!">
                                    <i className="ti ti-dots-vertical f-18"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                    <Dropdown.Item href="#">Weekly</Dropdown.Item>
                                    <Dropdown.Item href="#">Monthly</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <ul className="list-group list-group-flush border-top-0">
                            <li className="list-group-item">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1 me-2">
                                        <h6 className="mb-0">Follow up client for feedback</h6>
                                        <p className="my-1"><i className="ti ti-archive"></i> Sending report</p>
                                        <span className="badge bg-danger rounded-pill">00 : 15</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="#" className="avtar avtar-s btn-link-secondary">
                                            <i className="ti ti-circle-check text-success f-18"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1 me-2">
                                        <h6 className="mb-0">Follow up client for feedback</h6>
                                        <p className="my-1"><i className="ti ti-folder"></i> Received report</p>
                                        <span className="badge bg-success rounded-pill">00 : 30</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="avtar avtar-s btn-link-secondary">
                                            <i className="ti ti-circle-check f-18"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1 me-2">
                                        <h6 className="mb-0">Follow up client for feedback</h6>
                                        <p className="my-1"><i className="ti ti-archive"></i> Sending report</p>
                                        <span className="badge bg-danger rounded-pill">00 : 15</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="avtar avtar-s btn-link-secondary">
                                            <i className="ti ti-circle-check f-18"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="card table-card">
                        <div className="card-header">
                            <h5>Visits by Location</h5>
                        </div>
                        <Card.Body className="py-3 px-0">
                            <div className="table-responsive">
                                <table className="table table-hover table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={GERMANY} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">Germany</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">38</td>
                                            <td><i className="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 5.8%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={USA} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">USA</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">928</td>
                                            <td><i className="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 51.2%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={AUSTRALIA} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">Australia</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">674</td>
                                            <td><i className="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 17.1%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={UK} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">UK</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">1,438</td>
                                            <td><i className="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 15.8%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={BRAZIL} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">Brazil</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">90</td>
                                            <td><i className="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 9.8%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={GERMANY} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">Germany</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">123</td>
                                            <td><i className="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 5.8%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={USA} alt="" className="img-fluid wid-30 rounded-1" />
                                                    <h6 className="mb-0 ms-2">USA</h6>
                                                </div>
                                            </td>
                                            <td className="text-end">928</td>
                                            <td><i className="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 51.2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="card latest-activity-card">
                        <div className="card-header">
                            <h5>Your quick style guide line</h5>
                        </div>
                        <div className="card-body">
                            <div className="latest-update-box">
                                <div className="row p-t-20 p-b-30">
                                    <div className="col-auto text-end update-meta">
                                        <p className="text-muted m-b-0 d-inline-flex">08:00 AM</p>
                                        <div className="border border-2 border-success text-success update-icon">20</div>
                                    </div>
                                    <div className="col">
                                        <a href="#!" className="d-inline-flex align-items-center">
                                            <h6 className="mb-0 me-2">Create report</h6>
                                            <span className="badge bg-success">Done</span>
                                        </a>
                                        <p className="text-muted m-b-0">The trip was an amazing and a life changing experience!!</p>
                                    </div>
                                </div>
                                <div className="row p-b-30">
                                    <div className="col-auto text-end update-meta">
                                        <p className="text-muted m-b-0 d-inline-flex">08:20 AM</p>
                                        <div className="border border-2 border-primary text-primary update-icon"><i className="ph-duotone ph-rocket"></i></div>
                                    </div>
                                    <div className="col">
                                        <a href="#!" className="d-inline-flex align-items-center">
                                            <h6 className="mb-0 me-2">Create report</h6>
                                            <span className="badge bg-primary">Running</span>
                                        </a>
                                        <p className="text-muted m-b-0">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>
                                    </div>
                                </div>
                                <div className="row p-b-30">
                                    <div className="col-auto text-end update-meta">
                                        <p className="text-muted m-b-0 d-inline-flex">08:20 AM</p>
                                        <div className="border border-2 border-warning text-warning update-icon"><i className="ph-duotone ph-hand-palm"></i></div>
                                    </div>
                                    <div className="col">
                                        <a href="#!" className="d-inline-flex align-items-center">
                                            <h6 className="mb-0 me-2">Create report</h6>
                                            <span className="badge bg-warning">Pending</span>
                                        </a>
                                        <p className="text-muted m-b-0">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto text-end update-meta">
                                        <p className="text-muted m-b-0 d-inline-flex">09:15 AM</p>
                                        <div className="border border-2 border-danger text-danger update-icon">N</div>
                                    </div>
                                    <div className="col">
                                        <a href="#!" className="d-inline-flex align-items-center">
                                            <h6 className="mb-0 me-2">Create report</h6>
                                            <span className="badge bg-danger">Not Start</span>
                                        </a>
                                        <p className="text-muted m-b-0">Happy Hour! Free drinks at <span> <a href="#!" className="text-primary">Cafe-Bar all </a> </span>day long!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
};

WidgetData.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default WidgetData;