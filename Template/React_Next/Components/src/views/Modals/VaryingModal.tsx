import React, { useState } from "react";
import { Button, Modal, Form, Col } from 'react-bootstrap';

const VaryingModal = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showFatModal, setShowFatModal] = useState(false);

    const handleFatClose = () => setShowModal(false);
    const handleFatShow = () => setShowModal(true);

    const [showBSModal, setShowBSModal] = useState(false);

    const handleBSClose = () => setShowModal(false);
    const handleBSShow = () => setShowModal(true);

    return (
        <>
            <Col xl={12}>
                <div className="card">
                    <div className="card-header">
                        <h5>Varying Modal Content</h5>
                    </div>
                    <div className="card-body pc-component btn-page">
                        <Button variant="primary" onClick={handleShow}>
                            Open modal for @mdo
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                            Open modal for @fat
                        </Button>
                        <Button variant="primary" onClick={handleBSShow}>
                            Open modal for @bootstrap
                        </Button>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New message to @mdo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="recipient-name" className="mb-2">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="text" value="@mdo" />
                                    </Form.Group>
                                    <Form.Group controlId="message-text">
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Send message
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showFatModal} onHide={handleFatClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New message to @fat</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="recipient-name" className="mb-2">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="text" value="@fat" />
                                    </Form.Group>
                                    <Form.Group controlId="message-text">
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleFatClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleFatClose}>
                                    Send message
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showBSModal} onHide={handleBSClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New message to @bootstrap</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="recipient-name" className="mb-2">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="text" value="@bootstrap" />
                                    </Form.Group>
                                    <Form.Group controlId="message-text">
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleBSClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleBSClose}>
                                    Send message
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Col>
        </>
    )
}

export { VaryingModal };