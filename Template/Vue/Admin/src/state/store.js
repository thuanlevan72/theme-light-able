import { createStore } from 'vuex';

import modules from './modules';

const store = createStore({
    modules,
    // Enable strict mode in development to get a warning
    // when mutating state outside of a mutation.
    // https://vuex.vuejs.org/guide/strict.html
    strict: process.env.NODE_ENV !== 'production',
    state: {
        isSidebarHidden: false,
        isMobileSidebarActive: false,
        isFixedWidth: false,
    },
    mutations: {
        toggleSidebar(state) {
            state.isSidebarHidden = !state.isSidebarHidden;
        },
        toggleMobileSidebar(state) {
            state.isMobileSidebarActive = !state.isMobileSidebarActive;
        },
        setFullWidth(state) {
            state.isFixedWidth = false;
        },
        setFixedWidth(state) {
            state.isFixedWidth = true;
        },
        changeLayoutType(state, payload) {
            state.layoutType = payload.layoutType;
        },
    },
    getters: {
        isFixedWidth: state => state.isFixedWidth,
    },
});

export default store;