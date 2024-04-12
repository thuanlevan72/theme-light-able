import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import SimpleActionBar from "@views/Forms/ActionBars/FormActionBar";
import FormActionButtonLink from "@views/Forms/ActionBars/FormActionButtonLink";
import FormLayoutButton from "@views/Forms/ActionBars/FormLayoutButton";
import FormRightActionBar from "@views/Forms/ActionBars/FormRightActionBar";
import HorizontalForm from "@views/Forms/ActionBars/HorizontalForm";
import Top_BottomActionsBars from "@views/Forms/ActionBars/Top_BottomActionsBars";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form2_lay_actionbars = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Action Bars" />
            <Row>
                <Col md={6}>
                    <SimpleActionBar/>
                    <FormActionButtonLink/>
                    <FormLayoutButton/>
                </Col>
                <Col md={6}>
                    <FormRightActionBar/>
                    <HorizontalForm/>
                    <Top_BottomActionsBars/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_lay_actionbars.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_lay_actionbars;