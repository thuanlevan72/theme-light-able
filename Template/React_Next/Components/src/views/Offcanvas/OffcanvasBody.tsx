import React from "react";
import { Col, Card, Button, Row, Offcanvas, Table } from "react-bootstrap";

const OffcanvasBody = () => {
    return (
        <>
            <Offcanvas.Body>
                <h5 className="mb-2">$746.5k <small className="text-success f-w-400">+20.6 <i className="ti ti-arrow-up"></i></small></h5>
                <p className="text-muted mb-3">Past 30 days</p>
                <div className="table-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th className="text-end">Plan</th>
                                    <th className="text-end">MRR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-arrow-down f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Logicoma</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-star f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">UAC</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span>$199</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-wallet f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Biffco</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-arrow-down f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Matsumura</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-wallet f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Biffco</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-arrow-down f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Logicoma</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-star f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">UAC</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span>$199</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-wallet f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Biffco</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-arrow-down f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Matsumura</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center text-muted">
                                            <div className="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                <i className="ti ti-wallet f-16"></i>
                                            </div>
                                            <span className="text-truncate w-100">Biffco</span>
                                        </div>
                                    </td>
                                    <td className="text-end"><span className="badge bg-light-success">Team</span></td>
                                    <td className="text-end f-w-600"><span className="text-danger">-$72</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-end">
                    <button className="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                </div>
            </Offcanvas.Body>
        </>
    )
}

export default OffcanvasBody;