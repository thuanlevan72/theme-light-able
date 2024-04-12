import Image from "next/image";
import React from "react";
import { Card, Col, Row, Tab } from "react-bootstrap";

// img
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import avatar6 from "@assets/images/user/avatar-6.jpg";
import avatar7 from "@assets/images/user/avatar-7.jpg";
import avatar8 from "@assets/images/user/avatar-8.jpg";
import avatar9 from "@assets/images/user/avatar-9.jpg";
import avatar10 from "@assets/images/user/avatar-10.jpg";

const Friends = () => {

    const friendsImg = [
        { id: 1, img: avatar1 },
        { id: 2, img: avatar2 },
        { id: 3, img: avatar3 },
        { id: 4, img: avatar4 },
        { id: 5, img: avatar5 },
        { id: 6, img: avatar6 },
        { id: 7, img: avatar7 },
        { id: 8, img: avatar8 },
        { id: 9, img: avatar9 },
        { id: 10, img: avatar10 },
        { id: 11, img: avatar2 },
        { id: 12, img: avatar3 },
        { id: 13, img: avatar4 },
        { id: 14, img: avatar5 },
        { id: 15, img: avatar6 },
        { id: 16, img: avatar7 },
        { id: 17, img: avatar8 },
        { id: 18, img: avatar9 }
    ]
    return (
        <React.Fragment>
            <Tab.Pane eventKey="friends">
                <Card>
                    <Card.Body>
                        <Row>
                            {
                                (friendsImg || [])?.map((item: any, index: number) => (
                                    <Col xl={6} xxl={4} key={index}>
                                        <Card className="border shadow-none">
                                            <Card.Body>
                                                <div className="text-center">
                                                    <div className="chat-avtar d-sm-inline-flex">
                                                        <Image className="rounded-circle img-thumbnail img-fluid wid-80" src={item.img} alt="User image" />
                                                        <i className="chat-badge bg-success mb-2 me-2"></i>
                                                    </div>
                                                    <div className="my-3">
                                                        <h5 className="mb-0">William Bond</h5>
                                                        <p className="mb-0">DM on <a href="#" className="link-primary">@williambond</a>😍</p>
                                                    </div>
                                                </div>
                                                <Row className="g-2">
                                                    <Col xs={6}><div className="d-grid"><button className="btn btn-primary">Accept</button></div></Col>
                                                    <Col xs={6}><div className="d-grid"><button className="btn btn-outline-secondary">Decline</button></div></Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );

}

export default Friends;