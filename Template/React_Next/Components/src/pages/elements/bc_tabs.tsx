import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

const BCTabs = () => {
    return (
        <>
            <SectionTitle
                title="Tabs & Pills"
                description="Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface."
                link="https://react-bootstrap.netlify.app/docs/components/tabs"
            />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body className="pc-component">
                            <h5 className="mb-3">Basic Tabs</h5>
                            <Tab.Container id="myTab" defaultActiveKey="home">
                                <Nav variant="tabs" className="mb-3">
                                    <Nav.Item>
                                        <Nav.Link className="text-uppercase" eventKey="home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-uppercase" eventKey="profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-uppercase" eventKey="contact">Contact</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane eventKey="home">
                                        <p className="mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile">
                                        <p className="mb-0">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                                            infancy.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="contact">
                                        <p className="mb-0">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or words which don&apos;t look even slightly believable. If
                                            you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                <div className="col-sm-12">
                    <Card>
                        <Card.Body className="pc-component">
                            <h5 className="mb-3">Basic Pills</h5>
                            <Tab.Container id="pills-tab" defaultActiveKey="pills-home">
                                <Nav variant="pills" className="mb-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-contact">Contact</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="pills-tabContent">
                                    <Tab.Pane eventKey="pills-home">
                                        <p className="mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-profile">
                                        <p className="mb-0">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                                            infancy.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-contact">
                                        <p className="mb-0">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or words which don&apos;t look even slightly believable. If
                                            you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12">
                    <Card>
                        <Card.Body className="pc-component">
                            <h5 className="mb-3">Vertical Pills</h5>
                            <Tab.Container id="v-pills-tab" defaultActiveKey="v-pills-home">
                            <div className="row g-4">
                                <div className="col-md-3 col-sm-12">
                                    <Nav variant="pills" className="flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <Nav.Item>
                                            <Nav.Link eventKey="v-pills-home">
                                                Home
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="v-pills-profile">
                                                Profile
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="v-pills-messages">
                                                Messages
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="v-pills-settings">
                                                Settings
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <Tab.Content id="v-pills-tabContent">
                                        <Tab.Pane eventKey="v-pills-home">
                                            <p className="mb-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                                leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="v-pills-profile">
                                            <p className="mb-0">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                                                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                                                infancy.
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="v-pills-messages">
                                            <p className="mb-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                                leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="v-pills-settings">
                                            <p className="mb-0">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                alteration in some form, by injected humour, or words which don&apos;t look even slightly believable. If
                                                you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing
                                                hidden in the middle of text.
                                            </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </div>
            </Row>

        </>
    )
}

BCTabs.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCTabs;
