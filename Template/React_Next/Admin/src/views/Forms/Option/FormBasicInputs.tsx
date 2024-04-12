import React from "react";
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const FormBasicInputs = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Basic Inputs</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3"> Basic HTML form components with custom style. </div>
                        </div>
                    </Alert>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="email@company.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text>Your password must be between 8 and 30 characters.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select</Form.Label>
                            <Form.Select id="exampleSelect1">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Multiple select</Form.Label>
                            <Form.Select multiple id="exampleSelect2">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Select>
                            <Form.Text>Hold shift or press ctrl for multi-select.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} id="exampleTextarea" />
                        </Form.Group>
                    </Form>
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

export default FormBasicInputs;