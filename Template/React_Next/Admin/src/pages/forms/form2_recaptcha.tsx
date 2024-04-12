import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormReCaptcha from "@views/Forms/ReCaptcha/FormReCaptcha";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_recaptcha = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="ReCaptcha" />
            <Row>
                <Col sm={12}>
                    <FormReCaptcha/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_recaptcha.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_recaptcha;