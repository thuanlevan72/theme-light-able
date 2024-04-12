import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import ProductDetails from "@views/Application/E-details/ProductDetails";
import ProductFeatures from "@views/Application/E-details/ProductFeatures";
import ProductRelated from "@views/Application/E-details/ProductRelated";
import ProductSlider from "@views/Application/E-details/ProductSlider";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const EcomProductDetails = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Products" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <ProductSlider />
                                <ProductDetails />
                            </Row>
                        </Card.Body>
                    </Card>
                    <ProductFeatures />
                    <ProductRelated />
                </Col>
            </Row>

        </React.Fragment>
    );
};
EcomProductDetails.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EcomProductDetails;