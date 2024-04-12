import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
    ...mapState('auth', {
        currentUser: (state) => state.currentUser,
    }),
    ...mapGetters('auth', ['loggedIn']),
};

export const layoutComputed = {
    ...mapState('layout', {
        layoutType: (state) => state.layoutType,
        sidebarSize: (state) => state.sidebarSize,
        layoutWidth: (state) => state.layoutWidth,
        topbar: (state) => state.topbar,
        mode: (state) => state.mode,
        position: (state) => state.position,
        sidebarView: (state) => state.sidebarView,
        sidebarColor: (state) => state.sidebarColor,
        sidebarCaption: (state) => state.sidebarCaption,
        color: (state) => state.color,
        direction: (state) => state.direction,
        sidebarImage: (state) => state.sidebarImage,
        layoutTheme: (state) => state.layoutTheme,
        preloader: (state) => state.preloader,
    })
};

export const layoutMethods = mapActions('layout',
    ['changeLayoutType', 'changeTopbar', 'changeMode', 'changePosition', 'changeSidebarView',
        'changeSidebarColor', 'changeSidebarCaption', 'changeColor', 'changeDirection', 'changeThemes']);