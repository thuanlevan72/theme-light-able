import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import GoogleMap from "@views/Maps/GoogleMap";
import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";

const MapVector = () => {
    // document.title = "Apex Charts | Light Able Dashboard Template";
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Charts" subTitle="Vector Map" />
            <Row>
                <GoogleMap />
            </Row>
        </React.Fragment >
    );
}

MapVector.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default MapVector;