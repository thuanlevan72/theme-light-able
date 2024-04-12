<script>
import Layout from "@/layout/c-main.vue";

export default {
    data() {
        return {
            modalShow: false,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            modalShow4: false,
            modalShow5: false,
            modalShow6: false,
            modalShow7: false,
            modalShow14: false,
            modalShow8: false,
            modalShow9: false,
            modalShow10: false,
            modalShow11: false,
            modalShow12: false,
            modalShow13: false,
        }
    },
    components: {
        Layout
    },
    methods: {
        changecustomerName(e) {
            const msg = document.querySelector(".varyingcontentModal");
            const customerName = document.getElementById("recipient-name");
            this.modalShow13 = !this.modalShow13,
                msg.innerText = "New message to " + e;
            customerName.value = e;
        },

        toggleModal() {
            this.modalShow7 = !this.modalShow7;
            this.modalShow14 = !this.modalShow14;
        }
    },
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Modal</h2>
                <p class="text-muted">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes,
                    user notifications, or completely custom content.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/modal.html">
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
                        <h5>Demo Modal</h5>
                    </BCardHeader>
                    <BCardBody class="pb-0">
                        <div class="bd-example-modal">
                            <div class="modal" tabindex="-1" role="dialog">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal Title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary me-0">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="pc-component">
                        <div>
                            <BButton variant="primary" @click="modalShow = !modalShow">Launch demo modal</BButton>
                            <BModal v-model="modalShow" title="Modal Title" class="v-modal-custom">
                                <div class="modal-body  p-0">
                                    <p>Woohoo, you're reading this text in a modal!</p>
                                </div>
                            </BModal>
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
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Scrolling Long Content</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BModal v-model="modalShow1" title="Modal Title" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </div>
                        </BModal>
                        <BButton variant="primary" @click="modalShow1 = !modalShow1">Launch demo modal</BButton>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Vertically Centered</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BModal v-model="modalShow2" title="Modal Title" class="v-modal-custom" centered>
                            <div class="modal-body  p-0">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                        </BModal>
                        <BButton variant="primary" @click="modalShow2 = !modalShow2">Launch demo modal</BButton>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Tooltips Modal</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BModal v-model="modalShow3" title="Modal Title" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                <h5>Tooltips in a Button</h5>
                                <p>This
                                    <a href="#!" role="button" class="btn btn-secondary tooltip-test" v-b-tooltip.hover
                                        title="Button Tooltip">button</a>
                                    triggers a popover on click.
                                </p>
                                <hr>
                                <h5>Tooltips in a modal</h5>
                                <p><a href="#!" class="tooltip-test" v-b-tooltip.hover title="Tooltip">This link</a>
                                    and
                                    <a href="#!" class="tooltip-test" v-b-tooltip.hover title="Tooltip">that link</a>
                                    have tooltips on hover.
                                </p>
                            </div>
                        </BModal>
                        <BButton variant="primary" @click="modalShow3 = !modalShow3">Launch demo modal</BButton>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Using the Grid</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div>
                            <BButton variant="primary" @click="modalShow4 = !modalShow4">Launch demo modal</BButton>
                            <BModal v-model="modalShow4" hide-footer title="Grids in Modals" class="v-modal-custom">
                                <div class="modal-body  p-0">
                                    <div class="container-fluid bd-example-row">
                                        <BRow>
                                            <BCol md="4">md="4"</BCol>
                                            <BCol md="4" class="ms-auto">md="4" .ms-auto</BCol>
                                        </BRow>
                                        <BRow>
                                            <BCol md="3" class="ms-auto">md="3" .ms-auto</BCol>
                                            <BCol md="2" class="ms-auto">md="2" .ms-auto</BCol>
                                        </BRow>
                                        <BRow>
                                            <BCol md="6" class="ms-auto">md="4" .ms-auto</BCol>
                                        </BRow>
                                        <BRow>
                                            <BCol sm="9">
                                                Level 1: sm="9"
                                                <BRow>
                                                    <BCol sm="6" Cols="8"> Level 2: .col-8 .col-sm-6 </BCol>
                                                    <BCol sm="6" Cols="8"> Level 2: .col-4 .col-sm-6 </BCol>
                                                </BRow>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </div>
                                <div class="modal-footer pb-0">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </BModal>
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
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Optional Sizes</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BButton variant="primary" @click="modalShow5 = !modalShow5" class="mr-2 mb-2 me-1">Large modal
                        </BButton>
                        <BButton variant="primary" @click="modalShow6 = !modalShow6" class="mr-2 mb-2">Small modal</BButton>
                        <BModal v-model="modalShow5" hide-footer title="Large Modal" title-class="h4" class="v-modal-custom"
                            size="lg">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
                        <BModal v-model="modalShow6" hide-footer title="Small Modal" title-class="h4" class="v-modal-custom"
                            size="sm">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Toggle between modals</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BButton variant="primary" @click="modalShow7 = !modalShow7">Open First Modal </BButton>
                        <BModal v-model="modalShow7" hide-footer centered title="First Modal">
                            <div class="modal-body"> Show a second modal and hide this one with the button
                                below.
                            </div>
                            <div class="modal-footer">
                                <BButton variant="light-primary" @click="toggleModal">Open second modal</BButton>
                            </div>
                        </BModal>

                        <BModal v-model="modalShow14" hide-footer centered title="Second Modal">
                            <div class="modal-body"> Hide this modal and show the first with the button below.
                            </div>
                            <div class="modal-footer">
                                <BButton variant="light-secondary" @click="toggleModal">Back to first</BButton>
                            </div>
                        </BModal>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Full screen modal</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-page">
                            <BButton variant="primary" @click="modalShow8 = !modalShow8">Full screen</BButton>
                            <BButton variant="primary" @click="modalShow9 = !modalShow9">Full screen below sm</BButton>
                            <BButton variant="primary" @click="modalShow10 = !modalShow10">Full screen below md</BButton>
                            <BButton variant="primary" @click="modalShow11 = !modalShow11">Full screen below lg</BButton>
                            <BButton variant="primary" @click="modalShow12 = !modalShow12">Full screen below xl</BButton>
                        </div>

                        <BModal v-model="modalShow8" hide-footer title="Full screen modal" title-class="h4"
                            class="v-modal-custom" fullscreen>
                            <div class="modal-body  p-0">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in,
                                    egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus
                                    vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                    vel
                                    scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" @click="modalShow8 = false" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </BModal>
                        <BModal v-model="modalShow9" title="Full screen below sm" title-class="h4" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
                        <BModal v-model="modalShow10" title="Full screen below md" title-class="h4" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
                        <BModal v-model="modalShow11" title="Full screen below lg" title-class="h4" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
                        <BModal v-model="modalShow12" title="Full screen below xl" title-class="h4" class="v-modal-custom">
                            <div class="modal-body  p-0">
                                ...
                            </div>
                        </BModal>
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
                        <h5>Varying Modal Content</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component btn-page">
                        <BButton variant="primary" @click="changecustomerName('@mdo')">Open Modal for @mdo
                        </BButton>
                        <BButton variant="primary" @click="changecustomerName('@fat')">Open Modal for
                            @fat</BButton>
                        <BButton variant="primary" @click="changecustomerName('@bootstrap')">Open Modal for
                            @bootstrap</BButton>
                        <BModal v-model="modalShow13" hide-footer title="Grids in Modals" class="v-modal-custom"
                            title-class="varyingcontentModal">
                            <div class="modal-body p-0 pb-4">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label pt-0">Recipient:</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                    </div>
                                    <div class="form-group mb-0">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer pb-0">
                                <BButton variant="secondary" @click="modalShow13 = false">Close</BButton>
                                <BButton variant="primary">Send message</BButton>
                            </div>
                        </BModal>
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