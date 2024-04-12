import React, { ReactElement, useState } from "react";
import Layout from "@layout/index";
import { Button, Card, Col, Collapse, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Link from "next/link";

const InvoiceCreate = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    // Select address
    const [selectColl, setSelectColl] = useState(false);
    const toggleSelect = () => setSelectColl(!selectColl);

    // address
    const [addressColl, setAddressColl] = useState(false);
    const toggleAddress = () => setAddressColl(!addressColl);

    // show icone
    const [collapses, setCollapses] = useState(true);
    const toggleCollapses = () => setCollapses(!collapses);

    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Invoice" subTitle="Create" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-between align-items-center mb-3 g-3">
                                <Col sm="auto">
                                    <Form className="form-search">
                                        <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                        <Form.Control type="search" placeholder="Search..." />
                                        <Button variant="light" className="btn-search">Search</Button>
                                    </Form>
                                </Col>
                                <Col sm="auto">
                                    <input type="date" className="form-control" />
                                </Col>
                            </Row>
                            <Card className="bg-body mb-0">
                                <Card.Body>
                                    <Card>
                                        <Card.Body>
                                            <Row className="g-3">
                                                <Col sm={6} xl={3}>
                                                    <Form.Group>
                                                        <Form.Label>Invoice id</Form.Label>
                                                        <Form.Control type="text" placeholder="#xxxx" />
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={6} xl={3}>
                                                    <Form.Group>
                                                        <Form.Label>Status</Form.Label>
                                                        <Form.Select id="exampleFormControlSelect1">
                                                            <option>Please Select</option>
                                                            <option>Paid</option>
                                                            <option>Unpaid</option>
                                                            <option>Partial Paid</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={6} xl={3}>
                                                    <Form.Group>
                                                        <Form.Label>Start Date</Form.Label>
                                                        <Form.Control type="datetime-local" />
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={6} xl={3}>
                                                    <Form.Group>
                                                        <Form.Label>Due Date</Form.Label>
                                                        <Form.Control type="datetime-local" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="border rounded p-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h6 className="mb-0">From:</h6>
                                                            <Button size="sm"
                                                                variant="light-secondary" onClick={() => {
                                                                    toggle();
                                                                    setSelectColl(true);
                                                                    setAddressColl(false);
                                                                }}>
                                                                <i className="ph-duotone ph-pencil-simple-line"></i> Change
                                                            </Button>
                                                        </div>
                                                        <h5>Garcia-Cameron and Sons</h5>
                                                        <p className="mb-0">8534 Saunders Hill Apt. 583</p>
                                                        <p className="mb-0">(970) 982-3353</p>
                                                        <p className="mb-0">brandon07@pierce.com</p>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="border rounded p-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h6 className="mb-0">To:</h6>
                                                            <Button size="sm"
                                                                variant="light-secondary" onClick={() => {
                                                                    toggle();
                                                                    setSelectColl(true);
                                                                    setAddressColl(false);
                                                                }}>
                                                                <i className="ph-duotone ph-pencil-simple-line"></i> Change
                                                            </Button>
                                                        </div>
                                                        <h5>Dickinson-Cummerata</h5>
                                                        <p className="mb-0">55D Leatha Way Ernaburgh, NT 2146</p>
                                                        <p className="mb-0">75-9079921</p>
                                                        <p className="mb-0">kasandra.conn@borer.com</p>
                                                    </Card>
                                                </Col>
                                                <Col sm={12}>
                                                    <div className="table-responsive mb-2">
                                                        <Table className="table table-hover mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th><span className="text-danger">*</span>Name</th>
                                                                    <th><span className="text-danger">*</span>Description</th>
                                                                    <th><span className="text-danger">*</span>Qty</th>
                                                                    <th>Total Amount</th>
                                                                    <th className="text-center">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td><Form.Control type="text" placeholder="Name" defaultValue="Mauris" /></td>
                                                                    <td><Form.Control type="text" placeholder="Description" defaultValue="Malesuada adipiscing" /></td>
                                                                    <td><Form.Control type="number" placeholder="Qty" defaultValue="2" /></td>
                                                                    <td><Form.Control type="text" placeholder="Total Amount" defaultValue="$80.00" /></td>
                                                                    <td className="text-center">
                                                                        <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i className="ti ti-trash f-20"></i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td><Form.Control type="text" placeholder="Name" defaultValue="Vitae" /></td>
                                                                    <td><Form.Control type="text" placeholder="Description" defaultValue="Hac egestas" /></td>
                                                                    <td><Form.Control type="number" placeholder="Qty" defaultValue="3" /></td>
                                                                    <td><Form.Control type="text" placeholder="Total Amount" defaultValue="$40.00" /></td>
                                                                    <td className="text-center">
                                                                        <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i className="ti ti-trash f-20"></i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td><Form.Control type="text" placeholder="Name" /></td>
                                                                    <td><Form.Control type="text" placeholder="Description" /></td>
                                                                    <td><Form.Control type="number" placeholder="Qty" /></td>
                                                                    <td><Form.Control type="text" placeholder="Total Amount" /></td>
                                                                    <td className="text-center">
                                                                        <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i className="ti ti-trash f-20"></i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <div className="text-start">
                                                        <Button variant="light-primary"><i className="ti ti-plus"></i> Add new item</Button>
                                                        <hr className="mb-0" />
                                                    </div>
                                                </Col>
                                                <Col sm={12}>
                                                    <div className="invoice-total ms-auto">
                                                        <Row>
                                                            <Col sm={6}>
                                                                <Form.Group>
                                                                    <Form.Label>Discount</Form.Label>
                                                                    <Form.Control type="text" defaultValue="10" className="mb-3" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <Form.Group>
                                                                    <Form.Label>Taxes</Form.Label>
                                                                    <Form.Control type="text" defaultValue="5" className="mb-3" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="text-muted mb-1 text-start">Sub Total :</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="f-w-600 mb-1 text-end">$20.00</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="text-muted mb-1 text-start">Discount :</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="f-w-600 mb-1 text-end text-success">$10.00</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="text-muted mb-1 text-start">Taxes :</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="f-w-600 mb-1 text-end">$5.000</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="f-w-600 mb-1 text-start">Grand Total :</p>
                                                            </Col>
                                                            <Col sm={6}>
                                                                <p className="f-w-600 mb-1 text-end">$25.00</p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col sm={12}>
                                                    <Form.Group className="mb-0">
                                                        <Form.Label>Note</Form.Label>
                                                        <Form.Control as="textarea" rows={3} placeholder="Note" />
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={12}>
                                                    <Row className="align-items-center justify-content-between g-3">
                                                        <Col sm="auto">
                                                            <Form.Select className="w-auto">
                                                                <option>USD (US Dollar)</option>
                                                                <option>INR (Rupes)</option>
                                                            </Form.Select>
                                                        </Col>
                                                        <Col sm="auto" className="btn-page">
                                                            <Link href="../application/invoice-view" className="btn btn-primary">Preview</Link>
                                                            <Button variant="outline-secondary">Download</Button>
                                                            <Button variant="outline-secondary">Update & Send</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={toggle} size="lg" centered scrollable>
                <Modal.Header>
                    <Collapse in={selectColl} className="multi-collapse">
                        <h5 className="mb-0">Select address</h5>
                    </Collapse>
                    <Collapse className="multi-collapse" in={addressColl}>
                        <h5 className="mb-0">Add New address</h5>
                    </Collapse>
                    <div className="d-flex align-items-center justify-content-end">
                        <Collapse className="multi-collapse" in={collapses}>
                            <Link href="#" className="avtar avtar-s btn-link-secondary" onClick={() => { toggleAddress(); toggleSelect(); toggleCollapses(); }}>
                                <i className="ti ti-plus f-20"></i>
                            </Link>
                        </Collapse>
                        <Link href="#" className="avtar avtar-s btn-link-danger" onClick={() => { toggle(); toggleAddress(); toggleSelect(); toggleCollapses(); }}>
                            <i className="ti ti-x f-20"></i>
                        </Link>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Collapse in={selectColl} className="multi-collapse">
                        <div className="address-check-block">
                            <div className="address-check border rounded p-3">
                                <div className="form-check">
                                    <input type="radio" name="radio1" className="form-check-input input-primary" id="address-check-1" defaultChecked />
                                    <label className="form-check-label d-block" htmlFor="address-check-1">
                                        <span className="h6 mb-0 d-block">Ian Carpenter <small className="text-muted">(Home)</small></span>
                                        <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span>
                                        <span className="row align-items-center justify-content-between">
                                            <span className="col-6">
                                                <span className="text-muted mb-0">+91 1234567890</span>
                                            </span>
                                            <span className="col-6 text-end">
                                                <span className="address-btns d-flex align-items-center justify-content-end">
                                                    <a href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-20"></i>
                                                    </a>
                                                    <span className="btn btn-sm btn-outline-primary">Deliver to this address</span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="address-check border rounded p-3">
                                <div className="form-check">
                                    <input type="radio" name="radio1" className="form-check-input input-primary" id="address-check-2" />
                                    <label className="form-check-label d-block" htmlFor="address-check-2">
                                        <span className="h6 mb-0 d-block">Ian Carpenter <small className="text-muted">(Home)</small></span>
                                        <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span>
                                        <span className="row align-items-center justify-content-between">
                                            <span className="col-6">
                                                <span className="text-muted mb-0">+91 1234567890</span>
                                            </span>
                                            <span className="col-6 text-end">
                                                <span className="address-btns d-flex align-items-center justify-content-end">
                                                    <a href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-20"></i>
                                                    </a>
                                                    <span className="btn btn-sm btn-outline-primary">Deliver to this address</span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="address-check border rounded p-3">
                                <div className="form-check">
                                    <input type="radio" name="radio1" className="form-check-input input-primary" id="address-check-3" />
                                    <label className="form-check-label d-block" htmlFor="address-check-3">
                                        <span className="h6 mb-0 d-block">Ian Carpenter <small className="text-muted">(Home)</small></span>
                                        <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span>
                                        <span className="row align-items-center justify-content-between">
                                            <span className="col-6">
                                                <span className="text-muted mb-0">+91 1234567890</span>
                                            </span>
                                            <span className="col-6 text-end">
                                                <span className="address-btns d-flex align-items-center justify-content-end">
                                                    <a href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-20"></i>
                                                    </a>
                                                    <span className="btn btn-sm btn-outline-primary">Deliver to this address</span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse in={addressColl} className="multi-collapse">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group row align-items-center">
                                    <label className="col-lg-4 col-form-label">Address Type :<small className="text-muted d-block">Enter Add Type</small></label>
                                    <div className="col-lg-8">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck1" defaultChecked />
                                            <label className="form-check-label" htmlFor="addtypecheck1"> Home (All day Delivery) </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck2" />
                                            <label className="form-check-label" htmlFor="addtypecheck2"> Work (Between 10 AM to 5 PM) </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">First Name :<small className="text-muted d-block">Enter your first name</small></label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">Last Name :<small className="text-muted d-block">Enter your last name</small></label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">Email Id :<small className="text-muted d-block">Enter Email id</small></label>
                                    <div className="col-lg-8">
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">Date of Birth :<small className="text-muted d-block">Enter the date of birth</small></label>
                                    <div className="col-lg-8">
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">Phone number :<small className="text-muted d-block">Enter Phone number</small></label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">City :<small className="text-muted d-block">Enter City name</small></label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkaddres" defaultChecked />
                                        <label className="form-check-label" htmlFor="checkaddres"> Save this new address for future shipping </label>
                                    </div>
                                </div>
                                <div className="text-end btn-page mb-0 mt-4">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => { toggleSelect(); toggleAddress(); toggleCollapses(); }}>Cancel</button>
                                    <button className="btn btn-primary" onClick={toggle}>Save &amp; Deliver to this Address</button>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </Modal.Body>
                <Collapse in={selectColl} className="modal-footer justify-content-between multi-collapse">
                    <div id="multi-collapse">
                        <ul className="list-inline me-auto mb-0">
                            <li className="list-inline-item align-bottom">
                                <a href="#" className="avtar avtar-s btn-link-danger w-sm-auto" data-bs-toggle="tooltip" aria-label="Delete" data-bs-original-title="Delete">
                                    <i className="ti ti-trash f-18"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="flex-grow-1 text-end">
                            <button type="button" className="btn btn-link-danger" onClick={toggle}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={() => { toggle(); }}>Save</button>
                        </div>
                    </div>
                </Collapse>
            </Modal>
        </React.Fragment>
    );
};

InvoiceCreate.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default InvoiceCreate;

