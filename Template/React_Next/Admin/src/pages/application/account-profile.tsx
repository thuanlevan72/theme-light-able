import React, { ReactElement } from "react";
import Layout from "@layout/index";
import { Col, Row, Tab } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import EmailVerification from "@views/Application/Users/EmailVerification";
import UserInfo from "@views/Application/Users/UserInfo";
import ProfileOverview from "@views/Application/Users/ProfileOverview";
import PersonalInfo from "@views/Application/Users/PersonalInfo";
import AccountInfo from "@views/Application/Users/AccountInfo";
import ChangePassword from "@views/Application/Users/ChangePassword";
import EmailSetting from "@views/Application/Users/EmailSetting";

const accountProfile = () => {
    return (
        <>
            <BreadcrumbItem mainTitle="Users" subTitle="Account Profile" />
            <Row>
                <Col sm={12}>
                    <EmailVerification />
                    <Tab.Container defaultActiveKey="ProfileInfo">
                        <Row>
                            <UserInfo />
                            <Col lg={7} xxl={9}>
                                <Tab.Content id="user-set-tabContent">
                                    <ProfileOverview />
                                    <PersonalInfo />
                                    <AccountInfo />
                                    <ChangePassword />
                                    <EmailSetting />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row >
        </>
    )
}

accountProfile.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default accountProfile;