import React from "react";
import { Row, Col, Form, FloatingLabel, Card } from 'react-bootstrap';

const FormTextareas = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Textareas</h5>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <h5>Default style</h5>
                            <hr />
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control as="textarea" id="floatingTextarea" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <h5>Custom height</h5>
                            <hr />
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control as="textarea" id="floatingTextarea2" style={{ height: '100px' }} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <h5 className="mt-3">Validation styles</h5>
                    <hr />
                    <Row className="g-4">
                        <Col md={6}>
                            <Form>
                                <Form.Group className="mb-0">
                                    <Form.Label>Valid textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" id="floatingTextarea1" className="is-valid" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form>
                                <Form.Group className="mb-0">
                                    <Form.Label>Invalid textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" id="floatingTextarea21" className="is-invalid" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormTextareas;