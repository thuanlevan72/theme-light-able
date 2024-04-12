import React from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const YearlySummaryChart = () => {

  const series = [
    {
      name: 'Net Profit',
      data: [76, 85, 101, 98, 87]
    },
    {
      name: 'Revenue',
      data: [44, 55, 57, 56, 61]
    }
  ];

  var options_yearly_summary: any = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        borderRadius: 2,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1DE9B6', '#0398F2'],
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        stops: [0, 100],
        shadeIntensity: 0.5,
        gradientToColors: ['#1DC4E9', '#38B9E7'],
      }
    },
    grid: {
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  return (
    <>
      <Col lg={6}>
        <Card>
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Yearly Summary</h5>
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
            </div>
          </div>
          <Card.Body>
            <Row className="justify-content-center g-3 text-center mb-3">
              <Col xs={6} md={4}>
                <div className="overview-product-legends">
                  <p className="text-muted mb-1"><span>Invoiced</span></p>
                  <h4 className="mb-0">$2356.4</h4>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="overview-product-legends">
                  <p className="text-muted mb-1"><span>Profit</span></p>
                  <h4 className="mb-0">$1935.6</h4>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="overview-product-legends">
                  <p className="text-muted mb-1"><span>Expenses</span></p>
                  <h4 className="mb-0">$468.9</h4>
                </div>
              </Col>
            </Row>
            <div id="monthly-report-graph">
              <ReactApexChart series={series} options={options_yearly_summary} type="bar" height={250} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default YearlySummaryChart;