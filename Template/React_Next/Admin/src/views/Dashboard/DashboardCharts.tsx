import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const UserChartsData = () => {

    const series = [
        {
          data: [30, 60, 40, 70, 50, 90]
        }
    ];

    var options : any = {
        chart: {
          type: 'line',
          height: 200,
          toolbar: {
            show: false
          }
        },
        colors: ['#0d6efd'],
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 7,
          colors: '#0d6efd',
          strokeColors: '#fff',
          strokeWidth: 3,
          hover: {
            size: 4,
          }
      },
        stroke: {
          width: 1,
          curve: 'smooth',
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 4
          }
        },
        grid: {
          strokeDashArray: 4
        },
        yaxis: {
           show: false,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          labels: {
            hideOverlappingLabels: true,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }
      };

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="line" height={200} />
        </React.Fragment>
    );
}

export {
    UserChartsData
}
