<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "MULTICOLUMN",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Multi Layout" pageTitle="Forms" />
        <BRow>
            <BCol class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h5>2 Columns Form Layout</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <BRow>
                                <BCol class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-label">Name:</label>
                                        <input type="email" class="form-control" placeholder="Enter full name">
                                        <small class="form-text text-muted">Please enter your full name</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-label">Email:</label>
                                        <input type="email" class="form-control" placeholder="Enter contact number">
                                        <small class="form-text text-muted">Please enter your Email id</small>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow>
                                <BCol class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-label">Password:</label>
                                        <div class="input-group search-form">
                                            <input type="Password" class="form-control" placeholder="Please enter your Password">
                                            <span class="input-group-text bg-transparent"><i class="feather icon-lock"></i></span>
                                        </div>
                                        <small class="form-text text-muted">Please enter your Password</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-label">Profile URL:</label>
                                        <div class="input-group search-form">
                                            <input type="text" class="form-control" placeholder="Please enter your Profile URL">
                                            <span class="input-group-text bg-transparent"><i class="feather icon-link"></i></span>
                                        </div>
                                        <small class="form-text text-muted">Please enter your Profile URL</small>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow class="form-group">
                                <BCol class="col-lg-6">
                                    <label class="form-label">User Type:</label>
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="form-check-input" checked>
                                            <label class="form-check-label" for="customRadioInline1">Administrator</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="form-check-input">
                                            <label class="form-check-label" for="customRadioInline2">Author</label>
                                        </div>
                                    </div>
                                    <small class="form-text">Please select user type</small>
                                </BCol>
                            </BRow>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>2 Columns Horizontal Form Layout</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row g-3">
                                <label class="col-lg-2 col-form-label">Name:</label>
                                <BCol class="col-lg-3">
                                    <input type="email" class="form-control" placeholder="Enter full name">
                                    <small class="form-text text-muted">Please enter your full name</small>
                                </BCol>
                                <label class="col-lg-2 col-form-label">Email:</label>
                                <BCol class="col-lg-3">
                                    <input type="email" class="form-control" placeholder="Enter contact number">
                                    <small class="form-text text-muted">Please enter your Email id</small>
                                </BCol>
                            </div>
                            <div class="form-group row g-3">
                                <label class="col-lg-2 col-form-label">Password:</label>
                                <BCol class="col-lg-3">
                                    <div class="input-group search-form">
                                        <input type="password" class="form-control" placeholder="Enter your Password">
                                        <span class="input-group-text bg-transparent"><i class="feather icon-lock"></i></span>
                                    </div>
                                    <small class="form-text text-muted">Please enter your Password</small>
                                </BCol>
                                <label class="col-lg-2 col-form-label">Profile URL:</label>
                                <BCol class="col-lg-3">
                                    <div class="input-group search-form">
                                        <input type="text" class="form-control" placeholder="Enter your Profile URL">
                                        <span class="input-group-text bg-transparent"><i class="feather icon-link"></i></span>
                                    </div>
                                    <small class="form-text text-muted">Please enter your Profile URL</small>
                                </BCol>
                            </div>
                            <div class="form-group row g-3 align-items-center">
                                <label class="col-lg-2 col-form-label">User Type:</label>
                                <BCol class="col-lg-3">
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="customRadioInline21" name="customRadioInline1" class="form-check-input" checked>
                                            <label class="form-check-label" for="customRadioInline21">Administrator</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="customRadioInline22" name="customRadioInline1" class="form-check-input">
                                            <label class="form-check-label" for="customRadioInline22">Author</label>
                                        </div>
                                    </div>
                                    <small class="form-text">Please select user type</small>
                                </BCol>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>3 Columns Form Layout</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <BRow class="g-3">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Name:</label>
                                        <input type="email" class="form-control" placeholder="Enter full name">
                                        <small class="form-text text-muted">Please enter your full name</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Email:</label>
                                        <input type="email" class="form-control" placeholder="Enter email">
                                        <small class="form-text text-muted">Please enter your email</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Password:</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="feather icon-lock"></i></span>
                                            <input type="password" class="form-control" placeholder="Enter Password">
                                        </div>
                                        <small class="form-text text-muted">Please enter your Password</small>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow class="g-3">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Contact:</label>
                                        <input type="email" class="form-control" placeholder="Enter contact number">
                                        <small class="form-text text-muted">Please enter your contact</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Profile URL:</label>
                                        <div class="input-group search-form">
                                            <input type="text" class="form-control" placeholder="Profile URL">
                                            <span class="input-group-text bg-transparent"><i class="feather icon-link"></i></span>
                                        </div>
                                        <small class="form-text text-muted">Please enter Profile URL</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Pin code:</label>
                                        <input type="text" class="form-control" placeholder="Enter your Pin code">
                                        <small class="form-text text-muted">Please enter your Pin code</small>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow class="g-3">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">Address:</label>
                                        <input type="text" class="form-control" placeholder="Enter your address">
                                        <small class="form-text text-muted">Please enter your address</small>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-label">User Type:</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input type="radio" id="customRadioInline221" name="customRadioInline1" class="form-check-input" checked>
                                                <label class="form-check-label" for="customRadioInline221">Administrator</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input type="radio" id="customRadioInline222" name="customRadioInline1" class="form-check-input">
                                                <label class="form-check-label" for="customRadioInline222">Author</label>
                                            </div>
                                        </div>
                                        <small class="form-text">Please select User Type</small>
                                    </div>
                                </BCol>
                            </BRow>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>3 Columns Horizontal Form Layout</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class=" row">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="row">
                                            <label class="col-lg-3 col-form-label text-lg-end px-lg-0">Name:</label>
                                            <BCol class="col-lg-9">
                                                <input type="email" class="form-control" placeholder="Full name">
                                                <small class="form-text text-muted">Please enter your full name</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="row">
                                            <BCol class="col-lg-3 col-form-label text-lg-end px-lg-0">Email:</BCol>
                                            <BCol class="col-lg-9">
                                                <input type="email" class="form-control" placeholder="Enter email">
                                                <small class="form-text text-muted">Please enter your email</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="row">
                                            <BCol class="col-lg-3 col-form-label text-lg-end px-lg-0">Password:</BCol>
                                            <BCol class="col-lg-9">
                                                <div class="input-group">
                                                    <span class="input-group-text"><i class="feather icon-lock"></i></span>
                                                    <input type="password" class="form-control" placeholder="Enter Password">
                                                </div>
                                                <small class="form-text text-muted">Please enter your Password</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                            </div>
                            <hr class="my-3">
                            <BRow class="row">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="row">
                                            <label class="col-lg-3 col-form-label text-lg-end px-lg-0">Contact:</label>
                                            <BCol class="col-lg-9">
                                                <input type="email" class="form-control" placeholder="Enter contact number">
                                                <small class="form-text text-muted">Please enter your contact</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <BRow class="row">
                                        <div class="form-group">
                                            <label class="col-lg-3 col-form-label text-lg-end px-lg-0">Profile URL:</label>
                                            <BCol class="col-lg-9">
                                                <div class="input-group search-form">
                                                    <input type="text" class="form-control" placeholder="Fax Profile URL">
                                                    <span class="input-group-text bg-transparent"><i class="feather icon-alert-circle"></i></span>
                                                </div>
                                                <small class="form-text text-muted">Please enter Profile URL</small>
                                            </BCol>
                                        </div>
                                    </BRow>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <BRow class="row">
                                        <BCol class="col-lg-3 col-form-label text-lg-end px-lg-0">Pin code:</BCol>
                                        <BCol class="col-lg-9">
                                            <input type="text" class="form-control" placeholder="Enter your Pin code">
                                            <small class="form-text text-muted">Please enter your Pin code</small>
                                        </BCol>
                                    </BRow>
                                </BCol>
                            </BRow>
                            <hr class="my-3">
                            <BRow class=" row">
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="row">
                                            <BCol class="col-lg-3 col-form-label text-lg-end px-lg-0">Address:</BCol>
                                            <BCol class="col-lg-9">
                                                <input type="text" class="form-control" placeholder="Enter your address">
                                                <small class="form-text text-muted">Please enter your address</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                                <BCol class="col-lg-4">
                                    <div class="form-group">
                                        <BRow class="align-items-center">
                                            <BCol class="col-lg-3 col-form-label text-lg-end px-lg-0">User Type:</BCol>
                                            <BCol class="col-lg-9">
                                                <div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" id="customRadioInline231" name="customRadioInline1" class="form-check-input" checked>
                                                        <label class="form-check-label" for="customRadioInline231">Administrator</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" id="customRadioInline232" name="customRadioInline1" class="form-check-input">
                                                        <label class="form-check-label" for="customRadioInline232">Author</label>
                                                    </div>
                                                </div>
                                                <small class="form-text">Please select User Type</small>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCol>
                            </BRow>
                        </form>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>