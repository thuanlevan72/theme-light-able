import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormImageCropper from "@views/Forms/ImageCropper/FormImageCropper";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const image_crop = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Image Cropper" />
            <Row>
                <Col md={12}>
                    <FormImageCropper/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

image_crop.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default image_crop;