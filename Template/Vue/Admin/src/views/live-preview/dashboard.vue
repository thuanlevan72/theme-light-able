<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { lineDatalabelChart } from "./data"

export default {
    name: "DASHBOARD",
    data() {
        return {
            lineDatalabelChart: lineDatalabelChart,
        }
    },
    methods: {
        initialMap() {
            // Create a chart instance
            const chart = am4core.create("chartDiv", am4maps.MapChart);

            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Exclude Antarctica
            polygonSeries.exclude = ["AQ"];

            // Make map load polygon data (country shapes and names) from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#d6dae6");

            let imageSeries = chart.series.push(new am4maps.MapImageSeries());

            let imageSeriesTemplate = imageSeries.mapImages.template;
            let circle = imageSeriesTemplate.createChild(am4core.Circle);
            circle.radius = 4;
            circle.fill = am4core.color("#374151");
            circle.fillOpacity = 1;
            circle.stroke = am4core.color("#FFF");
            circle.strokeOpacity = 0.5;
            circle.strokeWidth = 5;
            circle.nonScaling = true;
            circle.tooltipText = "{title}";

            imageSeriesTemplate.propertyFields.latitude = "latitude";
            imageSeriesTemplate.propertyFields.longitude = "longitude";

            imageSeries.data = [{
                "latitude": 56.130367,
                "longitude": -106.346771,
                "title": "Canada"
            }, {
                "latitude": 37.090240,
                "longitude": -95.712891,
                "title": "United States"
            }, {
                "latitude": -14.235004,
                "longitude": -51.925282,
                "title": "Brazil"
            }, {
                "latitude": 44.016521,
                "longitude": 21.005859,
                "title": "Serbia"
            }, {
                "latitude": 61.5240,
                "longitude": 105.3188,
                "title": "Russia"
            }];
        },

    },
    mounted() {
        this.initialMap();

    },
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Home" pageTitle="Dashboard" />
        <BRow>
            <BCol md="4" sm="6">

                <BCard class="statistics-card-1" no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Daily Sales</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown py-0" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <div class="img-bg pattern">
                        </div>
                        <img src="@/assets/images/widget/img-status-4.svg" alt="img" class="img-fluid img-bg">
                        <div class="d-flex align-items-center mt-3">
                            <h3 class="f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
                            <span class="badge bg-light-success ms-2">36%</span>
                        </div>
                        <p class="text-muted mb-2 text-sm mt-3">You made an extra 35,000 this daily</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-3" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="4" sm="6">
                <BCard class="statistics-card-1" no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Monthly Sales</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-5.svg" alt="img" class="img-fluid img-bg">
                        <div class="d-flex align-items-center mt-3">
                            <h3 class="f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
                            <span class="badge bg-light-primary ms-2">20%</span>
                        </div>
                        <p class="text-muted mb-2 text-sm mt-3">You made an extra 35,000 this Monthly</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-3" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="4" sm="12">
                
                <BCard class="statistics-card-1 bg-brand-color-2" no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5 class="text-white">Yearly Sales</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-6.svg" alt="img" class="img-fluid img-bg">
                        <div class="d-flex align-items-center mt-3">
                            <h3 class="text-white f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
                        </div>
                        <p class="text-white text-opacity-75 mb-2 text-sm mt-3">You made an extra 35,000 this Daily</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-3" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="7">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Users From United States</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div id="chartDiv" style="height: 365px"></div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="5">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Users From United States</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <div class="media align-items-center">
                            <div class="avtar avtar-s bg-light-primary flex-shrink-0">
                                <i class="ph-duotone ph-money f-20"></i>
                            </div>
                            <div class="media-body ms-3">
                                <p class="mb-0 text-muted">Total Earnings</p>
                                <h5 class="mb-0">$249.95</h5>
                            </div>
                        </div>
                        <apexchart id="earnings-users-chart" height="200" dir="ltr" :series="lineDatalabelChart.series" :options="lineDatalabelChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol cols="6">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-s bg-light-warning flex-shrink-0">
                                        <i class="ph-duotone ph-lightning f-20"></i>
                                    </div>
                                    <div class="media-body ms-2">
                                        <p class="mb-0 text-muted">Total ideas</p>
                                        <h6 class="mb-0">235</h6>
                                    </div>
                                </div>
                            </BCol>
                            <BCol cols="6">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-s bg-light-danger flex-shrink-0">
                                        <i class="ph-duotone ph-map-pin f-20"></i>
                                    </div>
                                    <div class="media-body ms-2">
                                        <p class="mb-0 text-muted">Total location</p>
                                        <h6 class="mb-0">26</h6>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body class="statistics-card-1">
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-7.svg" alt="img" class="img-fluid img-bg">
                        <div class="media align-items-center">
                            <img src="@/assets/images/widget/img-facebook.svg" alt="img" class="img-fluid">
                            <div class="media-body ms-3">
                                <p class="mb-0 text-muted">Total Likes</p>
                                <div class="d-inline-flex align-items-center">
                                    <h5 class="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                                    <span class="badge bg-success ms-2">+7.2%</span>
                                </div>
                            </div>
                        </div>
                        <BRow class="g-3 mt-5 text-center">
                            <BCol cols="6">
                                <p class="mb-0 text-muted">Target</p>
                                <h5 class="mb-0">35,098</h5>
                            </BCol>
                            <BCol cols="6" class="border-start">
                                <p class="mb-0 text-muted">Duration</p>
                                <h5 class="mb-0">3,539</h5>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard class="statistics-card-1" no-body>
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-8.svg" alt="img" class="img-fluid img-bg">
                        <div class="media align-items-center">
                            <img src="@/assets/images/widget/img-google.svg" alt="img" class="img-fluid">
                            <div class="media-body ms-3">
                                <p class="mb-0 text-muted">Total Likes</p>
                                <div class="d-inline-flex align-items-center">
                                    <h5 class="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                                    <span class="badge bg-success ms-2">+5.9%</span>
                                </div>
                            </div>
                        </div>
                        <BRow class="g-3 mt-5 text-center">
                            <BCol cols="6">
                                <p class="mb-0 text-muted">Target</p>
                                <h5 class="mb-0">35,098</h5>
                            </BCol>
                            <BCol cols="6" class="border-start">
                                <p class="mb-0 text-muted">Duration</p>
                                <h5 class="mb-0">3,539</h5>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12" xl="4">
                <BCard no-body class="statistics-card-1">
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-9.svg" alt="img" class="img-fluid img-bg">
                        <div class="media align-items-center">
                            <img src="@/assets/images/widget/img-twitter.svg" alt="img" class="img-fluid">
                            <div class="media-body ms-3">
                                <p class="mb-0 text-muted">Total Likes</p>
                                <div class="d-inline-flex align-items-center">
                                    <h5 class="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                                    <span class="badge bg-success ms-2">+6.2%</span>
                                </div>
                            </div>
                        </div>
                        <BRow class="g-3 mt-5 text-center">
                            <BCol cols="6">
                                <p class="mb-0 text-muted">Target</p>
                                <h5 class="mb-0">35,098</h5>
                            </BCol>
                            <BCol cols="6" class="border-start">
                                <p class="mb-0 text-muted">Duration</p>
                                <h5 class="mb-0">3,539</h5>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Recent Users</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <h2 class="mb-3"><b>4.7<small class="text-muted f-18">/5</small></b></h2>
                            <div class="star mb-3 f-20">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                            </div>
                        </div>
                        <BRow class="align-items-center g-3 mb-2">
                            <BCol class="col-auto">
                                <h6 class="mb-0">5 <i class="fas fa-star text-warning"></i></h6>
                            </BCol>
                            <BCol>
                                <div class="progress" style="height: 8px">
                                    <div class="progress-bar bg-primary" style="width: 70%"></div>
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <p class="mb-0 text-muted">384</p>
                            </BCol>
                        </BRow>
                        <BRow class="align-items-center g-3 mb-2">
                            <BCol class="col-auto">
                                <h6 class="mb-0">4 <i class="fas fa-star text-warning"></i></h6>
                            </BCol>
                            <BCol>
                                <div class="progress" style="height: 8px">
                                    <div class="progress-bar bg-primary" style="width: 55%"></div>
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <p class="mb-0 text-muted">145</p>
                            </BCol>
                        </BRow>
                        <BRow class="align-items-center g-3 mb-2">
                            <BCol class="col-auto">
                                <h6 class="mb-0">3 <i class="fas fa-star text-warning"></i></h6>
                            </BCol>
                            <BCol>
                                <div class="progress" style="height: 8px">
                                    <div class="progress-bar bg-primary" style="width: 40%"></div>
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <p class="mb-0 text-muted">24</p>
                            </BCol>
                        </BRow>
                        <BRow class="align-items-center g-3 mb-2">
                            <BCol class="col-auto">
                                <h6 class="mb-0">2 <i class="fas fa-star text-warning"></i></h6>
                            </BCol>
                            <BCol>
                                <div class="progress" style="height: 8px">
                                    <div class="progress-bar bg-primary" style="width: 25%"></div>
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <p class="mb-0 text-muted">1</p>
                            </BCol>
                        </BRow>
                        <BRow class="align-items-center g-3">
                            <BCol class="col-auto">
                                <h6 class="mb-0">1 <i class="fas fa-star text-warning"></i></h6>
                            </BCol>
                            <BCol>
                                <div class="progress" style="height: 8px">
                                    <div class="progress-bar bg-primary" style="width: 10%"></div>
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <p class="mb-0 text-muted">0</p>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="8">
                <BCard class="table-card" no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Recent Users</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody class="pt-2 px-0 pb-0">
                        <div class="table-responsive">
                            <table class="table table-hover table-borderless table-sm mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <img src="@/assets/images/user/avatar-1.jpg" alt="user image" class="img-radius align-top m-r-15" style="width:40px;">
                                                <div class="d-inline-block">
                                                    <h6 class="m-b-0">Quinn Flynn</h6>
                                                    <p class="m-b-0">Android developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0"><i class="ph-duotone ph-circle text-warning f-12"></i> 11 may
                                                12:30</p>
                                        </td>
                                        <td class="text-end">
                                            <button class="btn btn-sm btn-link-danger">Reject</button>
                                            <button class="btn btn-sm btn-primary ms-1">Approve</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <img src="@/assets/images/user/avatar-2.jpg" alt="user image" class="img-radius align-top m-r-15" style="width:40px;">
                                                <div class="d-inline-block">
                                                    <h6 class="m-b-0">Garrett Winters</h6>
                                                    <p class="m-b-0">Android developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0"><i class="ph-duotone ph-circle text-success f-12"></i> 11 may
                                                12:30</p>
                                        </td>
                                        <td class="text-end">
                                            <button class="btn btn-sm btn-link-danger">Reject</button>
                                            <button class="btn btn-sm btn-primary ms-1">Approve</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <img src="@/assets/images/user/avatar-3.jpg" alt="user image" class="img-radius align-top m-r-15" style="width:40px;">
                                                <div class="d-inline-block">
                                                    <h6 class="m-b-0">Ashton Cox</h6>
                                                    <p class="m-b-0">Android developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0"><i class="ph-duotone ph-circle text-primary f-12"></i> 11 may
                                                12:30</p>
                                        </td>
                                        <td class="text-end">
                                            <button class="btn btn-sm btn-link-danger">Reject</button>
                                            <button class="btn btn-sm btn-primary ms-1">Approve</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <img src="@/assets/images/user/avatar-4.jpg" alt="user image" class="img-radius align-top m-r-15" style="width:40px;">
                                                <div class="d-inline-block">
                                                    <h6 class="m-b-0">Cedric Kelly</h6>
                                                    <p class="m-b-0">Android developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0"><i class="ph-duotone ph-circle text-danger f-12"></i> 11 may
                                                12:30</p>
                                        </td>
                                        <td class="text-end">
                                            <button class="btn btn-sm btn-link-danger">Reject</button>
                                            <button class="btn btn-sm btn-primary ms-1">Approve</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>

<style>
.card {
    z-index: 0;
}
</style>