import SectionTitle from '@layout/SectionTitle';
import Layout from '@layout/index';
import React, { ReactElement, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Modal, Row } from 'react-bootstrap';

const ACModal = () => {

    const [modal_animationZoom, setmodal_animationZoom] = useState<boolean>(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }

    const [modal_positionTopRight, setmodal_positionTopRight] = useState<boolean>(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }

    const [modal_positionBottom, setmodal_positionBottom] = useState<boolean>(false);
    function tog_positionBottom() {
        setmodal_positionBottom(!modal_positionBottom);
    }

    const [modal_animationFall, setmodal_animationFall] = useState<boolean>(false);
    function tog_animationFall() {
        setmodal_animationFall(!modal_animationFall);
    }

    const [modal_animationSideFall, setmodal_animationSideFall] = useState<boolean>(false);
    function tog_animationSideFall() {
        setmodal_animationSideFall(!modal_animationSideFall);
    }

    const [modal_animation3dFlipH, setmodal_animation3dFlipH] = useState<boolean>(false);
    function tog_animation3dFlipH() {
        setmodal_animation3dFlipH(!modal_animation3dFlipH);
    }

    const [modal_animation3dFlipV, setmodal_animation3dFlipV] = useState<boolean>(false);
    function tog_animation3dFlipV() {
        setmodal_animation3dFlipV(!modal_animation3dFlipV);
    }

    const [modal_animation3dRotateB, setmodal_animation3dRotateB] = useState<boolean>(false);
    function tog_animation3dRotateB() {
        setmodal_animation3dRotateB(!modal_animation3dRotateB);
    }

    const [modal_animation3dRotateL, setmodal_animation3dRotateL] = useState<boolean>(false);
    function tog_animation3dRotateL() {
        setmodal_animation3dRotateL(!modal_animation3dRotateL);
    }

    const [modal_blur, setmodal_blur] = useState<boolean>(false);
    function tog_blur() {
        setmodal_blur(!modal_blur);
    }

    const [modal_letMeIn, setmodal_letMeIn] = useState<boolean>(false);
    function tog_letMeIn() {
        setmodal_letMeIn(!modal_letMeIn);
    }

    const [modal_MakeWay, setmodal_MakeWay] = useState<boolean>(false);
    function tog_MakeWay() {
        setmodal_MakeWay(!modal_MakeWay);
    }

    const [modal_slipTop, setmodal_slipTop] = useState<boolean>(false);
    function tog_slipTop() {
        setmodal_slipTop(!modal_slipTop);
    }

    const [modal_newspaper, setmodal_newspaper] = useState<boolean>(false);
    function tog_newspaper() {
        setmodal_newspaper(!modal_newspaper);
    }

    const [modal_StickyUp, setmodal_StickyUp] = useState<boolean>(false);
    function tog_StickyUp() {
        setmodal_StickyUp(!modal_StickyUp);
    }

    const [modal_3dSign, setmodal_3dSign] = useState<boolean>(false);
    function tog_3dSign() {
        setmodal_3dSign(!modal_3dSign);
    }

    const [modal_SuperScaled, setmodal_SuperScaled] = useState<boolean>(false);
    function tog_SuperScaled() {
        setmodal_SuperScaled(!modal_SuperScaled);
    }

    const [modal_justMe, setmodal_justMe] = useState<boolean>(false);
    function tog_justMe() {
        setmodal_justMe(!modal_justMe);
    }

    const [modal_3dSlit, setmodal_3dSlit] = useState<boolean>(false);
    function tog_3dSlit() {
        setmodal_3dSlit(!modal_3dSlit);
    }

    return (
        <>
            <Row>
                <SectionTitle
                    title="Lightbox"
                    description="Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style."
                    link="https://react-bootstrap.netlify.app/docs/components/modal"
                />
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Fade</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button onClick={() => tog_animationZoom()} variant="primary">
                                Fade in &amp; Scale
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Slide</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" variant="primary" onClick={() => tog_positionTopRight()}>
                                Slide in (right)
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_positionBottom()}>
                                Slide in (bottom)
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Fall</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" variant="primary" onClick={() => tog_animationFall()}>
                                Fall
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_animationSideFall()}>
                                Side Fall
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Flip</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" variant="primary" onClick={() => tog_animation3dFlipH()}>
                                3D Flip (horizontal)
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_animation3dFlipV()}>
                                3D Flip (vertical)
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Rotate</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" variant="primary" onClick={() => tog_animation3dRotateB()}>
                                3D Rotate Bottom
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_animation3dRotateL()}>
                                3D Rotate InLeft
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardHeader>
                            <h5>Advance</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" variant="primary" onClick={() => tog_blur()}>
                                Blur
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_letMeIn()}>
                                Let me in
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_MakeWay()}>
                                Make way!
                            </Button>
                            <Button type="button" variant="primary" onClick={() => tog_slipTop}>
                                Slip from top
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card>
                        <CardHeader>
                            <h5>Other</h5>
                        </CardHeader>
                        <CardBody className="btn-page">
                            <Button type="button" className="btn btn-primary" onClick={() => tog_newspaper()}>
                                Newspaper
                            </Button>
                            <Button type="button" className="btn btn-primary" onClick={() => tog_StickyUp()}>
                                Sticky Up
                            </Button>
                            <Button type="button" className="btn btn-primary" onClick={() => tog_3dSign()}>
                                3D Sign
                            </Button>
                            <Button type="button" className="btn btn-primary" onClick={() => tog_SuperScaled()}>
                                Super Scaled
                            </Button>
                            <Button type="button" className="btn btn-primary" onClick={() => tog_justMe()}>
                                Just Me
                            </Button>
                            <Button type="button" className="btn btn-primary" onClick={() => tog_3dSlit()}>
                                3D Slit
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modal className="fade modal-animate anim-fade-in-scale" id="animateModal" show={modal_animationZoom} onHide={() => { tog_animationZoom(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animationZoom(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-slide-in-right" id="animateModal" show={modal_positionTopRight} onHide={() => { tog_positionTopRight(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_positionTopRight(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-slide-in-bottom" id="animateModal" show={modal_positionBottom} onHide={() => { tog_positionBottom(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_positionBottom(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-side-fall" id="animateModal" show={modal_animationSideFall} onHide={() => { tog_animationSideFall(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animationSideFall(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-flip-horizontal" id="animateModal" show={modal_animation3dFlipH} onHide={() => { tog_animation3dFlipH(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animation3dFlipH(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-flip-vertical" id="animateModal" show={modal_animation3dFlipV} onHide={() => { tog_animation3dFlipV(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animation3dFlipV(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-rotate-bottom" id="animateModal" show={modal_animation3dRotateB} onHide={() => { tog_animation3dRotateB(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animation3dRotateB(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-rotate-InLeft" id="animateModal" show={modal_animation3dRotateL} onHide={() => { tog_animation3dRotateL(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_animation3dRotateL(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-blur" id="animateModal" show={modal_blur} onHide={() => { tog_blur(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_blur(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-let-me-in" id="animateModal" show={modal_letMeIn} onHide={() => { tog_letMeIn(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_letMeIn(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-make-way" id="animateModal" show={modal_MakeWay} onHide={() => { tog_MakeWay(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_MakeWay(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-slip-from-top" id="animateModal" show={modal_slipTop} onHide={() => { tog_slipTop(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_slipTop(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-newspaper" id="animateModal" show={modal_newspaper} onHide={() => { tog_newspaper(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_newspaper(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-sticky-up" id="animateModal" show={modal_StickyUp} onHide={() => { tog_StickyUp(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_StickyUp(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-sign" id="animateModal" show={modal_3dSign} onHide={() => { tog_3dSign(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_3dSign(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-super-scaled" id="animateModal" show={modal_SuperScaled} onHide={() => { tog_SuperScaled(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_SuperScaled(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-just-me" id="animateModal" show={modal_justMe} onHide={() => { tog_justMe(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_justMe(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>

            <Modal className="fade modal-animate anim-3d-slit" id="animateModal" show={modal_3dSlit} onHide={() => { tog_3dSlit(); }} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title">Modal title</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5>This is a modal window</h5>
                    <p>You can do the following things with it:</p>
                    <p> <b>Read:</b> modal windows will probably tell you something important so dont forget to read what
                        they say.</p>
                    <p><b>Look:</b> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                        presence.</p>
                    <p className="mb-0"><b>Close:</b> click on the button below to close the modal.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button type="button" onClick={() => { tog_3dSlit(); }} variant="outline-secondary">Close</Button>
                    <Button type="button" className="btn btn-primary shadow-2">Save changes</Button>
                </div>
            </Modal>
        </>
    );
};

ACModal.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default ACModal;