import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";

const BCBadges = () => {
    return (
        <>
            <SectionTitle
                title="Badges"
                description="Documentation and examples for badges, our small count and labeling component."
                link="https://react-bootstrap.netlify.app/docs/components/badge/"
            />

            <div className="row">
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Basic Badges</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <h1>
                                Example heading <Badge bg="dark">New</Badge>
                            </h1>
                            <h2>
                                Example heading <Badge bg="dark">New</Badge>
                            </h2>
                            <h3>
                                Example heading <Badge bg="dark">New</Badge>
                            </h3>
                            <h4>
                                Example heading <Badge bg="dark">New</Badge>
                            </h4>
                            <h5>
                                Example heading <Badge bg="dark">New</Badge>
                            </h5>
                            <h6>
                                Example heading <Badge bg="dark">New</Badge>
                            </h6>
                        </Card.Body>
                    </Card>
                    <Card className="btn-page">
                        <Card.Header>
                            <h5>Button Badges</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary">
                                    primary{" "}
                                    <Badge bg="light" text="dark">
                                        4
                                    </Badge>
                                </Button>
                                <Button variant="secondary" className="position-relative">
                                    Inbox
                                    <Badge
                                        pill
                                        bg="danger"
                                        className="position-absolute top-0 start-100 translate-middle"
                                    >
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </Badge>
                                </Button>
                                <Button variant="info" className="position-relative ms-2">
                                    Profile
                                    <Badge
                                        pill
                                        bg="danger"
                                        // border="light"
                                        className="position-absolute top-0 start-100 translate-middle p-2 rounded-circle"
                                    >
                                        <span className="visually-hidden">New alerts</span>
                                    </Badge>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Contextual Variations</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Badge bg="primary">Primary</Badge>
                                <Badge bg="secondary">Secondary</Badge>
                                <Badge bg="success">Success</Badge>
                                <Badge bg="danger">Danger</Badge>
                                <Badge bg="warning" text="dark">
                                    Warning
                                </Badge>
                                <Badge bg="info">Info</Badge>
                                <Badge bg="light" text="dark">
                                    Light
                                </Badge>
                                <Badge bg="dark">Dark</Badge>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Pill Badges</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Badge pill bg="primary">
                                    Primary
                                </Badge>
                                <Badge pill bg="secondary">
                                    Secondary
                                </Badge>
                                <Badge pill bg="success">
                                    Success
                                </Badge>
                                <Badge pill bg="danger">
                                    Danger
                                </Badge>
                                <Badge pill bg="warning" text="dark">
                                    Warning
                                </Badge>
                                <Badge pill bg="info">
                                    Info
                                </Badge>
                                <Badge pill bg="light" text="dark">
                                    Light
                                </Badge>
                                <Badge pill bg="dark">
                                    Dark
                                </Badge>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Light variant</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="d-flex flex-wrap gap-2">
                                <Badge bg="light-primary">Primary</Badge>
                                <Badge bg="light-secondary">Secondary</Badge>
                                <Badge bg="light-success">Success</Badge>
                                <Badge bg="light-danger">Danger</Badge>
                                <Badge bg="light-warning">Warning</Badge>
                                <Badge bg="light-info">Info</Badge>
                                <Badge bg="light-light" text="dark">
                                    Light
                                </Badge>
                                <Badge bg="light-dark">Dark</Badge>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    )
}

BCBadges.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCBadges;
