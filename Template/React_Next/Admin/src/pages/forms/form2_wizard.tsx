import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useEffect, useState } from "react";
import { ProgressBar, Tab, Row, Col, Card, Nav, TabContainer } from 'react-bootstrap';
import prod3 from "@assets/images/application/img-prod-3.jpg";
import Image from "next/image";

const form_wizard = () => {
    const [key, setKey] = useState('tab-1');
    const [progress, setProgress] = useState(25);
    const totalTabs = 4;


    useEffect(() => {
        // Calculate progress when the component mounts
        const calculateProgress = () => {
          return ((parseInt(key.split('-')[1]) - 1) / (totalTabs - 1)) * 100;
        };
        setProgress(calculateProgress());
      }, [key, totalTabs]);

    const handleTabSelect = (k: any) => {
        setKey(k);
    };

    const handleNext = () => {
        const nextKey = parseInt(key.split('-')[1]) + 1;
        setKey(`tab-${nextKey}`);
    };

    const handlePrevious = () => {
        const previousKey = parseInt(key.split('-')[1]) - 1;
        setKey(`tab-${previousKey}`);
    };



    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Wizard" />
            <Row>
                <Col sm={12}>
                    <div id="basicwizard" className="form-wizard row justify-content-center">
                        <div className="col-sm-12 col-md-6 col-xxl-4 text-center">
                            <h3>Build Your Profile</h3>
                            <p className="text-muted mb-4">A group of people who collectively are responsible for all of the work necessary
                                to produce working, validated assets.</p>
                        </div>
                        <Col xs={12}>
                            <TabContainer defaultActiveKey="tab-1" activeKey={key} onSelect={handleTabSelect}>
                                <Card>
                                    <Card.Body className="p-3">
                                        <Nav className="nav-pills nav-justified">
                                            <Nav.Item as="li" className="nav-item" data-target-form="#contactDetailForm">
                                                <Nav.Link eventKey="tab-1" href="#contactDetail" data-bs-toggle="tab" data-toggle="tab">
                                                    <i className="ph-duotone ph-user-circle"></i>
                                                    <span className="d-none d-sm-inline">About me</span>
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item data-target-form="#jobDetailForm">
                                                <Nav.Link eventKey="tab-2" href="#jobDetail" data-bs-toggle="tab" data-toggle="tab" className="nav-link icon-btn">
                                                    <i className="ph-duotone ph-map-pin"></i>
                                                    <span className="d-none d-sm-inline">Address</span>
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item className="nav-item" data-target-form="#educationDetailForm">
                                                <Nav.Link eventKey="tab-3" href="#educationDetail" data-bs-toggle="tab" data-toggle="tab" className="nav-link icon-btn">
                                                    <i className="ph-duotone ph-graduation-cap"></i>
                                                    <span className="d-none d-sm-inline">Education Detail</span>
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="tab-4" href="#finish" data-bs-toggle="tab" data-toggle="tab" className="nav-link icon-btn">
                                                    <i className="ph-duotone ph-check-circle"></i>
                                                    <span className="d-none d-sm-inline">Finish</span>
                                                </Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className="card-body">
                                        <Tab.Content>

                                            <ProgressBar now={progress} className="mb-3" style={{ height: '7px' }} />


                                            <Tab.Pane eventKey="tab-1" className="tab-pane" id="contactDetail">
                                                <form id="contactForm" method="post" action="#">
                                                    <div className="text-center">
                                                        <h3 className="mb-2">Let&apos;s start with the basic information</h3>
                                                        <small className="text-muted">Let us know your name and email address. Use an address you don&apos;t
                                                            mind other users contacting you at</small>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-sm-auto text-center">
                                                            <div className="position-relative me-3 d-inline-flex">
                                                                <div className="position-absolute top-50 start-100 translate-middle">
                                                                    <button className="btn btn-sm btn-primary btn-icon">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </button>
                                                                </div>
                                                                <Image src={prod3} alt="user-image"
                                                                    className="wid-150 rounded img-fluid ms-2" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">First Name</label>
                                                                        <input type="text" className="form-control" placeholder="Enter First Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Last Name</label>
                                                                        <input type="text" className="form-control" placeholder="Enter Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Email Address</label>
                                                                        <input type="email" className="form-control" placeholder="Enter Email Address" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab-2" className="tab-pane" id="jobDetail">
                                                <form id="jobForm" method="post" action="#">
                                                    <div className="text-center">
                                                        <h3 className="mb-2">Tell me something about Home address</h3>
                                                        <small className="text-muted">Let us know your name and email address. Use an address you don&apos;t
                                                            mind other users contacting you at</small>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Street Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Street Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Street No</label>
                                                                <input type="text" className="form-control" placeholder="Enter Street No" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label className="form-label">City</label>
                                                                <input type="text" className="form-control" placeholder="Enter City" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Country</label>
                                                                <select className="form-select">
                                                                    <option>Select Contry</option>
                                                                    <option>India</option>
                                                                    <option>Rusia</option>
                                                                    <option>Dubai</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab-3" className="tab-pane" id="educationDetail">
                                                <form id="educationForm" method="post" action="#">
                                                    <div className="text-center">
                                                        <h3 className="mb-2">Tell us about your education</h3>
                                                        <small className="text-muted">Let us know your name and email address. Use an address you don&apos;t
                                                            mind other users contacting you at</small>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="schoolName">School Name</label>
                                                                <input type="text" className="form-control" id="schoolName"
                                                                    placeholder="enter your school name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="schoolLocation">School Location</label>
                                                                <input type="text" className="form-control" id="schoolLocation"
                                                                    placeholder="enter your school location" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab-4" className="tab-pane" id="finish">
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-lg-6">
                                                        <div className="text-center">
                                                            <i className="ph-duotone ph-gift f-50 text-danger"></i>
                                                            <h3 className="mt-4 mb-3">Thank you !</h3>
                                                            <div className="mb-3">
                                                                <div className="form-check d-inline-block">
                                                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                                    <label className="form-check-label" htmlFor="customCheck1">I agree with the Terms and
                                                                        Conditions</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </Tab.Pane>


                                            <div className="d-flex wizard justify-content-between mt-3">
                                                <div className="first">
                                                    <button
                                                        className={`btn btn-secondary ${key === 'tab-1' ? 'disabled' : ''}`}
                                                        onClick={() => setKey('tab-1')}
                                                        disabled={key === 'tab-1'}
                                                    >
                                                        First
                                                    </button>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="previous me-2">
                                                        <button
                                                            className={`btn btn-secondary ${key === 'tab-1' ? 'disabled' : ''}`}
                                                            onClick={handlePrevious}
                                                            disabled={key === 'tab-1'}
                                                        >
                                                            Back To Previous
                                                        </button>
                                                    </div>
                                                    <div className="next">
                                                        <button
                                                            className="btn btn-secondary mt-3 mt-md-0"
                                                            onClick={handleNext}
                                                            disabled={key === `tab-${totalTabs}`}
                                                        >
                                                            Next Step
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="last">
                                                    <button
                                                        className={`btn btn-secondary mt-3 mt-md-0 ${key === 'tab-4' ? 'disabled' : ''}`}
                                                        onClick={() => setKey(`tab-${totalTabs}`)}
                                                    // disabled={key !== `tab-${totalTabs}`}
                                                    >
                                                        Finish
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab.Content>
                                    </div>
                                </Card>
                            </TabContainer>

                        </Col>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

form_wizard.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default form_wizard;