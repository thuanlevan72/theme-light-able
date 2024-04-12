import React from "react";
import { Dropdown } from "react-bootstrap";

const RecentUsers = () => {
    return (
        <>
            <div className="col-md-6 col-xl-4">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5>Recent Users</h5>
                        <Dropdown>
                            <Dropdown.Toggle as="a"
                                className="avtar avtar-xs btn-link-secondary arrow-none"
                                href="#!"
                            ><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#">View</Dropdown.Item>
                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h2 className="mb-3"><b>4.7<small className="text-muted f-18">/5</small></b></h2>
                            <div className="star mb-3 f-20">
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mb-2">
                            <div className="col-auto">
                                <h6 className="mb-0">5 <i className="fas fa-star text-warning"></i></h6>
                            </div>
                            <div className="col">
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-primary" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-muted">384</p>
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mb-2">
                            <div className="col-auto">
                                <h6 className="mb-0">4 <i className="fas fa-star text-warning"></i></h6>
                            </div>
                            <div className="col">
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-primary" style={{ width: "55%" }}></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-muted">145</p>
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mb-2">
                            <div className="col-auto">
                                <h6 className="mb-0">3 <i className="fas fa-star text-warning"></i></h6>
                            </div>
                            <div className="col">
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-primary" style={{ width: "40%" }}></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-muted">24</p>
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mb-2">
                            <div className="col-auto">
                                <h6 className="mb-0">2 <i className="fas fa-star text-warning"></i></h6>
                            </div>
                            <div className="col">
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-primary" style={{ width: "25%" }}></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-muted">1</p>
                            </div>
                        </div>
                        <div className="row align-items-center g-3">
                            <div className="col-auto">
                                <h6 className="mb-0">1 <i className="fas fa-star text-warning"></i></h6>
                            </div>
                            <div className="col">
                                <div className="progress" style={{ height: "8px" }}>
                                    <div className="progress-bar bg-primary" style={{ width: "10%" }}></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-muted">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentUsers;