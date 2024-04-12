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
                <h2>Pagination</h2>
                <p class="text-muted">Documentation and examples for showing pagination to indicate a series of related
                    content exists across multiple pages.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/pagination.html">
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
                        <h5>Pagination</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                            </ul>
                        </nav>
                        <h5 class="mt-4 mb-0">Working with Icons</h5>
                        <hr class="mt-2">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#!" aria-label="Previous"><span
                                            aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item"><a class="page-link" href="#!" aria-label="Next"><span
                                            aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
                            </ul>
                        </nav>
                        <h5 class="mt-4 mb-0">Disabled and Active States</h5>
                        <hr class="mt-2">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled"><span class="page-link">Previous</span></li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item active"><span class="page-link">2<span
                                            class="sr-only">(current)</span></span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                            </ul>
                        </nav>
                        <h5 class="mt-4 mb-0">Sizing</h5>
                        <hr class="mt-2">
                        <nav class="mb-3" aria-label="...">
                            <ul class="pagination pagination-lg">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#!" tabindex="-1">1</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            </ul>
                        </nav>
                        <nav aria-label="...">
                            <ul class="pagination pagination-sm">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#!" tabindex="-1">1</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            </ul>
                        </nav>
                        <h5 class="mt-4 mb-0">Alignment</h5>
                        <hr class="mt-2">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#!" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#!">Next</a>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#!" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#!">Next</a>
                                </li>
                            </ul>
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