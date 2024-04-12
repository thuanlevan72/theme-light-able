import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import RenderColumnCells from "@views/Table/VenillaTable/RenderColumnCells";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const Tbl_dt_render_column_cells = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Table" subTitle="Render Column Cells" />
            <Row>
                <Col md={12}>
                    <RenderColumnCells />
                </Col>
            </Row>
        </React.Fragment>
    )
}

Tbl_dt_render_column_cells.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Tbl_dt_render_column_cells;