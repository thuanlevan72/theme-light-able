<script>
import { layoutComputed } from "@/state/helper.js";
// import 'bootstrap/dist/js/bootstrap.bundle';

export default {
    data() {
        return {
            settings: {
                minScrollbarLength: 60,
            },
        };
    },
    computed: {
        ...layoutComputed,
        layoutType: {
            get() {
                return this.$store ? this.$store.state.layout.layoutType : {} || {};
            },
        },
    },
    
};
</script>

<template>
    <BLink href="#" @click="toggleMenu" class="d-inline-flex align-items-center d-xl-none btn btn-dark mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_component"><i class="ti ti-menu-2 me-2"></i>
        Explore Components
    </BLink>
    <div class="offcanvas-xl offcanvas-start component-offcanvas" tabindex="-1" id="offcanvas_component">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_component" aria-label="Close" @click="click"></button>
        </div>
        <div class="offcanvas-body p-0">
            <BCard no-body class="component-list-card position-xl-fixed">
                <BCardHeader class="card-header">
                    <div class="form-search">
                        <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                        <input type="search" class="form-control" placeholder="ex. alert, textbox... " id="compo-menu-search">
                    </div>
                </BCardHeader>

                <BCardBody class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item component-page">
                            <h5 class="mt-3">Basic Components</h5>
                        </li>
                        <li>
                            <BLink class="list-group-item list-group-item-actio ms-2" href="#">All</BLink>
                        </li>
                        <li>
                            <router-link class=" list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/alert' }" to="/components/alert">Alert</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/button' }" to="/components/button">Button</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/badges' }" to="/components/badges">Badges</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/breadcrumb' }" to="/components/breadcrumb">Breadcrumb</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/cards' }" to="/components/cards">Cards</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/color' }" to="/components/color">Color</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/collapse' }" to="/components/collapse">Collapse</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/carousel' }" to="/components/carousel">Carousel</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/dropdown' }" to="/components/dropdown">Dropdowns</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/offcanvas' }" to="/components/offcanvas">Offcanvas</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/pagination' }" to="/components/pagination">Pagination</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/progress' }" to="/components/progress">Progress</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/list-group' }" to="/components/list-group">List
                                group</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/b-modal' }" to="/components/b-modal">Modal</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/spinner' }" to="/components/spinner">Spinner</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/tabs-pills' }" to="/components/tabs-pills">Tabs
                                &
                                pills</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/tooltip' }" to="/components/tooltip">Tooltip</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/toasts' }" to="/components/toasts">Toasts</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/typograbhy' }" to="/components/typograbhy">Typography</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/other' }" to="/components/other">Other</router-link>
                        </li>
                        <li class="list-group-item component-page">
                            <h5 class="mt-3">Advance Components</h5>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action " :class="{ 'active': this.$route.path === '/components/sweet-alert' }" to="/components/sweet-alert">Sweet
                                alert</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/datepicker' }" to="/components/datepicker">Datepicker</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/lightbox' }" to="/components/lightbox">Lightbox</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/a-modal' }" to="/components/a-modal">Modal</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/rangeslider' }" to="/components/rangeslider">Rangeslider</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/slider' }" to="/components/slider">Slider</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/highlighter' }" to="/components/highlighter">Syntax
                                Highlighter</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/tour' }" to="/components/tour">Tour</router-link>
                        </li>
                        <li>
                            <router-link class="list-group-item list-group-item-action tamp" :class="{ 'active': this.$route.path === '/components/tree-view' }" to="/components/tree-view">Tree
                                view</router-link>
                        </li>
                    </ul>
                </BCardBody>
            </BCard>
        </div>
    </div>
</template>

<style>
.component-page {
    position: relative;
    border: none;
    font-weight: 500px;
    top: 10px;
}
</style>



