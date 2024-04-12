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
                <h2>Breadcrumb</h2>
                <p class="text-muted">Indicate the current page’s location within a navigational hierarchy that
                    automatically adds separators via CSS.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/breadcrumb.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Breadcrumb</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item"><a href="#!">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item"><a href="#!">Home</a></li>
                                <li class="breadcrumb-item"><a href="#!">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Breadcrumb Icon</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2 fs-6"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-default-icon">
                                <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                                <li class="breadcrumb-item"><a href="#!">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Breadcrumb Dividers [ character ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                                <li class="breadcrumb-item"><a href="#!">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Breadcrumb Dividers [ embedded SVG icon ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                            aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                            </ol>
                        </nav>
                        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                            aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                            aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                                <li class="breadcrumb-item"><a href="#!">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
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