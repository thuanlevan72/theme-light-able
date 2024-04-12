import React from "react";

// img
import counterBg from '@assets/images/landing/img-counter-bg.svg';
import Image from "next/image";

const Banner = () => {
    return (
        <React.Fragment>
            <section className="bg-white pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-dark counter-block mb-0 wow animate__fadeInUp" data-wow-delay="0.7s">
                                <Image src={counterBg} alt="img" className="img-fluid img-counter-bg" />
                                <div className="card-body p-4 p-md-5">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 my-3">
                                            <span className="h1 text-white mb-3 d-block">High-performance, scalability and durability</span>
                                            <p className="mb-0 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                        <div className="col-lg-6 my-3">
                                            <div className="row g-3 text-center">
                                                <div className="col-4">
                                                    <span className="counter text-white">150+</span>
                                                    <h4 className="f-w-400 mb-0 text-white text-opacity-50">Components</h4>
                                                </div>
                                                <div className="col-4">
                                                    <span className="counter text-white">8+</span>
                                                    <h4 className="f-w-400 mb-0 text-white text-opacity-50">Application</h4>
                                                </div>
                                                <div className="col-4">
                                                    <span className="counter text-white">100+</span>
                                                    <h4 className="f-w-400 mb-0 text-white text-opacity-50">Pages</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Banner;