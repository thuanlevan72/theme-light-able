<script>
import Layout from "@/layout/c-main.vue"

export default {
    components: {
        Layout
    },
    data() {
        return {
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            modalShow4: false,
            modalShow5: false,
        }
    },
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Advance Modal</h2>
                <p class="text-muted">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes or
                    completely custom content</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://getbootstrap.com/docs/5.2/components/modal/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Fade</h5>
                    </BCardHeader>
                    <BCardBody class="btn-page">
                        <div>
                            <div class="hstack gap-2 flex-wrap">
                                <BButton variant="primary" @click="modalShow1 = !modalShow1"> Fade In Right Modal
                                </BButton>
                                <BButton variant="primary" @click="modalShow2 = !modalShow2"> Fade In Left Modal
                                </BButton>
                                <BButton variant="primary" @click="modalShow3 = !modalShow3"> Fade In Up Modal
                                </BButton>
                                <BButton variant="primary" @click="modalShow4 = !modalShow4"> Flip Modal
                                </BButton>
                                <BButton variant="primary" @click="modalShow5 = !modalShow5"> Zoom In Modal
                                </BButton>
                            </div>

                            <BModal v-model="modalShow1" hide-footer title="Modal Heading" modal-class="fadeInRight"
                                class="v-modal-custom" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer v-modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow1 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow2" hide-footer title="Modal Heading" modal-class="fadeInLeft"
                                class="v-modal-custom" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer v-modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow2 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow3" hide-footer title="Modal Heading" modal-class="fadeInUp"
                                class="v-modal-custom" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer v-modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow3 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow4" hide-footer title="Modal Heading" modal-class="flip"
                                class="v-modal-custom" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer v-modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow4 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow5" hide-footer title="Modal Heading" modal-class="zoomIn"
                                class="v-modal-custom" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer v-modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow5 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>