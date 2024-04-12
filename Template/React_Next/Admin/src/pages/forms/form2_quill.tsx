import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormBubbleTheme from "@views/Forms/Quill/FormBubbleTheme";
import FormSnowTheme from "@views/Forms/Quill/FormSnowTheme";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_quill = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Quill Editor" />
            <Row>
                <FormSnowTheme />
                <FormBubbleTheme />
            </Row>
        </React.Fragment>
    )
}

form2_quill.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_quill;