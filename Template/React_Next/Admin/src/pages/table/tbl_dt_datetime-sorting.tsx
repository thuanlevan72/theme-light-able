import React, { ReactElement  } from "react";
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";
import { Card, Col, Row } from "react-bootstrap";
import { sortingData } from "@common/JsonData";
import TableContainer from "@common/TableContainer";

const Tbl_dt_datetime_sorting = () => {

  const columns = [
      {
        header: 'ISO',
        accessorKey: 'ISO',
        enableColumnFilter: false,
      },
      {
        header: 'MySQL',
        accessorKey: 'MySQL',
        enableColumnFilter: false,
      },
      {
        header: 'RFC',
        accessorKey: 'RFC',
        enableColumnFilter: false,
      },
      {
        header: 'MDY',
        accessorKey: 'MDY',
        enableColumnFilter: false,
      },
      {
        header: 'DMY',
        accessorKey: 'DMY',
        enableColumnFilter: false,
      },
      {
        header: 'date',
        accessorKey: 'date',
        enableColumnFilter: false,
      },
      {
        header: 'UNIX',
        accessorKey: 'UNIX',
        enableColumnFilter: false,
      },
    ]

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Table" subTitle="Sorting" />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h5>Datetime Sorting</h5>
            </Card.Header>
            <Card.Body className="table-border-style">
                {/* .isSortedDesc ? ' 🔽' : ' 🔼') */}
                <TableContainer
                columns={(columns || [])}
                data={(sortingData || [])}
                isGlobalFilter={true}
                isBordered={false}
                customPageSize={10}
                tableClass="table table-hover tbl-product datatable-table"
                theadClass="table-light"
                isPagination={true} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

Tbl_dt_datetime_sorting.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Tbl_dt_datetime_sorting;
