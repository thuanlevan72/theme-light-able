<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "SEARCH PAGE",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Search Page" pageTitle="Ui kit" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <BRow class="row g-3 align-items-center">
                            <BCol class="col">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="ti ti-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search a Keyword">
                                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">India</option>
                                        <option value="2">UK</option>
                                        <option value="3">USA</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol class="col-sm-auto">
                                <div class="d-grid d-sm-inline-block">
                                    <button class="btn btn-primary" type="button">Search</button>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                    <div class="card-body">
                        <BRow class="row align-items-center justify-content-between">
                            <BCol class="col-sm-auto">
                                <h5>Recently Searched</h5>
                            </BCol>
                            <BCol class="col-sm-auto">
                                <select class="form-select">
                                    <option>Filter </option>
                                    <option>Hits: High To Low</option>
                                    <option>Hits: Low To High</option>
                                    <option>Popularity</option>
                                    <option>Fresh Arrivals</option>
                                </select>
                            </BCol>
                        </BRow>
                        <hr class="my-4">
                        <BRow class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Australia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>61424</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">India</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>76975</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Russia</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>97586</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">London</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>19675</p>
                                </div>
                            </BCol>
                            <BCol class="col">
                                <div class="card p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                    <h6 class="mb-0">Dubai</h6>
                                    <p class="text-sm text-muted mb-0"><i class="ti ti-world me-1"></i>60614</p>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>