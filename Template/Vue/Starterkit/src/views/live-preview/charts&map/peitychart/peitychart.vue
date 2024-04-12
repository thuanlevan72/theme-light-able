<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import jQuery from 'jquery';
import peity from 'peity';
console.log(jQuery); // Using jQuery to satisfy the linting rule

export default {
    name: "PEITYCHART",
    components: {
        Layout, pageheader
    },
    mounted() {
        const lineElements = document.querySelectorAll(".line");
        lineElements.forEach((element) => {
            peity(element, "line");
        });

        const updatingChart = document.getElementById("updating-chart");
        updatingChart.innerText = "1,4,5,7,6,10,7,12";

        setInterval(function () {
            var random = Math.round(Math.random() * 10);
            var values = updatingChart.innerText.split(",");
            values.shift();
            values.push(random);
            updatingChart.innerText = values.join(",");
        }, 1000);
    },
}
</script>
<template>
    <Layout>
        <!-- Page Header-->
        <pageheader :title="title" :items="items" />
        <!-- End Page Header -->
        <div class="row">
            <!-- [ sample-page ] start -->
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Line</h5>
                    </div>
                    <div class="card-body">
                        <span class="line">5,3,9,6,5,9,7,3,5,2,3,5,5,1,-2</span>
                        <span class="line">5,3,2,-1,-3,-2,2,3,5,2</span>
                        <span class="line">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
                        <span class="line" data-peity='{ "fill": "blue", "stroke": "red", "width": 50 }'>5,3,9,6,5,9,7,3,5,2,3,5,5,1</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar</h5>
                    </div>
                    <div class="card-body">
                        <span class="bar">5,3,9,6,5,9,7,3,5,2</span>
                        <span class="bar">5,3,2,-1,-3,-2,2,3,5,2</span>
                        <span class="bar">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Updatting Charts</h5>
                    </div>
                    <div class="card-body">
                        <span id="updating-chart">5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Pie</h5>
                    </div>
                    <div class="card-body">
                        <span class="pie">1/5</span>
                        <span class="pie">226/360</span>
                        <span class="pie">0.52/1.561</span>
                        <span class="pie">1,4</span>
                        <span class="pie">226,134</span>
                        <span class="pie">0.52,1.041</span>
                        <span class="pie">1,2,3,2,2</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Donut</h5>
                    </div>
                    <div class="card-body">
                        <span class="donut">1/5</span>
                        <span class="donut">226/360</span>
                        <span class="donut">0.52/1.561</span>
                        <span class="donut">1,4</span>
                        <span class="donut">226,134</span>
                        <span class="donut">0.52,1.041</span>
                        <span class="donut">1,2,3,2,2</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Color Options</h5>
                    </div>
                    <div class="card-body">
                        <span class="bar-colours-1">5,3,9,6,5,9,7,3,5,2</span>
                        <span class="bar-colours-2">5,3,2,-1,-3,-2,2,3,5,2,5,3,2,-1,-3</span>
                        <span class="bar-colours-3">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
                        <span class="pie-colours-1">4,7,6,5</span>
                        <span class="pie-colours-2">5,3,9,6,5</span>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Other Options</h5>
                    </div>
                    <div class="card-body">
                        <p class="data-attributes">
                            <span data-peity='{ "fill": ["red", "#eeeeee"],    "innerRadius": 10, "radius": 40 }'>1/7</span>
                            <span data-peity='{ "fill": ["orange", "#eeeeee"], "innerRadius": 14, "radius": 36 }'>2/7</span>
                            <span data-peity='{ "fill": ["yellow", "#eeeeee"], "innerRadius": 16, "radius": 32 }'>3/7</span>
                            <span data-peity='{ "fill": ["green", "#eeeeee"],  "innerRadius": 18, "radius": 28 }'>4/7</span>
                            <span data-peity='{ "fill": ["blue", "#eeeeee"],   "innerRadius": 20, "radius": 24 }'>5/7</span>
                            <span data-peity='{ "fill": ["violet", "#eeeeee"], "innerRadius": 15, "radius": 16 }'>7/7</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h5>Full width chart</h5>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Line</h5>
                    </div>
                    <div class="card-body peity-full-width">
                        <span class="line">5,3,9,6,5,9,7,3,5,2,3,5,5,1</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Bar</h5>
                    </div>
                    <div class="card-body peity-full-width">
                        <span class="bar">5,3,9,6,5,9,7,3,5,2</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card overflow-hidden">
                    <div class="card-header">
                        <h5>Updatting Charts</h5>
                    </div>
                    <div class="card-body peity-full-width">
                        <span id="updating-chart-big">5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span>
                    </div>
                </div>
            </div>
            <!-- [ sample-page ] end -->
        </div>
    </Layout>
</template>