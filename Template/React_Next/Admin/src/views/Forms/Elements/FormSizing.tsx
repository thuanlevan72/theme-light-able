import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const FormSizing = () => {
    const [colorPicker, setColorPicker] = useState<string>("#563d7c");
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Sizing</h5>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <Form.Control className="mb-3 form-control-lg" type="text" placeholder=".form-control-lg" />
                            <Form.Control className="mb-3" type="text" placeholder="Default input" />
                            <Form.Control className="mb-0 form-control-sm" type="text" placeholder=".form-control-sm" />
                        </Col>
                        <Col md={6}>
                            <Form.Select className="mb-3 form-select-lg">
                                <option>Large select</option>
                            </Form.Select>
                            <Form.Select className="mb-0">
                                <option>Default select</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h5>Picker</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group mb-0">
                            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                            <Form.Control type="color" className="form-control-color" id="exampleColorInput"
                                value={colorPicker}
                                onChange={(e) => setColorPicker(e.target.value)}
                                title="Choose your color" />
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormSizing