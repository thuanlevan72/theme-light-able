import React from "react";
import { Card, Form, Tab } from "react-bootstrap";

const EmailSetting = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="EmailSetting" className="fade" id="user-set-email" role="tabpanel">
                <Card>
                    <Card.Header>
                        <h5>Email Settings</h5>
                    </Card.Header>
                    <Card.Body>
                        <h6 className="mb-3">Setup Email Notification</h6>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Email Notification</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                            <div>
                                <p className="text-muted mb-0">Send Copy To Personal Email</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Activity Related Emails</h5>
                    </Card.Header>
                    <Card.Body>
                        <h6 className="mb-3">When to email?</h6>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Have new notifications</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">You&apos;re sent a direct message</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Someone adds you as a connection</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <hr className="my-2 border border-secondary-subtle" />
                        <h6 className="mb-3">When to escalate emails?</h6>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Upon new order</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">New membership approval</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                            <div>
                                <p className="text-muted mb-0">Member registration</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Updates from System Notification</h5>
                    </Card.Header>
                    <Card.Body>
                        <h6 className="mb-3">Email you with?</h6>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">News about PCT-themes products and feature updates</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Tips on getting more out of PCT-themes</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" defaultChecked />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">Things you missed since you last logged into PCT-themes</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div>
                                <p className="text-muted mb-0">News about products and other services</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                            <div>
                                <p className="text-muted mb-0">Tips and Document business products</p>
                            </div>
                            <Form.Check className="form-switch p-0">
                                <Form.Check.Input className="m-0 h5 position-relative" type="checkbox" role="switch" />
                            </Form.Check>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="text-end btn-page">
                        <div className="btn btn-outline-secondary">Cancel</div>
                        <div className="btn btn-primary">Update Profile</div>
                    </Card.Body>
                </Card>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default EmailSetting;