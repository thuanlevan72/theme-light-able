export const state = {
    layoutType: 'vertical',
    topbar: 'light',
    mode: 'light',
    position: 'fixed',
    sidebarView: 'default',
    sidebarColor: 'light',
    sidebarCaption: 'false',
    direction: 'ltr',
    color: 'preset-1',
    layoutTheme: 'default',
};

export const mutations = {
    CHANGE_LAYOUT(state, layoutType) {
        state.layoutType = layoutType;
    },
    CHANGE_TOPBAR(state, topbar) {
        state.topbar = topbar;
    },
    CHANGE_MODE(state, mode) {
        state.mode = mode;
    },
    CHANGE_SIDEBAR_VIEW(state, sidebarView) {
        state.sidebarView = sidebarView;
    },
    CHANGE_SIDEBAR_COLOR(state, sidebarColor) {
        state.sidebarColor = sidebarColor;
    },
    CHANGE_SIDEBAR_CAPTION(state, sidebarCaption) {
        state.sidebarCaption = sidebarCaption;
    },
    CHANGE_DIRECTION(state, direction) {
        state.direction = direction;
    },
    CHANGE_COLOR(state, color) {
        state.color = color;
    },
    CHANGE_THEMES(state, layoutTheme) {
        state.layoutTheme = layoutTheme;
    }
};

export const actions = {
    changeLayoutType({ commit }, { layoutType }) {
        commit('CHANGE_LAYOUT', layoutType);
        document.body.removeAttribute("style");
    },

    changeLayoutWidth({ commit }, { layoutWidth }) {
        commit('CHANGE_LAYOUT_WIDTH', layoutWidth);
    },

    changeSidebarSize({ commit }, { sidebarSize }) {
        commit('CHANGE_SIDEBAR_TYPE', sidebarSize);
    },

    changeTopbar({ commit }, { topbar }) {
        commit('CHANGE_TOPBAR', topbar);
    },

    changeMode({ commit }, { mode }) {
        commit('CHANGE_MODE', mode);
    },

    changePosition({ commit }, { position }) {
        commit('CHANGE_POSITION', position);
    },

    changeSidebarView({ commit }, { sidebarView }) {
        commit('CHANGE_SIDEBAR_VIEW', sidebarView);
    },

    changeSidebarColor({ commit }, { sidebarColor }) {
        commit('CHANGE_SIDEBAR_COLOR', sidebarColor);
    },

    changeSidebarCaption({ commit }, { sidebarCaption }) {
        commit('CHANGE_SIDEBAR_CAPTION', sidebarCaption);
    },

    changeDirection({ commit }, { direction }) {
        commit('CHANGE_DIRECTION', direction);
    },

    changeColor({ commit }, { color }) {
        commit('CHANGE_COLOR', color);
    },

    changeThemes({ commit }, { layoutTheme }) {
        commit('CHANGE_THEMES', layoutTheme);
    }
};