import Link from "next/link";
import React, { useState } from "react";
import { Card, Collapse, Form } from "react-bootstrap";

// img
import avatar5 from "@assets/images/user/avatar-5.jpg"
import Image from "next/image";
import SimpleBar from "simplebar-react";

const ProfileView = ({ opne, setOpne, Chat_Box_Username, Chat_Box_Image }: any) => {
    const [show, setShow] = useState<boolean>(true);
    const [fileCollapse, setFileCollapse] = useState<boolean>(true);
    return (
        <React.Fragment>
            <Collapse in={opne} className="collapse-horizontal">
                <div className="chat-user_info">
                    <div className="card bg-transparent shadow-none border-0 mb-0">
                        <div className="text-center card-body position-relative p-3 pb-0 px-0">
                            <h5 className="text-start">Profile View</h5>
                            <div className="position-absolute end-0 top-0 p-2 d-none d-xxl-inline-flex">
                                <Link href="#" className="avtar avtar-xs btn-link-danger btn-pc-default" onClick={() => setOpne(!opne)}>
                                    <i className="ti ti-x f-16"></i>
                                </Link>
                            </div>
                            <div className="chat-avtar d-inline-flex mx-auto">
                                <Image className="rounded-circle img-fluid" src={Chat_Box_Image || avatar5} width={100} height={100} alt="User image" />
                            </div>
                            <h5 className="mb-0">{Chat_Box_Username || "Alene"}</h5>
                            <p className="text-muted text-sm">DM on <a href="#" className="link-primary">@williambond</a></p>
                            <ul className="list-inline ms-auto">
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s btn-link-secondary">
                                        <i className="ti ti-phone-call f-18"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s btn-link-secondary">
                                        <i className="ti ti-message-circle f-18"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="avtar avtar-s btn-link-secondary">
                                        <i className="ti ti-video f-18"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <SimpleBar className="scroll-block" data-simplebar="init">
                            <Card.Body className="p-0">
                                <Form.Check className="form-switch d-flex align-items-center justify-content-between p-0">
                                    <Form.Check.Label className="h5 mb-0" htmlFor="customSwitchemlnot1">Notification</Form.Check.Label>
                                    <Form.Check.Input className="h5 mb-0 position-relative" type="checkbox" id="customSwitchemlnot1" defaultChecked />
                                </Form.Check>
                                <hr className="my-3 border border-secondary-subtle" />
                                <a className="btn border-0 p-0 text-start w-100" onClick={() => setShow(!show)}>
                                    <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                    <h5 className="mb-0">Information</h5>
                                </a>
                                <Collapse in={show}>
                                    <div className="py-3">
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-map-pin"></i>
                                            <p className="mb-0 text-muted ms-2">32188 Sips Parkways, U.S</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-envelope-open"></i>
                                            <p className="mb-0 text-muted ms-2">Keefe@codedtheme.com</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-phone-call"></i>
                                            <p className="mb-0 text-muted ms-2">995-250-1803</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-calendar-blank"></i>
                                            <p className="mb-0 text-muted ms-2">30, Nov 2021</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-globe-hemisphere-east"></i>
                                            <p className="mb-0 text-muted ms-2">India</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start mb-2">
                                            <i className="ph-duotone ph-briefcase"></i>
                                            <p className="mb-0 text-muted ms-2"><a href="#" className="link-primary">Light able.com</a></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <i className="ph-duotone ph-radio-button"></i>
                                            <p className="mb-0 text-muted ms-2"><span className="badge bg-light-warning text-warning">UI/UX Designer</span></p>
                                        </div>
                                    </div>
                                </Collapse>
                                <hr className="my-3 border border-secondary-subtle" />
                                <a className="btn border-0 p-0 text-start w-100" onClick={() => setFileCollapse(!fileCollapse)}>
                                    <div className="float-end"><i className="ti ti-chevron-down"></i></div>
                                    <h5 className="mb-0">File type</h5>
                                </a>
                                <Collapse in={fileCollapse}>
                                    <div className="py-3">
                                        <div className="media align-items-center mb-2">
                                            <a href="#" className="avtar avtar-s btn-light-success">
                                                <i className="ti ti-file-text f-20"></i>
                                            </a>
                                            <div className="media-body ms-3">
                                                <h6 className="mb-0">Document</h6>
                                                <span className="text-muted text-sm">123 files, 193MB</span>
                                            </div>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-chevron-right f-16"></i>
                                            </a>
                                        </div>
                                        <div className="media align-items-center mb-2">
                                            <a href="#" className="avtar avtar-s btn-light-danger">
                                                <i className="ti ti-photo f-20"></i>
                                            </a>
                                            <div className="media-body ms-3">
                                                <h6 className="mb-0">Photos</h6>
                                                <span className="text-muted text-sm">53 files, 321MB</span>
                                            </div>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-chevron-right f-16"></i>
                                            </a>
                                        </div>
                                        <div className="media align-items-center mb-2">
                                            <a href="#" className="avtar avtar-s btn-light-primary">
                                                <i className="ti ti-id f-20"></i>
                                            </a>
                                            <div className="media-body ms-3">
                                                <h6 className="mb-0">Other</h6>
                                                <span className="text-muted text-sm">49 files, 193MB</span>
                                            </div>
                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                <i className="ti ti-chevron-right f-16"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </SimpleBar>
                    </div>
                </div>
            </Collapse>
        </React.Fragment>
    );
}

export default ProfileView;