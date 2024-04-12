import React from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";

const InlineForm = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Inline Form</h5>
                </Card.Header>
                <Card.Body>
                    <Form className="row row-cols-md-auto g-3 align-items-center" onSubmit={(event: any) => event.preventDefault()}>
                        <Col xs={12}>
                            <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                            <Form.Control type="text" id="inlineFormInputName" placeholder="Jane Doe" />
                        </Col>
                        <Col xs={12}>
                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                            <InputGroup className="input-group">
                                <div className="input-group-text">@</div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col xs={12}>
                            <label className="sr-only" htmlFor="inlineFormSelectPref">Preference</label>
                            <Form.Select id="inlineFormSelectPref">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12}>
                            <Form.Check>
                                <Form.Check.Input type="checkbox" id="inlineFormCheck" />
                                <Form.Check.Label htmlFor="inlineFormCheck"> Remember me </Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col xs={12}>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default InlineForm;