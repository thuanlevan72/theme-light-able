import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarCharts = () => {

    const series: any = [70];

    const options: any = {
        chart: {
            height: 350,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%'
                }
            }
        },
        colors: ['#04A9F5'],
        labels: ['Cricket']
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>RadialBar Charts</h5>
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

export default RadialBarCharts;
