<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { basicData } from "./data-basic"

export default {
    name: "ROW",
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
        <pageheader title="Add Row" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Rows</h5>
                    </div>
                    <div class="card-body table-border-style">
                        <button class="btn btn-light-primary mb-3" id="add">Add 1000 Rows</button>
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-addrow">
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