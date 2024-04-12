import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormChoicesjs from "@views/Forms/Select/FormChoicesjs";
import FormInteraction from "@views/Forms/Select/FormInteraction";
import Multipleselectinput from "@views/Forms/Select/Multipleselectinput";
import SingleSelectInput from "@views/Forms/Select/SingleSelectInput";

const form2_choices = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Choices" />
            <Row>
                <Col md={12}>
                    <FormChoicesjs />
                    <Multipleselectinput />
                    <SingleSelectInput />
                    <FormInteraction />
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_choices.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_choices;