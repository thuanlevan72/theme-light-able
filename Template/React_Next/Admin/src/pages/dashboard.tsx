import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";

//import Components
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Widgets from "@views/Dashboard/widgets";
import { widgetData, socialWidgetsData } from "@data/index";
import UnitedStatesMap from "@views/Dashboard/UnitedStatesMap";
import UsersCharts from "@views/Dashboard/UsersCharts";
import SocialWidgets from "@views/Dashboard/SocialWidgets";
import RecentUsers from "@views/Dashboard/RecentUsers";
import RecentTableData from "@views/Dashboard/RecentTableData";

const Dashboard = () => {
    return (
        <>
        <BreadcrumbItem mainTitle="Dashboard" subTitle="Home"  />
          <Row>
            <Widgets widgetData={widgetData} />
            <UnitedStatesMap />
            <UsersCharts />
            <SocialWidgets socialWidgetsData={socialWidgetsData} />
            <RecentUsers />
            <RecentTableData />
          </Row>
        </>
    )
}

Dashboard.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Dashboard;