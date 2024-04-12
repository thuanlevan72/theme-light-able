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
                <h2>Button</h2>
                <p class="text-muted">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with
                    support for multiple sizes, states, and more.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/button.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow class="btn-page">
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Default</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary">Primary</BButton>
                            <BButton variant="secondary" class="btn btn-secondary">Secondary</BButton>
                            <BButton variant="success" class="btn btn-success">Success</BButton>
                            <BButton variant="danger" class="btn btn-danger">Danger</BButton>
                            <BButton variant="warning" class="btn btn-warning">Warning</BButton>
                            <BButton variant="info" class="btn btn-info">Info</BButton>
                            <BButton variant="light" class="btn btn-light">Light</BButton>
                            <BButton variant="dark" class="btn btn-dark">Dark</BButton>
                            <BButton variant="link" class="btn btn-link">Link</BButton>
                        </div>
                        <div class="d-grid gap-2 mt-2">
                            <BButton variant="primary">Block Level Button</BButton>
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
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Light</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="light-primary">Primary</BButton>
                            <BButton variant="light-secondary">Secondary</BButton>
                            <BButton variant="light-success">Success</BButton>
                            <BButton variant="light-danger">Danger</BButton>
                            <BButton variant="light-warning">Warning</BButton>
                            <BButton variant="light-info">Info</BButton>
                            <BButton variant="light-dark">Dark</BButton>
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
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Link</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BLink class="btn btn-primary" role="button" href="#">Primary link</BLink>
                            <BLink class="btn btn-primary disabled" tabindex="-1" role="button" href="#">Disabled Primary
                                link</BLink>
                            <a class="btn btn-link-success" role="button" href="#">Light Success link</a>
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
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Outline</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="outline-primary">Primary</BButton>
                            <BButton variant="outline-secondary">Secondary</BButton>
                            <BButton variant="outline-success">Success</BButton>
                            <BButton variant="outline-danger">Danger</BButton>
                            <BButton variant="outline-warning">Warning</BButton>
                            <BButton variant="outline-info">Info</BButton>
                            <BButton variant="outline-dark">Dark</BButton>
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
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Disabled Button</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <p>use <code>.disabled</code> in class <code>.btn</code> class to get Disabled button</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton disabled variant="primary">Primary</BButton>
                            <BButton disabled variant="secondary">Secondary</BButton>
                            <BButton disabled variant="success">Success</BButton>
                            <BButton disabled variant="danger">Danger</BButton>
                            <BButton disabled variant="warning">Warning</BButton>
                            <BButton disabled variant="info">Info</BButton>
                            <BButton disabled variant="light">Light</BButton>
                            <BButton disabled variant="dark">Dark</BButton>
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
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Shadow</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton class="btn-shadow" variant="primary">Primary</BButton>
                            <BButton class="btn-shadow" variant="secondary">Secondary</BButton>
                            <BButton class="btn-shadow" variant="success">Success</BButton>
                            <BButton class="btn-shadow" variant="danger">Danger</BButton>
                            <BButton class="btn-shadow" variant="warning">Warning</BButton>
                            <BButton class="btn-shadow" variant="info">Info</BButton>
                            <BButton class="btn-shadow" variant="light">Light</BButton>
                            <BButton class="btn-shadow" variant="dark">Dark</BButton>
                            <BButton class="btn-shadow" variant="link">Link</BButton>
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
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Sizes [ Large ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <p>use <code>.btn-lg</code> in class <code>.btn</code> class to get Large button</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton size="lg" variant="primary">Large button</BButton>
                            <BButton size="lg" variant="secondary">Large button</BButton>
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
            <BCol sm="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Sizes [ Small ]</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <p>use <code>.btn-sm</code> in class <code>.btn</code> class to get Small button</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton size="sm" variant="primary">Small button</BButton>
                            <BButton size="sm" variant="secondary">Small button</BButton>
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
        <BRow class="btn-page">
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Button With Icon</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" class="d-inline-flex"><i class="ti ti-thumb-up me-1"></i>Primary
                            </BButton>
                            <BButton variant="secondary" class="d-inline-flex"><i class="ti ti-camera me-1"></i>Secondary
                            </BButton>
                            <BButton variant="success" class="d-inline-flex"><i class="ti ti-circle-check me-1"></i>Success
                            </BButton>
                            <BButton variant="danger" class="d-inline-flex"><i class="ti ti-alert-triangle me-1"></i>Danger
                            </BButton>
                            <BButton variant="warning" class="d-inline-flex"><i class="ti ti-triangle me-1"></i>Warning
                            </BButton>
                            <BButton variant="info" class="d-inline-flex"><i class="ti ti-info-circle me-1"></i>Info
                            </BButton>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Outline Icon Buttons</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="outline-primary" class="d-inline-flex"><i
                                    class="ti ti-thumb-up me-1"></i>Primary</BButton>
                            <BButton variant="outline-secondary" class="d-inline-flex"><i
                                    class="ti ti-camera me-1"></i>Secondary</BButton>
                            <BButton variant="outline-success" class="d-inline-flex"><i
                                    class="ti ti-circle-check me-1"></i>Success</BButton>
                            <BButton variant="outline-danger" class="d-inline-flex"><i
                                    class="ti ti-alert-triangle me-1"></i>Danger</BButton>
                            <BButton variant="outline-warning" class="d-inline-flex"><i
                                    class="ti ti-triangle me-1"></i>Warning</BButton>
                            <BButton variant="outline-info" class="d-inline-flex"><i class="ti ti-info-circle me-1"></i>Info
                            </BButton>
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
            <BCol class="col-12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Button Icon</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow class="row">
                            <BCol lg="6">
                                <h5>Basic</h5>
                                <div class="d-flex flex-wrap gap-2 mb-4">
                                    <BButton variant="primary" class="btn btn-icon"><i class="ti ti-thumb-up"></i></BButton>
                                    <BButton variant="secondary" class="btn btn-icon"><i class="ti ti-camera"></i></BButton>
                                    <BButton variant="success" class="btn btn-icon"><i class="ti ti-circle-check"></i>
                                    </BButton>
                                    <BButton variant="danger" class="btn btn-icon"><i class="ti ti-alert-triangle"></i>
                                    </BButton>
                                    <BButton variant="warning" class="btn btn-icon"><i class="ti ti-triangle"></i></BButton>
                                    <BButton variant="info" class="btn btn-icon"><i class="ti ti-info-circle"></i></BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <h5>Light</h5>
                                <div class="d-flex flex-wrap gap-2 mb-4">
                                    <BButton variant="light-primary" class="btn btn-icon"><i class="ti ti-thumb-up"></i>
                                    </BButton>
                                    <BButton variant="light-secondary" class="btn btn-icon"><i class="ti ti-camera"></i>
                                    </BButton>
                                    <BButton variant="light-success" class="btn btn-icon"><i class="ti ti-circle-check"></i>
                                    </BButton>
                                    <BButton variant="light-danger" class="btn btn-icon"><i
                                            class="ti ti-alert-triangle"></i></BButton>
                                    <BButton variant="light-warning" class="btn btn-icon"><i class="ti ti-triangle"></i>
                                    </BButton>
                                    <BButton variant="light-info" class="btn btn-icon"><i class="ti ti-info-circle"></i>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <h5>Outline</h5>
                                <div class="d-flex flex-wrap gap-2 mb-4">
                                    <BButton variant="outline-primary" class="btn btn-icon"><i class="ti ti-thumb-up"></i>
                                    </BButton>
                                    <BButton variant="outline-secondary" class="btn btn-icon"><i class="ti ti-camera"></i>
                                    </BButton>
                                    <BButton variant="outline-success" class="btn btn-icon"><i
                                            class="ti ti-circle-check"></i></BButton>
                                    <BButton variant="outline-danger" class="btn btn-icon"><i
                                            class="ti ti-alert-triangle"></i></BButton>
                                    <BButton variant="outline-warning" class="btn btn-icon"><i class="ti ti-triangle"></i>
                                    </BButton>
                                    <BButton variant="outline-info" class="btn btn-icon"><i class="ti ti-info-circle"></i>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <h5>Link</h5>
                                <div class="d-flex flex-wrap gap-2 mb-4">
                                    <BButton variant="link-primary" class="btn btn-icon "><i class="ti ti-thumb-up"></i>
                                    </BButton>
                                    <BButton variant="link-secondary" class="btn btn-icon"><i class="ti ti-camera"></i>
                                    </BButton>
                                    <BButton variant="link-success" class="btn btn-icon"><i class="ti ti-circle-check"></i>
                                    </BButton>
                                    <BButton variant="link-danger" class="btn btn-icon"><i class="ti ti-alert-triangle"></i>
                                    </BButton>
                                    <BButton variant="link-warning" class="btn btn-icon"><i class="ti ti-triangle"></i>
                                    </BButton>
                                    <BButton variant="link-info" class="btn btn-icon"><i class="ti ti-info-circle"></i>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <h5>Size</h5>
                                <div class="d-flex flex-wrap gap-2">
                                    <BButton variant="primary" class="btn btn-icon avtar-xl mb-0">A</BButton>
                                    <BButton variant="primary" class="btn btn-icon avtar-l mb-0">A</BButton>
                                    <BButton variant="primary" class="btn btn-icon mb-0">A</BButton>
                                    <BButton variant="primary" class="btn btn-icon avtar-s mb-0">A</BButton>
                                    <BButton variant="primary" class="btn btn-icon avtar-xs mb-0">A</BButton>
                                </div>
                            </BCol>
                        </BRow>
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
        <BRow class="btn-page">
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Basic Button Group</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <BButton variant="primary">Left</BButton>
                            <BButton variant="primary">Middle</BButton>
                            <BButton variant="primary">Right</BButton>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Button Toolbar</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-toolbar d-flex flex-wrap gap-2" role="toolbar">
                            <div class="btn-group" role="group">
                                <BButton variant="light-secondary">1</BButton>
                                <BButton variant="light-secondary">2</BButton>
                                <BButton variant="light-secondary">3</BButton>
                                <BButton variant="light-secondary">4</BButton>
                            </div>
                            <div class="btn-group" role="group">
                                <BButton variant="light-secondary">5</BButton>
                                <BButton variant="light-secondary">6</BButton>
                                <BButton variant="light-secondary">7</BButton>
                            </div>
                            <div class="btn-group" role="group">
                                <BButton variant="light-secondary">8</BButton>
                            </div>
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
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Button Toolbar Input</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow>
                            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group my-1 me-2" role="group" aria-label="First group">
                                    <BButton variant="light-secondary">1</BButton>
                                    <BButton variant="light-secondary">2</BButton>
                                    <BButton variant="light-secondary">3</BButton>
                                    <BButton variant="light-secondary">4</BButton>
                                </div>
                                <div class="input-group my-1">
                                    <div class="input-group-text" id="btnGroupAddon">@</div>
                                    <input type="text" class="form-control" placeholder="Input group example"
                                        aria-label="Input group example" aria-describedby="btnGroupAddon">
                                </div>
                            </div>

                            <div class="btn-toolbar justify-content-between" role="toolbar"
                                aria-label="Toolbar with button groups">
                                <div class="btn-group my-1" role="group" aria-label="First group">
                                    <BButton variant="light-secondary">1</BButton>
                                    <BButton variant="light-secondary">2</BButton>
                                    <BButton variant="light-secondary">3</BButton>
                                    <BButton variant="light-secondary">4</BButton>
                                </div>
                                <div class="input-group my-1">
                                    <div class="input-group-text" id="btnGroupAddon2">@</div>
                                    <input type="text" class="form-control" placeholder="Input group example"
                                        aria-label="Input group example" aria-describedby="btnGroupAddon2">
                                </div>
                            </div>
                        </BRow>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Button Toolbar Size</h5>
                        <p>use <code>.btn-group-lg</code> in class <code>.btn-group</code> class to get Large size button
                            group</p>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow>
                            <BCol xl="4" md="12" class="mb-2">
                                <div class="btn-group btn-group-lg" role="group" aria-label="button groups xl">
                                    <BButton variant="secondary">Left</BButton>
                                    <BButton variant="secondary">Middle</BButton>
                                    <BButton variant="secondary">Right</BButton>
                                </div>
                            </BCol>
                            <div xl="4" md="6" class="mt-3 mb-2">
                                <div class="btn-group" role="group" aria-label="button groups">
                                    <BButton variant="light-secondary">Left</BButton>
                                    <BButton variant="light-secondary">Middle</BButton>
                                    <BButton variant="light-secondary">Right</BButton>
                                </div>
                            </div>
                            <div xl="4" md="6" class="mt-4 mb-2">
                                <div class="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                                    <BButton variant="secondary">Left</BButton>
                                    <BButton variant="secondary">Middle</BButton>
                                    <BButton variant="secondary">Right</BButton>
                                </div>
                            </div>
                        </BRow>
                        <div class="pc-modal-content">
                            <pre style="display: none;"></pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Nesting</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <BButton variant="primary">1</BButton>
                            <BButton variant="primary">2</BButton>
                            <BDropdown text="Dropdown" variant="primary">
                                <BDropdownItem>Dropdown link</BDropdownItem>
                                <BDropdownItem>Dropdown link</BDropdownItem>
                            </BDropdown>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Vertical Variation</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow>
                            <BCol Cols="4">
                                <div class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                                    <BButton variant="secondary" class="btn m-0">1</BButton>
                                    <BButton variant="secondary" class="btn m-0">2</BButton>
                                    <BButton variant="secondary" class="btn m-0">3</BButton>
                                </div>
                            </BCol>
                            <BCol Cols="8">
                                <div class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                                    <BButton variant="secondary" class="btn m-0">1</BButton>
                                    <BButton variant="secondary" class="btn m-0">2</BButton>
                                    <BDropdown text="Dropdown" toggle-class="m-0 btn-secondary">
                                        <BDropdownItem>Dropdown link</BDropdownItem>
                                        <BDropdownItem>Dropdown link</BDropdownItem>
                                    </BDropdown>
                                </div>
                            </BCol>
                        </BRow>
                        <div class="pc-modal-content">
                            <pre style="display: none;">
                                </pre>
                            <BLink class="md-pc-modal-copy copy"><i class="ph-duotone ph-copy"></i></BLink>
                            <BLink class="pc-collapse"><i class="ph-duotone ph-code"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Mixed styles</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group">
                            <BButton variant="danger">A</BButton>
                            <BButton variant="warning">A</BButton>
                            <BButton variant="primary">A</BButton>
                            <BButton variant="success">A</BButton>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <BButton variant="light-danger" class="btn">A</BButton>
                            <BButton variant="light-warning" class="btn text-dark">A</BButton>
                            <BButton variant="light-primary" class="btn">A</BButton>
                            <BButton variant="light-success" class="btn">A</BButton>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Outlined styles</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group">
                            <BButton variant="outline-secondary">Left</BButton>
                            <BButton variant="outline-secondary">Middle</BButton>
                            <BButton variant="outline-secondary">Right</BButton>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <BButton variant="outline-primary">Left</BButton>
                            <BButton variant="outline-success">Middle</BButton>
                            <BButton variant="outline-danger">Right</BButton>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Checkbox button groups</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group">
                            <input type="checkbox" class="btn-check" id="btncheck1">
                            <label class="btn btn-outline-secondary" for="btncheck1">Checkbox 1</label>
                            <input type="checkbox" class="btn-check" id="btncheck2">
                            <label class="btn btn-outline-secondary" for="btncheck2">Checkbox 2</label>
                            <input type="checkbox" class="btn-check" id="btncheck3">
                            <label class="btn btn-outline-secondary" for="btncheck3">Checkbox 3</label>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <input type="checkbox" class="btn-check" id="btnchecklite1">
                            <label class="btn btn-light-secondary" for="btnchecklite1">Checkbox 1</label>
                            <input type="checkbox" class="btn-check" id="btnchecklite2">
                            <label class="btn btn-light-secondary" for="btnchecklite2">Checkbox 2</label>
                            <input type="checkbox" class="btn-check" id="btnchecklite3">
                            <label class="btn btn-light-secondary" for="btnchecklite3">Checkbox 3</label>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <input type="checkbox" class="btn-check" id="btnchecklitecol1">
                            <label class="btn btn-light-primary" for="btnchecklitecol1">Checkbox 1</label>
                            <input type="checkbox" class="btn-check" id="btnchecklitecol2">
                            <label class="btn btn-light-success" for="btnchecklitecol2">Checkbox 2</label>
                            <input type="checkbox" class="btn-check" id="btnchecklitecol3">
                            <label class="btn btn-light-danger" for="btnchecklitecol3">Checkbox 3</label>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Radio button groups</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group" role="group">
                            <input type="radio" class="btn-check" id="btnrdo1" name="btn_radio1">
                            <label class="btn btn-outline-secondary" for="btnrdo1">Radio 1</label>
                            <input type="radio" class="btn-check" id="btnrdo2" name="btn_radio1">
                            <label class="btn btn-outline-secondary" for="btnrdo2">Radio 2</label>
                            <input type="radio" class="btn-check" id="btnrdo3" name="btn_radio1">
                            <label class="btn btn-outline-secondary" for="btnrdo3">Radio 3</label>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <input type="radio" class="btn-check" id="btnrdolite1" name="btn_radio2">
                            <label class="btn btn-light-secondary" for="btnrdolite1">Radio 1</label>
                            <input type="radio" class="btn-check" id="btnrdolite2" name="btn_radio2">
                            <label class="btn btn-light-secondary" for="btnrdolite2">Radio 2</label>
                            <input type="radio" class="btn-check" id="btnrdolite3" name="btn_radio2">
                            <label class="btn btn-light-secondary" for="btnrdolite3">Radio 3</label>
                        </div>
                        <hr>
                        <div class="btn-group" role="group">
                            <input type="radio" class="btn-check" id="btnrdolitecol1" name="btn_radio3">
                            <label class="btn btn-light-primary" for="btnrdolitecol1">Radio 1</label>
                            <input type="radio" class="btn-check" id="btnrdolitecol2" name="btn_radio3">
                            <label class="btn btn-light-success" for="btnrdolitecol2">Radio 2</label>
                            <input type="radio" class="btn-check" id="btnrdolitecol3" name="btn_radio3">
                            <label class="btn btn-light-danger" for="btnrdolitecol3">Radio 3</label>
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