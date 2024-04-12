const earningsChart = {
    series: [
        {
            data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }
    ],
    chartOptions: {
        chart: {
            type: 'area',
            height: 230,
            toolbar: {
                show: false
            }
        },
        colors: ['#0d6efd'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
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
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    },
};

const userActivitiesChart = {
    series: [
        {
            name: 'Deals',
            data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
            name: 'Income Report',
            data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
            name: 'Customer',
            data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
            name: 'Profits',
            data: [21, 7, 25, 13, 22, 3, 44]
        }
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 250,
            stacked: true,
            toolbar: {
                show: false
            }
        },
        colors: ['#04A9F5', '#04A9F5', '#04A9F5', '#7C57C1'],
        fill: {
            opacity: [0.6, 1, 0.6, 1]
        },
        grid: {
            strokeDashArray: 4
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        legend: {
            show: false
        }
    },
};

const yearlySummeryChart = {
    series: [
        {
            name: 'Net Profit',
            data: [76, 85, 101, 98, 87]
        },
        {
            name: 'Revenue',
            data: [44, 55, 57, 56, 61]
        }
    ],
    chartOptions: {
        chart: {
            height: 250,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '75%',
                borderRadius: 2,
                borderRadiusApplication: 'end'
            }
        },
        legend: {
            show: true,
            position: 'bottom',
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1DE9B6', '#0398F2'],
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                stops: [0, 100],
                shadeIntensity: 0.5,
                gradientToColors: ['#1DC4E9', '#38B9E7'],
            }
        },
        grid: {
            strokeDashArray: 4
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                }
            }
        }
    },
};

const overviewChart = {
    series: [
        {
            name: "This month",
            data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }, {
            name: "Last month",
            data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        }
    ],
    chartOptions: {
        chart: {
            type: 'line',
            height: 230,
            toolbar: {
                show: false
            }
        },
        colors: ['#0d6efd', '#748892'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
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
        xaxis: {
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
    },
};

const totalSalesChart = {
    series: [
        {
            name: "Today",
            data: [0, 0, 90, 50, 55, 0, 0, 0, 0, 60, 0, 0]
        }, {
            name: "Yesterday",
            data: [0, 0, 30, 60, 40, 50, 0, 0, 0, 0, 0, 0]
        }
    ],
    chartOptions: {
        chart: {
            type: 'line',
            height: 265,
            toolbar: {
                show: false
            }
        },
        colors: ['#0d6efd', '#748892'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
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
        xaxis: {
            labels: {
                hideOverlappingLabels: true,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        responsive: [
            {
                breakpoint: 1182,
                options: {
                    chart: {
                        height: 230
                    },
                }
            }
        ]
    },
};

const performanceChart = {
    series: [27, 23, 20, 17],
    chartOptions: {
        chart: {
            height: 250,
            type: 'donut'
        },
        colors: ['#04A9F5', '#F4C22B', '#1DE9B6', '#04A9F5'],
        labels: ['Total income', 'Total rent', 'Download', 'Views'],
        fill: {
            opacity: [1, 1, 1, 0.3]
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 250
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '65%',
                                labels: {
                                    show: false
                                }
                            }
                        }
                    }
                }
            },
            {
                breakpoint: 1182,
                options: {
                    chart: {
                        height: 190
                    },
                }
            }
        ]
    }
};

const overviewChart2 = {
    series: [
        {
            data: [10, 30, 40, 20, 60, 50]
        }
    ],
    chartOptions: {
        chart: { type: 'bar', height: 150, sparkline: { enabled: true } },
        colors: ['#F44236', '#04A9F5', '#673ab7', '#1DE9B6', '#F4C22B', '#3EBFEA'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%', distributed: true } },
        series: [
            {
                data: [10, 30, 40, 20, 60, 50]
            }
        ],
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            marker: { show: false }
        }
    },
};

