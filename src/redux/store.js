import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import dashboardSlice from "./slices/dashboardSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        dashboard: dashboardSlice
    }
})

export default store