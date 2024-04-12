import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';

const FormSelect = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Select</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            <Form.Floating>
                                <Form.Select id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <label htmlFor="floatingSelect">Works with selects</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    <h5 className="mt-3">Validation styles</h5>
                    <hr />
                    <Row className="g-4">
                        <Col md={6}>
                            <Form.Floating className="mb-0">
                                <Form.Select className="is-valid" id="floatingselect1" aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <label htmlFor="floatingselect1">Comments</label>
                            </Form.Floating>
                        </Col>
                        <Col md={6}>
                            <Form.Floating className="mb-0">
                                <Form.Select className="is-valid" id="floatingselect2" aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <label htmlFor="floatingselect2">Comments</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSelect;