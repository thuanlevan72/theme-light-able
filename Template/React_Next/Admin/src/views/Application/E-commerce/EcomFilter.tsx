import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Collapse, Form, Card, ListGroup, Row, Col, Offcanvas } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const EcomFilter = ({ collapse }: any) => {
    const [showFilter1, setShowFilter1] = useState<boolean>(true);
    const [showFilter2, setShowFilter2] = useState<boolean>(true);
    const [showFilter3, setShowFilter3] = useState<boolean>(true);
    const [showFilter4, setShowFilter4] = useState<boolean>(true);
    const [showFilter5, setShowFilter5] = useState<boolean>(true);
    return (
        <React.Fragment>
            <div className="offcanvas-xxl offcanvas-start ecom-offcanvas" tabIndex={-1} id="offcanvas_mail_filter" style={{ height: "auto" }}>
                <div className="p-0 sticky-xxl-top offcanvas-body">
                    <Collapse in={collapse} className="collapse-horizontal">
                        <div id="ecom-filter">
                            <div className="ecom-filter">
                                <Card>
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <h5>Filter</h5>
                                    </Card.Header>
                                    <SimpleBar className="scroll-block">
                                        <Card.Body>
                                            <ListGroup as="ul" variant="flush">
                                                <ListGroup.Item as="li" className="border-0 px-0 py-2">
                                                    <Link href="#"
                                                        className="btn border-0 px-0 text-start w-100 pb-0"
                                                        onClick={() => setShowFilter1(!showFilter1)}
                                                    >
                                                        <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                                        Gender
                                                    </Link>
                                                    <Collapse in={showFilter1}>
                                                        <div>
                                                            <Form.Check type="checkbox" id="genderfilter1" label="Male" />
                                                            <Form.Check type="checkbox" id="genderfilter2" label="Female" />
                                                            <Form.Check type="checkbox" id="genderfilter3" label="Kids" />
                                                        </div>
                                                    </Collapse>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0 py-2">
                                                    <Link href="#"
                                                        className="btn border-0 px-0 text-start w-100 pb-0"
                                                        onClick={() => setShowFilter2(!showFilter2)}
                                                    >
                                                        <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                                        Categories
                                                    </Link>
                                                    <Collapse in={showFilter2}>
                                                        <div>
                                                            <Form.Check type="checkbox" id="categoryfilter1" label="All" />
                                                            <Form.Check type="checkbox" id="categoryfilter2" label="Electronics" />
                                                            <Form.Check type="checkbox" id="categoryfilter3" label="Fashion" />
                                                            <Form.Check type="checkbox" id="categoryfilter4" label="Kitchen" />
                                                            <Form.Check type="checkbox" id="categoryfilter5" label="Books" />
                                                            <Form.Check type="checkbox" id="categoryfilter6" label="Toys" />
                                                        </div>
                                                    </Collapse>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0 py-2">
                                                    <Link href="#"
                                                        className="btn border-0 px-0 text-start w-100 pb-2"
                                                        onClick={() => setShowFilter3(!showFilter3)}
                                                    >
                                                        <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                                        Colors
                                                    </Link>
                                                    <Collapse in={showFilter3}>
                                                        <div className="collapse" id="filtercollapse3">
                                                            <div>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-primary"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-secondary"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-danger"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-success"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-warning"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-info"></i>
                                                                </Form.Check>
                                                                <Form.Check className="form-check-inline color-checkbox">
                                                                    <Form.Check.Input type="checkbox" />
                                                                    <i className="fas fa-circle text-dark"></i>
                                                                </Form.Check>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0 py-2">
                                                    <Link href="#"
                                                        className="btn border-0 px-0 text-start w-100 pb-0"
                                                        onClick={() => setShowFilter4(!showFilter4)}
                                                    >
                                                        <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                                        Price
                                                    </Link>
                                                    <Collapse in={showFilter4}>
                                                        <Row>
                                                            <Col xs={6}>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter1" value="option1" />
                                                                    <Form.Check.Label htmlFor="pricefilter1">Below $10</Form.Check.Label>
                                                                </Form.Check>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter2" value="option2" />
                                                                    <Form.Check.Label htmlFor="pricefilter2">$50 - $100</Form.Check.Label>
                                                                </Form.Check>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter3" value="option3" />
                                                                    <Form.Check.Label htmlFor="pricefilter3">$150 - $200</Form.Check.Label>
                                                                </Form.Check>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter4" value="option1" />
                                                                    <Form.Check.Label htmlFor="pricefilter4">$10 - $50</Form.Check.Label>
                                                                </Form.Check>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter5" value="option2" />
                                                                    <Form.Check.Label htmlFor="pricefilter5">$100 - $150</Form.Check.Label>
                                                                </Form.Check>
                                                                <Form.Check className="my-2">
                                                                    <Form.Check.Input type="radio" name="price" id="pricefilter6" value="option3" />
                                                                    <Form.Check.Label htmlFor="pricefilter6">Over $200</Form.Check.Label>
                                                                </Form.Check>
                                                            </Col>
                                                        </Row>
                                                    </Collapse>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="border-0 px-0 py-2">
                                                    <Link href="#"
                                                        className="btn border-0 px-0 text-start w-100 pb-2"
                                                        onClick={() => setShowFilter5(!showFilter5)}
                                                    >
                                                        <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                                        Rating
                                                    </Link>
                                                    <Collapse in={showFilter5}>
                                                        <div>
                                                            <Form.Check className="mb-2">
                                                                <Form.Check.Input type="checkbox" defaultChecked id="chkratt1" />
                                                                <Form.Check.Label htmlFor="chkratt1">4★ &amp; above</Form.Check.Label>
                                                            </Form.Check>
                                                            <Form.Check className="mb-2">
                                                                <Form.Check.Input type="checkbox" defaultChecked id="chkratt2" />
                                                                <Form.Check.Label htmlFor="chkratt2">3★ &amp; above</Form.Check.Label>
                                                            </Form.Check>
                                                            <Form.Check className="mb-2">
                                                                <Form.Check.Input type="checkbox" defaultChecked id="chkratt3" />
                                                                <Form.Check.Label htmlFor="chkratt3">2★ &amp; above</Form.Check.Label>
                                                            </Form.Check>
                                                            <Form.Check className="mb-2">
                                                                <Form.Check.Input type="checkbox" defaultChecked id="chkratt4" />
                                                                <Form.Check.Label htmlFor="chkratt4">1★ &amp; above</Form.Check.Label>
                                                            </Form.Check>
                                                        </div>
                                                    </Collapse>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0 px-0 py-2">
                                                    <Button type='reset' variant="light-danger" className="w-100">Clear All</Button>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </SimpleBar>
                                </Card>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EcomFilter;