/**
 * Changes the body attribute
 */
const changeHTMLAttribute = (attribute: any, value: string) => {
    if (document.body) document.body.setAttribute(attribute, value);
    return true;
}

/**
 * Make the layout interface
 */
//constants
import {
    THEME_MODE,
    THEME_PRESET,
    THEME_LAYOUT,
    SIDEBAR_THEME,
    SIDEBAR_THEME_CAPTION,
    LAYOUT_THEME
} from "../../Common/layoutConfig";

interface ThemeState {
    themeMode: THEME_MODE.LIGHT | THEME_MODE.DARK | THEME_MODE.DEFAULT;
    layoutTheme: LAYOUT_THEME.VERTICAL | LAYOUT_THEME.HORIZONTAL;
    themePreset:
    THEME_PRESET.PRESET_1 |
    THEME_PRESET.PRESET_2 |
    THEME_PRESET.PRESET_3 |
    THEME_PRESET.PRESET_4 |
    THEME_PRESET.PRESET_5 |
    THEME_PRESET.PRESET_6 |
    THEME_PRESET.PRESET_7 |
    THEME_PRESET.PRESET_8 |
    THEME_PRESET.PRESET_9 |
    THEME_PRESET.PRESET_10;
    themeLayout: THEME_LAYOUT.LTR | THEME_LAYOUT.RTL;
    sidebarTheme: SIDEBAR_THEME.LIGHT | SIDEBAR_THEME.DARK;
    sidebarThemeCaptions: SIDEBAR_THEME_CAPTION.CAPTION_SHOW | SIDEBAR_THEME_CAPTION.CAPTION_HIDE;
}

export { changeHTMLAttribute };
export type { ThemeState };