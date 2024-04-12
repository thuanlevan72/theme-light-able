import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TeamPerformance = () => {

    const series = [27, 23, 20, 17];
    var options_performance : any = {
        chart: {
          height: 250,
          type: 'donut'
        },
        colors: ['#04A9F5', '#F4C22B', '#1DE9B6', '#04A9F5'],
        labels: ['Total income', 'Total rent', 'Download', 'Views'],
        fill: {
          opacity: [1, 1, 1, 0.3]
        },
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              labels: {
                show: true,
                name: {
                  show: true
                },
                value: {
                  show: true
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        responsive: [
          {
            breakpoint: 575,
            options: {
              chart: {
                height: 250
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '65%',
                    labels: {
                      show: false
                    }
                  }
                }
              }
            }
          },
          {
            breakpoint: 1182,
            options: {
              chart: {
                height: 190
              },
            }
          }
        ]
      };
    return (
        <>
            <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Your team performance</h5>
                  <i className="ph-duotone ph-arrow-square-out f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Your team performance"></i>
                </div>
                <select className="form-select form-select-sm w-auto border-0 shadow-none">
                  <option>Today</option>
                  <option defaultValue="">This week</option>
                  <option>Monthly</option>
                </select>
                <div id="performance-chart">
                    <ReactApexChart series={series} options={options_performance} type="donut" height={250} />
                </div>
                <div className="text-center">
                  <p>your team performance is 5% better this week</p>
                  <div>
                    <button className="btn btn-primary mb-3">View details</button>
                  </div>
                  <div className="d-inline-flex align-items-center m-1">
                    <p className="mb-0"><i className="ph-duotone ph-circle text-primary f-12"></i> Completed </p>
                    <span className="badge bg-light-secondary ms-1">56</span>
                  </div>
                  <div className="d-inline-flex align-items-center m-1">
                    <p className="mb-0"><i className="ph-duotone ph-circle text-secondary f-12"></i> Percentage </p>
                    <span className="badge bg-light-danger ms-1">34</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
    )
}

export default TeamPerformance;