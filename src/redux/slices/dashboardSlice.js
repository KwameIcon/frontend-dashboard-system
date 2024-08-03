import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: []
};

const dashboardSlice = createSlice({
    name: 'dashboard', // Changed to lowercase for consistency
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        }
    }
});

export const { setContent } = dashboardSlice.actions;
export default dashboardSlice.reducer;
