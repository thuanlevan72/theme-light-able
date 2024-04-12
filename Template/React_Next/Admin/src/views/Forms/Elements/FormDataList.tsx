import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const FormDataList = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>DataList</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="form-group">
                            <Form.Label htmlFor="exampleDataList">Datalist example</Form.Label>
                            <Form.Control list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                            <datalist id="datalistOptions">
                                <option value="San Francisco"> </option>
                                <option value="New York"> </option>
                                <option value="Seattle"> </option>
                                <option value="Los Angeles"> </option>
                                <option value="Chicago"> </option>
                            </datalist>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Card>
            <Card.Header>
              <h5>Form Control State</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col md={6}>
                  <h5>Readonly</h5>
                  <hr />
                  <div className="form-group mb-0">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <Form.Control type="text" placeholder="Readonly input here…" value="email@example.com"
                      readOnly={true} />
                  </div>
                </Col>
                <Col md={6}>
                  <h5>Readonly plain Text</h5>
                  <hr />
                  <form>
                    <div className="form-group row mb-0">
                      <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" readOnly className="form-control-plaintext" id="staticEmail"
                          value="email@example.com" />
                      </div>
                    </div>
                  </form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </React.Fragment>
    );
}

export default FormDataList;