<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { GoogleMap, Marker, Polygon } from "vue3-google-map";

export default {
    name: "MAPS",
    data() {
        return {
            markers: [
                {
                    position: { lat: 10.0, lng: 10.0 },
                },
                {
                    position: { lat: 15.0, lng: 13.0 },
                },
            ],
            pov: null,
            pano: null,
            edited: null,
            paths: [
                [
                    { lat: 1.38, lng: 103.8 },
                    { lat: 1.38, lng: 103.81 },
                    { lat: 1.39, lng: 103.81 },
                    { lat: 1.39, lng: 103.8 },
                ],
                [
                    { lat: 1.382, lng: 103.802 },
                    { lat: 1.382, lng: 103.808 },
                    { lat: 1.388, lng: 103.808 },
                    { lat: 1.388, lng: 103.802 },
                ],
            ],
            scope: "usa",
            geographyConfig: {
                highlightBorderColor: "#bada55",
                highlightBorderWidth: 3,
            },
            fills: {
                Republican: "#CC4731",
                Democrat: "#306596",
                "Heavy Democrat": "#667FAF",
                "Light Democrat": "#A9C0DE",
                "Heavy Republican": "#CA5E5B",
                "Light Republican": "#EAA9A8",
                defaultFill: "#EDDC4E",
            },
            data: {
                AZ: {
                    fillKey: "Republican",
                    electoralVotes: 5,
                },
                CO: {
                    fillKey: "Light Democrat",
                    electoralVotes: 5,
                },
                DE: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                FL: {
                    fillKey: "UNDECIDED",
                    electoralVotes: 29,
                },
                GA: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                HI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ID: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                IL: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                IN: {
                    fillKey: "Republican",
                    electoralVotes: 11,
                },
                IA: {
                    fillKey: "Light Democrat",
                    electoralVotes: 11,
                },
                KS: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                KY: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                LA: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                MD: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ME: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MN: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MS: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                MO: {
                    fillKey: "Republican",
                    electoralVotes: 13,
                },
                MT: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NC: {
                    fillKey: "Light Republican",
                    electoralVotes: 32,
                },
                NE: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NV: {
                    fillKey: "Heavy Democrat",
                    electoralVotes: 32,
                },
                NH: {
                    fillKey: "Light Democrat",
                    electoralVotes: 32,
                },
                NJ: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                NY: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ND: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NM: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                OH: {
                    fillKey: "UNDECIDED",
                    electoralVotes: 32,
                },
                OK: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                OR: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                PA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                RI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                SC: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                SD: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                TN: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                TX: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                UT: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                WI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                VA: {
                    fillKey: "Light Democrat",
                    electoralVotes: 32,
                },
                VT: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                WA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                WV: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                WY: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                CA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                CT: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                AK: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                AR: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                AL: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
            },
            popupData: "",
        };
    },
    components: {
        Layout, pageheader, GoogleMap, Marker, Polygon
    },
    methods: {
        /**
         * street view data update
         */
        updatePov(pov) {
            this.pov = pov;
        },
        /**
         * street view data update
         */
        updatePano(pano) {
            this.pano = pano;
        },
        /**
         * polygon editing
         */
        updateEdited(mvcArray) {
            let paths = [];
            for (let i = 0; i < mvcArray.getLength(); i++) {
                let path = [];
                for (let j = 0; j < mvcArray.getAt(i).getLength(); j++) {
                    let point = mvcArray.getAt(i).getAt(j);
                    path.push({ lat: point.lat(), lng: point.lng() });
                }
                paths.push(path);
            }
            this.edited = paths;
        },
        popupTemplate({ geography, datum }) {
            this.popupData = `${geography.properties.name}\nElectoral Votes: ${datum.electoralVotes}`;
        },
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Google Map" pageTitle="Maps" />
        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Basic</BCardTitle>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" :center="{ lat: 2, lng: 2 }" :zoom="5"
                            style="height: 300px"></GoogleMap>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Markers</BCardTitle>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" :center="{ lat: 11, lng: 12 }"
                            :zoom="3" style="height: 300px">
                            <Marker v-for="(m, index) in markers" :key="index" :position="m.position" :clickable="true"
                                :draggable="true" @click="center = m.position"></Marker>
                        </GoogleMap>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Polygon Editing</BCardTitle>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" :center="{ lat: 1.38, lng: 103.8 }"
                            :zoom="12" style="height: 300px">
                            <Polygon :paths="paths" :editable="true" @paths_changed="updateEdited($event)"></Polygon>
                        </GoogleMap>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Map type</BCardTitle>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" :center="{ lat: 4, lng: 4 }" :zoom="3"
                            style="height: 300px" map-type-id="terrain"></GoogleMap>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>