import {IColorTheme, orangeTheme} from "../@styled/Themes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IColorThemeSlice {
    theme: IColorTheme,
}

const initialState: IColorThemeSlice = {
    theme: orangeTheme,
}

export const ColorThemeSlice = createSlice({
    name: 'currentTheme',
    initialState,
    reducers: {
        applyTheme: (state, action: PayloadAction<IColorTheme>) => {
            state.theme = action.payload;
        },
    },
})

export const {applyTheme} = ColorThemeSlice.actions;

export default ColorThemeSlice.reducer;