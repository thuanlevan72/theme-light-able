import React from "react";
import { Card, Form, Col, InputGroup } from 'react-bootstrap';

const ColumnsHorizontalLayout = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>2 Columns Horizontal Form Layout</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group row g-3">
                            <Form.Label column lg={2}>
                                Name:
                            </Form.Label>
                            <Col lg={3}>
                                <Form.Control type="text" placeholder="Enter full name" />
                                <Form.Text className="text-muted">Please enter your full name</Form.Text>
                            </Col>
                            <Form.Label column lg={2}>
                                Email:
                            </Form.Label>
                            <Col lg={3}>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">Please enter your Email id</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row g-3">
                            <Form.Label column lg={2}>
                                Password:
                            </Form.Label>
                            <Col lg={3}>
                                <InputGroup className="search-form">
                                    <Form.Control type="password" placeholder="Enter your Password" />
                                    <InputGroup.Text className="bg-transparent">
                                        <i className="feather icon-lock"></i>
                                    </InputGroup.Text>
                                </InputGroup>
                                <Form.Text className="text-muted">Please enter your Password</Form.Text>
                            </Col>
                            <Form.Label column lg={2}>
                                Profile URL:
                            </Form.Label>
                            <Col lg={3}>
                                <InputGroup className="search-form">
                                    <Form.Control type="text" placeholder="Enter your Profile URL" />
                                    <InputGroup.Text className="bg-transparent">
                                        <i className="feather icon-link"></i>
                                    </InputGroup.Text>
                                </InputGroup>
                                <Form.Text className="text-muted">Please enter your Profile URL</Form.Text>
                            </Col>
                        </div>
                        <div className="form-group row g-3 align-items-center">
                            <Form.Label column lg={2}>
                                User Type:
                            </Form.Label>
                            <Col lg={3}>
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

export default ColumnsHorizontalLayout;