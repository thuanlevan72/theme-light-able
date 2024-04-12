import { filterdata } from "@common/JsonData";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false
});


const FixedHeader = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row: any) => row.Name,
      sortable: true
    },
    {
      name: "JOB",
      selector: (row: any) => row.Job,
      sortable: true
    },
    {
      name: "COMPANY",
      selector: (row: any) => row.Company,
      sortable: true
    },
    {
      name: "EXT",
      selector: (row: any) => row.Ext,
      sortable: true
    },
    {
      name: "START DATE",
      selector: (row: any) => row.Start,
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row: any) => row.Email,
      sortable: true
    }
  ];

  const [pageSize, setPageSize] = useState<number>();

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value) || pageSize);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = filterdata.filter((row : any) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} md={6}>
          <div className="dataTables_length" id="dom-jqry_length">
            <label className="d-flex align-items-center">
              Show{" "}
              <select
                onChange={onChangeInSelect}
                className="form-select form-select-sm"
                style={{ width: "9%" }}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
              entries
            </label>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div id="dom-jqry_filter" className="dataTables_filter">
            <label className="d-flex align-items-center justify-content-end">
              Search:
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder=""
                aria-controls="dom-jqry"
                onChange={handleSearchChange}
                value={searchTerm}
                style={{ width: "25%" }}
              />
            </label>
          </div>
        </Col>
      </Row>
      <DataTable
        striped={true}
        columns={columns}
        data={filteredData}
        // pagination
        fixedHeader
        fixedHeaderScrollHeight="300px"
        className="table-bordered nowrap"
      />
    </React.Fragment>
  );
};

export default FixedHeader;
