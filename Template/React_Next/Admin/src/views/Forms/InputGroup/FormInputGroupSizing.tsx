import React from "react";
import { Form, Button, Card, Alert, InputGroup } from 'react-bootstrap';

const FormInputGroupSizing = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Input Group Sizing</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3">
                                Add sizing class <code>.input-group-sm, .input-group-lg</code>
                            </div>
                        </div>
                    </Alert>
                    <Form.Group className="mb-3">
                        <InputGroup size="sm">
                            <InputGroup.Text>Small</InputGroup.Text>
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>Default</InputGroup.Text>
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-0">
                        <InputGroup size="lg">
                            <InputGroup.Text>Large</InputGroup.Text>
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>
                </Card.Body>
                <Card.Footer className="pt-0">
                    <Button variant="primary" className="me-2">Submit</Button>
                    <Button variant="secondary">Cancel</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default FormInputGroupSizing;