<script>
import FooterComponents from "@/components/footer.vue"
import Navbar from "@/components/navbar.vue"
import Rightbar from "@/components/right-bar.vue"
import LogoDark from "@/assets/images/logo-dark.svg"
import LogoWhite from "@/assets/images/logo-white.svg"
import simplebar from "simplebar-vue"
import pageheader from "@/components/page-header.vue"
import { ChevronDownIcon } from "@zhuowenli/vue-feather-icons"

// import MenuComponents from "@/components/sidebar.vue"

export default {
    name: "Layout-2",
    data() {
        return {
            LogoDark, LogoWhite,
            menuItems: [
                {
                    label: "layout-2",
                    icon: "ph-duotone ph-gauge",
                    badge: "2",
                },
                {
                    label: "Layouts",
                    icon: "ph-duotone ph-layout",
                    submenu: [
                        { label: "Compact", link: "../demo/layout-compact" },
                        { label: "Horizontal", link: "../demo/layout-horizontal" },
                        // Add more submenu items here
                    ],
                },
                {
                    label: "UI-kit",
                    icon: "ph-duotone ph-scroll",
                    submenu: [
                        { label: "Settings", link: "../ui-kit/settings" },
                        { label: "Plans", link: "../ui-kit/plans" },
                        // Add more submenu items here
                    ],
                },
                // Add more top-level menu items here
            ],
        };
    },
    components: {
        Navbar, simplebar, pageheader,
        // MenuComponents
        Rightbar, FooterComponents, ChevronDownIcon
    },
    methods: {
        changeLayoutType(layoutType) {
            // Update the layout type in the store
            this.$store.commit('changeLayoutType', { layoutType });

            // Set the layout attribute based on the layout type
            document.body.setAttribute('data-pc-layout', layoutType);
        },
        handleOutsideClick(event) {
            if (
                this.$store.state.isMobileSidebarActive &&
                !this.$el.contains(event.target)
            ) {
                // Close the mobile sidebar
                this.$store.commit('toggleMobileSidebar');
            }
        },
        removeClassByPrefix(node, prefix) {
            for (let i = 0; i < node.classList.length; i++) {
                let value = node.classList[i];
                if (value.startsWith(prefix)) {
                    node.classList.remove(value);
                }
            }
        },
        changebrand(temp) {
            this.removeClassByPrefix(document.querySelector('.pc-sidebar .m-header'), "bg-");
            document.querySelector('.pc-sidebar .m-header').classList.add(temp);
        }
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "horizontal":
                            document.body.setAttribute(
                                "data-pc-layout",
                                "horizontal"
                            );
                            break;
                        case "vertical":
                            document.body.setAttribute("data-pc-layout", "vertical");
                    }
                }
            },
        },
    },

    computed: {
        // ...layoutComputed,
        layoutType: {
            get() {
                return this.$store.state.layout.layoutType;
            },
            set(layoutType) {
                this.$store.commit('changeLayoutType', { layoutType });
            },
        },
        isFixedWidth() {
            return this.$store.getters.isFixedWidth;
        },
    },
    mounted() {
        document.body.setAttribute('data-pc-sidebar-theme', "dark");
        const activeListItem = document.querySelector("li.active");
        if (activeListItem) {
            const parentElementOrSelf = activeListItem?.parentElement ? activeListItem.parentElement : activeListItem;
            if (parentElementOrSelf && !parentElementOrSelf.classList.contains("pc-navbar")) {
                const closestItem = parentElementOrSelf.parentElement.closest(".pc-item");
                if (closestItem) {
                    closestItem.classList.add("active");
                }
            }
        } else {
            console.error("No list item with class 'active' found.");
        }
    }
}
</script>

