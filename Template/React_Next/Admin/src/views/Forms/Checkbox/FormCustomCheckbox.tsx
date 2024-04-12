import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';

const FormCustomCheckbox = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Custom Checkbox</h5>
                </Card.Header>
                <Card.Body>
                    <div className="form-group row">
                        <Form.Label column sm={3} className="text-sm-end pt-0">
                            Checkboxes
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Check className="mb-2"
                                type="checkbox"
                                id="flexCheckDefault"
                                label="Default checkbox"
                            />
                            <Form.Check className="mb-2"
                                type="checkbox"
                                id="flexCheckChecked"
                                label="Checked checkbox"
                                defaultChecked
                            />
                            <Form.Check className="mb-2"
                                type="checkbox"
                                id="flexCheckDisabled"
                                label="Disabled checkbox"
                                disabled
                            />
                            <Form.Check className="mb-2"
                                type="checkbox"
                                id="flexCheckCheckedDisabled"
                                label="Disabled checked checkbox"
                                defaultChecked
                                disabled
                            />
                        </Col>
                    </div>
                    <div className="form-group row">
                        <Form.Label column sm={3} className="text-sm-end pt-0">
                            Inline
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Check
                                inline
                                type="checkbox"
                                id="customCheckinlh1"
                                label="1"
                            />
                            <Form.Check
                                inline
                                type="checkbox"
                                id="customCheckinlh2"
                                label="2"
                            />
                            <Form.Check
                                inline
                                type="checkbox"
                                id="customCheckinlh3"
                                label="3"
                                defaultChecked
                            />
                            <Form.Check
                                inline
                                type="checkbox"
                                id="customCheckinlh4"
                                label="4 (disabled)"
                                disabled
                            />
                            <small className="form-text text-muted">
                                Add <code>.form-check-inline</code> to any{' '}
                                <code>.custom-control</code>
                            </small>
                        </Col>
                    </div>
                    <div className="form-group row mb-0">
                        <Form.Label column sm={3} className="text-sm-end pt-0">
                            Indeterminate
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Check
                                type="checkbox"
                                id="custom_Check_int"
                                label="Indeterminate checkbox"
                            />
                            <small className="form-text text-muted">
                                <code>document.querySelector(&apos;your-checkbox&apos;).indeterminate=!0;</code>
                            </small>
                        </Col>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormCustomCheckbox;