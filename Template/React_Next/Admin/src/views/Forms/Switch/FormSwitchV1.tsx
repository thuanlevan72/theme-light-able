import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';

const FormSwitchV1 = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Switch [ v1 ]</h5>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4 switch-demo">
                        <Col md={4}>
                            <div className="form-group mb-0">
                                <h5>Default Switch</h5>
                                <hr />
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input className="input-primary" type="checkbox" id="customswitchv1-1" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-1">primary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-secondary" id="customswitchv1-2" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-2">secondary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-success" id="customswitchv1-3" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-3">success</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-danger" id="customswitchv1-4" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-4">danger</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-warning" id="customswitchv1-5" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-5">warning</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-info" id="customswitchv1-6" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-6">info</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-switch mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-dark" id="customswitchv1-7" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv1-7">dark</ Form.Check.Label>
                                </Form.Check>
                                <small className="form-text text-muted">Use class <code>input-[color name]</code>in <code>&lt;input&gt;</code> tag</small>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group mb-0">
                                <h5>Custom Switch</h5>
                                <hr />
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input className="input-primary" type="checkbox" id="customswitchv2-1" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-1">primary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-secondary" id="customswitchv2-2" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-2">secondary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-success" id="customswitchv2-3" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-3">success</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-danger" id="customswitchv2-4" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-4">danger</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-warning" id="customswitchv2-5" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-5">warning</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-info" id="customswitchv2-6" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-6">info</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-dark" id="customswitchv2-7" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchv2-7">dark</ Form.Check.Label>
                                </Form.Check>
                                <small className="form-text text-muted">Use class <code>custom-switch-v1</code>in <code>&lt;div&gt;</code> tag</small>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group mb-0">
                                <h5>Color States</h5>
                                <hr />
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-primary" id="customswitchlightv1-1" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-1">primary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-secondary" id="customswitchlightv1-2" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-2">secondary</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-success" id="customswitchlightv1-3" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-3">success</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-danger" id="customswitchlightv1-4" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-4">danger</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-warning" id="customswitchlightv1-5" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-5">warning</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-info" id="customswitchlightv1-6" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-6">info</ Form.Check.Label>
                                </Form.Check>
                                <Form.Check className=" form-switch custom-switch-v1 mb-2">
                                    <Form.Check.Input type="checkbox" className="  input-light-dark" id="customswitchlightv1-7" defaultChecked />
                                    <Form.Check.Label htmlFor="customswitchlightv1-7">dark</ Form.Check.Label>
                                </Form.Check>
                                <small className="form-text text-muted">Use class <code>input-light-[color name]</code></small>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSwitchV1;