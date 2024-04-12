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
                <div class="container">
                    <div class="card-body soon-card">
                        <BRow class="row justify-content-center align-items-center">
                            <BCol class="col-lg-6 text-center">
                                <img class="img-fluid" src="@/assets/images/pages/img-soon.png" alt="img">
                            </BCol>
                            <BCol class="col-lg-6 col-xl-4">
                                <div class="text-center">
                                    <h1 class="mt-2">Coming soon</h1>
                                    <p class="mt-2 mb-4 text-muted f-20">Something new is on it's way</p>
                                </div>
                                <BRow class="row g-3 timer-block mt-4 justify-content-center" id="timer-block">
                                    <BCol class="col-auto">
                                        <span class="avtar card avtar-xl">10</span>
                                    </BCol>
                                    <BCol class="col-auto">
                                        <span class="avtar card avtar-xl">10</span>
                                    </BCol>
                                    <BCol class="col-auto">
                                        <span class="avtar card avtar-xl">10</span>
                                    </BCol>
                                    <BCol class="col-auto">
                                        <span class="avtar card avtar-xl">10</span>
                                    </BCol>
                                </BRow>
                                <BRow class="row g-3 d-flex align-items-center mt-4">
                                    <BCol class="col">
                                        <input type="email" class="form-control" placeholder="Email Address">
                                    </BCol>
                                    <BCol class="col-auto">
                                        <div class="d-grid">
                                            <button class="btn btn-primary d-flex align-items-center"><i
                                                    class="ti ti-bell-ringing me-2"></i>Notify Me</button>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
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