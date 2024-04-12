<script>
import FooterComponents from "@/components/footer.vue"
import Navbar from "@/components/navbar.vue"
import Rightbar from "@/components/right-bar.vue"
import MenuComponents from "@/components/sidebar.vue"

export default {
    name: "VERTICAL",
    components: {
        Navbar, Rightbar, FooterComponents, MenuComponents
    },
    methods: {
        handleOutsideClick(event) {
            if (
                this.$store.state.isMobileSidebarActive &&
                !this.$el.contains(event.target)
            ) {
                // Close the mobile sidebar
                this.$store.commit('toggleMobileSidebar');
            }
        },
    },
    computed: {
        isFixedWidth() {
            return this.$store.getters.isFixedWidth;
        },
    },
   
}
</script>

<template>
    <div class="pc-sidebar" @click="handleOutsideClick"
        :class="{ 'pc-sidebar-hide': $store.state.isSidebarHidden, 'mob-sidebar-active': $store.state.isMobileSidebarActive }">
        <MenuComponents></MenuComponents>
        <div v-if="$store.state.isMobileSidebarActive" class="pc-menu-overlay"></div>
    </div>
    <div class="pc-header" style="z-index: 1;">
        <Navbar />
    </div>

    <div class="pc-container">
        <div class="pc-content" :class="{ 'container': isFixedWidth }">
            <!-- Start Content-->
            <div>
                <slot />
            </div>
        </div>
    </div>
    <div class="pc-footer">
        <FooterComponents />
    </div>
    <Rightbar />
</template>