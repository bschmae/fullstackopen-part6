import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setMessage(state, action) {
            state = action.payload;
            return state;
        },
    },
});

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;