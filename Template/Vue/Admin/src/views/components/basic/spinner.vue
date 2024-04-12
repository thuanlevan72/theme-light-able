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
                <h2>Spinners</h2>
                <p class="text-muted">Indicate the loading state of a component or page with Bootstrap spinners, built
                    entirely with HTML, CSS, and no JavaScript.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/spinner.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Border spinner</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BSpinner />
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Border spinner [ Colors ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BSpinner variant="primary" />
                        <BSpinner variant="secondary" />
                        <BSpinner variant="success" />
                        <BSpinner variant="danger" />
                        <BSpinner variant="warning" />
                        <BSpinner variant="info" />
                        <BSpinner variant="light" />
                        <BSpinner variant="dark" />
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Growing spinner</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BSpinner type="grow" />
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Growing spinner [ Colors ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BSpinner type="grow" variant="primary" />
                        <BSpinner type="grow" variant="secondary" />
                        <BSpinner type="grow" variant="success" />
                        <BSpinner type="grow" variant="danger" />
                        <BSpinner type="grow" variant="warning" />
                        <BSpinner type="grow" variant="info" />
                        <BSpinner type="grow" variant="light" />
                        <BSpinner type="grow" variant="dark" />
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Placement</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <h6>Start</h6>
                        <div class="d-flex justify-content-start">
                            <BSpinner />
                        </div>
                        <hr>
                        <h6>Center</h6>
                        <div class="d-flex justify-content-center">
                            <BSpinner />
                        </div>
                        <hr>
                        <h6>End</h6>
                        <div class="d-flex justify-content-end">
                            <BSpinner />
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Size</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <h6>Small</h6>
                        <BSpinner small label="Small spinner" />
                        <BSpinner small label="Small spinner" type="grow" />
                        <hr>
                        <h6>Custom</h6>
                        <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
                        <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow" />
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
                        <h5>Buttons</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow class="g-4">
                            <BCol sm="6">
                                <BRow class="g-3">
                                    <BCol class="col-12">
                                        <BButton variant="primary" disabled>
                                            <BSpinner small />
                                            <span class="visually-hidden">Loading...</span>
                                        </BButton>
                                    </BCol>
                                    <BCol class="col-12">
                                        <BButton variant="primary" disabled>
                                            <BSpinner small />
                                            Loading...
                                        </BButton>
                                    </BCol>
                                </BRow>
                            </BCol>
                            <BCol sm="6">
                                <BRow class="g-3">
                                    <BCol class="col-12">
                                        <BButton variant="primary" disabled>
                                            <BSpinner small type="grow" />
                                            <span class="visually-hidden">Loading...</span>
                                        </BButton>
                                    </BCol>
                                    <BCol class="col-12">
                                        <BButton variant="primary" disabled>
                                            <BSpinner small type="grow" />
                                            Loading...
                                        </BButton>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
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