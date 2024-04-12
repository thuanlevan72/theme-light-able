import React from "react";
import { Col, Card, ProgressBar, Badge, OverlayTrigger, Tooltip, Row } from 'react-bootstrap';
import Image from "next/image";
import Link from "next/link";

//import images
import favicon from "@assets/images/favicon.svg";
import avatar6 from "@assets/images/user/avatar-6.jpg";
import avatar7 from "@assets/images/user/avatar-7.jpg";
import avatar8 from "@assets/images/user/avatar-8.jpg";

const Widgets3 = () => {
    return (
        <>
            <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <i className="ph-duotone ph-arrow-down-left text-primary me-2 f-20"></i>
                      <p className="text-muted mb-0">Income</p>
                    </div>
                  <h4 className="mb-0">3.15k</h4>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div className="media align-items-center mb-3">
                  <Image src={favicon} alt="img" className="img-fluid" />
                  <div className="media-body ms-2">
                    <h5 className="mb-0">Light able</h5>
                    <span className="text-sm text-muted">Light able@developers.io</span>
                  </div>
                </div>
                <div className="media align-items-center">
                  <div className="media-body me-2">
                    <div className="user-group">
                      <Image src={avatar6} alt="user-image" className="avtar" />
                      <Image src={avatar6} alt="user-image" className="avtar" />
                      <Image src={avatar7} alt="user-image" className="avtar" />
                      <Image src={avatar8} alt="user-image" className="avtar" />
                      <span className="avtar rounded-circle bg-light-warning text-warning">+2</span>
                    </div>
                  </div>
                    <Link href="#" className="avtar avtar-s bg-primary rounded-circle text-white">
                        <i className="ti ti-plus f-18"></i>
                    </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6>Languages</h6>
                <p className="text-muted text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <ProgressBar className="my-3 bg-transparent" style={{ height: "8px" }}>
                  <ProgressBar variant="success" now={15} key={1} />
                  <ProgressBar variant="primary" now={20} key={2} />
                  <ProgressBar variant="warning" now={20} key={3} />
                  <ProgressBar variant="danger" now={25} key={4} />
                </ProgressBar>
                <Row className="g-1">
                  <Col xs={6}>
                    <p className="mb-0"><i className="ph-duotone ph-circle text-success f-12"></i> React native</p>
                  </Col>
                  <Col xs={6}>
                    <p className="mb-0"><i className="ph-duotone ph-circle text-primary f-12"></i> Figma</p>
                  </Col>
                  <Col xs={6}>
                    <p className="mb-0"><i className="ph-duotone ph-circle text-warning f-12"></i> Bootstrap 5</p>
                  </Col>
                  <Col xs={6}>
                    <p className="mb-0"><i className="ph-duotone ph-circle text-danger f-12"></i> Shopify</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

        <Col sm={6} xl={4}>
            <Card>
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0">Users</p>
                <OverlayTrigger placement="top" overlay={<Tooltip>Users</Tooltip>}>
                    <i className="ph-duotone ph-arrow-square-out f-20 ms-1"></i>
                </OverlayTrigger>
                </div>
                <h5 className="mb-0">56,908</h5>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0">Income this month</p>
                <OverlayTrigger placement="top" overlay={<Tooltip>Income this month</Tooltip>}>
                    <i className="ph-duotone ph-arrow-square-in f-20 ms-1 text-danger"></i>
                </OverlayTrigger>
                </div>
                <div className="d-flex align-items-center">
                <h5 className="mb-0">$3,569</h5>
                <Badge bg="danger" className="ms-2"><i className="ph-duotone ph-arrow-down me-1 align-middle"></i> 2.6%</Badge>
                </div>
            </Card.Body>
            </Card>
        </Col>

        <Col sm={6} xl={4}>
            <Card>
            <Card.Body>
                <div className="d-flex align-items-center mb-2">
                <h6 className="mb-0">Releases new version</h6>
                <Badge bg="primary" className="ms-2">350</Badge>
                </div>
                <div className="media align-items-start">
                <i className="ph-duotone ph-tag-chevron text-primary f-30"></i>
                <div className="media-body ms-3">
                    <div className="d-inline-flex align-items-center mb-2">
                    <h6 className="mb-0">v0.63.3</h6>
                    <Badge bg="light-success" className="ms-2">Latest</Badge>
                    </div>
                    <p className="mb-0 text-muted">on Sep 29</p>
                </div>
                </div>
            </Card.Body>
            </Card>
        </Col>
        </>
    )
}

export default Widgets3;