<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "VALIDATION",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Form Validation" pageTitle="Forms" />
        <BRow>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>File Upload</h5>
                    </div>
                    <div class="card-body">
                        <form action="../assets/json/file-upload.php" class="dropzone">
                            <div class="fallback">
                                <input name="file" type="file" multiple>
                            </div>
                        </form>
                        <div class="text-center m-t-20">
                            <button class="btn btn-primary">Upload Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>