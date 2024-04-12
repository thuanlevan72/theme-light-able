<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

// Import Images
import avtar10 from "@/assets/images/user/avatar-10.jpg"
import avtar2 from "@/assets/images/user/avatar-2.jpg"
import avtar3 from "@/assets/images/user/avatar-3.jpg"
import avtar4 from "@/assets/images/user/avatar-4.jpg"
import avtar5 from "@/assets/images/user/avatar-5.jpg"
import avtar6 from "@/assets/images/user/avatar-6.jpg"
import avtar7 from "@/assets/images/user/avatar-7.jpg"
import avtar8 from "@/assets/images/user/avatar-8.jpg"
import avtar9 from "@/assets/images/user/avatar-9.jpg"

export default {
    name: "CONTACT-SEARCH",
    data() {
        return {
            cards: [
                {
                    avatar: avtar10,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar2,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar3,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar4,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar5,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar6,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar7,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar8,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar9,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar10,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar2,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar3,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar4,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar5,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar6,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar7,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar8,
                    badgeClass: "bg-success",
                    name: "William Bond",
                    username: "@williambond"
                },
                {
                    avatar: avtar9,
                    badgeClass: "bg-danger",
                    name: "William Bond",
                    username: "@williambond"
                }
            ]
        }
    },
    components: {
        Layout, pageheader
    },
}

</script>

<template>
    <Layout>
        <pageheader title="Contact-Search" pageTitle="Ui kit" />
        <BRow>
            <BCol class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <BRow class="row align-items-center">
                            <BCol class="col">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="ti ti-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search a Keyword">
                                </div>
                            </BCol>
                            <BCol class="col-auto">
                                <button class="btn btn-primary" type="button">Search</button>
                            </BCol>
                        </BRow>
                    </div>
                    <div class="card-body">
                        <BRow class="row align-items-center justify-content-between gy-2">
                            <BCol class="col-sm-auto">
                                <h5 class="mb-0">Recently Searched Contact</h5>
                            </BCol>
                            <BCol class="col-sm-auto">
                                <select class="form-select">
                                    <option>Filter </option>
                                    <option>Hits: High To Low</option>
                                    <option>Hits: Low To High</option>
                                    <option>Popularity</option>
                                    <option>Fresh Arrivals</option>
                                </select>
                            </BCol>
                        </BRow>
                        <hr class="my-4">
                        <BRow class="row">
                            <BCol v-for="(card, index) in cards" :key="index" class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    :src="card.avatar" alt="User image">
                                                <i :class="['chat-badge mb-2 me-2', card.badgeClass]"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">{{ card.name }}</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">{{ card.username
                                                }}</a>😍</p>
                                            </div>
                                        </div>
                                        <BRow class="row g-2">
                                            <BCol class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </BCol>
                                            <BCol class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                        <!-- <div class="row">
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-10.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-3.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-4.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-5.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-6.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-7.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-8.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-9.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-10.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-2.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-3.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-4.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-5.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-6.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-7.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-8.jpg" alt="User image">
                                                <i class="chat-badge bg-success mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card border shadow-none">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div class="chat-avtar d-inline-flex">
                                                <img class="rounded-circle img-thumbnail img-fluid wid-80"
                                                    src="@/assets/images/user/avatar-9.jpg" alt="User image">
                                                <i class="chat-badge bg-danger mb-2 me-2"></i>
                                            </div>
                                            <div class="my-3">
                                                <h5 class="mb-0">William Bond</h5>
                                                <p class="mb-0">DM on <a href="#" class="link-primary">@williambond</a>😍
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <div class="d-grid"><button class="btn btn-primary">Accept</button></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="d-grid"><button
                                                        class="btn btn-outline-secondary">Decline</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>