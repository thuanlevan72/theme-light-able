import React, { useState } from 'react';
import { Card, Collapse, Nav } from "react-bootstrap";
import EmailComposeModal from './EmailComposeModal';
import SimpleBar from 'simplebar-react';
import Link from 'next/link';

const EmailSidebarMenu = ({ toggleTab }: any) => {
    const [compose, setCompose] = useState<boolean>(false);
    const handleClose = () => setCompose(!compose);

    const [mailCollapselist1, setMailCollapselist1] = useState<boolean>(true);
    const mailCollapseClose = () => setMailCollapselist1(!mailCollapselist1);

    const [mailCollapselist2, setMailCollapselist2] = useState<boolean>(true);
    const mailCollapselistClose2 = () => setMailCollapselist2(!mailCollapselist2);


    return (
        <React.Fragment>
            <div className="offcanvas-xxl offcanvas-start mail-offcanvas" tabIndex={-1} id="offcanvas_mail">
                <div className="offcanvas-header">
                    <button className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_mail"></button>
                </div>
                <div className="offcanvas-body p-0">
                    <div id="mail-menulist" className="show collapse collapse-horizontal">
                        <div className="mail-menulist">
                            <Card className="shadow-none">
                                <div className="card-body px-0 pt-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary d-flex align-items-center justify-content-center" onClick={handleClose}>
                                            <i className="ti ti-circle-plus me-2"></i> Compose
                                        </button>
                                    </div>
                                </div>
                                <SimpleBar className="scroll-block">
                                    <Card.Body className="p-0">
                                        <div className="list-group list-group-flush" id="list-tab">
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-1" onClick={() => toggleTab("Inbox  ", "all", "all")}>
                                                <span> <i className="ti ti-inbox"></i>  Inbox  </span>
                                                <span className="avtar avtar-xs">4</span>
                                            </Link>
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-3" onClick={() => toggleTab("Sent ", "all", "all")}>
                                                <span><i className="ti ti-send"></i> Sent </span>
                                            </Link>
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-4" onClick={() => toggleTab("Draft", "all", "all")}>
                                                <span><i className="ti ti-file-text"></i> Draft</span>
                                            </Link>
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-5" onClick={() => toggleTab("Spam ", "all", "all")}>
                                                <span><i className="ti ti-alert-triangle"></i>  Spam </span>
                                            </Link>
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-6" onClick={() => toggleTab("Trash", "all", "all")}>
                                                <span> <i className="ti ti-trash text-danger"></i>Trash</span>
                                                <span className="avtar avtar-xs">2</span>
                                            </Link>
                                            <Link className="list-group-item list-group-item-action" href="#list-mail-3" onClick={() => toggleTab("Archive", "all", "all")}>
                                                <span> <i className="ti ti-archive text-success"></i> Archive</span>
                                            </Link>
                                            <hr className="my-3 border border-secondary-subtle" />
                                            <a data-bs-toggle="collapse" href="#mailCollapselist1" role="button" onClick={mailCollapseClose}>
                                                <p className="text-muted ps-3 mb-0">Filters</p>
                                            </a>
                                            <Collapse in={mailCollapselist1} className="multi-collapse">
                                                <div id="mailCollapselist1">
                                                    <Link className="list-group-item list-group-item-action mt-3" href="#list-mail-7" onClick={() => toggleTab("all", "all", "Starred ")}>
                                                        <span> <i className="ti ti-star text-warning"></i> Starred </span>
                                                    </Link>
                                                    <Link className="list-group-item list-group-item-action" href="#list-mail-8" onClick={() => toggleTab("all", "all", "Important ")}>
                                                        <span> <i className="ti ti-flag-3"></i>  Important </span>
                                                        <span className="avtar avtar-xs">2</span>
                                                    </Link>
                                                </div>
                                            </Collapse>
                                            <hr className="my-3 border border-secondary-subtle" />
                                            <a data-bs-toggle="collapse" href="#mailCollapselist2" role="button" onClick={mailCollapselistClose2}>
                                                <p className="text-muted ps-3 mb-0">Label</p>
                                            </a>
                                            <Collapse in={mailCollapselist2} className="multi-collapse">
                                                <div id="mailCollapselist2">
                                                    <Link className="list-group-item list-group-item-action mt-3" href="#list-mail-7" onClick={() => toggleTab("all", "all", "Promotions")}>
                                                        <span><i className="ti ti-flag-3 text-primary"></i>  Promotions </span>
                                                        <span className="avtar avtar-xs">3</span>
                                                    </Link>
                                                    <Link className="list-group-item list-group-item-action" href="#list-mail-8" onClick={() => toggleTab("all", "all", "Forums")}>
                                                        <span> <i className="ti ti-flag-3 text-warning"></i> Forums</span>
                                                        <span className="avtar avtar-xs">1</span>
                                                    </Link>
                                                    <Link className="list-group-item list-group-item-action d-none" href="#list-mail-9" role="tab"></Link>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Card.Body>
                                </SimpleBar>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <EmailComposeModal show={compose} handleClose={handleClose} />

        </React.Fragment>
    );
}

export default EmailSidebarMenu;