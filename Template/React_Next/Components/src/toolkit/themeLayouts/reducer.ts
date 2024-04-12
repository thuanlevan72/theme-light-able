import { createSlice } from "@reduxjs/toolkit";
//constants
import {
  THEME_MODE,
  THEME_PRESET,
  THEME_LAYOUT
} from "../../Common/layoutConfig";

import { ThemeState } from "./utils";

export const initialState: ThemeState = {
  themeMode: THEME_MODE.LIGHT,
  themePreset: THEME_PRESET.PRESET_1,
  themeLayout: THEME_LAYOUT.LTR,
};

const ThemeSlice = createSlice({
  name: 'ThemeSlice',
  initialState,
  reducers: {
    changeThemeModeAction(state: any, action : any) {
      state.themeMode = action.payload;
    },
    changeThemePresetAction(state: any, action : any) {
      state.themePreset = action.payload;
    },
    changeThemeLayoutAction(state: any, action : any) {
      state.themeLayout = action.payload;
    },
  }
});

export const {
  changeThemeModeAction,
  changeThemePresetAction,
  changeThemeLayoutAction,
} = ThemeSlice.actions;

export default ThemeSlice.reducer;