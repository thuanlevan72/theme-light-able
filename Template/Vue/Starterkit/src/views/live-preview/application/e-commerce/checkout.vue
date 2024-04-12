<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { BCardBody } from "bootstrap-vue-next";

export default {
    name: "CHECKOUT",
     data() {
        return {
            counter: 0
        };
    },
    methods: {
        decreaseValue() {
            if (this.counter > 0) {
                this.counter--;
            }
        },
        increaseValue() {
            this.counter++;
        }
    },
    components: {
        Layout, pageheader,
        BCardBody
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Checkout" pageTitle="E-commerce" />
        <BRow>
            <BCol sm="12">
                    <BCardBody class="p-0">
                            <BTabs class="mb-3" navClass="nav nav-tabs checkout-tabs mb-0" content-class="mt-3" pills>
                                <BTab>
                                    <template #title>
                                        <div class="media align-items-center">
                                            <div class="avtar avtar-s">
                                                <i class="ti ti-shopping-cart"></i>
                                            </div>
                                            <div class="media-body ms-2">
                                                <h5 class="mb-0">Cart Details</h5>
                                            </div>
                                        </div>
                                    </template>
                                    <BRow class="gy-4">
                                        <BCol xl="8">
                                            <BCard no-body>
                                                <BCardHeader>
                                                    <BRow class="align-items-center">
                                                        <BCol>
                                                            <div class="progress" style="height: 6px">
                                                                <div class="progress-bar bg-primary" style="width: 33%"></div>
                                                            </div>
                                                        </BCol>
                                                        <BCol class="col-auto">
                                                            <p class="mb-0 h6">Step 1</p>
                                                        </BCol>
                                                    </BRow>
                                                </BCardHeader>
                                                <BCardBody class="border-bottom">
                                                    <h5 class="mb-0">Cart Item <span class="ms-2 f-14 px-2 badge bg-light-secondary rounded-pill">3</span></h5>
                                                </BCardBody>
                                                <BCardBody class="p-0 table-body">
                                                    <div class="table-responsive">
                                                        <table class="table mb-0" id="pc-dt-simple">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th class="text-end">Price</th>
                                                                    <th class="text-center">Quantity</th>
                                                                    <th class="text-end">Total</th>
                                                                    <th class="text-end"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div class="media align-items-center">
                                                                            <img src="@/assets/images/application/img-prod-2.jpg" alt="image" class="bg-light wid-50 rounded">
                                                                            <div class="media-body ms-3">
                                                                                <h5 class="mb-1">Apple MacBook Pro</h5>
                                                                                <p class="text-sm text-muted mb-0">Dark Red</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                        <span class="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="btn-group btn-group-sm mb-2 border" role="group">
                                                                            <button type="button" @click="decreaseValue('number')" class="btn btn-link-secondary"><i class="ti ti-minus"></i></button>
                                                                            <input class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none" type="text" id="number" value="0">
                                                                            <button type="button" @click="increaseValue('number')" class="btn btn-link-secondary"><i class="ti ti-plus"></i></button>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i class="ti ti-trash f-18"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="media align-items-center">
                                                                            <img src="@/assets/images/application/img-prod-3.jpg" alt="image" class="bg-light wid-50 rounded">
                                                                            <div class="media-body ms-3">
                                                                                <h5 class="mb-1">Apple MacBook Pro</h5>
                                                                                <p class="text-sm text-muted mb-0">Dark Red</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                        <span class="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="btn-group btn-group-sm mb-2 border" role="group">
                                                                            <button type="button" @click="decreaseValue('number2')" class="btn btn-link-secondary"><i class="ti ti-minus"></i></button>
                                                                            <input class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none" type="text" id="number2" value="0">
                                                                            <button type="button" @click="increaseValue('number2')" class="btn btn-link-secondary"><i class="ti ti-plus"></i></button>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i class="ti ti-trash f-18"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="media align-items-center">
                                                                            <img src="@/assets/images/application/img-prod-4.jpg" alt="image" class="bg-light wid-50 rounded">
                                                                            <div class="media-body ms-3">
                                                                                <h5 class="mb-1">Apple MacBook Pro</h5>
                                                                                <p class="text-sm text-muted mb-0">Dark Red</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                        <span class="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="btn-group btn-group-sm mb-2 border" role="group">
                                                                            <button type="button" @click="decreaseValue('number1')" class="btn btn-link-secondary"><i class="ti ti-minus"></i></button>
                                                                            <input class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none" type="text" id="number1" value="0">
                                                                            <button type="button" @click="increaseValue('number1')" class="btn btn-link-secondary"><i class="ti ti-plus"></i></button>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <h5 class="mb-0">$100.00</h5>
                                                                    </td>
                                                                    <td class="text-end">
                                                                        <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                            <i class="ti ti-trash f-18"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </BCardBody>
                                            </BCard>
                                            <div class="text-end">
                                                <router-link to="/product" class="btn btn-link-secondary d-inline-flex align-items-center"><i class="ti ti-chevron-left me-2"></i> Back to Shopping</router-link>
                                            </div>
                                        </BCol>
                                        <BCol xl="4">
                                            <BCard no-body>
                                                <BCardBody>
                                                    <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal" data-bs-target="#couponModal">
                                                        Have a coupon code?
                                                    </button>
                                                    <div class="input-group my-2">
                                                        <input type="text" class="form-control" placeholder="Discount Coupon">
                                                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                                                    </div>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardBody class="py-2">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item px-0">
                                                            <h5 class="mb-0">Order Summary</h5>
                                                        </li>
                                                        <li class="list-group-item px-0">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">$300.00</h5>
                                                            </div><span class="text-muted">Sub Total</span>
                                                        </li>
                                                        <li class="list-group-item px-0">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">-</h5>
                                                            </div><span class="text-muted">Estimated Delivery</span>
                                                        </li>
                                                        <li class="list-group-item px-0">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">-</h5>
                                                            </div><span class="text-muted">Voucher</span>
                                                        </li>
                                                    </ul>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardBody class="py-2">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item px-0">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">$300.00</h5>
                                                            </div>
                                                            <h5 class="mb-0 d-inline-block">Total</h5>
                                                        </li>
                                                    </ul>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardBody>
                                                    <div class="d-flex align-items-center text-muted">
                                                        <div class="avtar avtar-s bg-light-primary flex-shrink-0 me-2">
                                                            <i class="material-icons-two-tone text-primary f-20">security</i>
                                                        </div>
                                                        <span class="text-muted text-sm w-100">Safe & Secure Payment. Easy returns. 100%
                                                            Athentic
                                                            products.</span>
                                                    </div>
                                                </BCardBody>
                                            </BCard>
                                            <div class="d-grid mb-3">
                                                <button class="btn btn-primary">Place an Order</button>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BTab>
                                <BTab>
                                    <template #title>
                                        <!-- Your provided code snippet goes here -->
                                        <div class="media align-items-center">
                                            <div class="avtar avtar-s">
                                                <i class="ti ti-building-skyscraper"></i>
                                            </div>
                                            <div class="media-body ms-2">
                                                <h5 class="mb-0">Shipping Information</h5>
                                            </div>
                                        </div>
                                    </template>
                                    <BRow>
                                        <BCol xl="8">
                                            <BCard no-body>
                                                <BCardHeader>
                                                    <BRow class="align-items-center">
                                                        <BCol>
                                                            <div class="progress" style="height: 6px">
                                                                <div class="progress-bar bg-primary" style="width: 66%"></div>
                                                            </div>
                                                        </BCol>
                                                        <BCol class="col-auto">
                                                            <p class="mb-0 h6">Step 2</p>
                                                        </BCol>
                                                    </BRow>
                                                </BCardHeader>
                                                <div class="collapse multi-collapse show" id="multiCollapseExample1">
                                                    <BCardBody class="border-bottom">
                                                        <BRow class="align-items-center">
                                                            <BCol>
                                                                <h5 class="mb-0">Shipping Information</h5>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Add new
                                                                    Address</button>
                                                            </BCol>
                                                        </BRow>
                                                    </BCardBody>
                                                    <BCardBody>
                                                        <div class="address-check-block">
                                                            <div class="address-check border rounded p-3">
                                                                <div class="form-check">
                                                                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-1" checked="">
                                                                    <label class="form-check-label d-block" for="address-check-1">
                                                                        <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                                                                        <span class="text-muted address-details">1754 Ureate Path, 695
                                                                            Newga View, Seporcus,
                                                                            Rhode Island, Belgium - SA5 5BO</span>
                                                                        <BRow class="align-items-center justify-content-between">
                                                                            <BCol Cols="6">
                                                                                <span class="text-muted mb-0">+91 1234567890</span>
                                                                            </BCol>
                                                                            <BCol Cols="6" class="text-end">
                                                                                <span class="address-btns d-flex align-items-center justify-content-end gap-2">
                                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                                        <i class="ti ti-trash f-20"></i>
                                                                                    </a>
                                                                                    <span class="btn btn-sm btn-outline-primary">Deliver
                                                                                        to this address</span>
                                                                                </span>
                                                                            </BCol>
                                                                        </BRow>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="address-check border rounded p-3">
                                                                <div class="form-check">
                                                                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-2">
                                                                    <label class="form-check-label d-block" for="address-check-2">
                                                                        <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                                                                        <span class="text-muted address-details">1754 Ureate Path, 695
                                                                            Newga View, Seporcus,
                                                                            Rhode Island, Belgium - SA5 5BO</span>
                                                                        <BRow class="align-items-center justify-content-between">
                                                                            <BCol Cols="6">
                                                                                <span class="text-muted mb-0">+91 1234567890</span>
                                                                            </BCol>
                                                                            <BCol Cols="6" class="text-end">
                                                                                <span class="address-btns d-flex align-items-center justify-content-end gap-2">
                                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                                        <i class="ti ti-trash f-20"></i>
                                                                                    </a>
                                                                                    <span class="btn btn-sm btn-outline-primary">Deliver
                                                                                        to this address</span>
                                                                                </span>
                                                                            </BCol>
                                                                        </BRow>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="address-check border rounded p-3">
                                                                <div class="form-check">
                                                                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-3">
                                                                    <label class="form-check-label d-block" for="address-check-3">
                                                                        <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                                                                        <span class="text-muted address-details">1754 Ureate Path, 695
                                                                            Newga View, Seporcus,
                                                                            Rhode Island, Belgium - SA5 5BO</span>
                                                                        <BRow class="align-items-center justify-content-between">
                                                                            <BCol Cols="6">
                                                                                <span class="text-muted mb-0">+91 1234567890</span>
                                                                            </BCol>
                                                                            <BCol Cols="6" class="text-end">
                                                                                <span class="address-btns d-flex align-items-center justify-content-end gap-2">
                                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                                        <i class="ti ti-trash f-20"></i>
                                                                                    </a>
                                                                                    <span class="btn btn-sm btn-outline-primary">Deliver
                                                                                        to this address</span>
                                                                                </span>
                                                                            </BCol>
                                                                        </BRow>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="address-check border rounded p-3">
                                                                <div class="form-check">
                                                                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-4">
                                                                    <label class="form-check-label d-block" for="address-check-4">
                                                                        <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                                                                        <span class="text-muted address-details">1754 Ureate Path, 695
                                                                            Newga View, Seporcus,
                                                                            Rhode Island, Belgium - SA5 5BO</span>
                                                                        <BRow class="align-items-center justify-content-between">
                                                                            <BCol Cols="6">
                                                                                <span class="text-muted mb-0">+91 1234567890</span>
                                                                            </BCol>
                                                                            <BCol Cols="6" class="text-end">
                                                                                <span class="address-btns d-flex align-items-center justify-content-end gap-2">
                                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                                                                                        <i class="ti ti-trash f-20"></i>
                                                                                    </a>
                                                                                    <span class="btn btn-sm btn-outline-primary">Deliver
                                                                                        to this address</span>
                                                                                </span>
                                                                            </BCol>
                                                                        </BRow>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </BCardBody>
                                                </div>
                                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                                    <BCardBody class="border-bottom">
                                                        <BRow class="align-items-center">
                                                            <BCol>
                                                                <h5 class="mb-0">Add new address</h5>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                            </BCol>
                                                        </BRow>
                                                    </BCardBody>
                                                    <BCardBody>
                                                        <BRow>
                                                            <BCol Cols="12">
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Address Type :<small class="text-muted d-block">Enter Add Type</small></label>
                                                                    <BCol lg="8">
                                                                        <div class="form-check form-check-inline">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck1" checked>
                                                                            <label class="form-check-label" for="addtypecheck1">
                                                                                Home (All day Delivery)
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check form-check-inline">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck2">
                                                                            <label class="form-check-label" for="addtypecheck2">
                                                                                Work (Between 10 AM to 5 PM)
                                                                            </label>
                                                                        </div>
                                                                    </BCol>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">First Name :<small class="text-muted d-block">Enter
                                                                            your first name</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="text" class="form-control">
                                                                    </div>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Last Name :<small class="text-muted d-block">Enter
                                                                            your last name</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="text" class="form-control">
                                                                    </div>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Email Id :<small class="text-muted d-block">Enter
                                                                            Email id</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="email" class="form-control">
                                                                    </div>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Date of Birth :<small class="text-muted d-block">Enter
                                                                            the date of birth</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="date" class="form-control">
                                                                    </div>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Phone number :<small class="text-muted d-block">Enter
                                                                            Phone number</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="text" class="form-control">
                                                                    </div>
                                                                </Brow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">City :<small class="text-muted d-block">Enter
                                                                            City name</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="text" class="form-control">
                                                                    </div>
                                                                </BRow>
                                                                <div class="form-group">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="checkaddres" checked>
                                                                        <label class="form-check-label" for="checkaddres">
                                                                            Save this new address for future shipping
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="text-end btn-page mb-0 mt-4">
                                                                    <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Cancel</button>
                                                                    <button class="btn btn-primary" @Click="change_tab('#ecomtab-3')">Save & Deliver to this
                                                                        Address</button>
                                                                </div>
                                                            </BCol>
                                                        </BRow>
                                                    </BCardBody>
                                                </div>
                                            </BCard>
                                            <div class="d-flex justify-content-end mb-3">
                                                <button class="btn btn-link-primary"><i class="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Cart</button>
                                            </div>
                                        </BCol>
                                        <BCol xl="4">
                                            <BCard no-body>
                                                <BCardBody>
                                                    <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal" data-bs-target="#couponModal">
                                                        Have a coupon code?
                                                    </button>
                                                    <div class="input-group my-2">
                                                        <input type="text" class="form-control" placeholder="Discount Coupon">
                                                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                                                    </div>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardHeader>
                                                    <h5>Order Summary</h5>
                                                </BCardHeader>
                                                <BCardBody class="p-0">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">
                                                            <div class="media align-items-start">
                                                                <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-2.jpg" alt="User image">
                                                                <div class="media-body mx-2">
                                                                    <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                    <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                                                    <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                    </h5>
                                                                </div>
                                                                <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                    <i class="ti ti-trash f-20"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div class="media align-items-start">
                                                                <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-3.jpg" alt="User image">
                                                                <div class="media-body mx-2">
                                                                    <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                    <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                                                    <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                    </h5>
                                                                </div>
                                                                <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                    <i class="ti ti-trash f-20"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div class="media align-items-start">
                                                                <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-4.jpg" alt="User image">
                                                                <div class="media-body mx-2">
                                                                    <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                    <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                                                    <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                    </h5>
                                                                </div>
                                                                <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                    <i class="ti ti-trash f-20"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">$300.00</h5>
                                                            </div><span class="text-muted">Sub Total</span>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">-</h5>
                                                            </div><span class="text-muted">Estimated Delivery</span>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">-</h5>
                                                            </div><span class="text-muted">Voucher</span>
                                                        </li>
                                                    </ul>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardBody class="py-2">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item px-0">
                                                            <div class="float-end">
                                                                <h5 class="mb-0">$300.00</h5>
                                                            </div>
                                                            <h5 class="mb-0 d-inline-block">Total</h5>
                                                        </li>
                                                    </ul>
                                                </BCardBody>
                                            </BCard>
                                            <BCard no-body>
                                                <BCardBody>
                                                    <div class="d-flex align-items-center text-muted">
                                                        <div class="avtar avtar-s bg-light-primary flex-shrink-0 me-2">
                                                            <i class="material-icons-two-tone text-primary f-20">security</i>
                                                        </div>
                                                        <span class="text-muted text-sm w-100">Safe & Secure Payment. Easy returns. 100%
                                                            Athentic
                                                            products.</span>
                                                    </div>
                                                </BCardBody>
                                            </BCard>
                                            <div class="d-grid mb-3">
                                                <button class="btn btn-primary">Process to Checkout</button>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BTab>
                                <BTab>
                                    <template #title>
                                        <div class="media align-items-center">
                                            <div class="avtar avtar-s">
                                                <i class="ti ti-credit-card"></i>
                                            </div>
                                            <div class="media-body ms-2">
                                                <h5 class="mb-0">Payment</h5>
                                            </div>
                                        </div>
                                    </template>
                                    <!-- <BCardBody> -->
                                        <BRow>
                                            <BCol xl="8">
                                                <BCard no-body>
                                                    <BCardHeader>
                                                        <BRow class="align-items-center">
                                                            <BCol>
                                                                <div class="progress" style="height: 6px">
                                                                    <div class="progress-bar bg-primary" style="width: 99%"></div>
                                                                </div>
                                                            </BCol>
                                                            <BCol class="col-auto">
                                                                <p class="mb-0 h6">Step 3</p>
                                                            </BCol>
                                                        </BRow>
                                                    </BCardHeader>
                                                    <BCardBody class="border-bottom">
                                                        <h5 class="mb-0">Payment</h5>
                                                    </BCardBody>
                                                    <BCardBody>
                                                        <div class="address-check border rounded p-3">
                                                            <div class="form-check">
                                                                <input type="radio" name="radio11" class="form-check-input input-primary" checked="">
                                                                <label class="form-check-label d-block">
                                                                    <BRow class="align-items-center justify-content-between">
                                                                        <BCol Cols="6">
                                                                            <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small>
                                                                                <span class="badge bg-primary rounded-pill">Default</span></span>
                                                                        </BCol>
                                                                        <BCol Cols="6" class="text-end">
                                                                            <button class="btn btn-primary" @Click="change_tab('#ecomtab-2')"><i class="ti ti-edit-circle align-text-bottom me-1"></i>Change</button>
                                                                        </BCol>
                                                                    </BRow>
                                                                    <span class="text-muted address-details">1754 Ureate Path, 695 Newga
                                                                        View, Seporcus,
                                                                        Rhode Island, Belgium - SA5 5BO</span>
                                                                    <BRow class="align-items-center justify-content-between">
                                                                        <BCol Cols="6">
                                                                            <span class="text-muted mb-0">+91 1234567890</span>
                                                                        </BCol>
                                                                    </BRow>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <BRow class="g-2">
                                                            <BCol md="6">
                                                                <div class="address-check border rounded">
                                                                    <div class="form-check paycard" :style="{ 'background-image': 'url(' + require('@/assets/images/application/img-pay-card-bg.png') + ')' }">
                                                                        <input type="radio" name="payradio1" class="form-check-input input-primary" id="paycard-check-1" checked="">
                                                                        <label class="form-check-label d-block" for="paycard-check-1">
                                                                            <span class="card-body p-3 d-block">
                                                                                <span class="d-flex align-items-start justify-content-between">
                                                                                    <span class="h5">John Smith</span>
                                                                                    <img src="@/assets/images/application/mastercard.png" alt="images" class="img-fluid">
                                                                                </span>
                                                                                <span class="row g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">2599</span>
                                                                                    </span>
                                                                                </span>
                                                                                <span class="row  align-items-center justify-content-between">
                                                                                    <span class="col-auto">
                                                                                        <span class="mb-0"><span class="text-sm opacity-50">CVV</span>
                                                                                            085</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="mb-0"><span class="text-sm opacity-50">Expire
                                                                                                Date</span> 05/24</span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <div class="col-md-6">
                                                                <div class="address-check border rounded">
                                                                    <div class="form-check paycard" :style="{ 'background-image': 'url(' + require('@/assets/images/application/img-pay-card-bg.png') + ')' }">
                                                                        <input type="radio" name="payradio1" class="form-check-input input-primary" id="paycard-check-2">
                                                                        <label class="form-check-label d-block" for="paycard-check-2">
                                                                            <span class="card-body p-3 d-block">
                                                                                <span class="d-flex align-items-start justify-content-between">
                                                                                    <span class="h5">Jennifer winget</span>
                                                                                    <img src="@/assets/images/application/visa.png" alt="images" class="img-fluid">
                                                                                </span>
                                                                                <span class="row g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">****</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="h5 mb-0">2599</span>
                                                                                    </span>
                                                                                </span>
                                                                                <span class="row  align-items-center justify-content-between">
                                                                                    <span class="col-auto">
                                                                                        <span class="mb-0"><span class="text-sm opacity-50">CVV</span>
                                                                                            085</span>
                                                                                    </span>
                                                                                    <span class="col-auto">
                                                                                        <span class="mb-0"><span class="text-sm opacity-50">Expire
                                                                                                Date</span> 05/24</span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </BRow>
                                                        <div class="divider"><span>OR</span></div>
                                                        <BRow>
                                                            <BCol xl="12" xxl="4">
                                                                <div class="address-check border rounded">
                                                                    <div class="form-check">
                                                                        <input type="radio" name="payoptradio1" class="form-check-input input-primary" id="payopn-check-1" checked="">
                                                                        <label class="form-check-label d-block" for="payopn-check-1">
                                                                            <span class="card-body p-3 d-block">
                                                                                <span class="h5 mb-3 d-block">Credit Card</span>
                                                                                <span class="d-flex align-items-center">
                                                                                    <span class="f-12 badge bg-success me-3">5%
                                                                                        OFF</span>
                                                                                    <img src="@/assets/images/application/card.png" alt="img" class="img-fluid ms-1">
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol xl="6" xxl="4">
                                                                <div class="address-check border rounded">
                                                                    <div class="form-check">
                                                                        <input type="radio" name="payoptradio1" class="form-check-input input-primary" id="payopn-check-2">
                                                                        <label class="form-check-label d-block" for="payopn-check-2">
                                                                            <span class="card-body p-3 d-block">
                                                                                <span class="h5 mb-3 d-block">Pay with PayPal</span>
                                                                                <span class="d-flex align-items-center">
                                                                                    <span class="f-12 badge bg-success me-3">5%
                                                                                        OFF</span>
                                                                                    <img src="@/assets/images/application/paypal.png" alt="img" class="img-fluid ms-1">
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                            <BCol xl="6" xxl="4">
                                                                <div class="address-check border rounded">
                                                                    <div class="form-check">
                                                                        <input type="radio" name="payoptradio1" class="form-check-input input-primary" id="payopn-check-3">
                                                                        <label class="form-check-label d-block" for="payopn-check-3">
                                                                            <span class="card-body p-3 d-block">
                                                                                <span class="d-flex align-items-center">
                                                                                    <span>
                                                                                        <span class="h5 mb-3 d-block">Cash on
                                                                                            Delivery</span>
                                                                                        <span class="f-12 text-muted">When you use this
                                                                                            payment</span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </BCol>
                                                        </BRow>
                                                        <BRow class="mt-3">
                                                            <BCol Cols="12">
                                                                <BRow class="form-group  align-items-center g-2">
                                                                    <BCol lg="4" class="col-form-label py-0">Card Number :<small class="text-muted d-block">Enter
                                                                            the 16 digit card number on the card</small></BCol>
                                                                    <BCol lg="4">
                                                                        <input type="text" class="form-control">
                                                                    </BCol>
                                                                </BRow>
                                                                <BRow class="form-group align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Expiry Date :<small class="text-muted d-block">Enter
                                                                            the expiration on the card</small></label>
                                                                    <BCol lg="8">
                                                                        <BRow>
                                                                            <BCol Cols="6">
                                                                                <input type="text" class="form-control" placeholder="Month">
                                                                            </BCol>
                                                                            <BCol Cols="6">
                                                                                <input type="text" class="form-control" placeholder="Year">
                                                                            </BCol>
                                                                        </BRow>
                                                                    </BCol>
                                                                </BRow>
                                                                <div class="form-group row align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">CVV Number :<small class="text-muted d-block">Enter
                                                                            the 3 or 4 digit number on the card</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="text" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row align-items-center g-2">
                                                                    <label class="col-lg-4 col-form-label py-0">Password :<small class="text-muted d-block">Enter
                                                                            your dynamic password</small></label>
                                                                    <div class="col-lg-8">
                                                                        <input type="password" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="text-end btn-page mb-0 mt-4">
                                                                    <button class="btn btn-outline-secondary">Cancel</button>
                                                                    <button class="btn btn-primary">Save & Continue</button>
                                                                </div>
                                                            </BCol>
                                                        </BRow>
                                                    </BCardBody>
                                                </BCard>
                                                <div class="d-flex justify-content-end mb-3">
                                                    <button class="btn btn-link-primary"><i class="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Shipping
                                                        Information</button>
                                                </div>
                                            </BCol>
                                            <BCol xl="4">
                                                <BCard no-body class="coupon-card bg-warning">
                                                    <BCardBody>
                                                        <BRow class="align-items-center">
                                                            <BCol Cols="6" class="d-flex flex-column align-items-start justify-content-between">
                                                                <h4 class="text-white">Claim your rewards</h4>
                                                                <span class="badge bg-warning f-14 py-2 px-3">ABLEPRO50</span>
                                                            </BCol>
                                                            <BCol Cols="6" class="text-end">
                                                                <img src="@/assets/images/application/img-coupon.png" alt="img" class="img-fluid">
                                                            </BCol>
                                                        </BRow>
                                                    </BCardBody>
                                                </BCard>
                                                <BCard no-body>
                                                    <BCardBody>
                                                        <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal" data-bs-target="#couponModal">
                                                            Have a coupon code?
                                                        </button>
                                                        <div class="input-group my-2">
                                                            <input type="text" class="form-control" placeholder="Discount Coupon">
                                                            <button class="btn btn-outline-secondary" type="button">Apply</button>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                                <BCard no-body>
                                                    <BCardHeader>
                                                        <h5>Order Summary</h5>
                                                    </BCardHeader>
                                                    <BCardBody class="p-0">
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">
                                                                <div class="media align-items-start">
                                                                    <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-2.jpg" alt="User image">
                                                                    <div class="media-body mx-2">
                                                                        <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                        <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF
                                                                        </p>
                                                                        <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                        </h5>
                                                                    </div>
                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                        <i class="ti ti-trash f-20"></i>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="media align-items-start">
                                                                    <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-3.jpg" alt="User image">
                                                                    <div class="media-body mx-2">
                                                                        <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                        <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF
                                                                        </p>
                                                                        <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                        </h5>
                                                                    </div>
                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                        <i class="ti ti-trash f-20"></i>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="media align-items-start">
                                                                    <img class="bg-light rounded img-fluid wid-60 flex-shrink-0" src="@/assets/images/application/img-prod-4.jpg" alt="User image">
                                                                    <div class="media-body mx-2">
                                                                        <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                                                        <p class="text-muted text-sm mb-2">SLR Camera (Black) with EF
                                                                        </p>
                                                                        <h5 class="mb-1"><b>$275</b><span class="mx-2 text-sm text-decoration-line-through text-muted f-w-400">$325</span>
                                                                        </h5>
                                                                    </div>
                                                                    <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default flex-shrink-0">
                                                                        <i class="ti ti-trash f-20"></i>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="float-end">
                                                                    <h5 class="mb-0">$300.00</h5>
                                                                </div><span class="text-muted">Sub Total</span>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="float-end">
                                                                    <h5 class="mb-0">-</h5>
                                                                </div><span class="text-muted">Estimated Delivery</span>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="float-end">
                                                                    <h5 class="mb-0">-</h5>
                                                                </div><span class="text-muted">Voucher</span>
                                                            </li>
                                                        </ul>
                                                    </BCardBody>
                                                </BCard>
                                                <BCard no-body>
                                                    <BCardBody class="py-2">
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item px-0">
                                                                <div class="float-end">
                                                                    <h5 class="mb-0">$300.00</h5>
                                                                </div>
                                                                <h5 class="mb-0 d-inline-block">Total</h5>
                                                            </li>
                                                        </ul>
                                                    </BCardBody>
                                                </BCard>
                                                <BCard no-body>
                                                    <BCardBody>
                                                        <div class="d-flex align-items-center text-muted">
                                                            <div class="avtar avtar-s bg-light-primary flex-shrink-0 me-2">
                                                                <i class="material-icons-two-tone text-primary f-20">security</i>
                                                            </div>
                                                            <span class="text-muted text-sm w-100">Safe & Secure Payment. Easy returns.
                                                                100% Athentic
                                                                products.</span>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                                <div class="d-grid mb-3">
                                                    <button class="btn btn-primary">Process to Payment</button>
                                                </div>
                                            </BCol>
                                        </BRow>
                                    <!-- </BCardBody> -->
                                </BTab>
                            </BTabs>
                    </BCardBody>
                <!-- </BCard> -->
            </BCol>
        </BRow>
    </Layout>
</template>