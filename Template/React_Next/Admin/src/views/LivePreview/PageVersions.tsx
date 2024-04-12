import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import dark from "@assets/images/landing/preview-page-dark.jpg";
import rtl from "@assets/images/landing/preview-page-rtl.jpg";
import landing from "@assets/images/landing/preview-page-landing.jpg";
import { Card, Container } from 'react-bootstrap';

const PageVersions = () => {
    return (
        <React.Fragment>
            <section className="bg-white pt-0">
                <Container>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-xl-6">
                            <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Page Versions</h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
                        </div>
                    </div>
                    <div className="row g-4 text-center ">
                        <div className="col-lg-4 col-md-6">
                            <Card className="layout-card">
                                <Card.Body>
                                    <Image src={dark} alt="img" className="img-fluid border" />
                                </Card.Body>
                            </Card>
                            <Link href="/dashboard" target="_blank" className="h5 d-flex align-items-center justify-content-center gap-2">Dark Version <i className="ti ti-link text-primary f-22"></i></Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <Card className="layout-card">
                                <Card.Body>
                                    <Image src={rtl} alt="img" className="img-fluid border" />
                                </Card.Body>
                            </Card>
                            <Link href="/dashboard" target="_blank" className="h5 d-flex align-items-center justify-content-center gap-2">RTL Version <i className="ti ti-link text-primary f-22"></i></Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <Card className="layout-card">
                                <Card.Body>
                                    <Image src={landing} alt="img" className="img-fluid border" />
                                </Card.Body>
                            </Card>
                            <Link href="/dashboard" target="_blank" className="h5 d-flex align-items-center justify-content-center gap-2">Landing Page <i className="ti ti-link text-primary f-22"></i></Link>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default PageVersions;