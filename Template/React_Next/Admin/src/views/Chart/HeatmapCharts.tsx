import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HeatmapCharts = () => {
    function generateDatasehratheat(count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = 'w' + (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }
    const series: any = [
        {
            name: 'Metric1',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDatasehratheat(12, {
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
        dataLabels: {
            enabled: false
        },
        colors: ['#04A9F5'],
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Heatmap Charts</h5>
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

export default HeatmapCharts;