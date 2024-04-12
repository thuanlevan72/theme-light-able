<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue";
import avtar1 from "@/assets/images/user/avatar-1.jpg";
import avtar2 from "@/assets/images/user/avatar-2.jpg";
import avtar3 from "@/assets/images/user/avatar-3.jpg";
import avtar4 from "@/assets/images/user/avatar-4.jpg";
import avtar5 from "@/assets/images/user/avatar-5.jpg";
import mastercard from "@/assets/images/application/img-mastercard.svg";
import brand1 from "@/assets/images/application/img-brand-1.png";
import brand2 from "@/assets/images/application/img-brand-2.png";
import brand3 from "@/assets/images/application/img-brand-3.png";
import brand4 from "@/assets/images/application/img-brand-4.png";
import brand5 from "@/assets/images/application/img-brand-5.png";
import brand6 from "@/assets/images/application/img-brand-6.png";

export default {
    name: "INVOICE-LIST",
    data() {
        return {
            jsonData: [
                {
                    avatar: avtar1,
                    name: "Addie Bass",
                    statusClass: "ph-duotone ph-x-circle text-danger f-24",
                    image: mastercard,
                },
                {
                    avatar: avtar2,
                    name: "Mickie Melmoth",
                    statusClass: "ph-duotone ph-clock-countdown text-warning f-24",
                    image: mastercard,
                },
                {
                    avatar: avtar3,
                    name: "Abey Boseley",
                    statusClass: "ph-duotone ph-check-circle text-success f-24",
                    image: mastercard,
                },
                {
                    avatar: avtar4,
                    name: "Addie Bass",
                    statusClass: "ph-duotone ph-x-circle text-danger f-24",
                    image: mastercard,
                },
                {
                    avatar: avtar5,
                    name: "Addie Bass",
                    statusClass: "ph-duotone ph-x-circle text-danger f-24",
                    image: mastercard,
                },
            ],
            listData: [
                {
                    imageSrc: brand1,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-x-circle text-danger f-16",
                    statusTitle: "Reject",
                },
                {
                    imageSrc: brand2,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-clock-countdown text-warning f-16",
                    statusTitle: "Pending",
                },
                {
                    imageSrc: brand3,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-check-circle text-success f-16",
                    statusTitle: "Approved",
                },
                {
                    imageSrc: brand4,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-x-circle text-danger f-16",
                    statusTitle: "Reject",
                },
                {
                    imageSrc: brand5,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-clock-countdown text-warning f-16",
                    statusTitle: "Pending",
                },
                {
                    imageSrc: brand6,
                    amount: "$1,245.80",
                    statusClass: "ph-duotone ph-check-circle text-success f-16",
                    statusTitle: "Approved",
                },
            ],
        };
    },
    components: {
        Layout, pageheader
    },
}

</script>

<template>
    <Layout>
        <pageheader title="List" pageTitle="Invoice" />
        <BRow>
            <BCol class="col-sm-12">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="justify-content-between ali mb-3 g-3">
                            <BCol class="col-sm-auto">
                                <form class="form-search">
                                    <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                                    <input type="search" class="form-control" placeholder="Search here. . .">
                                    <button class="btn btn-light-secondary btn-search">Search</button>
                                </form>
                            </BCol>
                            <BCol class="col-sm-auto">
                                <div class="input-group">
                                    <input type="text" id="pc-date_range_picker-2" class="form-control"
                                        placeholder="Select date range">
                                    <span class="input-group-text"><i class="feather icon-calendar"></i></span>
                                </div>
                            </BCol>
                        </BRow>
                        <BCard no-body class="shadow-none bg-body mb-0">
                            <BCardBody class="card-body">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="table-responsive">
                                            <table class="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Customer name</th>
                                                        <th>Status</th>
                                                        <th>Amount</th>
                                                        <th>Txid</th>
                                                        <th>Quantity</th>
                                                        <th class="text-center">Payment method</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in jsonData" :key="index">
                                                        <td>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox">
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <BRow class="align-items-center">
                                                                <BCol class="col-auto pe-5">
                                                                    <img :src="item.avatar" alt="user-image"
                                                                        class="wid-40 rounded-circle">
                                                                </BCol>
                                                                <BCol class="col">
                                                                    <h5 class="mb-0">{{ item.name }}</h5>
                                                                </BCol>
                                                            </BRow>
                                                        </td>
                                                        <td><i :class="item.statusClass"></i></td>
                                                        <td>$20,000</td>
                                                        <td>#63579067848912</td>
                                                        <td>10</td>
                                                        <td class="text-center"><img :src="item.image" alt="img"
                                                                class="img-fluid"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </BCardBody>
                                </BCard>
                                <div class="table-responsive">
                                    <table class="table table-borderless table-invoice-comp mb-0">
                                        <tbody>
                                            <tr v-for="(item, index) in listData" :key="index">
                                                <td>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox">
                                                    </div>
                                                </td>
                                                <td>
                                                    <BRow class="align-items-center">
                                                        <BCol class="col-auto pe-5">
                                                            <img :src="item.imageSrc" alt="user-image"
                                                                class="wid-40 rounded-circle">
                                                        </BCol>
                                                        <BCol class="col">
                                                            <h5 class="mb-0">{{ item.amount }} <i :class="item.statusClass"
                                                                    data-bs-toggle="tooltip" :title="item.statusTitle"></i>
                                                            </h5>
                                                            <p class="mb-0"><span class="text-muted">TXID</span>
                                                                #63579067848912</p>
                                                        </BCol>
                                                    </BRow>
                                                </td>
                                                <td>
                                                    <small class="text-muted text-uppercase">Payment Method</small>
                                                    <b class="d-block">Phonepe</b>
                                                </td>
                                                <td>
                                                    <small class="text-muted text-uppercase">Created Date</small>
                                                    <b class="d-block">10/10/2023</b>
                                                </td>
                                                <td>
                                                    <small class="text-muted text-uppercase">Due Date</small>
                                                    <b class="d-block">12/12/2023</b>
                                                </td>
                                                <td>
                                                    <small class="text-muted text-uppercase">Quantity</small>
                                                    <b class="d-block">10</b>
                                                </td>
                                                <td class="text-end">
                                                    <button class="btn btn-sm btn-outline-secondary">View Details</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>