import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormStickyActionBar from "@views/Forms/StickyActionBar/FormStickyActionBar";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_lay_stickyactionbars = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Sticky Action Bar" />
            <Row>
                <Col sm={12}>
                    <FormStickyActionBar/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_lay_stickyactionbars.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_lay_stickyactionbars;