<template>
    <div class="pc-sidebar" @click="handleOutsideClick" :class="{ 'pc-sidebar-hide': $store.state.isSidebarHidden, 'mob-sidebar-active': $store.state.isMobileSidebarActive }">
        <!-- <MenuComponents></MenuComponents> -->
        <!-- [ Sidebar Menu ] start -->

        <nav class="pc-sidebar">
            <div class="navbar-wrapper" id="navbar-wrapper">
                <div class="m-header">
                    <router-link to="/" class="b-brand text-primary">
                        <!-- ========   Change your logo from here   ============ -->
                        <!-- <img :src="isDarkTheme ? '@/assets/images/logo-dark.svg' : '@/assets/images/logo-white.svg'" alt="logo image" class="logo-lg"> -->
                        <img src="@/assets/images/logo-white.svg" alt="" class="logo logo-lg">
                        <!-- <img src="@/assets/images/logo-white.svg" alt="" class="logo logo-lg"> -->
                        <img src="@/assets/images/favicon.svg" alt="" class="logo logo-sm">
                        <span class="badge bg-brand-color-2 rounded-pill ms-2 theme-version">v1.0</span>
                    </router-link>
                </div>
                <simplebar data-simplebar style="height: 760px">
                    <div class="navbar-content">
                        <ul class="pc-navbar">
                            <li class="pc-item pc-caption">
                                <label>Navigation</label>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/dashboard' }">
                                <router-link to="/dashboard" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-gauge"></i>
                                    </span>
                                    <span class="pc-mtext">Dashboard</span>
                                    <span class="pc-badge">2</span>
                                </router-link>
                            </li>
                            <li class="pc-item pc-hasmenu" :class="{ 'active': this.$route.path === '/layouts' }">
                                <BLink class="pc-link" v-b-toggle.collapse-27>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-layout"></i></span><span class="pc-mtext">Layouts</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-27">
                                    <ul class="pc-submenu">
                                        <!-- <li class="pc-item"><a class="pc-link">Compact</a></li> -->
                                        <li class="pc-item">
                                            <router-link class="pc-link" @click="changeLayoutType('horizontal')" to="/layout/horizontal">Horizontal</router-link>
                                        </li>
                                        <li class="pc-item">
                                            <router-link class="pc-link" to="/layout/layout-2">Layout-2</router-link>
                                        </li>
                                        <li class="pc-item"><a class="pc-link" @click="changeLayoutType('vertical')" to="#">Vertical</a></li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-1>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-scroll"></i>
                                    </span>
                                    <span class="pc-mtext">Ui-kit</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-1">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/setting' }"><router-link class="pc-link" to="/setting">Settings</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/plans' }"><router-link class="pc-link" to="/plans">Plans</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/login-modal' }"><router-link class="pc-link" to="/login-modal">Login
                                                Modal</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/search-page' }"><router-link class="pc-link" to="/search-page">Search
                                                Page</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/affiliate-dashboard' }">
                                            <router-link class="pc-link" to="/affiliate-dashboard">Affiliate
                                                Dashboard</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/gallery-1' }"><router-link class="pc-link" to="/gallery-1">Gallery</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/team' }"><router-link class="pc-link" to="/team">Team</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/loading' }"><router-link class="pc-link" to="/loading">Loading</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/contact-search' }">
                                            <router-link class="pc-link" to="/contact-search">Contact
                                                Search</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/contact-us' }"><router-link class="pc-link" to="/contact-us">Contact
                                                Us</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Widget</label>
                                <i class="ph-duotone ph-chart-pie"></i>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/statistics' }">
                                <router-link to="/statistics" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-projector-screen-chart"></i>
                                    </span>
                                    <span class="pc-mtext">Statistics</span>
                                </router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/user' }">
                                <router-link to="/user" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-identification-card"></i>
                                    </span>
                                    <span class="pc-mtext">User</span>
                                </router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/data' }">
                                <router-link to="/data" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-database"></i>
                                    </span>
                                    <span class="pc-mtext">Data</span>
                                </router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/chart' }">
                                <router-link to="/chart" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-chart-pie"></i>
                                    </span>
                                    <span class="pc-mtext">Chart</span>
                                </router-link>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>UI Components</label>
                                <i class="ph-duotone ph-compass-tool"></i>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-2><span class="pc-micon">
                                        <i class="ph-duotone ph-flower-lotus"></i></span><span class="pc-mtext">Icons</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span></BLink>
                                <BCollapse id="collapse-2">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/feather' }"><router-link class="pc-link" to="/feather">Feather</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/tabler' }"><router-link class="pc-link" to="/tabler">Tabler</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/phosphor ' }"><router-link class="pc-link" to="/phosphor">Phosphor</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Forms</label>
                                <i class="ph-duotone ph-textbox"></i>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-3>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-textbox"></i>
                                    </span>
                                    <span class="pc-mtext">Forms Elements</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-3">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/form-element' }"><router-link class="pc-link" to="/form-element">Form
                                                Basic</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/floating' }"><router-link class="pc-link" to="/floating">Form
                                                Floating</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/form-option' }"><router-link class="pc-link" to="/form-option">Form
                                                Options</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/input-group' }"><router-link class="pc-link" to="/input-group">Input
                                                Groups</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/checkbox' }"><router-link class="pc-link" to="/checkbox">Checkbox</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/radio' }"><router-link class="pc-link" to="/radio">Radio</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/switch' }"><router-link class="pc-link" to="/switch">Switch</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/mega-option' }"><router-link class="pc-link" to="/mega-option">Mega
                                                option</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-7>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-windows-logo"></i>
                                    </span>
                                    <span class="pc-mtext">Form Layouts</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-7">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/layouts' }"><router-link class="pc-link" to="/layouts">Layouts</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/multicolumn' }"><router-link class="pc-link" to="/multicolumn">Multicolumn</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/actionbars' }"><router-link class="pc-link" to="/actionbars">Actionbars</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/sticky-action' }">
                                            <router-link class="pc-link" to="/sticky-action">Sticky
                                                Action
                                                bars</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu" v-b-toggle.collapse-8>
                                <BLink class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-cloud-arrow-up"></i>
                                    </span>
                                    <span class="pc-mtext">File upload</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-8">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/dropzone' }"><router-link class="pc-link" to="/dropzone">Dropzone</router-link>
                                        </li>
                                        <!-- <li class="pc-item ms-4"><router-link class="pc-link"
                                    to="/uppy">Uppy</router-link></li> -->
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/validation' }">
                                <router-link to="/validation" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-password"></i>
                                    </span>
                                    <span class="pc-mtext">Form Validation</span>
                                </router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/image-croper' }"><router-link to="/image-croper" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-crop"></i>
                                    </span>
                                    <span class="pc-mtext">Image cropper</span></router-link>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>table</label>
                                <i class="ph-duotone ph-table"></i>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-9>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-table"></i>
                                    </span>
                                    <span class="pc-mtext">Bootstrap Table</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-9">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/basic-table' }"><router-link class="pc-link" to="/basic-table">Basic
                                                table</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/sizing-table' }"><router-link class="pc-link" to="/sizing-table">Sizing
                                                table</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/border-table' }"><router-link class="pc-link" to="/border-table">Border
                                                table</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/styling-table' }">
                                            <router-link class="pc-link" to="/styling-table">Styling
                                                table</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-10>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-grid-nine"></i>
                                    </span>
                                    <span class="pc-mtext">Vanilla Table</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-10">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/basic' }"><router-link class="pc-link" to="/basic">Basic
                                                initialization</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/dynamic import' }">
                                            <router-link class="pc-link" to="/dynamic import">Dynamic
                                                Import</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/column cells' }"><router-link class="pc-link" to="/column cells">Render
                                                Column Cells</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/datetime sorting' }">
                                            <router-link class="pc-link" to="/datetime sorting">Datetime
                                                Sorting</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/method' }"><router-link class="pc-link" to="/method">Methods</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/row' }"><router-link class="pc-link" to="/row">Add
                                                Rows</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/api' }"><router-link class="pc-link" to="/api">Fetch
                                                API</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/filter' }"><router-link class="pc-link" to="/filter">Filters</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/export' }"><router-link class="pc-link" to="/export">Export</router-link></li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Charts &amp; Maps</label>
                                <i class="ph-duotone ph-chart-pie-slice"></i>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-13>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-chart-donut"></i>
                                    </span>
                                    <span class="pc-mtext">Charts</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-13">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/apexchart' }"><router-link class="pc-link" to="/apexchart">Apex
                                                Chart</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-14>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-map-trifold"></i>
                                    </span>
                                    <span class="pc-mtext">Maps</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-14">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/maps' }"><router-link class="pc-link" to="/maps">Google Map</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Application</label>
                                <i class="ph-duotone ph-buildings"></i>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/calendar' }">
                                <router-link to="/calendar" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-calendar-blank"></i>
                                    </span>
                                    <span class="pc-mtext">Calendar</span></router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/chat' }">
                                <router-link to="/chat" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-chats-circle"></i>
                                    </span>
                                    <span class="pc-mtext">Chat</span></router-link>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/gallery-2' }">
                                <router-link to="/gallery-2" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-image"></i>
                                    </span>
                                    <span class="pc-mtext">Gallery</span></router-link>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <router-link to="#!" class="pc-link" v-b-toggle.collapse-15>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-shopping-cart"></i>
                                    </span>
                                    <span class="pc-mtext">E-commerce</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span></router-link>
                                <BCollapse id="collapse-15">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/product' }"><router-link class="pc-link" to="/product">Product</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/product-details' }">
                                            <router-link class="pc-link" to="/product-details">Product
                                                details</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/product-list' }"><router-link class="pc-link" to="/product-list">Product
                                                List</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/add-product' }"><router-link class="pc-link" to="/add-product">Add New
                                                Product</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/checkout' }"><router-link class="pc-link" to="/checkout">Checkout</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/mail' }">
                                <router-link to="/mail" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-envelope-open"></i>
                                    </span>
                                    <span class="pc-mtext">Mail</span></router-link>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-16>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-user-circle"></i>
                                    </span>
                                    <span class="pc-mtext">Users</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-16">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/account-profile' }">
                                            <router-link class="pc-link" to="/account-profile">Account
                                                Profile</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/social-media' }"><router-link class="pc-link" to="/social-media">Social
                                                media</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/user-card' }"><router-link class="pc-link" to="/user-card">User
                                                Card</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/user-list' }"><router-link class="pc-link" to="/user-list">User
                                                List</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <BLink class="pc-link" v-b-toggle.collapse-17>
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-newspaper"></i>
                                    </span>
                                    <span class="pc-mtext">Invoice</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-17">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/invoice-list' }"><router-link class="pc-link" to="/invoice-list">Invoice
                                                List</router-link>
                                        </li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/create' }"><router-link class="pc-link" to="/create">Create</router-link></li>
                                        <li class="pc-item ms-4" :class="{ 'active': $route.path === '/preview' }"><router-link class="pc-link" to="/preview">Preview</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Pages</label>
                                <i class="ph-duotone ph-devices"></i>
                            </li>
                            <li class="pc-item pc-hasmenu" v-b-toggle.collapse-18>
                                <BLink href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-shield-checkered"></i>
                                    </span>
                                    <span class="pc-mtext">Authentication</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                            </li>
                            <BCollapse id="collapse-18">
                                <ul class="pc-submenu">
                                    <li class="pc-item pc-hasmenu ms-4" v-b-toggle.collapse-19>
                                        <BLink href="#!" class="pc-link">Authentication 1<span class="pc-arrow">
                                                <ChevronDownIcon></ChevronDownIcon>
                                            </span></BLink>
                                        <BCollapse id="collapse-19">
                                            <ul class="pc-submenu">
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/login-v1">Login</router-link>
                                                </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/register-v1">Register</router-link>
                                                </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/forgot-password-v1">Forgot
                                                        Password</router-link></li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/reset-password-v1">reset
                                                        password</router-link> </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/code-verification-v1">code
                                                        verification</router-link></li>
                                            </ul>
                                        </BCollapse>
                                    </li>
                                    <li class="pc-item pc-hasmenu ms-4">
                                        <BLink class="pc-link" v-b-toggle.collapse-21>Authentication 2<span class="pc-arrow">
                                                <ChevronDownIcon></ChevronDownIcon>
                                            </span>
                                        </BLink>
                                        <BCollapse id="collapse-21">
                                            <ul class="pc-submenu">
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/login-v2">Login</router-link>
                                                </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/register-v2">Register</router-link>
                                                </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/forgot-password-v2">Forgot
                                                        password</router-link> </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/reset-password-v2">reset
                                                        password</router-link> </li>
                                                <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/code-verification-v2">code
                                                        verification</router-link></li>
                                            </ul>
                                        </BCollapse>
                                    </li>
                                </ul>
                            </BCollapse>
                            <!-- </li> -->
                            <li class="pc-item pc-hasmenu" v-b-toggle.collapse-22>
                                <BLink class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-wrench"></i>
                                    </span>
                                    <span class="pc-mtext">Maintenance</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span>
                                </BLink>
                                <BCollapse id="collapse-22">
                                    <ul class="pc-submenu">
                                        <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/error-404">Error
                                                404</router-link>
                                        </li>
                                        <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/connection-lost">Connection
                                                lost</router-link></li>
                                        <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/under-construction">Under
                                                Construction</router-link></li>
                                        <li class="pc-item ms-4"><router-link class="pc-link" target="_blank" to="/comming-soon">Coming
                                                soon</router-link>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/' }"><router-link to="/" class="pc-link" target="_blank"><span class="pc-micon">
                                        <i class="ph-duotone ph-rocket"></i> </span><span class="pc-mtext">Landing</span></router-link>
                            </li>
                            <li class="pc-item pc-caption">
                                <label>Other</label>
                                <i class="ph-duotone ph-suitcase"></i>
                            </li>
                            <li class="pc-item pc-hasmenu" v-b-toggle.collapse-23>
                                <BLink class="pc-link"><span class="pc-micon">
                                        <i class="ph-duotone ph-tree-structure"></i> </span><span class="pc-mtext">Menu
                                        levels</span><span class="pc-arrow">
                                        <ChevronDownIcon></ChevronDownIcon>
                                    </span></BLink>
                                <BCollapse id="collapse-23">
                                    <ul class="pc-submenu">
                                        <li class="pc-item">
                                            <BLink class="pc-link">Level 2.1</BLink>
                                        </li>
                                        <li class="pc-item pc-hasmenu" v-b-toggle.collapse-24>
                                            <BLink class="pc-link">Level 2.2<span class="pc-arrow">
                                                    <ChevronDownIcon></ChevronDownIcon>
                                                </span></BLink>
                                            <BCollapse id="collapse-24">
                                                <ul class="pc-submenu">
                                                    <li class="pc-item">
                                                        <BLink class="pc-link">Level 3.1</BLink>
                                                    </li>
                                                    <li class="pc-item">
                                                        <BLink class="pc-link">Level 3.2</BLink>
                                                    </li>
                                                    <li class="pc-item pc-hasmenu" v-b-toggle.collapse-25>
                                                        <BLink class="pc-link">Level 3.3<span class="pc-arrow">
                                                                <ChevronDownIcon></ChevronDownIcon>
                                                            </span></BLink>
                                                        <BCollapse id="collapse-25">
                                                            <ul class="pc-submenu">
                                                                <li class="pc-item">
                                                                    <BLink class="pc-link">Level 4.1</BLink>
                                                                </li>
                                                                <li class="pc-item">
                                                                    <BLink class="pc-link">Level 4.2</BLink>
                                                                </li>
                                                            </ul>
                                                        </BCollapse>
                                                    </li>
                                                </ul>
                                            </BCollapse>
                                        </li>
                                        <li class="pc-item pc-hasmenu" v-b-toggle.collapse-26>
                                            <BLink class="pc-link">Level 2.3<span class="pc-arrow">
                                                    <ChevronDownIcon></ChevronDownIcon>
                                                </span></BLink>
                                            <BCollapse id="collapse-26">
                                                <ul class="pc-submenu">
                                                    <li class="pc-item">
                                                        <BLink class="pc-link">Level 3.1</BLink>
                                                    </li>
                                                    <li class="pc-item">
                                                        <BLink class="pc-link">Level 3.2</BLink>
                                                    </li>
                                                    <li class="pc-item pc-hasmenu" v-b-toggle.collapse-27>
                                                        <BLink class="pc-link">Level 3.3<span class="pc-arrow">
                                                                <ChevronDownIcon></ChevronDownIcon>
                                                            </span></BLink>
                                                        <BCollapse id="collapse-27">
                                                            <ul class="pc-submenu">
                                                                <li class="pc-item">
                                                                    <BLink class="pc-link">Level 4.1</BLink>
                                                                </li>
                                                                <li class="pc-item">
                                                                    <BLink class="pc-link">Level 4.2</BLink>
                                                                </li>
                                                            </ul>
                                                        </BCollapse>
                                                    </li>
                                                </ul>
                                            </BCollapse>
                                        </li>
                                    </ul>
                                </BCollapse>
                            </li>
                            <li class="pc-item" :class="{ 'active': this.$route.path === '/sample-page' }"><router-link to="/sample-page" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="ph-duotone ph-desktop"></i>
                                    </span>
                                    <span class="pc-mtext">Sample page</span></router-link>
                            </li>
                        </ul>

                        <div class="card nav-action-card bg-brand-color-4">
                            <div class="card-body" :style="{ 'background-image': 'url(' + require('@/assets/images/layout/nav-card-bg.svg') + ')' }">
                                <h5 class="text-dark">Help Center</h5>
                                <p class="text-dark text-opacity-75">Please contact us for more questions.</p>
                                <BLink href="#" class="btn btn-primary" target="_blank">Go to help
                                    Center</BLink>
                            </div>
                        </div>
                    </div>
                </simplebar>

            </div>

            <BCard no-body class="pc-user-card">
                <BCardBody>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/user/avatar-1.jpg" alt="user-image" class="user-avtar wid-45 rounded-circle">
                        </div>
                        <div class="flex-grow-1 ms-3 me-2">
                            <h6 class="mb-0">Jonh Smith</h6>
                            <small>Administrator</small>
                        </div>
                        <BDropdown variant="purple" dropup no-caret>
                            <template v-slot:button-content>
                                <span class="btn btn-icon btn-link-secondary avtar arrow-none dropdown-toggle">
                                    <i class="ph-duotone ph-windows-logo"></i>
                                </span>
                            </template>
                            <BRow xl="6">
                                <BCol xl="6">
                                    <BDropdownItem class="pc-user-links p-0">
                                        <div class="align-middle">
                                            <i class="ph-duotone ph-user"></i>
                                            <br>
                                            <span>My Account</span>
                                        </div>
                                    </BDropdownItem>
                                    <BDropdownDivider />
                                    <BDropdownItem class="pc-user-links p-0">
                                        <i class="ph-duotone ph-lock-key"></i> <br>
                                        <span>Lock Screen</span>
                                    </BDropdownItem>
                                    <BDropdownDivider />
                                </BCol>
                                <BCol xl="6">
                                    <BDropdownItem class="pc-user-links p-0">
                                        <i class="ph-duotone ph-gear"></i> <br>
                                        <span>Settings</span>
                                    </BDropdownItem>
                                    <BDropdownDivider />
                                    <BDropdownItem class="pc-user-links p-0">
                                        <i class="ph-duotone ph-power"></i> <br>
                                        <span>Logout</span>
                                    </BDropdownItem>
                                    <BDropdownDivider />
                                </BCol>
                            </BRow>
                        </BDropdown>
                    </div>
                </BCardBody>
            </BCard>
        </nav>
        <!-- [ Sidebar Menu ] end -->

        <div v-if="$store.state.isMobileSidebarActive" class="pc-menu-overlay"></div>
    </div>
    <div class="pc-header" style="z-index: 1;">
        <Navbar />
    </div>

    <div class="pc-container">
        <div class="pc-content" :class="{ 'container': isFixedWidth }">
            <pageheader title="Layout-2" pageTitle="Layout" />
            <!-- Start Content-->
            <BRow>
                <!-- [ sample-page ] start -->
                <BCol sm="12">
                    <BCard no-body>
                        <BCardBody>
                            <h5>Brand Color</h5>
                            <small>set background utility class in <code>.m-header</code> in sidebar</small>
                            <BRow class="g-3 mt-3">
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-brand-color-1" @click="changebrand('bg-brand-color-1')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-brand-color-2" @click="changebrand('bg-brand-color-2')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-brand-color-3" @click="changebrand('bg-brand-color-3')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-primary" @click="changebrand('bg-primary')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-secondary" @click="changebrand('bg-secondary')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-danger" @click="changebrand('bg-danger')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-success" @click="changebrand('bg-success')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-warning" @click="changebrand('bg-warning')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="avtar avtar-s bg-info" @click="changebrand('bg-info')">
                                        <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                                    </a>
                                </div>

                            </BRow>
                        </BCardBody>
                    </BCard>
                    <!-- [ sample-page ] end -->
                </BCol>
                <!-- [ Main Content ] end -->
            </BRow>
        </div>
    </div>
    <div class="pc-footer">
        <FooterComponents />
    </div>
    <Rightbar />
</template>