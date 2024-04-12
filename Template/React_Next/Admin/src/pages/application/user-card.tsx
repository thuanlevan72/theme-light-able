import React, { ReactElement } from "react";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import { userCard } from "@common/JsonData";
import Image from "next/image";

const UserCards = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Users" subTitle="User Card" />
            <Row>
                {
                    (userCard || [])?.map((item: any, index: number) => (
                        <Col md={6} xl={4} key={index}>
                            <Card className="user-card">
                                <Card.Body>
                                    <div className="user-cover-bg">
                                        <Image src={item.bgImage} alt="image" className="img-fluid" />
                                        <div className="cover-data">
                                            <div className="d-inline-flex align-items-center">
                                                <i className="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small className="text-white text-opacity-50">/ 5</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-avtar card-user-image">
                                        <Image src={item.avatar} alt="user-image" className="img-thumbnail rounded-circle " />
                                        <i className="chat-badge bg-danger"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-1">William Bond</h6>
                                            <p className="text-muted text-sm mb-0">DM on <a href="#" className="text-primary">@williambond</a></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button className="btn btn-primary btn-sm">Message</button>
                                            <button className="btn btn-outline-secondary btn-sm ms-1">Follow</button>
                                        </div>
                                    </div>
                                    <div className="row g-3 my-2 text-center">
                                        <div className="col-4">
                                            <h5 className="mb-0">86</h5>
                                            <small className="text-muted">Post</small>
                                        </div>
                                        <div className="col-4 border border-top-0 border-bottom-0">
                                            <h5 className="mb-0">40</h5>
                                            <small className="text-muted">Project</small>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="mb-0">4.5K</h5>
                                            <small className="text-muted">Members</small>
                                        </div>
                                    </div>
                                    <div className="saprator my-2">
                                        <span>Skills</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                                        <span className="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
                                    </div>
                                    <div className="saprator my-2">
                                        <span>Task completed</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 me-2">
                                            <div className="progress" style={{ height: "8px" }}>
                                                <div className={"progress-bar bg-" + item.color} style={{ width: item.task_completion }}></div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h6 className="mb-0">{item.task_completion}</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row >
        </React.Fragment>
    )
}

UserCards.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default UserCards;