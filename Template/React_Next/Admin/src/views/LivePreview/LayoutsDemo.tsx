import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import vertical from "@assets/images/landing/preview-layouts-vertical.jpg";
import horizontal from "@assets/images/landing/preview-layouts-horizontal.jpg";
import compact from "@assets/images/landing/preview-layouts-compact.jpg";
import creative from "@assets/images/landing/preview-layouts-creative.jpg";
import tab from "@assets/images/landing/preview-layouts-tab.jpg";

const LayoutsDemo = () => {
  return (
    <React.Fragment>
      <section className="bg-white pt-0">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} xl={6}>
              <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Layouts Demos</h2>
              <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
            </Col>
          </Row>
          <Row className="g-4 text-center ">
            <Col lg={4} md={6}>
              <Card className="layout-card">
                <Card.Body>
                  <Link href="/dashboard" target="_blank">
                    <Image src={vertical} alt="img" className="img-fluid border" />
                  </Link>
                </Card.Body>
              </Card>
              <Link href="#" target="_blank" className="h5 d-flex align-items-center justify-content-center gap-2">Vertical <i className="ti ti-link text-primary f-22"></i></Link>
            </Col>
            <Col lg={4} md={6}>
              <Card className="layout-card">
                <Card.Body>
                  <Link href="#" target="_blank">
                    <Image src={horizontal} alt="img" className="img-fluid border" />
                  </Link>
                </Card.Body>
              </Card>
              <Link href="#" target="_blank" className="h5 d-flex align-items-center justify-content-center gap-2">Horizontal <i className="ti ti-link text-primary f-22"></i></Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LayoutsDemo;