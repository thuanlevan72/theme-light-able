import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { Col, Card, Button, Row, Offcanvas, Table, Dropdown } from "react-bootstrap";
import OffcanvasBody from "src/views/Offcanvas/OffcanvasBody";
import FeatherIcon from 'feather-icons-react';

const BCOffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [topShow, setTopShow] = React.useState(false);
    const [rightShow, setRightShow] = React.useState(false);
    const [bottomShow, setBottomShow] = React.useState(false);

    const [backDropShow, setBackDropShow] = React.useState(false);
    const [backDropDefaultShow, setBackDropDefaultShow] = React.useState(false);
    const [backDropScrollShow, setBackDropScrollShow] = React.useState(false);

    return (
        <>
            <SectionTitle
                title="Offcanvas"
                description="Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin."
                link="https://react-bootstrap.netlify.app/docs/components/offcanvas"
            />

            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Live demo</h5>
                        </div>
                        <Card.Body>
                            <div className="bd-example-modal">
                                <div className="offcanvas offcanvas-start" aria-labelledby="offcanvasLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        Content for the offcanvas goes here. You can place just about any Bootstrap component or custom
                                        elements here.
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="btn-page pc-component">
                            <Link href="#" className="btn btn-primary" onClick={handleShow}>
                                Link with href
                            </Link>

                            <Button variant="primary" onClick={handleShow}>
                                Button with onClick
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement="start">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>

                                <OffcanvasBody />
                            </Offcanvas>
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Placement</h5>
                        </div>
                        <Card.Body className="btn-page pc-component">

                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setTopShow(!topShow)}
                            >
                                Top offcanvas
                                <FeatherIcon icon="chevrons-up" />
                            </Button>
                            <Offcanvas show={topShow} onHide={() => setTopShow(!topShow)} placement="top">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas top</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button className="btn btn-light-danger btn-sm" onClick={() => setTopShow(!topShow)}>Close</Button>
                                </Offcanvas.Body>
                            </Offcanvas>


                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setRightShow(!rightShow)}
                            >
                                Right offcanvas
                                <FeatherIcon icon="chevrons-right" />
                            </Button>
                            <Offcanvas show={rightShow} onHide={() => setRightShow(!rightShow)} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button className="btn btn-light-danger btn-sm" onClick={() => setRightShow(!rightShow)}>Close</Button>
                                </Offcanvas.Body>
                            </Offcanvas>

                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setBottomShow(!bottomShow)}
                            >
                                Bottom offcanvas

                                <FeatherIcon icon="chevrons-down" />
                            </Button>
                            <Offcanvas show={bottomShow} onHide={() => setBottomShow(!bottomShow)} placement="bottom">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button className="btn btn-light-danger btn-sm" onClick={() => setBottomShow(!bottomShow)}>Close</Button>
                                </Offcanvas.Body>
                            </Offcanvas>

                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Backdrop</h5>
                        </div>
                        <div className="card-body btn-page pc-component">

                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setBackDropShow(!backDropShow)}
                            >
                                Enable body scrolling
                            </Button>
                            <Offcanvas
                                show={backDropShow}
                                onHide={() => setBackDropShow(!backDropShow)}
                                backdrop={false}
                                data-bs-scroll="true"
                                data-bs-backdrop="false"
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="alert alert-success mb-4" role="alert">
                                        <p className="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                    <h4 className="mb-4">Main Title</h4>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button
                                        className="btn btn-light-danger btn-sm"
                                        onClick={() => setBackDropShow(!backDropShow)}
                                    >
                                        Close
                                    </Button>
                                </Offcanvas.Body>
                            </Offcanvas>


                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setBackDropDefaultShow(!backDropDefaultShow)}
                            >
                                Enable backdrop (default)
                            </Button>
                            <Offcanvas
                                show={backDropDefaultShow}
                                onHide={() => setBackDropDefaultShow(!backDropDefaultShow)}
                                data-bs-scroll="true"
                                data-bs-backdrop="false"
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="alert alert-success mb-4" role="alert">
                                        <p className="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                    <h4 className="mb-4">Main Title</h4>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button
                                        className="btn btn-light-danger btn-sm"
                                        onClick={() => setBackDropDefaultShow(!backDropDefaultShow)}
                                    >
                                        Close
                                    </Button>
                                </Offcanvas.Body>
                            </Offcanvas>


                            <Button
                                className="btn btn-light-secondary"
                                type="button"
                                onClick={() => setBackDropScrollShow(!backDropScrollShow)}
                            >
                                Enable both scrolling & backdrop
                            </Button>
                            <Offcanvas
                                show={backDropScrollShow}
                                onHide={() => setBackDropScrollShow(!backDropScrollShow)}
                                scroll={true}
                                data-bs-scroll="true"
                                data-bs-backdrop="false"
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="alert alert-success mb-4" role="alert">
                                        <p className="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                    <h4 className="mb-4">Main Title</h4>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <h6>Some Title</h6>
                                    <p className="mb-4">
                                        Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
                                    </p>
                                    <Dropdown className="mb-3 d-inline-block ms-1">
                                        <Dropdown.Toggle as="button" className="btn btn-light-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton">
                                            Dropdown button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button
                                        className="btn btn-light-danger btn-sm"
                                        onClick={() => setBackDropScrollShow(!backDropScrollShow)}
                                    >
                                        Close
                                    </Button>
                                </Offcanvas.Body>
                            </Offcanvas>

                        </div>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

BCOffCanvas.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCOffCanvas;
