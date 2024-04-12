<script>

import Rightbar from "@/components/right-bar.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y } from 'swiper/modules';
// import { ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '@/assets/images/landing/icons/react.svg';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/navigation';

export default {
    data() {
        img1
    },
    name: "LANDING",
    components: {
        Swiper,
        SwiperSlide,
        Rightbar
    },
    methods: {
        changeMode(mode) {
            this.currentMode = mode;
            if (mode == "dark") {
                document.body.setAttribute("data-pc-theme", "dark");
                document.body.setAttribute("data-topbar", "dark");
                document.body.classList.remove("mode-auto");
            } else if (mode == "auto") {
                document.body.setAttribute("data-pc-theme", "light");
                document.body.setAttribute("data-topbar", "light");
                document.body.classList.add("mode-auto");
            } else {
                document.body.setAttribute("data-pc-theme", "light");
                document.body.setAttribute("data-topbar", "light");
                document.body.classList.remove("mode-auto");
            }
        },
        toggleMenu() {
            document.getElementById("navbarTogglerDemo01").classList.toggle("show");
        },
    },
    setup() {
        return {
            modules: [Autoplay, A11y],
        };
    },
    mounted() {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 2000
        }); // Initialize AOS
            // document.body.setAttribute("data-pc-direction", "rtl");
            document.body.classList.add("landing-page");
    }
}
</script>

