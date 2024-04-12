import React from "react";
import { Card, Form, Button } from 'react-bootstrap';

const FormActionButtonLink = () => {
    return ( 
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Action Button with Link</h5>
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
                <Card.Footer className="text-end">
                    <Button type="reset" variant="primary">Submit</Button>
                    <span className="ms-2">or <a href="#" className="ms-2">Clear</a></span>
                </Card.Footer>
            </Card>
        </React.Fragment>
     );
}

export default FormActionButtonLink;