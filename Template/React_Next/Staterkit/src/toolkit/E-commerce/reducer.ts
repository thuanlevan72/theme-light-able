import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listData: [],
    error: {},
};

const EcomSlice = createSlice({
    name: 'Ecom',
    initialState,
    reducers: {
        GetList: (state: any, action: any) => {
            state.listData = action.payload;
        },
        DeleteList: (state: any, action: any) => {
            state.listData = state.listData.filter((item: any) => item.id !== action.payload);
        },
    },
});

export const { GetList, DeleteList } = EcomSlice.actions;
export default EcomSlice.reducer;
