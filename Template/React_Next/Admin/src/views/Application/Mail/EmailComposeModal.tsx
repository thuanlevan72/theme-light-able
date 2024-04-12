import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, Collapse } from 'react-bootstrap';
interface modal {
    show: boolean,
    handleClose: any
}

const EmailComposeModal = ({ show, handleClose }: modal) => {

    const [recipients, setRecipients] = useState<boolean>(false);
    const [modalSize, setModalSize] = useState<boolean>(false);
    const [emailCompose, setEmailCompose] = useState<any>('');

    const handleSearchEmail = (ele: any) => {
        let search = ele.value;
        if (search.length > 0) {
            setEmailCompose(search)
        } else {
            setEmailCompose('support@themesbrand.com')
        }
    }

    //CKEditor
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, ClassicEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
        setEditor(true);
    }, []);
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} id="composemodal" className={`compose_mail_modal ${modalSize ? "modal-pos-down" : ""}`} centered>
                <Modal.Header>
                    <div className="flex-grow-1">
                        <Modal.Title as="h5" id="composemodalTitle">New Message</Modal.Title>
                    </div>
                    <ul className="list-inline me-auto mb-0">
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="avtar avtar-s btn-link-secondary" onClick={() => setModalSize(!modalSize)}>
                                <i className="ti ti-arrows-diagonal-2 f-18"></i></Link>
                        </li>
                        <li className="list-inline-item align-bottom">
                            <Link href="#" className="avtar avtar-s btn-link-danger" onClick={handleClose}>
                                <i className="ti ti-circle-x f-18 cursor-pointer"></i></Link>
                        </li>
                    </ul>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-end">
                                <Link href='#/' className="fw-semibold px-2" onClick={() => setRecipients(!recipients)} aria-expanded={recipients}>
                                    Cc & Bcc
                                </Link>
                            </div>
                        </div>
                        <div className="mb-3 position-relative">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="text" className="email-compose-input" value={emailCompose} onChange={(e: any) => handleSearchEmail(e.target)} placeholder="To" />
                        </div>
                        <div className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </div>

                        <Collapse in={recipients}>
                            <div className="mb-3">
                                <label>Cc:</label>
                                <Form.Control type="text" placeholder="Enter Cc email" />
                            </div>
                        </Collapse>
                        <Collapse in={recipients}>
                            <div className="mb-3">
                                <label>Bcc:</label>
                                <Form.Control type="text" placeholder="Enter Bcc email" />
                            </div>
                        </Collapse>

                        <div className="ck-editor-reverse">
                            <div id="email-editor">
                                {editor ? <CKEditor
                                    editor={ClassicEditor}
                                    data={`
                                    <div id="pc-quil-1" style="height: 125px">
                                        <div class="ql-editor">
                                            <p>Put your things hear...</p>
                                        </div>
                                  </div>`}
                                /> : <p>ckeditor5</p>}
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <ul className="list-inline me-auto mb-0">
                        <li className="list-inline-item align-bottom">
                            <a href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-file-upload f-18"></i>
                            </a>
                        </li>
                        <li className="list-inline-item align-bottom">
                            <a href="#" className="avtar avtar-s btn-link-secondary">
                                <i className="ti ti-paperclip f-18"></i>
                            </a>
                        </li>
                    </ul>
                    <Button variant="primary" onClick={handleClose}>Reply</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default EmailComposeModal;