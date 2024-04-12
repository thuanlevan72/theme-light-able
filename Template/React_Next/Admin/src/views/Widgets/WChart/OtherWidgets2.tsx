import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import {
    timesSeries,
    options_time_spent,
    visitorSeries,
    options_new_visitor,
    rewardsSeries,
    options_rewards,
    totalRewardsSeries,
    options_total_rewards,
    bitcoin1series,
    options_bitcoin_1,
    bitcoin2series,
    options_bitcoin_2,
    bitcoin3series,
    options_bitcoin_3,
    totalEarningSeries,
    options_total_earning,
    options_total_earning1
} from "./chartData"

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OtherWidgets2 = () => {

    return (
        <>
            <Col xxl={6}>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={5}>
                        <p className="mb-1">Avg. time spent</p>
                        <h5 className="mb-0">00:03:45</h5>
                      </Col>
                      <Col xs={7}>
                        <div id="timesspent-chart">
                        <ReactApexChart series={timesSeries} options={options_time_spent} type="line"  height={40} />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <p className="mb-1">New visitor</p>
                        <div className="d-flex align-items-center flex-wrap">
                          <h5 className="mb-0 me-1">$3,569</h5>
                          <span className="badge bg-danger"><i className="ti ti-arrow-narrow-down"></i> 2.6%</span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div id="new-visitor-chart">
                        <ReactApexChart series={visitorSeries} options={options_new_visitor} type="bar"  height={60} />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-warning">
                          <i className="ti ti-clipboard-list f-20"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 text-end ms-3">
                        <h5 className="mb-1">9,000</h5>
                        <p className="mb-0">Total Rewards</p>
                      </div>
                    </div>
                    <div id="total-rewards-chart">
                    <ReactApexChart series={rewardsSeries} options={options_rewards} type="line"  height={100} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <div className="text-center mb-2">
                      <div className="avtar avtar-s bg-light-warning">
                        <i className="ti ti-clipboard-list f-20"></i>
                      </div>
                      <h5 className="mb-1">9,000</h5>
                      <p className="mb-0">Total Rewards</p>
                    </div>
                    <div id="total-rewards-chart-2">
                    <ReactApexChart series={totalRewardsSeries} options={options_total_rewards} type="line"  height={100} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <div className="col-lg-12 col-xxl-8">
            <Card>
              <Card.Body>
                <div className="row align-items-center justify-content-center">
                  <Col md={6} xl={4} className="my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 me-1">Bitcoin</p>
                      <p className="mb-0 text-muted"><i className="ph-duotone ph-caret-up f-20 align-bottom text-success"></i> 0.73%</p>
                    </div>
                    <div className="mt-1 row align-items-center">
                      <Col xs={6}>
                        <h5 className="mb-0">£ 5678.09</h5>
                        <p className="text-muted mb-0">Total Tasks</p>
                      </Col>
                      <Col xs={6}>
                        <div id="bitcoin-chart-1">
                        <ReactApexChart series={bitcoin1series} options={options_bitcoin_1} type="line"  height={40} />
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md={6} xl={4} className="my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 me-1">Bitcoin</p>
                      <p className="mb-0 text-muted"><i className="ph-duotone ph-caret-down f-20 align-bottom text-danger"></i> 0.73%</p>
                    </div>
                    <div className="mt-1 row align-items-center">
                      <Col xs={6}>
                        <h5 className="mb-0">£ 5678.09</h5>
                        <p className="text-muted mb-0">Total Tasks</p>
                      </Col>
                      <Col xs={6}>
                        <div id="bitcoin-chart-2">
                        <ReactApexChart series={bitcoin2series} options={options_bitcoin_2} type="line"  height={40} />
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md={6} xl={4} className="my-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 me-1">Bitcoin</p>
                      <p className="mb-0 text-muted"><i className="ph-duotone ph-caret-up f-20 align-bottom text-primary"></i> 0.73%</p>
                    </div>
                    <div className="mt-1 row align-items-center">
                      <Col xs={6}>
                        <h5 className="mb-0">£ 5678.09</h5>
                        <p className="text-muted mb-0">Total Tasks</p>
                      </Col>
                      <Col xs={6}>
                        <div id="bitcoin-chart-3">
                        <ReactApexChart series={bitcoin3series} options={options_bitcoin_3} type="line"  height={40} />
                        </div>
                      </Col>
                    </div>
                  </Col>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Col md={6} xxl={4}>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <div className="my-n4 text-center mx-auto" style={{maxWidth: "130px"}}>
                      <div id="total-earning-chart-1">
                      <ReactApexChart series={totalEarningSeries} options={options_total_earning} type="radialBar"  height={150} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <div className="my-n4 text-center mx-auto" style={{maxWidth: "130px"}}>
                      <div id="total-earning-chart-2">
                      <ReactApexChart series={totalEarningSeries} options={options_total_earning1} type="radialBar"  height={150} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </>
    )
}

export default OtherWidgets2;