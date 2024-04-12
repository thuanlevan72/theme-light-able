<script>
import Layout from "@/layout/c-main.vue";

export default {
    components: {
        Layout
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Toasts</h2>
                <p class="text-muted">Push notifications to your visitors with a toast, a lightweight and easily
                    customizable alert message.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/toast.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>live toast</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="position-fixed top-0 end-0 p-3" style="z-index: 99999">
                            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                        style="width: 17px">
                                    <strong class="me-auto">Moon</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                                <div class="toast-body"> Hello, world! This is a toast message. </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Translucent</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="bg-dark p-4 mb-2">
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                        style="width: 17px">
                                    <strong class="me-auto">Moon</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                                <div class="toast-body"> Hello, world! This is a toast message. </div>
                            </div>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Color schemes</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="bg-body toast-container p-4 mb-2">
                            <div class="toast text-white bg-primary fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-secondary fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-success fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-warning fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-danger fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-info fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast text-white bg-dark fade show" role="alert" aria-live="assertive"
                                aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Basic</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="bg-body p-4 mb-2">
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                        style="width: 17px">
                                    <strong class="me-auto">Moon</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                                <div class="toast-body"> Hello, world! This is a toast message. </div>
                            </div>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Stacking</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="bg-body toast-container p-4 mb-2">
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                        style="width: 17px">
                                    <strong class="me-auto">Moon</strong>
                                    <small>9 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                                <div class="toast-body"> Hello, world! This is a toast message. </div>
                            </div>
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                        style="width: 17px">
                                    <strong class="me-auto">Moon</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                                <div class="toast-body"> Hello, world! This is a toast message. </div>
                            </div>
                        </div>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <h5>Custom content</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="bg-body toast-container p-4 mb-2">
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body">
                                    Hello, world! This is a toast message.
                                    <div class="mt-2 pt-2 border-top">
                                        <button type="button" class="btn btn-light-primary btn-sm  mb-1 me-1">Take
                                            action</button>
                                        <button type="button" class="btn btn-light-danger btn-sm  mb-1 me-1"
                                            data-bs-dismiss="toast">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <BCardBody class="border-bottom">
                        <form>
                            <select class="form-select" id="selectToastPlacement">
                                <option value="" selected>Select a position...</option>
                                <option value="top-0 start-0">Top left</option>
                                <option value="top-0 start-50 translate-middle-x">Top center</option>
                                <option value="top-0 end-0">Top right</option>
                                <option value="top-50 start-0 translate-middle-y">Middle left</option>
                                <option value="top-50 start-50 translate-middle">Middle center</option>
                                <option value="top-50 end-0 translate-middle-y">Middle right</option>
                                <option value="bottom-0 start-0">Bottom left</option>
                                <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                <option value="bottom-0 end-0">Bottom right</option>
                            </select>
                        </form>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                    <BCardBody class="pc-component">
                        <div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts"
                            style="height: 200px">
                            <div class="toast-container position-absolute p-3" id="toastPlacement">
                                <div class="toast show fade">
                                    <div class="toast-header">
                                        <img src="@/assets/images/favicon.svg" class="img-fluid m-r-5" alt="images"
                                            style="width: 17px">
                                        <strong class="me-auto">Moon</strong>
                                        <small>11 mins ago</small>
                                    </div>
                                    <div class="toast-body"> Hello, world! This is a toast message. </div>
                                </div>
                            </div>
                        </div>
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