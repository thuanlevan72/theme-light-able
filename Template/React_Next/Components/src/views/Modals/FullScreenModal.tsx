import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";

const FullScreenModal = () => {
    const [showFullscreenModal, setShowFullscreenModal] = useState<boolean>(false);
    const [showFullscreenSmModal, setShowFullscreenSmModal] = useState<boolean>(false);
    const [showFullscreenMdModal, setShowFullscreenMdModal] = useState<boolean>(false);
    const [showFullscreenLgModal, setShowFullscreenLgModal] = useState<boolean>(false);
    const [showFullscreenXlModal, setShowFullscreenXlModal] = useState<boolean>(false);

    const handleCloseFullscreenModal = () => setShowFullscreenModal(false);
    const handleShowFullscreenModal = () => setShowFullscreenModal(true);

    const handleCloseFullscreenSmModal = () => setShowFullscreenSmModal(false);
    const handleShowFullscreenSmModal = () => setShowFullscreenSmModal(true);

    const handleCloseFullscreenMdModal = () => setShowFullscreenMdModal(false);
    const handleShowFullscreenMdModal = () => setShowFullscreenMdModal(true);

    const handleCloseFullscreenLgModal = () => setShowFullscreenLgModal(false);
    const handleShowFullscreenLgModal = () => setShowFullscreenLgModal(true);

    const handleCloseFullscreenXlModal = () => setShowFullscreenXlModal(false);
    const handleShowFullscreenXlModal = () => setShowFullscreenXlModal(true);
    
    return (
        <>
            <Col xl={12}>
                <Card>
                    <Card.Header>
                        <h5>Full screen modal</h5>
                    </Card.Header>
                    <Card.Body className="pc-component">
                        <div className="btn-page">
                            <Button
                                variant="primary"
                                onClick={handleShowFullscreenModal}
                            >
                                Full screen
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleShowFullscreenSmModal}
                            >
                                Full screen below sm
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleShowFullscreenMdModal}
                            >
                                Full screen below md
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleShowFullscreenLgModal}
                            >
                                Full screen below lg
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleShowFullscreenXlModal}
                            >
                                Full screen below xl
                            </Button>
                        </div>

                        <Modal
                            show={showFullscreenModal}
                            onHide={handleCloseFullscreenModal}
                            fullscreen
                        >
                            <Modal.Header>
                                <h5 className="modal-title h4">Full screen modal</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseFullscreenModal}
                                    aria-label="Close"
                                ></button>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseFullscreenModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={showFullscreenSmModal}
                            onHide={handleCloseFullscreenSmModal}
                            fullscreen="sm-down"
                        >
                            <Modal.Header>
                                <h5 className="modal-title h4">Full screen below sm</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseFullscreenSmModal}
                                    aria-label="Close"
                                ></button>
                            </Modal.Header>
                            <Modal.Body> ... </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseFullscreenSmModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={showFullscreenMdModal}
                            onHide={handleCloseFullscreenMdModal}
                            fullscreen="md-down"
                        >
                            <Modal.Header>
                                <h5 className="modal-title h4">Full screen below md</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseFullscreenMdModal}
                                    aria-label="Close"
                                ></button>
                            </Modal.Header>
                            <Modal.Body> ... </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseFullscreenMdModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={showFullscreenLgModal}
                            onHide={handleCloseFullscreenLgModal}
                            fullscreen="lg-down"
                        >
                            <Modal.Header>
                                <h5 className="modal-title h4">Full screen below lg</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseFullscreenLgModal}
                                    aria-label="Close"
                                ></button>
                            </Modal.Header>
                            <Modal.Body> ... </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseFullscreenLgModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={showFullscreenXlModal}
                            onHide={handleCloseFullscreenXlModal}
                            fullscreen="xl-down"
                        >
                            <Modal.Header>
                                <h5 className="modal-title h4">Full screen below xl</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseFullscreenXlModal}
                                    aria-label="Close"
                                ></button>
                            </Modal.Header>
                            <Modal.Body> ... </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseFullscreenXlModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export { FullScreenModal };