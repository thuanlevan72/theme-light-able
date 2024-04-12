import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Button } from "react-bootstrap";

const BCButton = () => {
    return (
        <>
            <SectionTitle
                title="Button"
                description="Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
                link="https://react-bootstrap.netlify.app/docs/components/buttons"
            />

            <div className="row btn-page">
                <Col sm={6}>
                    <Card>
                        <Card.Header>
                            <h5>Default</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="warning">Warning</Button>
                                <Button variant="info">Info</Button>
                                <Button variant="light">Light</Button>
                                <Button variant="dark">Dark</Button>
                                <Button variant="link">Link</Button>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                                <Button variant="primary">
                                    Block Level Button
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <Card.Header>
                            <h5>Light</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="light-primary">Primary</Button>
                                <Button variant="light-secondary">Secondary</Button>
                                <Button variant="light-success">Success</Button>
                                <Button variant="light-danger">Danger</Button>
                                <Button variant="light-warning">Warning</Button>
                                <Button variant="light-info">Info</Button>
                                <Button variant="light-dark">Dark</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Link</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <a className="btn btn-primary" role="button" href="#">
                                    Primary link
                                </a>
                                <a className="btn btn-primary disabled" role="button" href="#">
                                    Disabled Primary link
                                </a>
                                <a className="btn btn-link-success" role="button" href="#">
                                    Light Success link
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Outline</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary">Primary</Button>
                                <Button variant="outline-secondary">Secondary</Button>
                                <Button variant="outline-success">Success</Button>
                                <Button variant="outline-danger">Danger</Button>
                                <Button variant="outline-warning">Warning</Button>
                                <Button variant="outline-info">Info</Button>
                                <Button variant="outline-dark">Dark</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Disabled Button</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <p>
                                use <code>.disabled</code> in class <code>.btn</code> class to get
                                Disabled button
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" disabled>
                                    Primary
                                </Button>
                                <Button variant="secondary" disabled>
                                    Secondary
                                </Button>
                                <Button variant="success" disabled>
                                    Success
                                </Button>
                                <Button variant="danger" disabled>
                                    Danger
                                </Button>
                                <Button variant="warning" disabled>
                                    Warning
                                </Button>
                                <Button variant="info" disabled>
                                    Info
                                </Button>
                                <Button variant="light" disabled>
                                    Light
                                </Button>
                                <Button variant="dark" disabled>
                                    Dark
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Shadow</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" className="btn-shadow">Primary</Button>
                                <Button variant="secondary" className="btn-shadow">Secondary</Button>
                                <Button variant="success" className="btn-shadow">Success</Button>
                                <Button variant="danger" className="btn-shadow">Danger</Button>
                                <Button variant="warning" className="btn-shadow">Warning</Button>
                                <Button variant="info" className="btn-shadow">Info</Button>
                                <Button variant="light" className="btn-shadow">Light</Button>
                                <Button variant="dark" className="btn-shadow">Dark</Button>
                                <Button variant="link" className="btn-shadow">Link</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Sizes [ Large ]</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <p>
                                use <code>.btn-lg</code> in class <code>.btn</code> class to get
                                Large button
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="lg">
                                    Large button
                                </Button>
                                <Button variant="secondary" size="lg">
                                    Large button
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Sizes [ Small ]</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <p>
                                use <code>.btn-sm</code> in class <code>.btn</code> class to get
                                Small button
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="sm">
                                    Small button
                                </Button>
                                <Button variant="secondary" size="sm">
                                    Small button
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <div className="row btn-page">

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Button With Icon</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <button type="button" className="btn btn-primary d-inline-flex"><i className="ti ti-thumb-up me-1"></i>Primary</button>
                                <button type="button" className="btn btn-secondary d-inline-flex"><i className="ti ti-camera me-1"></i>Secondary</button>
                                <button type="button" className="btn btn-success d-inline-flex"><i className="ti ti-circle-check me-1"></i>Success</button>
                                <button type="button" className="btn btn-danger d-inline-flex"><i className="ti ti-alert-triangle me-1"></i>Danger</button>
                                <button type="button" className="btn btn-warning d-inline-flex"><i className="ti ti-triangle me-1"></i>Warning</button>
                                <button type="button" className="btn btn-info d-inline-flex"><i className="ti ti-info-circle me-1"></i>Info</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Outline Icon Buttons</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <button type="button" className="btn btn-outline-primary d-inline-flex"><i className="ti ti-thumb-up me-1"></i>Primary</button>
                                <button type="button" className="btn btn-outline-secondary d-inline-flex"><i className="ti ti-camera me-1"></i>Secondary</button>
                                <button type="button" className="btn btn-outline-success d-inline-flex"><i className="ti ti-circle-check me-1"></i>Success</button>
                                <button type="button" className="btn btn-outline-danger d-inline-flex"><i className="ti ti-alert-triangle me-1"></i>Danger</button>
                                <button type="button" className="btn btn-outline-warning d-inline-flex"><i className="ti ti-triangle me-1"></i>Warning</button>
                                <button type="button" className="btn btn-outline-info d-inline-flex"><i className="ti ti-info-circle me-1"></i>Info</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Button Icon</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5>Basic</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        <button type="button" className="btn btn-icon btn-primary"><i className="ti ti-thumb-up"></i></button>
                                        <button type="button" className="btn btn-icon btn-secondary"><i className="ti ti-camera"></i></button>
                                        <button type="button" className="btn btn-icon btn-success"><i className="ti ti-circle-check"></i></button>
                                        <button type="button" className="btn btn-icon btn-danger"><i className="ti ti-alert-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-warning"><i className="ti ti-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-info"><i className="ti ti-info-circle"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Light</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        <button type="button" className="btn btn-icon btn-light-primary"><i className="ti ti-thumb-up"></i></button>
                                        <button type="button" className="btn btn-icon btn-light-secondary"><i className="ti ti-camera"></i></button>
                                        <button type="button" className="btn btn-icon btn-light-success"><i className="ti ti-circle-check"></i></button>
                                        <button type="button" className="btn btn-icon btn-light-danger"><i className="ti ti-alert-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-light-warning"><i className="ti ti-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-light-info"><i className="ti ti-info-circle"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Outline</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        <button type="button" className="btn btn-icon btn-outline-primary"><i className="ti ti-thumb-up"></i></button>
                                        <button type="button" className="btn btn-icon btn-outline-secondary"><i className="ti ti-camera"></i></button>
                                        <button type="button" className="btn btn-icon btn-outline-success"><i className="ti ti-circle-check"></i></button>
                                        <button type="button" className="btn btn-icon btn-outline-danger"><i className="ti ti-alert-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-outline-warning"><i className="ti ti-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-outline-info"><i className="ti ti-info-circle"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Link</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        <button type="button" className="btn btn-icon btn-link-primary"><i className="ti ti-thumb-up"></i></button>
                                        <button type="button" className="btn btn-icon btn-link-secondary"><i className="ti ti-camera"></i></button>
                                        <button type="button" className="btn btn-icon btn-link-success"><i className="ti ti-circle-check"></i></button>
                                        <button type="button" className="btn btn-icon btn-link-danger"><i className="ti ti-alert-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-link-warning"><i className="ti ti-triangle"></i></button>
                                        <button type="button" className="btn btn-icon btn-link-info"><i className="ti ti-info-circle"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Size</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-icon btn-primary avtar-xl mb-0">A</button>
                                        <button type="button" className="btn btn-icon btn-primary avtar-l mb-0">A</button>
                                        <button type="button" className="btn btn-icon btn-primary mb-0">A</button>
                                        <button type="button" className="btn btn-icon btn-primary avtar-s mb-0">A</button>
                                        <button type="button" className="btn btn-icon btn-primary avtar-xs mb-0">A</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row btn-page">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Basic Button Group</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary">Left</button>
                                <button type="button" className="btn btn-primary">Middle</button>
                                <button type="button" className="btn btn-primary">Right</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Button Toolbar</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-toolbar d-flex flex-wrap gap-2" role="toolbar">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-light-secondary">1</button>
                                    <button type="button" className="btn btn-light-secondary">2</button>
                                    <button type="button" className="btn btn-light-secondary">3</button>
                                    <button type="button" className="btn btn-light-secondary">4</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-light-secondary">5</button>
                                    <button type="button" className="btn btn-light-secondary">6</button>
                                    <button type="button" className="btn btn-light-secondary">7</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-light-secondary">8</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Button Toolbar Input</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="row">
                                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group my-1 me-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-light-secondary">1</button>
                                        <button type="button" className="btn btn-light-secondary">2</button>
                                        <button type="button" className="btn btn-light-secondary">3</button>
                                        <button type="button" className="btn btn-light-secondary">4</button>
                                    </div>
                                    <div className="input-group my-1">
                                        <div className="input-group-text" id="btnGroupAddon">@</div>
                                        <input type="text" className="form-control" placeholder="Input group example"
                                            aria-label="Input group example" aria-describedby="btnGroupAddon" />
                                    </div>
                                </div>

                                <div className="btn-toolbar justify-content-between" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <div className="btn-group my-1" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-light-secondary">1</button>
                                        <button type="button" className="btn btn-light-secondary">2</button>
                                        <button type="button" className="btn btn-light-secondary">3</button>
                                        <button type="button" className="btn btn-light-secondary">4</button>
                                    </div>
                                    <div className="input-group my-1">
                                        <div className="input-group-text" id="btnGroupAddon2">@</div>
                                        <input type="text" className="form-control" placeholder="Input group example"
                                            aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Button Toolbar Size</h5>
                            <p>use <code>.btn-group-lg</code> in class <code>.btn-group</code> class to get Large size button group</p>
                        </div>
                        <div className="card-body pc-component">
                            <div className="row">
                                <div className="col-xxl-4 col-md-12 mb-2">
                                    <div className="btn-group btn-group-lg" role="group" aria-label="button groups xl">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-md-6 mt-3 mb-2">
                                    <div className="btn-group" role="group" aria-label="button groups">
                                        <button type="button" className="btn btn-light-secondary">Left</button>
                                        <button type="button" className="btn btn-light-secondary">Middle</button>
                                        <button type="button" className="btn btn-light-secondary">Right</button>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-md-6 mt-4 mb-2">
                                    <div className="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Nesting</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" className="btn btn-primary">1</button>
                                <button type="button" className="btn btn-primary">2</button>
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <a className="dropdown-item" href="#!">Dropdown link</a>
                                        <a className="dropdown-item" href="#!">Dropdown link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Vertical Variation</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="row">
                                <div className="col-4">
                                    <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn m-0 btn-secondary">1</button>
                                        <button type="button" className="btn m-0 btn-secondary">2</button>
                                        <button type="button" className="btn m-0 btn-secondary">3</button>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn m-0 btn-secondary">1</button>
                                        <button type="button" className="btn m-0 btn-secondary">2</button>
                                        <div className="btn-group" role="group">
                                            <button id="btnGroupDrop3" type="button" className="btn m-0 btn-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
                                                <a className="dropdown-item" href="#!">Dropdown link</a>
                                                <a className="dropdown-item" href="#!">Dropdown link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Mixed styles</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-danger">A</button>
                                <button type="button" className="btn btn-warning">A</button>
                                <button type="button" className="btn btn-primary">A</button>
                                <button type="button" className="btn btn-success">A</button>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-light-danger">A</button>
                                <button type="button" className="btn btn-light-warning text-dark">A</button>
                                <button type="button" className="btn btn-light-primary">A</button>
                                <button type="button" className="btn btn-light-success">A</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Outlined styles</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-outline-secondary">Left</button>
                                <button type="button" className="btn btn-outline-secondary">Middle</button>
                                <button type="button" className="btn btn-outline-secondary">Right</button>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-outline-primary">Left</button>
                                <button type="button" className="btn btn-outline-success">Middle</button>
                                <button type="button" className="btn btn-outline-danger">Right</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Checkbox button groups</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group">
                                <input type="checkbox" className="btn-check" id="btncheck1" />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck1">Checkbox 1</label>
                                <input type="checkbox" className="btn-check" id="btncheck2" />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck2">Checkbox 2</label>
                                <input type="checkbox" className="btn-check" id="btncheck3" />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck3">Checkbox 3</label>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <input type="checkbox" className="btn-check" id="btnchecklite1" />
                                <label className="btn btn-light-secondary" htmlFor="btnchecklite1">Checkbox 1</label>
                                <input type="checkbox" className="btn-check" id="btnchecklite2" />
                                <label className="btn btn-light-secondary" htmlFor="btnchecklite2">Checkbox 2</label>
                                <input type="checkbox" className="btn-check" id="btnchecklite3" />
                                <label className="btn btn-light-secondary" htmlFor="btnchecklite3">Checkbox 3</label>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <input type="checkbox" className="btn-check" id="btnchecklitecol1" />
                                <label className="btn btn-light-primary" htmlFor="btnchecklitecol1">Checkbox 1</label>
                                <input type="checkbox" className="btn-check" id="btnchecklitecol2" />
                                <label className="btn btn-light-success" htmlFor="btnchecklitecol2">Checkbox 2</label>
                                <input type="checkbox" className="btn-check" id="btnchecklitecol3" />
                                <label className="btn btn-light-danger" htmlFor="btnchecklitecol3">Checkbox 3</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Radio button groups</h5>
                        </div>
                        <div className="card-body pc-component">
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" id="btnrdo1" name="btn_radio1" />
                                <label className="btn btn-outline-secondary" htmlFor="btnrdo1">Radio 1</label>
                                <input type="radio" className="btn-check" id="btnrdo2" name="btn_radio1" />
                                <label className="btn btn-outline-secondary" htmlFor="btnrdo2">Radio 2</label>
                                <input type="radio" className="btn-check" id="btnrdo3" name="btn_radio1" />
                                <label className="btn btn-outline-secondary" htmlFor="btnrdo3">Radio 3</label>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" id="btnrdolite1" name="btn_radio2" />
                                <label className="btn btn-light-secondary" htmlFor="btnrdolite1">Radio 1</label>
                                <input type="radio" className="btn-check" id="btnrdolite2" name="btn_radio2" />
                                <label className="btn btn-light-secondary" htmlFor="btnrdolite2">Radio 2</label>
                                <input type="radio" className="btn-check" id="btnrdolite3" name="btn_radio2" />
                                <label className="btn btn-light-secondary" htmlFor="btnrdolite3">Radio 3</label>
                            </div>
                            <hr />
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" id="btnrdolitecol1" name="btn_radio3" />
                                <label className="btn btn-light-primary" htmlFor="btnrdolitecol1">Radio 1</label>
                                <input type="radio" className="btn-check" id="btnrdolitecol2" name="btn_radio3" />
                                <label className="btn btn-light-success" htmlFor="btnrdolitecol2">Radio 2</label>
                                <input type="radio" className="btn-check" id="btnrdolitecol3" name="btn_radio3" />
                                <label className="btn btn-light-danger" htmlFor="btnrdolitecol3">Radio 3</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

BCButton.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCButton;
