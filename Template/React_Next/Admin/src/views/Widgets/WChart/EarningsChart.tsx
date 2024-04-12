import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const EarningsChart = () => {

    const series : any = [
        {
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }
    ];

    var options : any = {
        chart: {
          type: 'area',
          height: 230,
          toolbar: {
            show: false
          }
        },
        colors: ['#0d6efd'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            type: 'vertical',
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
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
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            hideOverlappingLabels: true,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }
      };
    return (
        <>
            <Col lg={6}>
                <Card>
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Earnings</h5>
                    <input type="date" className="form-control form-control-sm w-auto border-0 shadow-none2" />
                    </div>
                </div>
                <Card.Body>
                    <div className="d-flex align-items-center mb-1">
                        <h3 className="mb-0">$894.39 <small className="text-muted">/+$200.10</small></h3>
                        <span className="badge bg-light-success ms-2">36%</span>
                    </div>
                    <p>Delivery Orders</p>
                    <div id="customer-rate-graph">
                    <ReactApexChart series={series} options={options} type="area"  height={230} />
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default EarningsChart;