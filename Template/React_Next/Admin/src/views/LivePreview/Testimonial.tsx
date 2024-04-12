import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {
    return (
        <React.Fragment>
            <section className="bg-dark comminuties-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <div className="col-md-8 col-xl-6">
                            <h2 className="text-white wow animate__fadeInUp section-title" data-wow-delay="0.2s">Testimonials</h2>
                            <p className="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&apos;s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="col-12 wow animate__fadeInUp" data-wow-delay="0.6s">
                            <Swiper slidesPerView={2}
                                spaceBetween={20}
                                loop={true}     
                                autoplay={true}
                                modules={[Autoplay]} className="comminuties-slides">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <p>This is probably one of my favorite admin themes yet. Looks great and easy to use. Support is fantastic too. Thank you!</p>
                                                <h5 className="mt-3 mb-0 text-primary text-end">- Support</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <p>Glad to see the designs and the components cleaness. Quality product with the great
                                                    documenation.
                                                    Congratulations for the good work</p>
                                                <h5 className="mt-3 mb-0 text-primary text-end">- Design Quality</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <p>This template is quite customizable and can handle any needs you have for your admin dashboard.</p>
                                                <h5 className="mt-3 mb-0 text-primary text-end">- Code Quality</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <p>I get all what I need for my project from this template so I can focus to back end side. </p>
                                                <h5 className="mt-3 mb-0 text-primary text-end">- Feature Availablity</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <p>Love this template. Tons of sharp components and examples. Keep up the good work!</p>
                                                <h5 className="mt-3 mb-0 text-primary text-end">- Feature Availablity</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Testimonial