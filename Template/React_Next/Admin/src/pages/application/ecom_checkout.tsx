import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import CartDetails from "@views/Application/Checkout/CartDetails";
import Payment from "@views/Application/Checkout/Payment";
import ShippingInformation from "@views/Application/Checkout/ShippingInformation";
import React, { ReactElement } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

const EcomCheckout = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Checkout" />
            <Row>
                <Tab.Container defaultActiveKey="ecomtab-1">
                    <Col sm={12}>
                        <Card>
                            <Card.Body className="p-0">
                                <Nav as="ul" className="nav-tabs checkout-tabs mb-0" id="myTab" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-1" id="ecomtab-tab-1" href="#ecomtab-1" role="tab">
                                            <div className="media align-items-center">
                                                <div className="avtar avtar-s">
                                                    <i className="ti ti-shopping-cart"></i>
                                                </div>
                                                <div className="media-body ms-2">
                                                    <h5 className="mb-0">Cart Details</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-2" id="ecomtab-tab-2" href="#ecomtab-2" role="tab">
                                            <div className="media align-items-center">
                                                <div className="avtar avtar-s">
                                                    <i className="ti ti-building-skyscraper"></i>
                                                </div>
                                                <div className="media-body ms-2">
                                                    <h5 className="mb-0">Shipping Information</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="ecomtab-3" id="ecomtab-tab-3" href="#ecomtab-3" role="tab">
                                            <div className="media align-items-center">
                                                <div className="avtar avtar-s">
                                                    <i className="ti ti-credit-card"></i>
                                                </div>
                                                <div className="media-body ms-2">
                                                    <h5 className="mb-0">Payment</h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                        <Tab.Content>
                            <CartDetails />
                            <ShippingInformation />
                            <Payment />
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>

        </React.Fragment >
    );
}

EcomCheckout.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EcomCheckout;