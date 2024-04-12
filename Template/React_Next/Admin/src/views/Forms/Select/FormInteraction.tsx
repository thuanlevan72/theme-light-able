import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Select from 'react-select';

const FormInteraction = () => {
    //Change me
    const options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
        { value: 'Option 5', label: 'Option 5' },
    ];

    //And me
    const addOptions = [
        { value: 'Choice 1', label: 'Choice 1' },
        { value: 'Choice 2', label: 'Choice 2' },
        { value: 'Choice 3', label: 'Choice 3' },
        { value: 'Choice 4', label: 'Choice 4', isDisabled: true },
    ];

    const [selectedOption1, setSelectedOption1] = useState<any>(options[1]);
    const [selectedOptions2, setSelectedOptions2] = useState<any>([addOptions[0]]);
    const handleReset = () => {
        setSelectedOption1(null);
        setSelectedOptions2(null);
    };

    // style
    const customStyles = {
        multiValue: (styles: any) => {
            return {
                ...styles,
                backgroundColor: "#04A9F5",
            borderRadius: "8px",
            padding: "2px 8px"
            };
        },
        multiValueLabel: (styles: any) => ({
            ...styles,
            backgroundColor: "#04A9F5",
            color: "white",
            borderRadius: "8px"
        }),
        multiValueRemove: (styles: any) => ({
            ...styles,
            color: "white",
            backgroundColor: "#04A9F5",
            borderRadius: "8px",
            ':hover': {
                backgroundColor: "#04A9F5",
                color: 'white',
            },
        }),
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Form interaction</h5>
                    <small>Change the values and press reset to restore to initial state.</small>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Change me!</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={options}
                                    id="reset-simple"
                                    name="reset-simple"
                                    value={selectedOption1}
                                    onChange={(newValue) => setSelectedOption1(newValue)}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-0">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">And me!</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={addOptions}
                                    id="reset-multiple"
                                    name="reset-multiple"
                                    value={selectedOptions2}
                                    onChange={(newValues) => setSelectedOptions2(newValues)}
                                    isMulti
                                    styles={customStyles}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-0">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end"></label>
                            <Col lg={6} md={11} sm={12}>
                                <Button className="btn btn-light-warning" type="reset" onClick={handleReset}>
                                    <i className="me-2" data-feather="alert-triangle"></i> Reset</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormInteraction;