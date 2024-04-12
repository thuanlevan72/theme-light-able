import React from "react";
import { Card, Form, Col, InputGroup, Row } from 'react-bootstrap';

const ColumnsFormLayout = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>2 Columns Form Layout</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <div className="form-group">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                    <Form.Text className="text-muted">Please enter your full name</Form.Text>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="form-group">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">Please enter your Email id</Form.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className="form-group">
                                    <Form.Label>Password:</Form.Label>
                                    <InputGroup className="search-form">
                                        <Form.Control type="password" placeholder="Please enter your Password" />
                                        <InputGroup.Text className="bg-transparent">
                                            <i className="feather icon-lock"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <Form.Text className="text-muted">Please enter your Password</Form.Text>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="form-group">
                                    <Form.Label>Profile URL:</Form.Label>
                                    <InputGroup className="search-form">
                                        <Form.Control type="text" placeholder="Please enter your Profile URL" />
                                        <InputGroup.Text className="bg-transparent">
                                            <i className="feather icon-link"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <Form.Text className="text-muted">Please enter your Profile URL</Form.Text>
                                </div>
                            </Col>
                        </Row>
                        <div className="form-group row">
                            <Col lg={6}>
                                <Form.Label>User Type:</Form.Label>
                                <div>
                                    <Form.Check className=" form-check-inline">
                                        <Form.Check.Input type="radio" id="customRadioInline1" name="customRadioInline1" defaultChecked />
                                        <Form.Check.Label htmlFor="customRadioInline1">Administrator</Form.Check.Label>
                                    </Form.Check>

                                    <Form.Check className="form-check-inline">
                                        <Form.Check.Input type="radio" id="customRadioInline2" name="customRadioInline2" />
                                        <Form.Check.Label htmlFor="customRadioInline2">Author</Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <Form.Text>Please select user type</Form.Text>
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default ColumnsFormLayout;