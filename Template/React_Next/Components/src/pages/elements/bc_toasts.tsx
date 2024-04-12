import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Button, Card, Col, Nav, Popover, Row, OverlayTrigger, Tab, Toast } from "react-bootstrap";

//import images
import favicon from "@assets/images/favicon.svg";
import Image from "next/image";
import ColorschemesToasts from "src/views/Toasts/ColorschemesToasts";
import OtherToasts from "src/views/Toasts/OtherToasts";
import PlacementToast from "src/views/Toasts/PlacementToast";

const BCToasts = () => {
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showTranslucentToast, setShowTranslucentToast] = useState(true);
    return (
        <>
            <SectionTitle
                title="Toasts"
                description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
                link="https://react-bootstrap.netlify.app/docs/components/toasts/"
            />
            <Row>
                <Col lg={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Live Toast</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 99999 }}>
                                <Toast
                                    onClose={() => setShowToast(false)}
                                    show={showToast}
                                    delay={5000}
                                    autohide
                                    className="hide"
                                    role="alert"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                >
                                    <Toast.Header>
                                        <Image
                                            src={favicon}
                                            className="img-fluid m-r-5"
                                            alt="images"
                                            style={{ width: '17px' }}
                                        />
                                        <strong className="me-auto">Light Able</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                </Toast>
                            </div>
                            <Button
                                type="button"
                                className="btn btn-primary"
                                id="liveToastBtn"
                                onClick={() => setShowToast(true)}
                            >
                                Show Live Toast
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <div className="card-header">
                            <h5>Translucent</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <div className="bg-dark p-4 mb-2">
                                <Toast show={showTranslucentToast} onClose={() => setShowTranslucentToast(false)} role="alert" aria-live="assertive" aria-atomic="true">
                                    <Toast.Header>
                                        <Image src={favicon} className="img-fluid m-r-5" alt="images" style={{ width: "17px" }} />
                                        <strong className="me-auto">Light Able</strong>
                                        <small>11 mins ago</small>

                                    </Toast.Header>
                                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                </Toast>
                            </div>
                        </Card.Body>
                    </Card>

                    <ColorschemesToasts />
                </Col>

                <OtherToasts />

                <PlacementToast />
            </Row>

        </>
    )
}

BCToasts.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCToasts;
