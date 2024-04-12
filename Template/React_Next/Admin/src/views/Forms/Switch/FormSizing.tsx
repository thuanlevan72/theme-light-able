import React from "react";
import { Col, Form, Card } from 'react-bootstrap';

const FormSizing = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Sizing</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group">
                            <label>Small Switches</label>
                            <Form.Check className="  form-switch switch-sm">
                                <Form.Check.Input type="checkbox" className=" input-primary f-12" id="customCheckdefcol1" />
                                <Form.Check.Label htmlFor="customCheckdefcol1">Default</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-sm">
                                <Form.Check.Input type="checkbox" className=" input-primary f-12" id="customCheckdefcol2" />
                                <Form.Check.Label htmlFor="customCheckdefcol2">Option 2</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-sm">
                                <Form.Check.Input type="checkbox" className=" input-primary f-12" id="customCheckdefcol3" disabled />
                                <Form.Check.Label htmlFor="customCheckdefcol3">Disabled</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-sm">
                                <Form.Check.Input type="checkbox" className=" input-primary f-12" id="customCheckdefcol4" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckdefcol4">Checked</Form.Check.Label>
                            </Form.Check>
                            <small className="form-text text-muted">Some help text goes here</small>
                        </div>
                        <div className="form-group">
                            <label>Large Switches</label>
                            <Form.Check className="  form-switch switch-lg">
                                <Form.Check.Input type="checkbox" className=" input-primary f-16" id="customCheckdefout1" />
                                <Form.Check.Label htmlFor="customCheckdefout1">Default</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-lg">
                                <Form.Check.Input type="checkbox" className=" input-primary f-16" id="customCheckdefout2" />
                                <Form.Check.Label htmlFor="customCheckdefout2">Option 2</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-lg">
                                <Form.Check.Input type="checkbox" className=" input-primary f-16" id="customCheckdefout3" disabled />
                                <Form.Check.Label htmlFor="customCheckdefout3">Disabled</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch switch-lg">
                                <Form.Check.Input type="checkbox" className=" input-primary f-16" id="customCheckdefout4" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckdefout4">Checked</Form.Check.Label>
                            </Form.Check>
                            <small className="form-text text-muted">Some help text goes here</small>
                        </div>
                        <div className="form-group">
                            <label>Color States</label>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-primary" id="customCheckc1" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc1">primary</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-secondary" id="customCheckc2" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc2">secondary</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-success" id="customCheckc3" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc3">success</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-danger" id="customCheckc4" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc4">danger</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-warning" id="customCheckc5" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc5">warning</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-info" id="customCheckc6" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc6">info</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-dark" id="customCheckc7" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckc7">dark</Form.Check.Label>
                            </Form.Check>
                            <small className="form-text text-muted">Some help text goes here</small>
                        </div>
                        <div className="form-group mb-0">
                            <label>Color States</label>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-primary" id="customCheckclight1" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight1">primary</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-secondary" id="customCheckclight2" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight2">secondary</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-success" id="customCheckclight3" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight3">success</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-danger" id="customCheckclight4" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight4">danger</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-warning" id="customCheckclight5" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight5">warning</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-info" id="customCheckclight6" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight6">info</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="  form-switch">
                                <Form.Check.Input type="checkbox" className=" input-light-dark" id="customCheckclight7" defaultChecked />
                                <Form.Check.Label htmlFor="customCheckclight7">dark</Form.Check.Label>
                            </Form.Check>
                            <small className="form-text text-muted">Some help text goes here</small>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSizing;