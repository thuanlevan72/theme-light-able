import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FormDropzone from "@views/Forms/FileUpload/FormDropzone";
import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const file_upload = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="File Upload" />
            <Row>
                <Col md={12}>
                    <FormDropzone/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

file_upload.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default file_upload;