import React from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import {
  ratingSeries,
  options_project_rating,
  transactionsSeries,
  options_transactions,
  canceledSeries,
  options_canceled_order,
  totalorderSeries,
  options_total_order
} from "./chartData";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OtherWidgets = () => {

  return (
    <>
      <Col md={6} xxl={3}>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1 me-3">
                <h6 className="mb-0">Project Rating</h6>
              </div>
              <div className="flex-shrink-0">
                <Dropdown>
                  <Dropdown.Toggle as="a"
                    className="avtar avtar-s btn-link-secondary arrow-none"
                    href="#!"
                  >
                    <i className="ti ti-dots-vertical f-18"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Item href="#">Today</Dropdown.Item>
                    <Dropdown.Item href="#">Weekly</Dropdown.Item>
                    <Dropdown.Item href="#">Monthly</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="ph-duotone ph-star text-warning me-1"></i>
              <h4 className="mb-0">4.5 <small className="text-muted"> / 5</small></h4>
              <span className="badge bg-light-success ms-2">36%</span>
            </div>
            <div id="project-rating-chart">
              <ReactApexChart series={ratingSeries} options={options_project_rating} type="bar" height={50} />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xxl={3}>
        <Card>
          <div className="card-header py-3">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Transactions</h5>
              <input type="date" className="form-control form-control-sm w-auto border-0 shadow-none2" />
            </div>
          </div>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={5}>
                <h5 className="mb-1">$ 59,48</h5>
                <span className="badge bg-success">36%</span>
              </Col>
              <Col xs={7}>
                <div id="transactions-chart">
                  <ReactApexChart series={transactionsSeries} options={options_transactions} type="bar" height={60} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xxl={3}>
        <Card>
          <div className="card-header py-3">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Canceled order</h5>
              <input type="date" className="form-control form-control-sm w-auto border-0 shadow-none2" />
            </div>
          </div>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={5}>
                <h4 className="mb-1">3.15k</h4>
              </Col>
              <Col xs={7}>
                <div id="canceled-order-chart">
                  <ReactApexChart series={canceledSeries} options={options_canceled_order} type="line" height={60} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xxl={3}>
        <Card>
          <Card.Body className="pb-0">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="mb-1">3.15k</h4>
                <p className="mb-0">Total Order</p>
              </div>
              <i className="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Overview"></i>
            </div>
          </Card.Body>
          <div id="total-order-chart">
            <ReactApexChart series={totalorderSeries} options={options_total_order} type="area" height={100} />
          </div>
        </Card>
      </Col>
    </>
  )
}

export default OtherWidgets;