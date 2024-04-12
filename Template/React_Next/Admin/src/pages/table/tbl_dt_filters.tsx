import BreadcrumbItem from "@common/BreadcrumbItem";
import { filterdata } from "@common/JsonData";
import TableContainer from "@common/TableContainer";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Tbl_dt_filters = () => {
  const columns = [
    { header: "Name", accessorKey: "Name", enableColumnFilter: false },
    { header: "Job", accessorKey: "Job", enableColumnFilter: false },
    { header: "Company", accessorKey: "Company", enableColumnFilter: false },
    { header: "Ext.", accessorKey: "Ext", enableColumnFilter: false },
    { header: "Start Date", accessorKey: "Start", enableColumnFilter: false },
    { header: "Email", accessorKey: "Email", enableColumnFilter: false },
    { header: "Phone No.", accessorKey: "Phone", enableColumnFilter: false }
  ];

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Table" subTitle="Filters" />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Filters</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div id="pc-dt-filter">
                <TableContainer
                  columns={columns || []}
                  data={filterdata || []}
                  isGlobalFilter={true}
                  isBordered={false}
                  customPageSize={10}
                  isPagination={true}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

Tbl_dt_filters.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Tbl_dt_filters;
