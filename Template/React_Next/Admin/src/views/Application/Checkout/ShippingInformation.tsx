import Image from "next/image";
import React, { useState } from "react";
import { Button, Card, Col, Collapse, Row, Tab } from "react-bootstrap";
import ProcesstoCheckout from "./ProcesstoCheckout";
import Link from "next/link";

const ShippingInformation = () => {
    const [addNewAddress, setAddNewAddress] = useState<boolean>(true);
    return (
        <React.Fragment>
            <Tab.Pane eventKey="ecomtab-2" id="ecomtab-2" role="tabpanel" aria-labelledby="ecomtab-tab-2">
                <Row>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Row className="align-items-center">
                                    <div className="col">
                                        <div className="progress" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-primary" style={{ width: "66%" }}></div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <p className="mb-0 h6">Step 2</p>
                                    </div>
                                </Row>
                            </Card.Header>
                            <Collapse in={addNewAddress} className="multi-collapse">
                                <div className="card-body border-bottom">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5 className="mb-0">Shipping Information</h5>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-primary" type="button" onClick={() => setAddNewAddress(!addNewAddress)}>Add new Address</button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                            <Card.Body>
                                <div className="address-check-block">
                                    <div className="address-check border rounded p-3">
                                        <div className="form-check">
                                            <input type="radio" name="radio1" className="form-check-input input-primary"
                                                id="address-check-1" defaultChecked />
                                            <label className="form-check-label d-block" htmlFor="address-check-1">
                                                <span className="h6 mb-0 d-block">Ian Carpenter <small
                                                    className="text-muted">(Home)</small></span>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <span className="address-btns d-flex align-items-center justify-content-end gap-2">
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
                                                <span className="h6 mb-0 d-block">Ian Carpenter <small
                                                    className="text-muted">(Home)</small></span>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <span className="address-btns d-flex align-items-center justify-content-end gap-2">
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
                                                <span className="h6 mb-0 d-block">Ian Carpenter <small
                                                    className="text-muted">(Home)</small></span>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <span className="address-btns d-flex align-items-center justify-content-end gap-2">
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
                                            <input type="radio" name="radio1" className="form-check-input input-primary" id="address-check-4" />
                                            <label className="form-check-label d-block" htmlFor="address-check-4">
                                                <span className="h6 mb-0 d-block">Ian Carpenter <small
                                                    className="text-muted">(Home)</small></span>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <span className="address-btns d-flex align-items-center justify-content-end gap-2">
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
                            </Card.Body>
                        </Card>
                        <div className="text-end">
                            <Link href="../application/ecom_product" className="btn btn-link-primary d-inline-flex align-items-center">
                                <i className="ti ti-arrow-narrow-left align-text-bottom me-2"></i> Back to Cart</Link>
                        </div>
                    </Col>
                    <ProcesstoCheckout isCardSummary={true} isPayment={false} />

                </Row>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default ShippingInformation;