import React, { ReactElement, useEffect, useState } from "react";
import NonLayout from "@layout/NonLayout";

//import images
import imgSoon from "@assets/images/pages/img-soon.png";
import Image from "next/image";
import FooterBlock from "@layout/FooterBlock";

const ComingSoon = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const d = new Date();
        d.setDate(d.getDate() + 2);
        const countDownDate = new Date(d).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="auth-main v1">
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <div className="container">
                            <div className="card-body soon-card">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-6 text-center">
                                        <Image className="img-fluid" src={imgSoon} alt="img" />
                                    </div>
                                    <div className="col-lg-6 col-xl-4">
                                        <div className="text-center">
                                            <h1 className="mt-2">Coming soon</h1>
                                            <p className="mt-2 mb-4 text-muted f-20">Something new is on it&apos;s way</p>
                                        </div>
                                        <div className="row g-3 timer-block mt-4 justify-content-center" id="timer-block">
                                            <div className="col-auto">
                                                <span className="avtar card avtar-xl">{days}</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="avtar card avtar-xl">{hours}</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="avtar card avtar-xl">{minutes}</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="avtar card avtar-xl">{seconds}</span>
                                            </div>
                                        </div>
                                        <div className="row g-3 d-flex align-items-center mt-4">
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="col-auto">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary d-flex align-items-center"><i className="ti ti-bell-ringing me-2"></i>Notify Me</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FooterBlock */}
                    <FooterBlock />


                </div>
            </div>
        </>
    )
}

ComingSoon.getLayout = (page: ReactElement) => {
    return (
        <NonLayout>
            {page}
        </NonLayout>
    )
};

export default ComingSoon;