import Image from "next/image";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";

// img
import widget from '@assets/images/landing/img-widget.png';

const Widgets = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image src={widget} alt="img" className="img-fluid wow animate__fadeInUp" data-wow-delay="0.2s" />
                        </div>
                        <div className="col-md-6">
                            <Tab.Container defaultActiveKey="pills-home">
                                <Nav as="ul" className="nav-pills widget-tabs rounded mb-4 wow animate__fadeInUp p-0" data-wow-delay="0.4s" id="pills-tab"
                                    role="tablist">
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link as="button" eventKey="pills-home" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                                            type="button" role="tab" aria-controls="pills-home" aria-selected="true">Visual report</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" role="presentation">
                                        <Nav.Link as="button" eventKey="pills-profile" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Statistic</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="pills-tabContent">
                                    <Tab.Pane eventKey="pills-home" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <h2 className="mb-3 wow animate__fadeInUp" data-wow-delay="0.4s">All widgets designed for different
                                            Applications categories</h2>
                                        <p className="mb-4 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                            text ever since the 1500s.</p>
                                        <div className="wow animate__fadeInUp" data-wow-delay="0.8s">
                                            <Link href="../dashboard" className="btn btn-primary me-2">Explore</Link>
                                            <Link href="../dashboard" className="btn btn-outline-secondary">Live preview</Link>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-profile" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <h2 className="mb-3 wow animate__fadeInUp" data-wow-delay="0.4s">All widgets designed for different
                                            Applications categories</h2>
                                        <p className="mb-4 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                            text ever since the 1500s.</p>
                                        <div className="wow animate__fadeInUp" data-wow-delay="0.8s">
                                            <Link href="../dashboard" className="btn btn-primary me-2">Explore</Link>
                                            <Link href="../dashboard" className="btn btn-outline-secondary">Live preview</Link>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Widgets;