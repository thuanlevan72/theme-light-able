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
                <h2>Progress</h2>
                <p class="text-muted">Documentation and examples for using Bootstrap custom progress bars featuring support
                    for stacked bars, animated backgrounds, and text labels.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/progress.html">
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
                        <h5>Progress</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress :value="0" class="mb-4" />
                        <BProgress :value="25" class="mb-4" />
                        <BProgress :value="50" class="mb-4" />
                        <BProgress :value="75" class="mb-4" />
                        <BProgress :value="100" class="mb-4" />
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
                        <h5>Labels</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress :value="25" height="20px" show-value class="mb-4" />
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
                        <h5>Height</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress :value="25" height="1px" class="mb-4" />
                        <BProgress :value="25" height="20px" class="mb-4" />
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
                        <h5>Backgrounds</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress variant="success" :value="25" class="mb-4" />
                        <BProgress variant="info" :value="50" class="mb-4" />
                        <BProgress variant="warning" :value="75" class="mb-4" />
                        <BProgress variant="danger" :value="100" class="mb-4" />
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
                        <h5>Multiple Bars</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress class="progress-stacked">
                            <BProgressBar :value="15" />
                            <BProgressBar :value="30" variant="success" />
                            <BProgressBar :value="20" variant="info" />
                        </BProgress>
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
                        <h5>Striped</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BProgress striped :value="10" class="mb-4" />
                        <BProgress striped :value="25" variant="success" class="mb-4" />
                        <BProgress striped :value="50" variant="info" class="mb-4" />
                        <BProgress striped :value="75" variant="warning" class="mb-4" />
                        <BProgress striped :value="100" variant="danger" class="mb-4" />
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
                        <h5>Animated Stripes</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="progress mb-4">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
                        </div>
                        <div class="progress mb-4">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                style="width: 60%"></div>
                        </div>
                        <div class="progress mb-4">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
                        </div>
                        <div class="progress mb-4">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                style="width: 50%"></div>
                        </div>
                        <div class="progress mb-4">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"
                                style="width: 35%"></div>
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