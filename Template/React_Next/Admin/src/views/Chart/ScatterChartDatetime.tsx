import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ScatterChartDatetime = () => {
    function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([baseval, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    const series: any = [
        {
            name: 'TEAM 1',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 2',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 3',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 4',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 5',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                type: 'xy'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#04A9F5', '#1DE9B6', '#F44236', '#F4C22B', '#3EBFEA'],
        grid: {
            xaxis: {
                showLines: true
            },
            yaxis: {
                showLines: true
            }
        },
        legend: {
            offsetY: 8,
        },
        xaxis: {
            type: 'datetime'
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
                        <h5>Scatter Chart Datetime</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="scatter"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ScatterChartDatetime;