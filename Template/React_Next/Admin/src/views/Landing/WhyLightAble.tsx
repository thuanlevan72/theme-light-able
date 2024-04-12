import React, { useState } from 'react';
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const WhyLightAble = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        const totalSlides = 6;
        if (index < totalSlides - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <React.Fragment>
            <section className="bg-white why-section">
                <Container>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-xl-6">
                            <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Why Choose Light able</h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
                                text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                                the 1500s.</p>
                        </div>
                    </div>
                </Container>
                <Container fluid className="px-0">
                    <Row>
                        <Col xs={12} className="wow animate__fadeInUp" data-wow-delay="0.6s">
                            <Swiper
                            className='why-slides'
                                slidesPerView={3.5}
                                spaceBetween={20}
                                loop={true}     
                                autoplay={true}
                                modules={[Autoplay, Navigation]}
                                navigation={{ prevEl: '.slidePrev-btn', nextEl: '.slideNext-btn' }}
                            >
                                <SwiperSlide>
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <i className="ph-duotone ph-tag text-primary f-32"></i>
                                            <h5 className="my-3">We offer the best customer experience in the industry.</h5>
                                            <p className="mb-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry&apos;s standard dummy text ever since the 1500s.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                 <SwiperSlide>
                                 <Card className="mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                            <h5 className="my-3">Light able gets better and give updates.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </Card>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                 <Card className="mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-alarm text-primary f-32"></i>
                                            <h5 className="my-3">Time and cost</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </Card>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                 <Card className="mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-tag text-primary f-32"></i>
                                            <h5 className="my-3">We offer the best customer experience in the industry.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </Card>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                 <Card className="mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                            <h5 className="my-3">Light able gets better and give updates.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </Card>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                 <Card className="mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-alarm text-primary f-32"></i>
                                            <h5 className="my-3">Time and cost</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </Card>
                                 </SwiperSlide>
                            </Swiper>
                            {/* <Carousel controls={false} indicators={false} interval={1000}>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-tag text-primary f-32"></i>
                                            <h5 className="my-3">We offer the best customer experience in the industry.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                            <h5 className="my-3">Light able gets better and give updates.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-alarm text-primary f-32"></i>
                                            <h5 className="my-3">Time and cost</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-tag text-primary f-32"></i>
                                            <h5 className="my-3">We offer the best customer experience in the industry.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                            <h5 className="my-3">Light able gets better and give updates.</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <i className="ph-duotone ph-alarm text-primary f-32"></i>
                                            <h5 className="my-3">Time and cost</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum
                                                has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel> */}
                            <div className="why-slider-arrows d-flex justify-content-center">
                                <div className="slidePrev-btn">
                                    <span className="avtar avtar-s btn btn-link-secondary border-0" onClick={handlePrevious}>
                                        <i className="ti ti-arrow-left f-18"></i></span>
                                </div>
                                <div className="slideNext-btn">
                                    <span className="avtar avtar-s btn btn-link-secondary border-0" onClick={handleNext}>
                                        <i className="ti ti-arrow-right f-18"></i></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
}

export default WhyLightAble;