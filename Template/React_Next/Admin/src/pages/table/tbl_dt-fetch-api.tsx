import { apimethod } from "@common/JsonData";
import TableContainer from "@common/TableContainer";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Tbl_dt_fetch_api = () => {

  const columns = [
    { header: "Name", enableColumnFilter: false, accessorKey: "Name" },
    { header: "Ext.", enableColumnFilter: false, accessorKey: "Ext" },
    { header: "City", enableColumnFilter: false, accessorKey: "City" },
    {
      header: "Start Date",
      enableColumnFilter: false,
      accessorKey: "StartDate"
    }
  ];

  return (
    <React.Fragment>
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Fetch API</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div id="pc-dt-fetchapi">
                <TableContainer
                  columns={columns || []}
                  data={apimethod || []}
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

Tbl_dt_fetch_api.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Tbl_dt_fetch_api;
