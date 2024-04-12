import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";
import { BasicModal } from "src/views/Modals/BasicModal";
import { FullScreenModal } from "src/views/Modals/FullScreenModal";
import { OtherModal } from "src/views/Modals/OtherModal";
import { VaryingModal } from "src/views/Modals/VaryingModal";

const BCModal = () => {
    return (
        <>
            <SectionTitle
                title="Modal"
                description="Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content."
                link="https://react-bootstrap.netlify.app/docs/components/modal"
            />
            <Row>

                <BasicModal />

                <OtherModal />

                <FullScreenModal />

                <VaryingModal />
            </Row>
        </>
    )
}

BCModal.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCModal;
