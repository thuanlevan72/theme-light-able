import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userEmail: [],
    error: {},
};

const EmailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        getUserEmail: (state: any, action: any) => {
            state.userEmail = action.payload;
        },
    },
});

export const { getUserEmail } = EmailSlice.actions;
export default EmailSlice.reducer;
