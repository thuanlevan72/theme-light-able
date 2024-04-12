import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormSizing from "@views/Forms/Option/FormSizing";
import FormBasicInputs from "@views/Forms/Option/FormBasicInputs";
import FormHtmlInputTypes from "@views/Forms/Option/FormHtmlInputTypes";
import FormInputAttributes from "@views/Forms/Option/FormInputAttributes";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import FormAdvanceInputAttributes from "@views/Forms/Option/FormAdvanceInputAttributes";

const form2_basic = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Form Option" />
            <Row>
                <Col sm={6}>
                    <FormBasicInputs />
                    <FormHtmlInputTypes />
                </Col>
                <Col sm={6}>
                    <FormSizing />
                    <FormInputAttributes />
                    <FormAdvanceInputAttributes />
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_basic.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_basic;