import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormColorOptions from "@views/Forms/Radio/FormColorOptions";
import FormCustomRadio from "@views/Forms/Radio/FormCustomRadio";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_radio = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Radio" />
            <Row>
                <Col md={12}>
                    <FormCustomRadio />
                    <FormColorOptions />
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_radio.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_radio;