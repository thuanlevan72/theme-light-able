import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Form, Modal, Offcanvas, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { onAddNewEvent, onUpdateEvent, onDeleteEvent } from "src/toolkit/Calendar/reducer";
import { useDispatch } from "react-redux";
import DeleteModal from "@common/DeleteModal";

const CalendarModal = ({
    modal,
    setModal,
    toggle,
    event,
    setEvent,
    isEdit,
    setIsEdit,
    deleteId,
    addEventModal,
    selectedNewDay,
    selectedDay,
    setSelectedDay,
    setSelectedNewDay,
    handleModal }: any) => {
    const dispatch: any = useDispatch();
    const [delet, setDelet] = useState<boolean>(false);
    const handleDeleteEvent = () => {
        dispatch(onDeleteEvent(deleteId));
        setDelet(false);
    };

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (event && event.title) || "",
            category: (event && event.category) || "",
            venue: (event && event.venue) || "",
            description: (event && event.description) || "",
            datetag: (event && event.datetag) || "",
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Event Name"),
            category: Yup.string().required("Please Select Your Category"),
            venue: Yup.string().required("Please Enter Your Location"),
            description: Yup.string().required("Please Enter Your Description"),
        }),
        onSubmit: (values) => {
            var updatedDay: any = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }

            if (isEdit) {
                const updateEvent: any = {
                    id: event.id,
                    title: values.title,
                    className: values.category,
                    start: selectedNewDay ? selectedNewDay[0] : event.start,
                    end: selectedNewDay ? updatedDay : event.end,
                    venue: values.venue,
                    description: values.description,
                };
                // update event
                dispatch(onUpdateEvent(updateEvent));
                validation.resetForm();
            } else {
                const newEvent: any = {
                    id: Math.floor(Math.random() * 100),
                    title: values["title"],
                    start: selectedDay ? selectedNewDay : new Date(),
                    end: selectedDay ? updatedDay : new Date(),
                    className: values.category,
                    venue: values["venue"],
                    description: values["description"],
                };
                // save new event
                dispatch(onAddNewEvent(newEvent));
                validation.resetForm();
            }
            setSelectedDay(null);
            setSelectedNewDay(null);
            setEvent(null);
            setIsEdit(false);
            handleModal();
        },
    });
    return (
        <React.Fragment>
            <Modal id="calendar-modal" keyboard={false} show={modal} onHide={() => toggle()} centered scrollable>
                <Modal.Header closeButton>
                    <h3 className="calendar-modal-title f-w-600 text-truncate">{event?.title}</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avtar avtar-xs bg-light-secondary">
                                <i className="ti ti-heading f-20"></i>
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="mb-1"><b>Title</b></h5>
                            <p className="pc-event-title text-muted">{event ? event?.title : ''}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avtar avtar-xs bg-light-warning">
                                <i className="ti ti-map-pin f-20"></i>
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="mb-1"><b>Venue</b></h5>
                            <p className="pc-event-venue text-muted">{event ? event?.venue : ''}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avtar avtar-xs bg-light-danger">
                                <i className="ti ti-calendar-event f-20"></i>
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="mb-1"><b>Date</b></h5>
                            <p className="pc-event-date text-muted">{event ? event?.datetag : ""}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avtar avtar-xs bg-light-primary">
                                <i className="ti ti-file-text f-20"></i>
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="mb-1"><b>Description</b></h5>
                            <p className="pc-event-description text-muted">{event ? event?.description : ''}</p>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <ul className="list-inline me-auto mb-0">
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="button-tooltip">Delete</Tooltip>}>
                            <li className="list-inline-item align-bottom">
                                <Link href="#" id="pc_event_remove" className="avtar avtar-s btn-link-danger btn-pc-default w-sm-auto" onClick={() => { setDelet(!delet); setModal(false); }}>
                                    <i className="ti ti-trash f-18"></i>
                                </Link>
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="button-tooltip">Edit</Tooltip>}>
                            <li className="list-inline-item align-bottom">
                                <Link href="#" id="pc_event_edit" className="avtar avtar-s btn-link-success btn-pc-default" onClick={() => { handleModal(); setModal(false); }}>
                                    <i className="ti ti-edit-circle f-18"></i>
                                </Link>
                            </li>
                        </OverlayTrigger>
                    </ul>
                    <div className="flex-grow-1 text-end">
                        <Button variant="primary" onClick={() => toggle()}>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <Offcanvas show={addEventModal} onHide={() => { handleModal(); setModal(false); setEvent(null) }} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="f-w-600 text-truncate">{!isEdit ? "Add Events" : "Update Event"}</Offcanvas.Title>
                </Offcanvas.Header>
                <Form id="pc-form-event" onSubmit={(e: any) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                    <Offcanvas.Body>
                        <Row className="event-form">
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control placeholder="Enter event name" type="text" name="title" id="event-title" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.title}
                                        isInvalid={validation.touched.title && validation.errors.title ? true : false}
                                    />
                                    {validation.touched.title && validation.errors.title ? (<Form.Control.Feedback type="invalid">{validation.errors.title}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>

                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="event-location">Venue</Form.Label>
                                    <div>
                                        <Form.Control type="text" name="venue" id="event-location" placeholder="Event location" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.venue} isInvalid={validation.touched.location && validation.errors.location ? true : false} />
                                        {validation.touched.venue && validation.errors.venue ? (<Form.Control.Feedback type="invalid" className="d-block">{validation.errors.venue}</Form.Control.Feedback>) : null}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Description</Form.Label>
                                    <Form.Control as="textarea"
                                        className="form-control"
                                        id="event-description"
                                        name="description"
                                        placeholder="Enter a description"
                                        rows={3}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.description}
                                        isInvalid={validation.touched.description && validation.errors.description ? true : false}
                                    ></Form.Control>
                                    {validation.touched.description && validation.errors.description ? (<Form.Control.Feedback type="invalid">{validation.errors.description}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control as="select"
                                        className="form-select" name="category" id="event-category" type="select" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.category || ""}>
                                        <option value="bg-danger-subtle">Danger</option>
                                        <option value="bg-success-subtle">Success</option>
                                        <option value="bg-primary-subtle">Primary</option>
                                        <option value="bg-info-subtle">Info</option>
                                        <option value="bg-dark-subtle">Dark</option>
                                        <option value="bg-warning-subtle">Warning</option>
                                    </Form.Control>
                                    {validation.touched.category && validation.errors.category ? (<Form.Control.Feedback type="invalid" className="d-block">{validation.errors.category}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                        </Row>
                    </Offcanvas.Body>
                    <Row className="justify-content-between">
                        <div className="col-auto">
                            <Button type="button" variant="link-danger" className="btn-pc-default" onClick={() => { handleModal(); setModal(false); setEvent(null) }}>
                                <i className="align-text-bottom me-1 ti ti-circle-x"></i> Close
                            </Button>
                        </div>
                        <div className="col-auto">
                            <Button id="pc_event_add" type="submit" variant="secondary">
                                <span id="pc-e-btn-text"><i className="align-text-bottom me-1 ti ti-calendar-plus"></i>{isEdit ? "Update" : "Add"}</span>
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Offcanvas>
            <DeleteModal show={delet} handleClose={() => setDelet(!delet)} handleDeleteId={handleDeleteEvent} />
        </React.Fragment >
    );
}

export default CalendarModal;