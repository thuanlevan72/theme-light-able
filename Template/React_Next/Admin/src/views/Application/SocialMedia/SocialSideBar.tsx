import Image from "next/image";
import React from "react";

// img
import communitybg from "@assets/images/application/img-community-bg.jpg";
import favicon from "@assets/images/favicon.svg";
import avatar6 from "@assets/images/user/avatar-6.jpg";
import avatar7 from "@assets/images/user/avatar-7.jpg";
import avatar8 from "@assets/images/user/avatar-8.jpg";
import avatar1 from "@assets/images/user/avatar-1.jpg";
import avatar2 from "@assets/images/user/avatar-2.jpg";
import avatar5 from "@assets/images/user/avatar-5.jpg";
import avatar3 from "@assets/images/user/avatar-3.jpg";
import avatar4 from "@assets/images/user/avatar-4.jpg";
import socgal1 from "@assets/images/application/img-soc-gal-1.jpg";
import socgal2 from "@assets/images/application/img-soc-gal-2.jpg";
import socgal3 from "@assets/images/application/img-soc-gal-3.jpg";
import socgal4 from "@assets/images/application/img-soc-gal-4.jpg";
import socgal5 from "@assets/images/application/img-soc-gal-5.jpg";
import socgal6 from "@assets/images/application/img-soc-gal-6.jpg";
import socgal7 from "@assets/images/application/img-soc-gal-7.jpg";
import socgal8 from "@assets/images/application/img-soc-gal-8.jpg";
import socgal9 from "@assets/images/application/img-soc-gal-9.jpg";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";


