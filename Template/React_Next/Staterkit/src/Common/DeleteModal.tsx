import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({ show, handleClose, handleDeleteId }: any) => {
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} id="removeCartModal" className="fade zoomIn" dialogClassName="modal-dialog-centered">
                <Modal.Header closeButton style={{borderBottom: "none"}}></Modal.Header>
                <Modal.Body>
                    <div className="mt-2 text-center">
                        <i className="ti ti-trash fs-1 text-danger"></i>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h5>Are you sure ?</h5>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this task ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button type="button" variant="light" className="btn w-sm" onClick={handleClose}>Close</Button>
                        <Button type="submit" variant="danger" className="btn w-sm" id="remove-cartproduct" onClick={handleDeleteId}>Yes, Delete It!</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default DeleteModal;