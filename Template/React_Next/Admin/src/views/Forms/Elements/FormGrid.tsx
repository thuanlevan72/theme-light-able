import React from "react";
import { Alert, Card, Col, Form, Row, Button } from "react-bootstrap";

const FormGrid = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Form Grid</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(event: any) => event.preventDefault()}>
                        <Row>
                            <Col xs={12}>
                                <Alert variant="primary" className="d-flex align-items-center" role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                                        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                                            </path>
                                        </symbol>
                                    </svg>
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                                        <use xlinkHref="#info-fill"></use>
                                    </svg>
                                    <div> When working with the Bootstrap grid system, be sure to place form elements within column
                                        classes. </div>
                                </Alert>
                            </Col>
                            <Col md={6} className="form-group">
                                <Form.Label htmlFor="inputEmail4">Email</Form.Label>
                                <Form.Control type="email" id="inputEmail4" placeholder="Email" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Form.Label htmlFor="inputPassword4">Password</Form.Label>
                                <Form.Control type="password" id="inputPassword4" placeholder="Password" />
                            </Col>
                        </Row>
                        <div className="form-group">
                            <Form.Label htmlFor="inputAddress">Address</Form.Label>
                            <Form.Control type="text" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <Form.Label htmlFor="inputAddress2">Address 2</Form.Label>
                            <Form.Control type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <Form.Label htmlFor="inputCity">City</Form.Label>
                                <Form.Control type="text" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <Form.Label htmlFor="inputState">State</Form.Label>
                                <Form.Select id="inputState">
                                    <option selected>select</option>
                                    <option>Large select</option>
                                </Form.Select>
                            </div>
                            <div className="form-group col-md-2">
                                <Form.Label htmlFor="inputZip">Zip</Form.Label>
                                <Form.Control type="text" id="inputZip" />
                            </div>
                        </div>
                        <div className="form-group">
                            <Form.Check>
                                <Form.Check.Input type="checkbox" id="gridCheck" />
                                <Form.Check.Label htmlFor="gridCheck">Check me out</Form.Check.Label>
                            </Form.Check>
                        </div>
                        <Button variant="primary" type="submit" >Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormGrid;