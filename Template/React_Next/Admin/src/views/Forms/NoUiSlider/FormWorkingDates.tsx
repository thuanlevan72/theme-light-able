import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import moment from 'moment'; // Import the moment library

const FormWorkingDates = () => {
    const [dateRange, setDateRange] = useState<any>([20, 80]);

    // Convert numerical range values to dates
    const startDate = moment()
        .startOf('year')
        .add(Math.floor((dateRange[0] / 100) * 365), 'days');
    const endDate = moment()
        .startOf('year')
        .add(Math.floor((dateRange[1] / 100) * 365), 'days');

    // Format the dates using Moment.js
    const formattedStartDate = startDate.format('dddd, Do MMMM YYYY');
    const formattedEndDate = endDate.format('dddd, Do MMMM YYYY');
    const handleSliderChange = (values: any) => {
        setDateRange(values);
    };

    return (
        <React.Fragment>
            <Form>
                <div className="form-group row mb-5">
                    <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Working with dates</label>
                    <Col lg={6} md={12} sm={12}>
                        <Row className="align-items-center g-3">
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    className="mb-2"
                                    placeholder="Start Date"
                                    value={formattedStartDate} // Use the formatted date
                                    readOnly
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="End Date"
                                    value={formattedEndDate} // Use the formatted date
                                    readOnly
                                />
                            </Col>
                            <Col sm={6}>
                                <Nouislider
                                    range={{ min: 0, max: 100 }}
                                    start={dateRange}
                                    onSlide={handleSliderChange}
                                />
                            </Col>
                        </Row>
                        <small className="form-text text-muted">
                            Convert numerical ranges to dates and display them in the &quot;Friday, 12th September 2014&quot; format.
                        </small>
                    </Col>
                </div>
            </Form>
        </React.Fragment>
    );
}

export default FormWorkingDates;