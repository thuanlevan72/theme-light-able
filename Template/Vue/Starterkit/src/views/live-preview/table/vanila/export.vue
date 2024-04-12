<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { basicData } from "./data-basic"

export default {
    name: "EXPORT",
    data() {
        return {
            basicData
        }
    },
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
                        <h5>Basic Table</h5>
                        <span class="d-block m-t-5">use class <code>table</code> inside table element</span>
                    </div>
                    <div class="card-body table-border-style">
                        <button class="btn btn-light-primary mb-1 btn-sm csv">Export CSV</button>
                        <button class="btn btn-light-primary mb-1 btn-sm sql ms-1">Export SQL</button>
                        <button class="btn btn-light-primary mb-1 btn-sm txt ms-1">Export TXT</button>
                        <button class="btn btn-light-primary mb-1 btn-sm json ms-1">Export JSON</button>
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-export">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Ext.</th>
                                        <th>City</th>
                                        <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                                        <th>Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in basicData" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.location }}</td>
                                        <td>{{ item.birthDate }}</td>
                                        <td>{{ item.percentage }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>