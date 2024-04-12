import React from "react";
import { Col, Form, Card } from 'react-bootstrap';

const FormCustomRadio = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Custom radio</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group row">
                            <Form.Label column sm={3} className="text-sm-end">
                                Radio
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="radio"
                                    name="group4"
                                    id="flexCheckDefault"
                                    label="Default radio"
                                    defaultChecked
                                    className="mb-2"
                                />
                                <Form.Check
                                    type="radio"
                                    name="group4"
                                    id="flexCheckChecked"
                                    label="Checked radio"
                                    defaultChecked
                                    className="mb-2"
                                />
                                <Form.Check
                                    type="radio"
                                    name="group41"
                                    id="flexCheckDisabled"
                                    label="Disabled radio"
                                    disabled
                                    className="mb-2"
                                />
                                <Form.Check
                                    type="radio"
                                    name="group41"
                                    id="flexCheckCheckedDisabled"
                                    label="Disabled checked radio"
                                    defaultChecked
                                    disabled
                                    className="mb-2"
                                />
                            </Col>
                        </div>
                        <div className="form-group row mb-2">
                            <Form.Label column sm={3} className="text-sm-end">
                                Inline
                            </Form.Label>
                            <Col sm={9}>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh1" />
                                    <Form.Check.Label htmlFor="customCheckinlh1"> 1 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh2" />
                                    <Form.Check.Label htmlFor="customCheckinlh2"> 2 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh3" />
                                    <Form.Check.Label htmlFor="customCheckinlh3"> 3 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh4" disabled />
                                    <Form.Check.Label htmlFor="customCheckinlh4"> 4 (disabled) </Form.Check.Label>
                                </div>
                                <small className="form-text d-block text-muted">
                                    Add <code>.form-check-inline</code> to any{' '}
                                    <code>.custom-control</code>
                                </small>
                            </Col>
                        </div>
                        <div className="form-group row mb-0">
                            <Form.Label column sm={3} className="text-sm-end">
                                Inline Radio Checked State
                            </Form.Label>
                            <Col sm={9}>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh1" />
                                    <Form.Check.Label htmlFor="customCheckinlh1"> 1 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh2" />
                                    <Form.Check.Label htmlFor="customCheckinlh2"> 2 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh3" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckinlh3"> 3 </Form.Check.Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Form.Check.Input type="radio" name="group5" value="" id="customCheckinlh4" disabled />
                                    <Form.Check.Label htmlFor="customCheckinlh4"> 4 (disabled) </Form.Check.Label>
                                </div>
                                <small className="form-text d-block text-muted">
                                    Add <code>checked</code> attribute to any{' '}
                                    <code>.form-check-input</code>
                                </small>
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormCustomRadio;