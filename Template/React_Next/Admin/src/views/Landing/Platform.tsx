import Image from "next/image";
import React from "react";

// img
import platform from "@assets/images/landing/img-platform.png"
import { Col, Container, Row } from "react-bootstrap";

const Platform = () => {
    return (
        <React.Fragment>
            <section className="bg-white">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8} xl={6}>
                            <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Technology</h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
                                text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                                the 1500s.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col xs={9} className="wow animate__zoomIn" data-wow-delay="0.4s">
                            <Image src={platform} alt="img" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Platform;