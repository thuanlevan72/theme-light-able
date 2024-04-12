import React from "react";
import { Card, Form, Button } from 'react-bootstrap';

const SimpleActionBar = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Simple Action Bar</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group mb-0">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                            <Form.Text className="text-muted">Please enter your Name</Form.Text>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" className="me-2">Submit</Button>
                    <Button variant="secondary">Clear</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default SimpleActionBar;