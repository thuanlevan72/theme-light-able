import React, { ReactElement } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import FullCalendars from "@views/Application/Calendar/FullCalendar";

const Calendar = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Application" subTitle="Calendar" />
            <FullCalendars />
        </React.Fragment >
    );
}


Calendar.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Calendar;