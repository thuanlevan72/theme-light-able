<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "CONTACT-US",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Contact-Us" pageTitle="Ui kit" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.287943634566!2d-80.74322468542996!3d35.303404580282415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzUuMyA4MC44Ilc!5e0!3m2!1sen!2sus!4v1607492055274!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="contact-map"></iframe>
                        <BRow class="row justify-content-center">
                            <BCol class="col-11 col-sm-9 col-xl-8">
                                <div class="card contact-card-form user-card">
                                    <div class="card-body">
                                        <div class="d-flex mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avtar bg-brand-color-1 text-white me-3">
                                                        <i class="ph-duotone ph-chats-teardrop f-26"></i>
                                                    </div>
                                                    <div>
                                                        <h4 class="f-w-500 mb-1">Contact Us</h4>
                                                        <p class="mb-0">Let's Start a Conversation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <BRow class="row">
                                            <BCol class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Name</label>
                                                    <input type="text" class="form-control" placeholder="Enter name">
                                                </div>
                                            </BCol>
                                            <BCol class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Subject</label>
                                                    <input type="text" class="form-control" placeholder="Enter Subject">
                                                </div>
                                            </BCol>
                                            <BCol class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Email address</label>
                                                    <input type="email" class="form-control" placeholder="Email Address">
                                                </div>
                                            </BCol>
                                            <BCol class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Contact No.</label>
                                                    <input type="text" class="form-control" placeholder="Enter Contact No">
                                                </div>
                                            </BCol>
                                            <BCol class="col-12">
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Message</label>
                                                    <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                                                </div>
                                            </BCol>
                                        </BRow>
                                        <div class="d-grid mt-4">
                                            <button type="button" class="btn btn-primary mx-sm-3 mx-md-5">Send
                                                Message</button>
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
                                                    <a href="https://myaccount.google.com/" class="avtar avtar-s rounded-circle bg-googleplus" target="_blank">
                                                        <i class="fab fa-google text-white"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>