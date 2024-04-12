<script>
import Layout from "@/layout/c-main.vue";

export default {
    components: {
        Layout
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Collapse</h2>
                <p class="text-muted">Toggle the visibility of content across your project with a few classes and our
                    JavaScript plugins.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/collapse.html">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol sm="12">
                <h5 class="mb-3">Basic Collapse</h5>
                <hr>
                <div class="pc-component">
                    <div class="card">
                        <BCardHeader class="border-bottom-0">
                            <BLink v-b-toggle.collapseExample class="btn btn-primary m-t-5 mx-1" data-bs-toggle="collapse"
                                href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Link with href</BLink>
                            <button v-b-toggle.collapseExample class="btn btn-primary m-t-5 mx-1" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                                aria-controls="collapseExample">Button
                                with data-bs-target</button>
                        </BCardHeader>
                        <BCollapse class="collapse" id="collapseExample">
                            <div class="card-body border-top">
                                <p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                            </div>
                        </BCollapse>
                    </div>
                </div>
            </BCol>
            <BCol sm="12" class="mb-3">
                <h5 class="mb-3">Multiple Targets</h5>
                <hr>
                <div class="pc-component">
                    <BLink v-b-toggle.multiCollapseExample1 class="btn mb-1 btn-primary mx-1" data-bs-toggle="collapse"
                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                        aria-controls="multiCollapseExample1">Toggle first element</BLink>
                    <button v-b-toggle.multiCollapseExample2 class="btn mb-1 btn-primary mx-1" type="button"
                        data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false"
                        aria-controls="multiCollapseExample2">Toggle second element</button>
                    <button v-b-toggle.multiCollapseExample1.multiCollapseExample2 class="btn mb-1 btn-primary mx-1"
                        type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false"
                        aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                    <BRow>
                        <BCol sm="6">
                            <BCollapse class="collapse multi-collapse mt-2" id="multiCollapseExample1">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry
                                            richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </p>
                                    </div>
                                </div>
                            </BCollapse>
                        </BCol>
                        <BCol sm="6">
                            <BCollapse class="collapse multi-collapse mt-2" id="multiCollapseExample2">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry
                                            richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </p>
                                    </div>
                                </div>
                            </BCollapse>
                        </BCol>
                    </BRow>
                </div>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Accordion</h5>
                    </BCardHeader>
                    <BCardBody class="pc-component">
                        <BAccordion class="accordion card" id="accordionExample">
                            <BAccordionItem title="Accordion Item #1" visible>
                                <strong>This is the first item's accordion body.</strong> It is hidden by default,
                                until the
                                collapse plugin adds the
                                appropriate classes that we use to style each element. These classes control the
                                overall
                                appearance, as well as the showing
                                and hiding via CSS transitions. You can modify any of this with custom CSS or
                                overriding our
                                default variables. It's also
                                worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though
                                the transition does limit
                                overflow.
                            </BAccordionItem>
                            <BAccordionItem title="Accordion Item #2">
                                <strong>This is the second item's accordion body.</strong> It is hidden by
                                default,
                                until the
                                collapse plugin adds the
                                appropriate classes that we use to style each element. These classes control the
                                overall
                                appearance, as well as the showing
                                and hiding via CSS transitions. You can modify any of this with custom CSS or
                                overriding our
                                default variables. It's also
                                worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though
                                the transition does limit
                                overflow.
                            </BAccordionItem>
                            <BAccordionItem title="Accordion Item #3">
                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                default,
                                until the
                                collapse plugin adds the
                                appropriate classes that we use to style each element. These classes control the
                                overall
                                appearance, as well as the showing
                                and hiding via CSS transitions. You can modify any of this with custom CSS or
                                overriding our
                                default variables. It's also
                                worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though
                                the transition does limit
                                overflow.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                </BCard>

                <h5 class="mt-5 mb-3">Accordion Flush</h5>
                <hr>
                <BCard no-body>
                    <BCardBody class="card-body pc-component">
                        <BAccordion flush>
                            <BAccordionItem title="Accordion Item #1">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3
                                        wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh
                                        helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                        lomo.
                                        Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                        accusamus
                                        labore sustainable VHS.
                            </BAccordionItem>
                            <BAccordionItem title="Accordion Item #2">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                        life
                                        accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                        eiusmod.
                                        Brunch 3
                                        wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh
                                        helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                        lomo.
                                        Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
                                        them
                                        accusamus
                                        labore sustainable VHS.
                            </BAccordionItem>
                            <BAccordionItem title="Accordion Item #3">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                        life
                                        accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                        eiusmod.
                                        Brunch 3
                                        wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh
                                        helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                        lomo.
                                        Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
                                        them
                                        accusamus
                                        labore sustainable VHS.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>