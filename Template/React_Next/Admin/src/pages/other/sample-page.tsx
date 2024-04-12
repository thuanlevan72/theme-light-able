import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";

const SamplePage = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Other" subTitle="Sample Page" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                        <h5>Hello card</h5>
                        </div>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

SamplePage.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default SamplePage;