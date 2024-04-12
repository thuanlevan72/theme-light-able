import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatContact: [],
    userChat: [],
    error: {},
};

const ChatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        getChat: (state: any, action: any) => {
            state.chatContact = action.payload;
        },
        getuserChat: (state: any, action: any) => {
            state.userChat = action.payload;
        },
        onAddMessage: (state: any, action: any) => {
            state.userChat?.map((i: any) => i.userData.push(action.payload));
        },
        onDeleteMessage: (state: any, action: any) => {
            state.userChat = (state.userChat || []).map((data: any) => {
                const updatedUserMessages = data.userData.filter(
                    (message: any) => message.id.toString() !== action.payload.toString()
                );
                return { ...data, userData: updatedUserMessages };
            });
        },

    },
});

export const { getChat, getuserChat, onAddMessage, onDeleteMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
