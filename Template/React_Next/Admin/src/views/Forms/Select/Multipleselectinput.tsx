import React, { useState } from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable'

const Multipleselectinput = () => {
    //Default
    const [selectedOptions, setSelectedOptions] = useState<any>([
        { value: 'Choice 1', label: 'Choice 1' }
    ]);
    const options = [
        { value: 'Choice 1', label: 'Choice 1' },
        { value: 'Choice 2', label: 'Choice 2' },
        { value: 'Choice 3', label: 'Choice 3' },
        { value: 'Choice 4', label: 'Choice 4', isDisabled: true }
    ];
    const handleChange = (newValue: any) => {
        setSelectedOptions(newValue);
    };
    //With remove button
    const [selected1Options, setSelected1Options] = useState([
        { value: 'Choice 1', label: 'Choice 1' }
    ]);
    const options1 = [
        { value: 'Choice 1', label: 'Choice 1' },
        { value: 'Choice 2', label: 'Choice 2' },
        { value: 'Choice 3', label: 'Choice 3' },
        { value: 'Choice 4', label: 'Choice 4' }
    ];
    const handleChanges = (newValue: any) => {
        setSelected1Options(newValue);
    };
    //Option groups
    const [selectedGroupsOptions, setSelectedGroupsOptions] = useState<any>([]);
    const optionsGroups: any = [
        { label: 'Choose a city', options: [] },
        {
            label: 'UK',
            options: [
                { value: 'London', label: 'London' },
                { value: 'Manchester', label: 'Manchester' },
                { value: 'Liverpool', label: 'Liverpool' },
            ],
        },
        {
            label: 'FR',
            options: [
                { value: 'Paris', label: 'Paris' },
                { value: 'Lyon', label: 'Lyon' },
                { value: 'Marseille', label: 'Marseille' },
            ],
        },
        {
            label: 'DE',
            options: [
                { value: 'Hamburg', label: 'Hamburg', isDisabled: true },
                { value: 'Munich', label: 'Munich', isDisabled: true },
                { value: 'Berlin', label: 'Berlin', isDisabled: true },
            ],
        },
        {
            label: 'US',
            options: [
                { value: 'New York', label: 'New York' },
                { value: 'Washington', label: 'Washington', isDisabled: true },
                { value: 'Michigan', label: 'Michigan' },
            ],
        },
        {
            label: 'SP',
            options: [
                { value: 'Madrid', label: 'Madrid' },
                { value: 'Barcelona', label: 'Barcelona' },
                { value: 'Malaga', label: 'Malaga' },
            ],
        },
        {
            label: 'CA',
            options: [
                { value: 'Montreal', label: 'Montreal' },
                { value: 'Toronto', label: 'Toronto' },
                { value: 'Vancouver', label: 'Vancouver' },
            ],
        },
    ];
    const handleChangeGroups = (newValue: any) => {
        setSelectedGroupsOptions(newValue);
    };

    //Right-to-left
    const [selectedRTLOptions, setSelectedRTLOptions] = useState<any>([
        { value: 'Choice 1', label: 'Choice 1' }
    ]);
    const optionsRTL: any = [
        { value: 'Choice 1', label: 'Choice 1' },
        { value: 'Choice 2', label: 'Choice 2' },
        { value: 'Choice 3', label: 'Choice 3' },
        { value: 'Choice 4', label: 'Choice 4', isDisabled: true }
    ];
    const handleChangeRTL = (newValue: any) => {
        setSelectedRTLOptions(newValue);
    };
    //Use label in event (add/remove)
    const [selectedEventLOptions, setSelectedEventLOptions] = useState([
        { value: 'Lable Six', label: 'Lable Six' }
    ]);
    const optionsEvent = [
        { value: 'Lable Five', label: 'Lable Five' },
        { value: 'Lable Four', label: 'Lable Four', isDisabled: true },
        { value: 'Lable One', label: 'Lable One' },
        { value: 'Lable Three', label: 'Lable Three' },
        { value: 'Lable Two', label: 'Lable Two', isDisabled: true }
    ];
    const handleChangeEvent = (newValue : any) => {
        setSelectedEventLOptions(newValue);
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
                    <h5>Multiple select input</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Default</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={selectedOptions}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder="Select options"
                                    styles={customStyles}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group row">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">With remove button</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={selected1Options}
                                    onChange={handleChanges}
                                    options={options1}
                                    placeholder="Select options"
                                    styles={customStyles}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group row">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Option groups</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={selectedGroupsOptions}
                                    onChange={handleChangeRTL}
                                    options={optionsGroups}
                                    placeholder="Select cities"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group row">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Options from remote source (Fetch API) &amp; limited to 5</label>
                            <Col lg={6} md={11} sm={12}>
                                <select
                                    className="form-control"
                                    name="choices-multiple-remote-fetch"
                                    id="choices-multiple-remote-fetch"
                                    multiple
                                ></select>
                                <small>If the following example do not load, the  rate limit has probably been reached. Try again later!</small>
                            </Col>
                        </Row>
                        <Row className="form-group row">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Right-to-left</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={selectedRTLOptions}
                                    onChange={handleChangeRTL}
                                    options={optionsRTL}
                                    placeholder="Select options"
                                    isRtl={true}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group row">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Use label in event (add/remove)</label>
                                {/* <select id="choices-multiple-labels" multiple></select> */}
                                {/* <div id="message"></div> */}
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isMulti
                                    value={selectedEventLOptions}
                                    onChange={handleChangeEvent}
                                    options={optionsEvent}
                                    placeholder="Select options"
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default Multipleselectinput;