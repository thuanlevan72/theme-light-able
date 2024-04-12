import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const FormHorizontal = () => {
    return ( 
        <React.Fragment>
            <Card>
            <Card.Header>
              <h5>Horizontal Form</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <h6>Horizontal Form Example</h6>
                  <hr />
                  <Form onSubmit={(event: any) => event.preventDefault()}>
                    <Row className="mb-3">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                      <Col sm={9}>
                        <Form.Control type="email" id="inputEmail3" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                      <Col sm={9}>
                        <Form.Control type="password" id="inputPassword3" />
                      </Col>
                    </Row>
                    <fieldset>
                      <Row className="mb-3">
                        <div className="col-form-label col-sm-3 pt-0">Radios</div>
                        <Col sm={9}>
                          <Form.Check>
                            <Form.Check.Input type="radio" name="gridRadios" id="gridRadios1"
                              defaultValue="option1" defaultChecked />
                            <Form.Check.Label htmlFor="gridRadios1"> First radio </Form.Check.Label>
                          </Form.Check>
                          <Form.Check>
                            <Form.Check.Input type="radio" name="gridRadios" id="gridRadios2"
                              value="option2" />
                            <Form.Check.Label htmlFor="gridRadios2"> Second radio </Form.Check.Label>
                          </Form.Check>
                          <Form.Check disabled={true}>
                            <Form.Check.Input type="radio" name="gridRadios" id="gridRadios3"
                              value="option3" disabled />
                            <Form.Check.Label htmlFor="gridRadios3"> Third disabled radio </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                    </fieldset>
                    <Row className="mb-3">
                      <div className="col-form-label col-sm-3 pt-0">Checkbox</div>
                      <Col sm={9}>
                        <Form.Check>
                          <Form.Check.Input type="checkbox" id="gridCheck1" />
                          <Form.Check.Label className="form-check-label" htmlFor="gridCheck1"> Example checkbox </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="mb-4">Sign in</Button>
                  </Form>
                </Col>
                <Col lg={6}>
                  <h6>Horizontal Form Label Sizing</h6>
                  <hr />
                  <Row className="mb-3">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <Col sm={10}>
                      <Form.Control type="email" className="form-control-sm" id="colFormLabelSm"
                        placeholder="col-form-label-sm" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                    <Col sm={10}>
                      <Form.Control type="email" id="colFormLabel" placeholder="col-form-label" />
                    </Col>
                  </Row>
                  <Col className="row">
                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <Col sm={10}>
                      <Form.Control type="email" className="form-control-lg" id="colFormLabelLg"
                        placeholder="col-form-label-lg" />
                    </Col>
                  </Col>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </React.Fragment>
     );
}

export default FormHorizontal;