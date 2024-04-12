import React, { useState } from "react";
import { Button, Card, Col, Nav, Popover, Row, OverlayTrigger, Tab, Toast, Form, ToastContainer } from "react-bootstrap";

//import images
import favicon from "@assets/images/favicon.svg";
import Image from "next/image";

const PlacementToast = () => {
    const [selectedPlacement, setSelectedPlacement] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handlePlacementChange = (e: any) => {
        setSelectedPlacement(e.target.value);
    };

    const handleShowToast = () => {
        setShowToast(true);
    };

    const [position, setPosition] = useState('top-start');

    return (
        <>
            <div className="col-sm-12">
                <Card>
                    <Card.Header>
                        <h5>Placement</h5>
                    </Card.Header>
                    <Card.Body className="border-bottom">
                        <Form>
                            <Form.Select
                                id="selectToastPlacement"
                                className="mt-2"
                                onChange={(e) => setPosition(e.currentTarget.value)}
                            >
                                {[
                                    'top-start',
                                    'top-center',
                                    'top-end',
                                    'middle-start',
                                    'middle-center',
                                    'middle-end',
                                    'bottom-start',
                                    'bottom-center',
                                    'bottom-end',
                                ].map((p) => (
                                    <option key={p} value={p}>
                                        {p}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form>
                    </Card.Body>
                    <Card.Body className="pc-component">
                        <div
                            aria-live="polite"
                            aria-atomic="true"
                            className="bg-dark position-relative bd-example-toasts"
                            style={{ height: '200px' }}
                        >
                            <ToastContainer
                                className="p-3"
                                // position={position}
                                style={{ zIndex: 1 }}
                            >
                                <Toast>
                                    <Toast.Header closeButton={false}>
                                        <Image
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""
                                        />
                                        <strong className="me-auto">Bootstrap</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </Card.Body>
                </Card>
                <Button variant="primary" onClick={handleShowToast} className="mt-3">
                    Show Toast
                </Button>
            </div>
        </>
    )
}

export default PlacementToast;
