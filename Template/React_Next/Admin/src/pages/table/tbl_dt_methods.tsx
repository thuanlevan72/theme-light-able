import BreadcrumbItem from "@common/BreadcrumbItem";
import { method } from "@common/JsonData";
import TableContainer from "@common/TableContainer";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ColumnVisibility = ({ columns, onColumnToggle, visibleColumns }: any) => {
  return (
    <div>
      <h5>Column Visibility</h5>
      <div className="form-group" id="columns">
        {columns.map((column: any, idx: number) => (
          <div className="checkbox form-check" key={idx}>
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox-0"
              name="checkbox"
              checked={visibleColumns.includes(column)}
              onChange={() => onColumnToggle(column)}
            />
            <label htmlFor="checkbox-0" className="form-check-label">
              {" "}
              {column.header}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tbl_dt_methods = () => {
    const columns =[
    {
      header: "SELECT",
      accessorKey: "Select",
      enableColumnFilter: false
    },
    {
      header: "CUSTOMER",
      accessorKey: "Customer",
      enableColumnFilter: false,
      cell: ({ row }: any) => (
        <>
          {row.original.Customer} <br /> {row.original.code}
        </>
      )
    },
    {
      header: "VERSION",
      accessorKey: "Version",
      enableColumnFilter: false
      //   cell: ({ value } : any) => value
    },
    {
      header: "PLANNED UPGRADE",
      accessorKey: "Planned",
      enableColumnFilter: false
      //   cell: ({ value } : any) => value
    },
    {
      header: "DBINFO",
      accessorKey: "DBinfo",
      enableColumnFilter: false,
      cell: ({ row }: any) => (
        <>
          {row.original.DBinfo} <br /> {row.original.DB}
        </>
      )
    },
    {
      header: "Websiteinfo",
      accessorKey: "Websiteinfo",
      enableColumnFilter: false,
      cell: ({ row }: any) => (
        <>
          {row.original.Websiteinfo} <br /> {row.original.Node}
        </>
      )
    }
  ]

  const [visibleColumns, setVisibleColumns] = useState<any>(columns);

  const handleColumnToggle = (toggledColumn: any) => {
    if (visibleColumns.includes(toggledColumn)) {
      setVisibleColumns(visibleColumns.filter((col: any) => col !== toggledColumn));
    } else {
      setVisibleColumns([...visibleColumns, toggledColumn]);
    }
  };

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Table" subTitle="Table Methods" />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Tables Methods</h5>
              <span className="d-block m-t-5">
                use className <code>table</code> inside table element
              </span>
            </Card.Header>
            <Card.Body className="table-border-style">
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light-primary main"
                  id="init"
                >
                  Init
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-light-danger main"
                  id="destroy"
                >
                  Destroy
                </button>
              </div>
              <div className="table-responsive">
                <TableContainer
                  columns={visibleColumns || []}
                  data={method || []}
                  isGlobalFilter={true}
                  isBordered={false}
                  customPageSize={10}
                  isPagination={false}
                />
              </div>
              <Row>
                <Col md={6}>
                  <div id="hide">
                    <ColumnVisibility
                      columns={columns}
                      onColumnToggle={handleColumnToggle}
                      visibleColumns={visibleColumns}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <h5>Import / Export Data</h5>
                  <div className="form-group">
                    <textarea
                      cols={30}
                      rows={2}
                      className="form-control"
                      placeholder="Paste your csv or json string here..."
                    ></textarea>
                  </div>
                  <div className="form-group btn-page">
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm import"
                      data-type="csv"
                    >
                      Import CSV
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm import"
                      data-type="json"
                    >
                      Import JSON
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-success btn-sm export"
                      data-type="csv"
                    >
                      Export CSV
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-success btn-sm export"
                      data-type="sql"
                    >
                      Export SQL
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-success btn-sm export"
                      data-type="json"
                    >
                      Export JSON
                    </button>
                  </div>
                  <div className="form-group">
                    <small>
                      NOTE: The csv column delimiters and line delimiters are
                      set to <code>&quot;,&quot;</code> and
                      <code>&quot;\n&quot;</code> respectively.
                    </small>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

Tbl_dt_methods.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Tbl_dt_methods;
