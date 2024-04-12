<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "PREVIEW",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="View" pageTitle="Invoice" />
        <BRow>
            <BCol class="col-sm-12">
                <BCard no-body>
                    <BCardBody>
                        <BCard no-body class="shadow-none bg-body mb-0">
                            <BCardBody>
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="alert alert-primary mb-3 d-print-none">
                                            <ul class="list-inline ms-auto mb-0 d-flex justify-content-end flex-wrap">
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-pencil-simple-line f-22"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-eye f-22"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-download-simple f-22"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-printer f-22"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-paper-plane-tilt f-22"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item align-bottom me-2">
                                                    <a href="#" class="avtar avtar-s btn-link-primary">
                                                        <i class="ph-duotone ph-share-network f-22"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <BRow class="g-3">
                                            <BCol class="col-12">
                                                <BRow class="align-items-center g-3">
                                                    <BCol class="col-sm-6">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <img src="@/assets/images/logo-dark.svg" class="img-fluid"
                                                                alt="images">
                                                            <span class="badge bg-primary rounded-pill ms-2">Paid</span>
                                                        </div>
                                                        <p class="mb-0">INV - 000457</p>
                                                    </BCol>
                                                    <BCol class="col-sm-6 text-sm-end">
                                                        <h6>Date <span class="text-muted f-w-400">03/8/2023</span></h6>
                                                        <h6>Due Date <span class="text-muted f-w-400">10/8/2023</span></h6>
                                                    </BCol>
                                                </BRow>
                                            </BCol>
                                            <BCol class="col-sm-6">
                                                <div class="border rounded p-3">
                                                    <h6 class="mb-0">From:</h6>
                                                    <h5>Garcia-Cameron and Sons</h5>
                                                    <p class="mb-0">8534 Saunders Hill Apt. 583</p>
                                                    <p class="mb-0">(970) 982-3353</p>
                                                    <p class="mb-0">brandon07@pierce.com</p>
                                                </div>
                                            </BCol>
                                            <BCol class="col-sm-6">
                                                <div class="border rounded p-3">
                                                    <h6 class="mb-0">To:</h6>
                                                    <h5>Dickinson-Cummerata</h5>
                                                    <p class="mb-0">55D Leatha Way Ernaburgh, NT 2146</p>
                                                    <p class="mb-0">75-9079921</p>
                                                    <p class="mb-0">kasandra.conn@borer.com</p>
                                                </div>
                                            </BCol>
                                            <BCol Cols="12">
                                                <div class="table-responsive">
                                                    <table class="table table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                                <th>Total Amount</th>
                                                                <th>Qty</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mauris</td>
                                                                <td>Malesuada adipiscing</td>
                                                                <td>$80.00</td>
                                                                <td>2</td>
                                                                <td>$160.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Vitae</td>
                                                                <td>Hac egestas</td>
                                                                <td>$40.00</td>
                                                                <td>3</td>
                                                                <td>$120.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Mauris</td>
                                                                <td>Malesuada adipiscing</td>
                                                                <td>$80.00</td>
                                                                <td>4</td>
                                                                <td>$320.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="text-start">
                                                    <hr class="mb-2 mt-1">
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <div class="invoice-total ms-auto">
                                                    <BRow>
                                                        <BCol class="col-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Discount</label>
                                                                <h5>10</h5>
                                                            </div>
                                                        </BCol>
                                                        <BCol class="col-6 text-end">
                                                            <div class="form-group">
                                                                <label class="form-label">Taxes</label>
                                                                <h5>5</h5>
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
                                                <label class="form-label">Note</label>
                                                <p class="mb-0">It was a pleasure working with you and your team. We hope
                                                    you will keep us in mind for future freelance
                                                    projects. Thank You!</p>
                                            </BCol>
                                        </BRow>
                                    </BCardBody>
                                </BCard>
                                <BRow class="d-print-none align-items-center justify-content-end">
                                    <BCol class="col-auto btn-page">
                                        <button class="btn btn-primary btn-print-invoice">Print</button>
                                        <button class="btn btn-outline-secondary btn-print-invoice">Download</button>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>