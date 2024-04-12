<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "DATA",
    components: {
        Layout, pageheader
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Data" pageTitle="Widget" />

        <BRow>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardBody class="pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Team members</h5>
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
                    </BCardBody>
                    <ul class="list-group list-group-flush border-top-0">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user-image"
                                        class="user-avtar rounded wid-50 hie-50">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h6 class="mb-1">David Jones</h6>
                                    <p class="mb-0">Project Leader</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <p class="text-muted mb-0">5 min ago</p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/user/avatar-3.jpg" alt="user-image"
                                        class="user-avtar rounded wid-50 hie-50">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h6 class="mb-1">Robert Smith</h6>
                                    <p class="mb-0">HR Manager</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <p class="text-muted mb-0">Yesterday</p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/user/avatar-5.jpg" alt="user-image"
                                        class="user-avtar rounded wid-50 hie-50">
                                </div>
                                <div class="flex-grow-1 mx-2">
                                    <h6 class="mb-1">John larry</h6>
                                    <p class="mb-0">Developer</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <p class="text-muted mb-0">1 hour ago</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardBody class="pb-0">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0">Conversion Rate</h5>
                            <i class="ph-duotone ph-info f-20 ms-1" data-bs-toggle="tooltip"
                                data-bs-title="Conversion Rate"></i>
                        </div>
                        <div class="d-flex align-items-start my-3">
                            <h2>5.63</h2>
                            <p>%</p>
                            <span class="badge bg-light-success ms-2"><i class="ti ti-arrow-up me-1"></i> 3.4%</span>
                        </div>
                    </BCardBody>
                    <BCardBody class="table-body pt-0 px-0">
                        <div class="table-responsive">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6 class="f-w-500 mb-0">Added to Cart</h6>
                                            <span class="d-block text-muted">5 visits</span>
                                        </td>
                                        <td class="text-end">7.04</td>
                                        <td class="text-end"><i class="ti ti-arrow-up text-success"></i> 4.0%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="f-w-500 mb-0">Reached Checkout</h6>
                                            <span class="d-block text-muted">5 visits</span>
                                        </td>
                                        <td class="text-end">7.04</td>
                                        <td class="text-end"><i class="ti ti-arrow-up text-success"></i> 2.0%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="f-w-500 mb-0">Purchased</h6>
                                            <span class="d-block text-muted">4 orders</span>
                                        </td>
                                        <td class="text-end">5.63</td>
                                        <td class="text-end"><i class="ti ti-arrow-down text-danger"></i> 1.4%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardBody class="pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">My Task</h5>
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
                    </BCardBody>
                    <ul class="list-group list-group-flush border-top-0">
                        <li class="list-group-item">
                            <div class="d-flex align-items-start">
                                <div class="flex-grow-1 me-2">
                                    <h6 class="mb-0">Follow up client for feedback</h6>
                                    <p class="my-1"><i class="ti ti-archive"></i> Sending report</p>
                                    <span class="badge bg-danger rounded-pill">00 : 15</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="avtar avtar-s btn-link-secondary">
                                        <i class="ti ti-circle-check text-success f-18"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-start">
                                <div class="flex-grow-1 me-2">
                                    <h6 class="mb-0">Follow up client for feedback</h6>
                                    <p class="my-1"><i class="ti ti-folder"></i> Received report</p>
                                    <span class="badge bg-success rounded-pill">00 : 30</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="avtar avtar-s btn-link-secondary">
                                        <i class="ti ti-circle-check f-18"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-start">
                                <div class="flex-grow-1 me-2">
                                    <h6 class="mb-0">Follow up client for feedback</h6>
                                    <p class="my-1"><i class="ti ti-archive"></i> Sending report</p>
                                    <span class="badge bg-danger rounded-pill">00 : 15</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="avtar avtar-s btn-link-secondary">
                                        <i class="ti ti-circle-check f-18"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </BCard>
            </BCol>
            <BCol xl="6" md="12">
                <BCard no-body class="table-card">
                    <BCardHeader>
                        <h5>Visits by Location</h5>
                    </BCardHeader>
                    <BCardBody class="card-body pt-3 pb-0 px-0">
                        <div class="table-responsive">
                            <table class="table table-hover table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/GERMANY.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">Germany</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">38</td>
                                        <td><i class="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 5.8%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/USA.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">USA</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">928</td>
                                        <td><i class="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 51.2%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/AUSTRALIA.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">Australia</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">674</td>
                                        <td><i class="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 17.1%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/UK.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">UK</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">1,438</td>
                                        <td><i class="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 15.8%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/BRAZIL.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">Brazil</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">90</td>
                                        <td><i class="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 9.8%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/GERMANY.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">Germany</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">123</td>
                                        <td><i class="ti ti-arrow-up text-success f-18 align-text-bottom"></i> 5.8%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="@/assets/images/widget/USA.jpg" alt=""
                                                    class="img-fluid wid-30 rounded-1">
                                                <h6 class="mb-0 ms-2">USA</h6>
                                            </div>
                                        </td>
                                        <td class="text-end">928</td>
                                        <td><i class="ti ti-arrow-down text-danger f-18 align-text-bottom"></i> 51.2%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6" md="12">
                <BCard no-body class="latest-activity-card">
                    <BCardHeader>
                        <h5>Your quick style guide line</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="latest-update-box">
                            <BRow class="p-t-20 p-b-30">
                                <BCol class="col-auto text-end update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">08:00 AM</p>
                                    <div class="border border-2 border-success text-success update-icon">20</div>
                                </BCol>
                                <BCol>
                                    <a href="#!" class="d-inline-flex align-items-center">
                                        <h6 class="mb-0 me-2">Create report</h6>
                                        <span class="badge bg-success">Done</span>
                                    </a>
                                    <p class="text-muted m-b-0">The trip was an amazing and a life changing experience!!</p>
                                </BCol>
                            </BRow>
                            <BRow class="p-b-30">
                                <BCol class="col-auto text-end update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">08:20 AM</p>
                                    <div class="border border-2 border-primary text-primary update-icon"><i
                                            class="ph-duotone ph-rocket"></i></div>
                                </BCol>
                                <BCol>
                                    <a href="#!" class="d-inline-flex align-items-center">
                                        <h6 class="mb-0 me-2">Create report</h6>
                                        <span class="badge bg-primary">Running</span>
                                    </a>
                                    <p class="text-muted m-b-0">Free courses for all our customers at A1 Conference Room -
                                        9:00 am tomorrow!</p>
                                </BCol>
                            </BRow>
                            <BRow class="p-b-30">
                                <div class="col-auto text-end update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">08:20 AM</p>
                                    <div class="border border-2 border-warning text-warning update-icon"><i
                                            class="ph-duotone ph-hand-palm"></i></div>
                                </div>
                                <BCol>
                                    <a href="#!" class="d-inline-flex align-items-center">
                                        <h6 class="mb-0 me-2">Create report</h6>
                                        <span class="badge bg-warning">Pending</span>
                                    </a>
                                    <p class="text-muted m-b-0">Free courses for all our customers at A1 Conference Room -
                                        9:00 am tomorrow!</p>
                                </BCol>
                            </BRow>
                            <BRow>
                                <div class="col-auto text-end update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">09:15 AM</p>
                                    <div class="border border-2 border-danger text-danger update-icon">N</div>
                                </div>
                                <BCol>
                                    <a href="#!" class="d-inline-flex align-items-center">
                                        <h6 class="mb-0 me-2">Create report</h6>
                                        <span class="badge bg-danger">Not Start</span>
                                    </a>
                                    <p class="text-muted m-b-0">Happy Hour! Free drinks at <span> <a href="#!"
                                                class="text-primary">Cafe-Bar all </a> </span>day long!</p>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>