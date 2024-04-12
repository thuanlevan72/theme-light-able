import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

// img
import accoutAlert from "@assets/images/application/img-accout-alert.png"
import Image from "next/image";

const EmailVerification = () => {
    return (
        <React.Fragment>
            <Card className="bg-primary">
                <Card.Body>
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 me-3">
                            <h3 className="text-white">Email Verification</h3>
                            <p className="text-white text-opacity-75 text-opa mb-0">Your email is not confirmed. Please check your
                                inbox.
                                <Link href="#" className="link-light"><u>Resend confirmation</u></Link>
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Image src={accoutAlert} alt="img" className="img-fluid wid-80" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default EmailVerification;