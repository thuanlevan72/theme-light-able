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
                <h2>Dropdowns</h2>
                <p class="text-muted">Toggle contextual overlays for displaying lists of links and more with the Bootstrap
                    dropdown plugin.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/dropdown.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow class="btn-page">
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Basic Dropdown Button</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Primary" variant="primary">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Secondary" variant="secondary">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Success" variant="success">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Danger" variant="danger">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Warning" variant="warning">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Info" variant="info">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
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
                        <h5>Split Dropdown Button</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="primary" variant="primary" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Secondary" variant="secondary" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Success" variant="success" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class=" btn-group mb-2 me-2">
                            <BDropdown text="Danger" variant="danger" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Warning" variant="warning" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Info" variant="info" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Separated link</BDropdownItem>
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
                        <h5>Basic Outline Dropdown Button</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group-dropdown mx-1">
                                <BDropdown text="Primary" variant="outline-primary">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group-dropdown">
                                <BDropdown text="Secondary" variant="outline-secondary">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group-dropdown">
                                <BDropdown text="Success" variant="outline-success">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group-dropdown">
                                <BDropdown text="Danger" variant="outline-danger">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group-dropdown">
                                <BDropdown text="Warning" variant="outline-warning">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group-dropdown">
                                <BDropdown text="Info" variant="outline-info">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Split Outline Dropdown Button</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Primary" variant="outline-primary" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Secondary" variant="outline-secondary" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Success" variant="outline-success" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Danger" variant="outline-danger" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Warning" variant="outline-warning" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Info" variant="outline-info" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <div class="dropdown-divider"></div>
                                <BDropdownItem>Something else here</BDropdownItem>
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
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Dark dropdowns</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Primary" variant="primary" menu-class="darks">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Secondary" variant="secondary" dark>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Success" variant="success" dark>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Danger" variant="danger" dark>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Warning" variant="warning" dark>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Info" variant="info" dark>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Dropright</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group dropend">
                                <BDropdown text="Dropright" variant="primary" dropend>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>
                            <div class="btn-group dropend">
                                <BDropdown text="Split dropup" variant="light-primary" dropend split>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Dropleft</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group dropstart">
                                <BDropdown text="Dropup" variant="secondary" dropstart>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>

                            <div class="btn-group dropstart">
                                <BDropdown text="Split dropup" variant="light-secondary" dropstart split>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Dropup</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="d-flex flex-wrap gap-2">
                            <div class="btn-group dropup">
                                <BDropdown text="Dropup" variant="success" dropup>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </div>

                            <div class="btn-group dropup">
                                <BDropdown text="Split dropup" variant="light-success" dropup split>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
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
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Menu alignment</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group">
                            <BDropdown text="Right-aligned menu example" variant="secondary"
                                :offset="{ alignmentAxis: 25 }">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
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
                        <h5>Responsive alignment</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BRow>
                            <BCol class="col-12">
                                <h6>Left-aligned but right aligned when large screen</h6>
                                <div class="btn-group mb-2">
                                    <BDropdown text="Dropdown" variant="light-secondary" :offset="{ alignmentAxis: -80 }">
                                        <BDropdownItem>Action</BDropdownItem>
                                        <BDropdownItem>Another action</BDropdownItem>
                                        <BDropdownItem>Something else here</BDropdownItem>
                                    </BDropdown>
                                </div>
                            </BCol>
                            <BCol class="col-12 mt-3">
                                <h6>Right-aligned but left aligned when large screen</h6>
                                <div class="btn-group mb-2">
                                    <BDropdown text="Dropdown" variant="light-secondary" :offset="{ alignmentAxis: 4 }">
                                        <BDropdownItem>Action</BDropdownItem>
                                        <BDropdownItem>Another action</BDropdownItem>
                                        <BDropdownItem>Something else here</BDropdownItem>
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
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Alignment options</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Dropdown" variant="light-primary">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text=" Right-aligned menu" variant="light-primary" :offset="{ alignmentAxis: -20 }">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Left-aligned, right-aligned lg" variant="light-primary"
                                :offset="{ alignmentAxis: 25 }">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Right-aligned, left-aligned lg" variant="light-primary">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1 dropstart">
                            <BDropdown text="Dropstart" variant="light-primary" dropstart>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1 dropend">
                            <BDropdown text="Dropend" variant="light-primary" dropend>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                        <div class="btn-group mr-2 mb-2 mx-1 dropup">
                            <BDropdown text="Dropup" variant="light-primary" dropup>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Text</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Text" variant="light-danger">
                                <BDropdownItem class="p-4">
                                    <h6>Some title example</h6>
                                    <p class="mb-2 text-muted small">And this is more</p>
                                    <p class="mb-0 text-muted">Some example text that's free-flowing within the dropdown
                                        menu.
                                    </p>
                                </BDropdownItem>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Forms</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mb-2 me-2">
                            <BDropdown text="Forms" variant="light-success">
                                <BDropdownItem style="min-width: 16rem">
                                    <form class="px-4 py-3">
                                        <div class="mb-3">
                                            <label for="exampleDropdownFormEmail1" class="form-label">Email Address</label>
                                            <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                                placeholder="email@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                                placeholder="Password">
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                                <label class="form-check-label" for="dropdownCheck">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="dropdown-divider"></div>
                                        <button type="submit" class="btn btn-primary btn-sm mx-1">Sign in</button>
                                        <button type="submit" class="btn btn-light btn-sm">Reset</button>
                                    </form>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">New around here? Sign up</a>
                                    <a class="dropdown-item" href="#">Forgot password?</a>
                                </BDropdownItem>
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
            <BCol md="4">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Offset & Reference</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BDropdown text="Offset" variant="secondary" class="me-5 mb-1"
                            :offset="{ alignmentAxis: 5, crossAxis: 0, mainAxis: 20 }">
                            <BDropdownItem>Action</BDropdownItem>
                            <BDropdownItem>Another action</BDropdownItem>
                            <BDropdownItem>Something else here</BDropdownItem>
                        </BDropdown>
                        <div class="btn-group">
                            <BDropdown text="Reference" variant="secondary" class="me-5 mb-1"
                                :offset="{ alignmentAxis: -100 }" split>
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Another action</BDropdownItem>
                                <BDropdownItem>Something else here</BDropdownItem>
                                <hr class="dropdown-divider">
                                <BDropdownItem>Separated link</BDropdownItem>
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
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Auto close behavior</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Default dropdown" variant="light-info">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>

                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Clickable outside" variant="info" auto-close="inside">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>

                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text="Clickable inside" variant="info" auto-close="outside">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                            </BDropdown>
                        </div>

                        <div class="btn-group mr-2 mb-2 mx-1">
                            <BDropdown text=" Manual close" variant="light-info" :auto-close="false">
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
                                <BDropdownItem>Menu item</BDropdownItem>
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
        </BRow>
    </Layout>
</template>