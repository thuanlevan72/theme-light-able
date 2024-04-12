import React from "react";
import { Card, Form, InputGroup, Button, Dropdown } from 'react-bootstrap';

const FormInputGroup = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Input Group</h5>
                </Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                        <Form.Control type="text" id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mt-3">Sizing</h5>
                            <hr />
                            <InputGroup className="input-group-sm mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <InputGroup className="input-group-lg">
                                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-lg"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">Checkboxes and radios</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    <Form.Check
                                        type="checkbox"
                                        value=""
                                        aria-label="Checkbox for following text input"
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with checkbox"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Text>
                                    <Form.Check
                                        type="radio"
                                        value=""
                                        aria-label="Radio button for following text input"
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with radio button"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">Multiple inputs</h5>
                            <hr />
                            <InputGroup>
                                <InputGroup.Text>First and last name</InputGroup.Text>
                                <Form.Control aria-label="First name" />
                                <Form.Control aria-label="Last name" />
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">Multiple addons</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <InputGroup.Text>0.00</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-label="Dollar amount (with dot and two decimal places)"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    aria-label="Dollar amount (with dot and two decimal places)"
                                />
                                <InputGroup.Text>$</InputGroup.Text>
                                <InputGroup.Text>0.00</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <h5 className="mt-3">Button Addons</h5>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" id="button-addon1">
                                    Button
                                </Button>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <InputGroup className="mb-3">
                                <Button variant="primary">Button</Button>
                                <Button variant="outline-primary">Button</Button>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    aria-label="Example text with two button addons"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username with two button addons"
                                />
                                <Button variant="secondary">Button</Button>
                                <Button variant="outline-secondary">Button</Button>
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">Buttons With Dropdowns</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with dropdown button"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with dropdown button"
                                />
                                <Dropdown placement="left">
                                    <Dropdown.Toggle
                                        variant="outline-success"
                                        id="dropdown-basic"
                                    >
                                        Dropdown..
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
                            <InputGroup>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdown-basic"
                                    >
                                        Dropdown
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Action before</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action before</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with 2 dropdown buttons"
                                />
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-secondary"
                                        id="dropdown-basic"
                                    >
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
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-3">Segmented Buttons</h5>
                            <hr />
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary">Action</Button>
                                <Button className="dropdown-toggle dropdown-toggle-split"
                                    variant="outline-secondary"
                                    // as={Dropdown.Toggle}
                                    // split
                                    id="dropdown-split-basic"
                                />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with segmented dropdown button"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    aria-label="Text input with segmented dropdown button"
                                />
                                <Button variant="outline-secondary">Action</Button>
                                <Button className="dropdown-toggle dropdown-toggle-split"
                                    variant="outline-secondary"
                                    // as={Dropdown.Toggle}
                                    // split
                                    id="dropdown-split-basic"
                                />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </InputGroup>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormInputGroup;