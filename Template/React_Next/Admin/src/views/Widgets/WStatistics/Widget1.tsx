import React from "react";
import { Card, Col, Dropdown, DropdownButton, ProgressBar, Row } from "react-bootstrap";

// Import images
import imgStatus1 from "@assets/images/widget/img-status-1.svg";
import imgStatus2 from "@assets/images/widget/img-status-2.svg";
import imgStatus3 from "@assets/images/widget/img-status-3.svg";
import Image from "next/image";

interface StatisticData {
  title: string;
  imgSrc: string;
  value: number;
  max: number;
  percentage: string;
  badgeColor : string;
  progressColor: string;
}

const Widget1: React.FC = () => {
  const statisticsData: StatisticData[] = [
    {
      title: "Online Orders",
      imgSrc: imgStatus1,
      value: 237,
      max: 400,
      percentage: "36%",
      badgeColor: "bg-light-success",
      progressColor: "bg-brand-color-2",
    },
    {
      title: "Pending Orders",
      imgSrc: imgStatus2,
      value: 100,
      max: 500,
      percentage: "20%",
      badgeColor: "bg-light-primary",
      progressColor: "bg-brand-color-1",
    },
    {
      title: "Return Orders",
      imgSrc: imgStatus3,
      value: 50,
      max: 400,
      percentage: "10%",
      badgeColor: "bg-light-danger",
      progressColor: "bg-brand-color-3",
    },
  ];

  return (
    <>
      {(statisticsData || []).map((item: StatisticData, key: number) => (
        <Col sm={6} xl={4} key={key}>
          <Card className="statistics-card-1">
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
              <Image src={item.imgSrc} alt="img" className="img-fluid img-bg" />
              <div className="d-flex align-items-center">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                  {item.value} <small className="text-muted">/{item.max}</small>
                </h3>
                <span className={`badge ${item.badgeColor} ms-2`}>{item.percentage}</span>
              </div>
              <p className="text-muted mb-2 text-sm mt-3">Delivery Orders</p>
              <div className="progress" style={{height: "7px"}}>
                <div
                  className={"progress-bar " + item.progressColor}
                  role="progressbar"
                  style={{width: "75%"}}
                ></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Widget1;
