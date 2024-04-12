import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import BorderBottomColorTable from "@views/Table/Bootstrap/BorderTable/BorderBottomColorTable";
import BorderlessTable from "@views/Table/Bootstrap/BorderTable/BorderlessTable";
import BothBordersTable from "@views/Table/Bootstrap/BorderTable/BothBordersTable";
import DefaultTableBorder from "@views/Table/Bootstrap/BorderTable/DefaultTableBorder";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Tbl_border = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Border Table" />
            <Row>
                <Col xl={6} md={12}>
                    <BothBordersTable />
                    {/* <DefaultTableBorder /> */}
                </Col>
                <Col xl={6} md={12}>
                    <BorderlessTable />
                </Col>
                <Col xl={6} md={12}>
                    <DefaultTableBorder />
                </Col>
                <Col xl={6} md={12}>
                    <BorderBottomColorTable />
                </Col>
            </Row>
        </React.Fragment>
    )
}

Tbl_border.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Tbl_border;