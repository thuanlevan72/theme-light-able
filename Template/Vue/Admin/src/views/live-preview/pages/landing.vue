<script>
import Rightbar from "@/components/right-bar.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y } from 'swiper/modules';
import { ref } from 'vue';
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
        ColorOption: {
            props: {
                color: String,
            },
            setup(props) {
                const selectedColor = ref(props.color);

                const handleChange = () => {
                    selectedColor.value = props.color;
                };

                return {
                    selectedColor,
                    handleChange,
                };
            },
            template: `
        <div class="form-check form-check-inline board-color-checkbox mb-0" :class="'bg-' + color">
          <input class="form-check-input" type="radio" :name="'product_color'" :checked="selectedColor === color" @change="handleChange">
          <i class="ph-duotone ph-eyedropper-sample"></i>
        </div>
      `,
        },
        Swiper,
        SwiperSlide,
        Rightbar
    },
    methods: {
        changeMode(mode) {
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
                    <ul class="navbar-nav ms-auto me-auto mt-lg-0 mt-2 mb-2 mb-lg-0 align-items-start">
                        <li class="nav-item px-1">
                            <a class="nav-link" href="https://moonthemes-3.gitbook.io/moon-able-bootstrap/" target="_blank">Documentation</a>
                        </li>
                        <li class="nav-item px-1">
                            <router-link class="nav-link" to="/dashboard/">Live Preview</router-link>
                        </li>
                        <li class="nav-item px-1">
                            <router-link class="nav-link" to="/components/">Components</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0 align-items-start">
                        <BDropdown variant="link-secondary" class="card-header-dropdown pe-2" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -150, crossAxis: 0, mainAxis: 20 }">
                            <template #button-content><span class="text-muted"><i :class="currentMode === 'dark' ? 'ph-duotone ph-moon' : (currentMode === 'light' ? 'ph-duotone ph-cpu ' : 'ph-duotone ph-sun-dim text-warning')"></i></span>
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
                            <a href="https://themes.com/item/moon-able-bootstrap-admin-dashboard/" target="_blank" class="btn btn-primary">Get Moon <i class="ph-duotone ph-arrow-square-out"></i></a>
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie React apps
                                                    with speed</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem ipsum dolor sit
                                                    amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie figma</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">How you design , align ,
                                                    and build matters. Do it together with Figma.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie Typescript
                                                    apps with speed</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">TypeScript is a strongly
                                                    typed programming language that builds on JavaScript, giving you better tooling at any scale.
                                                    Try TypeScript Now. Online or via npm.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie figma</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">How you design , align ,
                                                    and build matters. Do it together with Figma.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie Javascript
                                                    apps with speed</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">JavaScript is the
                                                    programming language of the Web. JavaScript is easy to learn. This tutorial will teach you
                                                    JavaScript from basic to advanced.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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
                                            Here add some message top rated
                                        </span>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="8" sm="10" Cols="11" class="col-xl-7 col-md-9">
                                                <h1 class="my-3 wow animate__fadeInUp text-white" data-wow-delay="0.4s">Create accessie React apps
                                                    with speed</h1>
                                            </BCol>
                                        </BRow>
                                        <BRow class="justify-content-center text-center">
                                            <BCol lg="7" sm="10" Cols="11" class="col-xxl-5 col-xl-6 col-md-8">
                                                <p class="f-16 mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem ipsum dolor sit
                                                    amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </BCol>
                                        </BRow>
                                        <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
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

    <section class="bg-white pb-0">
        <div class="container">
            <BRow class="row">
                <div class="col-12">
                    <div class="card bg-dark counter-block wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.7s">
                        <img src="@/assets/images/landing/img-customer-bg.svg" alt="img" class="img-fluid img-customer-bg">
                        <div class="card-body p-4 p-md-5">
                            <BRow class="row align-items-center">
                                <div class="col-lg-6 my-3">
                                    <h2 class="text-white mb-sm-4 mb-3 f-w-400">1000 + happy customer</h2>
                                    <a href="https://themes.com/" class="btn btn-primary" target="_blank">See more review <i class="ph-duotone ph-arrow-square-out"></i></a>
                                </div>
                                <div class="col-lg-6 my-3">
                                    <BRow class="row g-3 align-items-center text-center">
                                        <div class="col-6">
                                            <span class="counter text-white">2.5K+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Sales</h4>
                                        </div>
                                        <div class="col-6">
                                            <span class="counter text-white">4.8/5</span>
                                            <h4 class="f-w-400 my-sm-3 my-2 text-white text-opacity-50">2,442 Average rating
                                            </h4>
                                            <div class="star f-20">
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star-half-alt text-warning"></i>
                                            </div>
                                        </div>
                                    </BRow>
                                </div>
                            </BRow>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white board-section">
        <img src="@/assets/images/landing/img-dot-bg.png" alt="img" class="img-fluid img-dots-bg">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.2s">The most
                        powerful Moon UI Board
                    </h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        Lorem Ipsum is simply
                        dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever
                        since the 1500s.</p>
                </div>
            </BRow>
            <BRow class="row">
                <div class="col-12">
                    <div class="bard-block">
                        <div class="board-color-option card">
                            <ColorOption color="primary" />
                            <ColorOption color="secondary" />
                            <ColorOption color="success" />
                            <ColorOption color="danger" />
                            <ColorOption color="info" />
                        </div>
                        <BRow class="row justify-content-center">
                            <div class="col-11 col-sm-9 wow animate__fadeInUp text-center" data-aos="fade-up" data-wow-delay="0.4s">
                                <img src="@/assets/images/landing/img-board.jpg" alt="img" class="img-fluid rounded border">
                            </div>
                        </BRow>
                    </div>
                </div>
            </BRow>
        </div>
    </section>
    <section class="bg-dark product-section pb-0">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-xl-10">
                    <h2 class="text-white wow animate__fadeInUp section-title mb-0 pt-5" data-aos="fade-up" data-wow-delay="0.2s">Run your
                        entire
                        business
                        from one single product, built just for moving companies.</h2>
                </div>
                <div class="col-md-8 col-xl-6">
                    <p class="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.</p>
                </div>
            </BRow>
            <BRow class="row justify-content-center product-cards-block">
                <div class="col-12 position-relative">
                    <img src="@/assets/images/landing/img-click-prod.png" alt="img" class="img-fluid img-arrow d-none d-lg-inline-block">
                </div>
                <div class="col-xl-10">
                    <BRow class="row justify-content-center text-center gy-sm-4 gy-3">
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.5s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-wechat-logo text-primary"></i>
                                    <h5 class="mt-3 mb-0">Chat with friends </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-shopping-cart text-primary"></i>
                                    <h5 class="mt-3 mb-0">Shopping store</h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.7s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-envelope-simple text-primary"></i>
                                    <h5 class="mt-3 mb-0">Inbox </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.8s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-user-circle-plus text-primary"></i>
                                    <h5 class="mt-3 mb-0">Post your story</h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.9s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-calendar-plus text-primary"></i>
                                    <h5 class="mt-3 mb-0">Set Schedule</h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-xl-2 col-md-3 col-6">
                            <a href="#" class="card wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="1.0s">
                                <div class="card-body">
                                    <i class="ph-duotone ph-lock-key text-primary"></i>
                                    <h5 class="mt-3 mb-0">Chat with friends </h5>
                                </div>
                            </a>
                        </div>
                    </BRow>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.2s">Integrate with
                        platform</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        Lorem Ipsum is simply
                        dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever
                        since the 1500s.</p>
                </div>
            </BRow>
            <BRow class="row justify-content-center text-center platform-img">
                <div class="col-9 wow animate__zoomIn" data-aos="zoom-in" data-wow-delay="0.4s">
                    <img src="@/assets/images/landing/img-platform.png" alt="img" class="img-fluid">
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-primary comminuties-section">
        <div class="container">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="text-white wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.2s">
                        Trusted by open-source comminuties</h2>
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
                            <swiper :pagination="true" class="mySwiper" slides-per-view="2" :space-between="20" :centered-slides="true" :loop="true">
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</h3>
                                            <p class="my-3 text-primary text-end">- Design Quality</p>
                                            <div class="media align-items-start">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user image" class="img-radius" style="width:40px;">
                                                </div>
                                                <div class="media-body ms-3">
                                                    <h6 class="mb-0">karanveer s.</h6>
                                                    <p class="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</h3>
                                            <p class="my-3 text-primary text-end">- Design Quality</p>
                                            <div class="media align-items-start">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user image" class="img-radius" style="width:40px;">
                                                </div>
                                                <div class="media-body ms-3">
                                                    <h6 class="mb-0">karanveer s.</h6>
                                                    <p class="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</h3>
                                            <p class="my-3 text-primary text-end">- Design Quality</p>
                                            <div class="media align-items-start">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user image" class="img-radius" style="width:40px;">
                                                </div>
                                                <div class="media-body ms-3">
                                                    <h6 class="mb-0">karanveer s.</h6>
                                                    <p class="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h3>Glad to see the designs and the components cleaness. Quality product with
                                                the
                                                great documenation. Congratulations for the good work</h3>
                                            <p class="my-3 text-primary text-end">- Design Quality</p>
                                            <div class="media align-items-start">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user image" class="img-radius" style="width:40px;">
                                                </div>
                                                <div class="media-body ms-3">
                                                    <h6 class="mb-0">karanveer s.</h6>
                                                    <p class="mb-0 text-muted text-sm">Administrator</p>
                                                </div>
                                            </div>
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

    <section class="bg-white why-section">
        <BContainer class="">
            <BRow class="row justify-content-center text-center">
                <div class="col-md-8 col-xl-6">
                    <h2 class="wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.2s">Why Choose Moon
                    </h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        Lorem Ipsum is simply
                        dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever
                        since the 1500s.</p>
                </div>
            </BRow>
        </BContainer>
        <div class="container-fluid">
            <BRow class="row">
                <div class="col-12 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">
                    <div class="why-slider-wrapper">
                        <div class="swiper why-slides">
                            <div class="swiper-wrapper">
                                <swiper :pagination="true" :modules="modules" class="mySwiper" slides-per-view="3" :space-between="20" :centered-slides="true" :autoplay="{ running: true }" :loop="true">
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-tag text-primary f-32"></i>
                                                <h5 class="my-3">We offer the best customer experience in the industry.</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                                <h5 class="my-3">Moon gets better and give updates.</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-alarm text-primary f-32"></i>
                                                <h5 class="my-3">Time and cost</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-tag text-primary f-32"></i>
                                                <h5 class="my-3">We offer the best customer experience in the industry.</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                                                <h5 class="my-3">Moon gets better and give updates.</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <i class="ph-duotone ph-alarm text-primary f-32"></i>
                                                <h5 class="my-3">Time and cost</h5>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting
                                                    industry. Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div class="why-slider-arrows d-flex justify-content-center">
                                <div class="slidePrev-btn">
                                    <span class="avtar avtar-s btn btn-link-secondary border-0"><i class="ti ti-arrow-left f-18"></i></span>
                                </div>
                                <div class="slideNext-btn">
                                    <span class="avtar avtar-s btn btn-link-secondary border-0"><i class="ti ti-arrow-right f-18"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white pt-0">
        <div class="container">
            <BRow class="row">
                <div class="col-12">
                    <div class="card bg-dark mb-0 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s">
                        <div class="card-body p-4 p-md-5">
                            <BRow class="row align-items-center justify-content-between">
                                <div class="col-lg-4 my-3 text-center text-sm-start">
                                    <h2 class="text-white mb-3">Pricing</h2>
                                    <p class="mb-4 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the
                                        printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <ul class="list-inline ms-auto mb-0">
                                        <li class="list-inline-item">
                                            <button class="avtar avtar-s btn btn-outline-light border-0 customPrev-btn">
                                                <i class="ti ti-arrow-left f-18"></i>
                                            </button>
                                        </li>
                                        <li class="list-inline-item">
                                            <button class="avtar avtar-s btn btn-outline-light border-0 customNext-btn">
                                                <i class="ti ti-arrow-right f-18"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 my-3 counter-block">
                                    <div class="swiper price-slides">
                                        <div class="swiper-wrapper">
                                            <swiper :pagination="true" :modules="modules" class="mySwiper" slides-per-view="1" :centered-slides="true" :autoplay="{ running: true }" :loop="true">
                                                <swiper-slide>
                                                    <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s" id="pills-1tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="pills-1home-tab" data-bs-toggle="pill" data-bs-target="#pills-1home" type="button" role="tab" aria-controls="pills-1home" aria-selected="true">Monthly</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-1profile-tab" data-bs-toggle="pill" data-bs-target="#pills-1profile" type="button" role="tab" aria-controls="pills-1profile" aria-selected="false">Yearly</button>
                                                        </li>
                                                    </ul>
                                                    <BRow class="row g-3 text-center align-items-center">
                                                        <div class="col-sm-6">
                                                            <div class="tab-content" id="pills-1tabContent">

                                                                <div class="tab-pane fade show active" id="pills-1home" role="tabpanel" aria-labelledby="pills-1home-tab" tabindex="0">
                                                                    <span class="counter text-white">$69</span>
                                                                </div>
                                                                <div class="tab-pane fade" id="pills-1profile" role="tabpanel" aria-labelledby="pills-1profile-tab" tabindex="0">
                                                                    <span class="counter text-white">$269</span>
                                                                </div>
                                                            </div>
                                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Standard
                                                                License
                                                            </h4>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <ul class="list-unstyled text-start text-white text-opacity-50">
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    Use for single site</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6
                                                                    month premium Support
                                                                </li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1
                                                                    year updates</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    For Non-Paying users only
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </BRow>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s" id="pills-2tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="pills-2home-tab" data-bs-toggle="pill" data-bs-target="#pills-2home" type="button" role="tab" aria-controls="pills-2home" aria-selected="true">Monthly</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-2profile-tab" data-bs-toggle="pill" data-bs-target="#pills-2profile" type="button" role="tab" aria-controls="pills-2profile" aria-selected="false">Yearly</button>
                                                        </li>
                                                    </ul>
                                                    <BRow class="row g-3 text-center align-items-center">
                                                        <div class="col-6">
                                                            <div class="tab-content" id="pills-2tabContent">
                                                                <div class="tab-pane fade show active" id="pills-2home" role="tabpanel" aria-labelledby="pills-2home-tab" tabindex="0">
                                                                    <span class="counter text-white">$169</span>
                                                                </div>
                                                                <div class="tab-pane fade" id="pills-2profile" role="tabpanel" aria-labelledby="pills-2profile-tab" tabindex="0">
                                                                    <span class="counter text-white">$469</span>
                                                                </div>
                                                            </div>
                                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Extended
                                                                License
                                                            </h4>
                                                        </div>
                                                        <div class="col-6">
                                                            <ul class="list-unstyled text-start text-white text-opacity-50">
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    Use for single site</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6
                                                                    month premium Support
                                                                </li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1
                                                                    year updates</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    For Non-Paying users only
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </BRow>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s" id="pills-3tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="pills-3home-tab" data-bs-toggle="pill" data-bs-target="#pills-3home" type="button" role="tab" aria-controls="pills-3home" aria-selected="true">Monthly</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-3profile-tab" data-bs-toggle="pill" data-bs-target="#pills-3profile" type="button" role="tab" aria-controls="pills-3profile" aria-selected="false">Yearly</button>
                                                        </li>
                                                    </ul>
                                                    <BRow class="row g-3 text-center align-items-center">
                                                        <div class="col-6">
                                                            <div class="tab-content" id="pills-3tabContent">
                                                                <div class="tab-pane fade show active" id="pills-3home" role="tabpanel" aria-labelledby="pills-3home-tab" tabindex="0">
                                                                    <span class="counter text-white">$369</span>
                                                                </div>
                                                                <div class="tab-pane fade" id="pills-3profile" role="tabpanel" aria-labelledby="pills-3profile-tab" tabindex="0">
                                                                    <span class="counter text-white">$969</span>
                                                                </div>
                                                            </div>
                                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Enterprise
                                                                License</h4>
                                                        </div>
                                                        <div class="col-6">
                                                            <ul class="list-unstyled text-start text-white text-opacity-50">
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    Use for single site</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6
                                                                    month premium Support
                                                                </li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1
                                                                    year updates</li>
                                                                <li class="my-2"><i class="me-1 ti ti-check text-success"></i>
                                                                    For Non-Paying users only
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </BRow>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </div>
                                </div>
                            </BRow>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

    <section>
        <div class="container">
            <BRow class="row align-items-center gy-2">
                <div class="col-md-6 text-end">
                    <img src="@/assets/images/landing/img-widget.png" alt="img" class="img-fluid wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s">
                </div>
                <div class="col-md-6">
                    <BTabs pills nav-class="rounded mb-4" data-aos="fade-up">
                        <BTab title="Visual report" active>
                            <h2 class="mb-3 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">All widgets
                                designed for different
                                Applications categories</h2>
                            <p class="mb-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">Lorem Ipsum
                                is
                                simply dummy text of
                                the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s.</p>
                            <div class="wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.8s">
                                <router-link to="/dashboard" class="btn btn-primary me-2">Explore</router-link>
                                <router-link to="/dashboard" class="btn btn-outline-secondary">Live preview</router-link>
                            </div>
                        </BTab>
                        <BTab title="Statistic">
                            <h2 class="mb-3 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">All widgets
                                designed for different
                                Applications categories</h2>
                            <p class="mb-4 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.6s">Lorem Ipsum
                                is
                                simply dummy text of
                                the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s.</p>
                            <div class="wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.8s">
                                <router-link to="/dashboard" class="btn btn-primary me-2">Explore</router-link>
                                <router-link to="/dashboard" class="btn btn-outline-secondary">Live preview</router-link>
                            </div>
                        </BTab>
                    </BTabs>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white feature-section">
        <div class="container title mb-0">
            <BRow class="row justify-content-center text-center wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: animate__fadeInUp">
                <div class="col-md-8 col-xl-6">
                    <h2 class="mb-0 wow animate__fadeInUp section-title" data-aos="fade-up" data-wow-delay="0.1s">Key
                        features</h2>
                    <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.2s">
                        Lorem Ipsum is simply
                        dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                </div>
            </BRow>
        </div>
        <div class="container">
            <BRow class="row align-items-center justify-content-center g-sm-4 g-3">
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.1s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-gauge f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Boost Performance</h5>
                                    <p class="mb-0">If one thing boosts another, it causes it to increase, improve, or be
                                        more successful.
                                        Boost is also a noun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.2s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-sidebar-simple f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Advance Layout</h5>
                                    <p class="mb-0">We are providing multiple advance layout like compact, horizontal, tab
                                        and
                                        vertical.you can use as per your requirement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.3s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-device-mobile-camera f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Responsive</h5>
                                    <p class="mb-0">Responsive web design is about creating web pages that look good on all
                                        devices! A
                                        responsive web design will automatically adjust for different screen sizes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.4s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-sun-dim f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Dark layout</h5>
                                    <p class="mb-0">A dark theme displays dark surfaces across the majority of a UI. It's
                                        designed to be a
                                        supplemental mode to a default (or light) theme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.5s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-headset f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Help Desk</h5>
                                    <p class="mb-0">Help desk software is a tool that serves a wide range of customer
                                        support activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0" data-aos="fade-up" data-wow-delay="0.6s">
                        <div class="card-body">
                            <div class="media align-items-start">
                                <div class="avtar bg-light-primary flex-shrink-0">
                                    <i class="ph-duotone ph-arrow-clockwise f-24"></i>
                                </div>
                                <div class="media-body ms-3">
                                    <h5>Live customizer</h5>
                                    <p class="mb-0">Using live customizer, you can easily change any settings and
                                        options.there are
                                        sidebar
                                        options,rtl layout and dark layout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

    <section class="bg-white pt-0">
        <div class="container">
            <BRow class="row">
                <div class="col-12">
                    <div class="card bg-dark counter-block mb-0 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.7s">
                        <img src="@/assets/images/landing/img-counter-bg.svg" alt="img" class="img-fluid img-counter-bg">
                        <div class="card-body p-4 p-md-5">
                            <BRow class="row align-items-center">
                                <div class="col-lg-6 my-3">
                                    <span class="h1 text-white mb-3 d-block">High-performance, scalability and
                                        durability</span>
                                    <p class="mb-0 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the
                                        printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard</p>
                                </div>
                                <div class="col-lg-6 my-3">
                                    <BRow class="row g-3 text-center">
                                        <div class="col-4">
                                            <span class="counter text-white">150+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Components</h4>
                                        </div>
                                        <div class="col-4">
                                            <span class="counter text-white">8+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Application</h4>
                                        </div>
                                        <div class="col-4">
                                            <span class="counter text-white">100+</span>
                                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Pages</h4>
                                        </div>
                                    </BRow>
                                </div>
                            </BRow>
                        </div>
                    </div>
                </div>
            </BRow>
        </div>
    </section>

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
        <div class="footer-bottom pt-5">
            <div class="container">
                <BRow class="row align-items-center">
                    <div class="col my-1 wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                        <p class="mb-0">© Handcrafted by Team <a href="#" target="_blank">themes</a></p>
                    </div>
                    <div class="col-auto my-1">
                        <ul class="list-inline footer-sos-link mb-0">
                            <li class="list-inline-item wow animate__fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                                <a href="https://fb.com/themes">
                                    <i class="ph-duotone ph-facebook-logo f-20"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </BRow>
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