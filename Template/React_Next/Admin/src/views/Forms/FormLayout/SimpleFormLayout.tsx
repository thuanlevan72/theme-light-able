import React from "react";
import { Card, Form, InputGroup } from 'react-bootstrap';

const SimpleFormLayout = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Simple Form Layout</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                            <Form.Text className="text-muted">Please enter your full name</Form.Text>
                        </div>

                        <div className="form-group">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">Please enter your Email</Form.Text>
                        </div>

                        <div className="form-group">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </InputGroup>
                        </div>

                        <div className="form-group mb-0">
                            <Form.Label>Language:</Form.Label>

                            <div>
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl1" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckinl1">English</Form.Check.Label>
                                </Form.Check>
                            </div>

                            <div>
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl2"  />
                                    <Form.Check.Label htmlFor="customCheckinl2">French</Form.Check.Label>
                                </Form.Check>
                            </div>

                            <div>
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl3"  />
                                    <Form.Check.Label htmlFor="customCheckinl3">Dutch</Form.Check.Label>
                                </Form.Check>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SimpleFormLayout;