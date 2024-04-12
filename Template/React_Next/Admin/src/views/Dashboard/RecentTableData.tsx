import React from "react";
import { Card, Col, Dropdown } from "react-bootstrap";
import Image from "next/image";

//import images
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";

const RecentTableData = () => {
  return (
    <>
      <Col md={6} xl={8}>
        <Card className="table-card">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <h5>Recent Users</h5>
            <Dropdown>
              <Dropdown.Toggle as="a"
                className="avtar avtar-xs btn-link-secondary arrow-none"
                href="#!"
              ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item href="#">View</Dropdown.Item>
                <Dropdown.Item href="#">Edit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body className="py-2 px-0">
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-sm mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div className="d-inline-block align-middle">
                        <Image src={avatar1} alt="user image" className="img-radius align-top m-r-15" width="40" />
                        <div className="d-inline-block">
                          <h6 className="m-b-0">Quinn Flynn</h6>
                          <p className="m-b-0">Android developer</p>
                        </div>
                      </div>
                    </td>
                    <td><p className="mb-0"><i className="ph-duotone ph-circle text-warning f-12"></i> 11 may 12:30</p></td>
                    <td className="text-end">
                      <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x"></i></button>
                      <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-inline-block align-middle">
                        <Image src={avatar2} alt="user image" className="img-radius align-top m-r-15" width="40" />
                        <div className="d-inline-block">
                          <h6 className="m-b-0">Garrett Winters</h6>
                          <p className="m-b-0">Android developer</p>
                        </div>
                      </div>
                    </td>
                    <td><p className="mb-0"><i className="ph-duotone ph-circle text-success f-12"></i> 11 may 12:30</p></td>
                    <td className="text-end">
                      <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x"></i></button>
                      <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-inline-block align-middle">
                        <Image src={avatar3} alt="user image" className="img-radius align-top m-r-15" width="40" />
                        <div className="d-inline-block">
                          <h6 className="m-b-0">Ashton Cox</h6>
                          <p className="m-b-0">Android developer</p>
                        </div>
                      </div>
                    </td>
                    <td><p className="mb-0"><i className="ph-duotone ph-circle text-primary f-12"></i> 11 may 12:30</p></td>
                    <td className="text-end">
                      <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x"></i></button>
                      <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-inline-block align-middle">
                        <Image src={avatar4} alt="user image" className="img-radius align-top m-r-15" width="40" />
                        <div className="d-inline-block">
                          <h6 className="m-b-0">Cedric Kelly</h6>
                          <p className="m-b-0">Android developer</p>
                        </div>
                      </div>
                    </td>
                    <td><p className="mb-0"><i className="ph-duotone ph-circle text-danger f-12"></i> 11 may 12:30</p></td>
                    <td className="text-end">
                      <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x"></i></button>
                      <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default RecentTableData;