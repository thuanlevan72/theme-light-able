import React, { ReactElement, useState } from "react";
import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay } from 'swiper/modules';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";

// IMage
import slide1 from "@assets/images/slider/img-slide-1.jpg"
import slide2 from "@assets/images/slider/img-slide-2.jpg"
import slide3 from "@assets/images/slider/img-slide-3.jpg"
import slide4 from "@assets/images/slider/img-slide-4.jpg"

const Slider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <React.Fragment>
            <Row>
                <SectionTitle
                    title="Slider"
                    description="react-slider works with static content and it works in the browser only. If the HTML is loaded dynamically.                    "
                    link="https://swiperjs.com/react"
                />
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Slider1</h5>
                        </div>
                        <Card.Body>
                            <Swiper className="mySwiper" modules={[Autoplay]} loop={true} autoplay={{
                                delay: 1000,
                            }}>
                                <SwiperSlide>
                                    <Image src={slide1} alt="" className="img-fluid" priority />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slide2} alt="" className="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slide3} alt="" className="img-fluid" />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Vertical</h5>
                        </div>
                        <Card.Body>
                            <Swiper direction={'vertical'} className="owl-carousel owl-theme slider2" modules={[Autoplay]} loop={true} autoplay={{
                                delay: 1100,
                            }} style={{ height: "269.8px" }}>
                                <SwiperSlide>
                                    <Image src={slide1} alt="" className="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slide2} alt="" className="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slide3} alt="" className="img-fluid" />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Customize</h5>
                        </div>
                        <Card.Body>
                            <div id="slider3">
                                <Swiper className="customize"
                                    loop={true}
                                    spaceBetween={2}
                                    slidesPerView={3}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Thumbs, Autoplay]}
                                    autoplay={{
                                        delay: 1100,
                                    }} style={{ height: "225px" }}>
                                    <SwiperSlide>
                                        < Image src={slide1} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide2} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide3} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide4} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper 
                                    className="customize-tools"
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    autoplay={{
                                        delay: 1100,
                                    }} style={{ height: "80px" }}>
                                    <SwiperSlide>
                                        <Image src={slide1} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide2} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide3} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={slide4} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            {/* <Swiper
                                // style={{
                                //     '--swiper-navigation-color': '#fff',
                                //     '--swiper-pagination-color': '#fff',
                                // }}
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </React.Fragment >
    );
}

Slider.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Slider;