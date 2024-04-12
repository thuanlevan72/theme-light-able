<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

import img11 from "@/assets/images/light-box/l1.jpg"

export default {
    name: "IMAGE-CROPER",
    components: {
        Layout, pageheader, VueCropper
    },
    data() {
        return {
            img11
        }
    },
    methods: {
        zoom(percent) {
            this.$refs.cropper.relativeZoom(percent);
        },
        rotate(deg) {
            this.$refs.cropper.rotate(deg);
        },
        move(offsetX, offsetY) {
            this.$refs.cropper.move(offsetX, offsetY);
        },

        flipX() {
            const element = document.querySelector(".flip-x-btn")
            if (element) {
                let scale = element.getAttribute("data-scale")
                if (scale) {
                    scale = scale ? -scale : -1;
                    this.$refs.cropper.scaleX(scale);
                    element.setAttribute("data-scale", scale);
                }
            }
        },
        flipY() {
            const element = document.querySelector(".flip-x-btn")
            if (element) {
                let scale = element.getAttribute("data-scale");
                scale = scale ? -scale : -1;
                this.$refs.cropper.scaleY(scale);
                element.setAttribute("data-scale", scale);

            }
        },
        reset() {
            this.$refs.cropper.reset();
        }
    }
};

</script>

<template>
    <Layout>
        <pageheader title="Image Cropper" pageTitle="Forms" />
        <BRow>
            <BCol xl="9">
                <BCard no-body>
                    <BCardBody>
                        <vue-cropper ref="cropper" :src="img11" alt="Source Image" preview=".preview-lg" />
                        <div class="mt-2">
                            <BLink href="javascript:void(0);" class="btn btn-primary" @click.prevent="zoom(0.2)">Zoom In
                            </BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1" @click.prevent="zoom(-0.2)">Zoom
                                Out</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1" @click.prevent="rotate(90)">
                                Rotate +90deg</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1" @click.prevent="rotate(-90)">
                                Rotate -90deg</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1" @click.prevent="move(-10, 0)">
                                Move Left</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1" @click.prevent="move(10, 0)">Move
                                Right</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1"
                                @click.prevent="move(0, -10)">
                                Move Up</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1 mt-2"
                                @click.prevent="move(0, 10)">Move
                                Down</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1 flip-x-btn mt-2" data-scale="1"
                                @click.prevent="flipX">Flip X</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1 flip-y-btn mt-2" data-scale="1"
                                @click.prevent="flipY">Flip Y</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary ms-1 mt-2" @click.prevent="reset">Reset
                            </BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3">
                <div class="preview-lg"></div>
            </BCol>
        </BRow>
    </Layout>
</template>

<style scoped>
.preview-lg {
    width: 100%;
    height: calc(372px * (9 / 16));
    overflow: hidden;
}
</style>