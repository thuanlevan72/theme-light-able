import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const SingleSelectInput = () => {
    const options = [
        { value: 'Choice 1', label: 'Choice 1' },
        { value: 'Choice 2', label: 'Choice 2' },
        { value: 'Choice 3', label: 'Choice 3' },
    ];

    //Options from remote source (Fetch API)
    const optionsSource = [
        { value: "Pick an Arctic Monkeys' record", label: "Pick an Arctic Monkeys' record", isDisabled: true },
        { value: '2 Track For Mix FM (Acoustic)', label: '2 Track For Mix FM (Acoustic)' },
        { value: '2 Trk Promo DVD', label: '2 Trk Promo DVD' },
        { value: 'Arctic Monkeys', label: 'Arctic Monkeys' },
        { value: '@ Astoria', label: '@ Astoria' },
        { value: 'At The Apollo', label: 'At The Apollo' },
        { value: 'At The Apollo / Live In Texas - 7 June 2006', label: 'At The Apollo / Live In Texas - 7 June 2006' },
        { value: "Baby I'm Yours", label: "Baby I'm Yours" },
        { value: 'Beat 106 Session', label: 'Beat 106 Session' },
        { value: 'Bigger Boys And Stolen Sweethearts', label: 'Bigger Boys And Stolen Sweethearts' },
        { value: 'Black Treacle', label: 'Black Treacle' },
        { value: 'Brianstorm', label: 'Brianstorm' },
        { value: 'Cigarette Smoke', label: 'Cigarette Smoke' },
        { value: 'Cornerstone', label: 'Cornerstone' },
        { value: 'Crying Lightning', label: 'Crying Lightning' },
        { value: 'Dancin Shoes', label: 'Dancin Shoes' },
        { value: 'Demo Compilation', label: 'Demo Compilation' },
        { value: "Don't Sit Down 'Cause I've Moved Your Chair", label: "Don't Sit Down 'Cause I've Moved Your Chair" },
        { value: 'Electronic Press Kit - Audio', label: 'Electronic Press Kit - Audio' },
        { value: 'EPK - DVD', label: 'EPK - DVD' },
    ];

    // Options from remote source (Fetch API) &amp; remove button
    const optionsSourceAPI = [
        { value: "Pick a Smiths' record", label: "Pick a Smiths' record", isDisabled: true },
        { value: 'Ask', label: 'Ask' },
        { value: 'Ask / Il Garibaldi Innamorato', label: 'Ask / Il Garibaldi Innamorato' },
        { value: "Barbarism Begins At Home / Shakespeare's Sister", label: "Barbarism Begins At Home / Shakespeare's Sister" },
        { value: 'Bigmouth Strikes Again', label: 'Bigmouth Strikes Again' },
        { value: 'Girlfriend In A Coma', label: 'Girlfriend In A Coma' },
        { value: 'Girlfriend In A Coma / True Faith', label: 'Girlfriend In A Coma / True Faith' },
        { value: "Hand In Glove", label: "Hand In Glove" },
        { value: 'Hatful Of Hollow', label: 'Hatful Of Hollow' },
        { value: "Heaven Knows I'm Miserable Now", label: "Heaven Knows I'm Miserable Now" },
        { value: 'How Soon Is Now?', label: 'How Soon Is Now?' },
        { value: "How Soon Is Now? / Shakespeare's Sister", label: "How Soon Is Now? / Shakespeare's Sister" },
        { value: 'In Concert-354', label: 'In Concert-354' },
        { value: "I Started Something I Couldn't Finish", label: "I Started Something I Couldn't Finish" },
        { value: 'Last Night I Dreamt That Somebody Loved Me', label: 'Last Night I Dreamt That Somebody Loved Me' },
    ];
    // Option groups
    const cityOptions = [
        { label: 'Choose a city', value: '' },
        {
            label: 'UK',
            options: [
                { label: 'London', value: 'London' },
                { label: 'Manchester', value: 'Manchester' },
                { label: 'Liverpool', value: 'Liverpool' },
            ],
        },
        {
            label: 'FR',
            options: [
                { label: 'Paris', value: 'Paris' },
                { label: 'Lyon', value: 'Lyon' },
                { label: 'Marseille', value: 'Marseille' },
            ],
        },
        {
            label: 'DE (disabled)',
            options: [
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' },
                { label: 'Berlin', value: 'Berlin' },
            ],
            isDisabled: true,
        },
        {
            label: 'US',
            options: [
                { label: 'New York', value: 'New York' },
                { label: 'Washington (disabled)', value: 'Washington', isDisabled: true },
                { label: 'Michigan', value: 'Michigan' },
            ],
        },
        {
            label: 'SP',
            options: [
                { label: 'Madrid', value: 'Madrid' },
                { label: 'Barcelona', value: 'Barcelona' },
                { label: 'Malaga', value: 'Malaga' },
            ],
        },
        {
            label: 'CA',
            options: [
                { label: 'Montreal', value: 'Montreal' },
                { label: 'Toronto', value: 'Toronto' },
                { label: 'Vancouver', value: 'Vancouver' },
            ],
        },
    ];

    //Right-to-left
    const optionsRTL = [
        { label: 'Choice 1', value: 'Choice 1' },
        { label: 'Choice 2', value: 'Choice 2' },
        { label: 'Choice 3', value: 'Choice 3' },
    ];

    // Options added via config with no search
    const viaConfigoptions = [
        { label: 'Label Five', value: 'Label Five' },
        { label: 'Label Four', value: 'Label Four', isDisabled: true },
        { label: 'Label One', value: 'Label One' },
        { label: 'Label Six', value: 'Label Six' },
        { label: 'Label Three', value: 'Label Three' },
        { label: 'Label Two', value: 'Label Two', isDisabled: true },
        { label: 'Zero', value: 'Zero' },
    ]
    // Option and option groups added via config
    const optionGroups = [
        { label: 'Child One', value: 'Child One' },
        { label: 'Child Three', value: 'Child Three', isDisabled: true },
        { label: 'Child Two', value: 'Child Two' },
        { label: 'Child Five', value: 'Child Five' },
        { label: 'Child Four', value: 'Child Four' },
        { label: 'Child Six', value: 'Child Six', isDisabled: true },
    ]
    //Option selected via config with custom properties
    const customOptions = [
        { value: 'Label One', label: 'Label One' },
        { value: 'Label Three', label: 'Label Three' },
        { value: 'Label Two', label: 'Label Two' },
    ];
    //Option searchable by custom properties via
    const customSearchableOptions = [
        { value: 'Label One', label: 'Label One' },
        { value: 'Label Three', label: 'Label Three' },
        { value: 'Label Two', label: 'Label Two' },
    ];
    // Options without sorting
    const sortingOptions = [
        { label: 'Madrid', value: 'Madrid' },
        { label: 'Toronto', value: 'Toronto' },
        { label: 'Vancouver', value: 'Vancouver' },
        { label: 'London', value: 'London' },
        { label: 'Manchester', value: 'Manchester' },
        { label: 'Liverpool', value: 'Liverpool' },
        { label: 'Paris', value: 'Paris' },
        { label: 'Malaga', value: 'Malaga' },
        { label: 'Washington', value: 'Washington', isDisabled: true },
        { label: 'Lyon', value: 'Lyon' },
        { label: 'Marseille', value: 'Marseille' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' },
        { label: 'Barcelona', value: 'Barcelona' },
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Montreal', value: 'Montreal' },
        { label: 'New York', value: 'New York' },
        { label: 'Michigan', value: 'Michigan' },
    ];
    //Custom templates
    const CustomOptions = [
        { label: '👉🏽 React', value: '🎉 React' },
        { label: '👉🏽 Angular', value: '🎉 Angular' },
        { label: '👉🏽 Ember', value: '🎉 Ember' },
        { label: '👉🏽 Vue', value: '🎉 Vue' },
    ];

    //Cities
    const CitiesOptions = [
        { value: 'Choose a city', label: 'Choose a city', isDisabled: true },
        { value: 'Leeds', label: 'Leeds' },
        { value: 'Manchester', label: 'Manchester' },
        { value: 'London', label: 'London' },
        { value: 'Sheffield', label: 'Sheffield' },
        { value: 'Newcastle', label: 'Newcastle' },
    ];
    //Tube stations
    const TubeOptions = [
        { value: 'Choose a tube station', label: 'Choose a tube station', isDisabled: true },
        { value: 'Moorgate', label: 'Moorgate' },
        { value: 'St Pauls', label: 'St Pauls' },
        { value: 'Old Street', label: 'Old Street' },
        { value: 'Liverpool Street', label: 'Liverpool Street' },
        { value: 'Kings Cross St. Pancras', label: 'Kings Cross St. Pancras' },
    ];

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Single select input</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Default</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isSearchable={true}
                                    options={options}
                                    placeholder="This is a placeholder"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Options from remote source (Fetch API)</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isSearchable={true}
                                    options={optionsSource}
                                    placeholder="This is a placeholder"
                                />
                                <small>If the following two examples do not load, the  rate limit has probably been reached. Try again
                                    later!</small>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end"
                            >Options from remote source (Fetch API) &amp; remove button</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isClearable
                                    isSearchable={true}
                                    options={optionsSourceAPI}
                                />
                                <small>If the following two examples do not load, the  rate limit has probably been reached. Try again
                                    later!</small>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Option groups</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={cityOptions}
                                    isSearchable={true}
                                    placeholder="Choose a city"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Right-to-left</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isSearchable={true}
                                    options={optionsRTL}
                                    placeholder="Choose an option"
                                    isRtl={true}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Options added via config with no search</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={viaConfigoptions}
                                    placeholder="Choose an option"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Option and option groups added via config</label>
                            <Col lg={6} md={11} sm={12}>
                                {/* <select className="form-control" name="choices-single-preset-options" id="choices-single-preset-options"></select> */}
                                <Select
                                    isSearchable={true}
                                    options={optionGroups}
                                    placeholder="Choose an option"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Option selected via config with custom properties</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isSearchable={true}
                                    options={customOptions}
                                    placeholder="Choose an option"
                                />
                                <small>Try searching for &apos;fantastic&apos;, &quot;Label 3&quot; should display</small>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">
                                Option searchable by custom properties via <code>data-custom-properties</code> attribute</label>
                            <Col lg={6} md={11} sm={12}>
                                <CreatableSelect
                                    isClearable
                                    isSearchable={true}
                                    options={customSearchableOptions}
                                />
                                <small>Try searching for &apos;fantastic&apos;, &quot;Label 3&quot; should display</small>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Options without sorting</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isSearchable={true}
                                    options={sortingOptions}
                                    placeholder="Choose an option"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Custom templates</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={CustomOptions}
                                    id="choices-single-custom-templates"
                                    name="choices-single-custom-templates"
                                    placeholder="Choose a framework"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Cities</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    options={CitiesOptions}
                                    id="cities"
                                    name="cities"
                                    placeholder="Choose a city"
                                />
                                <small>
                                    Below is an example of how you could have two select inputs depend on each other. &apos;Tube stations&apos; will only be
                                    enabled if the value of &apos;Cities&apos; is &apos;London&apos;
                                </small>
                            </Col>
                        </Row>
                        <Row className="form-group mb-0">
                            <label className="col-form-label col-lg-4 col-sm-12 text-lg-end">Tube stations</label>
                            <Col lg={6} md={11} sm={12}>
                                <Select
                                    isDisabled={true}
                                    options={options}
                                    id="tube-stations"
                                    name="tube-stations"
                                    placeholder="Choose a tube station"
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SingleSelectInput;