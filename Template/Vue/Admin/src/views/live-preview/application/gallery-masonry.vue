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
        <pageheader title="Gallery Grid" pageTitle="Application" />
        <BRow>
            <div class="col-12">
                <div class="card">
                    <div class="card-body border-bottom">
                        <div class="row align-items-center justify-content-between g-3">
                            <div class="col-auto">
                                <div id="filters" class="btn-filter btns-gallery">
                                    <button class="btn my-1 btn-sm btn-light-primary active" data-filter="*">Show all</button>
                                    <button class="btn my-1 btn-sm btn-light-primary" data-filter=".web">Web Designer</button>
                                    <button class="btn my-1 btn-sm btn-light-primary" data-filter=".graphic">Graphic Designer</button>
                                    <button class="btn my-1 btn-sm btn-light-primary" data-filter=".animation">Animation Designer</button>
                                    <button class="btn my-1 btn-sm btn-light-primary" data-filter=".uiux">UI/UX Designer</button>
                                    <button class="btn my-1 btn-sm btn-light-primary" data-filter=".product">Product Designer</button>
                                </div>
                            </div>
                            <div class="col-auto">
                                <ul class="list-inline d-flex align-items-center ms-auto my-1">
                                    <li class="list-inline-item">
                                        <select class="form-select">
                                            <option>Sort By : Newest</option>
                                            <option>Sort By : Newest</option>
                                        </select>
                                    </li>
                                    <li class="list-inline-item align-bottom">
                                        <a href="#" class="btn btn-primary">My Collection</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="grid row g-3">
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item web">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-1.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-1.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item graphic">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-2.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-2.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item animation">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-3.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-3.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-3.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item uiux">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-4.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-4.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-4.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item product">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-5.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-5.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-5.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item web">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-6.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-6.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item graphic">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-7.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-7.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item animation">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-8.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-8.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-3.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item uiux">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-9.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-9.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-4.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item product">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-10.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-10.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-5.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item web">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-11.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-11.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item graphic">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-12.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-12.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item animation">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-13.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-13.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-3.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item uiux">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-14.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-14.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-4.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item product">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-15.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-15.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-5.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xxl-3 col-md-4 col-sm-6 element-item web">
                                <a class="card-gallery" data-fslightbox="gallery" href="@/assets/images/gallery-grid/img-grd-gal-16.jpg">
                                    <img class="img-fluid" src="@/assets/images/gallery-grid/img-grd-gal-16.jpg" alt="Card image">
                                    <div class="gallery-hover-data card-body">
                                        <div class="position-relative text-end">
                                            <div class="form-check prod-likes d-inline-block">

                                                <i data-feather="heart" class="prod-likes-icon"></i>
                                            </div>
                                        </div>
                                        <div class="media align-items-center">
                                            <div class="chat-avtar">
                                                <img class="rounded-circle img-fluid wid-30" src="@/assets/images/user/avatar-1.jpg" alt="User image">
                                            </div>
                                            <div class="media-body mx-2 text-white">
                                                <p class="mb-0 text-truncate w-100">Alexander</p>
                                                <span class="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                            </div>
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