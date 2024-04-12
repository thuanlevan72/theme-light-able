import React from "react";

import { Card, Form, InputGroup, Button } from 'react-bootstrap';

const FormCustom = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Custom Forms</h5>
                </Card.Header>
                <Card.Body>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h5>Custom Select</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Options</InputGroup.Text>
                                <Form.Select id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Select id="inputGroupSelect02">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <InputGroup.Text >Options</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary">Button</Button>
                                <Form.Select
                                    id="inputGroupSelect03"
                                    aria-label="Example select with button addon"
                                // defaultValue="Choose..."
                                >
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </InputGroup>
                            <InputGroup>
                                <Form.Select
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                // defaultValue="Choose..."
                                >
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Button variant="outline-secondary">Button</Button>
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <h5>Custom File Input</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <InputGroup.Text >Upload</InputGroup.Text>
                                <Form.Control type="file" id="inputGroupFile01" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control type="file" id="inputGroupFile02" />
                                <InputGroup.Text >Upload</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" id="inputGroupFileAddon03">
                                    Button
                                </Button>
                                <Form.Control
                                    type="file"
                                    id="inputGroupFile03"
                                    aria-describedby="inputGroupFileAddon03"
                                    aria-label="Upload"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    type="file"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                />
                                <Button variant="outline-secondary" id="inputGroupFileAddon04">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormCustom;