import React from "react";
import { Form, Button, Card, Alert, InputGroup, Dropdown } from 'react-bootstrap';


const FormInputGroupOptions = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Input Group Options</h5>
                </Card.Header>
                <Card.Body>
                    <Alert variant="primary">
                        <div className="media align-items-center">
                            <i className="ti ti-info-circle h2 f-w-400 mb-0"></i>
                            <div className="media-body ms-3">
                                Input Group with more options like Button, Button with Dropdown, Colors, Checkbox & with Radio
                            </div>
                        </div>
                    </Alert>
                    <Form.Group className="mb-3">
                        <Form.Label>With Button</Form.Label>
                        <InputGroup>
                            <Button variant="outline-secondary" id="button-addon1">Button</Button>
                            <Form.Control type="text" placeholder="Left Button" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Right Button" />
                            <Button variant="outline-secondary" id="button-addon2">Button</Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <Button variant="outline-secondary" id="button-addon3">Button</Button>
                            <Form.Control type="text" placeholder="Left & Right Button" />
                            <Button variant="outline-secondary" id="button-addon4">Button</Button>
                        </InputGroup>
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label>Button with Dropdown</Form.Label>
                        <InputGroup>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control type="text" placeholder="Left Dropdown" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Right Dropdown" />
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Color variants with Icons</Form.Label>
                        <InputGroup>
                            <Button variant="outline-primary"><i className="feather icon-aperture"></i> Outline color</Button>
                            <Form.Control type="text" placeholder="Left Button" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Right Button" />
                            <Button variant="success"><i className="feather icon-download-cloud"></i> Fill color</Button>
                        </InputGroup>
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-0">
                        <Form.Label>Checkbox & Radio</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" checked />
                            <Form.Control type="text" aria-label="Text input with checkbox" />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Radio aria-label="Radio button for following text input" checked />
                            <Form.Control type="text" aria-label="Text input with radio button" />
                        </InputGroup>
                    </Form.Group>
                </Card.Body>
                <Card.Footer className="pt-0">
                    <Button variant="primary" className="me-2">Submit</Button>
                    <Button variant="light" type="reset">Reset</Button>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
}

export default FormInputGroupOptions;