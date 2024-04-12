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
                <h2>Tooltip</h2>
                <p class="text-muted">Documentation and examples for adding custom Bootstrap tooltips with CSS and
                    JavaScript using CSS3 for animations and data-bs-attributes for local title storage.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/directives/BTooltip.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol md="6" sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Tooltip</h5>
                    </BCardHeader>
                    <BCardBody class="btn-page pc-component">
                        <BButton variant="danger" data-bs-placement="top" v-b-tooltip.hover title="tooltip on top">
                            Top</BButton>
                        <BButton variant="primary" data-bs-placement="left" v-b-tooltip.hover.left title="Tooltip on left">
                            Left
                        </BButton>
                        <BButton variant="success" data-bs-placement="right" v-b-tooltip.hover.right
                            title="Tooltip on right">
                            Right</BButton>
                        <BButton variant="warning" data-bs-placement="bottom" v-b-tooltip.hover.bottom
                            title="Tooltip on bottom">
                            Bottom</BButton>
                        <BButton variant="info" data-bs-html="true" v-b-tooltip.hover
                            title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Html
                            Tooltip</BButton>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6" sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Popover</h5>
                    </BCardHeader>
                    <BCardBody class="btn-page pc-component">
                        <BButton variant="danger" id="popover-button-top">Top</BButton>
                        <BPopover target="popover-button-top" triggers="focus" html placement="top" content="popup on top">
                        </BPopover>
                        <BButton variant="primary" id="popover-button-left">Left</BButton>
                        <BPopover target="popover-button-left" triggers="focus" html placement="left"
                            content="popup on left">
                        </BPopover>
                        <BButton variant="success" id="popover-button-right">Right</BButton>
                        <BPopover target="popover-button-right" triggers="focus" html placement="right"
                            content="popup on right">
                        </BPopover>
                        <BButton variant="warning" id="popover-button-bottom" title="popup on bottom">Bottom</BButton>
                        <BPopover target="popover-button-bottom" triggers="focus" html placement="bottom"
                            content="popup on bottom">
                        </BPopover>
                        <BButton variant="info" id="popover-button-top" title="<em>popup</em> <u>with</u> <b>HTML</b>">Html
                            popup
                        </BButton>
                        <BPopover target="popover-button-top" triggers="focus" html placement="top" content="popup on top">
                        </BPopover>
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