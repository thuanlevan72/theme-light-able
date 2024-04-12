import React from "react";
import { Card, Form, Button } from 'react-bootstrap';

const HorizontalForm = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Horizontal Form</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group row mb-0">
                            <Form.Label className="col-lg-4 col-form-label">Name:</Form.Label>
                            <div className="col-lg-6">
                                <Form.Control type="text" placeholder="Enter Name" />
                                <Form.Text className="text-muted">Please enter your Name</Form.Text>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer className="bg-light border-0">
                    <div className="row">
                        <label className="col-lg-4"></label>
                        <div className="col-lg-8">
                            <Button variant="primary" className="me-2">Submit</Button>
                            <Button variant="secondary">Clear</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default HorizontalForm;