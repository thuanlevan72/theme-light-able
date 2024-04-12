import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MixedChart = () => {

    const series: any = [
        {
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'line'
        },
        stroke: {
            width: [0, 4]
        },
        colors: ['#04A9F5', '#F44236'],
        labels: [
            '01 Jan 2001',
            '02 Jan 2001',
            '03 Jan 2001',
            '04 Jan 2001',
            '05 Jan 2001',
            '06 Jan 2001',
            '07 Jan 2001',
            '08 Jan 2001',
            '09 Jan 2001',
            '10 Jan 2001',
            '11 Jan 2001',
            '12 Jan 2001'
        ],
        xaxis: {
            type: 'datetime'
        },
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Mixed Chart</h5>
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

export default MixedChart;
