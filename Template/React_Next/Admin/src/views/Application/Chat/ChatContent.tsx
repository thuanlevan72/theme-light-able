import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import { userChat } from "@common/JsonData";
import { getuserChat, onAddMessage, onDeleteMessage } from "src/toolkit/Chat/reducer";

// img
import avatar5 from "@assets/images/user/avatar-5.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import { createSelector } from "reselect";

const ChatContent = ({ Chat_Box_Username, Chat_Box_Image, sidecollapse, setSidecollapse, opne, setOpne }: any) => {

    const dispatch = useDispatch<any>();
    const [curMessage, setcurMessage] = useState<any>("");

    const chatData = createSelector(
        (state: any) => state.chat,
        (state) => state.userChat
    );
    const userChat = useSelector(chatData);

    const currentData = userChat?.filter((i: any) => i.name === Chat_Box_Username)

    useEffect(() => {
        dispatch(getuserChat(userChat))
    }, [dispatch, userChat]);

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour < 12 ? "AM" : "PM";
    const addMessage = () => {
        const message: any = {
            id: Math.floor(Math.random() * 100),
            roomNO: 1,
            msg: curMessage,
            time: `${hour}.${minute} ${time}`,
        };
        dispatch(onAddMessage(message));
        setcurMessage("");
    };

    const handleDelete = (id: any) => {
        dispatch(onDeleteMessage(id));
    }

    const scrollMsg = useRef<any>();

    useEffect(() => {
        // scrollMsg.current.top = scrollMsg.current.height
        if (scrollMsg.current) {
            scrollMsg.current.scrollTop = scrollMsg.current.scrollHeight;
        }
    }, [userChat]);

    console.log("userChat",userChat)

    return (
        <>
            <div className="chat-content">
                <div className="d-flex align-items-center mb-3">
                    <ul className="list-inline me-auto mb-0">
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="d-xxl-none avtar avtar-s btn-link-secondary" onClick={() => setSidecollapse(!sidecollapse)}>
                                <i className="ti ti-menu-2 f-18"></i>
                            </Link>
                            <Link href="#" className="d-none d-xxl-inline-flex avtar avtar-s btn-link-secondary" onClick={() => setSidecollapse(!sidecollapse)}>
                                <i className="ti ti-menu-2 f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <div className="media align-items-center">
                                <div className="chat-avtar">
                                    <Image className="rounded-circle img-fluid" width={40} height={40} src={Chat_Box_Image || avatar5} alt="User image" />
                                    <i className="chat-badge bg-success"></i>
                                </div>
                                <div className="media-body mx-3 d-none d-sm-inline-block">
                                    <h6 className="mb-0">{Chat_Box_Username || "Alene"}</h6>
                                    <span className="text-sm text-muted">ui/ux designer</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list-inline ms-auto mb-0">
                        <li className="list-inline-item">
                            <Link href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-phone-call f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-video f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item" >
                            <Link href="#" className="d-xxl-none avtar avtar-s btn-link-secondary" onClick={() => setOpne(!opne)}>
                                <i className="ti ti-info-circle f-18"></i>
                            </Link>
                            <Link href="#" className="d-none d-xxl-inline-flex avtar avtar-s btn-link-secondary" onClick={() => setOpne(!opne)}>
                                <i className="ti ti-info-circle f-18"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#">
                                    <i className="ti ti-dots f-18"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Name</Dropdown.Item>
                                    <Dropdown.Item href="#">Date</Dropdown.Item>
                                    <Dropdown.Item href="#">Ratting</Dropdown.Item>
                                    <Dropdown.Item href="#">Unread</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <Card className="bg-body shadow-none mb-0">
                    <SimpleBar className="scroll-block chat-message" data-simplebar="init" ref={scrollMsg}>
                        <Card.Body>
                            {
                                (currentData || [])?.map((item: any) => {
                                    return item.userData.map((chats: any, chatIdx: number) => {
                                        return (
                                            <React.Fragment key={chatIdx}>
                                                {
                                                    chats.roomNO === 1 ?
                                                        <div className="message-out">
                                                            <div className="d-flex align-items-end flex-column">
                                                                <p className="mb-1 text-muted"><small>{chats.time}</small></p>
                                                                <div className="message d-flex align-items-end flex-column">
                                                                    <div className="d-flex align-items-center mb-1 chat-msg">
                                                                        <div className="flex-shrink-0">
                                                                            <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                                <li className="list-inline-item">
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle as="a" className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#">
                                                                                            <i className="ti ti-dots-vertical f-18"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#"><i className="ti ti-arrow-back-up"></i> Reply</Dropdown.Item>
                                                                                            <Dropdown.Item href="#"><i className="ti ti-arrow-forward-up"></i>
                                                                                                Forward</Dropdown.Item>
                                                                                            <Dropdown.Item href="#"><i className="ti ti-copy"></i> Copy</Dropdown.Item>
                                                                                            <Dropdown.Item href="#" onClick={() => handleDelete(chats.id)}><i className="ti ti-trash"></i> Delete</Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <Link href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                        <i className="ti ti-edit-circle f-18"></i>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-3">
                                                                            <div className="msg-content bg-primary">
                                                                                <p className="mb-0">{chats.msg}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="message-in">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <div className="chat-avtar">
                                                                        <Image className="rounded-circle img-fluid" src={Chat_Box_Image || avatar3} width={40} height={40} alt="User image" />
                                                                        <i className="chat-badge bg-success"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 mx-3">
                                                                    <div className="d-flex align-items-start flex-column">
                                                                        <p className="mb-1 text-muted">{chats.time}</p>
                                                                        <div className="message d-flex align-items-start flex-column">
                                                                            <div className="d-flex align-items-center mb-1 chat-msg">
                                                                                <div className="flex-grow-1 me-3">
                                                                                    <div className="msg-content card mb-0">
                                                                                        <p className="mb-0">{chats.msg}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                                        <li className="list-inline-item">
                                                                                            <Dropdown>
                                                                                                <Dropdown.Toggle as="a" className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#">
                                                                                                    <i className="ti ti-dots-vertical f-18"></i>
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu>
                                                                                                    <Dropdown.Item href="#"><i className="ti ti-arrow-back-up"></i> Reply</Dropdown.Item>
                                                                                                    <Dropdown.Item href="#"><i className="ti ti-arrow-forward-up"></i>
                                                                                                        Forward</Dropdown.Item>
                                                                                                    <Dropdown.Item href="#"><i className="ti ti-copy"></i> Copy</Dropdown.Item>
                                                                                                    <Dropdown.Item href="#" onClick={() => handleDelete(chats.id)}><i className="ti ti-trash"></i> Delete</Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                            </Dropdown>
                                                                                        </li>
                                                                                        <li className="list-inline-item">
                                                                                            <Link href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                                <i className="ti ti-edit-circle f-18"></i>
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                })
                            }
                        </Card.Body>
                    </SimpleBar>
                </Card>
                <div className="card-footer border-top pt-2 px-3 pb-0">
                    <div className="input-group align-items-center">
                        <ul className="list-inline me-auto mb-0">
                            <li className="list-inline-item">
                                <Link href="#" className="avtar avtar-xs btn-link-secondary">
                                    <i className="ti ti-paperclip f-18"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="#" className="avtar avtar-xs btn-link-secondary">
                                    <i className="ti ti-photo f-18"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="#" className="avtar avtar-xs btn-link-secondary">
                                    <i className="ti ti-mood-smile f-18"></i>
                                </Link>
                            </li>
                        </ul>
                        <Form.Control type="text" className="shadow-none border-0 bg-transparent" placeholder="Type a Message" value={curMessage} onChange={e => setcurMessage(e.target.value)} />
                        <ul className="list-inline ms-auto mb-0">
                            <li className="list-inline-item">
                                <Link href="#" className="avtar avtar-s rounded-circlen btn btn-primary" onClick={addMessage}>
                                    <i className="ti ti-send f-18"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatContent;