import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import DefaultTable from "@views/Table/Bootstrap/SizingTable/DefaultTable";
import ExtraLargeTable from "@views/Table/Bootstrap/SizingTable/ExtraLargeTable";
import ExtraSmallTable from "@views/Table/Bootstrap/SizingTable/ExtraSmallTable";
import LargeTable from "@views/Table/Bootstrap/SizingTable/LargeTable";
import SmallTable from "@views/Table/Bootstrap/SizingTable/SmallTable";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Tbl_sizing = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Sizing" />
            <Row>
                <Col md={6}>
                    <ExtraLargeTable/>
                </Col>
                <Col md={6}>
                    <LargeTable/>
                </Col>
                <Col md={6}>
                    <DefaultTable/>
                </Col>
                <Col md={6}>
                    <SmallTable/>
                </Col>
                <Col sm={12}>
                    <ExtraSmallTable/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

Tbl_sizing.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Tbl_sizing;