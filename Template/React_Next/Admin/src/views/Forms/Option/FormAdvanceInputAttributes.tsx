import React from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';

const FormAdvanceInputAttributes = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Advance Input Attributes</h5>
                </Card.Header>
                <Form onSubmit={(event: any) => event.preventDefault()}>
                    <Card.Body>
                        <Alert variant="primary">
                            <div className="media align-items-center">
                                <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                                <div className="media-body ms-3">
                                    Examples of <code>maxlength, min, max, step, pattern, list</code> attributes of Input.
                                    <br />
                                    Submit the form for checking attribute functionality.
                                </div>
                            </div>
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-max-length">Max Length</Form.Label>
                            <Form.Control type="text" placeholder="Enter PIN" id="example-max-length" maxLength={4} />
                            <Form.Text>maxlength set to 4 characters</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-datemax">Date</Form.Label>
                            <Form.Control type="date" id="example-datemax" max="1979-12-31" />
                            <Form.Text>Enter a date before 1980-01-01</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-datemin">Date</Form.Label>
                            <Form.Control type="date" id="example-datemin" min="2000-01-02" />
                            <Form.Text>Enter a date after 2000-01-01</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-quantity">Quantity</Form.Label>
                            <Form.Control type="number" id="example-quantity" min="1" max="5" />
                            <Form.Text>i.e. between 1 and 5</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-steps">Points</Form.Label>
                            <Form.Control type="number" id="example-steps" step="3" defaultValue="1" />
                            <Form.Text>step set to 3</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="example-country-code">Country code</Form.Label>
                            <Form.Control
                                type="text"
                                id="example-country-code"
                                pattern="[A-Za-z]{3}"
                                title="Three letter country code"
                            />
                            <Form.Text><code>pattern</code> attribute - three-letter country code</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label htmlFor="example-data-list">List (Browsers)</Form.Label>
                            <Form.Control type="text" id="example-data-list" list="browsers" />
                            <datalist id="browsers">
                                <option value="Internet Explorer"></option>
                                <option value="Firefox"></option>
                                <option value="Chrome"></option>
                                <option value="Opera"></option>
                                <option value="Safari"></option>
                            </datalist>
                            <Form.Text>The datalist tag is not supported in Safari 12.0 (or earlier).</Form.Text>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="pt-0">
                        <Button type="submit" variant="primary" className="me-2">
                            Submit
                        </Button>
                        <Button type="reset" variant="light">
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </React.Fragment>
    );
}

export default FormAdvanceInputAttributes;