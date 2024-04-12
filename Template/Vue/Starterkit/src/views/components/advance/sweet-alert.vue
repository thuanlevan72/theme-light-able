<script>
import Swal from "sweetalert2";
import Layout from "@/layout/c-main.vue"


export default {
    components: {
        Layout
    },
    methods: {
        showAlert() {
            Swal.fire("Any fool can use a computer!");
        },
        titleText() {
            Swal.fire("The Internet?", "That thing is still around?", "question");
        },
        successmsg() {
            Swal.fire("Good job!", "You clicked the button!", "success");
        },
        position() {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
        },
        confirm() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        cancel() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger ml-2",
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    showCancelButton: true,
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your imaginary file is safe :)",
                            "error"
                        );
                    }
                });
        },
        saError() {
            Swal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error",
                customClass: {
                    confirmButton: "btn btn-primary w-xs mt-2",
                },
                buttonsStyling: false,
                footer: '<a href="">Why do I have this issue?</a>',
                showCloseButton: true,
            });
        },
        content() {
            Swal.fire({
                imageUrl: "https://placeholder.pics/svg/300x1500",
                imageHeight: 1500,
                imageAlt: "A tall image",
                customClass: {
                    confirmButton: "btn btn-primary w-xs mt-2",
                },
                buttonsStyling: false,
                showCloseButton: true,
            });
        },
        threeButton() {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                customClass: {
                    confirmButton: "btn btn-success w-xs me-2",
                    cancelButton: "btn btn-danger w-xs",
                    denyButton: "btn btn-info w-xs me-2",
                },
                buttonsStyling: false,
                denyButtonText: "Don't save",
                showCloseButton: true,
            }).then(function (result) {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Saved!",
                        icon: "success",
                        confirmButtonClass: "btn btn-primary w-xs",
                        buttonsStyling: false,
                    });
                } else if (result.isDenied) {
                    Swal.fire({
                        title: "Changes are not saved",
                        icon: "info",
                        customClass: {
                            confirmButton: "btn btn-primary w-xs",
                        },
                        buttonsStyling: false,
                    });
                }
            });
        },
        imageHeader() {
            Swal.fire({
                title: "Sweet!",
                text: "Modal with a custom image.",
                // imageUrl: require("@/assets/images/logo-dark.png"),
                imageHeight: 20,
                confirmButtonColor: "#556ee6",
            });
        },
        timer() {
            let timerInterval;
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                        Swal.getContent().querySelector("b").textContent =
                            Swal.getTimerLeft();
                    }, 100);
                },
                onClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.timer
                ) {
                    console.log("I was closed by the timer"); // eslint-disable-line
                }
            });
        },
        custom() {
            Swal.fire({
                title: "<i>HTML</i> <u>example</u>",
                icon: "info",
                html:
                    "You can use <b>bold text</b>, " +
                    '<a href="//Themesbrand.in/">links</a> ' +
                    "and other HTML tags",
                showCancelButton: true,
                customClass: {
                    cancelButton: "btn btn-danger",
                    confirmButton: "btn btn-success me-2",
                },
                buttonsStyling: false,
                confirmButtonText:
                    '<i class="ri-thumb-up-fill align-bottom me-1"></i> Great!',
                cancelButtonText: '<i class="ri-thumb-down-fill align-bottom"></i>',
            });
        },
        customBackground() {
            Swal.fire({
                title: "Custom width, padding, background.",
                width: 600,
                padding: 100,
                confirmButtonColor: "#556ee6",
                background:
                    "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)",
            });
        },
        ajax() {
            Swal.fire({
                title: "Submit email to run ajax request",
                input: "email",
                showCancelButton: true,
                confirmButtonText: "Submit",
                showLoaderOnConfirm: true,
                confirmButtonColor: "#556ee6",
                cancelButtonColor: "#f46a6a",
                preConfirm: (email) => {
                    // eslint-disable-next-line no-unused-vars
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (email === "taken@example.com") {
                                Promise.reject(new Error("This email is already taken."));
                            } else {
                                resolve();
                            }
                        }, 2000);
                    });
                },
                allowOutsideClick: false,
            }).then((email) => {
                Swal.fire({
                    title: "Ajax request finished!",
                    html: "Submitted email: " + email,
                });
            });
        },
        chain() {
            Swal.mixin({
                input: "text",
                confirmButtonText: "Next &rarr;",
                showCancelButton: true,
                confirmButtonColor: "#556ee6",
                cancelButtonColor: "#74788d",
                progressSteps: ["1", "2", "3"],
            })
                .queue([
                    {
                        title: "Question 1",
                        text: "Chaining swal2 modals is easy",
                    },
                    "Question 2",
                    "Question 3",
                ])
                .then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: "All done!",
                            html:
                                "Your answers: <pre><code>" +
                                JSON.stringify(result.value) +
                                "</code></pre>",
                            confirmButtonText: "Lovely!",
                        });
                    }
                });
        },
        dynamicQueue() {
            var ipAPI = "https://api.ipify.org?format=json";
            Swal.queue([
                {
                    title: "Your public IP",
                    confirmButtonText: "Show my public IP",
                    text: "Your public IP will be received " + "via AJAX request",
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return fetch(ipAPI)
                            .then((response) => response.json())
                            .then((data) => Swal.insertQueueStep(data.ip))
                            .catch(() => {
                                Swal.insertQueueStep({
                                    type: "error",
                                    title: "Unable to get your public IP",
                                });
                            });
                    },
                },
            ]);
        },
    },
};
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Sweet alert</h2>
                <p class="text-muted">A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for
                    JavaScripts popup boxes</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://sweetalert2.github.io/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Sweetalert 2</h5>
                    </BCardHeader>

                    <BCardBody>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Basic message</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="showAlert">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Title with a text under</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="titleText">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Title with a error icon</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-danger" type="button" id="sa-basic" @click="saError">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Long content inside</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="content">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Custom HTML</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="custom">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">dialog with three
                                buttons</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="threeButton">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">custom positioned</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="position">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Custom animation</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="content">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">By passing a parameter, you can
                                execute
                                something</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="cancel">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Message with a custom
                                image</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="customBackground">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Auto close timer</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="timer">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">RTL Languages</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="content">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                        <BRow class="form-group">
                            <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">AJAX request</label>
                            <BCol lg="4" md="9" sm="12">
                                <BButton variant="light-primary" type="button" id="sa-basic" @click="ajax">
                                    Try me!
                                </BButton>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>