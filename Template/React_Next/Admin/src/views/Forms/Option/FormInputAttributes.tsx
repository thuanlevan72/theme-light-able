import React from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';

const FormInputAttributes = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Input Attributes</h5>
                </Card.Header>
                <Form>
                    <Card.Body>
                        <Alert variant="primary">
                            <div className="media align-items-center">
                                <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                                <div className="media-body ms-3">
                                    Examples of <code>autofocus, value, readonly, disabled, required </code>
                                    attributes in Input.
                                </div>
                            </div>
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Label>Auto focus</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoFocus />
                            <Form.Text>autofocus on page load</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Value</Form.Label>
                            <Form.Control type="text" defaultValue="John Doe" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-required">Required</Form.Label>
                            <Form.Control type="text" id="example-required" required />
                            <Form.Text>Submit the form to see it in action</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-read-only">Readonly</Form.Label>
                            <Form.Control type="text" defaultValue="demo@email.com" id="example-read-only" readOnly />
                            <Form.Text>The input <code>readonly</code> attribute specifies that an input field is read-only</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-disabled">Disabled</Form.Label>
                            <Form.Control type="text" defaultValue="26" id="example-disabled" disabled />
                            <Form.Text>The value of a <code>disabled</code> input field will not be sent when submitting the form</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label htmlFor="example-disabled-select">Disabled select</Form.Label>
                            <Form.Select id="example-disabled-select" disabled>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Select>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="pt-0">
                        <Button variant="primary" className="me-2" type="submit">
                            Submit
                        </Button>
                        <Button variant="light" type="reset">
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </React.Fragment>
    );
}

export default FormInputAttributes;