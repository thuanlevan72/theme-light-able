<script>
import Layout from "@/layout/c-main.vue"

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
                <h2>Tour</h2>
                <p class="text-muted">Intro.js is a lightweight JavaScript library for creating step-by-step and powerful
                    customer onboarding tours</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://introjs.com/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol sm="12">
                <BCard no-body class="step1">
                    <BCardHeader class="step2">
                        <h5 class="step3">Hello card</h5>
                    </BCardHeader>
                    <BCardBody class="step4">
                        <h1>H1 Admin Template</h1>
                        <h2>H2 Admin Template</h2>
                        <h3>H3 Admin Template</h3>
                        <h4>H4 Admin Template</h4>
                        <h5>H5 Admin Template</h5>
                        <h6>H6 Admin Template</h6>
                        <p>p Admin Template</p>
                        <strong>p Admin Template</strong>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>