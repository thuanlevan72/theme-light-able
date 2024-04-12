<script>
// import Datepicker from "vue3-datepicker";
import { ref } from 'vue'

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

// import Switches from "vue-switches";
// import Multiselect from "@vueform/multiselect";

import Layout from "@/layout/c-main.vue"

/**
 * Advanced-form component
 */
export default {
    components: {
        // Datepicker,
        flatPickr,
        Layout,
    },
    data() {
        return {
            picked: ref(new Date()),

            defaultdate: "",
            autoClose: ref(new Date()),
            daterange: ref(new Date()),

            demoMonth: ref(new Date()),
            demoYear: ref(new Date()),
            time: ref(new Date()),
            enabled: false,
            enabled1: false,
            enabled2: false,
            enabled3: false,
            enabled4: false,
            enabled5: false,
            small: false,
            small1: false,
            small2: false,
            small3: false,
            danger: false,
            info: false,
            success: false,
            primary: false,
            secondary: false,
            customColor: false,
            customColor1: false,
            customColor2: false,
            customColor3: false,
            value: null,
            value1: null,
            options: [
                "Alaska",
                "Hawaii",
                "California",
                "Nevada",
                "Oregon",
                "Washington",
                "Arizona",
                "Colorado",
                "Idaho",
                "Montana",
                "Nebraska",
                "New Mexico",
                "North Dakota",
                "Utah",
                "Wyoming",
                "Alabama",
                "Arkansas",
                "Illinois",
                "Iowa",
            ],
            maxlen: "",
            data: "",
            option: "",
            textarea: "",
            defaultNull: null,
            defaultspinval: 1,
        };
    },
};
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>DatePicker</h2>
                <p class="text-muted">Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-datepicker.readthedocs.io/en/latest/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Date Picker</BCardTitle>
                        <p class="card-title-desc">Examples of bootstrap datepicker.</p>

                        <div>
                            <div class="mb-3">
                                <label>Default Date Picker</label>
                                <br />
                                <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm
                                    class="form-control"></flat-pickr>
                            </div>

                            <div class="mb-3">
                                <label>Auto close</label>
                                <br />
                                <flat-pickr v-model="autoClose" :first-day-of-week="1" lang="en"
                                    class="form-control"></flat-pickr>
                            </div>

                            <div class="mb-3">
                                <label>Date Range</label>
                                <br />
                                <flat-pickr class="form-control" v-model="daterange" range append-to-body lang="en"
                                    confirm></flat-pickr>
                            </div>

                            <div class="mb-3">
                                <label>Month View</label>
                                <br />
                                <flat-pickr class="form-control" v-model="demoMonth" :startingView="'month'" lang="en"
                                    confirm placeholder="Select Month"></flat-pickr>
                            </div>

                            <div class="mb-3">
                                <label>Year View</label>
                                <br />
                                <flat-pickr class="form-control" v-model="demoYear" :startingView="'year'" lang="en" confirm
                                    placeholder="Select Year"></flat-pickr>
                            </div>

                            <div class="mb-3">
                                <label>Time View</label>
                                <br />
                                <flat-pickr class="form-control" v-model="time" :minimumView="'time'"
                                    placeholder="hh:mm:ss a"></flat-pickr>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>



