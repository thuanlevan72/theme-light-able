import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import Image from "next/image";
import { Card, Collapse, Dropdown, Form, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "src/toolkit/Chat/reducer";
import { chatList } from "@common/JsonData";

// img
import avatar5 from "@assets/images/user/avatar-5.jpg";
import { createSelector } from "reselect";

const SideBar = ({ userChatOpen, Chat_Box_Username, sidecollapse }: any) => {
    const dispatch = useDispatch<any>();
    
    const sidebarData = createSelector(
        (state: any) => state.chat,
        (state) => state.chatContact
    );
    const chatContact = useSelector(sidebarData);

    const [chatContactList, setChatContactList] = useState<any>();

    useEffect(() => {
        dispatch(getChat(chatList as any))
    }, [dispatch]);

    useEffect(() => {
        setChatContactList(chatContact)
    }, [chatContact]);

    const heandleSearch = (ele: any) => {
        if (ele) {
            setChatContactList(chatContact.filter((i: any) => i.name.toLowerCase().includes(ele.toLowerCase())))
        } else {
            setChatContactList(chatContact)
        }

    }

    return (
        <React.Fragment>
            <div className="offcanvas-xxl offcanvas-start chat-offcanvas" tabIndex={-1} id="offcanvas_User_list">
                <Offcanvas.Body className="p-0">
                    <Collapse in={sidecollapse} className="collapse-horizontal">
                        <div className="chat-user_list">
                            <Card className="bg-transparent shadow-none border-0 overflow-hidden mb-0">
                                <Card.Body className="px-0 pt-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="me-auto">
                                            <h5 className="mb-0">Inbox <span className="avtar avtar-xs bg-light-secondary rounded-circle">9</span></h5>
                                        </div>
                                        <div className="ms-auto">
                                            <Dropdown>
                                                <Dropdown.Toggle as="a" className="avtar avtar-s btn-link-secondary arrow-none" href="#">
                                                    <i className="ti ti-dots f-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Preferences</Dropdown.Item>
                                                    <Dropdown.Item href="#">Edit profile</Dropdown.Item>
                                                    <Dropdown.Item href="#">Go offline</Dropdown.Item>
                                                    <Dropdown.Item href="#">Mark all read</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <form className="form-search">
                                        <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                        <Form.Control type="search" className="w-100" placeholder="Search here. . ." onChange={(event: any) => heandleSearch(event.target.value)} />
                                    </form>
                                </Card.Body>
                                <SimpleBar className="scroll-block simplebar-scrollable-y" data-simplebar="init">
                                    <Card.Body className="p-0">
                                        <div className="list-group list-group-flush">
                                            {
                                                (chatContactList || [])?.map((item: any, idx: number) => (
                                                    <div className={`list-group-item list-group-item-action p-3 ${item.name === Chat_Box_Username ? "active" : ''}`} key={idx} onClick={() => userChatOpen(item)}>
                                                        <div className="media align-items-center">
                                                            <div className="chat-avtar">
                                                                <Image className="rounded-circle img-fluid" width={40} height={40} src={item.avatar} alt="User image" />
                                                                <div className={"chat-badge " + item.badgeColor}></div>
                                                            </div>
                                                            <div className="media-body mx-2">
                                                                <h6 className="mb-0">{item.name}</h6>
                                                                <div className="d-flex text-sm text-muted">
                                                                    <div className="flex-grow-1 position-relative">
                                                                        <span className="mb-0 text-truncate position-absolute top-0 start-0 w-100">{item.message}</span>
                                                                    </div>
                                                                    <span>1 week ago</span>
                                                                </div>
                                                            </div>
                                                            <Dropdown>
                                                                <Dropdown.Toggle className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#">
                                                                    <i className="ti ti-dots-vertical f-18"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu-end">
                                                                    <Dropdown.Item href="#">Delete conversation</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Mark as read</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </Card.Body>
                                </SimpleBar>
                                <Card.Body className="p-0">
                                    <div className="list-group list-group-flush">
                                        <Link href="#" className="list-group-item list-group-item-action">
                                            <i className="ti ti-power"></i>
                                            <span>Logout</span>
                                        </Link>
                                        <Link href="#" className="list-group-item list-group-item-action">
                                            <i className="ti ti-settings"></i>
                                            <span>Setting</span>
                                        </Link>
                                        <div className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="chat-avtar">
                                                    <Image className="rounded-circle img-fluid" width={40} height={40} src={avatar5} alt="User image" />
                                                    <i className="chat-badge bg-success"></i>
                                                </div>
                                                <div className="media-body mx-3">
                                                    <h6 className="mb-0">John Doe</h6>
                                                    <span className="text-muted text-sm">UI/UX Designer</span>
                                                </div>
                                                <Dropdown>
                                                    <Dropdown.Toggle className="avtar avtar-xs btn-link-secondary arrow-none" href="#">
                                                        <i className="ti ti-chevron-right f-16"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#"><i className="chat-badge bg-success"></i> Active</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="chat-badge bg-warning"></i>
                                                            Away</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="chat-badge bg-secondary"></i> Edit Do not
                                                            disturb</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Collapse>
                </Offcanvas.Body>
            </div>
        </React.Fragment>
    );
}

export default SideBar;