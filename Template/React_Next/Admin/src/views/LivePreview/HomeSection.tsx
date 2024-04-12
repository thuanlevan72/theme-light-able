import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';

import header from "@assets/images/landing/img-header-bg.svg"
import bs from "@assets/images/landing/techcard-bs.svg"
import react from "@assets/images/landing/techcard-react.svg"
import figma from "@assets/images/landing/techcard-figma.svg"
import vue from "@assets/images/landing/techcard-vue.svg"
import laravel from "@assets/images/landing/techcard-laravel.svg"
import node from "@assets/images/landing/techcard-node.svg"
import django from "@assets/images/landing/techcard-django.svg"
import net from "@assets/images/landing/techcard-net.svg"
import cakephp from "@assets/images/landing/techcard-cakephp.svg"
import mvc5 from "@assets/images/landing/techcard-mvc5.svg"

const HomeSection = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <div className="bg-dark mx-sm-3 home-section">
                    <Image src={header} alt="background shape" className="img-fluid img-header-bg" />
                    <div className='swiper language-slides-hero'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Row className="align-items-center justify-content-center text-center">
                                    <Col xs={12} className="header-content">
                                        <span className="header-badge text-white">
                                            <i className="ph-duotone ph-medal text-warning me-2"></i>
                                            Unlock Your Potential for Just $11. Limited Offer
                                        </span>
                                        <Row className="justify-content-center text-center">
                                            <Col xl={7} lg={8} md={9} sm={10} xs={11}>
                                                <h1 className="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Elevate Your Project with Light Able Admin Dashboard</h1>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center text-center">
                                            <Col xxl={5} xl={6} lg={7} md={8} sm={10} xs={11}>
                                                <p className="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">Your go-to solution for crafting sleek admin interfaces effortlessly. Streamline your workflow and enhance user experience with ease. </p>
                                            </Col>
                                        </Row>
                                        <div className="wow animate__fadeInUp" data-wow-delay="0.8s">
                                            <Link href="https://phoenixcoded.com/item/light-able-bootstrap-admin-dashboard/" className="btn btn-primary me-3">Live Preview <i className="ph-duotone ph-arrow-square-out"></i></Link>
                                            <Link href="https://github.com/phoenixcoded/light-able-bootstrap-vanilla-js" className="btn btn-outline-light" target="_blank">
                                                <i className="fab fa-github me-1"></i>
                                                Github
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>  
                        </div>
                        <Row style={{ marginTop : "5%"}}>
                            <Col sm={12}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={7}
                                    autoplay={true}
                                    loop={true}
                                    modules={[Navigation, Autoplay]}
                                    // navigation={{ prevEl: '.slidePrev-btn', nextEl: '.slideNext-btn' }}
                                >
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={bs} className="me-1" alt="react icon" />
                                                Bootstrap
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={react} className="me-1" alt="react icon" />
                                                React
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={vue} className="me-1" alt="react icon" />
                                                Vue.js
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={laravel} className="me-1" alt="react icon" />
                                                Laravel
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={node} className="me-1" alt="react icon" />
                                                Node.js
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={django} className="me-1" alt="react icon" />
                                                Django
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={net} className="me-1" alt="react icon" />
                                                ASP
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={cakephp} className="me-1" alt="react icon" />
                                                CakePHP
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={mvc5} className="me-1" alt="react icon" />
                                                MVC5
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="#" className="language-badge text-white">
                                                <Image src={figma} className="me-1" alt="react icon" />
                                                Figma
                                            </Link>
                                        </SwiperSlide>
                                </Swiper>
                                {/* <div className="why-slider-arrows d-flex justify-content-center">
                                    <div className="slidePrev-btn">
                                        <span className="avtar avtar-s btn btn-link-secondary border-0"><i className="ti ti-arrow-left f-18"></i></span>
                                    </div>
                                    <div className="slideNext-btn">
                                        <span className="avtar avtar-s btn btn-link-secondary border-0"><i className="ti ti-arrow-right f-18"></i></span>
                                    </div>
                                </div> */}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default HomeSection