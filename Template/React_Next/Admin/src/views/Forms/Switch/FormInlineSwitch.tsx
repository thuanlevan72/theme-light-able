import React from "react";
import { Form, Card } from 'react-bootstrap';

const FormInlineSwitch = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Inline Switch</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group">
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl1" />
                                <Form.Check.Label htmlFor="customCheckinl1">Inline 1</ Form.Check.Label>
                            </Form.Check>
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl2" />
                                <Form.Check.Label htmlFor="customCheckinl2">Inline 2</ Form.Check.Label>
                            </Form.Check>
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl3" />
                                <Form.Check.Label htmlFor="customCheckinl3">Inline 3</ Form.Check.Label>
                            </Form.Check>
                        </div>
                        <div className="form-group mb-0">
                            <label className="d-block text-muted mb-3">With Checked State</label>
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl4" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckinl4">Inline 1</ Form.Check.Label>
                            </Form.Check>
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl5" />
                                <Form.Check.Label htmlFor="customCheckinl5">Inline 2</ Form.Check.Label>
                            </Form.Check>
                            <Form.Check className=" form-switch custom-switch-v1 form-check-inline">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckinl6" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckinl6">Inline 3</ Form.Check.Label>
                            </Form.Check>
                            <br />
                            <small className="form-text text-muted">Use class <code>form-check-inline</code></small>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormInlineSwitch;