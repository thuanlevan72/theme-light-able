import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import ColumnsFormLayout from "@views/Forms/MultiLayout/ColumnsFormLayout";
import ColumnsHorizontalLayout from "@views/Forms/MultiLayout/ColumnsHorizontalLayout";
import ThreeColumnsHorizontal from "@views/Forms/MultiLayout/ThreeColumnsHorizontal";
import ThreeColumnsLayout from "@views/Forms/MultiLayout/ThreeColumnsLayout";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_lay_multicolumn = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Multi Layout" />
            <Row>
                <Col md={12}>
                    <ColumnsFormLayout/>
                    <ColumnsHorizontalLayout/>
                    <ThreeColumnsLayout/>
                    <ThreeColumnsHorizontal/>
                </Col>

            </Row>
        </React.Fragment>
    )
}

form2_lay_multicolumn.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_lay_multicolumn;