//Basic Line Chart

function basicLineChart() {
var chartDom = document.getElementById('linechart');
var myChart = echarts.init(chartDom);
var option;
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: '#878a99'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  option && myChart.setOption(option);
}

// bar chart
function gradiantZoomBarChart(){
var chartDom = document.getElementById('barcharts');
var myChart = echarts.init(chartDom);
var option;

// prettier-ignore
let dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: data
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on('click', function (params) {
  myChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});

option && myChart.setOption(option);
}

// pie chart
function gradiantZoomPieChart(){
  var chartDom = document.getElementById('piechart');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle:{
        color: '#878a99'
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine'},
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
      }
    ]
  };
  option && myChart.setOption(option);
}

// scatter chart
function gradiantZoomscatterChart(){
var chartDom = document.getElementById('scatterchart');
var myChart = echarts.init(chartDom);
var option;
  option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
    }
  ]
  };
option && myChart.setOption(option);
}

// candlestick chart
function gradiantZoomscandlestickChart(){
  var chartDom = document.getElementById('candlestick');
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ]
      }
    ]
  };
  
  option && myChart.setOption(option);  
}

// Radar chart
function gradiantZoomsradarChart(){
  var chartDom = document.getElementById('radarchart');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    legend: {
      data: ['Allocated Budget', 'Actual Spending'],
      textStyle:{
        color: '#878a99'
      },
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };
option && myChart.setOption(option);
}

// graph
function gradiantZoomsgraphChart(){
var chartDom = document.getElementById('graph');
var myChart = echarts.init(chartDom);
var option;

const axisData = ['Mon', 'Tue', 'Wed', 'Very Loooong Thu', 'Fri', 'Sat', 'Sun'];
const data = axisData.map(function (item, i) {
  return Math.round(Math.random() * 1000 * (i + 1));
});
const links = data.map(function (item, i) {
  return {
    source: i,
    target: i + 1
  };
});
links.pop();
option = {
  tooltip: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: data,
      links: links,
      lineStyle: {
        color: '#2f4554'
      }
    }
  ]
};
option && myChart.setOption(option);
}

// sunburst chart
function gradiantZoomssunburstChart(){
var chartDom = document.getElementById('sunburst');
var myChart = echarts.init(chartDom);
var option;

var data = [
    {
        id:'gr',
      name: 'Grandpa',
      itemStyle:{
        color:'#5189dc'
    },
      children: [
        {
          name: 'Uncle Leo',
          value: 15,
          itemStyle: {
            color: '#568de1'
        },
          children: [
            {
              name: 'Cousin\nJack',
              value: 2,
              itemStyle: {
                color:'#6aa1f4'
            },
            },
            {
              name: 'Cousin\nMary',
              value: 5,
              itemStyle: {
                color:'#6aa1f4'
            }
            },
            {
              name: 'Cousin\nBen',
              value: 4,
              itemStyle: {
                color: '#6aa1f4'
            }
            }
          ]
        },
        {
          name: 'Father',
          value: 10,
          children: [
            {
              name: 'Me',
              value: 5
            },
            {
              name: 'Brother\nPeter',
              value: 1
            }
          ]
        },
      ]
    },
    {
        name: 'Nancy',
        itemStyle:{
            color:'#ebb40f'
        },
        children: [
          {
            name: 'Uncle\nNike',
            children: [
              {
                name: 'Cousin\nBetty',
                value: 1
              },
              {
                name: 'Cousin\nJenny',
                value: 2
              }
            ]
          }
        ]
      }
    
  ];
option = {
  series: {
    type: 'sunburst',
    // emphasis: {
    //     focus: 'ancestor'
    // },
    data: data,
    radius: [0, '90%'],
    levels: [{}, {
        r0: '10%',
        r: '35%',
        itemStyle: {
            borderWidth: 2
        },
        label: {
            rotate: 'tangential'
        }
    }, {
        r0: '35%',
        r: '60%',
        itemStyle: {
            borderWidth: 2
        },
        label: {
            rotate: 'tangential'
        }
    }, {
        r0: '60%',
        r: '100%',
        label: {
            rotate:'radial',
            padding: 3,
            silent: false
        },
        itemStyle: {
            borderWidth: 2
        }
    }],
    label: {
      rotate: 'tangential',
    }
  }
};
option && myChart.setOption(option);
}

// gauge chart 
function gradiantZoomsgaugeChart(){
var chartDom = document.getElementById('gaugechart');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      axisLabel: {            
        fontWeight: 'bolder',
        color: '#878a99',
        shadowColor: '#fff', 
        shadowBlur: 10
    },
      axisTick: {            
        length: 15,        
        lineStyle: {       
            color: 'auto',
            shadowColor:  '#878a99', 
            shadowBlur: 10
        }
    },
      detail: {
        color: '#878a99',
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
};
option && myChart.setOption(option);
}


basicLineChart()
gradiantZoomBarChart()
gradiantZoomPieChart()
gradiantZoomscatterChart()
gradiantZoomscandlestickChart()
gradiantZoomsradarChart()
gradiantZoomsgraphChart()
gradiantZoomssunburstChart()
gradiantZoomsgaugeChart()