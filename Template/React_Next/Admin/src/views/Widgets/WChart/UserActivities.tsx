import React from "react";
import { Card, Col } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const UserActivities = () => {

    const series = [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
          name: 'Income Report',
          data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44]
        }
    ];

    var options_monthly_report : any = {
        
        chart: {
          type: 'bar',
          height: 250,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#04A9F5', '#04A9F5', '#04A9F5', '#7C57C1'],
        fill: {
          opacity: [0.6, 1,  0.6, 1]
        },
        grid: {
          strokeDashArray: 4
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        legend: {
          show: false
        }
      };
    return (
        <>
            <Col lg={6}>
                <Card>
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">User Activities</h5>
                    <select className="form-select form-select-sm w-auto border-0 shadow-none">
                        <option defaultValue="">This week</option>
                        <option>Today</option>
                        <option>Monthly</option>
                    </select>
                    </div>
                </div>
                <Card.Body>
                    <p className="mb-0">Sales</p>
                    <h4>$2356.4</h4>
                    <div id="monthly-report-graph">
                    <ReactApexChart series={series} options={options_monthly_report} type="bar"  height={250} />
                    </div>
                </Card.Body>
                </Card>
          </Col>
        </>
    )
}

export default UserActivities;