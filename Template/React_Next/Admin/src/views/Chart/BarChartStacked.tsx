import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChartStacked = () => {

    const series: any = [
        {
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        },
        {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        },
        {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        },
        {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#3EBFEA'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
        },
        legend: {
            position: 'bottom'
        },
        fill: {
            opacity: 1
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Bar chart stacked</h5>
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

export default BarChartStacked;
