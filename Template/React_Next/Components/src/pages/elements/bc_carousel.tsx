import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Carousel, Row } from "react-bootstrap";
import Image from "next/image";

//import images
import imgSlide1 from "@assets/images/slider/img-slide-1.jpg";
import imgSlide2 from "@assets/images/slider/img-slide-2.jpg";
import imgSlide3 from "@assets/images/slider/img-slide-3.jpg";
import imgSlide4 from "@assets/images/slider/img-slide-4.jpg";
import imgSlide5 from "@assets/images/slider/img-slide-5.jpg";
import imgSlide7 from "@assets/images/slider/img-slide-7.jpg";
import imgSlidl6 from "@assets/images/light-box/l6.jpg";

const BCCarousel = () => {
    return (
        <>
            <SectionTitle
                title="Carousel"
                description="A slideshow component for cycling through elements—images or slides of text—like a carousel."
                link="https://react-bootstrap.netlify.app/docs/components/carousel"
            />

            <Row>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h5>Basic Carousel</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleSlidesOnly" controls={false} indicators={false}>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h5>Carousel Controls</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleControls" indicators={false}>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide4}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h5>Carousel Controls</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleControls" indicators={true}>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide7}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h5>Carousel Crossfade</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleFade" fade={true} indicators={false}>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h5>Carousel with Captions</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExample_Indicators_caption">
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 className="text-white">First slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Second slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h5>Dark Variant</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleDark" className="carousel-dark" data-bs-ride="carousel">
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlidl6}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide7}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlidl6}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h5>Disable Touch Swiping - Mobile Only</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Carousel id="carouselExampleControlsNoTouching" indicators={false} touch={false}>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide4}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="img-fluid d-block w-100"
                                        src={imgSlide5}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

BCCarousel.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCCarousel;
