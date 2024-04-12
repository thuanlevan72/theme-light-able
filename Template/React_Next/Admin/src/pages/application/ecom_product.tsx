import React, { ReactElement, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import EcomFilter from "@views/Application/E-commerce/EcomFilter";
import EcomContent from "@views/Application/E-commerce/EcomContent";

const EcomProduct = () => {
    const [collapse, setCollapse] = useState<any>(true);
    const handleCollapse = () => {
        setCollapse(!collapse);
    };
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Products" />
            <Row>
                <Col sm={12}>
                    <div className="ecom-wrapper">
                        <EcomFilter collapse={collapse} />
                        <EcomContent handleCollapse={handleCollapse} collapse={collapse} />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

EcomProduct.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EcomProduct;