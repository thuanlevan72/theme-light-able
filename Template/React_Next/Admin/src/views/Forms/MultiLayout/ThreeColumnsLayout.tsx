import React from "react";
import { Card, Form, InputGroup } from 'react-bootstrap';

const ThreeColumnsLayout = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>3 Columns Form Layout</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="row g-3">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                    <Form.Text className="text-muted">Please enter your full name</Form.Text>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">Please enter your email</Form.Text>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Password:</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text><i className="feather icon-lock"></i></InputGroup.Text>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </InputGroup>
                                    <Form.Text className="text-muted">Please enter your Password</Form.Text>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Contact:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter contact number" />
                                    <Form.Text className="text-muted">Please enter your contact</Form.Text>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Profile URL:</Form.Label>
                                    <InputGroup className="search-form">
                                        <Form.Control type="text" placeholder="Profile URL" />
                                        <InputGroup.Text className="bg-transparent"><i className="feather icon-link"></i></InputGroup.Text>
                                    </InputGroup>
                                    <Form.Text className="text-muted">Please enter Profile URL</Form.Text>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Pin code:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Pin code" />
                                    <Form.Text className="text-muted">Please enter your Pin code</Form.Text>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <Form.Label>Address:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your address" />
                                    <Form.Text className="text-muted">Please enter your address</Form.Text>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
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
                                    <Form.Text>Please select User Type</Form.Text>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default ThreeColumnsLayout;