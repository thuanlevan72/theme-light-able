import React from "react";
import { Card, Form, Col } from 'react-bootstrap';

const HorizontalFormLayout = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Horizontal Form Layout</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <h5 className="mb-2">A. Personal Info:</h5>
                        <div className="form-group row">
                            <Form.Label column sm={4}>
                                Name:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="Enter full name" />
                                <Form.Text className="text-muted">Please enter your full name</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column sm={4}>
                                Email:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">Please enter your Email</Form.Text>
                            </Col>
                        </div>
                        <h5 className="mb-2">B. Educational Info:</h5>
                        <div className="form-group row">
                            <Form.Label column sm={4}>
                                Degree Name:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="Enter degree name" />
                                <Form.Text className="text-muted">Please enter your final degree</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column sm={4}>
                                Passing Year:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="Enter passing year" />
                            </Col>
                        </div>
                        <div className="form-group mb-0 align-items-center row" >
                            <Form.Label column sm={4}>
                                Language:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Check className="form-check-inline">
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl1" defaultChecked />
                                    <Form.Check.Label htmlFor="customCheckinl1">English</Form.Check.Label>
                                </Form.Check>

                                <Form.Check className="form-check-inline">
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl2" />
                                    <Form.Check.Label htmlFor="customCheckinl2">French</Form.Check.Label>
                                </Form.Check>

                                <Form.Check className="form-check-inline">
                                    <Form.Check.Input type="checkbox" className="input-primary" id="customCheckinl3" />
                                    <Form.Check.Label htmlFor="customCheckinl3">Dutch</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default HorizontalFormLayout;