import React, { useState } from "react";
import { Col, Card, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ModalBody } from "src/views/Modals/ModalBody";

const BasicModal = () => {

    const [demoShow, setDemoShow] = useState(false);

    const toggleDemoModal = () => {
        setDemoShow(!demoShow);
    }

    const [scrollShow, setScrollShow] = useState(false);

    const toggleScrollModal = () => {
        setScrollShow(!scrollShow);
    }

    const [centerdShow, setCenterdShow] = useState(false);

    const toggleCenterdModal = () => {
        setCenterdShow(!centerdShow);
    }

    const [toolTipShow, setTooltipShow] = useState(false);

    const toggleTooltipModal = () => {
        setTooltipShow(!toolTipShow);
    }


    return (
        <>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Demo Modal</h5>
                        </div>
                        <Card.Body className="pb-0">
                            <div className="bd-example-modal">
                                <div className="modal" role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Modal Title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Modal body text goes here.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary me-0">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="pc-component">
                            <Button variant="primary" onClick={toggleDemoModal}>
                                Launch demo modal
                            </Button>

                            <Modal show={demoShow} onHide={toggleDemoModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Woohoo, you&apos;re reading this text in a modal!</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={toggleDemoModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Scrolling Long Content</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Button variant="primary" onClick={toggleScrollModal}>
                                Launch demo modal
                            </Button>

                            <Modal show={scrollShow} onHide={toggleScrollModal} scrollable>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                {/* Modal Body */}
                                <ModalBody />

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={toggleScrollModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Vertically Centered</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Button variant="primary" onClick={toggleCenterdModal}>
                                Launch demo modal
                            </Button>

                            <Modal show={centerdShow} onHide={toggleCenterdModal} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={toggleCenterdModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Tooltips Modal</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Button variant="primary" onClick={toggleTooltipModal}>
                                Launch demo modal
                            </Button>

                            <Modal show={toolTipShow} onHide={toggleTooltipModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Tooltips in a Button</h5>
                                    <p>
                                        This{' '}
                                        <OverlayTrigger
                                            overlay={<Tooltip id="button-tooltip">Button Tooltip</Tooltip>}
                                        >
                                            <a
                                                href="#!"
                                                role="button"
                                                className="btn btn-secondary tooltip-test"
                                            >
                                                button
                                            </a>
                                        </OverlayTrigger>{' '}
                                        triggers a popover on click.
                                    </p>
                                    <hr />
                                    <h5>Tooltips in a modal</h5>
                                    <p>
                                        <OverlayTrigger
                                            overlay={<Tooltip id="link-tooltip">Tooltip</Tooltip>}
                                        >
                                            <a href="#!" className="tooltip-test">
                                                This link
                                            </a>
                                        </OverlayTrigger>{' '}
                                        and{' '}
                                        <OverlayTrigger
                                            overlay={<Tooltip id="another-link-tooltip">Tooltip</Tooltip>}
                                        >
                                            <a href="#!" className="tooltip-test">
                                                that link
                                            </a>
                                        </OverlayTrigger>{' '}
                                        have tooltips on hover.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={toggleTooltipModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}

export { BasicModal };
