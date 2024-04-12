import React from "react";
import { Card, Form, Col } from 'react-bootstrap';

const InputLabelAlignment = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Input Label Alignment</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <h5 className="mb-3">A. Personal Info:</h5>
                        <div className="form-group row">
                            <Form.Label column lg={4} className="text-lg-end">
                                Name:
                            </Form.Label>
                            <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter full name" />
                                <Form.Text className="text-muted">Please enter your full name</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} className="text-lg-end">
                                Email:
                            </Form.Label>
                            <Col lg={6}>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">Please enter your Email</Form.Text>
                            </Col>
                        </div>
                        <hr className="my-4" />
                        <h5 className="mb-3">B. Educational Info:</h5>
                        <div className="form-group row">
                            <Form.Label column lg={4} className="text-lg-end">
                                Degree Name:
                            </Form.Label>
                            <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter degree name" />
                                <Form.Text className="text-muted">Please enter your final degree</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} className="text-lg-end">
                                Passing Year:
                            </Form.Label>
                            <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter Passing Year" />
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

export default InputLabelAlignment;