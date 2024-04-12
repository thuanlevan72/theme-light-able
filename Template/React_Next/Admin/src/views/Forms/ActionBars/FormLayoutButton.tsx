import React from "react";
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const FormLayoutButton = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h5>Layout With side action button</h5>
                    <hr />
                    <Form>
                        <div className="form-group mb-0">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                            <Form.Text className="text-muted">Please enter your Name</Form.Text>
                        </div>
                    </Form>
                    <hr />
                    <Row>
                        <Col lg={6}>
                            <Button type="reset" variant="light-primary" className="me-1">Save</Button>
                            <Button type="reset" variant="light-secondary">Clear</Button>
                        </Col>
                        <Col lg={6} className="text-end">
                            <Button type="reset" variant="light-danger">Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormLayoutButton;