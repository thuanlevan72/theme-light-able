import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Overview2Charts = () => {

    const series = [
        {
            data: [10, 30, 40, 20, 60, 50]
        }
    ];
    var options_overview_bar : any = {
        chart: { type: 'bar', height: 150, sparkline: { enabled: true } },
        colors: ['#F44236', '#04A9F5', '#673ab7', '#1DE9B6', '#F4C22B', '#3EBFEA'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%', distributed: true} },
        series: [
          {
            data: [10, 30, 40, 20, 60, 50]
          }
        ],
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
          fixed: { enabled: false },
          x: { show: false },
          y: {
            title: {
              formatter: function (seriesName : any) {
                return '';
              }
            }
          },
          marker: { show: false }
        }
    };
    return (
        <>
            <Col md={12} xl={4}>
            <Card>
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5>Overview</h5>
                <i className="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Overview"></i>
              </div>
              <Card.Body>
                <div id="overview-bar-chart">
                    <ReactApexChart series={series} options={options_overview_bar} type="bar" height={150} />
                </div>
                <div className="bg-body mt-3 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-danger f-12"></i> Apps</p>
                  <h5 className="mb-0 ms-1">10+</h5>
                </div>
                <div className="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-primary f-12"></i> Other</p>
                  <h5 className="mb-0 ms-1">5</h5>
                </div>
                <div className="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-purple-500 f-12"></i> Widgets</p>
                  <h5 className="mb-0 ms-1">150+</h5>
                </div>
                <div className="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-success f-12"></i> Forms</p>
                  <h5 className="mb-0 ms-1">50+</h5>
                </div>
                <div className="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-warning f-12"></i> Components</p>
                  <h5 className="mb-0 ms-1">200+</h5>
                </div>
                <div className="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                  <p className="mb-0"><i className="ph-duotone ph-circle text-info f-12"></i> Pages</p>
                  <h5 className="mb-0 ms-1">150+</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
    )
}

export default Overview2Charts;