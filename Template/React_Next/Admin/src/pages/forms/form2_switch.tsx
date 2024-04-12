import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormInlineSwitch from "@views/Forms/Switch/FormInlineSwitch";
import FormSizing from "@views/Forms/Switch/FormSizing";
import FormSwitchHorizontal from "@views/Forms/Switch/FormSwitchHorizontal";
import FormSwitchV1 from "@views/Forms/Switch/FormSwitchV1";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_switch = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Switch" />
            <Row>
                <Col md={12}>
                    <FormSwitchV1 />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormInlineSwitch />
                    <FormSwitchHorizontal />
                </Col>
                <Col md={6}>
                    <FormSizing/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_switch.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_switch;