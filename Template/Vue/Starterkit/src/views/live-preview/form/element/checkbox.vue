<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "CHECKBOX",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Checkbox" pageTitle="Forms" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Custom Checkbox</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-sm-3 text-sm-end col-form-label pt-0">Checkboxes</label>
                            <BCol class="col-sm-9">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                    <label class="form-check-label" for="flexCheckChecked"> Checked checkbox </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                                    <label class="form-check-label" for="flexCheckDisabled"> Disabled checkbox </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
                                    <label class="form-check-label" for="flexCheckCheckedDisabled"> Disabled checked
                                        checkbox </label>
                                </div>
                            </BCol>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 text-sm-end col-form-label pt-0">Inline</label>
                            <BCol class="col-sm-9">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="" id="customCheckinlh1">
                                    <label class="form-check-label" for="customCheckinlh1"> 1 </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="" id="customCheckinlh2">
                                    <label class="form-check-label" for="customCheckinlh2"> 2 </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="" id="customCheckinlh3" checked>
                                    <label class="form-check-label" for="customCheckinlh3"> 3 </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="" id="customCheckinlh4" disabled>
                                    <label class="form-check-label" for="customCheckinlh4"> 4 (disabled) </label>
                                </div>
                                <small class="form-text text-muted">Add <code>.form-check-inline</code> to any
                                    <code>.custom-control</code></small>
                            </BCol>
                        </div>
                        <div class="form-group row mb-0">
                            <label class="col-sm-3 text-sm-end col-form-label pt-0">Indeterminate</label>
                            <BCol class="col-sm-9">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="custom_Check_int">
                                    <label class="form-check-label" for="custom_Check_int"> Indeterminate checkbox </label>
                                </div>
                                <small class="form-text text-muted"><code>document.querySelector('your-checkbox').indeterminate=!0;</code></small>
                            </BCol>
                        </div>
                    </div>
                </div>
            </BCol>
                <BCol class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Color Options</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <BRow class="g-4">
                                    <BCol class="col-md-6">
                                        <div class="form-group mb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked>
                                                <label class="form-check-label" for="customCheckc1">primary</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-secondary" type="checkbox" id="customCheckc2" checked>
                                                <label class="form-check-label" for="customCheckc2">secondary</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-success" type="checkbox" id="customCheckc3" checked>
                                                <label class="form-check-label" for="customCheckc3">success</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-danger" type="checkbox" id="customCheckc4" checked>
                                                <label class="form-check-label" for="customCheckc4">danger</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-warning" type="checkbox" id="customCheckc5" checked>
                                                <label class="form-check-label" for="customCheckc5">warning</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-info" type="checkbox" id="customCheckc6" checked>
                                                <label class="form-check-label" for="customCheckc6">info</label>
                                            </div>
                                            <div class="form-check mb-0">
                                                <input class="form-check-input input-dark" type="checkbox" id="customCheckc7" checked>
                                                <label class="form-check-label" for="customCheckc7">dark</label>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol class="col-md-6">
                                        <div class="form-group mb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-primary" type="checkbox" id="customCheckclight1" checked>
                                                <label class="form-check-label" for="customCheckclight1">primary light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-secondary" type="checkbox" id="customCheckclight2" checked>
                                                <label class="form-check-label" for="customCheckclight2">secondary light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-success" type="checkbox" id="customCheckclight3" checked>
                                                <label class="form-check-label" for="customCheckclight3">success light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-danger" type="checkbox" id="customCheckclight4" checked>
                                                <label class="form-check-label" for="customCheckclight4">danger light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-warning" type="checkbox" id="customCheckclight5" checked>
                                                <label class="form-check-label" for="customCheckclight5">warning light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-info" type="checkbox" id="customCheckclight6" checked>
                                                <label class="form-check-label" for="customCheckclight6">info light</label>
                                            </div>
                                            <div class="form-check mb-0">
                                                <input class="form-check-input input-light-dark" type="checkbox" id="customCheckclight7" checked>
                                                <label class="form-check-label" for="customCheckclight7">dark light</label>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </form>
                        </div>
                    </div>
                </BCol>
        </BRow>
    </Layout>
</template>