const ratingChart = {
    series: [
        {
            data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
    ],
    chartOptions: {
        chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
        colors: ['#1DE9B6'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
    },
    xaxis: { crosshairs: { width: 1 } },
    tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        marker: { show: false }
    }
};

const transactionChart = {
    series: [
        {
            data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
    ],
    chartOptions: {
        chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
        colors: ['#04A9F5'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            marker: { show: false }
        }
    }
};

const orderChart = {
    series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 60,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#F44236'],
        stroke: { curve: 'smooth', width: 2 },
        tooltip: {
            x: { show: false },
            marker: { show: false }
        }
    }
};

const totalOrderChart = {
    series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 100,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#1DE9B6'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0
            }
        },
        stroke: { curve: 'smooth', width: 2 },
    }
};

const reportChart = {
    series: [
        {
            name: "Tomorow",
            data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
            name: "Today",
            data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
            name: "Yesterday",
            data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
    ],
    chartOptions: {
        chart: {
            type: 'area',
            height: 250,
            toolbar: {
                show: false
            }
        },
        colors: ['#1DE9B6', '#A389D4', '#0398F2'],
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                stops: [0, 100],
                shadeIntensity: 0.5,
                gradientToColors: ['#1DC4E9', '#899ED4', '#38B9E7'],
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
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
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    }
};

const timeSpentChart = {
    series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 40,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#1DE9B6'],
        stroke: { curve: 'smooth', width: 2 },
        tooltip: {
            x: { show: false },
            marker: { show: false }
        }
    }
};

const newVisitorChart = {
    series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
    chartOptions: {
        chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
        colors: ['#F44236'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
        states: {
            normal: {
                filter: {
                    type: 'lighten',
                    value: 0.7,
                }
            },
            hover: {
                filter: {
                    type: 'lighten',
                    value: 0,
                }
            },
        },
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            marker: { show: false }
        }
    }
};

const totalRewardsChart = {
    series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 100,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#F4C22B'],
        stroke: { curve: 'smooth', width: 2 },
    }
};

const totalRewardsChart2 = {
    series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 100,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#F4C22B'],
        stroke: { curve: 'smooth', width: 2 },
    }
};

const bitcoinChart1 = {
    series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 40,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#1DE9B6'],
        stroke: { curve: 'smooth', width: 2 },

        tooltip: {
            x: { show: false },
            marker: { show: false }
        }
    }
};

const bitcoinChart2 = {
    series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 40,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#F44236'],
        stroke: { curve: 'smooth', width: 2 },

        tooltip: {
            x: { show: false },
            marker: { show: false }
        }
    }
};

const bitcoinChart3 = {
    series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 40,
            stacked: true,
            sparkline: { enabled: true }
        },
        colors: ['#04A9F5'],
        stroke: { curve: 'smooth', width: 2 },
        tooltip: {
            x: { show: false },
            marker: { show: false }
        }
    }
};

const totalEarningChart1 = {
    series: [30],
    chartOptions: {
        chart: {
            height: 150,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '60%',
                    background: 'transparent',
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front'
                },
                track: {
                    background: '#F4C22B50',
                    strokeWidth: '50%'
                },

                dataLabels: {
                    show: true,
                    name: {
                        show: false
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        offsetY: 7,
                        color: '#F4C22B',
                        fontSize: '20px',
                        fontWeight: '700',
                        show: true
                    }
                }
            }
        },
        colors: ['#F4C22B'],
        fill: {
            type: 'solid'
        },
        stroke: {
            lineCap: 'round'
        }
    }
};

const totalEarningChart2 = {
    series: [30],
    chartOptions: {
        chart: {
            height: 150,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '60%',
                    background: 'transparent',
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front'
                },
                track: {
                    background: '#1DE9B650',
                    strokeWidth: '50%'
                },

                dataLabels: {
                    show: true,
                    name: {
                        show: false
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        offsetY: 7,
                        color: '#1DE9B6',
                        fontSize: '20px',
                        fontWeight: '700',
                        show: true
                    }
                }
            }
        },
        colors: ['#1DE9B6'],
        fill: {
            type: 'solid'
        },
        stroke: {
            lineCap: 'round'
        }
    }
};
export { earningsChart, userActivitiesChart, yearlySummeryChart, overviewChart, totalSalesChart, performanceChart, overviewChart2, ratingChart, transactionChart, orderChart, totalOrderChart, reportChart, timeSpentChart, newVisitorChart, totalRewardsChart, totalRewardsChart2, bitcoinChart1, bitcoinChart2, bitcoinChart3, totalEarningChart1, totalEarningChart2 }