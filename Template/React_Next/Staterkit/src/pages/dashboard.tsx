import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";

//import Components
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";

const Dashboard = () => {
    return (
        <>
        <BreadcrumbItem mainTitle="Dashboard" subTitle="Home"  />
          <Row>
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