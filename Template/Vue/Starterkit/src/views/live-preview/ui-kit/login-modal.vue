<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "LOGIN MODAL",
    data() {
        return {
            modalShow: false,
            modalShow1: false,
        }
    },
    components: {
        Layout, pageheader
    },
    methods: {
        toggleModal() {
            this.modalShow = !this.modalShow;
            this.modalShow1 = !this.modalShow1;
        }
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Login Modal" pageTitle="Ui kit" />
        <BRow>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group row mb-0">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Login Modal</label>
                            <div class="col-lg-6 col-md-9 col-sm-12">
                                <BButton variant="primary" @click="modalShow = !modalShow">Login</BButton>
                                <p class="text-muted mt-3 mb-0">click above button to open login modal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
    <BModal v-model="modalShow" hide-footer class="v-modal-custom" id="login-modal" centered>
        <template #title>
            <h4 class="f-w-500 mb-1">Login with your email</h4>
            <p class="mb-3 pb-0">Don't have an Account?<a href="#" class="link-primary ms-2" data-bs-toggle="modal"
                    data-bs-target="#registration-modal" @click="toggleModal">Create Account</a></p>
        </template>
        <div class="form-group mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="Email Address">
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="d-flex mt-1 justify-content-between align-items-center">
            <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
            </div>
        </div>
        <div class="d-grid mt-4">
            <button type="button" class="btn btn-primary">Login</button>
        </div>
        <div class="saprator my-3">
            <span>Or continue with</span>
        </div>
        <div class="text-center">
            <ul class="list-inline mx-auto mt-3 mb-0">
                <li class="list-inline-item">
                    <a href="https://www.facebook.com/" class="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                        <i class="fab fa-facebook-f text-white"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://twitter.com/" class="avtar avtar-s rounded-circle bg-twitter ms-1" target="_blank">
                        <i class="fab fa-twitter text-white"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://myaccount.google.com/" class="avtar avtar-s rounded-circle bg-googleplus ms-1"
                        target="_blank">
                        <i class="fab fa-google text-white"></i>
                    </a>
                </li>
            </ul>
        </div>
    </BModal>

    <BModal v-model="modalShow1" hide-footer class="modal fade login-modal" id="registration-modal" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <template #title>
            <h4 class="f-w-500 mb-1">Register with your email</h4>
            <p class="mb-3">Already have an Account? <a href="#" class="link-primary" data-bs-toggle="modal"
                    data-bs-target="#login-modal" @click="toggleModal">Log in</a></p>
        </template>
        <div class="form-group mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Enter Name">
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="Enter Email Address">
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Enter Password">
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Enter Confirm Password">
        </div>
        <div class="d-flex mt-1 justify-content-between align-items-center">
            <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                <label class="form-check-label text-muted" for="customCheckc1">I agree to all the Terms &
                    Condition</label>
            </div>
        </div>
        <div class="d-grid mt-4">
            <button type="button" class="btn btn-primary">Login</button>
        </div>
        <div class="saprator my-3">
            <span>Or continue with</span>
        </div>
        <div class="text-center">
            <ul class="list-inline mx-auto mt-3 mb-0">
                <li class="list-inline-item">
                    <a href="https://www.facebook.com/" class="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                        <i class="fab fa-facebook-f text-white"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://twitter.com/" class="avtar avtar-s rounded-circle bg-twitter" target="_blank">
                        <i class="fab fa-twitter text-white"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://myaccount.google.com/" class="avtar avtar-s rounded-circle bg-googleplus"
                        target="_blank">
                        <i class="fab fa-google text-white"></i>
                    </a>
                </li>
            </ul>
        </div>
    </BModal>
</template>