const SocialSideBar = () => {
    return (
        <React.Fragment>
            <Col lg={4} xxl={3}>
                <Card>
                    <Card.Body>
                        <div className="media align-items-center mb-3">
                            <Image src={favicon} alt="img" className="img-fluid" />
                            <div className="media-body ms-2">
                                <h5 className="mb-0">Light able</h5>
                                <span className="text-sm text-muted">Light able@developers.io</span>
                            </div>
                        </div>
                        <div className="media align-items-center">
                            <div className="media-body me-2">
                                <div className="user-group">
                                    <Image src={avatar6} alt="user-image" className="avtar" />
                                    <Image src={avatar6} alt="user-image" className="avtar" />
                                    <Image src={avatar7} alt="user-image" className="avtar" />
                                    <Image src={avatar8} alt="user-image" className="avtar" />
                                    <span className="avtar rounded-circle bg-light-warning text-warning">+2</span>
                                </div>
                            </div>
                            <Link href="#" className="avtar avtar-s bg-primary rounded-circle text-white"><i className="ti ti-plus f-18"></i></Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5>Personal information</h5>
                        <Dropdown>
                            <Dropdown.Toggle as="a"
                                className="avtar avtar-xs btn-link-secondary arrow-none"
                                href="#"
                            ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Card.Body>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link
                                    className="d-flex align-items-center text-muted text-hover-primary mb-2"
                                    href="https://phoenixcoded.net/"
                                    target="_blank"
                                >
                                    <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                        <i className="material-icons-two-tone text-secondary f-16">language</i>
                                    </div>
                                    <span className="text-truncate w-100">https://phoenixcoded.net/</span>
                                </Link>
                            </li>
                            <li>
                                <div className="d-flex align-items-center text-muted mb-2">
                                    <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                        <i className="material-icons-two-tone text-secondary f-16">home</i>
                                    </div>
                                    <span className="text-truncate w-100">Hanoi, Vietnam</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center text-muted mb-2">
                                    <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                        <i className="material-icons-two-tone text-secondary f-16">calendar_today</i>
                                    </div>
                                    <span className="text-truncate w-100">Auguest, 21,1996</span>
                                </div>
                            </li>
                            <li>
                                <Link
                                    className="d-flex align-items-center text-muted text-hover-primary mb-0"
                                    href="mailto:demo123@mail.com"
                                    target="_blank"
                                >
                                    <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                        <i className="material-icons-two-tone text-secondary f-16">email</i>
                                    </div>
                                    <span className="text-truncate w-100">demo123@mail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <div className="card-header">
                        <h5>Who is follow you</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <Image className="rounded img-fluid wid-40" src={avatar1} alt="User image" />
                                <div className="media-body mx-2">
                                    <h6 className="mb-0">John Doe</h6>
                                    <p className="mb-0">@John_Doe</p>
                                </div>
                                <span className="text-muted">5 min ago</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <Image className="rounded img-fluid wid-40" src={avatar5} alt="User image" />
                                <div className="media-body mx-2">
                                    <h6 className="mb-0">Addie Bass</h6>
                                    <p className="mb-0">@A_Bass</p>
                                </div>
                                <span className="text-muted">Yesterday</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <Image className="rounded img-fluid wid-40" src={avatar3} alt="User image" />
                                <div className="media-body mx-2">
                                    <h6 className="mb-0">Alberta Robbins</h6>
                                    <p className="mb-0">@AlbeRob12</p>
                                </div>
                                <span className="text-muted">1 Day ago</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <Image className="rounded img-fluid wid-40" src={avatar4} alt="User image" />
                                <div className="media-body mx-2">
                                    <h6 className="mb-0">Agnes McGee</h6>
                                    <p className="mb-0">@AgnMcGee</p>
                                </div>
                                <span className="text-muted">2 Day ago</span>
                            </div>
                        </li>
                    </ul>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>Top Community</h5>
                    </Card.Header>
                    <Card.Body>
                        <Card className="border-0 mb-0 shadow-none drp-upgrade-card social-community-card"
                            style={{ backgroundImage: `url('${communitybg.src}')` }}
                        >
                            <Card.Body>
                                <div id="carousel_event" className="carousel slide">
                                    <div className="carousel-indicators mb-0">
                                        <button
                                            type="button"
                                            data-bs-target="#carousel_event"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button type="button" data-bs-target="#carousel_event" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carousel_event" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <h6 className="mb-0 mt-4 mt-sm-5 text-white">Engineer&apos;s Day Celebration</h6>
                                            <p className="mb-2 text-white text-opacity-75">Today at 11pm</p>
                                            <div className="user-group">
                                                <Image src={avatar1} alt="user-image" className="avtar" />
                                                <Image src={avatar3} alt="user-image" className="avtar" />
                                                <Image src={avatar5} alt="user-image" className="avtar" />
                                                <span className="avtar bg-light-primary text-primary">+20</span>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <h6 className="mb-0 mt-4 mt-sm-5 text-white">New Year Celebration</h6>
                                            <p className="mb-2 text-white text-opacity-75">Today at 11pm</p>
                                            <div className="user-group">
                                                <Image src={avatar2} alt="user-image" className="avtar" />
                                                <Image src={avatar4} alt="user-image" className="avtar" />
                                                <span className="avtar bg-light-primary text-primary">+5</span>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <h6 className="mb-0 mt-4 mt-sm-5 text-white">Engineer&apos;s Day Celebration</h6>
                                            <p className="mb-2 text-white text-opacity-75">Today at 11pm</p>
                                            <div className="user-group">
                                                <Image src={avatar3} alt="user-image" className="avtar" />
                                                <Image src={avatar5} alt="user-image" className="avtar" />
                                                <Image src={avatar1} alt="user-image" className="avtar" />
                                                <span className="avtar bg-light-primary text-primary">+16</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h5>Gallery</h5>
                        <Dropdown as="a"
                            className="avtar avtar-xs btn-link-secondary arrow-none"
                            href="#"
                        ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-2">
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal1.src}>
                                    <Image src={socgal1} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal2.src}>
                                    <Image src={socgal2} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal3.src}>
                                    <Image src={socgal3} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal4.src}>
                                    <Image src={socgal4} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal5.src}>
                                    <Image src={socgal5} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal6.src}>
                                    <Image src={socgal6} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal7.src}>
                                    <Image src={socgal7} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal8.src}>
                                    <Image src={socgal8} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link href="#" className="img-post card" data-lightbox={socgal9.src}>
                                    <Image src={socgal9} alt="img" className="card-img" height={70} />
                                    <div className="card-img-overlay">
                                        <i className="ti ti-search"></i>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h5>Create group</h5>
                        <Dropdown>
                            <Dropdown.Toggle as="a"
                                className="avtar avtar-xs btn-link-secondary arrow-none"
                                href="#"
                            ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body>
                        <div className="px-3 py-4 bg-light-primary soc-create-group text-center rounded">
                            <Link href="#" className="avtar avtar-s bg-primary rounded-circle text-white"><i className="ti ti-plus f-18"></i></Link>
                            <h5 className="mt-3 mb-1">Create a Friends Groups</h5>
                            <p className="text-primary mb-3"># Friends</p>
                            <div className="user-group">
                                <Image src={avatar6} alt="user-image" className="avtar" />
                                <Image src={avatar6} alt="user-image" className="avtar" />
                                <Image src={avatar7} alt="user-image" className="avtar" />
                                <Image src={avatar8} alt="user-image" className="avtar" />
                                <span className="avtar rounded-circle bg-light-warning text-warning">+2</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h5>Your page <span className="badge bg-light-secondary rounded-pill">2</span></h5>
                        <button className="btn btn-link-primary btn-sm">See All</button>
                    </Card.Header>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <div className="avtar avtar-s bg-light-primary flex-shrink-0 rounded-circle">
                                    <i className="ph-duotone ph-paint-brush text-primary"></i>
                                </div>
                                <div className="media-body ms-3">
                                    <h5 className="mb-0 f-w-400">UI Design Team</h5>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <div className="avtar avtar-s bg-light-warning flex-shrink-0 rounded-circle">
                                    <i className="ph-duotone ph-handshake text-warning"></i>
                                </div>
                                <div className="media-body ms-3">
                                    <h5 className="mb-0 f-w-400">Creative Team</h5>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <div className="avtar avtar-s bg-light-warning flex-shrink-0 rounded-circle">
                                    <i className="ph-duotone ph-buildings text-success"></i>
                                </div>
                                <div className="media-body ms-3">
                                    <h5 className="mb-0 f-w-400">Marketing</h5>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                                <div className="avtar avtar-s bg-light-warning flex-shrink-0 rounded-circle">
                                    <i className="ph-duotone ph-globe text-danger"></i>
                                </div>
                                <div className="media-body ms-3">
                                    <h5 className="mb-0 f-w-400">SEO Optimized</h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default SocialSideBar;