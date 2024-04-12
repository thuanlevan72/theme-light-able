import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import BasicTable from "@views/Table/VenillaTable/BasicTable";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Tbl_dt_simple = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Basic initialization" />
            <Row>
                <Col md={12}>
                    <BasicTable />
                </Col>
            </Row>
        </React.Fragment>
    )
}

Tbl_dt_simple.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Tbl_dt_simple;