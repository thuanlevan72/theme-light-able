<script>
import Layout from "@/layout/c-main.vue";
import Img1 from "@/assets/images/slider/img-slide-1.jpg"
import Img2 from "@/assets/images/slider/img-slide-2.jpg"
import Img3 from "@/assets/images/slider/img-slide-3.jpg"
import Img4 from "@/assets/images/slider/img-slide-4.jpg"
import Img5 from "@/assets/images/slider/img-slide-5.jpg"
import Img6 from "@/assets/images/slider/img-slide-6.jpg"
import Img7 from "@/assets/images/slider/img-slide-7.jpg"
export default {
    components: {
        Layout
    },
    data() {
        return {
            Img1, Img2, Img3, Img4, Img5, Img6, Img7
        }
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Carousel</h2>
                <p class="text-muted">A slideshow component for cycling through elements—images or slides of text—like a
                    carousel.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/carousel.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol xxl="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Basic Carousel</h5>
                    </BCardHeader>
                    <div class="pc-component">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <BCarousel :interval="2000" ride="carousel" class="carousel-inner">
                                <BCarouselSlide :img-src="Img1" />
                                <BCarouselSlide :img-src="Img2" />
                                <BCarouselSlide :img-src="Img3" />
                            </BCarousel>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
            <div class="col-xxl-4">
                <div class="card">
                    <BCardHeader>
                        <h5>Carousel Controls</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <BCarousel :interval="2000" ride="carousel" class="carousel-inner">
                                <BCarouselSlide :img-src="Img4" />
                                <BCarouselSlide :img-src="Img5" />
                            </BCarousel>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="sr-only">Previous</span></a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="sr-only">Next</span></a>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
            <div class="col-xxl-4">
                <div class="card">
                    <BCardHeader>
                        <h5>Carousel Indicators</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"> </li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            </ol>
                            <BCarousel :interval="2000" ride="carousel" class="carousel-inner">
                                <BCarouselSlide :img-src="Img6" />
                                <BCarouselSlide :img-src="Img7" />
                            </BCarousel>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="sr-only">Previous</span></a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="sr-only">Next</span></a>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
            <div class="col-xxl-6">
                <div class="card">
                    <BCardHeader>
                        <h5>Carousel Crossfade</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <BCarousel :interval="2000" ride="carousel" class="carousel-inner">
                                <BCarouselSlide :img-src="Img1" />
                                <BCarouselSlide :img-src="Img2" />
                                <BCarouselSlide :img-src="Img3" />
                            </BCarousel>
                            <a class="carousel-control-prev" href="#carouselExampleFade" role="button"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="sr-only">Previous</span></a>
                            <a class="carousel-control-next" href="#carouselExampleFade" role="button"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="sr-only">Next</span></a>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
            <div class="col-xxl-6">
                <div class="card">
                    <BCardHeader>
                        <h5>Carousel with Captions</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExample_Indicators_caption" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExample_Indicators_caption" data-bs-slide-to="0"
                                    class="active"></li>
                                <li data-bs-target="#carouselExample_Indicators_caption" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExample_Indicators_caption" data-bs-slide-to="2"></li>
                            </ol>
                            <BCarousel :interval="2000" ride="carousel" class="carousel-inner">
                                <BCarouselSlide>
                                    <template #img>
                                        <img src="@/assets/images/slider/img-slide-2.jpg" class="img-fluid d-block w-100" />
                                    </template>
                                     <div class="carousel-caption d-none d-md-block">
                                        <h5 class="text-white">First slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </BCarouselSlide>
                            </BCarousel>
                            <div class="carousel-item">
                                <img class="img-fluid d-block w-100" src="@/assets/images/slider/img-slide-1.jpg"
                                    alt="Second slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-white">Second slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="img-fluid d-block w-100" src="@/assets/images/slider/img-slide-3.jpg"
                                    alt="Third slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-white">Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExample_Indicators_caption" role="button"
                            data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
                                class="sr-only">Previous</span></a>
                        <a class="carousel-control-next" href="#carouselExample_Indicators_caption" role="button"
                            data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                                class="sr-only">Next</span></a>

                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
            <div class="col-xxl-6">
                <div class="card">
                    <BCardHeader>
                        <h5>Dark variant</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/light-box/l6.jpg"
                                        alt="First slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/pages/img-gallery-7.jpg"
                                        alt="Second slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/light-box/l6.jpg"
                                        alt="Third slide">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleDark" role="button"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="sr-only">Previous</span></a>
                            <a class="carousel-control-next" href="#carouselExampleDark" role="button"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="sr-only">Next</span></a>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
            <div class="col-xxl-6">
                <div class="card">
                    <BCardHeader>
                        <h5>Disable touch swiping - Mobile only</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
                            data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/slider/img-slide-3.jpg"
                                        alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/slider/img-slide-4.jpg"
                                        alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid d-block w-100" src="@/assets/images/slider/img-slide-5.jpg"
                                        alt="First slide">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </div>
            </div>
        </BRow>
    </Layout>
</template>