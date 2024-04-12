import React, { useState } from 'react';
import { Badge, Form, Button, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState<number>(0);

    return (
        <React.Fragment>
            <div className="col-md-6">
                <Badge bg="success" className="f-14">
                    In stock
                </Badge>
                <h5 className="my-3">Apple Watch SE Smartwatch (GPS, 40mm) (Heart Rate Monitoring)</h5>
                <div className="star f-18 mb-3">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="far fa-star text-muted"></i>
                    <span className="text-sm text-muted">(4.0)</span>
                </div>
                <h5 className="mt-4 mb-sm-1 mb-0">Offer</h5>
                <div className='offer-check-block'>
                    <div className="offer-check border rounded p-3">
                        <Form.Check>
                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef2" defaultChecked />
                            <Form.Check.Label className="d-block" htmlFor="customCheckdef2">
                                <span className="h6 mb-0 d-block">No Cost EMI</span>
                                <span className="text-muted offer-details">
                                    Upto ₹2,322.51 EMI interest savings on select Credit Cards Upto ₹2,322.51 EMI interest savings on select Credit Cards
                                </span>
                                <span className="h6 mb-0 text-primary">1 Offer <i className="ti ti-arrow-narrow-right"></i></span>
                            </Form.Check.Label>
                        </Form.Check>
                    </div>
                    <div className="offer-check border rounded p-3">
                        <Form.Check>
                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef2" defaultChecked />
                            <Form.Check.Label className="d-block" htmlFor="customCheckdef2">
                                <span className="h6 mb-0 d-block">Bank Offer</span>
                                <span className="text-muted offer-details">Upto ₹1,250.00 discount on select Credit CardsUpto ₹2,322.51 EMI interest savings on select Credit
                                    Cards</span>
                                <span className="h6 mb-0 text-primary">1 Offer <i className="ti ti-arrow-narrow-right"></i></span>
                            </Form.Check.Label>
                        </Form.Check>
                    </div>
                    <div className="offer-check border rounded p-3">
                        <Form.Check>
                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef3" defaultChecked />
                            <Form.Check.Label className="d-block" htmlFor="customCheckdef3">
                                <span className="h6 mb-0 d-block">No Cost EMI</span>
                                <span className="text-muted offer-details"
                                >Upto ₹2,322.51 EMI interest savings on select Credit CardsUpto ₹2,322.51 EMI interest savings on select
                                    Credit Cards</span>
                                <span className="h6 mb-0 text-primary">1 Offer <i className="ti ti-arrow-narrow-right"></i></span>
                            </Form.Check.Label>
                        </Form.Check>
                    </div>
                    <div className="offer-check border rounded p-3">
                        <Form.Check>
                            <Form.Check.Input type="radio" name="radio1" className="input-primary" id="customCheckdef4" defaultChecked />
                            <Form.Check.Label className="d-block" htmlFor="customCheckdef4">
                                <span className="h6 mb-0 d-block">Bank Offer</span>
                                <span className="text-muted offer-details"
                                >Upto ₹1,250.00 discount on select Credit CardsUpto ₹2,322.51 EMI interest savings on select Credit
                                    Cards</span>
                                <span className="h6 mb-0 text-primary">1 Offer <i className="ti ti-arrow-narrow-right"></i></span>
                            </Form.Check.Label>
                        </Form.Check>
                    </div>
                </div>
                <h5 className="mt-4 mb-sm-3 mb-2 f-w-500">About this item</h5>
                <ul>
                    <li className="mb-2">Care Instructions: Hand Wash Only</li>
                    <li className="mb-2">Fit Type: Regular</li>
                    <li className="mb-2">Dark Blue Regular Women Jeans</li>
                    <li className="mb-2">Fabric: 100% Cotton</li>
                </ul>
                <Row className="mb-2">
                    <Form.Label className="col-form-label col-lg-3 col-sm-12">
                        Colors <span className="text-danger">*</span>
                    </Form.Label>
                    <Col lg={9} md={12} sm={12} className="d-flex align-items-center">
                        <Form.Check className="form-check-inline color-checkbox mb-0">
                            <Form.Check.Input type="radio" name="product_color" defaultChecked />
                            <i className="fas fa-circle text-primary"></i>
                        </Form.Check>

                        <Form.Check className='form-check-inline color-checkbox mb-0'>
                            <Form.Check.Input type="radio" name="product_color" defaultChecked />
                            <i className="fas fa-circle text-secondary"></i>
                        </Form.Check>
                        <Form.Check className='form-check-inline color-checkbox mb-0'>
                            <Form.Check.Input type="radio" name="product_color" defaultChecked />
                            <i className="fas fa-circle text-danger"></i>
                        </Form.Check>
                        <Form.Check className='form-check-inline color-checkbox mb-0'>
                            <Form.Check.Input type="radio" name="product_color" defaultChecked />
                            <i className="fas fa-circle text-dark"></i>
                        </Form.Check>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Form.Label column lg={3} sm={12} className="col-form-label">
                        <span className="d-block">Size</span>
                        <a className="link-primary text-sm text-decoration-underline">Size Chart?</a>
                    </Form.Label>
                    <Col lg={9} md={12} sm={12}>
                        <Row className="g-2">
                            <div className='col-auto'>
                                <input type="radio" className='btn-check' id="btnrdolite1" name="btn_radio2" defaultChecked />
                                <label className='btn btn-sm btn-light-primary'>Small</label>
                            </div>
                            <div className='col-auto'>
                                <input type="radio" className='btn-check' id="btnrdolite1" name="btn_radio2" defaultChecked />
                                <label className='btn btn-sm btn-light-primary'>Medium</label>
                            </div>
                            <div className='col-auto'>
                                <input type="radio" className='btn-check' id="btnrdolite1" name="btn_radio2" defaultChecked />
                                <label className='btn btn-sm btn-light-primary'>Large</label>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={3} sm={12}>
                        Quantity <span className="text-danger">*</span>
                    </Form.Label>
                    <Col lg={9} md={12} sm={12}>
                        <div className="btn-group btn-group-sm mb-2 border" role="group">
                            <Button variant="link-secondary" onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
                                <i className="ti ti-minus"></i>
                            </Button>
                            <input
                                className="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                type="text"
                                defaultValue={quantity}
                            />
                            <Button variant="link-secondary" onClick={() => setQuantity(quantity + 1)}>
                                <i className="ti ti-plus"></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <h3 className="mb-4">
                    <b>$299.00</b>
                    <span className="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$399.00</span>
                </h3>
                <Row>
                    <Col xs={6}>
                        <div className="d-grid">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="d-grid">
                            <Button variant="outline-secondary">Add to Cart</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment >
    );
}

export default ProductDetails;