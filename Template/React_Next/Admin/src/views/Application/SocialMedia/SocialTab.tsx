import React from "react";
import { Card, Nav } from "react-bootstrap";

const SocialTab = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body className="py-0">
                    <Nav variant="tabs" className="profile-tabs" id="myTab" role="tablist">
                        <Nav.Item>
                            <Nav.Link eventKey="profile" id="profile-tab">
                                <i className="ph-duotone ph-user-circle me-2"></i> Profile
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="friends" id="followers-tab">
                                <i className="ph-duotone ph-users me-2"></i> Friends
                                <span className="badge bg-secondary rounded-pill ms-2">99</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="friendsRequest" id="friends-tab">
                                <i className="ph-duotone ph-user-circle-plus me-2"></i> Friends Request
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="gallery" id="gallery-tab">
                                <i className="ph-duotone ph-image me-2"></i> Gallery
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SocialTab;