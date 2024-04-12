<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "ADD-PRODUCT",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Add New Product" pageTitle="E-commerce" />
        <BRow>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Product description</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Product Name</label>
                            <input type="text" class="form-control" placeholder="Enter Product Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Category</label>
                            <select class="form-select">
                                <option>Sneakers</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                                <option>Category 4</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Brand</label>
                            <select class="form-select">
                                <option>Nike</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                                <option>Category 4</option>
                            </select>
                        </div>
                        <div class="form-group mb-0">
                            <label class="form-label">Product Description</label>
                            <textarea class="form-control" placeholder="Enter Product Description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>Pricing</h5>
                    </div>
                    <div class="card-body">
                        <BRow>
                            <BCol md="6">
                                <div class="form-group">
                                    <label class="form-label d-flex align-items-center">Price <i
                                            class="ph-duotone ph-info ms-1" data-bs-toggle="tooltip"
                                            data-bs-title="Price"></i></label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input type="text" class="form-control" placeholder="Price">
                                    </div>
                                </div>
                            </BCol>
                            <BCol md="6">
                                <div class="form-group">
                                    <label class="form-label d-flex align-items-center">Compare at price <i
                                            class="ph-duotone ph-info ms-1" data-bs-toggle="tooltip"
                                            data-bs-title="Compare at price"></i></label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input type="text" class="form-control" placeholder="Compare at price">
                                    </div>
                                </div>
                            </BCol>
                            <BCol md="12">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedtax"
                                        checked>
                                    <label class="form-check-label" for="flexCheckCheckedtax"> Including all tax </label>
                                </div>
                                <div class="form-group mb-0">
                                    <label class="form-label d-flex align-items-center">Cost per items <i
                                            class="ph-duotone ph-info ms-1" data-bs-toggle="tooltip"
                                            data-bs-title="Cost per items"></i></label>
                                    <div class="input-group mb-0">
                                        <span class="input-group-text">$</span>
                                        <input type="text" class="form-control" placeholder="Cost per items">
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
                <BCard>
                    <BCardHeader >
                        <h5>Inventory</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="form-group">
                            <label class="form-label">Quantity</label>
                            <input type="text" class="form-control" placeholder="Enter Quantity">
                        </div>
                        <div class="form-group mb-0">
                            <label class="form-label">SKU <span class="text-sm text-muted">(optional)</span></label>
                            <input type="text" class="form-control" placeholder="Enter SKU">
                        </div>
                    </BCardBody>
                </BCard>
            </div>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Selling type</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="Checkselling1" checked>
                            <label class="form-check-label" for="Checkselling1"> In-store selling only </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="Checkselling2">
                            <label class="form-check-label" for="Checkselling2"> Online Selling only </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="Checkselling3">
                            <label class="form-check-label" for="Checkselling3"> Available both in-store and online </label>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard>
                    <BCardHeader>
                        <h5>Variant</h5>
                    </BCardHeader>
                    <BCardBody>
                        <input class="form-control" id="choices-text-remove-button" type="text"
                            value="Product variants,variants 2" placeholder="Enter something">
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Select size</h5>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-2">
                            <BCol class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite1" name="btn_radio2" checked="">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite1">34</label>
                            </BCol>
                            <BCol class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite2" name="btn_radio2">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite2">36</label>
                            </BCol>
                            <BCol class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite3" name="btn_radio2">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite3">38</label>
                            </BCol>
                            <BCol class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite4" name="btn_radio2">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite4">40</label>
                            </BCol>
                            <BCol class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite5" name="btn_radio2">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite5">42</label>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Product image</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="form-group mb-0">
                            <p><span class="text-danger">*</span> Recommended resolution is 640*640 with file size</p>
                            <label class="btn btn-outline-secondary" for="flupld"><i class="ti ti-upload me-2"></i> Click to
                                Upload</label>
                            <input type="file" id="flupld" class="d-none">
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Shipping and Delivery</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="form-group mb-0">
                            <label class="form-label">Items Weight</label>
                            <select class="form-select">
                                <option>12.00</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                                <option>Category 4</option>
                            </select>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Status</h5>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-2">
                            <div class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite11" name="btn_radio12" checked="">
                                <label class="btn btn-sm btn-light-success" for="btnrdolite11">Active</label>
                            </div>
                            <div class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite12" name="btn_radio12">
                                <label class="btn btn-sm btn-light-primary" for="btnrdolite12">Processing</label>
                            </div>
                            <div class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite13" name="btn_radio12">
                                <label class="btn btn-sm btn-light-danger" for="btnrdolite13">Close</label>
                            </div>
                            <div class="col-auto">
                                <input type="radio" class="btn-check" id="btnrdolite14" name="btn_radio12">
                                <label class="btn btn-sm btn-light-warning" for="btnrdolite14">Pending</label>
                            </div>
                        </BRow>
                    </BCardBody>
                </BCard >
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardBody class="text-end btn-page">
                        <button class="btn btn-primary mb-0">Save product</button>
                        <button class="btn btn-outline-secondary mb-0">Reset</button>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>