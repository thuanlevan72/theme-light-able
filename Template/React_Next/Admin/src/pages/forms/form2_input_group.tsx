import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormBasicExample from "@views/Forms/InputGroup/FormBasicExample";
import FormInputGroupOptions from "@views/Forms/InputGroup/FormInputGroupOptions";
import FormInputGroupSizing from "@views/Forms/InputGroup/FormInputGroupSizing";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_input_group = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Input Group" />
            <Row>
                <Col sm={6}>
                    <FormBasicExample/>
                    <FormInputGroupSizing />
                </Col>
                <Col sm={6}>
                    <FormInputGroupOptions/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_input_group.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_input_group;