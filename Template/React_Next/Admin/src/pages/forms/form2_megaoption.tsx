import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormExample from "@views/Forms/MegaOption/FormExample";
import FormHorizontal from "@views/Forms/MegaOption/FormHorizontal";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_megaoption = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Mega Option" />
            <Row>
                <Col md={12}>
                    <FormExample/>
                    <FormHorizontal/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_megaoption.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_megaoption;