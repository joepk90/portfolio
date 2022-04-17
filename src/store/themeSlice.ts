import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
    darkThemeEnabled: boolean
}

const initialState = { darkThemeEnabled: false } as ThemeState

export const themeSlice = createSlice({
    name: 'darkThemeEnabled',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkThemeEnabled = !state.darkThemeEnabled
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;