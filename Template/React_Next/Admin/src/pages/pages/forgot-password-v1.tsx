import NonLayout from "@layout/NonLayout";
import Image from "next/image";
import React, { ReactElement } from "react";
import Link from "next/link";
import { Card, Form, Row } from "react-bootstrap";

// img
import fporgotpassword from "@assets/images/authentication/img-auth-fporgot-password.png";
import logodark from "@assets/images/logo-dark.svg";

const ForgotPassowordV1 = () => {
    return (
        <React.Fragment>
            <div className="auth-main v1">
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <Card className="my-5">
                            <Card.Body>
                                <div className="text-center">
                                    <Image src={fporgotpassword} alt="images" className="img-fluid mb-3" />
                                    <h4 className="f-w-500 mb-1">Forgot Password</h4>
                                    <p className="mb-3">Back to <Link href="../pages/login-v1" className="link-primary ms-1">Log in</Link></p>
                                </div>
                                <div className="form-group mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" id="floatingInput" placeholder="Email Address" />
                                </div>
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-primary">Send reset email</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

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
            </div>
        </React.Fragment>
    );
}
ForgotPassowordV1.getLayout = (page: ReactElement) => {
    return (
        <NonLayout>
            {page}
        </NonLayout>
    )
};
export default ForgotPassowordV1;
