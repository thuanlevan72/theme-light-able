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
                <h2>Cards</h2>
                <p class="text-muted">Bootstrap’s cards provide a flexible and extensible content container with multiple
                    variants and options.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/card.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol md="6" xl="4">
                <h5>Body Content</h5>
                <hr>
                <div class="pc-component">
                    <BCard no-body>
                        <div class="card-body"> This is some text within a card body. </div>
                    </BCard>
                    <div class="pc-modal-content">
                        <pre style="display: none;">
                                </pre>
                        <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                        <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                    </div>
                </div>
            </BCol>
            <BCol md="6" xl="4">
                <h5>Titles, Text, and Links</h5>
                <hr>
                <div class="pc-component">
                    <BCard no-body>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#!" class="card-link">Card link</a>
                            <a href="#!" class="card-link">Another link</a>
                        </div>
                    </BCard>
                </div>
            </BCol>
            <BCol md="6" xl="4">
                <h5>Header and Footer</h5>
                <hr>
                <div class="pc-component">
                    <BCard no-body>
                        <h5 class="card-header">Featured</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#!" class="btn btn-success">Go somewhere</a>
                        </div>
                    </BCard>
                </div>
            </BCol>
            <BCol xl="12">
                <BRow>
                    <BCol sm="12" md="4">
                        <h5>Left Align</h5>
                        <hr>
                        <div class="pc-component">
                            <BCard no-body>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </BCard>
                        </div>
                    </BCol>
                    <BCol sm="12" md="4">
                        <h5>Center Align</h5>
                        <hr>
                        <div class="pc-component">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol sm="12" md="4">
                        <h5>Right Align</h5>
                        <hr>
                        <div class="pc-component">
                            <div class="card text-end">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </BCol>
                </BRow>
            </BCol>
            <BCol md="6" xxl="4">
                <h5>Image Caps</h5>
                <hr>
                <div class="pc-component">
                    <div class="card mb-3">
                        <img class="img-fluid card-img-top" src="@/assets/images/light-box/l3.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional
                                content.
                                This content is a little bit
                                longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </BCol>
            <BCol md="6" xxl="4">
                <h5>Image Caps [ Bottom ]</h5>
                <hr>
                <div class="pc-component">
                    <BCard no-body>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional
                                content.
                                This content is a little bit
                                longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <img class="img-fluid card-img-bottom" src="@/assets/images/light-box/l3.jpg" alt="Card image cap">
                    </BCard>
                </div>
            </BCol>
            <BCol md="6" xxl="4">
                <h5>Image Overlays</h5>
                <hr>
                <div class="pc-component">
                    <div class="card bg-dark">
                        <img class="img-fluid card-img" src="@/assets/images/light-box/l3.jpg" alt="Card image">
                        <div class="card-img-overlay">
                            <h5 class="card-title text-white">Card title</h5>
                            <p class="card-text text-white">This is a wider card with supporting text below as a natural
                                lead-in
                                to
                                additional content. This content is a little bit
                                longer.</p>
                            <p class="card-text text-white">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
            </BCol>
            <BCol xl="12">
                <h5>Card Styles</h5>
                <hr>
                <div class="pc-component">
                    <BRow>
                        <BCol sm="4">
                            <div class="card text-white bg-primary">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Primary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-secondary">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Secondary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-success">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Success card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-danger">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Danger card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-warning">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Warning card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-info">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Info card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card bg-light">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Light card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                        <BCol sm="4">
                            <div class="card text-white bg-dark">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Dark card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk of
                                        the card's
                                        content.</p>
                                </div>
                            </div>
                        </BCol>
                    </BRow>
                </div>
            </BCol>
            <BCol xl="12">
                <h5>Card Groups</h5>
                <hr>
                <div class="pc-component">
                    <div class="card-group">
                        <BCard no-body>
                            <img class="img-fluid card-img-top" src="@/assets/images/light-box/l3.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This content is a little
                                    bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </BCard>
                        <BCard no-body>
                            <img class="img-fluid card-img-top" src="@/assets/images/light-box/l3.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </BCard>
                        <BCard no-body>
                            <img class="img-fluid card-img-top" src="@/assets/images/light-box/l3.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This card has even longer
                                    content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </BCard>
                    </div>
                </div>
            </BCol>
            <BCOl xl="12">
                <h5>Horizontal</h5>
                <hr>
                <div class="pc-component">
                    <BCard no-body class="overflow-hidden">
                        <BRow class="g-0">
                            <BCol md="4">
                                <img src="@/assets/images/light-box/l3.jpg" class="img-fluid rounded-md-start" alt="...">
                            </BCol>
                            <BCol md="8">
                                <BCardBody>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </BCardBody>
                            </BCol>
                        </BRow>
                    </BCard>
                </div>
            </BCOl>
        </BRow>
    </Layout>
</template>