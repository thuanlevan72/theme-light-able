import React from 'react'
import { Container, Row } from 'react-bootstrap'


const WhyPage = () => {
    return (
        <React.Fragment>
            <section className="bg-white feature-section">
                <Container className="title mb-0">
                    <Row className="justify-content-center text-center animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'animate__fadeInUp' }}>
                        <div className="col-md-8 col-xl-6">
                            <h2 className="mb-0 wow animate__fadeInUp section-title" data-wow-delay="0.1s">Why Light Able?</h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">
                                Opt for Light Able for web development and unleash endless possibilities. Its sleek design, robust features, and unmatched flexibility enable effortless creation of stunning web applications. </p>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row className="g-3">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.1s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-gauge f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Dashboard of 2024</h5>
                                            <p className="mb-0">Embracing the latest trends in design, Light Able emerges as a standout Bootstrap admin template for 2024.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.2s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-sidebar-simple f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Made for Performance</h5>
                                            <p className="mb-0">Speed, ease of customization, and flexibility are three crucial factors for any admin template. We&apos;re delighted to announce that Light Able excels in these performance metrics. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.3s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-device-mobile-camera f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Error-Free Code</h5>
                                            <p className="mb-0">&quot;Error Prohibited!!&quot; Yes, we prioritize your project by conducting thorough design and performance testing across all major modern devices. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.4s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-sun-dim f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>On Time Support</h5>
                                            <p className="mb-0">Problem? Write to us - using our <a href="https://phoenixcoded.authordesk.app/" target="_blank" title="Phoenixcoded Support Desk">support desk</a>. 99% query resolution in first response within 1 day of time. 70% first response within 30mins. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.5s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-headset f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Always Updated</h5>
                                            <p className="mb-0">Rest assured, our package stays current with the latest plug-ins and technologies. You&apos;ll receive email notifications for updates, along with detailed changelogs and version history on our item page. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-none wow animate__fadeInUp mb-0"
                                data-wow-delay="0.6s">
                                <div className="card-body">
                                    <div className="media align-items-start">
                                        <div className="avtar bg-light-primary flex-shrink-0">
                                            <i className="ph-duotone ph-arrow-clockwise f-24"></i>
                                        </div>
                                        <div className="media-body ms-3">
                                            <h5>Effective Documentation</h5>
                                            <p className="mb-0">Enjoy stress-free development with separate, regularly updated help documentation of Light Able.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default WhyPage