<script>
import { layoutMethods, layoutComputed, } from "@/state/helper.js";
import simplebar from "simplebar-vue";
export default {
    components: {
        simplebar
    },
    data() {
        return {
            show: false,
            isCaptionVisible: true,
            direction: 'ltr'
        };
    },
    methods: {
        ...layoutMethods,
        click() {
            this.show = !this.show;
        },
        resetLayout() {
            let reset = JSON.parse(localStorage.getItem("resetValue"));
            document.documentElement.setAttribute("data-sidebar-size", "lg");
            this.changeMode({ mode: reset.mode });
        },
        setFullWidth() {
            this.$store.commit('setFullWidth');
        },
        setFixedWidth() {
            this.$store.commit('setFixedWidth');
        },
        setDirection(dir) {
            this.direction = dir;
        }
    },
    mounted() {
        if (document.getElementById('collapseBgGradient')) {
            Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function () {
                if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener('click', function () {
                        document.getElementById("sidebar-color-gradient").click();
                    });
                }
            });
        }
    },
    computed: {
        ...layoutComputed,
        mode: {
            get() {
                return this.$store ? this.$store.state.layout.mode : 'light';
            },
            set(mode) {
                this.changeMode({ mode: mode });
            },
        },
        sidebarColor: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarColor : 'light';
            },
            set(sidebarColor) {
                this.changeSidebarColor({ sidebarColor: sidebarColor });
            },
        },
        sidebarCaption: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarCaption : 'true';
            },
            set(sidebarCaption) {
                this.changeSidebarCaption({ sidebarCaption: sidebarCaption });
            },
        },
        // direction: {
        //     get() {
        //         return this.$store ? this.$store.state.layout.direction : 'ltr';
        //     },
        //     set(direction) {
        //         this.changeDirection({ direction: direction });
        //     },
        // },
        color: {
            get() {
                return this.$store ? this.$store.state.layout.color : 'preset-1';
            },
            set(color) {
                this.changeColor({ color: color });
            },
        },
        isFixedWidth() {
            return this.$store.getters.isFixedWidth;
        },
    },
    watch: {
        mode: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    document.body.setAttribute('data-pc-theme', newVal);
                    this.changeTopbar({ topbar: newVal });
                }
            },
        },
        sidebarColor: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    document.body.setAttribute('data-pc-sidebar-theme', newVal);
                }
            },
        },
        sidebarCaption: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    document.body.setAttribute('data-pc-sidebar-caption', newVal ? 'true' : 'false');
                }
            },
        },
        // direction: {
        //     immediate: true,
        //     handler(newVal, oldVal) {
        //         if (newVal !== oldVal) {
        //             document.body.setAttribute('data-pc-direction', newVal ? 'ltr' : 'rtl');
        //         }
        //     },
        // },
        direction(newVal) {
            document.body.setAttribute('data-pc-direction', newVal);
        },
        color: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    document.body.setAttribute('data-pc-preset', newVal);
                }
            },
        },
    }
}
</script>

