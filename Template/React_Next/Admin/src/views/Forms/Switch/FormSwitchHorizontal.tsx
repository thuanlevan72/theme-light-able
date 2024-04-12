import React from "react";
import { Col, Form, Card } from 'react-bootstrap';

const FormSwitchHorizontal = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Switch in Horizontal Form</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group row">
                            <label className="col-sm-3 text-sm-end col-form-label">Switches</label>
                            <Col sm={9}>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckdefh1" />
                                    <Form.Check.Label htmlFor="customCheckdefh1">Default</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckdefh2" />
                                    <Form.Check.Label htmlFor="customCheckdefh2">Option 2</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckdefh3" disabled />
                                    <Form.Check.Label htmlFor="customCheckdefh3">Disabled</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckdefh4" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckdefh4">Checked</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-sm-end col-form-label">Inline Switches</label>
                            <Col sm={9}>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh1" />
                                    <Form.Check.Label htmlFor="customCheckinlh1">Inline 1</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh2" />
                                    <Form.Check.Label htmlFor="customCheckinlh2">Inline 2</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh3" />
                                    <Form.Check.Label htmlFor="customCheckinlh3">Inline 3</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </div>
                        <div className="form-group mb-0 row">
                            <label className="col-sm-3 text-sm-end col-form-label">Inline States</label>
                            <Col sm={9}>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh4" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckinlh4">Inline 1</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh5" />
                                    <Form.Check.Label htmlFor="customCheckinlh5">Inline 2</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                    <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinlh6" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckinlh6">Inline 3</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSwitchHorizontal;