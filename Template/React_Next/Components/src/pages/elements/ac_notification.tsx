import React, { ReactElement, useRef } from "react";
import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {

    const toastId = useRef<any>(null);

    return (
        <React.Fragment>
            <Row>
                <SectionTitle
                    title="Notifications"
                    description="Beautiful notifications with CSS and Vanilla JavaScript!"
                    link="https://www.npmjs.com/package/react-toastify"
                />
            </Row>
            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Notification Alert</h5>
                        </div>
                        <Card.Body className="btn-page">
                            <button type="button" className="btn btn-primary" id="btn-default" onClick={() => toast("Hello!", { icon: false })}>Default</button>
                            <button type="button" className="btn btn-info" id="btn-info" onClick={() => toast.info("Reminder!", { icon: false })}>Info</button>
                            <button type="button" className="btn btn-success" id="btn-success" onClick={() => toast.success("Well Done!", { icon: false })} >Success</button>
                            <button type="button" className="btn btn-warning" id="btn-warning" onClick={() => toast.warning("Warning!", { icon: false })}>Warning</button>
                            <button type="button" className="btn btn-danger" id="btn-danger" onClick={() => toast.error("Sorry!", { icon: false })}>Danger</button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <h5>Notification with Icons</h5>
                        </div>
                        <Card.Body className="btn-page">
                            <button type="button" className="btn btn-primary" id="btn-default-i" onClick={() => toast("Hello!", { icon: true })}>Default</button>
                            <button type="button" className="btn btn-info" id="btn-info-i" onClick={() => toast.info("Reminder!", { icon: true })}>Info</button>
                            <button type="button" className="btn btn-success" id="btn-success-i" onClick={() => toast.success("Well Done!", { icon: true })}>Success</button>
                            <button type="button" className="btn btn-warning" id="btn-warning-i" onClick={() => toast.warning("Warning!", { icon: true })}>Warning</button>
                            <button type="button" className="btn btn-danger" id="btn-danger-i" onClick={() => toast.error("Sorry!", { icon: true })}>Danger</button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <h5>Auto Close Notifications</h5>
                        </div>
                        <Card.Body className="btn-page">
                            <button type="button" className="btn btn-primary" id="btn-default-ac" onClick={() => toast("Hello!", { theme: "colored" })}>Default</button>
                            <button type="button" className="btn btn-info" id="btn-info-ac" onClick={() => toast.info("Reminder!", { theme: "colored" })}>Info</button>
                            <button type="button" className="btn btn-success" id="btn-success-ac" onClick={() => toast.success("Well Done!", { theme: "colored" })}>Success</button>
                            <button type="button" className="btn btn-warning" id="btn-warning-ac" onClick={() => toast.warning("Warning!", { theme: "colored" })}>Warning</button>
                            <button type="button" className="btn btn-danger" id="btn-danger-ac" onClick={() => toast.error("Sorry!", { theme: "colored" })}>Danger</button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <h5>Using the notification.hide() method</h5>
                        </div>
                        <Card.Body className="btn-page">
                            <button type="button" className="btn btn-primary" id="btn-nt-show" onClick={() => toastId.current = toast.info("Default", { theme: "colored" })}>Show Notification</button>
                            <button type="button" className="btn btn-danger" id="btn-nt-hide" onClick={() => toast.dismiss(toastId.current)}>Hide Notification</button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <ToastContainer />
        </React.Fragment>
    );
}


Notification.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};


export default Notification;