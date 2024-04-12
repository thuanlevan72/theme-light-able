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
                <h2>Badges</h2>
                <p class="text-muted">Documentation and examples for badges, our small count and labeling component.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/badge.html">
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
                        <h5>Basic Badges</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <h1>Example heading <span class="badge bg-dark">New</span></h1>
                        <h2>Example heading <span class="badge bg-dark">New</span></h2>
                        <h3>Example heading <span class="badge bg-dark">New</span></h3>
                        <h4>Example heading <span class="badge bg-dark">New</span></h4>
                        <h5>Example heading <span class="badge bg-dark">New</span></h5>
                        <h6>Example heading <span class="badge bg-dark">New</span></h6>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="btn-page">
                    <BCardHeader>
                        <h5>Button Badges</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <button type="button" class="btn btn-primary">primary <span
                                    class="badge bg-light text-dark">4</span></button>
                            <button type="button" class="btn btn-secondary position-relative">Inbox
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            <button type="button" class="btn btn-info position-relative ms-2">Profile
                                <span
                                    class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </button>
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
                        <h5>Contextual Variations</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge bg-primary">Primary</span>
                            <span class="badge bg-secondary">Secondary</span>
                            <span class="badge bg-success">Success</span>
                            <span class="badge bg-danger">Danger</span>
                            <span class="badge bg-warning text-dark">Warning</span>
                            <span class="badge bg-info">Info</span>
                            <span class="badge bg-light text-dark">Light</span>
                            <span class="badge bg-dark">Dark</span>
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
                        <h5>Pill Badges</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge rounded-pill bg-primary">Primary</span>
                            <span class="badge rounded-pill bg-secondary">Secondary</span>
                            <span class="badge rounded-pill bg-success">Success</span>
                            <span class="badge rounded-pill bg-danger">Danger</span>
                            <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                            <span class="badge rounded-pill bg-info">Info</span>
                            <span class="badge rounded-pill bg-light text-dark">Light</span>
                            <span class="badge rounded-pill bg-dark">Dark</span>
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
                        <h5>Light variant</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge bg-light-primary">Primary</span>
                            <span class="badge bg-light-secondary">Secondary</span>
                            <span class="badge bg-light-success">Success</span>
                            <span class="badge bg-light-danger">Danger</span>
                            <span class="badge bg-light-warning">Warning</span>
                            <span class="badge bg-light-info">Info</span>
                            <span class="badge bg-light-light text-dark">Light</span>
                            <span class="badge bg-light-dark">Dark</span>
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