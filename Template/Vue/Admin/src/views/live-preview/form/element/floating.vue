<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "FLOATING",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Floating Label" pageTitle="Forms" />
        <BRow>
            <BCol class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Floating labels</h5>
                    </div>
                    <div class="card-body">
                        <h5>Form controls</h5>
                        <hr>
                        <form>
                            <BRow class=" g-4">
                                <BCol class="col-md-6">
                                    <div class="form-floating mb-0">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="Email address">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                </BCol>
                                <BCol class="col-md-6">
                                    <div class="form-floating mb-0">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                </BCol>
                            </BRow>
                        </form>
                        <h5 class="mt-3">Default Value</h5>
                        <hr>
                        <BRow class=" g-4">
                            <BCol class="col-md-6">
                                <form class="form-floating mb-0">
                                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
                                    <label for="floatingInputValue">Input with value</label>
                                </form>
                            </BCol>
                            <BCol class="col-md-6">
                                <div class="form-floating mb-0">
                                    <input type="password" class="form-control" id="floatingpassword1" placeholder="password" value="Password">
                                    <label for="floatingpassword1">Password</label>
                                </div>
                            </BCol>
                        </BRow>
                        <h5 class="mt-3">Validation styles</h5>
                        <hr>
                        <BRow class=" g-4">
                            <BCol class="col-md-6">
                                <form class="form-floating mb-0">
                                    <input type="email" class="form-control is-valid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
                                    <label for="floatingInputInvalid">Valid input</label>
                                </form>
                            </BCol>
                            <BCol class="col-md-6">
                                <form class="form-floating mb-0">
                                    <input type="email" class="form-control is-invalid" id="floatingInputInvalid1" placeholder="name@example.com" value="test@example.com">
                                    <label for="floatingInputInvalid1">Invalid input</label>
                                </form>
                            </BCol>
                        </BRow>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>Textareas</h5>
                    </div>
                    <div class="card-body">
                        <BRow class=" g-4">
                            <BCol class="col-md-6">
                                <h5>Default style</h5>
                                <hr>
                                <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Comments</label>
                                </div>
                            </BCol>
                            <BCol class="col-md-6">
                                <h5>Custom height</h5>
                                <hr>
                                <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                </div>
                            </BCol>
                        </BRow>
                        <h5 class="mt-3">Validation styles</h5>
                        <hr>
                        <BRow class=" g-4">
                            <BCol class="col-md-6">
                                <div class="form-floating mb-0">
                                    <textarea class="form-control is-valid" rows="3" placeholder="Leave a comment here" id="floatingTextarea1">
                                    Valid textarea</textarea>
                                    <label for="floatingTextarea1">Comments</label>
                                </div>
                            </BCol>
                            <BCol class="col-md-6">
                                <form class="form-floating mb-0">
                                    <textarea class="form-control is-invalid" rows="3" placeholder="Leave a comment here" id="floatingTextarea21">
                                    Invalid textarea</textarea>
                                    <label for="floatingTextarea21">Comments</label>
                                </form>
                            </BCol>
                        </BRow>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>Select</h5>
                    </div>
                    <div class="card-body">
                        <BRow class="">
                            <BCol class="col-md-12">
                                <div class="form-floating">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="floatingSelect">Works with selects</label>
                                </div>
                            </BCol>
                        </BRow>
                        <h5 class="mt-3">Validation styles</h5>
                        <hr>
                        <BRow class=" g-4">
                            <BCol class="col-md-6">
                                <div class="form-floating mb-0">
                                    <select class="form-select is-valid" id="floatingselect1" aria-label="Floating label select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="floatingselect1">Comments</label>
                                </div>
                            </BCol>
                            <BCol class="col-md-6">
                                <form class="form-floating mb-0">
                                    <select class="form-select is-invalid" id="floatingselect2" aria-label="Floating label select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="floatingselect2">Comments</label>
                                </form>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>