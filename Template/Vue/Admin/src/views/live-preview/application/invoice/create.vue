<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "CREATE",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Create" pageTitle="Invoice" />
        <BRow>
            <BCol class="col-sm-12">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="justify-content-between align-items-center mb-3 g-3">
                            <BCol class="col-sm-auto">
                                <form class="form-search">
                                    <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                                    <input type="search" class="form-control" placeholder="Search here. . .">
                                    <button class="btn btn-light-secondary btn-search">Search</button>
                                </form>
                            </BCol>
                            <div class="col-sm-auto">
                                <div class="input-group">
                                    <input type="text" id="pc-date_range_picker-2" class="form-control"
                                        placeholder="Select date range">
                                    <span class="input-group-text"><i class="feather icon-calendar"></i></span>
                                </div>
                            </div>
                        </BRow>
                        <BCard no-body class="shadow-none bg-body mb-0">
                            <BCardBody>
                                <BCard no-body class="card mb-0">
                                    <BCardBody class="card-body">
                                        <BRow class="row g-3">
                                            <BCol class="col-sm-6 col-xl-3">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Invoice id</label>
                                                    <input type="text" class="form-control" placeholder="#xxxx">
                                                </div>
                                            </BCol>
                                            <BCol class="col-sm-6 col-xl-3">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Status</label>
                                                    <select class="form-select" id="exampleFormControlSelect1">
                                                        <option>Please Select</option>
                                                        <option>Paid</option>
                                                        <option>Unpaid</option>
                                                        <option>Partial Paid</option>
                                                    </select>
                                                </div>
                                            </BCol>
                                            <BCol class="col-sm-6 col-xl-3">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Start Date</label>
                                                    <input type="datetime-local" class="form-control">
                                                </div>
                                            </BCol>
                                            <BCol class="col-sm-6 col-xl-3">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Due Date</label>
                                                    <input type="datetime-local" class="form-control">
                                                </div>
                                            </BCol>
                                            <BCol class="col-xl-6">
                                                <div class="border rounded p-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="mb-0">From:</h6>
                                                        <button class="btn btn-sm btn-light-secondary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#address-edit_add-modal"><i
                                                                class="ph-duotone ph-pencil-simple-line"></i>
                                                            Change</button>
                                                    </div>
                                                    <h5>Garcia-Cameron and Sons</h5>
                                                    <p class="mb-0">8534 Saunders Hill Apt. 583</p>
                                                    <p class="mb-0">(970) 982-3353</p>
                                                    <p class="mb-0">brandon07@pierce.com</p>
                                                </div>
                                            </BCol>
                                            <BCol class="col-xl-6">
                                                <div class="border rounded p-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="mb-0">To:</h6>
                                                        <button class="btn btn-sm btn-light-secondary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#address-edit_add-modal"><i
                                                                class="ph-duotone ph-pencil-simple-line"></i>
                                                            Change</button>
                                                    </div>
                                                    <h5>Dickinson-Cummerata</h5>
                                                    <p class="mb-0">55D Leatha Way Ernaburgh, NT 2146</p>
                                                    <p class="mb-0">75-9079921</p>
                                                    <p class="mb-0">kasandra.conn@borer.com</p>
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <div class="table-responsive mb-2">
                                                    <table class="table table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th><span class="text-danger">*</span>Name</th>
                                                                <th><span class="text-danger">*</span>Description</th>
                                                                <th><span class="text-danger">*</span>Qty</th>
                                                                <th>Total Amount</th>
                                                                <th class="text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Name" value="Mauris"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Description"
                                                                        value="Malesuada adipiscing"></td>
                                                                <td><input type="number" class="form-control"
                                                                        placeholder="Qty" value="2"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Total Amount" value="$80.00"></td>
                                                                <td class="text-center"><a href="#"
                                                                        class="avtar avtar-s btn-link-danger btn-pc-default"><i
                                                                            class="ti ti-trash f-20"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Name" value="Vitae"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Description" value="Hac egestas"></td>
                                                                <td><input type="number" class="form-control"
                                                                        placeholder="Qty" value="3"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Total Amount" value="$40.00"></td>
                                                                <td class="text-center"><a href="#"
                                                                        class="avtar avtar-s btn-link-danger btn-pc-default"><i
                                                                            class="ti ti-trash f-20"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Name"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Description"></td>
                                                                <td><input type="number" class="form-control"
                                                                        placeholder="Qty"></td>
                                                                <td><input type="text" class="form-control"
                                                                        placeholder="Total Amount"></td>
                                                                <td class="text-center"><a href="#"
                                                                        class="avtar avtar-s btn-link-danger btn-pc-default"><i
                                                                            class="ti ti-trash f-20"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="text-start">
                                                    <button class="btn btn-sm btn-light-primary"><i class="ti ti-plus"></i>
                                                        Add new item</button>
                                                    <hr class="mb-0">
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <div class="invoice-total ms-auto">
                                                    <BRow>
                                                        <BCol class="col-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Discount</label>
                                                                <input type="text" class="form-control" value="10">
                                                            </div>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Taxes</label>
                                                                <input type="text" class="form-control" value="5">
                                                            </div>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="text-muted mb-1 text-start">Sub Total :</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="f-w-600 mb-1 text-end">$20.00</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="text-muted mb-1 text-start">Discount :</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="f-w-600 mb-1 text-end text-success">$10.00</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="text-muted mb-1 text-start">Taxes :</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="f-w-600 mb-1 text-end">$5.000</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="f-w-600 mb-1 text-start">Grand Total :</p>
                                                        </BCol>
                                                        <BCol class="col-6">
                                                            <p class="f-w-600 mb-1 text-end">$25.00</p>
                                                        </BCol>
                                                    </BRow>
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Note</label>
                                                    <textarea class="form-control" rows="3" placeholder="Note"></textarea>
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <BRow class="align-items-center justify-content-between g-3">
                                                    <BCol class="col-sm-auto">
                                                        <select class="form-select w-auto">
                                                            <option>USD (US Dollar)</option>
                                                            <option>INR (Rupes)</option>
                                                        </select>
                                                    </BCol>
                                                    <BCol class="col-sm-auto btn-page">
                                                        <a href="../application/invoice-view.html"
                                                            class="btn btn-primary">Preview</a>
                                                        <button class="btn btn-outline-secondary">Download</button>
                                                        <button class="btn btn-outline-secondary">Update & Send</button>
                                                    </BCol>
                                                </BRow>
                                            </BCol>
                                        </BRow>
                                    </BCardBody>
                                </BCard>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>