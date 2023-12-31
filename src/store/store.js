import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { authSlice } from "./auth";
import { techzziSlice } from "./techzzi/techzziSlice";


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        techzzi: techzziSlice.reducer,
    }
});