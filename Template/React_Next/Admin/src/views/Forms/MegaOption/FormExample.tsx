import { Row, Col, Form, Card } from 'react-bootstrap';

const FormExample = () => {
    return (
        <Card>
            <Card.Header>
                <h5>Example</h5>
            </Card.Header>
            <Card.Body>
                <Form>
                    <div className="form-group mb-0">
                        <Form.Label>Choose Delivery Type</Form.Label>
                        <Row className="mb-2">
                            <Col lg={6}>
                                <div className="border card p-3">
                                    <Form.Check>
                                        <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef1" />
                                        <Form.Check.Label className="d-block" htmlFor="customCheckdef1">
                                            <span>
                                                <span className="h5 d-block">
                                                    <strong className="float-end">
                                                        <span className="badge bg-light-primary">Free</span>
                                                    </strong>
                                                    Trial plan
                                                </span>
                                                <span className="f-12 text-muted">
                                                    Free server basic collection
                                                    <br />
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
                                        <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef2" />
                                        <Form.Check.Label className="d-block" htmlFor="customCheckdef2">
                                            <div>
                                                <div className="h5 d-block">
                                                    <strong className="float-end">$&nbsp;12.46</strong>
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
                        <hr />
                        <Form.Label className="mb-2 pt-2">Membership Plan</Form.Label>
                        <Row>
                            <Col lg={6}>
                                <div className="my-2">
                                    <Form.Check>
                                        <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckmem1" />
                                        <Form.Check.Label className="d-block" htmlFor="customCheckmem1">
                                            <div>
                                                <div className="h5 d-block">SUPERNET 50</div>
                                                <div className="f-12 text-muted">
                                                    360 days Speed up to 50 Mbps Unlimited (Rs. 5094)
                                                </div>
                                            </div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="my-2">
                                    <Form.Check>
                                        <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckmem2" />
                                        <Form.Check.Label htmlFor="customCheckmem2">
                                            <div>
                                                <div className="h5 d-block">SUPERSONIC 75</div>
                                                <div className="f-12 text-muted">
                                                    360 days Speed up to 75 Mbps 6000 GB (Rs. 6042)
                                                </div>
                                            </div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FormExample;
