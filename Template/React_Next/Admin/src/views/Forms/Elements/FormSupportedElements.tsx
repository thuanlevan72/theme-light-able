import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const FormSupportedElements = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Supported Elements</h5>
                </Card.Header>
                <Card.Body>
                    <Form className="was-validated">
                        <div className="form-group">
                            <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                            <Form.Control
                                as="textarea"
                                id="validationTextarea"
                                placeholder="Required example textarea"
                                required
                                isInvalid
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a message in the textarea.
                            </Form.Control.Feedback>
                        </div>

                        <div className="form-group mb-3">
                            <Form.Check
                                type="checkbox"
                                id="validationFormCheck1"
                                label="Check this checkbox"
                                required
                                isInvalid
                            />
                            <Form.Control.Feedback type="invalid">
                                Example invalid feedback text
                            </Form.Control.Feedback>
                        </div>

                        <div className="form-group mb-3">
                            <Form.Check
                                type="radio"
                                id="validationFormCheck2"
                                label="Toggle this radio"
                                name="radio-stacked"
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <Form.Check
                                type="radio"
                                id="validationFormCheck3"
                                label="Or toggle this other radio"
                                name="radio-stacked"
                                required
                                isInvalid
                            />
                            <Form.Control.Feedback type="invalid">
                                More example invalid feedback text
                            </Form.Control.Feedback>
                        </div>

                        <div className="form-group mb-3">
                            <Form.Select required aria-label="select example">
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Example invalid select feedback
                            </Form.Control.Feedback>
                        </div>

                        <div className="form-group mb-3">
                            <Form.Control
                                type="file"
                                aria-label="file example"
                                required
                                isInvalid
                            />
                            <Form.Control.Feedback type="invalid">
                                Example invalid form file feedback
                            </Form.Control.Feedback>
                        </div>

                        <div className="form-group mb-3">
                            <Button variant="primary" type="submit">
                                Submit form
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSupportedElements;
