import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormChecksAndRadios from "@views/Forms/Elements/FormChecksAndRadios";
import FormControls from "@views/Forms/Elements/FormControls";
import FormCustom from "@views/Forms/Elements/FormCustom";
import FormDataList from "@views/Forms/Elements/FormDataList";
import FormGrid from "@views/Forms/Elements/FormGrid";
import FormHorizontal from "@views/Forms/Elements/FormHorizontal";
import InlineForm from "@views/Forms/Elements/FormInline";
import FormInputGroup from "@views/Forms/Elements/FormInputGroup";
import FormSizing from "@views/Forms/Elements/FormSizing";
import FormSupportedElements from "@views/Forms/Elements/FormSupportedElements";
import FormTooltips from "@views/Forms/Elements/FormTooltips";
import FormValidation from "@views/Forms/Elements/FormValidation";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const form_elements = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Elements" />
            <Row>
                <Col md={12}>
                    <FormControls />
                    <FormSizing />
                    <FormDataList />
                    <InlineForm />
                    <FormGrid/>
                    <FormHorizontal/>
                    <FormValidation />
                    <FormSupportedElements />
                    <FormTooltips/>
                    <FormChecksAndRadios/>
                    <FormInputGroup/>
                    <FormCustom/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form_elements.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form_elements;