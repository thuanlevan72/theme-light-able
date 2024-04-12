<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import DropZone from "@/components/common/dropZone.vue";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";

export default {
    name: "SETTING",
    components: {
        Layout, pageheader, DropZone
    },
    setup() {
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
        };
        return { dropzoneFile, drop, selectedFile, v$: useVuelidate() };
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Setting" pageTitle="Ui kit" />
        <BRow>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Site setting</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Site name</label>
                            <div class="col-lg-6 col-sm-7">
                                <input type="text" class="form-control" placeholder="Enter site name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Unique ID</label>
                            <div class="col-lg-6 col-sm-7">
                                <input type="text" class="form-control" placeholder="Enter unique id">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Site Url</label>
                            <div class="col-lg-6 col-sm-7">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Enter site url">
                                    <button class="btn btn-primary" type="button"><i class="ti ti-copy align-middle"></i>
                                        Copy</button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Affiliate ID</label>
                            <div class="col-lg-6 col-sm-7">
                                <input type="text" class="form-control" placeholder="Enter affiliate id">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Favicon
                                <span class="link-secondary" data-bs-toggle="tooltip" data-bs-html="true"
                                    data-bs-title='<span class="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span class="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                                    <i class="ph-duotone ph-question"></i>
                                </span>
                            </label>
                            <div class="col-lg-6 col-sm-7">
                                <div class="fallback">
                                    <DropZone @drop.prevent="drop" @change="selectedFile" />
                                    <span class="file-info">{{ dropzoneFile.name }}</span>
                                </div>
                                <a href="#" class="link-primary text-sm ms-2">Need help?</a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-sm-3 text-sm-end">Webclip
                                <span class="link-secondary" data-bs-toggle="tooltip" data-bs-html="true"
                                    data-bs-title='<span class="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span class="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                                    <i class="ph-duotone ph-question"></i>
                                </span>
                            </label>
                            <div class="col-lg-6 col-sm-7">
                                <div class="fallback">
                                    <DropZone @drop.prevent="drop" @change="selectedFile" />
                                    <span class="file-info">{{ dropzoneFile.name }}</span>
                                </div>
                                <a href="#" class="link-primary text-smin">Need help?</a>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <span class="col-form-label col-sm-3 text-sm-end"></span>
                            <div class="col-lg-6 col-sm-7">
                                <button class="btn btn-primary me-2">Apply Change</button>
                                <button class="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>