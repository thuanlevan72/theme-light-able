import React from "react";
import { Card } from "react-bootstrap";

const KeyFeatures = () => {
    return (
        <React.Fragment>
            <section className="bg-white feature-section">
                <div className="container title mb-0">
                    <div className="row justify-content-center text-center wow animate__fadeInUp" data-wow-delay="0.2s"
                        style={{ visibility: "visible", animationDelay: "0.2s", animationName: "animate__fadeInUp" }}>
                        <div className="col-md-8 col-xl-6">
                            <h2 className="mb-0 wow animate__fadeInUp section-title" data-wow-delay="0.1s">Key features</h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">Lorem Ipsum is simply dummy
                                text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and scrambled.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center g-sm-4 g-3">
                        <div className="col-md-6">
                            <Card border="secondary" bg="white" className="border border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.1s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-gauge f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Boost Performance</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card bg="white" className="border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.2s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-sidebar-simple f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Advance Layout</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card bg="white" className="border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.3s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-device-mobile-camera f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Responsive</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card bg="white" className="border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.4s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-sun-dim f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Dark layout</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card bg="white" className="border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.5s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-headset f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Help Desk</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card bg="white" className="border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.6s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-arrow-clockwise f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Live customizer</h5>
                                            <p className="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry&apos;s
                                                standard</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default KeyFeatures;