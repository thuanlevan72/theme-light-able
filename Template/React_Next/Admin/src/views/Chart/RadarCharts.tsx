import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadarCharts = () => {
    const series: any = [
        {
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'radar'
        },
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColor: '#f3f6ff',
                    fill: {
                        colors: ['#f3f6ff', '#fff']
                    }
                }
            }
        },
        colors: ['#F44236'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#F44236',
            strokeWidth: 2
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val;
                }
            }
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val: any, i: any) {
                    if (i % 2 === 0) {
                        return val;
                    } else {
                        return '';
                    }
                }
            }
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Radar Charts</h5>
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

export default RadarCharts;