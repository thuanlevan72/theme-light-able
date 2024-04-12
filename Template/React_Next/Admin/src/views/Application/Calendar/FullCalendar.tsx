import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import { events } from "@common/JsonData";
import CalendarModal from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "src/toolkit/Calendar/reducer";
import { createSelector } from "reselect";

const FullCalendars = () => {

    const dispatch: any = useDispatch();

    const calendarData = createSelector(
        (state: any) => state.Calender,
        (state) => state.events
    );
    const events = useSelector(calendarData);

    const [calenderEvent, setCalenderEvent] = useState<any>();
    const [deleteId, setDeleteId] = useState<any>();
    const [event, setEvent] = useState<any>({});
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedNewDay, setSelectedNewDay] = useState<any>(0);
    const [selectedDay, setSelectedDay] = useState<any>(0);
    const [addEventModal, setAddEventModal] = useState<boolean>(false);
    const handleModal = () => setAddEventModal(!addEventModal);

    useEffect(() => {
        dispatch(getEvent(events))
    }, [dispatch, events]);

    useEffect(() => {
        setCalenderEvent(events)
    }, [events]);

    const toggle = () => {
        if (modal) {
            setModal(false);
            setEvent(null);
            setIsEdit(false);
        } else {
            setModal(true);
        }
    };

    const handleDateClick = (arg: any) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedNewDay(date);
        setSelectedDay(modifiedData);
        // toggle();
        handleModal();
    };

    const onDrop = (event: any) => {
        const date = event["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        if (
            draggedEl.classList.contains("external-event") &&
            draggedElclass.indexOf("fc-event-draggable") === -1
        ) {
            const modifiedData = {
                id: Math.floor(Math.random() * 1000),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: draggedEl.className,
            };
            // dispatch(onAddNewEvent(modifiedData));
        }
    };

    const date_r = function formatDate(date: any) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };
    const str_dt = function formatDate(date: any) {
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var d = new Date(date),
            month = "" + monthNames[d.getMonth()],
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [day + " " + month, year].join(",");
    };

    const handleEventClick = (arg: any) => {
        const event = arg.event;
        const st_date = event.start;
        const ed_date = event.end;
        const r_date =
            ed_date == null
                ? str_dt(st_date)
                : str_dt(st_date) + " to " + str_dt(ed_date);
        const er_date =
            ed_date == null
                ? date_r(st_date)
                : date_r(st_date) + " to " + date_r(ed_date);

        setEvent({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            className: event.classNames,
            category: event.classNames[0],
            venue: event._def.extendedProps.venue,
            description: event._def.extendedProps.description,
            defaultDate: er_date,
            datetag: r_date,
        });
        setDeleteId(event.id);
        setIsEdit(true);
        // setIsEditButton(false);
        toggle();
    };

    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <Card className="card-h-100">
                        <Card.Body className="position-relative">
                            <div id="calendar" className="calendar">
                                <FullCalendar
                                    plugins={[
                                        BootstrapTheme,
                                        dayGridPlugin,
                                        interactionPlugin,
                                        listPlugin
                                    ]}
                                    initialView="dayGridMonth"
                                    themeSystem="bootstrap"
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                    }}
                                    events={calenderEvent}
                                    editable={true}
                                    droppable={true}
                                    selectable={true}
                                    eventClick={handleEventClick}
                                    dateClick={handleDateClick}
                                    drop={onDrop}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CalendarModal
                modal={modal}
                setModal={setModal}
                toggle={toggle}
                event={event}
                setEvent={setEvent}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
                deleteId={deleteId}
                selectedNewDay={selectedNewDay}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                setSelectedNewDay={setSelectedNewDay}
                addEventModal={addEventModal}
                handleModal={handleModal} />
        </React.Fragment>
    );
}

export default FullCalendars;