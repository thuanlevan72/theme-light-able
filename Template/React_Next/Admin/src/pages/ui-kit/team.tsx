import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useMemo } from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { teamData } from "@common/JsonData";
import TableContainer from "@common/TableContainer";

const Team = () => {

  const columns = useMemo(
    () => [
      {
        header: "#",
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        header: "NAME",
        enableColumnFilter: false,
        accessorKey: "icon",
        cell: (cellProps: any) => {
          return (
            <>
              <Row>
                <div className="col-auto pe-0">
                  <div className="avtar avtar-s btn-light-primary">
                    <i className={cellProps.getValue()}></i>
                  </div>
                </div>
                <div className="col">
                  <h6 className="mb-1">{cellProps.row.original.designation}</h6>
                  <Link className="text-muted f-12 text-hover-primary" href="mailto:demo@mail.com">
                    {cellProps.row.original.email}</Link>
                </div>
              </Row>
            </>
          );
        },
      },
      {
        header: "ORGANIZATION",
        enableColumnFilter: false,
        accessorKey: "organization",
        cell: (cellProps: any) => {
          return (
            <>
              <Link className="text-muted text-hover-primary" href="#">{cellProps.getValue()}</Link>
            </>
          );
        },
      },
      {
        header: "TEAM LEADER",
        enableColumnFilter: false,
        accessorKey: "img",
        cell: (cellProps: any) => {
          return (
            <>
              <Row className="align-items-center">
                <div className="col-auto pe-0">
                  <Image src={cellProps.getValue()} width={40} height={40} alt="user-image" className="wid-40 rounded" />
                </div>
                <div className="col">
                  <h6 className="mb-0">{cellProps.row.original.teamLeader}</h6>
                </div>
              </Row>
            </>
          );
        },
      },
      {
        header: "MEMBERS",
        enableColumnFilter: false,
        accessorKey: "members",
        cell: (cellProps: any) => {
          return (
            <>
              <div className="user-group">
                {(cellProps.getValue() || [])?.map((item: any, key: number) => (
                  <React.Fragment key={key}>
                    <OverlayTrigger placement="top" overlay={<Tooltip>{item.name}</Tooltip>}>
                      <Image src={item.img} alt="user-image" width={40} height={40} className="avtar" data-bs-toggle="tooltip" data-bs-title="John Doe" />
                    </OverlayTrigger>
                  </React.Fragment>
                ))}
                <span className="avtar rounded-circle bg-light-primary text-primary">+1</span>
              </div>
            </>
          );
        },
      },
      {
        header: "LOCATION",
        enableColumnFilter: false,
        accessorKey: "location",
        cell: (cellProps: any) => {
          return (
            <React.Fragment>
              <span>{cellProps.getValue()}</span>
              <div className="prod-action-links">
                <ul className="list-inline me-auto mb-0">
                  <li className="list-inline-item align-bottom">
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                      <Link href="#" className="avtar avtar-xs btn-link-warning btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                        <i className="ti ti-eye f-18"></i>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="list-inline-item align-bottom">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                      <Link href="#!" className="avtar avtar-xs btn-link-success btn-pc-default">
                        <i className="ti ti-edit-circle f-18"></i>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="list-inline-item align-bottom">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                      <Link href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                        <i className="ti ti-trash f-18"></i>
                      </Link>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
            </React.Fragment>
          )
        },
      },
    ],
    []
  );
  return (
    <>
      <BreadcrumbItem mainTitle="Application" subTitle="Team" />
      <Row>
        <Col sm={12}>
          <Card className="table-card">
            <Card.Body className="p-4">
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Team name</label>
                <Col lg={6} sm={8}>
                  <input type="text" className="form-control" placeholder="Enter team name" />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Team Email ID</label>
                <Col lg={6} sm={8}>
                  <input type="email" className="form-control" placeholder="Enter email id" />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Organization</label>
                <Col lg={6} sm={8}>
                  <select className="form-select" aria-label="Default select example">
                    <option>Select Organization</option>
                    <option>SR.Pvt.Ltd</option>
                    <option>JCBK.Pvt.Ltd</option>
                    <option>SMT.Pvt.Ltd</option>
                    <option>DDMS.Pvt.Ltd</option>
                  </select>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Location</label>
                <Col lg={6} sm={8}>
                  <select className="form-select" aria-label="Default select example">
                    <option>Select Location</option>
                    <option>India</option>
                    <option>Australia</option>
                    <option>Indonasia</option>
                    <option>Malaysia</option>
                  </select>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Team Member</label>
                <Col lg={6} sm={8}>
                  <select className="form-select" multiple>
                    <option>Select Team Member</option>
                    <option>user One</option>
                    <option>user Two</option>
                    <option>user Three</option>
                    <option>user Four</option>
                    <option>user Five</option>
                    <option>user Six</option>
                  </select>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Team leader</label>
                <Col lg={6} sm={8}>
                  <select className="form-select" aria-label="Default select example">
                    <option>Select Team leader</option>
                    <option>user One</option>
                    <option>user Two</option>
                    <option>user Three</option>
                  </select>
                </Col>
              </Row>
              <div className="form-group row mb-0">
                <span className="col-form-label col-sm-3 text-sm-end"></span>
                <Col lg={6} sm={8}>
                  <button className="btn btn-primary me-2">Create Team</button>
                  <button className="btn btn-outline-secondary">Cancel</button>
                </Col>
              </div>
            </Card.Body>
            <Card.Body className="table-card">
              <TableContainer
                columns={(columns || [])}
                data={(teamData || [])}
                isGlobalFilter={true}
                isBordered={false}
                customPageSize={3}
                tableClass="table tbl-product datatable-table"
                theadClass="table-light"
                isPagination={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

Team.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Team;