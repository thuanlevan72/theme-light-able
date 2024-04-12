import Image from "next/image";
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

//img
import avatar1 from "@assets/images/user/avatar-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Comminuties = () => {
    return (
        <React.Fragment>
            <section className="bg-primary comminuties-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8} xl={6}>
                            <h2 className="text-white wow animate__fadeInUp section-title" data-wow-delay="0.2s">Trusted by open-source
                                comminuties</h2>
                            <p className="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
                                Lorem
                                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard dummy text ever since the 1500s.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="px-0">
                    <Row>
                        <Col xs={12} className="wow animate__fadeInUp" data-wow-delay="0.6s">
                        <Swiper
                            className='comminuties-slides'
                                slidesPerView={1.5}
                                spaceBetween={20}
                                loop={true}     
                                autoplay={true}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with the great
                                                documenation.
                                                Congratulations for the good work</h3>
                                            <p className="my-3 text-primary text-end">- Design Quality</p>
                                            <div className="media align-items-start">
                                                <div className="flex-shrink-0">
                                                    <Image width={40} src={avatar1} alt="user image" className="img-radius" />
                                                </div>
                                                <div className="media-body ms-3">
                                                    <h6 className="mb-0">karanveer s.</h6>
                                                    <p className="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with the great
                                                documenation.
                                                Congratulations for the good work</h3>
                                            <p className="my-3 text-primary text-end">- Design Quality</p>
                                            <div className="media align-items-start">
                                                <div className="flex-shrink-0">
                                                    <Image width={40} src={avatar1} alt="user image" className="img-radius" />
                                                </div>
                                                <div className="media-body ms-3">
                                                    <h6 className="mb-0">karanveer s.</h6>
                                                    <p className="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with the great
                                                documenation.
                                                Congratulations for the good work</h3>
                                            <p className="my-3 text-primary text-end">- Design Quality</p>
                                            <div className="media align-items-start">
                                                <div className="flex-shrink-0">
                                                    <Image width={40} src={avatar1} alt="user image" className="img-radius" />
                                                </div>
                                                <div className="media-body ms-3">
                                                    <h6 className="mb-0">karanveer s.</h6>
                                                    <p className="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with the great
                                                documenation.
                                                Congratulations for the good work</h3>
                                            <p className="my-3 text-primary text-end">- Design Quality</p>
                                            <div className="media align-items-start">
                                                <div className="flex-shrink-0">
                                                    <Image width={40} src={avatar1} alt="user image" className="img-radius" />
                                                </div>
                                                <div className="media-body ms-3">
                                                    <h6 className="mb-0">karanveer s.</h6>
                                                    <p className="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                    </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Comminuties;