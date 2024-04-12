import React from "react";
import { Card, Col, Dropdown, DropdownButton, ProgressBar, Row } from "react-bootstrap";

interface UserData {
  title: string;
  value: number;
  percentage: string;
  badgeColor: string;
  increase : string;
}

const Widget2: React.FC = () => {
  const UserData: UserData[] = [
    {
      title: "Register User",
      value: 1205,
      percentage: "20%",
      badgeColor: "bg-light-success",
      increase : "Monthly Increase"
    },
    {
        title: "Daily User",
        value: 467,
        percentage: "10%",
        badgeColor: "bg-light-warning",
        increase : "Weekly  Increase"
    },
    {
        title: "Premium User",
        value: 346,
        percentage: "50%",
        badgeColor: "bg-light-info",
        increase : "Yearly Increase"
    },
  ];

  return (
    <>
      {(UserData || []).map((item: UserData, key: number) => (
        <Col sm={6} xl={4} key={key}>
          <Card>
            <div className="card-header d-flex align-items-center justify-content-between py-3">
              <h5>{item.title}</h5>

              <Dropdown>
                <Dropdown.Toggle
                  as="a"
                  className="avtar avtar-xs btn-link-secondary arrow-none"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="material-icons-two-tone f-18">more_vert</i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  <Dropdown.Item href="#">View</Dropdown.Item>
                  <Dropdown.Item href="#">Edit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Card.Body>
                <div className="d-flex align-items-end mb-3">
                  <h4 className="mb-0">{item.value}</h4>
                  <span className={"badge ms-2 " + item.badgeColor}>{item.percentage}%</span>
                </div>
                <p className="text-muted mb-0">{item.increase}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Widget2;
