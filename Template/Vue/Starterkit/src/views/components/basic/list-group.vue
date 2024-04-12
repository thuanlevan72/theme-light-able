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
                <h2>List group</h2>
                <p class="text-muted">List groups are a flexible and powerful component for displaying a series of
                    content. Modify and extend them to support just about any content within.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/list-group.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Basic example</h5>
                        <small class="m-0">The most basic list group is an unordered list with list items and the proper
                            classes</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem>Cras justo odio</BListGroupItem>
                            <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                            <BListGroupItem>Morbi leo risus</BListGroupItem>
                            <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
                            <BListGroupItem>Vestibulum at eros</BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Active items</h5>
                        <small class="m-0">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the
                            current
                            active selection.</small>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BListGroup>
                            <BListGroupItem>Cras justo odio</BListGroupItem>
                            <BListGroupItem aria-current="true" active>Dapibus ac facilisis in</BListGroupItem>
                            <BListGroupItem>Morbi leo risus</BListGroupItem>
                            <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
                            <BListGroupItem>Vestibulum at eros</BListGroupItem>
                        </BListGroup>
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
                        <h5 class="mb-2">Disabled items</h5>
                        <small class="m-0">Add <code>.disabled</code> to a <code>.list-group-item</code> to make it
                            <em>appear</em> disabled. Note that some
                            elements with <code>.disabled</code> will also require custom JavaScript to fully disable their
                            click events (e.g.,
                            links).</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem class="disabled" aria-disabled="true">Cras justo odio ( disabled )
                            </BListGroupItem>
                            <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                            <BListGroupItem class="disabled" aria-disabled="true">Morbi leo risus ( disabled )
                            </BListGroupItem>
                            <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
                            <BListGroupItem>Vestibulum at eros</BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">List groups [ Links ]</h5>
                        <small class="m-0">Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create
                            <em>actionable</em> list group items with
                            hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate
                            these
                            pseudo-classes to
                            ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or
                            <code>&lt;div&gt;</code>s) don’t
                            provide a click or tap affordance.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <a href="#" class="list-group-item list-group-item-action"> Cras justo odio </a>
                            <a href="#!" class="list-group-item list-group-item-action active" aria-current="true">Dapibus
                                ac
                                facilisis in</a>
                            <a href="#!" class="list-group-item list-group-item-action">Morbi leo risus</a>
                            <a href="#!" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                            <a href="#!" class="list-group-item list-group-item-action disabled" tabindex="-1">Vestibulum at
                                eros ( disabled )</a>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">List groups [ Buttons ] </h5>
                        <small class="m-0">With <code>&lt;button&gt;</code>s, you can also make use of the
                            <code>disabled</code>
                            attribute instead of the
                            <code>.disabled</code> class. Sadly, <code>&lt;a&gt;</code>s don’t support the disabled
                            attribute.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <button type="button" class="list-group-item list-group-item-action">
                                Cras justo odio
                            </button>
                            <button type="button" class="list-group-item list-group-item-action active"
                                aria-current="true">Dapibus ac facilisis in</button>
                            <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                            <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur
                                ac</button>
                            <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at
                                eros</button>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Flush</h5>
                        <small class="m-0">Add <code>.list-group-flush</code> to remove some borders and rounded corners to
                            render list group items edge-to-edge
                            in a parent container (e.g., cards).</small>
                    </BCardHeader>
                    <BCardBody>
                        <ul class="list-group list-group-flush">
                            <BListGroupItem>Cras justo odio</BListGroupItem>
                            <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                            <BListGroupItem>Morbi leo risus</BListGroupItem>
                            <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
                            <BListGroupItem>Vestibulum at eros</BListGroupItem>
                        </ul>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Numbered</h5>
                        <small class="m-0">Add the <code>.list-group-numbered</code> modifier class (and optionally use an
                            <code>&lt;ol&gt;</code> element) to
                            opt into numbered list group items.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-4">
                            <div class="col-md-6">
                                <BListGroup class="list-group-numbered">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                </BListGroup>
                            </div>
                            <div class="col-md-6">
                                <BListGroup class="list-group-numbered">
                                    <BListGroupItem class="d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Subheading</div>
                                            Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </BListGroupItem>
                                    <BListGroupItem class="d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Subheading</div>
                                            Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </BListGroupItem>
                                    <BListGroupItem class="d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Subheading</div>
                                            Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </BListGroupItem>
                                </BListGroup>
                            </div>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Horizontal</h5>
                        <small class="m-0">Add <code>.list-group-horizontal</code> to change the layout of list group items
                            from vertical to horizontal across
                            all breakpoints. Alternatively, choose a responsive variant
                            <code>.list-group-horizontal-{sm|md|lg|xl|xxl}</code> to
                            make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently
                            <strong>horizontal list groups cannot be combined with flush list groups.</strong></small>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-4">
                            <BCol class="col-12">
                                <h6>list group horizontal</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                            <BCol class="col-12">
                                <h6>list group horizontal small(sm)</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal-sm">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                            <BCol class="col-12">
                                <h6>list group horizontal medium(md)</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal-md">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                            <BCol class="col-12">
                                <h6>list group horizontal large(lg)</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal-lg">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                            <BCol class="col-12">
                                <h6>list group horizontal extra large(xl)</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal-xl">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                            <BCol class="col-12">
                                <h6>list group horizontal double extra large(xxl)</h6>
                                <hr>
                                <BListGroup class="list-group-horizontal-xxl">
                                    <BListGroupItem>Cras justo odio</BListGroupItem>
                                    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                                    <BListGroupItem>Morbi leo risus</BListGroupItem>
                                </BListGroup>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Contextual classes</h5>
                        <small class="m-0">Use contextual classes to style list items with a stateful background and
                            color.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                            <BListGroupItem class="list-group-item-primary">A simple primary list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-secondary">A simple secondary list group item </BListGroupItem>
                            <BListGroupItem class="list-group-item-success">A simple success list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-danger">A simple danger list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-warning">A simple warning list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-info">A simple info list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-light">A simple light list group item</BListGroupItem>
                            <BListGroupItem class="list-group-item-dark">A simple dark list group item</BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Contextual classes [ links ]</h5>
                        <small class="m-0">Contextual classes also work with <code>.list-group-item-action</code>. Note the
                            addition of the hover styles here
                            not present in the previous example. Also supported is the <code>.active</code> state; apply it
                            to
                            indicate an active
                            selection on a contextual list group item.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple
                                primary
                                list group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple
                                secondary list group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple
                                success
                                list group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple
                                danger
                                list group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple
                                warning
                                list group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info
                                list
                                group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light
                                list
                                group item</a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark
                                list
                                group item</a>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">With badges</h5>
                        <small class="m-0">Add badges to any list group item to show unread counts, activity, and
                            more</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem class="d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span class="badge bg-primary rounded-pill">14</span>
                            </BListGroupItem>
                            <BListGroupItem class="d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span class="badge bg-primary rounded-pill">2</span>
                            </BListGroupItem>
                            <BListGroupItem class="d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">1</span>
                            </BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">Custom content</h5>
                        <small class="m-0">Add nearly any HTML within, even for linked list groups like the one
                            below</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 text-white">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus
                                    varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus
                                    varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus
                                    varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">List group Checkboxes</h5>
                        <small class="m-0">Place Bootstrap’s checkboxes and radios within list group items and customize as
                            needed</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="checkbox" value="">
                                Cras justo odio
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="checkbox" value="">
                                Dapibus ac facilisis in
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="checkbox" value="">
                                Morbi leo risus
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="checkbox" value="">
                                Porta ac consectetur ac
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="checkbox" value="">
                                Vestibulum at eros
                            </BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="6">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">List group radios</h5>
                        <small class="m-0">Place Bootstrap’s checkboxes and radios within list group items and customize as
                            needed</small>
                    </BCardHeader>
                    <BCardBody>
                        <BListGroup>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="radio" value="" name="list_radio">
                                Cras justo odio
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="radio" value="" name="list_radio">
                                Dapibus ac facilisis in
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="radio" value="" name="list_radio">
                                Morbi leo risus
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="radio" value="" name="list_radio">
                                Porta ac consectetur ac
                            </BListGroupItem>
                            <BListGroupItem>
                                <input class="form-check-input me-1" type="radio" value="" name="list_radio">
                                Vestibulum at eros
                            </BListGroupItem>
                        </BListGroup>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5 class="mb-2">JavaScript behavior</h5>
                        <small class="m-0">Use the tab JavaScript plugin—include it individually or through the compiled
                            <code>bootstrap.js</code> file—to
                            extend our list group to create tabbable panes of local content.</small>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-4">
                            <BCol sm="4">
                                <BListGroup id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action" id="list-home-list"
                                        data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                                    <a class="list-group-item list-group-item-action active" id="list-profile-list"
                                        data-bs-toggle="tab" href="#list-profile" role="tab"
                                        aria-controls="list-profile">Profile</a>
                                    <a class="list-group-item list-group-item-action" id="list-messages-list"
                                        data-bs-toggle="tab" href="#list-messages" role="tab"
                                        aria-controls="list-messages">Messages</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list"
                                        data-bs-toggle="tab" href="#list-settings" role="tab"
                                        aria-controls="list-settings">Settings</a>
                                </BListGroup>
                            </BCol>
                            <BCol sm="8">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade" id="list-home" role="tabpanel"
                                        aria-labelledby="list-home-list">
                                        <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing
                                            exercitation
                                            fugiat tempor.
                                            Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate
                                            reprehenderit occaecat nisi ad
                                            non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et
                                            fugiat aliquip
                                            nostrud sunt
                                            incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in
                                            cupidatat nisi
                                            enim eu nostrud do
                                            aliquip veniam minim.</p>
                                    </div>
                                    <div class="tab-pane fade show active" id="list-profile" role="tabpanel"
                                        aria-labelledby="list-profile-list">
                                        <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex
                                            nisi eu
                                            do cillum ad
                                            laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet
                                            id ex.
                                            Officia anim incididunt
                                            laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation.
                                            Dolor nisi
                                            culpa ex ad irure
                                            in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa
                                            commodo
                                            veniam incididunt
                                            veniam ad.</p>
                                    </div>
                                    <div class="tab-pane fade" id="list-messages" role="tabpanel"
                                        aria-labelledby="list-messages-list">
                                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo
                                            reprehenderit aute
                                            ipsum voluptate.
                                            Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit
                                            consequat
                                            enim tempor.
                                            Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure.
                                            Ipsum id
                                            Lorem sit sint
                                            voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt.
                                            Consectetur
                                            et fugiat anim do
                                            eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.</p>
                                    </div>
                                    <div class="tab-pane fade" id="list-settings" role="tabpanel"
                                        aria-labelledby="list-settings-list">
                                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt
                                            ullamco ex
                                            elit nostrud ut
                                            dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum
                                            occaecat
                                            aute est cupidatat
                                            aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut
                                            exercitation irure
                                            commodo non amet
                                            consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna
                                            labore dolor
                                            quis ex labore id
                                            nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.</p>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>