import React, { useState } from "react";
import { Form, Col, InputGroup, Tooltip, OverlayTrigger, Card, Row } from 'react-bootstrap';

const ProductDescription = () => {
    const [price, setPrice] = useState('');
    const [compareAtPrice, setCompareAtPrice] = useState('');
    const [includeTax, setIncludeTax] = useState(true);
    const [costPerItem, setCostPerItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');

    const handlePriceChange = (e: any) => setPrice(e.target.value);
    const handleCompareAtPriceChange = (e: any) => setCompareAtPrice(e.target.value);
    const handleIncludeTaxChange = () => setIncludeTax(!includeTax);
    const handleCostPerItemChange = (e: any) => setCostPerItem(e.target.value);
    const handleQuantityChange = (e: any) => setQuantity(e.target.value);
    const handleSkuChange = (e: any) => setSku(e.target.value);

    const priceTooltip = (
        <Tooltip id="price-tooltip">Price</Tooltip>
    );

    const compareAtPriceTooltip = (
        <Tooltip id="compare-at-price-tooltip">Compare at price</Tooltip>
    );

    const costPerItemTooltip = (
        <Tooltip id="cost-per-item-tooltip">Cost per items</Tooltip>
    );
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <Card.Header>
                        <h5>Product description</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select>
                                    <option>Sneakers</option>
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Brand</Form.Label>
                                <Form.Select>
                                    <option>Nike</option>
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Product Description" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Pricing</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Price{' '}
                                        <OverlayTrigger placement="top" overlay={priceTooltip}>
                                            <span className="ms-1">
                                                <i className="ph-duotone ph-info"></i>
                                            </span>
                                        </OverlayTrigger>
                                    </Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Price" value={price} onChange={handlePriceChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Compare at Price{' '}
                                        <OverlayTrigger placement="top" overlay={compareAtPriceTooltip}>
                                            <span className="ms-1">
                                                <i className="ph-duotone ph-info"></i>
                                            </span>
                                        </OverlayTrigger>
                                    </Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Compare at price" value={compareAtPrice} onChange={handleCompareAtPriceChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Check className="mb-3">
                                    <Form.Check.Input type="checkbox" checked={includeTax} onChange={handleIncludeTaxChange} />
                                    <Form.Check.Label>Including all tax</Form.Check.Label>
                                </Form.Check>
                                <Form.Group className="mb-0">
                                    <Form.Label>
                                        Cost per Items{' '}
                                        <OverlayTrigger placement="top" overlay={costPerItemTooltip}>
                                            <span className="ms-1">
                                                <i className="ph-duotone ph-info"></i>
                                            </span>
                                        </OverlayTrigger>
                                    </Form.Label>
                                    <InputGroup className="mb-0">
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Cost per items" value={costPerItem} onChange={handleCostPerItemChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Inventory</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" placeholder="Enter Quantity" value={quantity} onChange={handleQuantityChange} />
                            </Form.Group>
                            <Form.Group className="mb-0">
                                <Form.Label>
                                    SKU <span className="text-sm text-muted">(optional)</span>
                                </Form.Label>
                                <Form.Control type="text" placeholder="Enter SKU" value={sku} onChange={handleSkuChange} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ProductDescription;