import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormBasicSetup from "@views/Forms/NoUiSlider/FormBasicSetup";
import FormInput from "@views/Forms/NoUiSlider/FormInput";
import FormPipsSlider from "@views/Forms/NoUiSlider/FormPipsSlider";
import FormSliderTooltip from "@views/Forms/NoUiSlider/FormSliderTooltip";
import FormSoftLimits from "@views/Forms/NoUiSlider/FormSoftLimits";
import FormVerticalSlider from "@views/Forms/NoUiSlider/FormVerticalSlider";
import FormWorkingDates from "@views/Forms/NoUiSlider/FormWorkingDates";
import React, { ReactElement } from "react";
import { Col, Row, Card } from "react-bootstrap";


const form2_nouislider = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="NoUiSlider" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <FormBasicSetup />
                            <FormWorkingDates />
                            <FormPipsSlider />
                            <FormSliderTooltip />
                            <FormInput />
                            <FormSoftLimits />
                            <FormVerticalSlider />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}

form2_nouislider.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_nouislider;