import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieCharts = () => {

    const series: any = [44, 55, 13, 43, 22];

    const options: any = {
        chart: {
            height: 320,
            type: 'pie'
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#04A9F5', '#1DE9B6', '#3EBFEA', '#F4C22B', '#F44236'],
        legend: {
            show: true,
            position: 'bottom'
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Pie Charts</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="pie"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default PieCharts;
