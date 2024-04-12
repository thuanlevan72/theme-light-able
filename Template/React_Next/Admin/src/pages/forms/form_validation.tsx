import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormValidation from "@views/Forms/FormValidation/FormValidation";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form_validation = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Form Validation" />
            <Row>
                <Col md={12}>
                    <FormValidation/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form_validation.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form_validation;