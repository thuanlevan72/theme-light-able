import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadarChartsMultipleSeries = () => {
    const series: any = [
        {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20]
        },
        {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80]
        },
        {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        colors: ['#04A9F5', '#1DE9B6', '#F44236'],
        stroke: {
            width: 0
        },
        fill: {
            opacity: 0.7
        },
        markers: {
            size: 0
        },
        labels: ['2011', '2012', '2013', '2014', '2015', '2016']
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Radar Charts Multiple Series</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="radar"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default RadarChartsMultipleSeries;