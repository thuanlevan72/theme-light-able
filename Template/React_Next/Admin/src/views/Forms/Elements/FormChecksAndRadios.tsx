import React from "react";
import { Card, Form, Col, Row } from 'react-bootstrap';

const FormChecksAndRadios = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Checks and Radios</h5>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <h5>Checkboxes</h5>
                            <hr />
                            <Form.Check type="checkbox" id="customCheck1" label="Check this custom checkbox" />
                        </Col>
                        <Col md={6}>
                            <h5>Switches</h5>
                            <hr />
                            <Form.Check type="switch" id="customswitch1" label="Check this custom Switches" />
                        </Col>
                        <Col md={6}>
                            <h5>Radios</h5>
                            <hr />
                            <Form.Check
                                type="radio"
                                id="flexRadioDefault1"
                                name="flexRadioDefault"
                                label="Default radio"
                            />
                            <Form.Check
                                type="radio"
                                id="flexRadioDefault2"
                                name="flexRadioDefault"
                                label="Default checked radio"
                                defaultChecked
                            />
                            <h5 className="mt-3">Inline</h5>
                            <hr />
                            <div className="d-flex">
                                <Form.Check
                                    inline
                                    type="radio"
                                    id="flexRadioDefault11"
                                    name="flexRadioDefaultInline"
                                    label="Default radio"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    id="flexRadioDefault12"
                                    name="flexRadioDefaultInline"
                                    label="Default checked radio"
                                    defaultChecked
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h5>Range</h5>
                            <hr />
                            <Form.Label htmlFor="customRange1">Example range</Form.Label>
                            <Form.Range id="customRange1" />
                            <Form.Label htmlFor="customRange2">Min and max</Form.Label>
                            <Form.Range min="0" max="5" id="customRange2" />
                            <Form.Label htmlFor="customRange3">Steps</Form.Label>
                            <Form.Range min="0" max="5" step="0.5" id="customRange3" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormChecksAndRadios;