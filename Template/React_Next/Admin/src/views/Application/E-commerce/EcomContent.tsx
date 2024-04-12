import { ecomData } from "@common/JsonData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import EcomDetails from "./EcomDetails";

const EcomContent = ({ handleCollapse, collapse }: any) => {
    const [show, setShow] = useState<Boolean>(false);
    const [ecomDetails, setEcomDetails] = useState<any>();
    const [products, setProduct] = useState<any>(ecomData);
    const handleClose = () => setShow(!show);

    // search
    const handleSearch = (e: any) => {
        const results = ecomData.filter(product =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setProduct(results);
    }
    return (
        <React.Fragment>
            <div className="ecom-content">
                <div className="d-sm-flex align-items-center mb-4">
                    <ul className="list-inline me-auto my-1">
                        <li className="list-inline-item">
                            <form className="form-search">
                                <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                <Form.Control type="search" placeholder="Search Products" onChange={handleSearch} />
                            </form>
                        </li>
                    </ul>
                    <ul className="list-inline ms-auto my-1">
                        <li className="list-inline-item">
                            <select className="form-select">
                                <option>Price: High To Low</option>
                                <option>Price: Low To High</option>
                                <option>Popularity</option>
                                <option>Discount</option>
                                <option>Fresh Arrivals</option>
                            </select>
                        </li>
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="d-xxl-none btn btn-link-secondary">
                                <i className="ti ti-filter f-16"></i> Filter
                            </Link>
                            <Link href="#" className="d-none d-xxl-inline-flex btn btn-link-secondary" aria-expanded={collapse} onClick={() => handleCollapse()}>
                                <i className="ti ti-filter f-16"></i> Filter
                            </Link>
                        </li>
                    </ul>
                </div>
                <Row>
                    {(products || [])?.map((product: any) => (
                        <Col sm={6} xl={4} key={product.id}>
                            <Card className="product-card">
                                <div className="card-img-top">
                                    <Link href="../application/ecom_product-details">
                                        <Image
                                            src={product.imageUrl}
                                            alt="image"
                                            className="img-prod img-fluid"
                                        />
                                    </Link>
                                    <div className="card-body position-absolute end-0 top-0">
                                        <Form.Check className="prod-likes">
                                            <Form.Check.Input type="checkbox" />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart prod-likes-icon">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </Form.Check>
                                    </div>
                                    {product.discount && (
                                        <div className="card-body position-absolute start-0 top-0">
                                            <span className="badge bg-danger badge-prod-card">
                                                {product.discount}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <Card.Body>
                                    <Link href="../application/ecom_product-details">
                                        <p className="prod-content mb-0 text-muted">{product.name}</p>
                                    </Link>
                                    <div className="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                        <h4 className="mb-0 text-truncate">
                                            <b>${product.price.toFixed(2)}</b>{" "}
                                            <span className="text-sm text-muted f-w-400 text-decoration-line-through">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        </h4>
                                        <div className="d-inline-flex align-items-center">
                                            <i className="ph-duotone ph-star text-warning me-1"></i>
                                            {product.rating} <small className="text-muted">/ 5</small>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <Link
                                                href="#!"
                                                className="avtar avtar-s btn-link-secondary btn-prod-card"
                                                onClick={() => { handleClose(); setEcomDetails(product) }}
                                            >
                                                <i className="ph-duotone ph-eye f-18"></i>
                                            </Link>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-grid">
                                                <Button variant="link-secondary" className="btn-prod-card">
                                                    Add to cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <EcomDetails show={show} handleClose={handleClose} ecomDetails={ecomDetails} />
        </React.Fragment>
    );
}

export default EcomContent;