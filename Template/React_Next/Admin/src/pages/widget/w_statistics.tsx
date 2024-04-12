import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Row } from "react-bootstrap";
import Widget1 from "@views/Widgets/WStatistics/Widget1";
import Widget2 from "@views/Widgets/WStatistics/Widgets2";
import OtherWidgets from "@views/Widgets/WStatistics/OtherWidgets";
import Earnings from "@views/Widgets/WStatistics/Earnings";
import Widgets3 from "@views/Widgets/WStatistics/Widgets3";

const WStatistics = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Widget" subTitle="Statistics" />
            <Row>
                <Widget1 />
                <Widget2 />
                <OtherWidgets /> 
                <Earnings />
                <Widgets3 />
            </Row>
        </>
    )
}

WStatistics.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default WStatistics;