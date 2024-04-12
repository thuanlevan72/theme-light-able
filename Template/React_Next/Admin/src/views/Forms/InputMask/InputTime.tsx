import React, { useState } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.in";
import { Card, Col, Form, Row } from "react-bootstrap";

const InputTime = () => {
    const [date, setDate] = useState<string>("");
    const [date1, setDate1] = useState<string>("");

    return (
        <React.Fragment>
            <Col md={12}>
                <Card>
                    <Card.Header>
                        <h5>Time</h5>
                        <span className="d-block m-t-5">Add class of <code>.hour</code> with <code>data-mask</code> attribute</span>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row className="form-group">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Hour</label>
                                <Col lg={6} md={12} sm={12}>
                                    <Cleave
                                        options={{
                                            date: true,
                                            delimiter: ':',
                                            datePattern: ['d', 'm', 'Y']
                                        }}
                                        value={date}
                                        onChange={(e: any) => setDate(e.target.rawValue)}
                                        className="form-control hour"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-0">
                                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Date & Hour</label>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    {/* <input type="text" className="form-control dateHour" data-mask="99/99/9999 99:99:99" /> */}
                                    <Cleave
                                        options={{
                                            date: true,
                                            delimiter: '/',
                                            datePattern: ['d', 'm', 'Y']
                                        }}
                                        value={date1}
                                        onChange={(e: any) => setDate1(e.target.rawValue)}
                                        className="form-control hour"
                                    />
                                </div>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default InputTime;