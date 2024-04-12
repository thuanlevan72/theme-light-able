<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y } from 'swiper/modules';
import { HeartIcon } from "@zhuowenli/vue-feather-icons";
export default {
    name: "PRODUCT-DETAIL",
    components: {
        Layout, pageheader, Swiper, SwiperSlide, HeartIcon
    },
    setup() {
        return {
            modules: [Autoplay, A11y],
        };
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Products" pageTitle="E-commerce" />
        <BRow>
            <div class="col-sm-12">
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol md="6">
                                <div class="sticky-md-top product-sticky">
                                    <div id="carouselExampleCaptions" class="carousel slide ecomm-prod-slider"
                                        data-bs-ride="carousel">
                                        <swiper :pagination="true" :modules="modules" class="mySwiper" slides-per-view="1"
                                            :space-between="20" :centered-slides="true" :autoplay="{ running: true }"
                                            :loop="true">
                                            <div class="carousel-inner bg-light rounded position-relative">
                                                <BCardBody class="position-absolute end-0 top-0">
                                                    <div class="form-check prod-likes">
                                                        <input type="checkbox" class="form-check-input">
                                                        <i data-feather="heart" class="prod-likes-icon"></i>
                                                    </div>
                                                </BCardBody>
                                                <BCardBody class="position-absolute bottom-0 end-0">
                                                    <ul class="list-inline ms-auto mb-0 prod-likes">
                                                        <li class="list-inline-item m-0">
                                                            <a href="#"
                                                                class="avtar avtar-xs text-white text-hover-primary">
                                                                <i class="ti ti-zoom-in f-18"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item m-0">
                                                            <a href="#"
                                                                class="avtar avtar-xs text-white text-hover-primary">
                                                                <i class="ti ti-zoom-out f-18"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item m-0">
                                                            <a href="#"
                                                                class="avtar avtar-xs text-white text-hover-primary">
                                                                <i class="ti ti-rotate-clockwise f-18"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </BCardBody>

                                                <swiper-slide class="carousel-item active">
                                                    <img src="@/assets/images/application/img-prod-1.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-2.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-3.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-4.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-5.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-6.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-7.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                                <swiper-slide class="carousel-item">
                                                    <img src="@/assets/images/application/img-prod-8.jpg"
                                                        class="d-block w-100" alt="Product images">
                                                </swiper-slide>
                                            </div>
                                        </swiper>
                                        <ol
                                            class="list-inline carousel-indicators position-relative product-carousel-indicators my-sm-3 mx-0">
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                                class="list-inline-item w-25 h-auto active">
                                                <img src="@/assets/images/application/img-prod-1.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-2.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-3.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-4.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-5.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-6.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-7.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                                                class="list-inline-item w-25 h-auto">
                                                <img src="@/assets/images/application/img-prod-8.jpg"
                                                    class="d-block wid-50 rounded" alt="Product images">
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </BCol>
                            <BCol md="6">
                                <span class="badge bg-success f-14">In stock</span>
                                <h5 class="my-3">Apple Watch SE Smartwatch (GPS, 40mm) (Heart Rate Monitoring)</h5>
                                <div class="star f-18 mb-3">
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star-half-alt text-warning"></i>
                                    <i class="far fa-star text-muted"></i>
                                    <span class="text-sm text-muted">(4.0)</span>
                                </div>
                                <h5 class="mt-4 mb-sm-1 mb-0">Offer</h5>
                                <div class="offer-check-block">
                                    <div class="offer-check border rounded p-3">
                                        <div class="form-check">
                                            <input type="radio" name="radio1" class="form-check-input input-primary"
                                                id="customCheckdef1" checked="">
                                            <label class="form-check-label d-block" for="customCheckdef1">
                                                <span class="h6 mb-0 d-block">No Cost EMI</span>
                                                <span class="text-muted offer-details">Upto ₹2,322.51 EMI interest savings
                                                    on select Credit CardsUpto ₹2,322.51 EMI interest savings on select
                                                    Credit Cards</span>
                                                <span class="h6 mb-0 text-primary">1 Offer <i
                                                        class="ti ti-arrow-narrow-right"></i></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="offer-check border rounded p-3">
                                        <div class="form-check">
                                            <input type="radio" name="radio1" class="form-check-input input-primary"
                                                id="customCheckdef2">
                                            <label class="form-check-label d-block" for="customCheckdef2">
                                                <span class="h6 mb-0 d-block">Bank Offer</span>
                                                <span class="text-muted offer-details">Upto ₹1,250.00 discount on select
                                                    Credit CardsUpto ₹2,322.51 EMI interest savings on select Credit
                                                    Cards</span>
                                                <span class="h6 mb-0 text-primary">1 Offer <i
                                                        class="ti ti-arrow-narrow-right"></i></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="offer-check border rounded p-3">
                                        <div class="form-check">
                                            <input type="radio" name="radio1" class="form-check-input input-primary"
                                                id="customCheckdef3">
                                            <label class="form-check-label d-block" for="customCheckdef3">
                                                <span class="h6 mb-0 d-block">No Cost EMI</span>
                                                <span class="text-muted offer-details">Upto ₹2,322.51 EMI interest savings
                                                    on select Credit CardsUpto ₹2,322.51 EMI interest savings on select
                                                    Credit Cards</span>
                                                <span class="h6 mb-0 text-primary">1 Offer <i
                                                        class="ti ti-arrow-narrow-right"></i></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="offer-check border rounded p-3">
                                        <div class="form-check">
                                            <input type="radio" name="radio1" class="form-check-input input-primary"
                                                id="customCheckdef4">
                                            <label class="form-check-label d-block" for="customCheckdef4">
                                                <span class="h6 mb-0 d-block">Bank Offer</span>
                                                <span class="text-muted offer-details">Upto ₹1,250.00 discount on select
                                                    Credit CardsUpto ₹2,322.51 EMI interest savings on select Credit
                                                    Cards</span>
                                                <span class="h6 mb-0 text-primary">1 Offer <i
                                                        class="ti ti-arrow-narrow-right"></i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <h5 class="mt-4 mb-sm-3 mb-2 f-w-500">About this item</h5>
                                <ul>
                                    <li class="mb-2">Care Instructions: Hand Wash Only</li>
                                    <li class="mb-2">Fit Type: Regular</li>
                                    <li class="mb-2">Dark Blue Regular Women Jeans</li>
                                    <li class="mb-2">Fabric : 100% Cotton</li>
                                </ul>
                                <BRow class="form-group">
                                    <BCol lg="3" sm="12" class="col-form-label">Colors <span
                                            class="text-danger">*</span></BCol>
                                    <BCol lg="6" md="12" sm="12" class="d-flex align-items-center">
                                        <div class="form-check form-check-inline color-checkbox mb-0">
                                            <input class="form-check-input" type="radio" name="product_color" checked>
                                            <i class="fas fa-circle text-primary"></i>
                                        </div>
                                        <div class="form-check form-check-inline color-checkbox mb-0">
                                            <input class="form-check-input" type="radio" name="product_color">
                                            <i class="fas fa-circle text-secondary"></i>
                                        </div>
                                        <div class="form-check form-check-inline color-checkbox mb-0">
                                            <input class="form-check-input" type="radio" name="product_color">
                                            <i class="fas fa-circle text-danger"></i>
                                        </div>
                                        <div class="form-check form-check-inline color-checkbox mb-0">
                                            <input class="form-check-input" type="radio" name="product_color">
                                            <i class="fas fa-circle text-dark"></i>
                                        </div>
                                    </BCol>
                                </BRow>
                                <BRow class="form-group align-items-center">
                                    <BCol lg="3" sm="12" class="col-form-label">
                                        <span class="d-block">Size</span>
                                        <a class="link-primary text-sm text-decoration-underline">Size Chart?</a></BCol>
                                    <BCol class="col-lg-9 col-md-12 col-sm-12">
                                        <BRow class="g-2">
                                            <BCol class="col-auto">
                                                <input type="radio" class="btn-check" id="btnrdolite1" name="btn_radio2"
                                                    checked>
                                                <label class="btn btn-sm btn-light-primary" for="btnrdolite1">Small</label>
                                            </BCol>
                                            <BCol class="col-auto">
                                                <input type="radio" class="btn-check" id="btnrdolite2" name="btn_radio2">
                                                <label class="btn btn-sm btn-light-primary" for="btnrdolite2">Medium</label>
                                            </BCol>
                                            <BCol class="col-auto">
                                                <input type="radio" class="btn-check" id="btnrdolite3" name="btn_radio2">
                                                <label class="btn btn-sm btn-light-primary" for="btnrdolite3">Large</label>
                                            </BCol>
                                        </BRow>
                                    </BCol>
                                </BRow>
                                <BRow class="form-group">
                                    <BCol class="col-form-label col-lg-3 col-sm-12">Quantity <span
                                            class="text-danger">*</span></BCol>
                                    <BCol class="col-lg-6 col-md-12 col-sm-12">
                                        <div class="btn-group btn-group-sm mb-2 border" role="group">
                                            <button type="button" id="decrease" onclick="decreaseValue('number')"
                                                class="btn btn-link-secondary"><i class="ti ti-minus"></i></button>
                                            <input
                                                class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                                type="text" id="number" value="0">
                                            <button type="button" id="increase" onclick="increaseValue('number')"
                                                class="btn btn-link-secondary"><i class="ti ti-plus"></i></button>
                                        </div>
                                    </BCol>
                                </BRow>
                                <h3 class="mb-4"><b>$299.00</b><span
                                        class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                </h3>
                                <BRow>
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </BCol>
                                    <BCol Cols="6">
                                        <div class="d-grid">
                                            <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <!-- <div class="card-header pb-0"> -->
                    <!-- <ul class="nav nav-tabs profile-tabs mb-0" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="ecomtab-tab-1" data-bs-toggle="tab" href="#ecomtab-1"
                                    role="tab" aria-controls="ecomtab-1" aria-selected="true">Features
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="ecomtab-tab-2" data-bs-toggle="tab" href="#ecomtab-2" role="tab"
                                    aria-controls="ecomtab-2" aria-selected="true">Specifications
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="ecomtab-tab-3" data-bs-toggle="tab" href="#ecomtab-3" role="tab"
                                    aria-controls="ecomtab-3" aria-selected="true">Overview
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="ecomtab-tab-4" data-bs-toggle="tab" href="#ecomtab-4" role="tab"
                                    aria-controls="ecomtab-4" aria-selected="true">Reviews<span
                                        class="badge bg-light-primary rounded-pill px-2 ms-2">275</span>
                                </a>
                            </li>
                        </ul> -->
                    <!-- </div> -->

                    <BCardBody>
                        <BTabs class="tab-content" nav-class="profile-tabs mb-0">
                            <BTab title="Features" active>
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td class="text-muted py-1">Band :</td>
                                                <td class="py-1">Smart Band</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted py-1">Compatible Devices :</td>
                                                <td class="py-1">Smartphones</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted py-1">Ideal For :</td>
                                                <td class="py-1">Unisex</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted py-1">Lifestyle :</td>
                                                <td class="py-1">Fitness | Indoor | Sports | Swimming | Outdoor</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted py-1">Basic Features :</td>
                                                <td class="py-1">Calendar | Date & Time | Timer/Stop Watch</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted py-1">Health Tracker :</td>
                                                <td class="py-1">Heart Rate | Exercise Tracker</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BTab>
                            <BTab title="Specifications" class="tab-pane" id="ecomtab-2" role="tabpanel"
                                aria-labelledby="ecomtab-tab-2">
                                <BRow class="gy-3">
                                    <BCol md="6">
                                        <h5>Product Category</h5>
                                        <hr class="mb-3 mt-1">
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-muted py-1 border-top-0">Wearable Device Type:</td>
                                                        <td class="py-1 border-top-0">Smart Band</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted py-1">Compatible Devices :</td>
                                                        <td class="py-1">Smartphones</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted py-1">Ideal For :</td>
                                                        <td class="py-1">Unisex</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </BCol>
                                    <BCol md="6">
                                        <h5>Manufacturer Details</h5>
                                        <hr class="mb-3 mt-1">
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-muted py-1 border-top-0">Brand :</td>
                                                        <td class="py-1 border-top-0">Apple</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted py-1">Model Series :</td>
                                                        <td class="py-1">Watch SE</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted py-1">Model Number :</td>
                                                        <td class="py-1">MYDT2HN/A</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BTab>
                            <BTab title="Overview" class="tab-pane" id="ecomtab-3" role="tabpanel"
                                aria-labelledby="ecomtab-tab-3">
                                <div class="table-responsive">
                                    <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s,
                                        <strong class="text-body">“When an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.”</strong>
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially
                                        unchanged. It was popularized in the 1960s with the release of Lestrade sheets
                                        containing Lorem Ipsum passages, and
                                        more recently with desktop publishing software like PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
                                    <p class="text-muted mb-0">It was popularized in the 1960s with the release of Learjet
                                        sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like PageMaker including versions of Lorem
                                        Ipsum.</p>
                                </div>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <div>
                                        Reviews <span class="badge bg-light-primary rounded-pill px-2 ms-2">275</span>
                                    </div>
                                </template>
                                <div class="card">
                                    <div class="card-body">
                                        <BRow class="justify-content-between align-items-center">
                                            <BCol class="col-xxl-4 col-xl-5">
                                                <h2 class="mb-3"><b>3.5<small class="text-muted f-18">/5</small></b></h2>
                                                <p class="mb-2 text-muted">Based on 275 reviews</p>
                                                <div class="star mb-3 f-20">
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star-half-alt text-warning"></i>
                                                    <i class="far fa-star text-muted"></i>
                                                </div>
                                            </BCol>
                                            <BCol xl="5" class="col-xxl-4 col-xl-5">
                                                <div class="d-flex align-items-center">
                                                    <div class="w-100">
                                                        <BRow class="align-items-center my-2">
                                                            <BCol>
                                                                <div class="progress" style="height: 4px">
                                                                    <div class="progress-bar bg-warning" style="width: 30%">
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 text-muted">5 Stars</p>
                                                            </BCol>
                                                        </BRow>
                                                        <BRow class=" align-items-center my-2">
                                                            <BCol>
                                                                <div class="progress" style="height: 4px">
                                                                    <div class="progress-bar bg-warning" style="width: 60%">
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 text-muted">4 Stars</p>
                                                            </BCol>
                                                        </BRow>
                                                        <BRow class="align-items-center my-2">
                                                            <BCol class="col">
                                                                <div class="progress" style="height: 4px">
                                                                    <div class="progress-bar bg-warning" style="width: 75%">
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 text-muted">3 Stars</p>
                                                            </BCol>
                                                        </BRow>
                                                        <BRow class="align-items-center my-2">
                                                            <BCol>
                                                                <div class="progress" style="height: 4px">
                                                                    <div class="progress-bar bg-warning" style="width: 40%">
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 text-muted">2 Stars</p>
                                                            </BCol>
                                                        </BRow>
                                                        <BRow class="align-items-center">
                                                            <BCol class="col">
                                                                <div class="progress" style="height: 4px">
                                                                    <div class="progress-bar bg-warning" style="width: 55%">
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 text-muted">1 Stars</p>
                                                            </BCol>
                                                        </BRow>
                                                    </div>
                                                </div>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </div>
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="media align-items-start">
                                            <div class="chat-avtar">
                                                <img class="img-radius img-fluid wid-40"
                                                    src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                                <div class="bg-success chat-badge"></div>
                                            </div>
                                            <div class="media-body ms-3">
                                                <h6 class="mb-1">Harriet Wilson</h6>
                                                <p class="text-muted text-sm mb-1">2 hour ago</p>
                                                <div class="star">
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star-half-alt text-warning"></i>
                                                    <i class="far fa-star text-muted"></i>
                                                </div>
                                                <p class="mb-0 text-muted mt-1">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500.</p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="media align-items-start">
                                            <div class="chat-avtar">
                                                <img class="img-radius img-fluid wid-40"
                                                    src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                                <div class="bg-success chat-badge"></div>
                                            </div>
                                            <div class="media-body ms-3">
                                                <h6 class="mb-1">Lou Olson</h6>
                                                <p class="text-muted text-sm mb-1">2 hour ago</p>
                                                <div class="star">
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star text-warning"></i>
                                                    <i class="fas fa-star-half-alt text-warning"></i>
                                                    <i class="far fa-star text-muted"></i>
                                                    <i class="far fa-star text-muted"></i>
                                                </div>
                                                <p class="mb-2 text-muted mt-1">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500.</p>
                                                <a href="#" class="link-primary mb-1">https://phoenixcoded.net/</a>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                                <div class="text-center mt-3">
                                    <button class="btn btn-link-primary">View more comments</button>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Related Product</h5>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="gy-3">
                            <BCol xl="4" class="col-sm-6 col-xxl-3 col-xl-4">
                                <BCard no-body class="product-card mb-0">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-2.jpg" alt="image"
                                                class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="card-body position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <HeartIcon class="prod-likes-icon"></HeartIcon>
                                            </div>
                                        </BCardBody>
                                        <BCardBody class="position-absolute start-0 top-0">
                                            <span class="badge bg-danger badge-prod-card">30%</span>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span
                                                    class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card">
                                                    <i class="ph-duotone ph-eye f-18"></i>
                                                </a>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-grid">
                                                    <button class="btn btn-link-secondary btn-prod-card">Add to
                                                        cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xl="4" class="col-sm-6 col-xxl-3 col-xl-4">
                                <div class="card product-card mb-0">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-3.jpg" alt="image"
                                                class="img-prod img-fluid">
                                        </router-link>
                                        <div class="card-body position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <HeartIcon class="prod-likes-icon"></HeartIcon>
                                            </div>
                                        </div>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span
                                                    class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card">
                                                    <i class="ph-duotone ph-eye f-18"></i>
                                                </a>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-grid">
                                                    <button class="btn btn-link-secondary btn-prod-card">Add to
                                                        cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </div>
                            </BCol>
                            <BCol xl="4" class="col-sm-6 col-xxl-3 col-xl-4">
                                <BCard no-body class="product-card mb-0">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-4.jpg" alt="image"
                                                class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <HeartIcon class="prod-likes-icon"></HeartIcon>
                                            </div>
                                        </BCardBody>
                                        <BCardBody class="position-absolute start-0 top-0">
                                            <span class="badge bg-danger badge-prod-card">30%</span>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span
                                                    class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card">
                                                    <i class="ph-duotone ph-eye f-18"></i>
                                                </a>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-grid">
                                                    <button class="btn btn-link-secondary btn-prod-card">Add to
                                                        cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xl="4" class="col-sm-6 col-xxl-3 col-xl-4">
                                <BCard no-body class="product-card mb-0">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-5.jpg" alt="image"
                                                class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <HeartIcon class="prod-likes-icon"></HeartIcon>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span
                                                    class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card">
                                                    <i class="ph-duotone ph-eye f-18"></i>
                                                </a>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-grid">
                                                    <button class="btn btn-link-secondary btn-prod-card">Add to
                                                        cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </div>
        </BRow>
    </Layout>
</template>