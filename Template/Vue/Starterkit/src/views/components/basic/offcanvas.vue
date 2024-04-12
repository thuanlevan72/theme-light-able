<script>
import simplebar from "simplebar-vue"
import Layout from "@/layout/c-main.vue";

export default {
    data() {
        return {
            defaultOffcanvas: false,
            topOffcanvas: false,
            rightOffcanvas: false,
            bottomOffcanvas: false,
            backdropOff: false,
            backdrop: null,
        }
    },
    components: {
        Layout, simplebar
    },
    methods: {
        backdropType(type, backdropType) {
            if (type == false) {
                this.backdropOff = true;
                this.backdrop = backdropType;
            } else {
                this.backdropOff = true;
                this.backdrop = backdropType;
            }
        }
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Offcanvas</h2>
                <p class="text-muted">Build hidden sidebars into your project for navigation, shopping carts, and more with
                    a few classes and our JavaScript plugin.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/offcanvas.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Live demo</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div class="bd-example-modal">
                            <div class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    Content for the offcanvas goes here. You can place just about any Bootstrap component or
                                    custom
                                    elements here.
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="btn-page pc-component">
                        <div class="hstack flex-wrap gap-2">
                            <BLink @click="defaultOffcanvas = true" class="btn btn-primary" data-bs-toggle="offcanvas"
                                href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                Link with href
                            </BLink>
                            <BButton variant="primary" @click="defaultOffcanvas = true">Button with data-bs-target</BButton>
                        </div>
                        <BOffcanvas v-model="defaultOffcanvas" title="Offcanvas" header-class="border-bottom"
                            body-class="p-0 overflow-hidden" footer-class="border-top p-3 text-center">
                            <simplebar data-simplebar style="height: 670px">
                                <div class="offcanvas-body customer-body">
                                    <h5 class="mb-2">$746.5k <small class="text-success f-w-400">+20.6 <i
                                                class="ti ti-arrow-up"></i></small></h5>
                                    <p class="text-muted mb-3">Past 30 days</p>
                                    <div class="table-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Customer</th>
                                                        <th class="text-end">Plan</th>
                                                        <th class="text-end">MRR</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Logicoma</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-star f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">UAC</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span>$199</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Matsumura</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Logicoma</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-star f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">UAC</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span>$199</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Matsumura</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close
                                        </button>
                                    </div>
                                </div>
                            </simplebar>
                        </BOffcanvas>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Placement</h5>
                    </BCardHeader>
                    <BCardBody class="btn-page pc-component">
                        <!-- <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Top offcanvas <i
                                data-feather="chevrons-up"></i></button> -->
                        <BButton @click="topOffcanvas = true" variant="light-secondary">
                            Top Offcanvas
                        </BButton>
                        <BOffcanvas placement="top" v-model="topOffcanvas" title="Offcanvas top" hide-header-close
                            header-class="border-bottom" body-class="p-0 overflow-hidden">
                            <div class="offcanvas-body">
                                <h6>Some Title</h6>
                                <p class="mb-4">
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text,
                                    images, lists, etc.
                                </p>
                                <div class="dropdown mb-3 d-inline-block me-2">
                                    <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                            </div>
                        </BOffcanvas>
                        <BButton variant="light-secondary" @click="rightOffcanvas = true">Right offcanvas <i
                                data-feather="chevrons-right"></i></BButton>
                        <BOffcanvas placement="end" v-model="rightOffcanvas" title="Offcanvas right" hide-header-close
                            header-class="border-bottom" body-class="p-0 overflow-hidden">
                            <simplebar data-simplebar style="height: 670px">
                                <div class="offcanvas-body">
                                    <h5 class="mb-2">$746.5k <small class="text-success f-w-400">+20.6 <i
                                                class="ti ti-arrow-up"></i></small></h5>
                                    <p class="text-muted mb-3">Past 30 days</p>
                                    <div class="table-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Customer</th>
                                                        <th class="text-end">Plan</th>
                                                        <th class="text-end">MRR</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Logicoma</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-star f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">UAC</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span>$199</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Matsumura</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Logicoma</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-star f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">UAC</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span>$199</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-arrow-down f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Matsumura</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center text-muted">
                                                                <div
                                                                    class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                                                    <i class="ti ti-wallet f-16"></i>
                                                                </div>
                                                                <span class="text-truncate w-100">Biffco</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-end"><span
                                                                class="badge bg-light-success">Team</span>
                                                        </td>
                                                        <td class="text-end f-w-600"><span class="text-danger">-$72</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close
                                        </button>
                                    </div>
                                </div>
                            </simplebar>
                        </BOffcanvas>
                        <BButton variant="light-secondary" @click="bottomOffcanvas = true">Bottom offcanvas <i
                                data-feather="chevrons-down"></i></BButton>

                        <BOffcanvas placement="bottom" v-model="bottomOffcanvas" title="Offcanvas bottom" hide-header-close
                            header-class="border-bottom" body-class="p-0 overflow-hidden">
                            <div class="offcanvas-body">
                                <h6>Some Title</h6>
                                <p class="mb-4">
                                    Some text as placeholder. In real life you can have the elements you have chosen.
                                    Like,
                                    text,
                                    images, lists, etc.
                                </p>
                                <div class="dropdown mb-3 d-inline-block me-2">
                                    <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                            </div>
                        </BOffcanvas>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Backdrop</h5>
                    </BCardHeader>
                    <BCardBody class="btn-page pc-component">
                        <BButton @click="backdropType(false, false)" variant="light-secondary">
                            Enable Body Scrolling
                        </BButton>

                        <BButton @click="backdropType(false, true)" variant="light-secondary">
                            Enable Backdrop (Default)
                        </BButton>

                        <BButton @click="backdropType(true, true)" variant="light-secondary">
                            Enable Both Scrolling & Backdrop
                        </BButton>
                        <BOffcanvas v-model="backdropOff" title="Colored with scrolling" :backdrop="backdrop"
                            header-class="border-bottom" body-class="p-0 overflow-hidden"
                            footer-class="border-top p-3 text-center">
                            <div class="offcanvas-body">
                                <div class="alert alert-success mb-4" role="alert">
                                    <p class="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in
                                        action.</p>
                                </div>
                                <h4 class="mb-4">Main Title</h4>
                                <h6>Some Title</h6>
                                <p class="mb-4">
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text,
                                    images, lists, etc.
                                </p>
                                <h6>Some Title</h6>
                                <p class="mb-4">
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text,
                                    images, lists, etc.
                                </p>
                                <h6>Some Title</h6>
                                <p class="mb-4">
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text,
                                    images, lists, etc.
                                </p>
                                <div class="dropdown mb-3 d-inline-block me-2">
                                    <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                            </div>
                        </BOffcanvas>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>