<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"

import cover1 from "@/assets/images/application/img-user-cover-1.jpg";
import cover2 from "@/assets/images/application/img-user-cover-2.jpg";
import cover3 from "@/assets/images/application/img-user-cover-3.jpg";
import cover4 from "@/assets/images/application/img-user-cover-4.jpg";
import cover5 from "@/assets/images/application/img-user-cover-5.jpg";
import cover6 from "@/assets/images/application/img-user-cover-6.jpg";
import cover7 from "@/assets/images/application/img-user-cover-7.jpg";
import cover8 from "@/assets/images/application/img-user-cover-8.jpg";
import cover9 from "@/assets/images/application/img-user-cover-9.jpg";
import avtar1 from "@/assets/images/user/avatar-1.jpg";
import avtar2 from "@/assets/images/user/avatar-2.jpg";
import avtar3 from "@/assets/images/user/avatar-3.jpg";
import avtar4 from "@/assets/images/user/avatar-4.jpg";
import avtar5 from "@/assets/images/user/avatar-5.jpg";

export default {
    name: "USER-CARD",
    data() {
        return {
            userData: [
                {
                    "coverImage": cover1,
                    "avatarImage": avtar1,
                    "taskCompletion": 30,
                    "taskColor": "bg-danger",
                    "chatBadge": "bg-success"
                },
                {
                    "coverImage": cover2,
                    "avatarImage": avtar2,
                    "taskCompletion": 60,
                    "taskColor": "bg-primary",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover3,
                    "avatarImage": avtar3,
                    "taskCompletion": 90,
                    "taskColor": "bg-success",
                    "chatBadge": "bg-success"
                },
                {
                    "coverImage": cover4,
                    "avatarImage": avtar4,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover5,
                    "avatarImage": avtar5,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover6,
                    "avatarImage": avtar1,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover7,
                    "avatarImage": avtar2,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover8,
                    "avatarImage": avtar1,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                },
                {
                    "coverImage": cover9,
                    "avatarImage": avtar5,
                    "taskCompletion": 40,
                    "taskColor": "bg-warning",
                    "chatBadge": "bg-danger"
                }
            ]
        };
    },
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="User Card" pageTitle="Users" />
        <BRow>
            <BCol class="col-md-6 col-xl-4" v-for="(user, index) in userData" :key="index">
                <div class="card user-card">
                    <div class="card-body">
                        <!-- Replace your HTML code with Vue data binding -->
                        <div class="user-cover-bg">
                            <img :src="user.coverImage" alt="image" class="img-fluid">
                            <div class="cover-data">
                                <div class="d-inline-flex align-items-center">
                                    <i class="ph-duotone ph-star text-warning me-1"></i>
                                    4.5 <small class="text-white text-opacity-50">/ 5</small>
                                </div>
                            </div>
                        </div>
                        <div class="chat-avtar card-user-image">
                            <img :src="user.avatarImage" alt="user-image"
                                class="img-thumbnail rounded-circle ">
                            <i class="chat-badge bg-success"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-grow-1 ms-2">
                                <h6 class="mb-1">William Bond</h6>
                                <p class="text-muted text-sm mb-0">DM on <a href="#" class="text-primary">@williambond</a>
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <button class="btn btn-primary btn-sm">Message</button>
                                <button class="btn btn-outline-secondary btn-sm ms-1">Follow</button>
                            </div>
                        </div>
                        <BRow class="g-3 my-2 text-center">
                            <BCol class="col-4">
                                <h5 class="mb-0">86</h5>
                                <small class="text-muted">Post</small>
                            </BCol>
                            <BCol class="col-4 border border-top-0 border-bottom-0">
                                <h5 class="mb-0">40</h5>
                                <small class="text-muted">Project</small>
                            </BCol>
                            <BCol class="col-4">
                                <h5 class="mb-0">4.5K</h5>
                                <small class="text-muted">Members</small>
                            </BCol>
                        </BRow>
                        <div class="saprator my-2">
                            <span>Skills</span>
                        </div>
                        <div class="text-center">
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                            <span
                                class="badge bg-light-secondary border rounded-pill border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
                        </div>
                        <div class="saprator my-2">
                            <span>Task completed</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 me-2">
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-danger" style="width: 30%"></div>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <h6 class="mb-0">30%</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </BCol>
    </BRow>
</Layout></template>