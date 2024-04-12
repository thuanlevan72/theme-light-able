<script>
// import simplebar from "simplebar-vue"
// import router from "@/router";
// import { layoutComputed } from "@/state/helper.js";


import Navbar from "@/components/c-navbar.vue"
import MenuComponents from "@/components/c-menu.vue"
import Rightbar from "@/components/right-bar.vue"
import FooterComponents from "@/components/c-footer.vue"

/**
 * Vertical layout
 */
export default {
    components: {
        Navbar, MenuComponents, Rightbar, FooterComponents
    },
    mounted() {
        document.body.setAttribute('data-pc-layout', "compact");
    }
};
</script>

<template>
    <Navbar />

    <section class="component-block">
        <BContainer>
            <BRow>
                <BCol xl="3">

                    <!-- <simplebar> -->
                    <MenuComponents></MenuComponents>
                    <!-- </simplebar> -->
                </BCol>

                <BCol xl="9">
                        <slot />
                </BCol>
            </BRow>
        </BContainer>
    </section>

    <footer class="footer">
        <FooterComponents />
    </footer>

    <Rightbar />
</template>