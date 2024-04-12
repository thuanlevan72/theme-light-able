import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
    error: {},
};

const CalenderSlice = createSlice({
    name: 'calender',
    initialState,
    reducers: {
        getEvent: (state: any, action: any) => {
            state.events = action.payload;
        },
        onAddNewEvent: (state: any, action: any) => {
            state.events.push(action?.payload);
        },
        onUpdateEvent: (state: any, action: any) => {
            state.events = (state.events || []).map((event: any) =>
                event.id.toString() === action?.payload.id.toString()
                    ? { ...event, ...action?.payload }
                    : event
            );
        },
        onDeleteEvent: (state: any, action: any) => {
            state.events = state.events.filter(
                (event: any) => event.id.toString() !== action.payload.toString()
            );
        },
    },
});

export const { getEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = CalenderSlice.actions;
export default CalenderSlice.reducer;
