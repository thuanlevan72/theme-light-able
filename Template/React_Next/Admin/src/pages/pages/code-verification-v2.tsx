import NonLayout from "@layout/NonLayout";
import Image from "next/image";
import React, { ReactElement } from "react";
import Link from "next/link";
import { Card, Form, Row } from "react-bootstrap";

// img
import logodark from "@assets/images/logo-dark.svg";

const CodeVerificationV2 = () => {
    return (
        <React.Fragment>
            <div className="auth-main v2">
                <div className="bg-overlay bg-dark"></div>
                <div className="auth-wrapper">
                    <div className="auth-sidecontent">

                        <div className="auth-sidefooter">
                            <Image src={logodark} className="img-brand img-fluid" alt="images" />
                            <hr className="mb-3 mt-4" />
                            <Row>
                                <div className="col my-1">
                                    <p className="m-0">Light Able ♥ crafted by Team <Link href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</Link></p>
                                </div>
                                <div className="col-auto my-1">
                                    <ul className="list-inline footer-link mb-0">
                                        <li className="list-inline-item"><Link href="../index">Home</Link></li>
                                        <li className="list-inline-item"><Link href="https://pcoded.gitbook.io/light-able/" target="_blank">Documentation</Link></li>
                                        <li className="list-inline-item"><Link href="https://phoenixcoded.support-hub.io/" target="_blank">Support</Link></li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="auth-form">
                        <Card className="my-5 mx-3">
                            <Card.Body>
                                <h4 className="f-w-500 mb-1">Please confirm with OTP</h4>
                                <p className="mb-0">We`ve send you code on jone. ****@company.com</p>
                                <p className="mb-3">Did not receive the email?<Link href="#" className="link-primary ms-1">Resend code</Link></p>
                                <Row className="my-4 text-center">
                                    <div className="col">
                                        <Form.Control type="text" className="text-center" placeholder="0" />
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" className="text-center" placeholder="0" />
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" className="text-center" placeholder="0" />
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" className="text-center" placeholder="0" />
                                    </div>
                                </Row>
                                <div className="d-grid mt-4">
                                    <button type="button" className="btn btn-primary">Continue</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

CodeVerificationV2.getLayout = (page: ReactElement) => {
    return (
        <NonLayout>
            {page}
        </NonLayout>
    )
};

export default CodeVerificationV2;