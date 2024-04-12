import BreadcrumbItem from "@common/BreadcrumbItem";
import { tableData } from "@common/JsonData";
import TableContainer from "@common/TableContainer";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Tbl_dt_export = () => {
  const columns = [
    { header: "Name", accessorKey: "name", enableColumnFilter: false },
    { header: "Ext.", accessorKey: "ext", enableColumnFilter: false },
    { header: "City", accessorKey: "city", enableColumnFilter: false },
    { header: "Start Date", accessorKey: "date", enableColumnFilter: false },
    {
      header: "Completion",
      accessorKey: "completion",
      cell: (cellProps: any) => {
        return <>{cellProps.getValue()}%</>;
      },
      enableColumnFilter: false
    }
  ];

  return (
    <React.Fragment>
      <BreadcrumbItem subTitle="Export" mainTitle="Table" />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Basic Table</h5>
              <span className="d-block m-t-5">
                use class <code>table</code> inside table element
              </span>
            </Card.Header>
            <Card.Body className="table-border-style">
              <Button className="btn btn-light-primary mb-1 btn-sm csv me-1">
                Export CSV
              </Button>
              <Button className="btn btn-light-primary mb-1 btn-sm sql me-1">
                Export SQL
              </Button>
              <Button className="btn btn-light-primary mb-1 btn-sm txt me-1">
                Export TXT
              </Button>
              <Button className="btn btn-light-primary mb-1 btn-sm json">
                Export JSON
              </Button>

              <div id="pc-dt-export">
                <TableContainer
                  columns={columns || []}
                  data={tableData || []}
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

Tbl_dt_export.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Tbl_dt_export;
