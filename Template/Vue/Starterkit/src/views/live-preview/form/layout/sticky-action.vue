<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "STICKY ACTION",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Sticky Action Bar" pageTitle="Forms" />
        <BRow>
            <BCol class="col-lg-12">
                <div class="card">
                    <div id="sticky-action" class="sticky-action">
                        <div class="card-header">
                            <BRow class="align-items-center">
                                <BCol class="col-sm-6">
                                    <h5>Sticky Action Bar</h5>
                                </BCol>
                                <BCol class="col-sm-6 text-sm-end mt-3 mt-sm-0">
                                    <button type="reset" class="btn btn-success">Submit</button>
                                    <button type="reset" class="btn btn-light-secondary ms-1">Cancel</button>
                                </BCol>
                            </BRow>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5>Form controls</h5>
                        <hr>
                        <BRow>
                            <BCol class="col-md-6">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label" for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email">
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                            anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"
                                            placeholder="Password">
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-4">Submit</button>
                                </form>
                            </BCol>
                            <BCol class="col-md-6">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Text</label>
                                        <input type="text" class="form-control" placeholder="Text">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </form>
                            </BCol>
                        </BRow>
                        <h5>Sizing</h5>
                        <hr>
                        <BRow class="row">
                            <BCol class="col-md-6">
                                <input class="mb-3 form-control form-control-lg" type="text" placeholder=".form-control-lg">
                                <input class="mb-3 form-control" type="text" placeholder="Default input">
                                <input class="mb-3 form-control form-control-sm" type="text" placeholder=".form-control-sm">
                            </BCol>
                            <BCol class="col-md-6">
                                <select class="mb-3 form-select form-select-lg">
                                    <option>Large select</option>
                                </select>
                                <select class="mb-3 form-select">
                                    <option>Default select</option>
                                </select>
                            </BCol>
                        </BRow>
                        <h5>Inline</h5>
                        <hr>
                        <form class="row row-cols-md-auto g-3 align-items-center">
                            <BCol class="col-12">
                                <label class="sr-only" for="inlineFormInputName">Name</label>
                                <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
                            </BCol>
                            <BCol class="col-12">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-text">@</div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                                        placeholder="Username">
                                </div>
                            </BCol>
                            <BCol class="col-12">
                                <label class="sr-only" for="inlineFormSelectPref">Preference</label>
                                <select class="form-select" id="inlineFormSelectPref">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </BCol>
                            <BCol class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                    <label class="form-check-label" for="inlineFormCheck"> Remember me </label>
                                </div>
                            </BCol>
                            <BCol class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </BCol>
                        </form>
                        <h5>Form Grid</h5>
                        <hr>
                        <form>
                            <BRow class="row">
                                <BCol class="form-group col-md-6">
                                    <label class="form-label" for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </BCol>
                                <BCol class="form-group col-md-6">
                                    <label class="form-label" for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                </BCol>
                            </BRow>
                            <div class="form-group">
                                <label class="form-label" for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2"
                                    placeholder="Apartment, studio, or floor">
                            </div>
                            <BRow class="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-4">
                                    <label class="form-label" for="inputState">State</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>select</option>
                                        <option>Large select</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="form-label" for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                </div>
                            </BRow>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">Check me out</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>