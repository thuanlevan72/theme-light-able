<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "PLANS",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Plans" pageTitle="Ui kit" />
        <BRow>
            <div sm="12">
                <BRow class="align-items-center justify-content-center mb-4">
                    <div class="col-auto">
                        <label for="swc-price" class="h4 mb-0">Annual</label>
                    </div>
                    <div class="col-auto">
                        <div class="form-check form-switch p-0 m-0">
                            <input class="form-check-input f-20 m-0 postion-relative" type="checkbox" role="switch"
                                id="swc-price">
                        </div>
                    </div>
                    <div class="col-auto">
                        <label for="swc-price" class="h4 mb-0">Monthly</label>
                    </div>
                </BRow>
                <BRow>
                    <BCol xl="3" class="col-md-6 ">
                        <div class="card price-card">
                            <div class="card-body price-head bg-light-primary">
                                <h5 class="text-primary">Lite</h5>
                                <h2 class="price-price text-primary">$0 <span>/month</span></h2>
                                <div class="price-icon bg-light-primary">
                                    <i class="ph-duotone ph-rocket text-primary"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled product-list">
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                                    <li>100,000 unique users</li>
                                    <li>2000 Items</li>
                                    <li>API Access</li>
                                    <li>Search Features</li>
                                    <li>Editor personalization</li>
                                    <li>Upload special sites</li>
                                    <li>Advanced Features</li>
                                </ul>
                                <div class="d-grid">
                                    <button class="btn btn-primary">Current Plan</button>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol xl="3" class="col-md-6 ">
                        <div class="card price-card">
                            <div class="card-body price-head bg-light-secondary">
                                <h5 class="text-secondary">Standard</h5>
                                <h2 class="price-price text-secondary">$9 <span>/month</span></h2>
                                <div class="price-icon bg-light-secondary">
                                    <i class="ph-duotone ph-grains text-secondary"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled product-list">
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                                    <li>API Access</li>
                                    <li>Search Features</li>
                                    <li>Editor personalization</li>
                                    <li>Upload special sites</li>
                                    <li>Advanced Features</li>
                                </ul>
                                <div class="d-grid">
                                    <button class="btn btn-outline-secondary">Upgrade Plan</button>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol xl="3" class="col-md-6 ">
                        <div class="card price-card">
                            <div class="card-body price-head bg-light-secondary">
                                <h5 class="text-secondary">Standard</h5>
                                <h2 class="price-price text-secondary">$36 <span>/month</span></h2>
                                <div class="price-icon bg-light-secondary">
                                    <i class="ph-duotone ph-flower-lotus text-secondary"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled product-list">
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>API Access</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Search Features</li>
                                    <li>Editor personalization</li>
                                    <li>Upload special sites</li>
                                    <li>Advanced Features</li>
                                </ul>
                                <div class="d-grid">
                                    <button class="btn btn-outline-secondary">Upgrade Plan</button>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol xl="3" class="col-md-6 ">
                        <div class="card price-card">
                            <div class="card-body price-head bg-light-secondary">
                                <h5 class="text-secondary">ENTERPRISE</h5>
                                <h2 class="price-price text-secondary">$69 <span>/month</span></h2>
                                <div class="price-icon bg-light-secondary">
                                    <i class="ph-duotone ph-buildings text-secondary"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled product-list">
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>API Access</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Search Features</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Editor personalization</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Upload special sites</li>
                                    <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Features</li>
                                </ul>
                                <div class="d-grid">
                                    <button class="btn btn-outline-secondary">Upgrade Plan</button>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol xl="3" class="collapse multi-collapse" id="priceyear">
                    </BCol>
                </BRow>
                <BRow>
                  <BCol xl="3" class="col-md-6">
                    <div class="card price-card">
                      <div class="card-body price-head bg-light-primary">
                        <h5 class="text-primary">Lite</h5>
                        <h2 class="price-price text-primary">$120 <span>/year</span></h2>
                        <div class="price-icon bg-light-primary">
                          <i class="ph-duotone ph-rocket text-primary"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled product-list">
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                          <li>100,000 unique users</li>
                          <li>2000 Items</li>
                          <li>API Access</li>
                          <li>Search Features</li>
                          <li>Editor personalization</li>
                          <li>Upload special sites</li>
                          <li>Advanced Features</li>
                        </ul>
                        <div class="d-grid">
                          <button class="btn btn-primary">Current Plan</button>
                        </div>
                      </div>
                    </div>
                  </BCol>
                  <BCol xl="3" class="col-md-6">
                    <div class="card price-card">
                      <div class="card-body price-head bg-light-secondary">
                        <h5 class="text-secondary">Standard</h5>
                        <h2 class="price-price text-secondary">$99 <span>/year</span></h2>
                        <div class="price-icon bg-light-secondary">
                          <i class="ph-duotone ph-grains text-secondary"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled product-list">
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                          <li>API Access</li>
                          <li>Search Features</li>
                          <li>Editor personalization</li>
                          <li>Upload special sites</li>
                          <li>Advanced Features</li>
                        </ul>
                        <div class="d-grid">
                          <button class="btn btn-outline-secondary">Upgrade Plan</button>
                        </div>
                      </div>
                    </div>
                  </BCol>
                  <BCol xl="3" class="col-md-6">
                    <div class="card price-card">
                      <div class="card-body price-head bg-light-secondary">
                        <h5 class="text-secondary">Standard</h5>
                        <h2 class="price-price text-secondary">$1236 <span>/year</span></h2>
                        <div class="price-icon bg-light-secondary">
                          <i class="ph-duotone ph-flower-lotus text-secondary"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled product-list">
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>API Access</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Search Features</li>
                          <li>Editor personalization</li>
                          <li>Upload special sites</li>
                          <li>Advanced Features</li>
                        </ul>
                        <div class="d-grid">
                          <button class="btn btn-outline-secondary">Upgrade Plan</button>
                        </div>
                      </div>
                    </div>
                  </BCol>
                  <BCol xl="3" class="col-md-6">
                    <div class="card price-card">
                      <div class="card-body price-head bg-light-secondary">
                        <h5 class="text-secondary">ENTERPRISE</h5>
                        <h2 class="price-price text-secondary">$3469 <span>/year</span></h2>
                        <div class="price-icon bg-light-secondary">
                          <i class="ph-duotone ph-buildings text-secondary"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled product-list">
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Free domains</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>CDN Integration</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>2000 Items</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>API Access</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Search Features</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Editor personalization</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Upload special sites</li>
                          <li class="enable"><i class="ph-duotone ph-check-circle"></i>Advanced Features</li>
                        </ul>
                        <div class="d-grid">
                          <button class="btn btn-outline-secondary">Upgrade Plan</button>
                        </div>
                      </div>
                    </div>
                  </BCol>
                </BRow>
            </div>
        </BRow>
    </Layout>
</template>