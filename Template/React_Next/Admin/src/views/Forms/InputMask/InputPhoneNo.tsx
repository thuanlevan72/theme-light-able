import React from "react";
import { Col, Card, Form, Row } from "react-bootstrap";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.in";

const InputPhoneNo = () => {
    return (
        <React.Fragment>
            <Col md={12}>
                <Card>
                    <Card.Header>
                        <h5>Phone no.</h5>
                        <span className="d-block m-t-5">Add class of <code>.mob_no</code> with <code>data-mask</code> attribute</span>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row className="form-group">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Mobile No.</label>
                                <Col lg={6} md={12} sm={12}>
                                    <Cleave
                                        options={{
                                            blocks: [4, 3, 3],
                                            delimiters: ['-'],
                                            numericOnly: true,
                                            uppercase: true,
                                        }}
                                        className="form-control hour"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Telephone</label>
                                <Col lg={6} md={12} sm={12}>
                                    <Cleave
                                        options={{
                                            blocks: [4, 4],
                                            delimiters: ['-'],
                                            numericOnly: true,
                                            uppercase: true,
                                        }}
                                        className="form-control hour"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Tel. with Code Area</label>
                                <Col lg={6} md={12} sm={12}>
                                    {/* <input type="text" className="form-control telphone_with_code" data-mask="(99) 9999-9999" /> */}
                                    <Cleave
                                        options={{
                                            blocks: [2, 4, 4],
                                            delimiters: ['', '-', ''],
                                            numericOnly: true,
                                            uppercase: true,
                                        }}
                                        className="form-control telphone_with_code"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-0">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">US Telephone</label>
                                <Col lg={6} md={12} sm={12}>
                                    {/* <input type="text" className="form-control us_telephone" data-mask="(999) 999-9999" /> */}
                                    <Cleave
                                        options={{
                                            blocks: [3, 3, 4],
                                            delimiters: ['(', ')', '-', ' '],
                                            numericOnly: true,
                                            uppercase: true,
                                        }}
                                        placeholder="(999) 999-9999"
                                        className="form-control us_telephone"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default InputPhoneNo;