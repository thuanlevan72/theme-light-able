<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { lineDatalabelChart } from "./data"

export default {
    name: "DASHBOARD",
    data() {
        return {
            lineDatalabelChart: lineDatalabelChart,
        }
    },
    methods: {
        initialMap() {
            // Create a chart instance
            const chart = am4core.create("chartDiv", am4maps.MapChart);

            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Exclude Antarctica
            polygonSeries.exclude = ["AQ"];

            // Make map load polygon data (country shapes and names) from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#d6dae6");

            let imageSeries = chart.series.push(new am4maps.MapImageSeries());

            let imageSeriesTemplate = imageSeries.mapImages.template;
            let circle = imageSeriesTemplate.createChild(am4core.Circle);
            circle.radius = 4;
            circle.fill = am4core.color("#374151");
            circle.fillOpacity = 1;
            circle.stroke = am4core.color("#FFF");
            circle.strokeOpacity = 0.5;
            circle.strokeWidth = 5;
            circle.nonScaling = true;
            circle.tooltipText = "{title}";

            imageSeriesTemplate.propertyFields.latitude = "latitude";
            imageSeriesTemplate.propertyFields.longitude = "longitude";

            imageSeries.data = [{
                "latitude": 56.130367,
                "longitude": -106.346771,
                "title": "Canada"
            }, {
                "latitude": 37.090240,
                "longitude": -95.712891,
                "title": "United States"
            }, {
                "latitude": -14.235004,
                "longitude": -51.925282,
                "title": "Brazil"
            }, {
                "latitude": 44.016521,
                "longitude": 21.005859,
                "title": "Serbia"
            }, {
                "latitude": 61.5240,
                "longitude": 105.3188,
                "title": "Russia"
            }];
        },

    },
    mounted() {
        this.initialMap();

    },
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Home" pageTitle="Dashboard" />
       
    </Layout>
</template>

<style>
.card {
    z-index: 0;
}
</style>