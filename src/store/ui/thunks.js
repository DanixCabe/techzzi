import { toggleDarkMode } from "./uiSlice";

export const startDarkMode = (option) => {
    return async(dispatch) => {
        dispatch(toggleDarkMode(option));
    }
}