import React from "react";
import { Row, Col, Form, FloatingLabel, Card } from 'react-bootstrap';


const FormFloatingLabels = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Floating labels</h5>
                </Card.Header>
                <Card.Body>
                    <h5>Form controls</h5>
                    <hr />
                    <Form>
                        <Row className="g-4">
                            <Col md={6}>
                                <FloatingLabel controlId="floatingInput" label="Email address">
                                    <Form.Control type="email" placeholder="Email address" />
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                    <h5 className="mt-3">Default Value</h5>
                    <hr />
                    <Row className="g-4">
                        <Col md={6}>
                            <Form>
                                <FloatingLabel controlId="floatingInputValue" label="Input with value">
                                    <Form.Control type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                                </FloatingLabel>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId="floatingpassword1" label="Password">
                                <Form.Control type="password" placeholder="password" defaultValue="Password" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <h5 className="mt-3">Validation styles</h5>
                    <hr />
                    <Row className="g-4">
                        <Col md={6}>
                            <Form>
                                <FloatingLabel controlId="floatingInputInvalid" label="Valid input">
                                    <Form.Control type="email" placeholder="name@example.com" defaultValue="test@example.com" isValid={true} />
                                </FloatingLabel>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form>
                                <FloatingLabel controlId="floatingInputInvalid1" label="Invalid input">
                                    <Form.Control type="email" placeholder="name@example.com" defaultValue="test@example.com" isInvalid />
                                </FloatingLabel>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormFloatingLabels;