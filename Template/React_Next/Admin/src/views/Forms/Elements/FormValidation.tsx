import React, { useState } from "react";
import { Card, Col, Form, Row, InputGroup, FormGroup, Button } from "react-bootstrap";

const FormValidation = () => {
    const [validated, setValidated] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Validation Form</h5>
                </Card.Header>
                <Card.Body>
                    <Form
                        className="needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Row>
                            <Col md={4} className="mb-3">
                                <Form.Label htmlFor="validationCustom01">First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="validationCustom01"
                                    name="firstName"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Col>
                            <Col md={4} className="mb-3">
                                <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="validationCustom02"
                                    name="lastName"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Col>
                            <Col md={4} className="mb-3">
                                <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                                <InputGroup>
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <Form.Control
                                        type="text"
                                        id="validationCustomUsername"
                                        name="username"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Label htmlFor="validationCustom03">City</Form.Label>
                                <Form.Control type="text" id="validationCustom03" placeholder="City" required
                                />
                                <div className="invalid-feedback"> Please provide a valid city. </div>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Form.Label htmlFor="validationCustom04">State</Form.Label>
                                <Form.Control type="text" id="validationCustom04" placeholder="State" required
                                />
                                <div className="invalid-feedback"> Please provide a valid state. </div>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                                <Form.Control type="text" id="validationCustom05" placeholder="Zip" required
                                />
                                <div className="invalid-feedback"> Please provide a valid zip. </div>
                            </Col>
                        </Row>

                        <div className="form-group">
                            <Form.Check>
                                <Form.Check.Input
                                    type="checkbox"
                                    id="invalidCheck"
                                    name="agree"
                                    required
                                />
                                <Form.Check.Label htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </Form.Check.Label>
                                <Form.Control.Feedback type="invalid">
                                    You must agree before submitting.
                                </Form.Control.Feedback>
                            </Form.Check>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit form
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default FormValidation;
