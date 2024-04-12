import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ReportsChart = () => {

    // reports chart
    const series = [
        {
          name: "Tomorow",
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: "Today",
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: "Yesterday",
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
    ];
    var options_reports : any = {
        chart: {
          type: 'area',
          height: 250,
          toolbar: {
            show: false
          }
        },
        colors: ['#1DE9B6','#A389D4','#0398F2'],
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            stops: [0, 100],
            shadeIntensity: 0.5,
            gradientToColors: ['#1DC4E9','#899ED4','#38B9E7'],
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
            <Col xxl={6}>
                <Card>
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h5>Reports</h5>
                    <i className="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Reports"></i>
                </div>
                <Card.Body>
                    <div className="d-sm-flex align-items-center justify-content-between">
                    <ul className="list-inline me-auto mb-3 mb-sm-0">
                        <li className="list-inline-item">
                        Visitor
                        </li>
                        <li className="list-inline-item">
                        <button id="chart-line" className="avtar avtar-s btn btn-light-secondary">
                            <i className="ph-duotone ph-chart-line f-18"></i>
                        </button>
                        </li>
                        <li className="list-inline-item">
                        <button id="chart-bar" className="avtar avtar-s btn btn-light-secondary">
                            <i className="ph-duotone ph-chart-bar f-18"></i>
                        </button>
                        </li>
                        <li className="list-inline-item">
                        <button id="chart-area" className="avtar avtar-s btn btn-light-secondary">
                            <i className="ph-duotone ph-wave-sine f-18"></i>
                        </button>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0 me-1">$ 82.99</h3>
                        <span className="badge bg-success"><i className="ti ti-arrow-narrow-up"></i> 2.6%</span>
                    </div>
                    </div>
                    <div id="reports-chart">
                        <ReactApexChart series={series} options={options_reports} type="area" height={250} />
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ReportsChart;