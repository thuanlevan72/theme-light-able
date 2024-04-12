// project rating chart

const ratingSeries = [
  {
    data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
  }
];

var options_project_rating: any = {
  chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
  colors: ['#1DE9B6'],
  plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// transactions chart

const transactionsSeries = [
  {
    data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
  }
];

var options_transactions: any = {
  chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
  colors: ['#04A9F5'],
  plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// canceled order chart
const canceledSeries = [{ data: [0, 50, 4, 10, 3, 25, 5] }];
var options_canceled_order: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// total order chart
const totalorderSeries = [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }];
var options_total_order: any = {
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
};

// times spent chart
const timesSeries = [{ data: [5, 25, 3, 10, 4, 50, 0] }];
var options_time_spent: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// new visitor chart
const visitorSeries = [
  {
    data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
  }
];
var options_new_visitor: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// total rewards chart
const rewardsSeries = [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }];
var options_rewards: any = {
  chart: {
    type: 'line',
    height: 100,
    stacked: true,
    sparkline: { enabled: true }
  },
  colors: ['#F4C22B'],
  stroke: { curve: 'smooth', width: 2 },
};

// total rewards chart
const totalRewardsSeries = [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }];
var options_total_rewards: any = {
  chart: {
    type: 'line',
    height: 100,
    stacked: true,
    sparkline: { enabled: true }
  },
  colors: ['#F4C22B'],
  stroke: { curve: 'smooth', width: 2 },
};

// bitcoin chart 1
const bitcoin1series = [{ data: [5, 25, 3, 10, 4, 50, 0] }];
var options_bitcoin_1: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// bitcoin chart 2
const bitcoin2series = [{ data: [0, 50, 4, 10, 3, 25, 5] }];
var options_bitcoin_2: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};

// bitcoin chart 3
const bitcoin3series = [{ data: [5, 25, 3, 10, 4, 50, 0] }];
var options_bitcoin_3: any = {
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
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        }
      }
    },
    marker: { show: false }
  }
};


// total earning chart
const totalEarningSeries = [30];
var options_total_earning: any = {
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
          formatter: function (val: any) {
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
};

var options_total_earning1: any = {
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
          formatter: function (val: any) {
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
};

export {
  ratingSeries,
  options_project_rating,
  transactionsSeries,
  options_transactions,
  canceledSeries,
  options_canceled_order,
  totalorderSeries,
  options_total_order,
  timesSeries,
  options_time_spent,
  visitorSeries,
  options_new_visitor,
  rewardsSeries,
  options_rewards,
  totalRewardsSeries,
  options_total_rewards,
  bitcoin1series,
  options_bitcoin_1,
  bitcoin2series,
  options_bitcoin_2,
  bitcoin3series,
  options_bitcoin_3,
  totalEarningSeries,
  options_total_earning,
  options_total_earning1
}

