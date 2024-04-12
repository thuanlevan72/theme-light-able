<script>
import Rightbar from "@/components/right-bar.vue"

export default {
    name: "LOGIN",
    components: {
        Rightbar
    }
}
</script>

<template>
    <div class="auth-main v1">
        <div class="auth-wrapper">
            <div class="auth-form">
                <div class="error-card">
                    <div class="card-body">
                        <div class="error-image-block">
                            <img class="img-fluid" src="@/assets/images/pages/img-connection-lost.png" alt="img">
                        </div>
                        <div class="text-center">
                            <h1 class="mt-2">Connection lost</h1>
                            <p class="mt-2 mb-4 text-muted f-20">We couldn’t find the page you were looking for. Why not try
                                back to the Homepage.</p>
                            <router-link class="btn btn-primary d-inline-flex align-items-center mb-3"
                                to="/dashboard"><i class="ph-duotone ph-house me-2"></i> Back to Home</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-sidefooter">
                <img src="@/assets/images/logo-dark.svg" class="img-brand img-fluid" alt="images">
                <hr class="mb-3 mt-4">
                <BRow class="row">
                    <BCol class="col my-1">
                        <p class="m-0">Light Able ♥ crafted by Team <a href="#" target="_blank">
                                themes</a></p>
                    </BCol>
                    <BCol class="col-auto my-1">
                        <ul class="list-inline footer-link mb-0">
                            <li class="list-inline-item"><router-link to="/dashboard">Home</router-link></li>
                            <li class="list-inline-item"><a href="#"
                                    target="_blank">Documentation</a></li>
                            <li class="list-inline-item"><a href="#"
                                    target="_blank">Support</a></li>
                        </ul>
                    </BCol>
                </BRow>
            </div>
        </div>
    </div>

    <Rightbar />
</template>