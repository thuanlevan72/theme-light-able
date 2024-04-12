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
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc1">primary</Form.Check.Label>
                                    </Form.Check>

                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-secondary" type="checkbox" id="customCheckc2" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc2">secondary</Form.Check.Label>
                                    </Form.Check>

                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-success" type="checkbox" id="customCheckc3" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc3">success</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-danger" type="checkbox" id="customCheckc4" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc4">danger</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-warning" type="checkbox" id="customCheckc5" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc5">warning</Form.Check.Label>
                                    </Form.Check>

                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-info" type="checkbox" id="customCheckc6" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc6">info</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-dark" type="checkbox" id="customCheckc7" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckc7">dark</Form.Check.Label>
                                    </Form.Check>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group mb-0">
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-primary" type="checkbox" id="customCheckclight1" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight1">primary light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-secondary" type="checkbox" id="customCheckclight2" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight2">secondary light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-success" type="checkbox" id="customCheckclight3" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight3">success light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-danger" type="checkbox" id="customCheckclight4" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight4">danger light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-warning" type="checkbox" id="customCheckclight5" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight5">warning light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-info" type="checkbox" id="customCheckclight6" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight6">info light</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="mb-2">
                                        <Form.Check.Input className="input-light-dark" type="checkbox" id="customCheckclight7" defaultChecked />
                                        <Form.Check.Label htmlFor="customCheckclight7">dark light</Form.Check.Label>
                                    </Form.Check>
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