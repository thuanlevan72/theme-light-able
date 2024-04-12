import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FixedHeader from "@views/Table/DataTable/FixedHeader";
import JqueryTable from "@views/Table/DataTable/JqueryTable";
import Table2 from "@views/Table/DataTable/Table2";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const DtAdvance = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="DataTable" subTitle="Advance Initialization" />
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h5>DOM/Jquery</h5>
              <small>
                Events assigned to the table can be exceptionally useful for
                user interaction, however you must be aware that DataTables will
                add and remove rows from the DOM.
              </small>
            </Card.Header>
            <Card.Body>
              <div className="dt-responsive">
                <JqueryTable />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5>Fixed Header Table</h5>
              <small>
                Fixed Header for the table can be exceptionally useful for user
                interaction, however you must be aware that DataTables will add
                and remove rows from the DOM.
              </small>
            </Card.Header>
            <Card.Body>
              <div className="dt-responsive">
                <FixedHeader />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5>Selected Row Table</h5>
              <small>
                Row selectable from the table can be exceptionally useful for
                user interaction, however you must be aware that DataTables will
                add and remove rows from the DOM.
              </small>
            </Card.Header>
            <Card.Body>
              <div className="dt-responsive">
                <Table2 />
              </div>
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </React.Fragment>
  );
};

DtAdvance.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default DtAdvance;
