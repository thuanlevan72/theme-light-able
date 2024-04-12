import React from "react";
import { Card, Button, Form, InputGroup, Col, Row } from 'react-bootstrap';

const FormStickyActionBar = () => {
    return (
        <React.Fragment>
            <Card>
                <div id="sticky-action" className="sticky-action">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col sm={6}>
                                <h5>Sticky Action Bar</h5>
                            </Col>
                            <Col sm={6} className="text-sm-end mt-3 mt-sm-0">
                                <Button variant="success" type="reset">
                                    Submit
                                </Button>
                                <Button variant="light-secondary" type="reset">
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>
                </div>
                <Card.Body>
                    <h5>Form controls</h5>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <Form onSubmit={(event: any) => event.preventDefault()}>
                                <div className="form-group">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Form.Text className="text-muted">
                                        We&apos;ll never share your email with anyone else.
                                    </Form.Text>
                                </div>
                                <div className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </div>
                                <Form.Check className="form-group">
                                    <Form.Check
                                        type="checkbox"
                                        id="gridChecked"
                                        label="Check me out"
                                    />
                                </Form.Check>

                                <Button variant="primary" className="mb-4" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form>
                                <div className="form-group">
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control type="text" placeholder="Text" />
                                </div>
                                <div className="form-group">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <h5>Sizing</h5>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <Form.Control
                                className="mb-3 form-control-lg"
                                type="text"
                                placeholder=".form-control-lg"
                            />
                            <Form.Control
                                className="mb-3"
                                type="text"
                                placeholder="Default input"
                            />
                            <Form.Control
                                className="mb-3 form-control-sm"
                                type="text"
                                placeholder=".form-control-sm"
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Select className="mb-3 form-select-lg">
                                <option>Large select</option>
                            </Form.Select>
                            <Form.Select className="mb-3">
                                <option>Default select</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <h5>Inline</h5>
                    <hr />
                    <Form className="row row-cols-md-auto g-3 align-items-center" onSubmit={(event: any) => event.preventDefault()}>
                        <Col>
                            <Form.Label className="visually-hidden" htmlFor="inlineFormInputName">
                                Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                id="inlineFormInputName"
                                placeholder="Jane Doe"
                            />
                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Username"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Select id="inlineFormSelectPref" defaultValue="">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="inlineFormCheck"
                                label="Remember me"
                            />
                        </Col>
                        <Col>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </Col>
                    </Form>
                    <h5>Form Grid</h5>
                    <hr />
                    <Form onSubmit={(event: any) => event.preventDefault()}>
                        <Row>
                            <div className="form-group col-md-6" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </div>
                        </Row>
                        <div className="form-group">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </div>
                        <Row>
                            <div className="form-group col-md-6">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </div>
                            <div className="form-group col-md-4">
                                <Form.Label>State</Form.Label>
                                <Form.Select>
                                    <option>select</option>
                                    <option>Large select</option>
                                </Form.Select>
                            </div>
                            <div className="form-group col-md-2">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </div>
                        </Row>
                        <Form.Check className="form-group">
                            <Form.Check
                                type="checkbox"
                                id="gridCheck"
                                label="Check me out"
                            />
                        </Form.Check>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment >
    );
}

export default FormStickyActionBar;