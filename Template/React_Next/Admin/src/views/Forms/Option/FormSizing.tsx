import React from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';

const FormSizing = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Sizing</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3">
                                Input sizing using <code>.form-control-lg</code> and <code>.form-control-sm</code>
                                class.
                            </div>
                        </div>
                    </Alert>
                    <div className="form-group mb-3">
                        <Form.Control type="text" placeholder=".form-control-sm" className="form-control-sm" />
                        <small><code>.form-control-sm</code></small>
                    </div>
                    <div className="form-group mb-3">
                        <Form.Control type="text" placeholder="Default Input" />
                        <small><code>.form-control</code></small>
                    </div>
                    <div className="form-group mb-3">
                        <Form.Control type="text" placeholder=".form-control-lg" className="form-control-lg" />
                        <small><code>.form-control-lg</code></small>
                    </div>
                    <hr />
                    <div className="form-group mb-3">
                        <Form.Label>Large select</Form.Label>
                        <Form.Select className="form-select form-select-lg">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Form.Select>
                    </div>
                    <div className="form-group mb-3">
                        <Form.Label>Default select</Form.Label>
                        <Form.Select className="form-select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </Form.Select>
                    </div>
                    <div className="form-group mb-0">
                        <Form.Label>Small select</Form.Label>
                        <Form.Select className="form-select form-select-sm">
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </Form.Select>
                    </div>
                </Card.Body>
                <Card.Footer className="pt-0">
                    <Button variant="primary" className="me-2">
                        Submit
                    </Button>
                    <Button variant="light" type="reset">
                        Reset
                    </Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default FormSizing;