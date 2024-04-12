import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// img
import imgHHeaderBg from "@assets/images/landing/img-h-badge-bg.svg";
import imgHeaderMock from "@assets/images/landing/img-header-moke.png";

const FriendsWithLight = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="align-items-center">
                    <Col md={7} className="header-content">
                        <div className="header-badge wow animate__zoomIn" data-wow-delay="0.6s">
                            <span>Chat app</span>
                            <Image src={imgHHeaderBg} alt="img" className="img-fluid" />
                        </div>
                        <h4 className="mb-0 wow animate__fadeInUp" data-wow-delay="0.2s">
                            It’s easy talking to your
                        </h4>
                        <h1 className="my-3 wow animate__fadeInUp" data-wow-delay="0.4s">
                            Friends with Light able
                        </h1>
                        <p className="text-muted f-16 mb-3 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.6s">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                            standard dummy text ever since the 1500s.
                        </p> 
                        <div className="wow animate__fadeInUp" data-wow-delay="0.8s">
                            <Link href="../dashboard" className="btn btn-primary">
                                Get Light able <i className="ph-duotone ph-arrow-square-out"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="wow animate__zoomIn" data-wow-delay="0.8s">
                            <Image src={imgHeaderMock} alt="img" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default FriendsWithLight;