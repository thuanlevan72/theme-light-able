import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Row } from "react-bootstrap";
import EarningsChart from "@views/Widgets/WChart/EarningsChart";
import UserActivities from "@views/Widgets/WChart/UserActivities";
import YearlySummaryChart from "@views/Widgets/WChart/YearlySummaryChart";
import Overview from "@views/Widgets/WChart/Overview";
import TotalSalesChart from "@views/Widgets/WChart/TotalSalesChart";
import TeamPerformance from "@views/Widgets/WChart/TeamPerformance";
import Overview2Charts from "@views/Widgets/WChart/Overview2Charts";
import OtherWidgets from "@views/Widgets/WChart/OtherWidgets";
import ReportsChart from "@views/Widgets/WChart/ReportsChart";
import OtherWidgets2 from "@views/Widgets/WChart/OtherWidgets2";

const WidgetCharts = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Widget" subTitle="Chart" />
            <Row>
                <EarningsChart />
                <UserActivities />
                <YearlySummaryChart />
                <Overview />
                <TotalSalesChart />
                <TeamPerformance />
                <Overview2Charts />
                <OtherWidgets />
                <ReportsChart />
                <OtherWidgets2 />
            </Row>
        </>
    )
}

WidgetCharts.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default WidgetCharts;