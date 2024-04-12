import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

// img
import profileCover from "@assets/images/application/img-profile-cover.jpg"
import avatar5 from "@assets/images/user/avatar-5.jpg";
const SocialProfile = () => {
    return (
        <React.Fragment>
            <Card className="social-profile">
                <Image src={profileCover} alt="" className="w-100 h-100 card-img-top" />
                <Card.Body className="pt-0">
                    <Row className="align-items-end">
                        <div className="col-md-auto text-md-start">
                            <Image className="img-fluid img-profile-avtar" src={avatar5} alt="User image" />
                        </div>
                        <div className="col">
                            <Row className="justify-content-between align-items-end">
                                <Col md={5} xl={6} className="soc-profile-data">
                                    <h5 className="mb-1">Stebin Ben</h5>
                                    <p className="mb-0">UI/UX Designer <Link href="#" className="link-primary">Follow</Link></p>
                                </Col>
                                <Col md={7} xl={6} xxl={5}>
                                    <Row className="g-1 text-center">
                                        <Col xs={3}>
                                            <h5 className="mb-0">239k</h5>
                                            <p className="text-muted mb-0">Followers</p>
                                        </Col>
                                        <Col xs={3} className="border border-top-0 border-bottom-0">
                                            <h5 className="mb-0">539k</h5>
                                            <p className="text-muted mb-0">Following</p>
                                        </Col>
                                        <Col xs={3} className="border border-top-0 border-bottom-0">
                                            <h5 className="mb-0">400</h5>
                                            <p className="text-muted mb-0">Post</p>
                                        </Col>
                                        <Col xs={3}>
                                            <h5 className="mb-0">539k</h5>
                                            <p className="text-muted mb-0">Like</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SocialProfile;