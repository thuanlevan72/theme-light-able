import React, { useState } from "react";
import { Form, Col, Card } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const ProductVariant = () => {
    const variantOptions: any[] = [
        { label: 'Choose a city', options: [] },
    ]
    const [selectedGroupsOptions, setSelectedGroupsOptions] = useState<any>([]);
    const handleChangeVariant = (newValue: any) => {
        setSelectedGroupsOptions(newValue);
    };
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <Card.Header>
                        <h5>Selling type</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-2">
                            <Form.Check type="checkbox" id="Checkselling1" label="In-store selling only" defaultChecked />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Check type="checkbox" id="Checkselling2" label="Online Selling only" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" id="Checkselling3" label="Available both in-store and online" />
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Variant</h5>
                    </Card.Header>
                    <Card.Body>
                        <CreatableSelect isMulti
                            options={variantOptions}
                            value={selectedGroupsOptions}
                            onChange={handleChangeVariant} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Select size</h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="row g-2">
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite1" name="btn_radio2" defaultChecked />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite1">34</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite2" name="btn_radio2" />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite2">36</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite3" name="btn_radio2" />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite3">38</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite4" name="btn_radio2" />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite4">40</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite5" name="btn_radio2" />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite5">42</label>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Product image</h5>
                    </Card.Header>
                    <Card.Body>
                        <p><span className="text-danger">*</span> Recommended resolution is 640*640 with file size</p>
                        <Form.Group className="mb-0">
                            <label htmlFor="flupld" className="btn btn-outline-secondary">
                                <i className="ti ti-upload me-2"></i> Click to Upload
                            </label>
                            <Form.Control type="file" id="flupld" className="d-none" />
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Shipping and Delivery</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Items Weight</Form.Label>
                            <select className="form-control">
                                <option>12.00</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                                <option>Category 4</option>
                            </select>
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Status</h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="row g-2">
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite11" name="btn_radio12" defaultChecked />
                                <label className="btn btn-sm btn-light-success" htmlFor="btnrdolite11">Active</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite12" name="btn_radio12" />
                                <label className="btn btn-sm btn-light-primary" htmlFor="btnrdolite12">Processing</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite13" name="btn_radio12" />
                                <label className="btn btn-sm btn-light-danger" htmlFor="btnrdolite13">Close</label>
                            </div>
                            <div className="col-auto">
                                <input type="radio" className="btn-check" id="btnrdolite14" name="btn_radio12" />
                                <label className="btn btn-sm btn-light-warning" htmlFor="btnrdolite14">Pending</label>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ProductVariant;