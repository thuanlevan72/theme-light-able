import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import ProductDescription from "@views/Application/E-ProductAdd/ProductDescription";
import ProductVariant from "@views/Application/E-ProductAdd/ProductVariant";
import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const EcomProductAdd = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Add New Product" />
            <Row>
                <ProductDescription />
                <ProductVariant />
                <Col sm={12}>
                    <Card>
                        <Card.Body className="text-end btn-page">
                            <button className="btn btn-primary mb-0">Save product</button>
                            <button className="btn btn-outline-secondary mb-0">Reset</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

EcomProductAdd.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default EcomProductAdd;