import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BubbleChart = () => {

    function generateBubbleData(baseval: any, count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    const series: any = [
        {
            name: 'Bubble1',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble2',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble3',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble4',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
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
        colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
        fill: {
            opacity: 0.8
        },
        xaxis: {
            tickAmount: 12,
            type: 'category'
        },
        yaxis: {
            max: 70
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Bubble Chart</h5>
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

export default BubbleChart;