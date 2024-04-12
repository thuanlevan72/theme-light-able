<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "COLUMN",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Render Column Cells" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Basic Table</h5>
                        <span class="d-block m-t-5">use class <code>table</code> inside table element</span>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-render-column-cells"> </table>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>