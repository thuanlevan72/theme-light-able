<script>
import Layout from "@/layout/c-main.vue"

export default {
    components: {
        Layout
    },
    data() {
        return {
            dismissibleAlert: true,
            dismissibleAlert2: true,
            dismissibleAlert3: true,
            dismissibleAlert4: true,
            dismissibleAlert5: true,
            dismissibleAlert6: true,
        }
    },
    methods: {
       
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                
                <h2>Alerts</h2>
                <p class="text-muted">Provide contextual feedback messages for typical user actions with the
                    handful
                    of
                    available and flexible alert messages.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/alert.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
            <BRow>
                <BCol md="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h5>Basic Alerts</h5>
                        </BCardHeader>
                        <BCardBody class="pc-component">
                            <BAlert :model-value="true" variant="primary" role="alert"> A simple primary alert—check it out!
                            </BAlert>
                            <BAlert :model-value="true" variant="secondary" role="alert"> A simple secondary alert—check it
                                out! </BAlert>
                            <BAlert :model-value="true" variant="success" role="alert"> A simple success alert—check it out!
                            </BAlert>
                            <BAlert :model-value="true" variant="danger" role="alert"> A simple danger alert—check it out!
                            </BAlert>
                            <BAlert :model-value="true" variant="warning" role="alert"> A simple warning alert—check it out!
                            </BAlert>
                            <BAlert :model-value="true" variant="info" role="alert"> A simple info alert—check it out!
                            </BAlert>
                            <BAlert :model-value="true" variant="dark" role="alert"> A simple dark alert—check it out!
                            </BAlert>
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
                            <h5>Link Alerts</h5>
                        </BCardHeader>
                        <BCardBody class="pc-component">
                            <BAlert :model-value="true" variant="primary" role="alert">
                                A simple primary alert with <a href="#!" class="alert-link">an example link</a>. Give it
                                a
                                click
                                if
                                you like.
                            </BAlert>
                            <BAlert :model-value="true" variant="secondary" role="alert">
                                A simple secondary alert with <a href="#!" class="alert-link">an example link</a>. Give
                                it a
                                click
                                if you like.
                            </BAlert>
                            <BAlert :model-value="true" variant="success" role="alert">
                                A simple success alert with <a href="#!" class="alert-link">an example link</a>. Give it
                                a
                                click
                                if
                                you like.
                            </BAlert>
                            <BAlert :model-value="true" variant="danger" role="alert">
                                A simple danger alert with <a href="#!" class="alert-link">an example link</a>. Give it
                                a
                                click
                                if
                                you like.
                            </BAlert>
                            <BAlert :model-value="true" variant="warning" role="alert">
                                A simple warning alert with <a href="#!" class="alert-link">an example link</a>. Give it
                                a
                                click
                                if
                                you like.
                            </BAlert>
                            <BAlert :model-value="true" variant="info" role="alert">
                                A simple info alert with <a href="#!" class="alert-link">an example link</a>. Give it a
                                click if
                                you
                                like.
                            </BAlert>
                            <BAlert :model-value="true" variant="dark" role="alert">
                                A simple dark alert with <a href="#!" class="alert-link">an example link</a>. Give it a
                                click if
                                you
                                like.
                            </BAlert>
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
                            <h5>Dismissing</h5>
                        </BCardHeader>
                        <BCardBody class="pc-component">
                            <div id="liveAlertPlaceholder"></div>
                            <button type="button" class="btn btn-primary mb-3" id="liveAlertBtn">Show live
                                alert</button>

                            <BAlert :model-value="true" variant="secondary" v-model="dismissibleAlert" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
                            <BAlert :model-value="true" variant="success" v-model="dismissibleAlert2" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
                            <BAlert :model-value="true" variant="danger" v-model="dismissibleAlert3" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
                            <BAlert :model-value="true" variant="warning" v-model="dismissibleAlert4" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
                            <BAlert :model-value="true" variant="info" v-model="dismissibleAlert5" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
                            <BAlert :model-value="true" variant="dark" v-model="dismissibleAlert6" show dismissible
                                class="fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </BAlert>
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
                            <h5>Additional Content</h5>
                        </BCardHeader>
                        <BCardBody class="pc-component">
                            <BAlert :model-value="true" variant="success" class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Well done!</h4>
                                <p>Aww yeah, you successfully read this important alert message. This example text is
                                    going
                                    to
                                    run a
                                    bit longer so that you can
                                    see how spacing within an alert works with this kind of content.</p>
                                <hr>
                                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things
                                    nice
                                    and
                                    tidy.
                                </p>
                            </BAlert>
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
                            <h5>Icons</h5>
                        </BCardHeader>
                        <BCardBody class="pc-component">
                            <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                                    </path>
                                </symbol>
                                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                                    </path>
                                </symbol>
                                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                    </path>
                                </symbol>
                            </svg>

                            <BAlert :model-value="true" variant="primary" class="d-flex align-items-center" role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlink:href="#info-fill"></use>
                                </svg>
                                <div> An example alert with an icon </div>
                            </BAlert>
                            <BAlert :model-value="true" variant="success" class="d-flex align-items-center" role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlink:href="#check-circle-fill"></use>
                                </svg>
                                <div> An example success alert with an icon </div>
                            </BAlert>
                            <BAlert :model-value="true" variant="warning" class="d-flex align-items-center" role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlink:href="#exclamation-triangle-fill"></use>
                                </svg>
                                <div> An example warning alert with an icon </div>
                            </BAlert>
                            <BAlert :model-value="true" variant="danger" class="d-flex align-items-center" role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                    <use xlink:href="#exclamation-triangle-fill"></use>
                                </svg>
                                <div> An example danger alert with an icon </div>
                            </BAlert>
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
        </BRow>
    </Layout>
</template>