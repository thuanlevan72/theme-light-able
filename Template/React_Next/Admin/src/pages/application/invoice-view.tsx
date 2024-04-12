import React, { ReactElement } from "react";
import Layout from "@layout/index";
import { Button, Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Link from "next/link";
import Image from "next/image";

// img
import logoDark from "@assets/images/logo-dark.svg";

const InvoiceView = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Invoice" subTitle="View" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>

                            <div className="mb-3 d-print-none">
                                <ul className="list-inline ms-auto mb-0 d-flex justify-content-end flex-wrap">
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-pencil-simple-line f-22"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-eye f-22"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-download-simple f-22"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-printer f-22"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-paper-plane-tilt f-22"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom">
                                        <Link href="#" className="avtar avtar-s btn-link-primary">
                                            <i className="ph-duotone ph-share-network f-22"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Card className="card shadow-none bg-body mb-0">
                                <Card.Body>
                                    <Card>
                                        <Card.Body>
                                            <Row className="g-3">
                                                <Col xs={12}>
                                                    <Row className="align-items-center g-3">
                                                        <Col sm={6}>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <Image src={logoDark} className="img-fluid" alt="images" />
                                                                <span className="badge bg-primary rounded-pill ms-2">Paid</span>
                                                            </div>
                                                            <p className="mb-0">INV - 000457</p>
                                                        </Col>
                                                        <Col sm={6} className="text-sm-end">
                                                            <h6>Date <span className="text-muted f-w-400">03/8/2023</span></h6>
                                                            <h6>Due Date <span className="text-muted f-w-400">10/8/2023</span></h6>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="border rounded p-3">
                                                        <h6 className="mb-0">From:</h6>
                                                        <h5>Garcia-Cameron and Sons</h5>
                                                        <p className="mb-0">8534 Saunders Hill Apt. 583</p>
                                                        <p className="mb-0">(970) 982-3353</p>
                                                        <p className="mb-0">brandon07@pierce.com</p>
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="border rounded p-3">
                                                        <h6 className="mb-0">To:</h6>
                                                        <h5>Dickinson-Cummerata</h5>
                                                        <p className="mb-0">55D Leatha Way Ernaburgh, NT 2146</p>
                                                        <p className="mb-0">75-9079921</p>
                                                        <p className="mb-0">kasandra.conn@borer.com</p>
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <div className="table-responsive">
                                                        <table className="table table-hover mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Name</th>
                                                                    <th>Description</th>
                                                                    <th>Total Amount</th>
                                                                    <th>Qty</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mauris</td>
                                                                    <td>Malesuada adipiscing</td>
                                                                    <td>$80.00</td>
                                                                    <td>2</td>
                                                                    <td>$160.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Vitae</td>
                                                                    <td>Hac egestas</td>
                                                                    <td>$40.00</td>
                                                                    <td>3</td>
                                                                    <td>$120.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Mauris</td>
                                                                    <td>Malesuada adipiscing</td>
                                                                    <td>$80.00</td>
                                                                    <td>4</td>
                                                                    <td>$320.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-start">
                                                        <hr className="mb-2 mt-1" />
                                                    </div>
                                                </Col>
                                                <Col xs={12} >
                                                    <div className="invoice-total ms-auto">
                                                        <Row>
                                                            <Col xs={6}>
                                                                <div className="form-group">
                                                                    <label className="form-label">Discount</label>
                                                                    <h5>10</h5>
                                                                </div>
                                                            </Col>
                                                            <Col xs={6} className="text-end">
                                                                <div className="form-group">
                                                                    <label className="form-label">Taxes</label>
                                                                    <h5>5</h5>
                                                                </div>
                                                            </Col>
                                                            <Col xs={6}><p className="text-muted mb-1 text-start">Sub Total :</p></Col>
                                                            <Col xs={6}><p className="f-w-600 mb-1 text-end">$20.00</p></Col>
                                                            <Col xs={6}><p className="text-muted mb-1 text-start">Discount :</p></Col>
                                                            <Col xs={6}><p className="f-w-600 mb-1 text-end text-success">$10.00</p></Col>
                                                            <Col xs={6}><p className="text-muted mb-1 text-start">Taxes :</p></Col>
                                                            <Col xs={6}><p className="f-w-600 mb-1 text-end">$5.000</p></Col>
                                                            <Col xs={6}><p className="f-w-600 mb-1 text-start">Grand Total :</p></Col>
                                                            <Col xs={6}><p className="f-w-600 mb-1 text-end">$25.00</p></Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <label className="form-label">Note</label>
                                                    <p className="mb-0">
                                                        It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
                                                        projects. Thank You!
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Row className="d-print-none align-items-center justify-content-end">
                                        <Col className="col-auto btn-page">
                                            <Button variant="primary" className="btn-print-invoice" onClick={() => typeof window !== 'undefined' && window.print()}>Print</Button>
                                            <Button variant="outline-secondary" className="btn-print-invoice">Download</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

InvoiceView.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default InvoiceView;