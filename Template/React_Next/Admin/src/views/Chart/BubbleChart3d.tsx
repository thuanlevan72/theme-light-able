import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BubbleChart3d = () => {

    function generateDatasehratheatbubble3d(baseval: any, count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([baseval, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    const series: any = [
        {
            name: 'Product1',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product2',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product3',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product4',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'bubble'
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient'
        },
        colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
        xaxis: {
            tickAmount: 12,
            type: 'datetime',

            labels: {
                rotate: 0
            }
        },
        yaxis: {
            max: 70
        },
        theme: {
            palette: 'palette2'
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Bubble Chart 3d</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="bubble"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default BubbleChart3d;