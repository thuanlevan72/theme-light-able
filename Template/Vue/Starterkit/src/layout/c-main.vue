<script>
import { layoutComputed } from "@/state/helper.js";

import Vertical from "./c-vertical.vue";


export default {
    components: {
        Vertical
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    },
}
</script>

<template>
    <div class="component-page" style="z-index: 1;">
        <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
            <slot />
        </Vertical>
    </div>
</template>