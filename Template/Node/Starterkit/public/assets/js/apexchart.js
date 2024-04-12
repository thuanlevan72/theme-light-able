

//  Line Charts
function createLineChart(id) {
  var options = {
    series: [{
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Area Charts 
function createAreaChart(id) {
  var options = {
    series: [
      {
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min))
        }
      },
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
  };
  return new ApexCharts(document.querySelector(id), options);
}
//  Column Charts
function createColumnChart(id) {
  var options = {
    series: [
      {
        data: [
          {
            x: '2008',
            y: [2800, 4500]
          },
          {
            x: '2009',
            y: [3200, 4100]
          },
          {
            x: '2010',
            y: [2950, 7800]
          },
          {
            x: '2011',
            y: [3000, 4600]
          },
          {
            x: '2012',
            y: [3500, 4100]
          },
          {
            x: '2013',
            y: [4500, 6500]
          },
          {
            x: '2014',
            y: [4100, 5600]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: 'rangeBar',
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [['#008FFB', '#00E396']]
      }
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      customLegendItems: ['Product A', 'Product B']
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#00E396'],
        inverseColors: true,
        stops: [0, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      tickPlacement: 'on'
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Bar Charts 
function createBarChart(id) {
  var options = {
    series: [{
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Fiction Books Sales'
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
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
  return new ApexCharts(document.querySelector(id), options);
}
// Mixed Charts 
function createMixedChart(id) {
  var options = {
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
      '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;

        }
      }
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
//  Range Area Charts
function createRangeAreaChart(id) {
  var options = {
    series: [
      {
        type: 'rangeArea',
        name: 'Team B Range',

        data: [
          {
            x: 'Jan',
            y: [1100, 1900]
          },
          {
            x: 'Feb',
            y: [1200, 1800]
          },
          {
            x: 'Mar',
            y: [900, 2900]
          },
          {
            x: 'Apr',
            y: [1400, 2700]
          },
          {
            x: 'May',
            y: [2600, 3900]
          },
          {
            x: 'Jun',
            y: [500, 1700]
          },
          {
            x: 'Jul',
            y: [1900, 2300]
          },
          {
            x: 'Aug',
            y: [1000, 1500]
          }
        ]
      },

      {
        type: 'rangeArea',
        name: 'Team A Range',
        data: [
          {
            x: 'Jan',
            y: [3100, 3400]
          },
          {
            x: 'Feb',
            y: [4200, 5200]
          },
          {
            x: 'Mar',
            y: [3900, 4900]
          },
          {
            x: 'Apr',
            y: [3400, 3900]
          },
          {
            x: 'May',
            y: [5100, 5900]
          },
          {
            x: 'Jun',
            y: [5400, 6700]
          },
          {
            x: 'Jul',
            y: [4300, 4600]
          },
          {
            x: 'Aug',
            y: [2100, 2900]
          }
        ]
      },

      {
        type: 'line',
        name: 'Team B Median',
        data: [
          {
            x: 'Jan',
            y: 1500
          },
          {
            x: 'Feb',
            y: 1700
          },
          {
            x: 'Mar',
            y: 1900
          },
          {
            x: 'Apr',
            y: 2200
          },
          {
            x: 'May',
            y: 3000
          },
          {
            x: 'Jun',
            y: 1000
          },
          {
            x: 'Jul',
            y: 2100
          },
          {
            x: 'Aug',
            y: 1200
          },
          {
            x: 'Sep',
            y: 1800
          },
          {
            x: 'Oct',
            y: 2000
          }
        ]
      },
      {
        type: 'line',
        name: 'Team A Median',
        data: [
          {
            x: 'Jan',
            y: 3300
          },
          {
            x: 'Feb',
            y: 4900
          },
          {
            x: 'Mar',
            y: 4300
          },
          {
            x: 'Apr',
            y: 3700
          },
          {
            x: 'May',
            y: 5500
          },
          {
            x: 'Jun',
            y: 5900
          },
          {
            x: 'Jul',
            y: 4500
          },
          {
            x: 'Aug',
            y: 2400
          },
          {
            x: 'Sep',
            y: 2100
          },
          {
            x: 'Oct',
            y: 1500
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: 'rangeArea',
      animations: {
        speed: 500
      }
    },
    colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
      count: 2
    },
    stroke: {
      curve: 'straight',
      width: [0, 0, 2, 2]
    },
    legend: {
      show: true,
      customLegendItems: ['Team B', 'Team A'],
      inverseOrder: true
    },
    title: {
      text: 'Range Area with Forecast Line (Combo)'
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Timeline Charts
function createTimelineChart(id) {
  var options = {
    series: [
      {
        name: 'Bob',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-11').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-11').getTime(),
              new Date('2019-03-16').getTime()
            ]
          }
        ]
      },
      {
        name: 'Joe',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime()
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-06').getTime(),
              new Date('2019-03-09').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-19').getTime()
            ]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        var a = new Date(val[0]);
        var b = new Date(val[1]);
        var diff = Math.abs(b - a);
        var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return days + (days > 1 ? ' days' : ' day');
       }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    xaxis: {
      type: 'datetime'
    },
    legend: {
      position: 'top'
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Funnel Charts
function createFunnelChart(id) {
  var options = {
    series: [
      {
        name: "",
        data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Pyramid Chart',
      align: 'middle',
    },
    xaxis: {
      categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
    },
    legend: {
      show: false,
    },
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Candlestick Charts
function createCandleChart(id) {
  var options = {
    series: [{
      name: 'candle',
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
      ]
    }],
    chart: {
      height: 350,
      type: 'candlestick',
    },
    title: {
      text: 'CandleStick Chart - Category X-axis',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Annotation Test'
          }
        }
      ]
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          var dt = new Date(val)
          return dt.getDate()
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Boxplot Charts 
function createBoxPlotChart(id) {
  var options = {
    series: [
      {
        name: 'box',
        type: 'boxPlot',
        data: [
          {
            x: new Date('2017-01-01').getTime(),
            y: [54, 66, 69, 75, 88]
          },
          {
            x: new Date('2018-01-01').getTime(),
            y: [43, 65, 69, 76, 81]
          },
          {
            x: new Date('2019-01-01').getTime(),
            y: [31, 39, 45, 51, 59]
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: [39, 46, 55, 65, 71]
          },
          {
            x: new Date('2021-01-01').getTime(),
            y: [29, 31, 35, 39, 44]
          }
        ]
      },
      {
        name: 'outliers',
        type: 'scatter',
        data: [
          {
            x: new Date('2017-01-01').getTime(),
            y: 32
          },
          {
            x: new Date('2018-01-01').getTime(),
            y: 25
          },
          {
            x: new Date('2019-01-01').getTime(),
            y: 64
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: 27
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: 78
          },
          {
            x: new Date('2021-01-01').getTime(),
            y: 15
          }
        ]
      }
    ],
    chart: {
      type: 'boxPlot',
      height: 350
    },
    colors: ['#008FFB', '#FEB019'],
    title: {
      text: 'BoxPlot - Scatter Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        formatter: function (val) {
          return new Date(val).getFullYear()
        }
      }
    },
    tooltip: {
      shared: false,
      intersect: true
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Bubble Charts
/* function createBubbleChart(id) {
  var options = {
    series: [{
      name: 'Bubble1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Bubble2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Bubble3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Bubble4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }],
    chart: {
      height: 350,
      type: 'bubble',
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8
    },
    title: {
      text: 'Simple Bubble Chart'
    },
    xaxis: {
      tickAmount: 12,
      type: 'category',
    },
    yaxis: {
      max: 70
    }
  };
  return new ApexCharts(document.querySelector(id), options);
} */
// Scatter Charts
function createScatterChart(id) {
  var options = {
    series: [{
      name: "SAMPLE A",
      data: [
        [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
    }, {
      name: "SAMPLE B",
      data: [
        [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
    }, {
      name: "SAMPLE C",
      data: [
        [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
    }],
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Heatmap Charts
function createHeatMapChart(id) {
  var options = {
    series: [{
      name: 'Metric1',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric9',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    }
    ],
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'HeatMap Chart (Single color)'
    },
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Treemap Charts
function createTreemapChart(id) {
  var options = {
    series: [
      {
        name: 'Desktops',
        data: [
          {
            x: 'ABC',
            y: 10
          },
          {
            x: 'DEF',
            y: 60
          },
          {
            x: 'XYZ',
            y: 41
          }
        ]
      },
      {
        name: 'Mobile',
        data: [
          {
            x: 'ABCD',
            y: 10
          },
          {
            x: 'DEFG',
            y: 20
          },
          {
            x: 'WXYZ',
            y: 51
          },
          {
            x: 'PQR',
            y: 30
          },
          {
            x: 'MNO',
            y: 20
          },
          {
            x: 'CDE',
            y: 30
          }
        ]
      }
    ],
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    title: {
      text: 'Multi-dimensional Treemap',
      align: 'center'
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Pie Charts
function createPiechart(id) {
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Radial Bar Charts
function createRadialBarChart(id) {
  var options = {
    series: [75],
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Radar Charts
function createRadarChart(id) {
  var options = {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }],
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}
// Polar Area Charts
function createPolareaChart(id) {
  var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
      width: 380,
      type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  };
  return new ApexCharts(document.querySelector(id), options);
}

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// Define function generateData
function generateData(startDate, count, range) {
  var data = [];

  for (var i = 0; i < count; i++) {
      var date = new Date(startDate + i * 86400000); // Add 1 day to the startDate for each data point
      var value = Math.random() * (range.max - range.min) + range.min; // Generate a random value within the specified range
      data.push({ date: date, value: value });
  }

  return data;
}

createLineChart("#linchart").render()
createAreaChart("#areacharts").render()
createColumnChart("#columncharts").render()
createBarChart("#barchart").render()
createMixedChart("#mixedcharts").render()
createRangeAreaChart("#rangeareacharts").render()
createTimelineChart("#timelinecharts").render()
createFunnelChart("#funnelcharts").render()
createCandleChart("#candlestickcharts").render()
createBoxPlotChart("#boxplotcharts").render()
createScatterChart("#scattercharts").render()
createTreemapChart("#treemapcharts").render()
createPiechart("#piecharts").render()
createRadialBarChart("#radialbarcharts").render()
createRadarChart("#radarcharts").render()
createPolareaChart("#polarareacharts").render()