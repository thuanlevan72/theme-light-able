import React, { ReactElement, useState } from "react";
import Layout from "@layout/index";
import SectionTitle from "@layout/SectionTitle";

import { Col, Card, Button, Alert } from "react-bootstrap";
import Link from "next/link";

const BCAlert = () => {
    const [alerts, setAlerts] = useState([
        {
            variant: "secondary",
            message: "You should check in on some of those fields below.",
        },
        {
            variant: "success",
            message: "You should check in on some of those fields below.",
        },
        {
            variant: "danger",
            message: "You should check in on some of those fields below.",
        },
        {
            variant: "warning",
            message: "You should check in on some of those fields below.",
        },
        {
            variant: "info",
            message: "You should check in on some of those fields below.",
        },
        {
            variant: "dark",
            message: "You should check in on some of those fields below.",
        },
    ]);

    const [showUncontrolledAlert, setShowUncontrolledAlert] = useState(false);

    const handleDismiss = (index: number) => {
        const updatedAlerts = [...alerts];
        updatedAlerts.splice(index, 1);
        setAlerts(updatedAlerts);
    };

    return (
        <>
            <SectionTitle
                title="Alerts"
                description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
                link="https://react-bootstrap.netlify.app/docs/components/alerts/"
            />

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Basic Alerts</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <Alert variant="primary">A simple primary alert—check it out!</Alert>
                            <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
                            <Alert variant="success">A simple success alert—check it out!</Alert>
                            <Alert variant="danger">A simple danger alert—check it out!</Alert>
                            <Alert variant="warning">A simple warning alert—check it out!</Alert>
                            <Alert variant="info">A simple info alert—check it out!</Alert>
                            <Alert variant="dark">A simple dark alert—check it out!</Alert>
                        </Card.Body>
                    </div>
                </div>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Link Alerts</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Alert variant="primary">
                                A simple primary alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="secondary">
                                A simple secondary alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="success">
                                A simple success alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="danger">
                                A simple danger alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="warning">
                                A simple warning alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="info">
                                A simple info alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                            <Alert variant="dark">
                                A simple dark alert with{" "}
                                <Link href="#" className="alert-link">
                                    an example link
                                </Link>
                                . Give it a click if you like.
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Dismissing</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div id="liveAlertPlaceholder">
                                <Alert
                                    show={showUncontrolledAlert}
                                    variant="success"
                                    onClose={() => setShowUncontrolledAlert(false)}
                                    dismissible
                                >
                                    Nice, you triggered this alert message!
                                </Alert>
                                <Button
                                    type="button"
                                    className="btn btn-primary mb-3"
                                    id="liveAlertBtn"
                                    onClick={() => setShowUncontrolledAlert(true)}
                                >
                                    Show live alert
                                </Button>
                                {alerts.map((alert, index) => (
                                    <div
                                        key={index}
                                        className={`alert alert-${alert.variant} alert-dismissible fade show`}
                                        role="alert"
                                    >
                                        <strong>Holy guacamole!</strong> {alert.message}
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => handleDismiss(index)}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                ))}
                            </div>


                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Additional Content</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <Alert variant="success">
                                <h4 className="alert-heading">Well done!</h4>
                                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a
                                    bit longer so that you can
                                    see how spacing within an alert works with this kind of content.</p>
                                <hr />
                                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                </p>
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Icons</h5>
                        </div>
                        <Card.Body className="card-body pc-component">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" ></path>
                                </symbol>
                                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" ></path>
                                </symbol>
                                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" ></path>
                                </symbol>
                            </svg>

                            <Alert variant="primary" className="d-flex align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlinkHref="#info-fill"></use>
                                </svg>
                                <div>An example alert with an icon</div>
                            </Alert>
                            <Alert variant="success" className="d-flex align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlinkHref="#check-circle-fill"></use>
                                </svg>
                                <div>An example success alert with an icon</div>
                            </Alert>
                            <Alert variant="warning" className="d-flex align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlinkHref="#exclamation-triangle-fill"></use>
                                </svg>
                                <div>An example warning alert with an icon</div>
                            </Alert>
                            <Alert variant="danger" className="d-flex align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlinkHref="#exclamation-triangle-fill"></use>
                                </svg>
                                <div>An example danger alert with an icon</div>
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    )
};

BCAlert.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


export default BCAlert;