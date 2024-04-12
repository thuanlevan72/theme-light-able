<script>
import Layout from "@/layout/c-main.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default {
    components: {
        Layout,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
        };
    },
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Slider</h2>
                <p class="text-muted">tiny-slider works with static content and it works in the browser only. If the HTML is
                    loaded dynamically.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="http://ganlanyuan.github.io/tiny-slider/demo/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Slider1</h5>
                    </BCardHeader>
                    <BCardBody>
                        <swiper :navigation="true" :autoplay="true" :modules="modules" :loop="true" class="mySwiper">
                            <swiper-slide> <img src="@/assets/images/slider/img-slide-1.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                            <swiper-slide><img src="@/assets/images/slider/img-slide-2.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                            <swiper-slide> <img src="@/assets/images/slider/img-slide-3.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                        </swiper>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Vertical</h5>
                    </BCardHeader>
                    <BCardBody>
                        <swiper :navigation="true" :autoplay="true" :modules="modules" :loop="true" class="mySwiper">
                            <swiper-slide> <img src="@/assets/images/slider/img-slide-1.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                            <swiper-slide><img src="@/assets/images/slider/img-slide-2.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                            <swiper-slide> <img src="@/assets/images/slider/img-slide-3.jpg" alt=""
                                    class="img-fluid"></swiper-slide>
                        </swiper>
                        <!-- <div class="slider2 owl-carousel owl-theme">
                            <div class="item">
                                <img src="@/assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="item">
                                <img src="@/assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="item">
                                <img src="@/assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid">
                            </div>
                        </div> -->
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Customize</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div id="slider3">
                            <swiper :slidesPerView="3" :autoplay="true" :spaceBetween="30" :navigation="true"
                                :modules="modules" :loop="true" class="mySwiper">
                                <swiper-slide> <img src="@/assets/images/slider/img-slide-1.jpg" alt=""
                                        class="img-fluid"></swiper-slide>
                                <swiper-slide><img src="@/assets/images/slider/img-slide-2.jpg" alt=""
                                        class="img-fluid"></swiper-slide>
                                <swiper-slide> <img src="@/assets/images/slider/img-slide-3.jpg" alt=""
                                        class="img-fluid"></swiper-slide>
                            </swiper>
                            <!-- <div class="customize" id="customize">
                                <div>
                                    <div>
                                        <img src="@/assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src="@/assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src="@/assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src="@/assets/images/slider/img-slide-4.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div> -->
                            <div class="customize-tools">
                                <ul class="thumbnails" id="customize-thumbnails">
                                    <li>
                                        <img src="@/assets/images/slider/img-slide-1.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="@/assets/images/slider/img-slide-2.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="@/assets/images/slider/img-slide-3.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="@/assets/images/slider/img-slide-4.jpg" alt="">
                                    </li>
                                </ul>
                                <ul class="controls" id="customize-controls">
                                    <li class="prev">
                                        <i class="feather icon-chevron-left"></i>
                                    </li>
                                    <li class="next">
                                        <i class="feather icon-chevron-right"></i>
                                    </li>
                                </ul>
                                <div class="playbutton-wrapper">
                                    <button id="customize-toggle">Pause</button>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>