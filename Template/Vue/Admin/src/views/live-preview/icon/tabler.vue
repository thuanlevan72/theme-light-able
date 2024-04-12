<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { IconHome, Icon2fa, Icon3dCubeSphere, IconAccessPoint, IconActivity, IconAB, IconBucket, IconAdjustmentsHorizontal, IconAdjustmentsAlt, IconAdjustments, IconAperture, IconAngle, IconAnchor, IconAmbulance, IconAlignRight, IconAlignLeft, IconAlignJustified, IconArchive, IconApps, IconApple, IconAlignCenter, IconAlien, IconArrowBarToDown, IconArrowBarRight, IconArrowBarLeft, IconArrowBarDown, IconArrowBackUp, IconArrowBack, IconBan, IconBallVolleyball, IconBallTennis, IconBallBasketball, IconBallAmericanFootball, IconBackspace, IconBackhoe, IconAtom, IconAt, IconArrowBarUp, IconBone, IconBook, IconBox, IconBookmark, IconBoltOff, IconBolt, IconBike, IconBellMinus, IconBell, IconBed, IconBattery, IconBasket, IconBarcode, IconBandage } from '@tabler/icons-vue';
export default {
    name: "TABLER",
    components: {
        Layout, pageheader, IconHome, Icon2fa, Icon3dCubeSphere, IconActivity, IconAccessPoint, IconAB, IconAdjustments, IconBucket, IconAdjustmentsHorizontal, IconAdjustmentsAlt, IconAperture, IconAngle, IconAnchor, IconAmbulance, IconAlignRight, IconAlignLeft, IconAlignJustified, IconArchive, IconApps, IconApple, IconAlignCenter, IconAlien, IconArrowBarToDown, IconArrowBarRight, IconArrowBarLeft, IconArrowBarDown, IconArrowBackUp, IconArrowBack, IconBan, IconBallVolleyball, IconBallTennis, IconBallBasketball, IconBallAmericanFootball, IconBackspace, IconBackhoe, IconAtom, IconAt, IconArrowBarUp, IconBone, IconBook, IconBox, IconBookmark, IconBoltOff, IconBolt, IconBike, IconBellMinus, IconBell, IconBed, IconBattery, IconBasket, IconBarcode, IconBandage
    }
}
</script>

<template>
    <Layout>
        <pageheader title="Tabler Icons" pageTitle="Icons" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Tabler</h5>
                        <p>Use icon with <code>&lt;i class="&lt;&lt; Copied code &gt;&gt;"&gt;</code> in you html code </p>
                    </div>
                    <div class="card-body text-center">
                        <BRow class="row justify-content-center">
                            <BCol class="col-sm-6">
                                <input type="text" id="icon-search" class="form-control mb-4" placeholder="search . . ">
                            </BCol>
                        </BRow>
                        <div class="i-main" id="icon-wrapper">
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconHome :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <Icon2fa :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <Icon3dCubeSphere :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAccessPoint :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAB :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconActivity :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAdjustments :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAdjustmentsAlt :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAdjustmentsHorizontal :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBucket :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAlien :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAlignCenter :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAlignJustified :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAlignLeft :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAlignRight :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAmbulance :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAnchor :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAngle :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAperture :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconApple :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconApps :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArchive :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBack :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBackUp :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBarDown :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBarLeft :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBarRight :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBarToDown :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconArrowBarUp :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAt :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconAtom :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBackhoe :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBackspace :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBallAmericanFootball :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBallBasketball :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBallTennis :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBallVolleyball :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBan :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBandage :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBarcode :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBasket :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBattery :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBed :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBell :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBellMinus :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBike :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBolt :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBoltOff :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBookmark :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBox :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBook :size="32" />
                            </BCol>
                            <BCol xl="3" lg="4" sm="6" class="i-block">
                                <IconBone :size="32" />
                            </BCol>
                        </div>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>