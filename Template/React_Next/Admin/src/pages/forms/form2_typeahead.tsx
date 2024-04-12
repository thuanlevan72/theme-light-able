import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormTypeAhead from "@views/Forms/TypeAhead/FormTypeAhead";
import React, { ReactElement } from "react";
import {  Col, Row } from "react-bootstrap";

const form2_typeahead = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="TypeAhead" />
            <Row>
                <Col lg={12}>
                    <FormTypeAhead/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

form2_typeahead.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_typeahead;