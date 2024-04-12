import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Button, Dropdown } from "react-bootstrap";

const BCDropdowns = () => {
    return (
        <>
            <SectionTitle
                title="Dropdowns"
                description="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin."
                link="https://react-bootstrap.netlify.app/docs/components/dropdowns"
            />

            <div className="row btn-page">

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Basic Dropdown Button</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-primary">
                                    Primary
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-secondary">
                                    Secondary
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-success">
                                    Success
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-danger">
                                    Danger
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-warning">
                                    Warning
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-info">
                                    Info
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Split Dropdown Button</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="primary" id="dropdown-primary">
                                    Primary
                                </Button>
                                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic-primary" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="secondary" id="dropdown-secondary">
                                    Secondary
                                </Button>
                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-secondary" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="success" id="dropdown-success">
                                    Success
                                </Button>
                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic-success" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="danger" id="dropdown-danger">
                                    Danger
                                </Button>
                                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic-danger" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="warning" id="dropdown-warning">
                                    Warning
                                </Button>
                                <Dropdown.Toggle split variant="warning" id="dropdown-split-basic-warning" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="info" id="dropdown-info">
                                    Info
                                </Button>
                                <Dropdown.Toggle split variant="info" id="dropdown-split-basic-info" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Basic Outline Dropdown Button</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-primary">
                                        Primary
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-secondary">
                                        Secondary
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-success">
                                        Success
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-danger">
                                        Danger
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-warning">
                                        Warning
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="btn-group-dropdown">
                                    <Dropdown.Toggle as="button" className="btn btn-outline-info">
                                        Info
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Split Outline Dropdown Button</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-primary">
                                    Primary
                                </Button>
                                <Dropdown.Toggle split variant="outline-primary" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-secondary">
                                    Secondary
                                </Button>
                                <Dropdown.Toggle split variant="outline-secondary" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-success">
                                    Success
                                </Button>
                                <Dropdown.Toggle split variant="outline-success" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-danger">
                                    Danger
                                </Button>
                                <Dropdown.Toggle split variant="outline-danger" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-warning">
                                    Warning
                                </Button>
                                <Dropdown.Toggle split variant="outline-warning" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Button variant="outline-info">
                                    Info
                                </Button>
                                <Dropdown.Toggle split variant="outline-info" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Dark Dropdowns</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Primary
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Secondary
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Success
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Danger
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Warning
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="btn-group mb-2 me-2">
                                <Dropdown.Toggle as="button" className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Info
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-dark">
                                    <Dropdown.Item href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Dropright</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="d-flex flex-wrap gap-2">

                                <div className="btn-group dropend">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false"> Dropright </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>


                                <div className="btn-group dropend">
                                    <button type="button" className="btn btn-light-primary"> Split dropup </button>
                                    <button type="button" className="btn btn-light-primary dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Dropleft</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="d-flex flex-wrap gap-2">

                                <div className="btn-group dropstart">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false"> Dropup </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>


                                <div className="btn-group dropstart">
                                    <button type="button" className="btn btn-light-secondary"> Split dropup </button>
                                    <button type="button" className="btn btn-light-secondary dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Dropup</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="d-flex flex-wrap gap-2">

                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false"> Dropup </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>


                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-light-success"> Split dropup </button>
                                    <button type="button" className="btn btn-light-success dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Menu alignment</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Right-aligned menu example
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                    <li><button className="dropdown-item" type="button">Another action</button></li>
                                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Responsive alignment</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="row">
                                <div className="col-12">
                                    <h6>Left-aligned but right aligned when large screen</h6>
                                    <div className="btn-group mb-2">
                                        <button type="button" className="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-display="static" aria-expanded="false">
                                            Dropdown
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-lg-end">
                                            <li><button className="dropdown-item" type="button">Action</button></li>
                                            <li><button className="dropdown-item" type="button">Another action</button></li>
                                            <li><button className="dropdown-item" type="button">Something else here</button> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <h6>Right-aligned but left aligned when large screen</h6>
                                    <div className="btn-group mb-2">
                                        <button type="button" className="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-display="static" aria-expanded="false">
                                            Dropdown

                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                            <li><button className="dropdown-item" type="button">Action</button></li>
                                            <li><button className="dropdown-item" type="button">Another action</button></li>
                                            <li><button className="dropdown-item" type="button">Something else here</button> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Alignment options</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group mr-2 mb-2">
                                <button className="btn btn-light-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Right-aligned menu
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    data-bs-display="static" aria-expanded="false">
                                    Left-aligned, right-aligned lg
                                </button>
                                <ul className="dropdown-menu dropdown-menu-lg-end">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    data-bs-display="static" aria-expanded="false">
                                    Right-aligned, left-aligned lg
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2 dropstart">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropstart
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2 dropend">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropend
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <div className="btn-group mr-2 mb-2 dropup">
                                <button type="button" className="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropup
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Text</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group mb-2 me-2">
                                <button className="btn btn-light-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Text</button>
                                <div className="p-4 dropdown-menu">
                                    <h6>Some title example</h6>
                                    <p className="mb-2 text-muted small">And this is more</p>
                                    <p className="mb-0 text-muted">Some example text that&apos;s free-flowing within the dropdown menu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Forms</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group mb-2 me-2">
                                <button className="btn btn-light-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Forms</button>
                                <div className="dropdown-menu" style={{ minWidth: "16rem" }}>
                                    <form className="px-4 py-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email Address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                                                placeholder="email@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                                                placeholder="Password" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                                <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm">Sign in</button>
                                        <button type="submit" className="btn btn-light btn-sm">Reset</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">New around here? Sign up</a>
                                    <a className="dropdown-item" href="#">Forgot password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Offset & Reference</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="dropdown me-1">
                                <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                    Offset
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-secondary">Reference</button>
                                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                    id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                                    data-bs-reference="parent">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Auto close behavior</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group mr-2 mb-2">
                                <button className="btn btn-light-info dropdown-toggle" type="button" id="defaultDropdown"
                                    data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Default dropdown
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group mr-2 mb-2">
                                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
                                    data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                                    Clickable outside
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group mr-2 mb-2">
                                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    Clickable inside
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group mr-2 mb-2">
                                <button className="btn btn-light-info dropdown-toggle" type="button" id="dropdownMenuClickable"
                                    data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    Manual close
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

BCDropdowns.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCDropdowns;
