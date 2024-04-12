import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import BasicTable from "@views/Table/Bootstrap/BootstrapTable/BasicTable";
import ContextualClassesTable from "@views/Table/Bootstrap/BootstrapTable/ContextualClasses";
import DarkTable from "@views/Table/Bootstrap/BootstrapTable/DarkTable";
import HoverTable from "@views/Table/Bootstrap/BootstrapTable/HoverTable";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Tbl_bootstrap = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Bootstrap Table" />
            <Row>
                <Col md={6}>
                    <BasicTable />
                    <DarkTable />
                </Col>
                <Col md={6}>
                    <HoverTable />
                    
                </Col>
                <Col md={12}>
                    <ContextualClassesTable />
                </Col>
            </Row>
        </React.Fragment>
    )
}

Tbl_bootstrap.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Tbl_bootstrap;