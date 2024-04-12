<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "STATISTICS",
    components: {
        Layout, pageheader
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Statistics" pageTitle="Widget" />

        <BRow>
            <BCol sm="6" xl="4">
                <BCard no-body class="statistics-card-1">
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Online Orders</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                            aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }"
                            :style="{ zIndex: dropdownZIndex }">
                            <template #button-content>
                                <i class="material-icons-two-tone f-18">more_vert</i>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <img src="@/assets/images/widget/img-status-1.svg" alt="img" class="img-fluid img-bg h-100">
                        <div class="d-flex align-items-center">
                            <h3 class="f-w-300 d-flex align-items-center m-b-0">237 <small class="text-muted">/400</small>
                            </h3>
                            <span class="badge bg-light-success ms-2">36%</span>
                        </div>
                        <p class="text-muted mb-2 text-sm mt-3">Delivery Orders</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-2" role="progressbar" style="width: 75%"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard class="statistics-card-1" no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Pending Orders</h5>
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
                        <img src="@/assets/images/widget/img-status-2.svg" alt="img" class="img-fluid img-bg">
                        <div class="d-flex align-items-center">
                            <h3 class="f-w-300 d-flex align-items-center m-b-0">100 <small class="text-muted">/500</small>
                            </h3>
                            <span class="badge bg-light-primary ms-2">20%</span>
                        </div>
                        <p class="text-muted mb-2 text-sm mt-3">Delivery Orders</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-1" role="progressbar" style="width: 75%"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard class="statistics-card-1" no-body style="">
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Return Orders</h5>
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
                        <img src="@/assets/images/widget/img-status-3.svg" alt="img" class="img-fluid img-bg">
                        <div class="d-flex align-items-center">
                            <h3 class="f-w-300 d-flex align-items-center m-b-0">50 <small class="text-muted">/400</small>
                            </h3>
                            <span class="badge bg-light-danger ms-2">10%</span>
                        </div>
                        <p class="text-muted mb-2 text-sm mt-3">Return Orders</p>
                        <div class="progress" style="height: 7px">
                            <div class="progress-bar bg-brand-color-3" role="progressbar" style="width: 75%"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Register User</h5>
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
                        <div class="d-flex align-items-end mb-3">
                            <h4 class="mb-0">1205</h4>
                            <span class="badge bg-light-success ms-2">20%</span>
                        </div>
                        <p class="text-muted mb-0">Monthly Increase</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Daily User</h5>
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
                        <div class="d-flex align-items-end mb-3">
                            <h4 class="mb-0">467</h4>
                            <span class="badge bg-light-warning ms-2">10%</span>
                        </div>
                        <p class="text-muted mb-0">Weekly Increase</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Premium User</h5>
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
                        <div class="d-flex align-items-end mb-3">
                            <h4 class="mb-0">346</h4>
                            <span class="badge bg-light-primary ms-2">50%</span>
                        </div>
                        <p class="text-muted mb-0">Yearly Increase</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12" xl="4">
                <BCard no-body class="overflow-hidden">
                    <BCardBody class="bg-light-primary">
                        <BRow class="align-items-center">
                            <BCol cols="6">
                                <p class="text-muted mb-1">Total Visitors</p>
                                <div class="d-flex align-items-center mb-1">
                                    <h4 class="mb-0">235</h4>
                                    <span class="badge bg-primary ms-2">20%</span>
                                </div>
                                <p class="text-primary text-sm mb-0">More than last Month</p>
                            </BCol>
                            <BCol cols="6">
                                <img src="@/assets/images/widget/img-visitor.png" alt="img" class="img-fluid">
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0"><i class="ph-duotone ph-circle text-warning me-2"></i> Parcel in the way</p>
                            <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip"
                                data-bs-title="Parcel in the way"></i>
                        </div>
                        <div class="d-flex align-items-center my-2">
                            <h2 class="d-flex align-items-center m-b-0">25 <small class="text-muted">/40</small></h2>
                        </div>
                        <p class="mb-0">
                            <span class="text-success"><i class="ph-duotone ph-caret-up f-20 align-bottom"></i> +15%</span>
                            last month
                        </p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5>Product earn</h5>
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
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="text-muted mb-0">Sale Product</p>
                                <div class="d-flex align-items-end mt-1">
                                    <h4 class="mb-0">375</h4>
                                    <span class="badge bg-light-success ms-2">36%</span>
                                </div>
                            </div>
                            <div class="avtar bg-brand-color-2 text-white">
                                <i class="ph-duotone ph-cube f-26"></i>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12" xl="8">
                <BCard no-body class="bg-brand-color-1 earning-card statistics-card-1">
                    <BCardHeader class="d-flex align-items-center justify-content-between py-2">
                        <h5 class="text-white">Earnings</h5>
                        <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                            aria-haspopup="true" :offset="{ alignmentAxis: -160, crossAxis: 0, mainAxis: 0 }">
                            <template #button-content><span class="text-muted"><i
                                        class="material-icons-two-tone bg-white f-18">more_vert</i></span>
                            </template>
                            <BDropdownItem>View</BDropdownItem>
                            <BDropdownItem>Edit</BDropdownItem>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody class="overflow-hidden">
                        <img src="@/assets/images/widget/img-earning-bg.svg" alt="img" class="img-fluid img-bg h-100">
                        <ul class="nav nav-fill nav-pills align-items-center justify-content-center mb-5" id="pills-tab"
                            role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-earnings-mon" data-bs-toggle="pill"
                                    href="#earnings-mon" role="tab" aria-controls="earnings-mon"
                                    aria-selected="true">Mon</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-tue" data-bs-toggle="pill" href="#earnings-tue"
                                    role="tab" aria-controls="earnings-tue" aria-selected="false">Tue</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-wed" data-bs-toggle="pill" href="#earnings-wed"
                                    role="tab" aria-controls="earnings-wed" aria-selected="false">Wed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-thu" data-bs-toggle="pill" href="#earnings-thu"
                                    role="tab" aria-controls="earnings-thu" aria-selected="false">Thu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-fri" data-bs-toggle="pill" href="#earnings-fri"
                                    role="tab" aria-controls="earnings-fri" aria-selected="false">Fri</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-sat" data-bs-toggle="pill" href="#earnings-sat"
                                    role="tab" aria-controls="earnings-sat" aria-selected="false">Sat</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-earnings-sun" data-bs-toggle="pill" href="#earnings-sun"
                                    role="tab" aria-controls="earnings-sun" aria-selected="false">Sun</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="tabContent-pills">
                            <div class="tab-pane fade show active" id="earnings-mon" role="tabpanel"
                                aria-labelledby="pills-earnings-mon">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">984,632</h3>
                                            <span class="badge bg-light-danger ms-2">10%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-tue" role="tabpanel"
                                aria-labelledby="pills-earnings-tue">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">222,586</h3>
                                            <span class="badge bg-light-success ms-2">30%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-wed" role="tabpanel"
                                aria-labelledby="pills-earnings-wed">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">859,745</h3>
                                            <span class="badge bg-light-primary ms-2">50%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-thu" role="tabpanel"
                                aria-labelledby="pills-earnings-thu">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">785,684</h3>
                                            <span class="badge bg-light-warning ms-2">40%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-fri" role="tabpanel"
                                aria-labelledby="pills-earnings-fri">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">123,486</h3>
                                            <span class="badge bg-light-info ms-2">60%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-sat" role="tabpanel"
                                aria-labelledby="pills-earnings-sat">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">859,745</h3>
                                            <span class="badge bg-light-primary ms-2">50%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="earnings-sun" role="tabpanel"
                                aria-labelledby="pills-earnings-sun">
                                <div class="media align-items-center">
                                    <div class="avtar avtar-l bg-white bg-opacity-50 flex-shrink-0">
                                        <i class="ph-duotone ph-chart-bar text-white f-30"></i>
                                    </div>
                                    <div class="media-body ms-3">
                                        <div class="d-inline-flex align-items-center mb-1">
                                            <h3 class="mb-0 text-white">222,586</h3>
                                            <span class="badge bg-light-success ms-2">30%</span>
                                        </div>
                                        <p class="mb-0 text-white text-opacity-75">Total Earnings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-inline-flex align-items-center">
                                <i class="ph-duotone ph-arrow-down-left text-primary me-2 f-20"></i>
                                <p class="text-muted mb-0">Income</p>
                            </div>
                            <h4 class="mb-0">3.15k</h4>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <div class="media align-items-center mb-3">
                            <img src="@/assets/images/favicon.svg" alt="img" class="img-fluid">
                            <div class="media-body ms-2">
                                <h5 class="mb-0">Moon</h5>
                                <span class="text-sm text-muted">Moon@developers.io</span>
                            </div>
                        </div>
                        <div class="media align-items-center">
                            <div class="media-body me-2">
                                <div class="user-group">
                                    <img src="@/assets/images/user/avatar-6.jpg" alt="user-image" class="avtar">
                                    <img src="@/assets/images/user/avatar-6.jpg" alt="user-image" class="avtar">
                                    <img src="@/assets/images/user/avatar-7.jpg" alt="user-image" class="avtar">
                                    <img src="@/assets/images/user/avatar-8.jpg" alt="user-image" class="avtar">
                                    <span class="avtar rounded-circle bg-light-warning text-warning">+2</span>
                                </div>
                            </div>
                            <a href="#" class="avtar avtar-s bg-primary rounded-circle text-white"><i
                                    class="ti ti-plus f-18"></i></a>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <h6>Languages</h6>
                        <p class="text-muted text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                        <div class="progress my-3 bg-transparent" style="height: 8px">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="30"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="30"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="20"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <BRow class="g-1">
                            <BCol cols="6">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-success f-12"></i> React native</p>
                            </BCol>
                            <BCol cols="6">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-primary f-12"></i> Figma</p>
                            </BCol>
                            <BCol cols="6">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-warning f-12"></i> Bootstrap 5</p>
                            </BCol>
                            <BCol cols="6">
                                <p class="mb-0"><i class="ph-duotone ph-circle text-danger f-12"></i> Shopify</p>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <p class="mb-0">Users</p>
                            <i class="ph-duotone ph-arrow-square-out f-20 ms-1" data-bs-toggle="tooltip"
                                data-bs-title="Users"></i>
                        </div>
                        <h5 class="mb-0">56,908</h5>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <p class="mb-0">Income this month</p>
                            <i class="ph-duotone ph-arrow-square-in f-20 ms-1 text-danger" data-bs-toggle="tooltip"
                                data-bs-title="Income this month"></i>
                        </div>
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0">$3,569</h5>
                            <span class="badge bg-danger ms-2"><i class="ph-duotone ph-arrow-down me-1 align-middle"></i>
                                2.6%</span>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center mb-2">
                            <h6 class="mb-0">Releases new version</h6>
                            <span class="badge bg-primary ms-2">350</span>
                        </div>
                        <div class="media align-items-start">
                            <i class="ph-duotone ph-tag-chevron text-primary f-30"></i>
                            <div class="media-body ms-3">
                                <div class="d-inline-flex align-items-center mb-2">
                                    <h6 class="mb-0">v0.63.3</h6>
                                    <span class="badge bg-light-success ms-2">Latest</span>
                                </div>
                                <p class="mb-0 text-muted">on Sep 29</p>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>