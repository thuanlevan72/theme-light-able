<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "USER",
    components: {
        Layout, pageheader
    }
}
</script>

<template>
    <Layout>
        <pageheader title="User" pageTitle="Widget" />

        <BRow>
            <BCol md="6" xl="4">
                <BCard no-body class="user-card">
                    <BCardBody>
                        <div class="user-cover-bg">
                            <img src="@/assets/images/application/img-user-cover-1.jpg" alt="image" class="img-fluid">
                            <div class="cover-data">
                                <div class="d-inline-flex align-items-center">
                                    <i class="ph-duotone ph-star text-warning me-1"></i>
                                    4.5 <small class="text-white text-opacity-50">/ 5</small>
                                </div>
                            </div>
                        </div>
                        <div class="chat-avtar card-user-image">
                            <img src="@/assets/images/user/avatar-1.jpg" alt="user-image"
                                class="img-thumbnail rounded-circle ">
                            <i class="chat-badge bg-success"></i>
                        </div>
                        <div class="d-flex flex-wrap gap-2">
                            <div class="flex-grow-1">
                                <h6 class="mb-1">William Bond</h6>
                                <p class="text-muted text-sm mb-0">DM on <a href="#" class="text-primary">@williambond</a>
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <button class="btn btn-primary btn-sm">Message</button>
                                <button class="btn btn-outline-secondary btn-sm ms-1">Follow</button>
                            </div>
                        </div>
                        <BRow class="g-3 my-3 text-center">
                            <BCol cols="4">
                                <h5 class="mb-0">86</h5>
                                <small class="text-muted">Post</small>
                            </BCol>
                            <BCol cols="4" class="border border-top-0 border-bottom-0">
                                <h5 class="mb-0">40</h5>
                                <small class="text-muted">Project</small>
                            </BCol>
                            <BCol cols="4">
                                <h5 class="mb-0">4.5K</h5>
                                <small class="text-muted">Members</small>
                            </BCol>
                        </BRow>
                        <div class="saprator my-3">
                            <span>Skills</span>
                        </div>
                        <div class="text-center">
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
                        </div>
                        <div class="saprator my-3">
                            <span>Task completed</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-primary" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <h6 class="mb-0">30%</h6>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardBody class="position-relative">
                        <div class="text-center mt-3">
                            <div class="chat-avtar d-inline-flex mx-auto">
                                <img class="rounded-circle img-fluid wid-90 img-thumbnail"
                                    src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                <i class="chat-badge bg-danger me-2 mb-2"></i>
                            </div>
                            <h5 class="mb-0">William Bond</h5>
                            <p class="text-muted text-sm">DM on <a href="#" class="link-primary"> @williambond </a> 😍</p>
                            <ul class="list-inline mx-auto mt-4 mb-0">
                                <li class="list-inline-item">
                                    <a href="#" class="avtar avtar-s btn-light-secondary">
                                        <i class="ph-duotone ph-phone f-24"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="avtar avtar-s btn-light-secondary ms-1">
                                        <i class="ph-duotone ph-video-camera f-24"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="avtar avtar-s btn-light-secondary ms-1">
                                        <i class="ph-duotone ph-messenger-logo f-24"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody class="position-relative">
                        <div class="text-center mt-3">
                            <div class="chat-avtar d-inline-flex mx-auto">
                                <img class="rounded-circle img-fluid wid-90 img-thumbnail"
                                    src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                <i class="chat-badge bg-danger me-2 mb-2"></i>
                            </div>
                            <h5 class="mb-0">William Bond</h5>
                            <p class="text-muted text-sm">DM on <a href="#" class="link-primary"> @williambond </a>
                                😍
                            </p>
                            <BRow class="row">
                                <BCol class="col-6">
                                    <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                </BCol>
                                <BCol class="col-6">
                                    <div class="d-grid"><button class="btn btn-outline-secondary">Decline</button>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" xl="4">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h5 class="mb-0">Add Fund</h5>
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
                        <div class="text-center">
                            <p class="mb-1">Amount</p>
                            <h3>$100</h3>
                            <ul class="list-inline my-3">
                                <li class="list-inline-item"><span class="badge border bg-light-primary">$100</span></li>
                                <li class="list-inline-item"><span
                                        class="badge border bg-transparent border text-body">$150</span></li>
                                <li class="list-inline-item"><span
                                        class="badge border bg-transparent border text-body">$200</span></li>
                                <li class="list-inline-item"><span
                                        class="badge border bg-transparent border text-body">$250</span></li>
                            </ul>
                        </div>
                        <div class="border rounded p-3 my-3">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/user/avatar-1.jpg" alt="user-image"
                                        class="avtar rounded-circle wid-45 hei-45">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-0">Able pro</h6>
                                    <small class="text-muted">@ableprodevelop</small>
                                </div>
                                <div class="dropdown">
                                    <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti ti-chevron-down f-18"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a class="dropdown-item" href="#">Active</a>
                                        <a class="dropdown-item" href="#">Disable</a>
                                        <a class="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary">Confirm</button>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>