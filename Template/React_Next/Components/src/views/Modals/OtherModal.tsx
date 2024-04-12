import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

const OtherModal = () => {

    const [gridShow, setGridShow] = useState(false);

    const toggleGridModal = () => {
        setGridShow(!gridShow);
    }

    const [optionalLargeShow, seOptionalLargeShow] = useState(false);

    const toggleOptionalLargeModal = () => {
        seOptionalLargeShow(!optionalLargeShow);
    }

    const [optionalSmallShow, seOptionalSmallShow] = useState(false);

    const toggleOptionalSmallModal = () => {
        seOptionalSmallShow(!optionalSmallShow);
    }

    const [modal_togFirst, setmodal_togFirst] = useState(false);

    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);

    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }
    return (
        <>
            <Col xl={4} md={6}>
                <Card>
                    <Card.Header>
                        <h5>Using the Grid</h5>
                    </Card.Header>
                    <Card.Body className="pc-component">
                        <Button variant="primary" onClick={toggleGridModal}>
                            Launch demo modal
                        </Button>

                        <Modal show={gridShow} onHide={toggleGridModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Grids in Modals</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid className="bd-example-row">
                                    <div className="row">
                                        <div className="col-md-4">.col-md-4</div>
                                        <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                                    </div>
                                    <Row>
                                        <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                                        <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                                    </Row>
                                    <Row>
                                        <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                                    </Row>
                                    <Row>
                                        <Col sm={9}>
                                            Level 1: .col-sm-9
                                            <Row>
                                                <Col xs={8} sm={6}> Level 2: .col-8 .col-sm-6 </Col>
                                                <Col xs={4} sm={6}> Level 2: .col-4 .col-sm-6 </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={toggleGridModal}>
                                    Close
                                </Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={4} md={6}>
                <Card>
                    <Card.Header>
                        <h5>Optional Sizes</h5>
                    </Card.Header>
                    <Card.Body className="pc-component">
                        <Button
                            variant="primary"
                            className="mb-2"
                            onClick={toggleOptionalLargeModal}
                        >
                            Large modal
                        </Button>
                        <Button
                            variant="primary"
                            className="ms-1 mb-2"
                            onClick={toggleOptionalSmallModal}
                        >
                            Small modal
                        </Button>

                        <Modal
                            show={optionalLargeShow}
                            onHide={toggleOptionalLargeModal}
                            size="lg"
                            aria-labelledby="myLargeModalLabel"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="myLargeModalLabel">Large Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>

                        <Modal
                            show={optionalSmallShow}
                            onHide={toggleOptionalSmallModal}
                            size="sm"
                            aria-labelledby="mySmallModalLabel"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="mySmallModalLabel">Small Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </Col>

            <div className="col-xl-4 col-md-6">
                <Card>
                    <Card.Header>
                        <h5>Toggle between modals</h5>
                    </Card.Header>
                    <Card.Body className="pc-component">
                        <Button
                            variant="primary"
                            onClick={tog_togFirst}
                        >
                            Open first modal
                        </Button>

                        <Modal
                            show={modal_togFirst}
                            onHide={tog_togFirst}
                            centered
                        >
                            <Modal.Header>
                                <h5 className="modal-title">
                                    <span className="badge bg-danger">1</span> First Modal
                                </h5>
                                <button type="button" className="btn-close" onClick={tog_togFirst} aria-label="Close"></button>
                            </Modal.Header>
                            <Modal.Body>
                                Show a second modal and hide this one with the button below.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="light-primary"
                                    onClick={ () => {tog_togSecond(), tog_togFirst()}}
                                    data-bs-dismiss="modal"
                                >
                                    Open second modal
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={modal_togSecond}
                            onHide={tog_togSecond}
                            centered
                        >
                            <Modal.Header>
                                <h5 className="modal-title">
                                    <span className="badge bg-success">2</span> Second Modal
                                </h5>
                                <button type="button" className="btn-close" onClick={tog_togSecond} aria-label="Close"></button>
                            </Modal.Header>
                            <Modal.Body>
                                Hide this modal and show the first with the button below.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="light-secondary"
                                    onClick={() => { tog_togFirst(); tog_togSecond(); }}
                                    data-bs-dismiss="modal"
                                >
                                    Back to first
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export { OtherModal };