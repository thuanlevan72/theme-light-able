import React from "react";
import { Card, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarHorizontalStacked = () => {

  const series: any = [
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4]
    },
    {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10]
    }
  ];

  const options: any = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors: ['#04A9F5', '#3EBFEA', '#1DE9B6', '#F4C22B', '#F44236'],
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },

    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + 'K';
        }
      }
    },
    fill: {
      opacity: 1
    },

    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  };
  return (
    <React.Fragment>
      <Col md={6}>
        <Card>
          <Card.Header>
            <h5>Bar chart horizontal stacked</h5>
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

export default BarHorizontalStacked;
