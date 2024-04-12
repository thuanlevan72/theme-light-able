import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HeatmapChartsRounded = () => {
    function generateDatasehrat(count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    };
    const series: any = [
        {
            name: 'Metric1',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'heatmap'
        },
        stroke: {
            width: 0
        },
        plotOptions: {
            heatmap: {
                radius: 30,
                enableShades: false,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 50,
                            color: '#F4C22B'
                        },
                        {
                            from: 51,
                            to: 100,
                            color: '#F44236'
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            }
        },
        colors: ['#04A9F5', '#3EBFEA', '#1DE9B6', '#F4C22B', '#F44236'],
        xaxis: {
            type: 'category'
        },
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Heatmap Charts Rounded</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="heatmap"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default HeatmapChartsRounded;