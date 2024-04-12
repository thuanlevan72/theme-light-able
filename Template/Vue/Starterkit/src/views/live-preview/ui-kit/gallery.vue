<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

export default {
    name: "GALLERY",
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Gallery" pageTitle="Ui kit" />
        <BRow>
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5>New Publish</h5>
                    </div>
                    <div class="card-body">
                        <div class="grid row g-3">
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-1.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Mountain.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-2.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Lily Garden.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-3.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Boat Zeel.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5>Old Publish</h5>
                    </div>
                    <div class="card-body">
                        <div class="grid row g-3">
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-4.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">lily.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-5.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Mountain Climbing.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-6.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Hill Station.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-7.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">bungee jumping.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-8.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Party Time.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <a class="card-gallery" data-fslightbox="gallery"
                                    href="#">
                                    <img class="img-fluid" src="@/assets/images/pages/img-gallery-9.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body justify-content-end">
                                        <div>
                                            <p class="text-white mb-0 text-truncate w-100">Creative Glass Click.jpg</p>
                                            <span
                                                class="text-white text-opacity-75 mb-0 text-sm text-truncate w-100">12-Aug-2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>