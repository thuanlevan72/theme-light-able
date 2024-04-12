import Image from "next/image";
import React from "react";
import { Badge, Card, Form, Offcanvas } from "react-bootstrap";

// img
import brand2 from "@assets/images/application/img-prod-brand-1.png";

const EcomDetails = ({ show, handleClose, ecomDetails }: any) => {
    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card className="product-card shadow-none border-0">
                        <Image className="card-img-top p-0" src={ecomDetails?.imageUrl} alt="" width={302} height={302} />
                        <div className="card-body position-absolute end-0 top-0">
                            <Form.Check className="prod-likes">
                                <Form.Check.Input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart prod-likes-icon">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Form.Check>
                        </div>
                        {
                            ecomDetails?.discount &&
                            <div className="card-body position-absolute start-0 top-0">
                                <Badge bg="danger" className="badge-prod-card">{ecomDetails?.discount}</Badge>
                            </div>
                        }
                    </Card>
                    <h5>Glitter gold Mesh Walking Shoes</h5>
                    <p className="text-muted">Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact.</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                            <div className="d-inline-flex align-items-center justify-content-between w-100">
                                <p className="mb-0 text-muted me-1">Price</p>
                                <h4 className="mb-0"><b>$299.00</b><span className="mx-2 f-14 text-muted f-w-400 text-decoration-line-through">$399.00</span></h4>
                            </div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="d-inline-flex align-items-center justify-content-between w-100">
                                <p className="mb-0 text-muted me-1">Categories</p>
                                <h6 className="mb-0">Shoes</h6>
                            </div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="d-inline-flex align-items-center justify-content-between w-100">
                                <p className="mb-0 text-muted me-1">Status</p>
                                <h6 className="mb-0"><Badge bg="warning" className="rounded-pill">Process</Badge></h6>
                            </div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="d-inline-flex align-items-center justify-content-between w-100">
                                <p className="mb-0 text-muted me-1">Brands</p>
                                <h6 className="mb-0"><Image src={brand2} alt="user-image" width={40} /></h6>
                            </div>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
}

export default EcomDetails;