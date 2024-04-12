<script>
import Rightbar from "@/components/right-bar.vue"

export default {
    name: "CODE-VERIFICATION",
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
                            <img src="@/assets/images/authentication/img-auth-code-varify.png" alt="images"
                                class="img-fluid mb-3">
                            <h4 class="f-w-500 mb-1">Please confirm with OTP</h4>
                            <p class="mb-0">We`ve send you code on jone. ****@company.com</p>
                            <p class="mb-3">Did not receive the email? <a href="#" class="link-primary ms-1">Resend code</a>
                            </p>
                        </div>
                        <BRow class="row my-4 g-3 text-center">
                            <BCol>
                                <input type="text" class="form-control text-center" placeholder="0">
                            </BCol>
                            <BCol>
                                <input type="text" class="form-control text-center" placeholder="0">
                            </BCol>
                            <BCol>
                                <input type="text" class="form-control text-center" placeholder="0">
                            </BCol>
                            <BCol>
                                <input type="text" class="form-control text-center" placeholder="0">
                            </BCol>
                        </Brow>
                        <div class="d-grid mt-4">
                            <button type="button" class="btn btn-primary">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-sidefooter">
                <img src="@/assets/images/logo-dark.svg" class="img-brand img-fluid" alt="images">
                <hr class="mb-3 mt-4">
                <BRow class="row">
                    <BCol class="my-1">
                        <p class="m-0">Light Able ♥ crafted by Team <a href="#" target="_blank">
BCol       themes</a></p>
                    </BCol>
                    <BCol class="auto my-1">
                        <ul class="list-inline footer-link mb-0">
BCol   <li class="list-inline-item"><router-link to="/dashboard">Home</router-link></li>
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