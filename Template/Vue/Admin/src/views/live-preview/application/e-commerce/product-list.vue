<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "PRODUCT-LIST",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Products list" pageTitle="E-commerce" />
        <BRow>
            <BCol class="col-sm-12">
                <BCard no-body class="table-card">
                    <BCardBody>
                        <div class="text-end p-sm-4 pb-sm-2">
                            <a href="@/application/ecom_product-add.html" class="btn btn-primary"> <i class="ti ti-plus f-18"></i> Add Product </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover tbl-product" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th class="text-end">#</th>
                                        <th>Product Detail</th>
                                        <th>Categories</th>
                                        <th class="text-end">Price</th>
                                        <th class="text-end">Qty</th>
                                        <th class="text-center">Brand</th>
                                        <th class="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow class="d-flex">
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-1.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-1.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-2.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-2.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">5</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-3.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td class="text-end">$49.9</td>
                                        <td class="text-end">21</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-x-circle text-danger f-24" data-bs-toggle="tooltip" data-bs-title="danger"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-3.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-4.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol class="col">
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-4.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-5.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol class="col">
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-5.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-4.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-4.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow class="row">
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-5.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-5.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-1.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol class="col">
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-1.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-2.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-2.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">5</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-3.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td class="text-end">$49.9</td>
                                        <td class="text-end">21</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-x-circle text-danger f-24" data-bs-toggle="tooltip" data-bs-title="danger"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-3.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-1.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-1.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-2.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-2.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">5</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-3.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td class="text-end">$49.9</td>
                                        <td class="text-end">21</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-x-circle text-danger f-24" data-bs-toggle="tooltip" data-bs-title="danger"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-3.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-4.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-4.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-5.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-5.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-4.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-4.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-5.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-5.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">7</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-1.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td class="text-end">$14.59</td>
                                        <td class="text-end">70</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-check-circle text-success f-24" data-bs-toggle="tooltip" data-bs-title="success"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-1.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">2</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-2.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Boat On-Ear Wireless</h6>
                                                    <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td class="text-end">$81.99</td>
                                        <td class="text-end">45</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-clock-countdown text-warning f-24" data-bs-toggle="tooltip" data-bs-title="warning"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-2.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end">5</td>
                                        <td>
                                            <BRow>
                                                <BCol class="col-auto pe-5">
                                                    <img src="@/assets/images/application/img-prod-3.jpg" alt="user-image" class="wid-40 rounded">
                                                </BCol>
                                                <BCol>
                                                    <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </BCol>
                                            </BRow>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td class="text-end">$49.9</td>
                                        <td class="text-end">21</td>
                                        <td class="text-center">
                                            <i class="ph-duotone ph-x-circle text-danger f-24" data-bs-toggle="tooltip" data-bs-title="danger"></i>
                                        </td>
                                        <td class="text-center">
                                            <img src="@/assets/images/application/img-prod-brand-3.png" alt="user-image" class="wid-40">
                                            <div class="prod-action-links">
                                                <ul class="list-inline me-auto mb-0">
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                        <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas">
                                                            <i class="ti ti-eye f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                        <a href="@/application/ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                                                            <i class="ti ti-edit-circle f-18"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                        <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                                                            <i class="ti ti-trash f-18"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>