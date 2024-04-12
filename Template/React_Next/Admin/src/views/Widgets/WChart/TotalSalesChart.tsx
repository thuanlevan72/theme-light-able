import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TotalSalesChart = () => {

    const series = [
        {
            name: "Today",
             data: [0, 0, 90, 50, 55, 0, 0, 0, 0,  60, 0, 0]
        },
        {
            name: "Yesterday",
            data: [ 0, 0, 30, 60, 40, 50, 0, 0, 0,0, 0, 0]
        }
    ];

    var options_total_sales : any = {
        chart: {
          type: 'line',
          height: 265,
          toolbar: {
            show: false
          }
        },
        colors: ['#0d6efd','#748892'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 4
          }
        },
        grid: {
          strokeDashArray: 4
        },
        series: [
          {
             name: "Today",
            data: [0, 0, 90, 50, 55, 0, 0, 0, 0,  60, 0, 0]
          },{
            name: "Yesterday",
            data: [ 0, 0, 30, 60, 40, 50, 0, 0, 0,0, 0, 0]
          }
        ],
        xaxis: {
          labels: {
            hideOverlappingLabels: true,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        responsive: [
          {
            breakpoint: 1182,
            options: {
              chart: {
                height: 230
              },
            }
          }
        ]
      };
    return (
        <>
            <Col md={6} xl={4}>
                <Card>
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h5>Total Sales</h5>
                    <i className="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Total Sales"></i>
                </div>
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-center">
                    <h3 className="mb-0 me-1">$ 82.99</h3>
                    <span className="badge bg-success"><i className="ti ti-arrow-narrow-up"></i> 2.6%</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-3 flex-wrap">
                    <p className="mb-0">Online store</p>
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0 me-1">$50.99</h5>
                        <span className="badge bg-light-success"><i className="ti ti-arrow-narrow-up"></i> 2.6%</span>
                    </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                    <p className="mb-0">Facebook</p>
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0 me-1">$32.00</h5>
                        <span className="badge bg-light-danger"><i className="ti ti-arrow-narrow-down"></i> 2.6%</span>
                    </div> 
                    </div>
                    <div id="total-sales-chart">
                    <ReactApexChart series={series} options={options_total_sales} type="line"  height={265} />
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default TotalSalesChart;