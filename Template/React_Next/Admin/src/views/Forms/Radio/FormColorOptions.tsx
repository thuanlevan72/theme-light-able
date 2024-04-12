import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';

const FormColorOptions = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Color Options</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="g-4">
                            <Col md={6}>
                                <div className="form-group mb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-primary" type="radio" id="customCheckc1" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc1">primary</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-secondary" type="radio" id="customCheckc2" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc2">secondary</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-success" type="radio" id="customCheckc3" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc3">success</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-danger" type="radio" id="customCheckc4" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc4">danger</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-warning" type="radio" id="customCheckc5" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc5">warning</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-info" type="radio" id="customCheckc6" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc6">info</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className="input-dark" type="radio" id="customCheckc7" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc7">dark</Form.Check.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group mb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-primary" type="radio" id="customCheckclight1" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight1">primary light</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-secondary" type="radio" id="customCheckclight2" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight2">secondary light</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-success" type="radio" id="customCheckclight3" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight3">success light</Form.Check.Label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-danger" type="radio" id="customCheckclight4" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight4">danger light</Form.Check.Label>

                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-warning" type="radio" id="customCheckclight5" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight5">warning light</Form.Check.Label>

                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="input-light-info" type="radio" id="customCheckclight6" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight6">info light</Form.Check.Label>

                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className="input-light-dark" type="radio" id="customCheckclight7" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight7">dark light</Form.Check.Label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormColorOptions;