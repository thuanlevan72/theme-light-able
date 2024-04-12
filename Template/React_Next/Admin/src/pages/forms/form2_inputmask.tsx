import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import InputMaskData from "@views/Forms/InputMask/InputData";
import InputTime from "@views/Forms/InputMask/InputTime";
import InputPhoneNo from "@views/Forms/InputMask/InputPhoneNo";
import InputNetwork from "@views/Forms/InputMask/InputNetwork";

const form2_inputmask = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Input Mask" />
            <Row>
                <InputMaskData />
                <InputTime />
                <InputPhoneNo />
                <InputNetwork />
            </Row>
        </React.Fragment>
    )
}

form2_inputmask.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_inputmask;