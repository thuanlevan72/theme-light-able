<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "LOADING",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Loading" pageTitle="Ui kit" />
        <BRow>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group row mb-0">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Loader</label>
                            <div class="col-lg-6 col-md-9 col-sm-12">
                                <button class="btn btn-primary" id="show-loader">Loading</button>
                                <p class="text-muted mt-3 mb-0">click above button to open loader</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>