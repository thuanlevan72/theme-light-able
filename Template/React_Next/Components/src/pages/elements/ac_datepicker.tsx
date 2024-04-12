import React, { ReactElement, useState } from "react";
import Layout from "@layout/index";
import SectionTitle from "@layout/SectionTitle";
import "flatpickr/dist/themes/material_blue.css";

import Flatpickr from "react-flatpickr";

const BCAlert = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (selectedDates: any) => {
        setSelectedDate1(selectedDates[0]);
    };

    const [selectedDate1, setSelectedDate1] = useState(null);

    // Define an array of dates to be disabled
    const disabledDates = ['2023-12-15', '2023-12-20', '2023-12-25'];

    const handleDateChange1 = (selectedDates1: any) => {
        // Handle your date change logic here
        setSelectedDate(selectedDates1[0]);
    };
    const highlightedDaysOfWeek = [1, 3, 5, 7];
    const [chosenDate, setChosenDate] = useState(null);

    // Get the current date in 'YYYY-MM-DD' format
    const currentDateStr = new Date().toISOString().split('T')[0];

    const handleDateSelection = (selectedDates: any) => {
        // Handle your date change logic here
        setChosenDate(selectedDates[0]);
    };
    return (
        <>
            <SectionTitle
                title="Flatpickr"
                description="Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style."
                link="https://www.npmjs.com/package/react-flatpickr"
            />

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Basic Flatpickr</h5>
                        </div>
                        <div className="card-body">
                            <Flatpickr
                                className="form-control datepicker-input"
                                placeHolder="Select Date"
                                options={{
                                    disable: ["mon", "wed", "fri"],
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* ... (other sections) */}
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Days of Week Highlighted</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-daterange input-group" id="datepicker_range">
                                <Flatpickr
                                    placeHolder="Select Date"
                                    options={{
                                        altInput: true,
                                        altFormat: 'F j, Y',
                                        dateFormat: 'Y-m-d',
                                        disable: [
                                            (date: any) => {
                                                // Disable days that are not in the highlightedDaysOfWeek array
                                                const dayOfWeek = date.getDay();
                                                return !highlightedDaysOfWeek.includes(dayOfWeek);
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Auto Close</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-daterange input-group" id="datepicker_range">
                                <Flatpickr
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    placeHolder="Select Date"
                                    options={{
                                        altInput: true,
                                        altFormat: 'F j, Y',
                                        dateFormat: 'Y-m-d',
                                        onClose: () => console.log('Calendar closed'), // Optional: You can add an onClose callback
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>DatesDisabled</h5>
                        </div>
                        <div className="card-body">
                            <Flatpickr
                                value={selectedDate1}
                                onChange={handleDateChange1}
                                placeHolder="Select Date"
                                options={{
                                    altInput: true,
                                    altFormat: 'F j, Y',
                                    dateFormat: 'Y-m-d',
                                    disable: disabledDates,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Today Highlight</h5>
                        </div>
                        <div className="card-body">
                            <Flatpickr
                                value={chosenDate}
                                placeHolder="Select Date"
                                onChange={handleDateSelection}
                                options={{
                                    altInput: true,
                                    altFormat: 'F j, Y',
                                    dateFormat: 'Y-m-d',
                                    defaultDate: currentDateStr,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Calendar Weeks</h5>
                        </div>
                        <div className="card-body">
                            <Flatpickr
                                placeHolder="Select Date"
                                options={{
                                    altInput: true,
                                    altFormat: 'F j, Y',
                                    dateFormat: 'Y-m-d',
                                    weekNumbers: true, // Set weekNumbers to true to display calendar weeks
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl- col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Date Range</h5>
                            </div>
                            <div className="card-body">
                                <Flatpickr
                                    placeHolder="Select Date"
                                    options={{
                                        altInput: true,
                                        dateFormat: 'Y-m-d',
                                        mode : "range"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

        </>
    )
};

BCAlert.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


export default BCAlert;