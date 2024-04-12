import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormColorOptions from "@views/Forms/Checkbox/FormColorOptions";
import FormCustomCheckbox from "@views/Forms/Checkbox/FormCustomCheckbox";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_checkbox = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Checkbox" />
            <Row>
                <Col md={12}>
                    <FormCustomCheckbox/>
                    <FormColorOptions/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_checkbox.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_checkbox;