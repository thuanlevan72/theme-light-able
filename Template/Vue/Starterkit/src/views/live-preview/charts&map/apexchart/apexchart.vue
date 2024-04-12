<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { basicLineChart, stackedColumnsChart, groupedBarChart, radarMultiseriesChart, polygonRadarChart, basicHeatmapChat, shadesHeatmapChart, dateTimeScatterChart, basicScatterChart, bubble3DChart, simpleBubbleChart, dashedLineChart, basicCandlestickChart, lineColumnAreaChart, datetimeAreaChart, splineAreaChart, basicRadialBarChart, circleAngleChart, simplePieChart, mixedLineChart, stackedBar100Chart, basicColumnChart, donutChart } from "./data"

export default {
    name: "APEXCHART",
    data() {
        return {
            basicColumnChart,
            stackedColumnsChart,
            groupedBarChart,
            basicLineChart,
            stackedBar100Chart,
            mixedLineChart,
            simplePieChart,
            donutChart,
            basicRadialBarChart,
            circleAngleChart,
            dashedLineChart,
            splineAreaChart,
            datetimeAreaChart,
            lineColumnAreaChart,
            basicCandlestickChart,
            simpleBubbleChart, bubble3DChart,
            basicScatterChart, dateTimeScatterChart,
            shadesHeatmapChart, basicHeatmapChat,
            polygonRadarChart, radarMultiseriesChart
        }
    },
    components: {
        Layout, pageheader
    },
    methods: {
        updateData: function (timeline) {
            this.selection = timeline;
            switch (timeline) {
                case "one_month":
                    this.$refs.chart.zoomX(
                        new Date("28 Jan 2013").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "six_months":
                    this.$refs.chart.zoomX(
                        new Date("27 Sep 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "one_year":
                    this.$refs.chart.zoomX(
                        new Date("27 Feb 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "all":
                    this.$refs.chart.zoomX(
                        new Date("23 Jan 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                default:
            }
        },
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Apex Charts" pageTitle="Charts" />
        <BRow>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="bar-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicColumnChart.series"
                            :options="basicColumnChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar chart stacked</h5>
                    </div>
                    <div class="card-body">
                        <div id="bar-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="stackedColumnsChart.series"
                            :options="stackedColumnsChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar chart horizontal</h5>
                    </div>
                    <div class="card-body">
                        <div id="bar-chart-3"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="groupedBarChart.series"
                            :options="groupedBarChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar chart horizontal stacked</h5>
                    </div>
                    <div class="card-body">
                        <div id="bar-chart-4">
                            <apexchart id="bar-chart-4" class="apex-charts" height="350" dir="ltr"
                                :series="stackedBar100Chart.series" :options="stackedBar100Chart.chartOptions"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Pie Charts</h5>
                    </div>
                    <div class="card-body">
                        <div id="pie-chart-1" style="width: 100%"></div>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="simplePieChart.series"
                            :options="simplePieChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Pie Charts donut</h5>
                    </div>
                    <div class="card-body">
                        <div id="pie-chart-2" style="width: 100%"></div>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="donutChart.series"
                            :options="donutChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>RadialBar Charts</h5>
                    </div>
                    <div class="card-body">
                        <div id="radialBar-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadialBarChart.series"
                            :options="basicRadialBarChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>RadialBar Charts Custom Angle</h5>
                    </div>
                    <div class="card-body">
                        <div id="radialBar-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="circleAngleChart.series"
                            :options="circleAngleChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Basic line chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="line-chart-1"></div>
                        <apexchart id="line-chart-1" height="300" dir="ltr" :series="basicLineChart.series"
                            :options="basicLineChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Different line chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="line-chart-3"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="dashedLineChart.series"
                            :options="dashedLineChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Area chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="area-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="splineAreaChart.series"
                            :options="splineAreaChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Area chart</h5>
                    </div>
                    <div class="card-body">
                        <div class="toolbar d-flex align-items-start justify-content-center flex-wrap gap-2">
                            <BButton type="button" variant="outline-primary" size="sm" class="timeline-btn" id="one_month"
                                @click="updateData('one_month')" :class="{ active: selection === 'one_month' }">
                                1M
                            </BButton>
                            <BButton type="button" variant="outline-primary" size="sm" class="timeline-btn" id="six_months"
                                @click="updateData('six_months')" :class="{ active: selection === 'six_months' }">
                                6M
                            </BButton>
                            <BButton type="button" variant="outline-primary" size="sm" class="timeline-btn" id="one_year"
                                @click="updateData('one_year')" :class="{ active: selection === 'one_year' }">
                                1Y
                            </BButton>
                            <BButton type="button" variant="outline-primary" size="sm" class="timeline-btn" id="all"
                                @click="updateData('all')" :class="{ active: selection === 'all' }">
                                ALL
                            </BButton>
                        </div>
                        <div id="area-chart-2"></div>
                        <apexchart ref="chart" class="apex-charts" height="350" dir="ltr" :series="datetimeAreaChart.series"
                            :options="datetimeAreaChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Mixed Chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="mixed-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="mixedLineChart.series"
                            :options="mixedLineChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Mixed Chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="mixed-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineColumnAreaChart.series"
                            :options="lineColumnAreaChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Candlestick Chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="candlestick-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicCandlestickChart.series"
                            :options="basicCandlestickChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bubble Chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="bubble-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="simpleBubbleChart.series"
                            :options="simpleBubbleChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Bubble Chart 3d</h5>
                    </div>
                    <div class="card-body">
                        <div id="bubble-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="bubble3DChart.series"
                            :options="bubble3DChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Scatter Chart</h5>
                    </div>
                    <div class="card-body">
                        <div id="scatter-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicScatterChart.series"
                            :options="basicScatterChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Scatter Chart Datetime</h5>
                    </div>
                    <div class="card-body">
                        <div id="scatter-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="dateTimeScatterChart.series"
                            :options="dateTimeScatterChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Heatmap Charts</h5>
                    </div>
                    <div class="card-body">
                        <div id="heatmap-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicHeatmapChat.series"
                            :options="basicHeatmapChat.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Heatmap Charts Rounded</h5>
                    </div>
                    <div class="card-body">
                        <div id="heatmap-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="shadesHeatmapChart.series"
                            :options="shadesHeatmapChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Radar Charts</h5>
                    </div>
                    <div class="card-body">
                        <div id="radar-chart-1"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="polygonRadarChart.series"
                            :options="polygonRadarChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Radar Charts Multiple Series</h5>
                    </div>
                    <div class="card-body">
                        <div id="radar-chart-2"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="radarMultiseriesChart.series"
                            :options="radarMultiseriesChart.chartOptions"></apexchart>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>
