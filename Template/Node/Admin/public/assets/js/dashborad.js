/*
Template Name: Fadmin - Responsive Bootstrap Admin Dashboard
Author: ThemesBoss
File: Main Js File
*/

// Area Charts
function createAreaCharts(id) {
    var options = {
        series: [{
            name: "series1",
            data: [10, 85, 60, 85, 60, 88, 95],
      }, {
        name: "series2",
        data: [15, 60, 35, 60, 35, 55, 65],
      }],
        chart: {
        height: 350,
        type: 'area',
          toolbar: {
            show: false
        },
      },
      legend: {
        show: false,
      },
      fill:{
        type:"solid",
        colors:['#f7f8fc','#518ce5'],
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show:false,
        curve: "smooth",
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", 
        "2018-09-19T01:30:00.000Z", 
        "2018-09-19T02:30:00.000Z", 
        "2018-09-19T03:30:00.000Z", 
        "2018-09-19T04:30:00.000Z", 
        "2018-09-19T05:30:00.000Z", 
        "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    };
    return new ApexCharts(document.querySelector(id), options);
}

// Bar Chart
function createBarCharts(id) {
    var options = {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    colors: ['#518ce5', 'rgb(84, 144, 229)','rgb(174, 202, 242)'],
        chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
      },
    },
    plotOptions: {
        bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
        },
    },
    legend: {
      show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
        formatter: function (val) {
            return "$ " + val + " thousands"
        }
        }
    }
    };
    return new ApexCharts(document.querySelector(id), options);
}

// Donut Charts
function createDonutCharts(id) {
    var options = {
    series: [40, 50, 33, 30],
    chart: {
    type: 'donut',
    height: '91%',
    width: '100%',
  },
  plotOptions: {
    pie:{
      donut:{
        size: "70%",
        background: "transparent",
        labels: {
          show: true,
          name:{
            show: true,
            fontSize: "23px",
            fontWeight: 800,
            color: "#518ce5",
            offsetY: -10,
          },
          value: {
            fontSize: "28px",
            fontWeight: 600,
            color: "#518ce5",
            offsetY: 10,
            show: true,
          },
          total: {
            fontSize: "23px",
            fontWeight: 800,
            color: "#518ce5",
            offsetY: -10,
            show: true,
          },
        },
      }
    }
  },
  colors: ["#518ce5", "#6da5f0", "#7bb2f1", "#8cbef3"],
  legend: {
    show: false,
  },
  };
    return new ApexCharts(document.querySelector(id), options);
}

createAreaCharts('#areachart').render()
createBarCharts('#barchart').render()
createDonutCharts('#donutchart').render()