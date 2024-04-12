import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormControlDivider from "@views/Forms/FormLayout/FormControlDivider";
import HorizontalFormLayout from "@views/Forms/FormLayout/HorizontalFormLayout";
import InputLabelAlignment from "@views/Forms/FormLayout/InputLabelAlignment";
import SimpleFormLayout from "@views/Forms/FormLayout/SimpleFormLayout";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_lay_default = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Simple Form Layout" />
            <Row>
                <Col md={6}>
                    <SimpleFormLayout/>
                    <FormControlDivider/>
                </Col>
                <Col md={6}>
                    <HorizontalFormLayout/>
                    <InputLabelAlignment/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_lay_default.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_lay_default;