<script>
import { layoutComputed } from "@/state/helper.js";

import Vertical from "./vertical.vue";
// import Horizontal from "./horizontal.vue"
export default {
    name: "MAIN",
    components: {
        Vertical, 
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    }, mounted() {
        // document.body.setAttribute("data-pc-direction", "rtl");
    }
}
</script>

<template>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
        <slot />
    </Vertical>
</template>