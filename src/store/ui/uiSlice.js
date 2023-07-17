import { createSlice } from '@reduxjs/toolkit';

    export const uiSlice = createSlice({
        name: 'ui',
        initialState: {
            darkModeisActive: localStorage.getItem('theme')
        },
        reducers: {
            toggleDarkMode: (state, action ) => {
                state.darkModeisActive = action.payload;
            },
        }
});
// Action creators are generated for each case reducer function
export const { toggleDarkMode } = uiSlice.actions;