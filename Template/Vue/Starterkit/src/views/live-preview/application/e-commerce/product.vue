<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import simplebar from "simplebar-vue"

export default {
    name: "PRODUCT",
    components: {
        Layout, pageheader, simplebar
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Product" pageTitle="E-commerce" />
        <BRow>
            <div class="col-sm-12">
                <div class="ecom-wrapper">
                    <div class="offcanvas-xxl offcanvas-start ecom-offcanvas" tabindex="-1" id="offcanvas_mail_filter">
                        <div class="offcanvas-body p-0 sticky-xxl-top">
                            <div id="ecom-filter" class="show collapse collapse-horizontal">
                                <BCollapse id="collapse-3" visible>
                                    <div class="ecom-filter">
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center justify-content-between">
                                                <h5>Filter</h5>
                                                <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_mail_filter">
                                                    <i class="ti ti-x f-20"></i>
                                                </a>
                                            </div>
                                            <div class="scroll-block">
                                                <simplebar data-simplebar style="height: 620px">
                                                    <div class="card-body">
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a v-b-toggle.filtercollapse1 variant="primary" class="border-0 px-0 text-start w-100 pb-0">
                                                                    <div class="float-end"><i class="ti ti-chevron-down"></i>
                                                                    </div> Gender
                                                                </a>
                                                                <BCollapse visible id="filtercollapse1">
                                                                    <div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="genderfilter1" value="option1">
                                                                            <label class="form-check-label" for="genderfilter1">Male</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="genderfilter2" value="option2">
                                                                            <label class="form-check-label" for="genderfilter2">Female</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="genderfilter3" value="option3">
                                                                            <label class="form-check-label" for="genderfilter3">Kids</label>
                                                                        </div>
                                                                    </div>
                                                                </BCollapse>
                                                            </li>
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a v-b-toggle.filtercollapse2 variant="primary" class="border-0 px-0 text-start w-100 pb-0">
                                                                    <div class="float-end"><i class="ti ti-chevron-down"></i>
                                                                    </div> Categories
                                                                </a>
                                                                <BCollapse visible id="filtercollapse2">
                                                                    <div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter1" value="option1">
                                                                            <label class="form-check-label" for="categoryfilter1">All</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter2" value="option2">
                                                                            <label class="form-check-label" for="categoryfilter2">Electronics</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter3" value="option3">
                                                                            <label class="form-check-label" for="categoryfilter3">Fashion</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter4" value="option1">
                                                                            <label class="form-check-label" for="categoryfilter4">Kitchen</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter5" value="option2">
                                                                            <label class="form-check-label" for="categoryfilter5">Books</label>
                                                                        </div>
                                                                        <div class="form-check my-2">
                                                                            <input class="form-check-input" type="checkbox" id="categoryfilter6" value="option3">
                                                                            <label class="form-check-label" for="categoryfilter6">Toys</label>
                                                                        </div>
                                                                    </div>
                                                                </BCollapse>
                                                            </li>
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a v-b-toggle.filtercollapse3 variant="primary" class="border-0 px-0 text-start w-100 pb-0">
                                                                    <div class="float-end"><i class="ti ti-chevron-down"></i>
                                                                    </div> Colors
                                                                </a>
                                                                <BCollapse visible id="filtercollapse3">
                                                                    <div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-primary"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-secondary"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-danger"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-success"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-warning"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-info"></i>
                                                                        </div>
                                                                        <div class="form-check form-check-inline color-checkbox">
                                                                            <input class="form-check-input" type="checkbox">
                                                                            <i class="fas fa-circle text-dark"></i>
                                                                        </div>
                                                                    </div>
                                                                </BCollapse>
                                                            </li>
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a v-b-toggle.filtercollapse4 variant="primary" class="border-0 px-0 text-start w-100 pb-0">
                                                                    <div class="float-end"><i class="ti ti-chevron-down"></i>
                                                                    </div> Price
                                                                </a>
                                                                <BCollapse visible id="filtercollapse4">
                                                                    <BRow>
                                                                        <BCol class="col-6">
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter1" value="option1">
                                                                                <label class="form-check-label" for="pricefilter1">Below $10</label>
                                                                            </div>
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter2" value="option2">
                                                                                <label class="form-check-label" for="pricefilter2">$50 - $100</label>
                                                                            </div>
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter3" value="option3">
                                                                                <label class="form-check-label" for="pricefilter3">$150 - $200</label>
                                                                            </div>
                                                                        </BCol>
                                                                        <BCol class="col-6">
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter4" value="option1">
                                                                                <label class="form-check-label" for="pricefilter4">$10 - $50</label>
                                                                            </div>
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter5" value="option2">
                                                                                <label class="form-check-label" for="pricefilter5">$100 - $150</label>
                                                                            </div>
                                                                            <div class="form-check my-2">
                                                                                <input class="form-check-input" type="radio" name="price" id="pricefilter6" value="option3">
                                                                                <label class="form-check-label" for="pricefilter6">Over $200</label>
                                                                            </div>
                                                                        </BCol>
                                                                    </BRow>
                                                                </BCollapse>
                                                            </li>
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a v-b-toggle.filtercollapse5 variant="primary" class="border-0 px-0 text-start w-100 pb-0">
                                                                    <div class="float-end"><i class="ti ti-chevron-down"></i>
                                                                    </div> Price
                                                                </a>
                                                                <BCollapse visible id="filtercollapse5">
                                                                    <div>
                                                                        <div class="form-check mb-2">
                                                                            <input class="form-check-input" type="checkbox" value="" id="chkratt1">
                                                                            <label class="form-check-label" for="chkratt1">4★
                                                                                &amp;
                                                                                above</label>
                                                                        </div>
                                                                        <div class="form-check mb-2">
                                                                            <input class="form-check-input" type="checkbox" value="" id="chkratt2">
                                                                            <label class="form-check-label" for="chkratt2">3★
                                                                                &amp;
                                                                                above</label>
                                                                        </div>
                                                                        <div class="form-check mb-2">
                                                                            <input class="form-check-input" type="checkbox" value="" id="chkratt3">
                                                                            <label class="form-check-label" for="chkratt3">2★
                                                                                &amp;
                                                                                above</label>
                                                                        </div>
                                                                        <div class="form-check mb-2">
                                                                            <input class="form-check-input" type="checkbox" value="" id="chkratt4">
                                                                            <label class="form-check-label" for="chkratt4">1★
                                                                                &amp;
                                                                                above</label>
                                                                        </div>
                                                                    </div>
                                                                </BCollapse>
                                                            </li>
                                                            <li class="list-group-item border-0 px-0 py-2">
                                                                <a href="#" class="btn btn-light-danger w-100">Clear All</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </simplebar>
                                            </div>
                                        </div>
                                    </div>
                                </BCollapse>
                            </div>
                        </div>
                    </div>
                    <div class="ecom-content">
                        <div class="d-sm-flex align-items-center mb-4">
                            <ul class="list-inline me-auto my-1">
                                <li class="list-inline-item">
                                    <form class="form-search">
                                        <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                                        <input type="search" class="form-control" placeholder="Search Products">
                                    </form>
                                </li>
                            </ul>
                            <ul class="list-inline ms-auto my-1">
                                <li class="list-inline-item">
                                    <select class="form-select">
                                        <option>Price: High To Low</option>
                                        <option>Price: Low To High</option>
                                        <option>Popularity</option>
                                        <option>Discount</option>
                                        <option>Fresh Arrivals</option>
                                    </select>
                                </li>
                                <li class="list-inline-item align-bottom">
                                    <BButton variant="link-secondary" v-b-toggle.collapse-3 class="m-1"> <i class="ti ti-filter f-16"></i>Filter</BButton>
                                </li>
                            </ul>
                        </div>
                        <BRow>
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard no-body class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-1.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard no-body class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-2.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="card-body position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                        <BCardBody class="card-body position-absolute start-0 top-0">
                                            <span class="badge bg-danger badge-prod-card">30%</span>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard no-body class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-3.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-4.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
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
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-5.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard no-body class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-6.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                        <BcardBody class="position-absolute start-0 top-0">
                                            <span class="badge bg-danger badge-prod-card">30%</span>
                                        </BcardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard no-body class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-7.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <BCard class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-8.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="card-body position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                        <BCardBody class="card-body position-absolute start-0 top-0">
                                            <span class="badge bg-danger badge-prod-card">30%</span>
                                        </BCardBody>
                                    </div>
                                    <BCardBody>
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                            <BCol class="col-sm-6 col-xl-4">
                                <Bcard class="product-card">
                                    <div class="card-img-top">
                                        <router-link to="/product-details">
                                            <img src="@/assets/images/application/img-prod-9.jpg" alt="image" class="img-prod img-fluid">
                                        </router-link>
                                        <BCardBody class="position-absolute end-0 top-0">
                                            <div class="form-check prod-likes">
                                                <input type="checkbox" class="form-check-input">
                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </BCardBody>
                                    </div>
                                    <div class="card-body">
                                        <router-link to="/product-details">
                                            <p class="prod-content mb-0 text-muted">Apple watch -4</p>
                                        </router-link>
                                        <div class="d-flex align-items-center justify-content-between mt-2 mb-3 flex-wrap gap-1">
                                            <h4 class="mb-0 text-truncate"><b>$299.00</b> <span class="text-sm text-muted f-w-400 text-decoration-line-through">$399.00</span>
                                            </h4>
                                            <div class="d-inline-flex align-items-center">
                                                <i class="ph-duotone ph-star text-warning me-1"></i>
                                                4.5 <small class="text-muted">/ 5</small>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <a href="#" class="avtar avtar-s btn-link-secondary btn-prod-card" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
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
                                    </div>
                                </BCard>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>