import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form2_datepicker = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [startDateInput, setStartDateInput] = useState<any>(new Date());
  const [startDateHelp, setStartDateHelp] = useState<any>(new Date());

  const [startDateInline, setStartDateInline] = useState<any>(new Date());
  const onChange = (dates: any) => {
    const { start } = dates;
    setStartDateInline(start);
  };

  const [startDateleft, setStartDateleft] = useState<any>(new Date());
  const [startDateright, setStartDateright] = useState<any>(new Date());

  const [startDateBleft, setStartDateBleft] = useState<any>(new Date());
  const [startDateBright, setStartDateBright] = useState<any>(new Date());

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Forms" subTitle="Date Picker" />
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h5>Preview</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="form-group row">
                  <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">
                    Simple Input
                  </label>
                  <Col lg={4} md={9} sm={12}>
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>
                </div>

                <div className="form-group row">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    With Input Group
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <div className="input-group date">
                        <DatePicker
                        selected={startDateInput}
                        onChange={(date: any) => setStartDateInput(date)}
                        className="form-control datepicker-input"
                        placeholderText="Select date"
                        id="pc-datepicker-2"
                      />
                        <span className="input-group-text">
                          <i className="feather icon-calendar"></i>
                        </span>
                      </div>
                  </Col>
                </div>
                <div className="form-group row">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    Helper Button
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <div className="input-group date">
                      <DatePicker
                        className="form-control datepicker-input"
                        selected={startDateHelp}
                        onChange={(date) => setStartDateHelp(date)}
                      />
                      <span className="input-group-text">
                          <i className="feather icon-calendar"></i>
                        </span>
                    </div>
                  </Col>
                </div>
                <Row className="form-group">
                  <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">
                    Range Picker
                  </label>
                  <Col lg={4} md={9} sm={12}>
                    <div
                      className="input-daterange input-group"
                      id="pc-datepicker-5"
                    >
                      <Form.Control
                        type="text"
                        className="form-control text-left datepicker-input"
                        placeholder="Start date"
                        name="range-start"
                      />
                      <span className="input-group-text">to</span>
                      <Form.Control
                        type="text"
                        className="form-control text-end datepicker-input"
                        placeholder="End date"
                        name="range-end"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    Inline Mode
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <DatePicker
                      selected={startDateInline}
                      onChange={onChange}
                      startDate={startDateInline}
                      inline
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    Position
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <div className="input-group date mb-3">
                      <DatePicker
                        className="form-control datepicker-input"
                        selected={startDateleft}
                        onChange={(date) => setStartDateleft(date)}
                      />
                      <span className="input-group-text">
                        <i className="feather icon-calendar"></i>
                      </span>
                    </div>
                    <div className="input-group date mb-3">
                      <DatePicker
                        className="form-control datepicker-input"
                        selected={startDateright}
                        onChange={(date) => setStartDateright(date)}
                      />
                      <InputGroup.Text>
                        <i className="feather icon-calendar"></i>
                      </InputGroup.Text>
                    </div>
                    <div className="input-group date mb-3">
                      <DatePicker
                        className="form-control datepicker-input"
                        selected={startDateBleft}
                        onChange={(date) => setStartDateBleft(date)}
                      />
                      <InputGroup.Text>
                        <i className="feather icon-calendar"></i>
                      </InputGroup.Text>
                    </div>
                    <div className="input-group date mb-0">
                      <DatePicker
                        className="form-control datepicker-input"
                        selected={startDateBright}
                        onChange={(date) => setStartDateBright(date)}
                      />
                      <InputGroup.Text>
                        <i className="feather icon-calendar"></i>
                      </InputGroup.Text>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

Form2_datepicker.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Form2_datepicker;
