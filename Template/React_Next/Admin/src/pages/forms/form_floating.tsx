import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormFloatingLabels from "@views/Forms/Floating/FormFloatingLabels";
import FormSelect from "@views/Forms/Floating/FormSelect";
import FormTextareas from "@views/Forms/Floating/FormTextareas";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form_floating = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Floating Label" />
            <Row>
                <Col md={12}>
                   <FormFloatingLabels/>
                   <FormTextareas/>
                   <FormSelect />
                </Col>
            </Row>
        </React.Fragment>
    )
}

form_floating.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form_floating;