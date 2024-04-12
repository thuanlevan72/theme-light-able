import React, { useState } from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable'

const FormChoicesjs = () => {

    const [selectedOptions, setSelectedOptions] = useState<any>([
        { label: "preset-1", value: "preset-1" },
        { label: "preset-2", value: "preset-2" }
    ]);
    const handleChange = (newValue: any) => {
        if (newValue.length <= 5) {
            setSelectedOptions(newValue);
        }
    };
    const formattedOptions = selectedOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
    }));

    // email 
    const [emailOptions, setEmailOptions] = useState<any>([
        { label: "joe@bloggs.com", value: "joe@bloggs.com" }
    ]);
    const handleEmailChange = (newValue: any) => {
        const isValidEmails = newValue.every((option: any) =>
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(option.value)
        );

        if (isValidEmails) {
            setEmailOptions(newValue);
        }
    };
    const formattedEmaiOptions = emailOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
    }));

    //Preset
    const [presetOptions, setPresetOptions] = useState<any>([
        { label: "Josh Johnson", value: "Josh Johnson" },
        { label: "Joe Bloggs", value: "Joe Bloggs" },
        { label: "Michael Smith", value: "Michael Smith" }
    ]);
    const handlePresetChange = (newValue: any) => {
        setPresetOptions(newValue);
    };
    const formattedPresetOptions = presetOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
    }));
    //I18N labels
    const [I18NdOptions, setI18NdOptions] = useState<any>([]);
    const handleI18NdChange = (newValue: any) => {
        if (newValue.length <= 5) {
            setI18NdOptions(newValue);
        }
    };
    const formattedI18NdOptions = I18NdOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
    }));
    //Right-to-left
    const [RTLOptions, setRTLOptions] = useState<any>([]);
    const handleRTLChange = (newValue: any) => {
        setRTLOptions(newValue);
    }
    const formattedRTLOptions = RTLOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
    }));

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
                    <h5>Text inputs</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="form-group">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Limited to 5 values with remove button
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={formattedOptions}
                                    onChange={handleChange}
                                    options={formattedOptions}
                                    styles={customStyles}
                                />
                            </Col>
                        </Row>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Unique values only, no pasting
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect isMulti />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Email addresses only
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={formattedEmaiOptions}
                                    onChange={handleEmailChange}
                                    options={formattedEmaiOptions}
                                    styles={customStyles}
                                />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Disabled
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <Form.Control
                                    type="text"
                                    id="choices-text-disabled"
                                    defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                                    disabled
                                />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Prepends and appends a value to each item&apos;s return value
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect isMulti styles={customStyles} />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Preset values passed through options
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={formattedPresetOptions}
                                    onChange={handlePresetChange}
                                    options={formattedPresetOptions}
                                    styles={customStyles}
                                />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                I18N labels
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={formattedI18NdOptions}
                                    onChange={handleI18NdChange}
                                    options={formattedI18NdOptions}
                                    styles={customStyles}
                                />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Form.Label column lg={4} sm={12} className="text-lg-end">
                                Right-to-left
                            </Form.Label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    isRtl
                                    value={formattedRTLOptions}
                                    onChange={handleRTLChange}
                                    options={formattedRTLOptions}
                                    styles={customStyles} />
                            </Col>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormChoicesjs;