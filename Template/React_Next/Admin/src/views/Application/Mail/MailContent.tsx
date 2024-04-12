import Link from "next/link";
import React from "react";
import { Card, Dropdown, Form } from "react-bootstrap";
import InboxTab from "./InboxTab";

const MailContent = ({ setMiniMailList, miniMailList, displayCategorys, displayTypes, displayLables }: any) => {

    return (
        <React.Fragment>
            <div className="mail-content">
                <div className="d-md-flex align-items-center">
                    <ul className="list-inline me-auto mb-3">
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="d-xxl-none avtar avtar-s btn-link-secondary" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas_mail">
                                <i className="ti ti-menu-2 f-18"></i>
                            </Link>
                            <Link href="#" className="d-none d-xxl-inline-flex avtar avtar-s btn-link-secondary">
                                <i className="ti ti-menu-2 f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="avtar avtar-s btn-link-secondary" onClick={() => setMiniMailList(!miniMailList)}>
                                <i className="ti ti-arrows-vertical f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="avtar avtar-s btn-link-secondary arrow-none" href="#!">
                                    <i className="ti ti-dots f-18"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#!">Name</Dropdown.Item>
                                    <Dropdown.Item href="#!">Date</Dropdown.Item>
                                    <Dropdown.Item href="#!">Ratting</Dropdown.Item>
                                    <Dropdown.Item href="#!">Unread</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                    <ul className="list-inline ms-auto mb-3 d-flex flex-wrap align-items-center gap-2">
                        <li className="list-inline-item">
                            <form className="form-search">
                                <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                <Form.Control type="search" placeholder="Search..." />
                                <button className="btn btn-light-secondary btn-search">Search</button>
                            </form>
                        </li>
                        <li className="list-inline-item">
                            <Link href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-arrow-left f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">1-6 of 10</li>
                        <li className="list-inline-item">
                            <Link href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-arrow-right f-18"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Card className="shadow-none bg-body mb-0">
                    <Card.Body>
                        <InboxTab miniMailList={miniMailList}
                            displayCategorys={displayCategorys}
                            displayTypes={displayTypes}
                            displayLables={displayLables} />
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default MailContent;