<script>
import Layout from "@/layout/main.vue"
import simplebar from "simplebar-vue"
export default {
    name: "MAIL",
    components: {
        Layout, simplebar
    },
}
</script>

<template>
    <Layout>
        <BRow>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="mail-wrapper">
                            <div class="offcanvas-xxl offcanvas-start mail-offcanvas" tabindex="-1" id="offcanvas_mail">
                                <div class="offcanvas-header">
                                    <button class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_mail"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body p-0">
                                    <div id="mail-menulist" class="show collapse collapse-horizontal">
                                        <div class="mail-menulist">
                                            <div class="card shadow-none">
                                                <div class="card-body px-0 pt-0">
                                                    <div class="d-grid">
                                                        <button
                                                            class="btn btn-primary d-flex align-items-center justify-content-center"
                                                            data-bs-toggle="modal" data-bs-target="#compose_mail_modal">
                                                            <i class="ti ti-circle-plus me-2"></i> Compose
                                                        </button>
                                                    </div>
                                                </div>
                                                <simplebar data-simplebar style="height: 410px">
                                                    <div class="scroll-block">
                                                        <div class="card-body p-0">
                                                            <div class="list-group list-group-flush" id="list-tab"
                                                                role="tablist">
                                                                <a class="list-group-item list-group-item-action active"
                                                                    id="list-mailtab-1" data-bs-toggle="list"
                                                                    href="#list-mail-1" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-inbox"></i>
                                                                        Inbox
                                                                    </span>
                                                                    <span class="avtar avtar-xs">4</span>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action"
                                                                    id="list-mailtab-3" data-bs-toggle="list"
                                                                    href="#list-mail-3" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-send"></i>
                                                                        Sent
                                                                    </span>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action"
                                                                    id="list-mailtab-4" data-bs-toggle="list"
                                                                    href="#list-mail-4" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-file-text"></i>
                                                                        Draft
                                                                    </span>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action"
                                                                    id="list-mailtab-5" data-bs-toggle="list"
                                                                    href="#list-mail-5" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-alert-triangle"></i>
                                                                        Spam
                                                                    </span>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action"
                                                                    id="list-mailtab-6" data-bs-toggle="list"
                                                                    href="#list-mail-6" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-trash text-danger"></i>
                                                                        Trash
                                                                    </span>
                                                                    <span class="avtar avtar-xs">2</span>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action"
                                                                    id="list-mailtab-31" data-bs-toggle="list"
                                                                    href="#list-mail-3" role="tab">
                                                                    <span>
                                                                        <i class="ti ti-archive text-success"></i>
                                                                        Archive
                                                                    </span>
                                                                </a>
                                                                <hr class="my-3 border border-secondary-subtle">
                                                                <a data-bs-toggle="collapse" href="#mailCollapselist1"
                                                                    role="button" aria-expanded="false"
                                                                    aria-controls="mailCollapselist1">
                                                                    <p class="text-muted ps-3 mb-0">Filters</p>
                                                                </a>
                                                                <div class="collapse show multi-collapse"
                                                                    id="mailCollapselist1">
                                                                    <a class="list-group-item list-group-item-action mt-3"
                                                                        id="list-mailtab-7" data-bs-toggle="list"
                                                                        href="#list-mail-7" role="tab">
                                                                        <span> <i class="ti ti-star text-warning"></i>
                                                                            Starred
                                                                        </span>
                                                                    </a>
                                                                    <a class="list-group-item list-group-item-action"
                                                                        id="list-mailtab-8" data-bs-toggle="list"
                                                                        href="#list-mail-8" role="tab">
                                                                        <span>
                                                                            <i class="ti ti-flag-3"></i>
                                                                            Important
                                                                        </span>
                                                                        <span class="avtar avtar-xs">2</span>
                                                                    </a>
                                                                </div>
                                                                <hr class="my-3 border border-secondary-subtle">
                                                                <a data-bs-toggle="collapse" href="#mailCollapselist2"
                                                                    role="button" aria-expanded="false"
                                                                    aria-controls="mailCollapselist2">
                                                                    <p class="text-muted ps-3 mb-0">Label</p>
                                                                </a>
                                                                <div class="collapse show multi-collapse"
                                                                    id="mailCollapselist2">
                                                                    <a class="list-group-item list-group-item-action mt-3"
                                                                        id="list-mailtab-71" data-bs-toggle="list"
                                                                        href="#list-mail-7" role="tab">
                                                                        <span>
                                                                            <i class="ti ti-flag-3 text-primary"></i>
                                                                            Promotions
                                                                        </span>
                                                                        <span class="avtar avtar-xs">3</span>
                                                                    </a>
                                                                    <a class="list-group-item list-group-item-action"
                                                                        id="list-mailtab-81" data-bs-toggle="list"
                                                                        href="#list-mail-8" role="tab">
                                                                        <span>
                                                                            <i class="ti ti-flag-3 text-warning"></i>
                                                                            Forums
                                                                        </span>
                                                                        <span class="avtar avtar-xs">1</span>
                                                                    </a>
                                                                    <a class="list-group-item list-group-item-action d-none"
                                                                        id="list-mailtab-details" data-bs-toggle="list"
                                                                        href="#list-mail-9" role="tab">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </simplebar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mail-content">
                                <div class="d-md-flex align-items-center">
                                    <ul class="list-inline me-auto mb-3">
                                        <li class="list-inline-item align-bottom">
                                            <a href="#" class="d-xxl-none avtar avtar-s btn-link-secondary"
                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvas_mail">
                                                <i class="ti ti-menu-2 f-18"></i>
                                            </a>
                                            <a href="#" class="d-none d-xxl-inline-flex avtar avtar-s btn-link-secondary"
                                                data-bs-toggle="collapse" data-bs-target="#mail-menulist">
                                                <i class="ti ti-menu-2 f-18"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item align-bottom">
                                            <a href="#" class="avtar avtar-s btn-link-secondary"
                                                id="toggle-mail-list-height">
                                                <i class="ti ti-arrows-vertical f-18"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <BDropdown variant="link-secondary" class="card-header-dropdown py-0"
                                                toggle-class="text-reset dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end" aria-haspopup="true"
                                                :offset="{ alignmentAxis: -140, crossAxis: 0, mainAxis: 10 }">
                                                <template #button-content><span class="text-muted"><i
                                                            class="ti ti-dots f-18"></i></span>
                                                </template>
                                                <BDropdownItem>Name</BDropdownItem>
                                                <BDropdownItem>Date</BDropdownItem>
                                                <BDropdownItem>Ratting</BDropdownItem>
                                                <BDropdownItem>Unread</BDropdownItem>
                                            </BDropdown>
                                        </li>
                                    </ul>
                                    <ul class="list-inline ms-auto mb-3 d-flex flex-wrap align-items-center gap-2">
                                        <li class="list-inline-item">
                                            <form class="form-search">
                                                <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                                                <input type="search" class="form-control" placeholder="Search here. . .">
                                                <button class="btn btn-light-secondary btn-search">Search</button>
                                            </form>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="avtar avtar-s btn-link-secondary">
                                                <i class="ti ti-arrow-left f-18"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">1-6 of 10</li>
                                        <li class="list-inline-item">
                                            <a href="#" class="avtar avtar-s btn-link-secondary">
                                                <i class="ti ti-arrow-right f-18"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card shadow-none bg-body mb-0">
                                    <div class="card-body">
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="list-mail-1" role="tabpanel"
                                                aria-labelledby="list-mailtab-1">
                                                <div class="card table-card">
                                                    <div class="card-body py-0 px-2">
                                                        <ul class="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="profile-tab-1"
                                                                    data-bs-toggle="tab" href="#profile-1" role="tab"
                                                                    aria-selected="true">
                                                                    <i class="ti ti-user me-2"></i>Primary
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="profile-tab-2" data-bs-toggle="tab"
                                                                    href="#profile-2" role="tab" aria-selected="true">
                                                                    <i class="ti ti-file-text me-2"></i>Promotions
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="profile-tab-3" data-bs-toggle="tab"
                                                                    href="#profile-3" role="tab" aria-selected="true">
                                                                    <i class="ti ti-id me-2"></i>Social
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="profile-tab-4" data-bs-toggle="tab"
                                                                    href="#profile-4" role="tab" aria-selected="true">
                                                                    <i class="ti ti-lock me-2"></i>Updates
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="profile-tab-5" data-bs-toggle="tab"
                                                                    href="#profile-5" role="tab" aria-selected="true">
                                                                    <i class="ti ti-users me-2"></i>Announcement
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <simplebar data-simplebar style="height: 340px">
                                                        <div class="card-body scroll-block">
                                                            <div class="tab-content">
                                                                <div class="tab-pane show active" id="profile-1"
                                                                    role="tabpanel" aria-labelledby="profile-tab-1">
                                                                    <table class="table table-borderless mb-0 mail-table">
                                                                        <tbody>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-1.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Barney Thea</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text of the printing and
                                                                                                typesetting industry. Lorem
                                                                                                Ipsum has been the
                                                                                                industry's standard dummy
                                                                                                text ever since the
                                                                                                1500s.been
                                                                                                the industry's standard
                                                                                                dummy text ever since the
                                                                                                1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="mail-option">12 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-dribbble rounded-circle">
                                                                                            <i
                                                                                                class="f-20 text-white ph-duotone ph-dribbble-logo"></i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    dribbble </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">13 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-3.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Mattie Reid </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                simply dummy text the
                                                                                                industry's
                                                                                                standard
                                                                                                dummy text ever since the
                                                                                                1500s.
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td> </td>
                                                                                <td class="mail-option">14 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-light-primary rounded-circle">
                                                                                            <b
                                                                                                class="f-16 text-primary">N</b>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Nathaniel Vasquez </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text
                                                                                                of the
                                                                                                printing and typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.been
                                                                                                the
                                                                                                industry's standard
                                                                                                dummy text ever since
                                                                                                the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">15 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-facebook rounded-circle">
                                                                                            <i
                                                                                                class="f-20 text-white ph-duotone ph-facebook-logo"></i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    facebook</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                        <div class="mail-content-badge">
                                                                                            <a href="#"
                                                                                                class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">16 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-twitter rounded-circle">
                                                                                            <i
                                                                                                class="f-20 text-white ph-duotone ph-twitter-logo"></i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    twitter</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text
                                                                                                of the
                                                                                                printing and typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.been
                                                                                                the
                                                                                                industry's standard
                                                                                                dummy text ever since
                                                                                                the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td> </td>
                                                                                <td class="mail-option">12 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="unread">
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-light-primary rounded-circle">
                                                                                            <b
                                                                                                class="f-16 text-primary">N</b>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Nathaniel Vasquez </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text
                                                                                                of the
                                                                                                printing and typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.been
                                                                                                the
                                                                                                industry's standard
                                                                                                dummy text ever since
                                                                                                the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">15 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-facebook rounded-circle">
                                                                                            <i
                                                                                                class="f-20 text-white ph-duotone ph-facebook-logo"></i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    facebook</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                        <div class="mail-content-badge">
                                                                                            <a href="#"
                                                                                                class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">16 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-1.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Barney Thea</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text
                                                                                                of the
                                                                                                printing and typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.been
                                                                                                the
                                                                                                industry's standard
                                                                                                dummy text ever since
                                                                                                the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td> </td>
                                                                                <td class="mail-option">12 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-2.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Zachary Chambers </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">13 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="avtar avtar-s img-user bg-facebook rounded-circle">
                                                                                            <i
                                                                                                class="f-20 text-white ph-duotone ph-facebook-logo"></i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    facebook</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                        <div class="mail-content-badge">
                                                                                            <a href="#"
                                                                                                class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">16 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-1.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Barney Thea</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                Lorem Ipsum is simply dummy
                                                                                                text
                                                                                                of the
                                                                                                printing and typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.been
                                                                                                the
                                                                                                industry's standard
                                                                                                dummy text ever since
                                                                                                the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td> </td>
                                                                                <td class="mail-option">12 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <div
                                                                                            class="form-check form-check-inline m-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox">
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">check_box_outline_blank</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-primary pc-icon-check">check_box</i>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-check form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox" checked>
                                                                                            <i
                                                                                                class="material-icons-two-tone pc-icon-uncheck">star_outline</i>
                                                                                            <i
                                                                                                class="material-icons-two-tone text-warning pc-icon-check">star</i>
                                                                                        </div>

                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-flex align-items-center">
                                                                                        <img src="@/assets/images/user/avatar-2.jpg"
                                                                                            alt="user-image"
                                                                                            class="img-user rounded-circle">
                                                                                        <div
                                                                                            class="d-flex align-items-center mail-username">
                                                                                            <div
                                                                                                class="flex-grow-1 position-relative">
                                                                                                <h6
                                                                                                    class="mb-0 ms-2 text-truncate">
                                                                                                    Zachary Chambers </h6>
                                                                                            </div>
                                                                                            <div class="mail-content-badge">
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-primary py-1 px-2">Promotions</a>
                                                                                                <a href="#"
                                                                                                    class="badge rounded-pill btn-light-warning py-1 px-2">Forums</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div
                                                                                        class="d-flex w-100 align-items-center">
                                                                                        <div
                                                                                            class="flex-grow-1 position-relative">
                                                                                            <p
                                                                                                class="mb-0 mail-text text-truncate">
                                                                                                of the printing and
                                                                                                typesetting
                                                                                                industry. Lorem Ipsum has
                                                                                                been
                                                                                                Lorem Ipsum is
                                                                                                simply
                                                                                                dummy text the
                                                                                                industry's standard dummy
                                                                                                text
                                                                                                ever since the 1500s.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#"
                                                                                        class="avtar avtar-s btn-link-secondary">
                                                                                        <i class="ti ti-paperclip f-18"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="mail-option">13 Jul 23 08:23 AM
                                                                                    <div class="mail-buttons">
                                                                                        <ul class="list-inline mb-0">
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-archive f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-mail f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-trash f-18"></i></a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"><a
                                                                                                    href="#"
                                                                                                    class="avtar avtar-s btn-link-secondary"><i
                                                                                                        class="ti ti-eye-off f-18"></i></a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </simplebar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>