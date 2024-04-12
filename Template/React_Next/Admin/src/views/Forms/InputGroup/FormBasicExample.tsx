import React from "react";
import { Form, Button, Card, Alert, InputGroup } from 'react-bootstrap';

const FormBasicExample = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Basic example</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3">
                                Place one add-on or button on either side of an input. You may also place one on both sides of an input.
                            </div>
                        </div>
                    </Alert>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control type="text" placeholder="Username" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Recipient's username" />
                            <InputGroup.Text>@example.com</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                            <Form.Control type="text" id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="text" placeholder="Rate" aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>With textarea</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>With textarea</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="multiple-addons">Multiple Addons</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <InputGroup.Text>0.00</InputGroup.Text>
                            <Form.Control type="text" id="multiple-addons" />
                        </InputGroup>
                        <InputGroup>
                            <Form.Control type="text" />
                            <InputGroup.Text>$</InputGroup.Text>
                            <InputGroup.Text>0.00</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-0">
                        <Form.Label htmlFor="multiple-inputs">Multiple Inputs</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>First and last name</InputGroup.Text>
                            <Form.Control type="text" id="multiple-inputs" />
                            <Form.Control type="text" aria-label="Last name" />
                        </InputGroup>
                    </Form.Group>
                </Card.Body>
                <Card.Footer className="pt-0">
                    <Button variant="primary" className="me-2">Submit</Button>
                    <Button variant="light">Reset</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default FormBasicExample;