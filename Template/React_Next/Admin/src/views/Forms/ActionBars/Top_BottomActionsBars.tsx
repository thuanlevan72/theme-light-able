import React from "react";
import { Card, Form, Button } from 'react-bootstrap';

const Top_BottomActionsBars = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Top & Bottom Actions Bars</h5>
                </Card.Header>
                <Card.Body className="border-bottom">
                    <div className="row align-items-center">
                        <div className="col-sm-6">Top Actions:</div>
                        <div className="col-sm-6 text-sm-end mt-3 mt-sm-0 ">
                            <Button variant="success" type="reset" className="me-1">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset">
                                Clear
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                <Card.Body>
                    <Form>
                        <div className="form-group mb-0">
                            <Form.Label className="form-label">Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                            <Form.Text className="text-muted">Please enter your Name</Form.Text>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center bg-light border-0">
                    <Button variant="success" className="me-2">
                        Submit
                    </Button>
                    <Button variant="secondary">Clear</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default Top_BottomActionsBars;