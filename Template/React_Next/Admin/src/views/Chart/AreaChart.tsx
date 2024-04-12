import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AreaChart = () => {

    const series: any = [
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#F4C22B', '#F44236'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00'
            ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Area chart</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="area"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default AreaChart;
