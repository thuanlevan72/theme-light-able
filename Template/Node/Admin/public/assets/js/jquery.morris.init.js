/*
Template Name: Fadmin - Responsive Bootstrap Admin Dashboard
Author: ThemesBoss
File: Main Js File
*/

"use strict";
$(document).ready(function() {    

    /* -----  Morris - Line Chart ----- */
    var xpMorrisLineData = [
        { y: '2012', a: 100, b: 90, c: 56 },
        { y: '2013', a: 75,  b: 65, c: 89 },
        { y: '2014', a: 100, b: 90, c: 120 },
        { y: '2015', a: 75,  b: 65, c: 110 },
        { y: '2016', a: 50,  b: 40, c: 85 },
        { y: '2017', a: 75,  b: 65, c: 52 },
        { y: '2018', a: 50,  b: 40, c: 77 },
        { y: '2019', a: 75,  b: 65, c: 90 },
        { y: '2020', a: 100, b: 90, c: 130 },
        { y: '2021', a: 80, b: 65, c: 95 },
        { y: '2022', a: 155, b: 69, c: 59 },
        { y: '2023', a: 120, b: 58, c: 89 }
    ];
    Morris.Line({
        element: 'morris-line',
        data: xpMorrisLineData,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#3a80e5','#7ba6e5'],
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true,
    });
    
    /* -----  Morris - Updating Chart ----- */
    var nReloads = 0;
    function data(offset) {
      var ret = [];
      for (var x = 0; x <= 360; x += 10) {
        var v = (offset + x) % 360;
        ret.push({
          x: x,
          y: Math.sin(Math.PI * v / 180).toFixed(4),
          z: Math.cos(Math.PI * v / 180).toFixed(4)
        });
      }
      return ret;
    }
    var xpMorrisUpdating = Morris.Line({
        element: 'morris-updating',
        data: data(0),
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Series A', 'Series B'],
        parseTime: false,
        ymin: -1.0,
        ymax: 1.0,
        hideHover: true,
        lineColors: ['#3a80e5','#7ba6e5'],
        gridLineColor: '#e1e4e9',
        resize: true
    });
    function update() {
      nReloads++;
      xpMorrisUpdating.setData(data(5 * nReloads));
      $('#reloadStatus').text(nReloads + ' reloads');
    }
    setInterval(update, 100);    

    /* -----  Morris - Bar Chart ----- */
    Morris.Bar({
        element: 'morris-bar',
        data: [
            { y: '2017', a: 75,  b: 65 , c: 95 },
            { y: '2018', a: 50,  b: 40 , c: 22 },
            { y: '2019', a: 75,  b: 65 , c: 56 },
            { y: '2020', a: 100, b: 90 , c: 60 },
            { y: '2021', a: 100, b: 90 , c: 40 },
            { y: '2022', a: 75,  b: 65 , c: 20 },
            { y: '2023', a: 50,  b: 40 , c: 50 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B','Series C'],
        barColors: ['#3a80e5','#5490e5', '#aecaf2'],
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true
    });

    /* -----  Morris - Stacked Bar Chart ----- */
    Morris.Bar({
        element: 'morris-stacked-bar',
        data: [
            { y: '2016', a: 38,  b: 89 , c: 95 },
            { y: '2017', a: 75,  b: 65 , c: 95 },
            { y: '2018', a: 50,  b: 40 , c: 22 },
            { y: '2019', a: 75,  b: 65 , c: 56 },
            { y: '2020', a: 100, b: 90 , c: 60 },
            { y: '2021', a: 100, b: 90 , c: 40 },
            { y: '2022', a: 75,  b: 65 , c: 20 },
            { y: '2023', a: 50,  b: 40 , c: 50 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B','Series C'],
        stacked: true,
        barColors: ['#3a80e5','#5490e5', '#aecaf2'],
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true
    });
    
    /* -----  Morris - Area Chart ----- */
    Morris.Area({
        element: 'morris-area',
        data: [
            { y: '2017', a: 100, b: 90 },
            { y: '2018', a: 75,  b: 65 },
            { y: '2019', a: 50,  b: 40 },
            { y: '2020', a: 75,  b: 65 },
            { y: '2021', a: 50,  b: 40 },
            { y: '2022', a: 75,  b: 65 },
            { y: '2023', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#3a80e5','#7ba6e5'],
        fillOpacity: 0.5,
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true,
    }); 

    /* -----  Morris - Area Chart without Point & Line ----- */
    Morris.Area({
        element: 'morris-area-without-line-point',
        data: [
            { y: '2018', a: 0, b: 0 },
            { y: '2019', a: 100,  b: 55 },
            { y: '2020', a: 55,  b: 110 },
            { y: '2021', a: 120,  b: 30 },
            { y: '2022', a: 80,  b: 140 },
            { y: '2023', a: 0, b: 0 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#3a80e5','#7ba6e5'],
        fillOpacity: 0.5,
        pointSize: 0,
        lineWidth: 0,
        behaveLikeLine: true,
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true,
    });

    /* -----  Morris - Area Chart without Smooth ----- */
    Morris.Area({
        element: 'morris-area-without-smooth',
        data: [
            { y: '2017', a: 0, b: 0 },
            { y: '2018', a: 130,  b: 100 },
            { y: '2019', a: 80,  b: 60 },
            { y: '2020', a: 70,  b: 200 },
            { y: '2021', a: 180,  b: 150 },
            { y: '2022', a: 105,  b: 90 },
            { y: '2023', a: 250,  b: 150 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#3a80e5','#7ba6e5'],
        fillOpacity: 0.5,
        pointSize: 0,
        lineWidth: 0,
        behaveLikeLine: true,
        smooth: false,
        gridLineColor: '#e1e4e9',
        hideHover: 'auto',
        resize: true,
    });    

    /* -----  Morris - Donut Chart ----- */
    Morris.Donut({
      element: 'morris-donut',
      data: [
        {label: "Apple", value: 45},
        {label: "Sony", value: 28},
        {label: "Samsung", value:27},
        {label: "Dell", value:27}
      ],
      colors: ['#3a80e5','#5490e5', '#7ba6e5','#aecaf2'],
      resize: true,
      formatter: function (x) { return x + "%"}
    });

});