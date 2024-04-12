import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import SimpleMarkdown from "@views/Forms/Markdown/SimpleMarkdown";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Markdown = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Markdown" />
            <Row>
                <Col lg={12}>
                    <SimpleMarkdown />
                </Col>
            </Row>
        </React.Fragment>
    )
}

Markdown.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Markdown;