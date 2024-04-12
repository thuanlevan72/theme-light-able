<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { iconData } from "./data"
export default {
    name: "TABLER",
    data() {
        return {
            iconData
        }
    },
    components: {
        Layout, pageheader,
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Tabler Icons" pageTitle="Icons" />
        <BRow>
            <BCol class="col-sm-12">
                <BCard no-body class="card">
                    <BCardHeader class="card-header">
                        <h5>Phosphor</h5>
                        <p>Use icon with <code>&lt;i class="&lt;&lt; Copied code &gt;&gt;"&gt;</code> in you html code </p>
                    </BCardHeader>
                    <BCardBody class="text-center">
                        <BRow class="row justify-content-center">
                            <BCol class="col-sm-6">
                                <input type="text" id="icon-search" class="form-control mb-4" placeholder="search . . ">
                            </BCol>
                        </BRow>
                        <div class="i-main" id="icon-wrapper">
                            <BCol v-for="(icon, index) in iconData" :key="index" xl="3" lg="4" sm="6" class="i-block">
                                <component :is="icon.component" :size="32" />
                            </BCol>
                            <!-- <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-address-book :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplane :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplane-in-flight :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplane-landing :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplane-takeoff :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplane-tilt :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-airplay :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-air-traffic-control :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-alarm :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-alien :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-bottom :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-bottom-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-center-horizontal :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-center-horizontal-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-center-vertical :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-center-vertical-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-left :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-right :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-right-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-top :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-align-top-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-anchor :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-anchor-simple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-angular-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-aperture :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-apple-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-apple-podcasts-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-app-store-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-app-window :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-archive-box :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-archive :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-archive-tray :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-armchair :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-arc-left :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-arc-right :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-double-up-left :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-double-up-right :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-down-left :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-down-right :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-left-down :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-left-up :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-right-down :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-arrow-bend-right-up :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <ph-amazon-logo :size="32" />
                            </BCol> -->
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>