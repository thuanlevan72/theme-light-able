import { changeHTMLAttribute } from './utils';
import {
    changeThemeModeAction,
    changeThemePresetAction,
    changeThemeLayoutAction,
} from './reducer';

/**
 * Changes the layout type
 * @param {*} param0
 */
export const changeThemeMode = (themeMode : any) => async (dispatch : any) => {
    try {
        changeHTMLAttribute("data-pc-theme", themeMode);
        dispatch(changeThemeModeAction(themeMode));
    } catch (error) {
        
    }
};

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
export const changeThemePreset = (preset : any) => async (dispatch : any) => {
    try {
        changeHTMLAttribute("data-pc-preset", preset);
        dispatch(changeThemePresetAction(preset));
    } catch (error) {
        
    }
};


/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
export const changeThemeLayout = (layoutMode : any) => async (dispatch : any) => {
    try {
        changeHTMLAttribute("data-pc-direction", layoutMode);
        dispatch(changeThemeLayoutAction(layoutMode));
    } catch (error) {
        
    }
};
