import React from "react";
import Image from "next/image";

//img
import clientEagames from "@assets/images/landing/client-eagames.svg";
import clientHaswent2 from "@assets/images/landing/client-haswent-2.svg";
import clientCrystal1 from "@assets/images/landing/client-crystal-1.svg";
import clientVodafone from "@assets/images/landing/client-vodafone.svg";

const CompaniesApps = () => {
    return (
        <React.Fragment>
            <section className="border-bottom py-lg-5 py-4">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-xl-6">
                            <h2 className="wow animate__fadeInUp" data-wow-delay="0.1s">Trusted By</h2>
                            <p className="mt-4 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                text ever since the 1500s.</p>
                        </div>
                        <div className="col-md-12">
                            <div className="row justify-content-center client-block g-5">
                                <div className="col-auto wow animate__fadeInRight" data-wow-delay="0.3s">
                                    <Image src={clientEagames} alt="img" className="img-fluid" /></div>
                                <div className="col-auto wow animate__fadeInRight" data-wow-delay="0.4s">
                                    <Image src={clientHaswent2} alt="img" className="img-fluid" /></div>
                                <div className="col-auto wow animate__fadeInRight" data-wow-delay="0.5s">
                                    <Image src={clientCrystal1} alt="img" className="img-fluid" /></div>
                                <div className="col-auto wow animate__fadeInRight" data-wow-delay="0.6s">
                                    <Image src={clientVodafone} alt="img" className="img-fluid" /></div>
                                <div className="col-auto wow animate__fadeInRight" data-wow-delay="0.7s">
                                    <Image src={clientEagames} alt="img" className="img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default CompaniesApps;