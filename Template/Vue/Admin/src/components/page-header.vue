<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: "",
        },
        pageTitle: {
            type: String,
            default: "",
        }
    },
};
</script>

<template>
    <div class="page-header">
        <div class="page-block">
            <BRow class="align-items-center">
                <BCol md="12">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><BLink href="javascript: void(0)">{{ pageTitle }}</BLink></li>
                        <li class="breadcrumb-item" aria-current="page">{{ title }}</li>
                    </ul>
                </BCol>
                <BCol md="12">
                    <div class="page-header-title">
                        <h2 class="mb-0">{{ title }}</h2>
                    </div>
                </BCol>
            </BRow>
        </div>
    </div>
</template>