<template>
    <div class="pct-c-btn" @click="click">
        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_pc_layout">
            <i class="ph-duotone ph-gear-six"></i>
        </a>
    </div>

    <BOffcanvas class="border-0 pct-offcanvas offcanvas-end" tabindex="-1" id="offcanvas_pc_layout"
        header-class="d-flex align-items-center bg-gradient p-3" body-class="p-0"
        footer-class="offcanvas-footer border-top p-3 text-center" placement="end" v-model="show">
        <template #header>
            <div class="me-2">
                <h5>Settings</h5>
            </div>
            <button type="button" class="btn btn-icon btn-link-danger" @click="click"><i class="ti ti-x"></i></button>
        </template>
        <simplebar data-simplebar style="height: 660px">
            <div class="pct-body customizer-body">
                <div class="offcanvas-body py-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="pc-dark">
                                <h6 class="mb-1">Theme Mode</h6>
                                <p class="text-muted text-sm">Choose light or dark mode or Auto</p>
                                <BRow class="theme-color theme-layout">
                                    <BCol Cols="4">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" name="data-pc-theme" data-value="light"
                                                :class="{ active: mode === 'light' }" @click="mode = 'light'">
                                                <span class="btn-label">Light</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                    <BCol Cols="4">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" name="data-pc-theme" data-value="dark"
                                                :class="{ active: mode === 'dark' }" @click="mode = 'dark'">
                                                <span class="btn-label">Dark</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                    <BCol Cols="4">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" data-value="default"
                                                :class="{ active: mode === 'default' }" @click="mode = 'default'"
                                                data-bs-toggle="tooltip"
                                                title="Automatically sets the theme based on user's operating system's color scheme.">
                                                <span class="btn-label">Default</span>
                                                <span class="pc-lay-icon d-flex align-items-center justify-content-center">
                                                    <i class="ph-duotone ph-cpu"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <h6 class="mb-1">Sidebar Theme</h6>
                            <p class="text-muted text-sm">Choose Sidebar Theme</p>
                            <BRow class="theme-color theme-sidebar-color">
                                <BCol Cols="6">
                                    <div class="d-grid">
                                        <button class="preset-btn btn" data-value="true" value="dark"
                                            :class="{ active: sidebarColor === 'dark' }" @click="sidebarColor = 'dark'">
                                            <span class="btn-label">Dark</span>
                                            <span
                                                class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                        </button>
                                    </div>
                                </BCol>
                                <BCol Cols="6">
                                    <div class="d-grid">
                                        <button class="preset-btn btn" data-value="false" value="light"
                                            :class="{ active: sidebarColor === 'light' }" @click="sidebarColor = 'light'">
                                            <span class="btn-label">Light</span>
                                            <span
                                                class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                        </button>
                                    </div>
                                </BCol>
                            </BRow>
                        </li>
                        <li class="list-group-item">
                            <h6 class="mb-1">Accent color</h6>
                            <p class="text-muted text-sm">Choose your primary theme color</p>
                            <div class="theme-color preset-color">
                                <BLink :class="{ active: color === 'preset-1' }" @click="color = 'preset-1'"
                                    data-value="preset-1"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-2' }" @click="color = 'preset-2'"
                                    data-value="preset-2"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-3' }" @click="color = 'preset-3'"
                                    data-value="preset-3"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-4' }" @click="color = 'preset-4'"
                                    data-value="preset-4"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-5' }" @click="color = 'preset-5'"
                                    data-value="preset-5"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-6' }" @click="color = 'preset-6'"
                                    data-value="preset-6"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-7' }" @click="color = 'preset-7'"
                                    data-value="preset-7"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-8' }" @click="color = 'preset-8'"
                                    data-value="preset-8"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-9' }" @click="color = 'preset-9'"
                                    data-value="preset-9"><i class="ti ti-check"></i></BLink>
                                <BLink :class="{ active: !color === 'preset-10' }" @click="color = 'preset-10'"
                                    data-value="preset-10"><i class="ti ti-check"></i></BLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <h6 class="mb-1">Sidebar Caption</h6>
                            <p class="text-muted text-sm">Sidebar Caption Hide/Show</p>
                            <BRow class="theme-color theme-nav-caption">
                                <BCol Cols="6">
                                    <div class="d-grid">
                                        <button class="preset-btn btn" data-value="true"
                                            :class="{ active: sidebarCaption === 'true' }" @click="sidebarCaption = true">
                                            <span class="btn-label">Caption Show</span>
                                            <span
                                                class="pc-lay-icon"><span></span><span></span><span><span></span><span></span></span><span></span></span>
                                        </button>
                                    </div>
                                </BCol>
                                <BCols Cols="6">
                                    <div class="d-grid">
                                        <button class="preset-btn btn" data-value="false"
                                            :class="{ active: sidebarCaption === 'false' }" @click="sidebarCaption = false">
                                            <span class="btn-label">Caption Hide</span>
                                            <span
                                                class="pc-lay-icon"><span></span><span></span><span><span></span><span></span></span><span></span></span>
                                        </button>
                                    </div>
                                </BCols>
                            </BRow>
                        </li>
                        <li class="list-group-item">
                            <div class="pc-rtl">
                                <h6 class="mb-1">Theme Layout</h6>
                                <p class="text-muted text-sm">LTR/RTL</p>
                                <BRow class="theme-color theme-direction">
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" data-value="false"
                                                :class="{ active: direction === 'ltr' }" @click="setDirection('ltr')">
                                                <span class="btn-label">LTR</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" data-value="true"
                                                :class="{ active: direction === 'rtl' }" @click="setDirection('rtl')">
                                                <span class="btn-label">RTL</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </li>
                        <li class="list-group-item pc-box-width">
                            <div class="pc-container-width">
                                <h6 class="mb-1">Layout Width</h6>
                                <p class="text-muted text-sm">Choose Full or Container Layout</p>
                                <BRow class="theme-color theme-container">
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" data-value="false"
                                                :class="{ active: !isFixedWidth }" @click="setFullWidth">
                                                <span class="btn-label">Full Width</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span><span></span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button class="preset-btn btn" data-value="true"
                                                :class="{ active: isFixedWidth }" @click="setFixedWidth">
                                                <span class="btn-label">Fixed Width</span>
                                                <span
                                                    class="pc-lay-icon"><span></span><span></span><span></span><span><span></span></span></span>
                                            </button>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-grid">
                                <button class="btn btn-light-danger" id="layoutreset">Reset Layout</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </simplebar>
    </BOffcanvas>
</template>
