import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';


const FormHorizontal = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Horizontal Form Example</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group row">
                            <Form.Label className="col-sm-3 col-form-label">Choose Delivery Type</Form.Label>
                            <Col sm={9}>
                                <Row>
                                    <Col lg={6}>
                                        <div className="border card p-3">
                                            <Form.Check>
                                                <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdefhor1" />
                                                <Form.Check.Label className="d-block" htmlFor="customCheckdefhor1">
                                                    <span>
                                                        <span className="h5 d-block">
                                                            <strong className="float-end">
                                                                <span className="badge bg-light-primary">Free</span>
                                                            </strong>
                                                            Trial plan
                                                        </span>
                                                        <span className="f-12 text-muted">
                                                            Free server basic collection<br />
                                                            (5 Items are allowed to download)
                                                        </span>
                                                    </span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="border card p-3">
                                            <Form.Check>
                                                <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdefhor2" />
                                                <Form.Check.Label htmlFor="customCheckdefhor2">
                                                    <div>
                                                        <div className="h5 d-block">
                                                            <strong className="float-end">$&nbsp;8.00</strong>
                                                            Premium plan
                                                        </div>
                                                        <div className="f-12 text-muted">
                                                            Free server unlimited approx 255k+ Premium collection<br />
                                                            (Download unlimited premium items)
                                                        </div>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        <hr />
                        <div className="form-group row mb-0 pt-3">
                            <Form.Label className="col-sm-3 col-form-label">Membership :</Form.Label>
                            <Col sm={9}>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Check className="my-2">
                                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckmemhor1" />
                                            <Form.Check.Label htmlFor="customCheckmemhor1">
                                                <div>
                                                    <div className="h5 d-block">SUPERNET 50</div>
                                                    <div className="f-12 text-muted">360 days Speed upto 50 Mbps Unlimited( Rs. 5094 )</div>
                                                </div>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check className="my-2">
                                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckmemhor2" />
                                            <Form.Check.Label htmlFor="customCheckmemhor2">
                                                <div>
                                                    <div className="h5 d-block">SUPERSONIC 75</div>
                                                    <div className="f-12 text-muted">360 days Speed upto 75 Mbps 6000 GB( Rs. 6042 )</div>
                                                </div>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormHorizontal;