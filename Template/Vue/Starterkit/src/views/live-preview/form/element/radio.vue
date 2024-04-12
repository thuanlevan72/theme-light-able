<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "RADIO",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Radio" pageTitle="Forms" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Custom radio</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-3 text-sm-end col-form-label">Radio</label>
                                <BCol class="col-sm-9">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="group4" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault"> Default radio </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="group4" value="" id="flexCheckChecked" checked>
                                        <label class="form-check-label" for="flexCheckChecked"> Checked radio </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="group41" value="" id="flexCheckDisabled" disabled>
                                        <label class="form-check-label" for="flexCheckDisabled"> Disabled radio </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="group41" value="" id="flexCheckCheckedDisabled" checked disabled>
                                        <label class="form-check-label" for="flexCheckCheckedDisabled"> Disabled checked
                                            radio </label>
                                    </div>
                                </BCol>
                            </div>
                            <div class="form-group row mb-2">
                                <label class="col-sm-3 text-sm-end col-form-label">Inline</label>
                                <BCol class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group5" value="" id="customCheckinlh1">
                                        <label class="form-check-label" for="customCheckinlh1"> 1 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group5" value="" id="customCheckinlh2">
                                        <label class="form-check-label" for="customCheckinlh2"> 2 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group5" value="" id="customCheckinlh3">
                                        <label class="form-check-label" for="customCheckinlh3"> 3 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group5" value="" id="customCheckinlh4" disabled>
                                        <label class="form-check-label" for="customCheckinlh4"> 4 (disabled) </label>
                                    </div>
                                    <small class="form-text d-block text-muted">Add <code>.form-check-inline</code> to any
                                        <code>.custom-control</code></small>
                                </BCol>
                            </div>
                            <div class="form-group row mb-0">
                                <label class="col-sm-3 text-sm-end col-form-label">Inline Radio Checked State </label>
                                <BCol class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group6" value="" id="customCheckinlhstate1">
                                        <label class="form-check-label" for="customCheckinlhstate1"> 1 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group6" value="" id="customCheckinlhstate2">
                                        <label class="form-check-label" for="customCheckinlhstate2"> 2 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group6" value="" id="customCheckinlhstate3" checked>
                                        <label class="form-check-label" for="customCheckinlhstate3"> 3 </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="group6" value="" id="customCheckinlhstate4" disabled>
                                        <label class="form-check-label" for="customCheckinlhstate4"> 4 (disabled) </label>
                                    </div>
                                    <small class="form-text d-block text-muted">Add <code>checked</code> attribute to any
                                        <code>.form-check-input</code></small>
                                </BCol>
                            </div>
                        </form>
                    </div>
                </div>
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
                                                <input class="form-check-input input-primary" type="radio" id="customCheckc1" checked>
                                                <label class="form-check-label" for="customCheckc1">primary</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-secondary" type="radio" id="customCheckc2" checked>
                                                <label class="form-check-label" for="customCheckc2">secondary</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-success" type="radio" id="customCheckc3" checked>
                                                <label class="form-check-label" for="customCheckc3">success</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-danger" type="radio" id="customCheckc4" checked>
                                                <label class="form-check-label" for="customCheckc4">danger</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-warning" type="radio" id="customCheckc5" checked>
                                                <label class="form-check-label" for="customCheckc5">warning</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-info" type="radio" id="customCheckc6" checked>
                                                <label class="form-check-label" for="customCheckc6">info</label>
                                            </div>
                                            <div class="form-check mb-0">
                                                <input class="form-check-input input-dark" type="radio" id="customCheckc7" checked>
                                                <label class="form-check-label" for="customCheckc7">dark</label>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol class="col-md-6">
                                        <div class="form-group mb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-primary" type="radio" id="customCheckclight1" checked>
                                                <label class="form-check-label" for="customCheckclight1">primary light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-secondary" type="radio" id="customCheckclight2" checked>
                                                <label class="form-check-label" for="customCheckclight2">secondary light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-success" type="radio" id="customCheckclight3" checked>
                                                <label class="form-check-label" for="customCheckclight3">success light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-danger" type="radio" id="customCheckclight4" checked>
                                                <label class="form-check-label" for="customCheckclight4">danger light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-warning" type="radio" id="customCheckclight5" checked>
                                                <label class="form-check-label" for="customCheckclight5">warning light</label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input input-light-info" type="radio" id="customCheckclight6" checked>
                                                <label class="form-check-label" for="customCheckclight6">info light</label>
                                            </div>
                                            <div class="form-check mb-0">
                                                <input class="form-check-input input-light-dark" type="radio" id="customCheckclight7" checked>
                                                <label class="form-check-label" for="customCheckclight7">dark light</label>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </form>
                        </div>
                    </div>
                </BCol>
            </BCol>
        </BRow>
    </Layout>
</template>