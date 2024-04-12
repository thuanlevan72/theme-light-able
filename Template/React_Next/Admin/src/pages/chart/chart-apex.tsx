import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import AreaChart from "@views/Chart/AreaChart";
import BarChart from "@views/Chart/BarChart";
import BarChartHorizontal from "@views/Chart/BarChartHorizontal";
import BarChartStacked from "@views/Chart/BarChartStacked";
import BarHorizontalStacked from "@views/Chart/BarHorizontalStacked";
import BasicIineChart from "@views/Chart/BasicIineChart";
import BubbleChart from "@views/Chart/BubbleChart";
import BubbleChart3d from "@views/Chart/BubbleChart3d";
import CandlestickChart from "@views/Chart/CandlestickChart";
import ChartArea from "@views/Chart/ChartArea";
import ChartMixed from "@views/Chart/ChartMixed";
import DifferentLineChart from "@views/Chart/DifferentLineChart";
import HeatmapCharts from "@views/Chart/HeatmapCharts";
import HeatmapChartsRounded from "@views/Chart/HeatmapChartsRounded";
import MixedChart from "@views/Chart/MixedChart";
import PieCharts from "@views/Chart/PieCharts";
import PieChartsDonut from "@views/Chart/PieChartsDonut";
import RadarCharts from "@views/Chart/RadarCharts";
import RadarChartsMultipleSeries from "@views/Chart/RadarChartsMultipleSeries";
import RadialBarCharts from "@views/Chart/RadialBarCharts";
import RadialBarChartsCustomAngle from "@views/Chart/RadialBarChartsCustomAngle";
import RealtimeChart from "@views/Chart/RealtimeChart";
import ScatterChart from "@views/Chart/ScatterChart";
import ScatterChartDatetime from "@views/Chart/ScatterChartDatetime";
import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";

const ApexChart = () => {
    // document.title = "Apex Charts | Light Able Dashboard Template";
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Charts" subTitle="Apex Charts" />
            <Row>
                <BarChart />
                <BarChartStacked />
                <BarChartHorizontal />
                <BarHorizontalStacked />
                <PieCharts />
                <PieChartsDonut />
                <RadialBarCharts />
                <RadialBarChartsCustomAngle />
                <BasicIineChart />
                <RealtimeChart />
                <DifferentLineChart />
                <AreaChart />
                <ChartArea />
                <MixedChart />
                <ChartMixed/>
                <CandlestickChart />
                <BubbleChart />
                <BubbleChart3d />
                <ScatterChart />
                <ScatterChartDatetime />
                <HeatmapCharts />
                <HeatmapChartsRounded />
                <RadarCharts />
                <RadarChartsMultipleSeries />
            </Row>
        </React.Fragment >
    );
}

ApexChart.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ApexChart;