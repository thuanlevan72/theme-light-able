<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "APi",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Fetch API" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Fetch API</h5>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-fetchapi"> </table>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>