<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { earningsChart, userActivitiesChart, yearlySummeryChart, overviewChart, totalSalesChart, performanceChart, overviewChart2, ratingChart, transactionChart, orderChart, totalOrderChart, reportChart, timeSpentChart, newVisitorChart, totalRewardsChart, totalRewardsChart2, bitcoinChart1, bitcoinChart2, bitcoinChart3, totalEarningChart1, totalEarningChart2 } from "./data"

export default {
    name: "CHART",
    components: {
        Layout, pageheader
    },
    data() {
        return {
            earningsChart, userActivitiesChart, yearlySummeryChart, overviewChart, totalSalesChart, performanceChart, overviewChart2, ratingChart, transactionChart, orderChart, totalOrderChart, reportChart, timeSpentChart, newVisitorChart, totalRewardsChart, totalRewardsChart2, bitcoinChart1, bitcoinChart2, bitcoinChart3, totalEarningChart1, totalEarningChart2
        }
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Chart" pageTitle="Widget" />

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Earnings</h5>
                            <input type="date" class="form-control form-control-sm w-auto border-0 shadow-none2">

                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-flex align-items-center mb-1">
                            <h3 class="mb-0">$894.39 <small class="text-muted">/+$200.10</small></h3>
                            <span class="badge bg-light-success ms-2">36%</span>
                        </div>
                        <p>Delivery Orders</p>
                        <div id="customer-rate-graph"></div>
                        <apexchart class="apex-charts" height="230" dir="ltr" :series="earningsChart.series"
                            :options="earningsChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">User Activities</h5>
                            <select class="form-select form-select-sm w-auto border-0 shadow-none">
                                <option>Today</option>
                                <option selected="">This week</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <p class="mb-0">Sales</p>
                        <h4>$2356.4</h4>
                        <div id="monthly-report-graph"></div>
                        <apexchart class="apex-charts" height="250" dir="ltr" :series="userActivitiesChart.series"
                            :options="userActivitiesChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between">
                        <h5>Yearly Summary</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                            aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i
                                        class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="justify-content-center g-3 text-center mb-3">
                            <BCol cols="6" md="4">
                                <div class="overview-product-legends">
                                    <p class="text-muted mb-1"><span>Invoiced</span></p>
                                    <h4 class="mb-0">$2356.4</h4>
                                </div>
                            </BCol>
                            <BCol cols="6" md="4">
                                <div class="overview-product-legends">
                                    <p class="text-muted mb-1"><span>Profit</span></p>
                                    <h4 class="mb-0">$1935.6</h4>
                                </div>
                            </BCol>
                            <BCol cols="6" md="4">
                                <div class="overview-product-legends">
                                    <p class="text-muted mb-1"><span>Expenses</span></p>
                                    <h4 class="mb-0">$468.9</h4>
                                </div>
                            </BCol>
                        </BRow>
                        <div id="yearly-summary-chart"></div>
                        <apexchart class="apex-charts" height="250" dir="ltr" :series="yearlySummeryChart.series"
                            :options="yearlySummeryChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between">
                        <h5>Overview</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                            aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i
                                        class="material-icons-two-tone f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-sm-flex align-items-center justify-content-between flex-wrap gap-2">
                            <div class="d-flex align-items-center mb-2 mb-sm-0">
                                <h3 class="mb-0 me-1">$ 82.99</h3>
                                <span class="badge bg-success"><i class="ti ti-arrow-narrow-up"></i> 2.6%</span>
                            </div>
                            <ul class="nav nav-pills analytics-tab" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="analytics-tab-1" data-bs-toggle="tab"
                                        data-bs-target="#analytics-tab-1-pane" type="button" role="tab"
                                        aria-controls="analytics-tab-1-pane" aria-selected="true">Daily</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="analytics-tab-2" data-bs-toggle="tab"
                                        data-bs-target="#analytics-tab-2-pane" type="button" role="tab"
                                        aria-controls="analytics-tab-2-pane" aria-selected="false">Monthly</button>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane show active" id="analytics-tab-1-pane" role="tabpanel"
                                aria-labelledby="analytics-tab-1" tabindex="0">
                                <div id="overview-chart-1"></div>
                                <apexchart class="apex-charts" height="230" dir="ltr" :series="overviewChart.series"
                                    :options="overviewChart.chartOptions"></apexchart>
                            </div>
                            <div class="tab-pane" id="analytics-tab-2-pane" role="tabpanel"
                                aria-labelledby="analytics-tab-2" tabindex="0">
                                <div id="overview-chart-2"></div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between">
                        <h5>Total Sales</h5>
                        <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Total Sales"></i>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-center">
                            <h3 class="mb-0 me-1">$ 82.99</h3>
                            <span class="badge bg-success"><i class="ti ti-arrow-narrow-up"></i> 2.6%</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4 mb-3 flex-wrap">
                            <p class="mb-0">Online store</p>
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 me-1">$50.99</h5>
                                <span class="badge bg-light-success"><i class="ti ti-arrow-narrow-up"></i> 2.6%</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                            <p class="mb-0">Facebook</p>
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 me-1">$32.00</h5>
                                <span class="badge bg-light-danger"><i class="ti ti-arrow-narrow-down"></i> 2.6%</span>
                            </div>
                        </div>
                        <div id="total-sales-chart"></div>
                        <apexchart class="apex-charts" height="265" dir="ltr" :series="totalSalesChart.series"
                            :options="totalSalesChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between">
                            <h5>Your team performance</h5>
                            <i class="ph-duotone ph-arrow-square-out f-20 ms-1" data-bs-toggle="tooltip"
                                data-bs-title="Your team performance"></i>
                        </div>
                        <select class="form-select form-select-sm w-auto border-0 shadow-none">
                            <option>Today</option>
                            <option selected="">This week</option>
                            <option>Monthly</option>
                        </select>
                        <div id="performance-chart"></div>
                        <apexchart class="apex-charts" height="250" dir="ltr" :series="performanceChart.series"
                            :options="performanceChart.chartOptions"></apexchart>
                        <div class="text-center">
                            <p>your team performance is 5% better this week</p>
                            <div>
                                <button class="btn btn-primary mb-3">View details</button>
                            </div>
                            <div class="d-inline-flex align-items-center m-1">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-primary f-12"></i> Completed </p>
                                <span class="badge bg-light-secondary ms-1">56</span>
                            </div>
                            <div class="d-inline-flex align-items-center m-1">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-secondary f-12"></i> Percentage </p>
                                <span class="badge bg-light-danger ms-1">34</span>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between">
                        <h5>Overview</h5>
                        <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Overview"></i>
                    </BCardHeader>
                    <BCardBody>
                        <div id="overview-bar-chart"></div>
                        <apexchart class="apex-charts" height="150" dir="ltr" :series="overviewChart2.series"
                            :options="overviewChart2.chartOptions"></apexchart>
                        <div class="bg-body mt-3 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-danger f-12"></i> Apps</p>
                            <h5 class="mb-0 ms-1">10+</h5>
                        </div>
                        <div class="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-primary f-12"></i> Other</p>
                            <h5 class="mb-0 ms-1">5</h5>
                        </div>
                        <div class="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-purple-500 f-12"></i> Widgets</p>
                            <h5 class="mb-0 ms-1">150+</h5>
                        </div>
                        <div class="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-success f-12"></i> Forms</p>
                            <h5 class="mb-0 ms-1">50+</h5>
                        </div>
                        <div class="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-warning f-12"></i> Components</p>
                            <h5 class="mb-0 ms-1">200+</h5>
                        </div>
                        <div class="bg-body mt-1 py-2 px-3 rounded d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-info f-12"></i> Pages</p>
                            <h5 class="mb-0 ms-1">150+</h5>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xxl="3">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-3">
                                <h6 class="mb-0">Project Rating</h6>
                            </div>
                            <div class="flex-shrink-0">
                                <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                                    toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                                    aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                                    <template #button-content><span class="text-muted"><i
                                                class="ti ti-dots-vertical f-18"></i></span>
                                    </template>
                                    <BDropdownItem>Today</BDropdownItem>
                                    <BDropdownItem>Weekly</BDropdownItem>
                                    <BDropdownItem>Monthly</BDropdownItem>
                                </BDropdown>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="ph-duotone ph-star text-warning me-1"></i>
                            <h4 class="mb-0">4.5 <small class="text-muted"> / 5</small></h4>
                            <span class="badge bg-light-success ms-2">36%</span>
                        </div>
                        <div id="project-rating-chart"></div>
                        <apexchart class="apex-charts" height="50" dir="ltr" :series="ratingChart.series"
                            :options="ratingChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xxl="3">
                <BCard no-body>
                    <BCardHeader class="py-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Transactions</h5>
                            <input type="date" class="form-control form-control-sm w-auto border-0 shadow-none2">
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="row align-items-center">
                            <BCol class="col-5">
                                <h5 class="mb-1">$ 59,48</h5>
                                <span class="badge bg-success">36%</span>
                            </BCol>
                            <BCol class="col-7">
                                <div id="transactions-chart"></div>
                                <apexchart class="apex-charts" height="60" dir="ltr" :series="transactionChart.series"
                                    :options="transactionChart.chartOptions"></apexchart>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xxl="3">
                <BCard no-body>
                    <BCardHeader class="card-header py-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Canceled order</h5>
                            <input type="date" class="form-control form-control-sm w-auto border-0 shadow-none2">
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="align-items-center">
                            <BCol cols="5" class="col-5">
                                <h4 class="mb-1">3.15k</h4>
                            </BCol>
                            <BCol cols="7">
                                <div id="canceled-order-chart"></div>
                                <apexchart class="apex-charts" height="60" dir="ltr" :series="orderChart.series"
                                    :options="orderChart.chartOptions"></apexchart>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xxl="3">
                <BCard no-body>
                    <BCardBody class="pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h4 class="mb-1">3.15k</h4>
                                <p class="mb-0">Total Order</p>
                            </div>
                            <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Overview"></i>
                        </div>
                    </BCardBody>
                    <div id="total-order-chart"></div>
                    <apexchart class="apex-charts" height="100" dir="ltr" :series="totalOrderChart.series"
                        :options="totalOrderChart.chartOptions"></apexchart>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between">
                        <h5>Reports</h5>
                        <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip" data-bs-title="Reports"></i>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-sm-flex align-items-center justify-content-between">
                            <ul class="list-inline me-auto mb-3 mb-sm-0">
                                <li class="list-inline-item">
                                    Visitor
                                </li>
                                <li class="list-inline-item">
                                    <button id="chart-line" class="avtar avtar-s btn btn-light-secondary">
                                        <i class="ph-duotone ph-chart-line f-18"></i>
                                    </button>
                                </li>
                                <li class="list-inline-item">
                                    <button id="chart-bar" class="avtar avtar-s btn btn-light-secondary">
                                        <i class="ph-duotone ph-chart-bar f-18"></i>
                                    </button>
                                </li>
                                <li class="list-inline-item">
                                    <button id="chart-area" class="avtar avtar-s btn btn-light-secondary">
                                        <i class="ph-duotone ph-wave-sine f-18"></i>
                                    </button>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <h3 class="mb-0 me-1">$ 82.99</h3>
                                <span class="badge bg-success"><i class="ti ti-arrow-narrow-up"></i> 2.6%</span>
                            </div>
                        </div>
                        <div id="reports-chart"></div>
                        <apexchart class="apex-charts" height="250" dir="ltr" :series="reportChart.series"
                            :options="reportChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BRow>
                    <BCol md="6">
                        <BCard no-body>
                            <BCardBody>
                                <BRow class="align-items-center">
                                    <BCOl cols="5">
                                        <p class="mb-1">Avg. time spent</p>
                                        <h5 class="mb-0">00:03:45</h5>
                                    </BCOl>
                                    <BCol cols="7">
                                        <div id="timesspent-chart"></div>
                                        <apexchart class="apex-charts" height="40" dir="ltr" :series="timeSpentChart.series"
                                            :options="timeSpentChart.chartOptions">
                                        </apexchart>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol md="6">
                        <BCard no-body>
                            <BCardBody>
                                <BRow class="align-items-center">
                                    <BCol cols="6">
                                        <p class="mb-1">New visitor</p>
                                        <div class="d-flex align-items-center flex-wrap">
                                            <h5 class="mb-0 me-1">$3,569</h5>
                                            <span class="badge bg-danger"><i class="ti ti-arrow-narrow-down"></i>
                                                2.6%</span>
                                        </div>
                                    </BCol>
                                    <BCol cols="6">
                                        <div id="new-visitor-chart"></div>
                                        <apexchart class="apex-charts" height="60" dir="ltr"
                                            :series="newVisitorChart.series" :options="newVisitorChart.chartOptions">
                                        </apexchart>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol md="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <div class="avtar avtar-s bg-light-warning">
                                            <i class="ti ti-clipboard-list f-20"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 text-end ms-3">
                                        <h5 class="mb-1">9,000</h5>
                                        <p class="mb-0">Total Rewards</p>
                                    </div>
                                </div>
                                <div id="total-rewards-chart"></div>
                                <apexchart class="apex-charts" height="100" dir="ltr" :series="totalRewardsChart.series"
                                    :options="totalRewardsChart.chartOptions"></apexchart>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol md="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="text-center mb-2">
                                    <div class="avtar avtar-s bg-light-warning">
                                        <i class="ti ti-clipboard-list f-20"></i>
                                    </div>
                                    <h5 class="mb-1">9,000</h5>
                                    <p class="mb-0">Total Rewards</p>
                                </div>
                                <div id="total-rewards-chart-2"></div>
                                <apexchart class="apex-charts" height="100" dir="ltr" :series="totalRewardsChart2.series"
                                    :options="totalRewardsChart2.chartOptions"></apexchart>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
            <BCol lg="12" xxl="8">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="align-items-center justify-content-center">
                            <BCol md="6" xl="4" class="my-2">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 me-1">Bitcoin</p>
                                    <p class="mb-0 text-muted"><i
                                            class="ph-duotone ph-caret-up f-20 align-bottom text-success"></i> 0.73%</p>
                                </div>
                                <div class="mt-1 row align-items-center">
                                    <BCol cols="6">
                                        <h5 class="mb-0">£ 5678.09</h5>
                                        <p class="text-muted mb-0">Total Tasks</p>
                                    </BCol>
                                    <BCol cols="6">
                                        <div id="bitcoin-chart-1"></div>
                                        <apexchart class="apex-charts" height="40" dir="ltr" :series="bitcoinChart1.series"
                                            :options="bitcoinChart1.chartOptions">
                                        </apexchart>
                                    </BCol>
                                </div>
                            </BCol>
                            <BCol md="6" xl="4" class="my-2">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 me-1">Bitcoin</p>
                                    <p class="mb-0 text-muted"><i
                                            class="ph-duotone ph-caret-down f-20 align-bottom text-danger"></i> 0.73%</p>
                                </div>
                                <div class="mt-1 row align-items-center">
                                    <BCol cols="6">
                                        <h5 class="mb-0">£ 5678.09</h5>
                                        <p class="text-muted mb-0">Total Tasks</p>
                                    </BCol>
                                    <BCol cols="6">
                                        <div id="bitcoin-chart-2"></div>
                                        <apexchart class="apex-charts" height="40" dir="ltr" :series="bitcoinChart2.series"
                                            :options="bitcoinChart2.chartOptions">
                                        </apexchart>
                                    </BCol>
                                </div>
                            </BCol>
                            <BCol md="6" xl="4" class="my-2">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 me-1">Bitcoin</p>
                                    <p class="mb-0 text-muted"><i
                                            class="ph-duotone ph-caret-up f-20 align-bottom text-primary"></i> 0.73%</p>
                                </div>
                                <div class="mt-1 row align-items-center">
                                    <BCol cols="6">
                                        <h5 class="mb-0">£ 5678.09</h5>
                                        <p class="text-muted mb-0">Total Tasks</p>
                                    </BCol>
                                    <BCol cols="6">
                                        <div id="bitcoin-chart-3"></div>
                                        <apexchart class="apex-charts" height="40" dir="ltr" :series="bitcoinChart3.series"
                                            :options="bitcoinChart3.chartOptions">
                                        </apexchart>
                                    </BCol>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xxl="4">
                <BRow>
                    <BCol cols="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="my-n4 text-center mx-auto" style="max-width: 130px">
                                    <div id="total-earning-chart-1"></div>
                                    <apexchart class="apex-charts" height="150" dir="ltr" :series="totalEarningChart1.series"
                                        :options="totalEarningChart1.chartOptions">
                                    </apexchart>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol cols="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="my-n4 text-center mx-auto" style="max-width: 130px">
                                    <div id="total-earning-chart-2"></div>
                                    <apexchart class="apex-charts" height="150" dir="ltr" :series="totalEarningChart2.series"
                                        :options="totalEarningChart2.chartOptions">
                                    </apexchart>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>
    </Layout>
</template>