import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form2_daterangepicker = () => {
  const [startDate, setStartDate] = useState<any>();

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Forms" subTitle="Date Range Picker" />
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h5>Preview</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="form-group row">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    Simple Input
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <ReactDatePicker
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
                    <div className="input-group">
                      <ReactDatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <InputGroup.Text>
                        <i className="feather icon-calendar"></i>
                      </InputGroup.Text>
                    </div>
                  </Col>
                </div>
                <div className="form-group row">
                  <Form.Label column lg={3} sm={12} className="text-lg-end">
                    Disable date
                  </Form.Label>
                  <Col lg={4} md={9} sm={12}>
                    <Form.Control
                      type="text"
                      id="pc-date_range_picker-3"
                      disabled
                    />
                  </Col>
                </div>
                <Row className="form-group mb-0">
                  <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">
                    Predefined Ranges
                  </label>
                  <Col lg={4} md={9} sm={12}>
                    <ReactDatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      id="pc-date_range_picker-4"
                    />
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

Form2_daterangepicker.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Form2_daterangepicker;
