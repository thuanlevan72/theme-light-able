<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "METHOD",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Table Methods" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Tables Methods</h5>
                        <span class="d-block m-t-5">use class <code>table</code> inside table element</span>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="form-group">
                            <button type="button" class="btn btn-sm btn-light-primary main" id="init">Init</button>
                            <button type="button" class="btn btn-sm btn-light-danger main ms-1" id="destroy">Destroy</button>
                        </div>
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-methods">
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Customer</th>
                                        <th>Version</th>
                                        <th data-type="date" data-format="DD.MM.YYYY">Planned upgrade</th>
                                        <th>DB-Info</th>
                                        <th>Website info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Test one <br>CCode: 33123
                                        </td>
                                        <td>7.1.5</td>
                                        <td>26.11.2018</td>
                                        <td>
                                            Server: s1 <br>DB: db1
                                        </td>
                                        <td>
                                            Websitename: Red <br>Node: 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Test two <br>CCode: 12353
                                        </td>
                                        <td>7.1.5.2</td>
                                        <td>26.11.2019</td>
                                        <td>
                                            Server: s1 <br>DB: db2
                                        </td>
                                        <td>
                                            Websitename: Green <br>Node: 6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Test three <br>CCode: 33522
                                        </td>
                                        <td>7.1.6</td>
                                        <td>01.01.2020</td>
                                        <td>
                                            Server: s2 <br>DB: db1
                                        </td>
                                        <td>
                                            Websitename: Orange <br>Node: 5
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Test four <br>CCode: 25512
                                        </td>
                                        <td>7.1.7</td>
                                        <td>26.03.2021</td>
                                        <td>
                                            Server: s1 <br>DB: db3
                                        </td>
                                        <td>
                                            Websitename: Blue <br>Node: 10
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <BRow class="row">
                            <BCol class="col-md-6">
                                <div id="hide">
                                    <h5>Column Visibility</h5>
                                    <div class="form-group" id="columns"></div>
                                </div>
                            </BCol>
                            <BCol class="col-md-6">
                                <h5>Import / Export Data</h5>
                                <div class="form-group">
                                    <textarea cols="30" rows="2" class="form-control"
                                        placeholder="Paste your csv or json string here..."></textarea>
                                </div>
                                <div class="form-group btn-page">
                                    <button type="button" class="btn btn-light-primary btn-sm import" data-type="csv">Import
                                        CSV</button>
                                    <button type="button" class="btn btn-light-primary btn-sm import"
                                        data-type="json">Import
                                        JSON</button>
                                    <button type="button" class="btn btn-light-success btn-sm export" data-type="csv">Export
                                        CSV</button>
                                    <button type="button" class="btn btn-light-success btn-sm export" data-type="sql">Export
                                        SQL</button>
                                    <button type="button" class="btn btn-light-success btn-sm export"
                                        data-type="json">Export
                                        JSON</button>
                                </div>
                                <div class="form-group">
                                    <small>NOTE: The csv column delimiters and line delimiters are set to <code>","</code>
                                        and
                                        <code>"\n"</code> respectively.</small>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </div>
        </BRow>
</Layout></template>