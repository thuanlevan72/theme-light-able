import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BasicIineChart = () => {

    const series: any = [
        {
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
    ];

    const options: any = {
        chart: {
            height: 300,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false,
            width: 2
        },
        stroke: {
            curve: 'straight'
        },
        colors: ['#04A9F5'],
        grid: {
            row: {
                colors: ['#f3f6ff', 'transparent'],
                opacity: 0.5
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Basic line chart</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
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

export default BasicIineChart;
