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
                <h2>Tabs &amp; Pills</h2>
                <p class="text-muted">Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed
                    interface.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/tabs.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol sm="12">
                <BCard no-body>
                    <BCardBody class="pc-component">
                        <h5 class="mb-3">Basic Tabs</h5>
                        <BTabs class="mb-3" content-class="mt-3">
                            <BTab title="Home" id="home" active>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.
                                </p>
                            </BTab>
                            <BTab title="profile" id="profile">
                                <p class="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                    has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here',
                                    making it look like readable English. Many desktop publishing packages and web page
                                    editors now
                                    use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                    many
                                    web sites still in their infancy.</p>
                            </BTab>
                            <BTab title="contact">
                                <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the
                                    majority
                                    have suffered alteration in some form, by injected humour, or words which don't look
                                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                                    be sure
                                    there isn't anything embarrassing hidden in the middle of text.</p>
                            </BTab>
                        </BTabs>
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
                    <BCardBody class="pc-component">
                        <h5 class="mb-3">Basic Pills</h5>
                        <BTabs class="mb-3" content-class="mt-3" pills>
                            <BTab title="Home">
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.
                                </p>
                            </BTab>
                            <BTab title="Profile">
                                <p class="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                    has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here',
                                    making it look like readable English. Many desktop publishing packages and web page
                                    editors now
                                    use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                    many
                                    web sites still in their infancy.</p>
                            </BTab>
                            <BTab title="Contact">
                                <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the
                                    majority
                                    have suffered alteration in some form, by injected humour, or words which don't look
                                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                                    be sure
                                    there isn't anything embarrassing hidden in the middle of text.</p>
                            </BTab>
                        </BTabs>
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
                    <BCardBody class="pc-component">
                        <h5 class="mb-3">Vertical Pills</h5>
                        <BRow class="g-4">
                            <BTabs navClass="flex-md-column" navWrapperClass="col-md-3"
                                contentClass="text-muted mt-4 mt-md-0 col-md-9" pills vertical justified>
                                <BTab title="Home" active>
                                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                        Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer
                                        took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not
                                        only
                                        five centuries, but also the leap into electronic typesetting, remaining
                                        essentially
                                        unchanged.
                                    </p>
                                </BTab>
                                <BTab title="Profile">
                                    <p class="mb-0">It is a long established fact that a reader will be distracted by
                                        the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has
                                        a
                                        more-or-less normal distribution of letters, as opposed to using 'Content here,
                                        content
                                        here',
                                        making it look like readable English. Many desktop publishing packages and web
                                        page editors
                                        now
                                        use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                                        uncover
                                        many
                                        web sites still in their infancy.</p>
                                </BTab>
                                <BTab title="Messages">
                                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                        Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer
                                        took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not
                                        only
                                        five centuries, but also the leap into electronic typesetting, remaining
                                        essentially
                                        unchanged.
                                    </p>
                                </BTab>
                                <BTab title="Settings">
                                    <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but
                                        the
                                        majority
                                        have suffered alteration in some form, by injected humour, or words which don't
                                        look
                                        even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                        need to be
                                        sure
                                        there isn't anything embarrassing hidden in the middle of text.</p>
                                </BTab>
                            </BTabs>
                            <div class="pc-modal-content">
                                <pre style="display: none;">
                                </pre>
                                <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                                <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                            </div>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>