<template>
    <header id="home">
        <BNav class="navbar navbar-expand-md navbar-light default">
            <div class="container">
                <a class="pc-navbar-brand" href="/">
                    <img src="@/assets/images/logo-dark.svg" alt="logo" class="logo-lg">
                </a>
                <button @click="toggleMenu" class="navbar-toggler rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ms-auto mt-lg-0 mt-2 mb-2 mb-lg-0 align-items-start">
                        <li class="nav-item px-1">
                            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                        </li>
                        <li class="nav-item px-1">
                            <router-link class="nav-link" to="/components/alert">Components</router-link>
                        </li>
                        <li class="nav-item px-1">
                            <a class="nav-link" href="https://moonthemes-3.gitbook.io/moon-able-bootstrap/" target="_blank">Documentation</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0 align-items-start">
                        <BDropdown variant="link-secondary" class="card-header-dropdown pb-0 pe-2" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -150, crossAxis: 0, mainAxis: 20 }">
                            <template #button-content><span class="text-muted"><i :class="currentMode === 'dark' ? 'ph-duotone ph-moon' : (currentMode === 'light' ? 'ph-duotone ph-sun-dim' : 'ph-duotone ph-cpu') "></i></span>
                            </template>
                            <a href="#!" class="dropdown-item" @click="changeMode('dark')">
                                <i class="ph-duotone ph-moon"></i>
                                <span>Dark</span>
                            </a>
                            <a href="#!" class="dropdown-item" @click="changeMode('light')">
                                <i class="ph-duotone ph-sun-dim"></i>
                                <span>Light</span>
                            </a>
                            <a href="#!" class="dropdown-item" @click="changeMode('auto')">
                                <i class="ph-duotone ph-cpu"></i>
                                <span>Default</span>
                            </a>
                        </BDropdown>
                        <li class="nav-item">
                            <a href="https://themes.com/item/moon-able-bootstrap-admin-dashboard/" target="_blank" class="btn btn-primary">Get Light <i class="ph-duotone ph-arrow-square-out"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </BNav>

        <!-- <img src="@/assets/images/landing/img-header-bg.svg" alt="background shape" class="img-fluid img-header-bg"> -->
        <BContainerFluid class="container-fluid">
            <!-- <div class="container-fluid"> -->
            <div class="bg-dark mx-sm-3 home-section">
                <img src="@/assets/images/landing/img-header-bg.svg" alt="background shape" class="img-fluid img-header-bg">
                <div class="swiper language-slides-hero">
                    <div class="swiper-wrapper">
                        <swiper class="default-swiper rounded" :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }">
                            <swiper-slide>
                                <BRow class="align-items-center justify-content-center text-center">
                                    <BCol sm="12" class="header-content">
                                        <span class="header-badge text-white">
                                            <i class="ph-duotone ph-medal text-warning me-2"></i>
                                            Unlock Your Potential for Just $11. Limited Offer
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Elevate Your Project with Light Able Admin Dashboard</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">Your go-to solution for crafting sleek admin interfaces effortlessly. Streamline your workflow and enhance user experience with ease.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp mb-3" data-wow-delay="0.8s">
                                            <a href="https://phoenixcoded.com/item/light-able-bootstrap-admin-dashboard/" class="btn btn-primary me-3">Get
                                                started <i class="ph-duotone ph-arrow-square-out"></i></a>
                                            <a href="https://github.com/phoenixcoded/light-able-bootstrap-vanilla-js" class="btn btn-outline-light" target="_blank">
                                                <i class="fab fa-github me-1"></i>
                                                Get github
                                            </a>
                                        </div>
                                    </BCol>
                                </BRow>
                            </swiper-slide>
                            <swiper-slide>
                                <BRow class="align-items-center justify-content-center text-center">
                                    <BCol sm="12" class="header-content">
                                        <span class="header-badge text-white">
                                            <i class="ph-duotone ph-medal text-warning me-2"></i>
                                            Unlock Your Potential for Just $11. Limited Offer
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Elevate Your Project with Light Able Admin Dashboard</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">Your go-to solution for crafting sleek admin interfaces effortlessly. Streamline your workflow and enhance user experience with ease.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp mb-3" data-wow-delay="0.8s">
                                            <a href="https://phoenixcoded.com/item/light-able-bootstrap-admin-dashboard/" class="btn btn-primary me-3">Get
                                                started <i class="ph-duotone ph-arrow-square-out"></i></a>
                                            <a href="https://github.com/phoenixcoded/light-able-bootstrap-vanilla-js" class="btn btn-outline-light" target="_blank">
                                                <i class="fab fa-github me-1"></i>
                                                Get github
                                            </a>
                                        </div>
                                    </BCol>
                                </BRow>
                            </swiper-slide>
                        </swiper>

                    </div>
                    <BRow>
                        <BCol sm="12">
                            <swiper class="default-swiper rounded language-slides" slides-per-view="8" :space-between="30" :centered-slides="true" :autoplay="{ running: true }">
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/react.svg" class="me-1" alt="react icon">
                                        React
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/figma.svg" class="me-1" alt="figma icon">
                                        Figma
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/js.svg" class="me-1" alt="js icon">
                                        Javascript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/ts.svg" class="me-1" alt="typscript icon">
                                        Typescript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/react.svg" class="me-1" alt="react icon">
                                        React
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/figma.svg" class="me-1" alt="figma icon">
                                        Figma
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/js.svg" class="me-1" alt="js icon">
                                        Javascript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/ts.svg" class="me-1" alt="typscript icon">
                                        Typescript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/react.svg" class="me-1" alt="react icon">
                                        React
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/figma.svg" class="me-1" alt="figma icon">
                                        Figma
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/js.svg" class="me-1" alt="js icon">
                                        Javascript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/ts.svg" class="me-1" alt="typscript icon">
                                        Typescript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/react.svg" class="me-1" alt="react icon">
                                        React
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/figma.svg" class="me-1" alt="figma icon">
                                        Figma
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/js.svg" class="me-1" alt="js icon">
                                        Javascript
                                    </BLink>
                                </swiper-slide>
                                <swiper-slide>
                                    <BLink href="#" class="language-badge text-white">
                                        <img src="@/assets/images/landing/icons/ts.svg" class="me-1" alt="typscript icon">
                                        Typescript
                                    </BLink>
                                </swiper-slide>

                            </swiper>
                        </BCol>
                    </BRow>
                </div>
            </div>
        </BContainerFluid>
    </header>
    <!-- [ platform ] start -->
    <section class="bg-white">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Technology</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Light Able is a dynamic admin dashboard template packed with modern technologies like Bootstrap 5, React JS, Angular, Vue 3, and more.</p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.2s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-bs.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Bootstrap</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.3s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-react.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">React Next</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.4s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-vue.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Vue.js</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.5s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-laravel.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Laravel</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.6s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-node.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Node.js</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.7s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-django.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Django</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.8s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-net.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">ASP</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-cakephp.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">CakePHP</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-mvc5.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">MVC5</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/landing/techcard-figma.svg" alt="images" class="tech-img">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h5 class="mb-0">Figma</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="text-sm link-secondary d-flex align-items-center">Preview <i class="ti ti-chevrons-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- [ platform ] end -->

    <!-- [ layout-card ] start -->
    <section class="bg-white pt-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Layouts Demos</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
                </div>
            </div>
            <div class="row g-4 text-center ">
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/dashboard" target="_blank">
                                <img src="@/assets/images/landing/preview-layouts-vertical.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/dashboard" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Vertical <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/layout/horizontal" target="_blank">
                                <img src="@/assets/images/landing/preview-layouts-horizontal.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/layout/horizontal" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Horizontal <i class="ti ti-link text-primary f-22"></i></a>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/layout/layout-2" target="_blank">
                                <img src="@/assets/images/landing/preview-layouts-creative.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/layout/layout-2" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Creative <i class="ti ti-link text-primary f-22"></i></a>
                </div>

            </div>
        </div>
    </section>
    <!-- [ layout-card ] end -->

    <!-- [ Page-versions ] start -->
    <section class="bg-white pt-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Page Versions</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
                </div>
            </div>
            <div class="row g-4 text-center ">
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="#!">
                                <img src="@/assets/images/landing/preview-page-dark.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="#!" class="h5 d-flex align-items-center justify-content-center gap-2">Dark Version <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="#!">
                                <img src="@/assets/images/landing/preview-page-rtl.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="#!" class="h5 d-flex align-items-center justify-content-center gap-2">RTL Version <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="#!">
                                <img src="@/assets/images/landing/preview-page-landing.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="#!" class="h5 d-flex align-items-center justify-content-center gap-2">Landing Page <i class="ti ti-link text-primary f-22"></i></a>
                </div>

            </div>
        </div>
    </section>

    <!-- [ Apps-demos ] start -->
    <section class="bg-white pt-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Apps</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
                </div>
            </div>
            <div class="row g-4 text-center ">
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/invoice-list" target="_blank">
                                <img src="@/assets/images/landing/preview-app-invoice.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/invoice-list" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Invoice <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/social-media" target="_blank">
                                <img src="@/assets/images/landing/preview-app-social.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/social-media" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Social <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/mail" target="_blank">
                                <img src="@/assets/images/landing/preview-app-inbox.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/mail" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Inbox <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/product" target="_blank">
                                <img src="@/assets/images/landing/preview-app-ecommerce.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/product" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">E-commerce <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="gallery-masonry" target="_blank">
                                <img src="@/assets/images/landing/preview-app-gallery.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="gallery-masonry" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Gallery <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/calendar" target="_blank">
                                <img src="@/assets/images/landing/preview-app-calendar.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/calendar" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Calendar <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/chat" target="_blank">
                                <img src="@/assets/images/landing/preview-app-chat.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/chat" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Chat <i class="ti ti-link text-primary f-22"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!-- [ App-demos ] end -->

    <!-- [ Pages ] start -->
    <section class="bg-white pt-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Important Pages</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Unveil the diversity of page layouts within Light Able, including Vertical, Horizontal, and Tab Layouts, each offering unique design options to suit your preferences and project requirements.</p>
                </div>
            </div>
            <div class="row g-4 text-center ">
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/components" target="_blank">
                                <img src="@/assets/images/landing/lay-vertical.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/components" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Components <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/login-v1" target="_blank">
                                <img src="@/assets/images/landing/preview-important-auth-page.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/login-v1" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Auth Pages <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/statistics" target="_blank">
                                <img src="@/assets/images/landing/preview-important-widgets.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/statistics" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Widgets <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/form2_wizard" target="_blank">
                                <img src="@/assets/images/landing/preview-important-wizard.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/form2_wizard" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Wizard <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/account-profile" target="_blank">
                                <img src="@/assets/images/landing/preview-important-account-profile.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/account-profile" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Account Profile <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="#!">
                                <img src="@/assets/images/landing/preview-important-data-table.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <a href="#!" class="h5 d-flex align-items-center justify-content-center gap-2">Data Tables <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/form-element" target="_blank">
                                <img src="@/assets/images/landing/preview-important-form.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/form-element" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Forms <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <router-link to="/error-404" target="_blank">
                                <img src="@/assets/images/landing/preview-important-error.jpg" alt="img" class="img-fluid border">
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/error-404" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Error <i class="ti ti-link text-primary f-22"></i></router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/comming-soon" target="_blank">
                                <img src="@/assets/images/landing/preview-important-coming-soon.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/comming-soon" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Coming Soon <i class="ti ti-link text-primary f-22"></i></a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card layout-card">
                        <div class="card-body">
                            <a href="/contact-us" target="_blank">
                                <img src="@/assets/images/landing/preview-important-contact.jpg" alt="img" class="img-fluid border">
                            </a>
                        </div>
                    </div>
                    <a href="/contact-us" target="_blank" class="h5 d-flex align-items-center justify-content-center gap-2">Contact <i class="ti ti-link text-primary f-22"></i></a>
                </div>

            </div>
        </div>
    </section>
    <!-- [ Pages ] end -->


    <!-- [ Features ] start -->
    <section class="bg-white product-section pt-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-xl-10">
                    <h2 class="wow animate__fadeInUp section-title mb-0" data-wow-delay="0.2s">Key Features</h2>
                </div>
                <div class="col-md-8 col-xl-6">
                    <p class="text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
                        Designed to streamline your development process and enhance user experiences. Following are the top features that bundle with Light Able Dashboard Template.</p>
                </div>
            </div>
            <div class="row justify-content-center product-cards-block">
                <div class="col-xl-10">
                    <div class="row justify-content-center text-center gy-sm-4 gy-3">
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="0.5s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-wechat-logo text-primary"></i>
                                    <h5 class="mt-3 mb-0">Pure Vue.js </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="0.6s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-shopping-cart text-primary"></i>
                                    <h5 class="mt-3 mb-0">Vite Support</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="0.7s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-envelope-simple text-primary"></i>
                                    <h5 class="mt-3 mb-0">SASS Support </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="0.8s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-user-circle-plus text-primary"></i>
                                    <h5 class="mt-3 mb-0">6 Months Support</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="0.9s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-calendar-plus text-primary"></i>
                                    <h5 class="mt-3 mb-0">Free Updates</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">3+ Layouts </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-02">150+ UI Elements </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">60+ Form Elements </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">30+ Widgets </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Highly Responsive </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Documen-tation</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">2+ Form Plugins </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Text Editors </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Form Wizard </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">8+ Apps </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">10+ Auth Pages </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Landing Page </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <div class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">4 Level Menu </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- [ Features ] end -->

    <section class="bg-dark comminuties-section">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="text-white wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.2s">
                        Testimonials</h2>
                    <p class="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.</p>
                </div>
            </BRow>
        </div>
        <div class="container-fluid">
            <BRow class="row">
                <div class="col-12 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">
                    <div class="swiper comminuties-slides">
                        <div class="swiper-wrapper">
                            <swiper :pagination="true" class="mySwiper" slides-per-view="3" :space-between="20" :centered-slides="true" :loop="true">
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <p>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</p>
                                            <h5 class="my-3 text-primary text-end">- Design Quality</h5>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <p>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</p>
                                            <h5 class="my-3 text-primary text-end">- Design Quality</h5>

                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <p>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</p>
                                            <h5 class="my-3 text-primary text-end">- Design Quality</h5>

                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <p>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</p>
                                            <h5 class="my-3 text-primary text-end">- Design Quality</h5>

                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white feature-section">
        <div class="container title mb-0">
            <div class="row justify-content-center text-center wow animate__fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: animate__fadeInUp">
                <div class="col-md-8 col-xl-6">
                    <h2 class="mb-0 wow animate__fadeInUp section-title" data-wow-delay="0.1s">Why Light Able?</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">
                        Opt for Light Able for web development and unleash endless possibilities. Its sleek design, robust features, and unmatched flexibility enable effortless creation of stunning web applications. </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row g-3">
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.1s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-gauge f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Dashboard of 2024</h5>
                                    <p class="mb-0">Embracing the latest trends in design, Light Able emerges as a standout Bootstrap admin template for 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.2s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-sidebar-simple f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Made for Performance</h5>
                                    <p class="mb-0">Speed, ease of customization, and flexibility are three crucial factors for any admin template. We're delighted to announce that Light Able excels in these performance metrics. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.3s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-device-mobile-camera f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Error-Free Code</h5>
                                    <p class="mb-0">"Error Prohibited!!" Yes, we prioritize your project by conducting thorough design and performance testing across all major modern devices. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.4s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-sun-dim f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>On Time Support</h5>
                                    <p class="mb-0">Problem? Write to us - using our <a href="https://phoenixcoded.authordesk.app/" target="_blank" title="Phoenixcoded Support Desk">support desk</a>. 99% query resolution in first response within 1 day of time. 70% first response within 30mins. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.5s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-headset f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Always Updated</h5>
                                    <p class="mb-0">Rest assured, our package stays current with the latest plug-ins and technologies. You'll receive email notifications for updates, along with detailed changelogs and version history on our item page. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-none wow animate__fadeInUp mb-0" data-wow-delay="0.6s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-arrow-clockwise f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Effective Documentation</h5>
                                    <p class="mb-0">Enjoy stress-free development with separate, regularly updated help documentation of Light Able.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- [ numbers ] start -->
    <section class="bg-white pt-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card bg-dark counter-block mb-0 wow animate__fadeInUp" data-wow-delay="0.7s">
                        <img src="@/assets/images/landing/img-counter-bg.svg" alt="img" class="img-fluid img-counter-bg">
                        <div class="card-body p-4 p-md-5">
                            <div class="row align-items-center">
                                <div class="col-lg-6 my-3">
                                    <span class="h1 text-white mb-3 d-block">Trusted by Envato Elite Author</span>

                                    <a href="https://themeforest.net/user/phoenixcoded" class="btn btn-primary" target="_blank">Envato <i class="ph-duotone ph-arrow-square-out"></i></a>
                                </div>
                                <div class="col-lg-6 my-3">
                                    <div class="row g-3 text-center">
                                        <div class="col-4">
                                            <span class="counter text-white">6.3K+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Customers</h4>
                                        </div>
                                        <div class="col-4">
                                            <span class="counter text-white">10+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Year</h4>
                                        </div>
                                        <div class="col-4">
                                            <span class="counter text-white">4.8/5</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Ratings</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- [ numbers ] end -->




    <section class="border-bottom py-lg-5 py-4">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.1s">Trusted By</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s">
                        Lorem Ipsum is simply
                        dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s.</p>
                </div>
                <div class="col-md-12">
                    <BRow class="row justify-content-center client-block g-lg-4 g-3">
                        <div class="col-auto wow animate__fadeInRight" data-aos="fade-right" data-wow-delay="0.3s"><img src="@/assets/images/landing/client-eagames.svg" alt="img" class="img-fluid"></div>
                        <div class="col-auto wow animate__fadeInRight" data-aos="fade-right" data-wow-delay="0.4s"><img src="@/assets/images/landing/client-haswent-2.svg" alt="img" class="img-fluid"></div>
                        <div class="col-auto wow animate__fadeInRight" data-aos="fade-right" data-wow-delay="0.5s"><img src="@/assets/images/landing/client-crystal-1.svg" alt="img" class="img-fluid"></div>
                        <div class="col-auto wow animate__fadeInRight" data-aos="fade-right" data-wow-delay="0.6s"><img src="@/assets/images/landing/client-vodafone.svg" alt="img" class="img-fluid"></div>
                        <div class="col-auto wow animate__fadeInRight" data-aos="fade-right" data-wow-delay="0.7s"><img src="@/assets/images/landing/client-eagames.svg" alt="img" class="img-fluid"></div>
                    </BRow>
                </div>
            </BRow>
        </div>
    </section>

    <footer class="footer ">
        <div class="footer-top py-5">
            <div class="container">
                <BRow class="row gy-4">
                    <div class="col-md-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s">
                        <img src="@/assets/images/logo-dark.svg" alt="image" class="img-fluid mb-3">
                        <p class="mb-0">Since 2017, More than 50K+ Developers trust the Themes Digital Product. Mantis React
                            is
                            Manage under their Experienced
                            Team Players.</p>
                    </div>
                    <div class="col-md-8">
                        <BRow class="row gy-4">
                            <div class="col-sm-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">
                                <h5 class="mb-sm-4 mb-2">Company</h5>
                                <ul class="list-unstyled footer-link mb-0">
                                    <li><a href="#" target="_blank">About</a></li>
                                    <li><a href="#" target="_blank">Blog</a></li>
                                    <li><a href="#" target="_blank">Team</a></li>
                                    <li><a href="#" target="_blank">Free Version</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.8s">
                                <h5 class="mb-sm-4 mb-2">Help & Support</h5>
                                <ul class="list-unstyled footer-link mb-0">
                                    <li><a href="#" target="_blank">Documentation</a></li>
                                    <li><a href="#" target="_blank">Contact us</a></li>
                                    <li><a href="#" target="_blank">Support</a></li>
                                    <li><a href="#" target="_blank">RoadMap</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="1s">
                                <h5 class="mb-sm-4 mb-2">Useful Resources</h5>
                                <ul class="list-unstyled footer-link mb-0">
                                    <li><a href="#" target="_blank">Terms & Condition</a></li>
                                    <li><a href="#" target="_blank">Privacy Policy</a></li>
                                    <li><a href="#" target="_blank">Licencse</a></li>
                                    <li><a href="#" target="_blank">FAQ</a></li>
                                </ul>
                            </div>
                        </BRow>
                    </div>
                </BRow>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col my-1 wow animate__fadeInUp" data-wow-delay="0.4s">
                        <p class="m-0">Made with &#9829; by Team <a href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</a></p>
                    </div>
                    <div class="col-auto my-1">
                        <ul class="list-inline footer-sos-link mb-0">
                            <li class="list-inline-item wow animate__fadeInUp" data-wow-delay="0.4s">
                                <a href="https://fb.com/phoenixcoded">
                                    <i class="ph-duotone ph-facebook-logo f-20"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>

    <div class="pct-c-btn">
        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_pc_layout">
            <i class="ph-duotone ph-gear-six"></i>
        </a>
    </div>

    <!-- <div class="offcanvas border-0 pct-offcanvas offcanvas-end" tabindex="-1" id="offcanvas_pc_layout">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title">Settings</h5>
            <button type="button" class="btn btn-icon btn-link-danger" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="ti ti-x"></i></button>
        </div>
    </div> -->
    <Rightbar />
</template>