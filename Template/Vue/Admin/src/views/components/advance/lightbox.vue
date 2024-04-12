<script>
import Layout from "@/layout/c-main.vue"
import VueEasyLightbox from "vue-easy-lightbox";

export default {
    components: {
        Layout, VueEasyLightbox
    },
    data() {
        return {
            title: "Lightbox",
            items: [
                {
                    text: "UI Elements",
                    href: "/",
                },
                {
                    text: "Lightbox",
                    active: true,
                },
            ],
            visible: false,
            index: 0,
            imgs: [
                require("@/assets/images/light-box/sl1.jpg"),
                require("@/assets/images/light-box/sl2.jpg"),
                require("@/assets/images/light-box/sl3.jpg"),
                require("@/assets/images/light-box/sl4.jpg"),
                require("@/assets/images/light-box/sl5.jpg"),
                require("@/assets/images/light-box/sl6.jpg"),
            ],
        }
    },
    methods: {
        showImg(index) {
            this.index = index;
            this.visible = true;
        },
        handleHide() {
            this.visible = false;
        },
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Lightbox</h2>
                <p class="text-muted">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://getbootstrap.com/docs/5.2/components/modal/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>light box</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p> Add this code <code>data-lightbox="example-set"</code> to see road trip gallery in lightbox
                            popup.</p>
                        <div class="popup-gallery d-flex flex-wrap">
                            <div v-for="(src, index) in imgs" :key="index" class="img-fluid me-2" @click="() => showImg(index)">
                                <img :src="src" width="140" />
                            </div>
                            <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index"
                                @hide="handleHide"></vue-easy-lightbox>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>