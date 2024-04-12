import React, { useState } from "react";
import { Col, Form, Button, Card, Alert } from 'react-bootstrap';

const FormHtmlInputTypes = () => {

    const [colorPicker, setColorPicker] = useState<string>("#5052FC")
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>HTML Input Types</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3">
                                Here are the different input types you can use in HTML. Check more at
                                <a href="https://www.w3schools.com/html/html_form_input_types.asp" rel="nofollow">W3Schools</a>
                            </div>
                        </div>
                    </Alert>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Simple Input Text</Form.Label>
                            <Form.Control type="text" defaultValue="John Doe" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="number" defaultValue="100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="tel" defaultValue="+918888888888" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue="demo@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" defaultValue="password123" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>File</Form.Label>
                            <Form.Control type="file" id="demo-input-file" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Multi Files</Form.Label>
                            <Form.Control type="file" id="demo-multi-input-file" multiple />
                            <Form.Text>Try selecting more than one file when browsing for files.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="url" defaultValue="https://validator.w3.org/" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="search" defaultValue="Best Admin Template" />
                            <Form.Text>A search field behaves like a regular text field.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date Time Local</Form.Label>
                            <Form.Control type="datetime-local" defaultValue="2021-12-31T04:03:20" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date only</Form.Label>
                            <Form.Control type="date" defaultValue="2021-12-31" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Time only</Form.Label>
                            <Form.Control type="time" defaultValue="04:03:20" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Month only</Form.Label>
                            <Form.Control type="month" defaultValue="2021-12" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Week only</Form.Label>
                            <Form.Control type="week" defaultValue="2021-W41" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="demo-color-input">Color</Form.Label>
                            <Form.Control className="w-100 form-control-color-picker" type="color" value={colorPicker } id="demo-color-input" onChange={(event: any) => setColorPicker(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label>Range</Form.Label>
                            <Form.Range min="0" max="50" />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="pt-0">
                    <Button variant="primary" className="me-2">
                        Submit
                    </Button>
                    <Button variant="secondary">Cancel</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default FormHtmlInputTypes;