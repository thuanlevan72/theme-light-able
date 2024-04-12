<script>
import Rightbar from "@/components/right-bar.vue"

export default {
    name: "FORGOT-PASSWORD",
    components: {
        Rightbar
    }
}
</script>

<template>
    <div class="auth-main v1">
        <div class="auth-wrapper">
            <div class="auth-form">
                <div class="card my-5">
                    <div class="card-body">
                        <div class="text-center">
                            <img src="@/assets/images/authentication/img-auth-fporgot-password.png" alt="images"
                                class="img-fluid mb-3">
                            <h4 class="f-w-500 mb-1">Forgot Password</h4>
                            <p class="mb-3">Back to <a href="@/pages/login-v1.html" class="link-primary ms-1">Log in</a>
                            </p>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email Address">
                        </div>
                        <div class="d-grid mt-3">
                            <button type="button" class="btn btn-primary">Send reset email</button>
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