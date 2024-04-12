import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarChartsCustomAngle = () => {

    const series: any = [76, 67, 61, 90];

    const options: any = {
        chart: {
            height: 350,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                offsetY: -30,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            }
        },
        colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 0,
            offsetY: 0,
            labels: {
                useSeriesColors: true
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName: any, opts: any) {
                return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
            },
            itemMargin: {
                horizontal: 1
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
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
                        <h5>RadialBar Charts Custom Angle</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="radialBar"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default RadialBarChartsCustomAngle;
