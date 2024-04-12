<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "DYNAMIC",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Dynamic Import" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Dynamic Import</h5>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-dynamic-import"> </table>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>