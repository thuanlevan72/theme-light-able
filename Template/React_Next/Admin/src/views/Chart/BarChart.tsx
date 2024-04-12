import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {

    const series: any = [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1DE9B6', '#04A9F5', '#3EBFEA'],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        fill: {
            opacity: 1
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
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Bar chart</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="bar"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default BarChart;