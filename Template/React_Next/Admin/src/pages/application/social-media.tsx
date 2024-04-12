import React, { ReactElement } from "react";
import Layout from "@layout/index";
import { Col, Row, Tab } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import SocialProfile from "@views/Application/SocialMedia/SocialProfile";
import SocialTab from "@views/Application/SocialMedia/SocialTab";
import SocialSideBar from "@views/Application/SocialMedia/SocialSideBar";
import Profile from "@views/Application/SocialMedia/Profile";
import Friends from "@views/Application/SocialMedia/Friends";
import FriendsRequest from "@views/Application/SocialMedia/FriendsRequest";

const SocialMedia = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Application" subTitle="Social Media" />
            <Row>
                <Col sm={12}>
                    <SocialProfile />
                    <Tab.Container defaultActiveKey="profile">
                        <SocialTab />
                        <Row>
                            <Col lg={8} xxl={9}>
                                <Tab.Content>
                                    <Profile />
                                    <Friends />
                                    <FriendsRequest />
                                </Tab.Content>
                            </Col>
                            <SocialSideBar />

                        </Row>
                    </Tab.Container>
                </Col>
            </Row >
        </>
    )
}

SocialMedia.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default SocialMedia;