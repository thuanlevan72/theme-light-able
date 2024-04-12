
<script>
import MultiRangeSlider from "multi-range-slider-vue";
// import Slider from "@vueform/slider";
import Layout from "@/layout/c-main.vue"
import "../../../../node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css";
import "../../../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";
// import "@vueform/slider/themes/default.css"
export default {
    data() {
        return {
            barMinValue: 10,
            barMaxValue: 90,
            dayBarMinValue: 32,
            dayBarMaxValue: 333,
            wBarMinValue: 1,
            wBarMaxValue: 5,
            hBarMinValue: 120,
            hBarMaxValue: 600,
            sBarMinValue: 0,
            sBarMaxValue: 100,
            oBarMinValue: 10,
            oBarMaxValue: 90,
        };
    },
    methods: {
        UpdateValues(e) {
            this.barMinValue = e.minValue;
            this.barMaxValue = e.maxValue;
        },
        updateWeekValues(e) {
            this.wBarMinValue = e.minValue;
            this.wBarMaxValue = e.maxValue;
        },
        updateDayValues(e) {
            this.dayBarMinValue = e.minValue;
            this.dayBarMaxValue = e.maxValue;
        },
        updateHoursValues(e) {
            this.hBarMinValue = e.minValue;
            this.hBarMaxValue = e.maxValue;
        },
        update_sBarValues(e) {
            this.sBarMinValue = e.minValue;
            this.sBarMaxValue = e.maxValue;
        },
        update_oBarValues(e) {
            this.oBarMinValue = e.minValue;
            this.oBarMaxValue = e.maxValue;
        },
    },
    computed: {
        weekNames() {
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        },
        wBarMinCaption() {
            return this.weekNames[this.wBarMinValue];
        },
        wBarMaxCaption() {
            return this.weekNames[this.wBarMaxValue];
        },
        monthNames() {
            return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "",
            ];
        },

        hoursLabel() {
            let labels = [];
            for (let i = 0; i <= 12; i++) {
                labels.push(`${i.toString().length === 1 ? "0" : ""}${i}:00`);
            }
            return labels;
        },
        dayMinCaption() {
            let d = new Date();
            let dd = new Date("1-Jan-" + d.getFullYear());
            dd.setDate(this.dayBarMinValue);
            return dd.toString();
        },
        dayMaxCaption() {
            let d = new Date();
            let dd = new Date("1-Jan-" + d.getFullYear());
            dd.setDate(this.dayBarMaxValue);
            return dd.toString();
        },
        hoursMinCaption() {
            let h = Math.floor(this.hBarMinValue / 60);
            let m = this.hBarMinValue % 60;
            let hh = h.toString().length === 1 ? "0" : "";
            let mm = m.toString().length === 1 ? "0" : "";

            return `${hh}${h}:${mm}${m}`;
        },
        hoursMaxCaption() {
            let h = Math.floor(this.hBarMaxValue / 60);
            let m = this.hBarMaxValue % 60;
            let hh = h.toString().length === 1 ? "0" : "";
            let mm = m.toString().length === 1 ? "0" : "";
            return `${hh}${h}:${mm}${m}`;
        },
    }, components: { MultiRangeSlider, Layout },
};
</script>

<template>
    <Layout>
        <!-- <MultiRangeSlider v-model="value" /> -->

        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Range Slider</h2>
                <p class="text-muted">Create an input element in the DOM, and then create an instance of Slider</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://seiyria.com/bootstrap-slider/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Range slider</BCardTitle>
                        <p class="card-title-desc">
                            Cool, comfortable, responsive and easily customizable range slider
                        </p>
                        <BRow>
                            <BCol md="6">
                                <div class="p-3">
                                    <h5 class="font-size-14 mb-5 mt-0">Default</h5>
                                    <div class="p-3">
                                        <MultiRangeSlider :baseClassName="'multi-range-slider'" :min="0" :max="100" :step="10" :ruler="true" :label="true" :minValue="barMinValue" :maxValue="barMaxValue" @input="UpdateValues" />
                                    </div>
                                </div>
                            </BCol>
                            <BCol md="6">
                                <div class="p-3">
                                    <h5 class="font-size-14 mb-5 mt-0">Min-Max</h5>
                                    <div class="p-3">
                                        <MultiRangeSlider baseClassName="multi-range-slider-black" :min="0" :max="100" :step="10" :ruler="true" :label="true" :minValue="barMinValue" :maxValue="barMaxValue" @input="UpdateValues" />
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                        <BRow>
                            <BCol md="6">
                                <div class="p-3">
                                    <h5 class="font-size-14 mb-5 mt-0">Range and Label</h5>
                                    <div class="p-3">
                                        <div class="MultiRangeSliderContainer">
                                            <MultiRangeSlider :min="1" :max="365" :minValue="dayBarMinValue" :maxValue="dayBarMaxValue" :labels="monthNames" :min-caption="dayMinCaption" :max-caption="dayMaxCaption" :step="1" @input="updateDayValues" />
                                        </div>
                                        <!-- <Slider v-model="sliderWithLabel.value" :data="sliderWithLabel.data" :range="sliderWithLabel.range" -->
                                        <!-- @callbackRange="callbackRange" /> -->
                                    </div>
                                </div>
                            </BCol>
                            <BCol md="6">
                                <div class="p-3">
                                    <h5 class="font-size-14 mb-5 mt-0">Loading</h5>
                                    <div class="p-3">
                                        <MultiRangeSlider :min="1000" :max="8000" :minValue="2000" :maxValue="7000" :step="500" />
                                        <!-- <Slider v-model="loadingValue" :is-disabled="true" class="slider-red" /> -->
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                        <BRow>
                            <BCol md="6">
                                <div class="p-3">
                                    <h5 class="font-size-14 mb-4 mt-0">Rtl</h5>
                                    <div class="p-3">
                                        <MultiRangeSlider :min="0" :max="100" :min-value="sBarMinValue" :max-value="sBarMaxValue" :step="1.25" :range-margin="5" @input="update_sBarValues" />
                                    </div>
                                </div>
                            </BCol>
                            
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>