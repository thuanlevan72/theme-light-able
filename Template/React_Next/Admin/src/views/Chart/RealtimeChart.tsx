import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RealtimeChart = () => {
    var lastDate = 0;
    var data: any = [];

    function getDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
        var i = 0;
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            data.push({
                x,
                y
            });
            lastDate = baseval;
            baseval += 86400000;
            i++;
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90
    });

    function getNewSeries(baseval: any, yrange: any) {
        var newDate = baseval + 86400000;
        lastDate = newDate;
        data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
    }

    function resetData() {
        data = data.slice(data.length - 10, data.length);
    }

    // chart_real_time.render();

    var dataPointsLength = 10;

    const series: any = [
        {
            data: data
        }
    ];

    const options: any = {
        chart: {
            height: 300,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 2000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#04A9F5'],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 777600000
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        }
    };

    // window.setInterval(function () {
    //     getNewSeries(lastDate, {
    //         min: 10,
    //         max: 90
    //     });

    //     chart.updateSeries([
    //         {
    //             data: data
    //         }
    //     ]);
    // }, 2000);

    // // every 60 seconds, we reset the data
    // window.setInterval(function () {
    //     resetData();
    //     chart.updateSeries(
    //         [
    //             {
    //                 data
    //             }
    //         ],
    //         false,
    //         true
    //     );
    // }, 60000);
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Realtime Chart</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            id="ine-chart-2"
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="line"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default RealtimeChart;
