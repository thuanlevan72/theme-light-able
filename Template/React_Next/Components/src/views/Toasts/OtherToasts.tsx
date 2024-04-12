import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";

//import images
import favicon from "@assets/images/favicon.svg";
import Image from "next/image";

const OtherToasts = () => {
    const [showBasicToast, setShowBasicToast] = useState(true);
    const [showStackingToast1, setShowStackingToast1] = useState(true);
    const [showStackingToast2, setShowStackingToast2] = useState(true);
    const [showCustomToast1, setShowCustomToast1] = useState(true);
    const [showCustomToast2, setShowCustomToast2] = useState(true);
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5>Basic</h5>
                    </div>
                    <div className="card-body pc-component">
                        <div className="bg-body p-4 mb-2">
                            <Toast show={showBasicToast} onClose={() => setShowBasicToast(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                <Toast.Header>
                                    <Image src={favicon} className="img-fluid m-r-5" alt="images" style={{ width: "17px" }} />
                                    <strong className="me-auto">Light Able</strong>
                                    <small>11 mins ago</small>
                                   
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>Stacking</h5>
                    </div>
                    <div className="card-body pc-component">
                        <div className="bg-body toast-container p-4 mb-2">
                            <Toast show={showStackingToast1} onClose={() => setShowStackingToast1(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                <Toast.Header>
                                    <Image src={favicon} className="img-fluid m-r-5" alt="images" style={{ width: "17px" }} />
                                    <strong className="me-auto">Light Able</strong>
                                    <small>9 mins ago</small>
                                   
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                            <Toast show={showStackingToast2} onClose={() => setShowStackingToast2(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                <Toast.Header>
                                    <Image src={favicon} className="img-fluid m-r-5" alt="images" style={{ width: "17px" }} />
                                    <strong className="me-auto">Light Able</strong>
                                    <small>11 mins ago</small>
                                   
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>Custom content</h5>
                    </div>
                    <div className="card-body pc-component">
                        <div className="bg-body toast-container p-4 mb-2">
                            <Toast show={showCustomToast1} onClose={() => setShowCustomToast1(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="d-flex">
                                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                </div>
                            </Toast>
                            <Toast show={showCustomToast2} onClose={() => setShowCustomToast2(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                    <div className="mt-2 pt-2 border-top">
                                        <Button variant="light-primary" size="sm" className="mb-1 me-1">Take action</Button>
                                        <Button variant="light-danger" size="sm" className="mb-1 me-1" onClick={() => setShowCustomToast2(false)}>Close</Button>
                                    </div>
                                </Toast.Body>
                            </Toast>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherToasts;
