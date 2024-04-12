import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChartHorizontal = () => {

    const series: any = [
        {
            data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
            data: [53, 32, 33, 52, 13, 44, 32]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        colors: ['#04A9F5', '#1DE9B6'],
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Bar chart horizontal</h5>
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

export default BarChartHorizontal;
