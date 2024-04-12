import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";
import BasicTinymce from "@views/Forms/FormTinymce/BasicTinymce";
import ToolbarTinymce from "@views/Forms/FormTinymce/ToolbarTinymce";
import PluginsTinymce from "@views/Forms/FormTinymce/PluginsTinymce";
import TinymceAllFeatures from "@views/Forms/FormTinymce/TinymceAllFeatures";

const form2_tinymce = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="TinyMCE" />
            <Row>
                <BasicTinymce />
                <ToolbarTinymce />
                <PluginsTinymce />
                <TinymceAllFeatures />
            </Row>
        </React.Fragment >
    );
}

form2_tinymce.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_tinymce;