import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Button, Card, Col, Nav, Popover, Row, OverlayTrigger, Tab } from "react-bootstrap";

const BCTooltip = () => {

    const popoverTop = (
        <Popover id="popover-top" title="Popup on Top" className="p-3">
            Top by popover
        </Popover>
    );

    const popoverLeft = (
        <Popover id="popover-left" title="Popup on Left" className="p-3">
            Left by popover
        </Popover>
    );

    const popoverRight = (
        <Popover id="popover-right" title="Popup on Right" className="p-3">
            Right by popover
        </Popover>
    );

    const popoverBottom = (
        <Popover id="popover-bottom" title="Popup on Bottom" className="p-3">
            Bottom by popover
        </Popover>
    );

    const popoverHtml = (
        <Popover id="popover-html" title="Popup with HTML" className="p-3">
            Popup by HTML
        </Popover>
    );
    return (
        <>
            <SectionTitle
                title="Tooltip"
                description="Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage."
                link="https://react-bootstrap.netlify.app/docs/forms/validation/#tooltips"
            />
            <Row>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Tooltip</h5>
                        </Card.Header>
                        <Card.Body className="btn-page pc-component">
                            <Button variant="danger" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip on top">
                                Top
                            </Button>
                            <Button variant="primary" data-bs-toggle="tooltip" data-bs-placement="left" title="tooltip on left">
                                Left
                            </Button>
                            <Button variant="success" data-bs-toggle="tooltip" data-bs-placement="right" title="tooltip on right">
                                Right
                            </Button>
                            <Button variant="warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="tooltip on bottom">
                                Bottom
                            </Button>
                            <Button variant="info" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                Html Tooltip
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Popover</h5>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger  placement="top" overlay={popoverTop}>
                                <Button className="me-1" variant="danger">Top</Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement="left" overlay={popoverLeft}>
                                <Button className="me-1" variant="primary">Left</Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement="right" overlay={popoverRight}>
                                <Button className="me-1" variant="success">Right</Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement="bottom" overlay={popoverBottom}>
                                <Button className="me-1" variant="warning">Bottom</Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement="top" overlay={popoverHtml}>
                                <Button variant="info">Html Popup</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

BCTooltip.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCTooltip;
