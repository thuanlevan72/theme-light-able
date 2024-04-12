
import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const ColorschemesToasts = () => {
    const [showToast1, setShowToast1] = useState(true);
    const [showToast2, setShowToast2] = useState(true);
    const [showToast3, setShowToast3] = useState(true);
    const [showToast4, setShowToast4] = useState(true);
    const [showToast5, setShowToast5] = useState(true);
    const [showToast6, setShowToast6] = useState(true);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5>Color schemes</h5>
                </div>
                <div className="card-body pc-component">
                    <div className="bg-body toast-container p-4 mb-2">

                        <Toast show={showToast1} onClose={() => setShowToast1(false)} className="toast text-white bg-primary fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast1(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                        <Toast show={showToast2} onClose={() => setShowToast2(false)} className="toast text-white bg-secondary fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast2(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                        <Toast show={showToast3} onClose={() => setShowToast3(false)} className="toast text-white bg-success fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast3(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                        <Toast show={showToast4} onClose={() => setShowToast4(false)} className="toast text-white bg-danger fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast4(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                        <Toast show={showToast5} onClose={() => setShowToast5(false)} className="toast text-white bg-info fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast5(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                        <Toast show={showToast6} onClose={() => setShowToast6(false)} className="toast text-white bg-dark fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex">
                                <Toast.Body> Hello, world! This is a toast message. </Toast.Body>
                                <button type="button" onClick={() => setShowToast6(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </Toast>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorschemesToasts;
