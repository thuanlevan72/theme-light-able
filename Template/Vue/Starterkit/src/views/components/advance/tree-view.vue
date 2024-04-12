<script>
import Layout from "@/layout/c-main.vue"

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
                <h2>Tree View</h2>
                <p class="text-muted">Standalone tree view library</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://github.com/finom/vanillatree">
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
                        <h5>HTML Demo</h5>
                    </BCardHeader>
                    <BCardBody>
                        <div id="tree-demo">
                            <ul class="vtree">
                                <li class="vtree-leaf vtree-has-children">
                                    <span class="vtree-toggle"></span>
                                    <a class="vtree-leaf-label">Label A</a>
                                    <ul class="vtree-subtree">
                                        <li class="vtree-leaf vtree-selected vtree-has-children">
                                            <span class="vtree-toggle"></span>
                                            <a class="vtree-leaf-label">Label A.A</a>
                                            <ul class="vtree-subtree">
                                                <li class="vtree-leaf closed">
                                                    <span class="vtree-toggle"></span>
                                                    <a class="vtree-leaf-label">Label A.A.A</a>
                                                </li>
                                                <li class="vtree-leaf closed">
                                                    <span class="vtree-toggle"></span>
                                                    <a class="vtree-leaf-label">Label A.A.B</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <p id="tree-msg"></p>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>