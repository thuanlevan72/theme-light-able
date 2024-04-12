@extends('layouts.main')

@section('title', 'Wizard')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'Wizard')

@section('css')
    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="{{ URL::asset('build/css/plugins/star-rating.min.css') }}">
    <!-- [Page specific CSS] end -->
@endsection

@section('content')
    <!-- [ Main Content ] start -->
    <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
            <div id="basicwizard" class="form-wizard row justify-content-center">
                <div class="col-sm-12 col-md-6 col-xxl-4 text-center">
                    <h3>Build Your Profile</h3>
                    <p class="text-muted mb-4">A group of people who collectively are responsible for all of the work
                        necessary
                        to produce working, validated assets.</p>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body p-3">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item" data-target-form="#contactDetailForm">
                                    <a href="#contactDetail" data-bs-toggle="tab" data-toggle="tab" class="nav-link active">
                                        <i class="ph-duotone ph-user-circle"></i>
                                        <span class="d-none d-sm-inline">About me</span>
                                    </a>
                                </li>
                                <!-- end nav item -->
                                <li class="nav-item" data-target-form="#jobDetailForm">
                                    <a href="#jobDetail" data-bs-toggle="tab" data-toggle="tab" class="nav-link icon-btn">
                                        <i class="ph-duotone ph-map-pin"></i>
                                        <span class="d-none d-sm-inline">Address</span>
                                    </a>
                                </li>
                                <!-- end nav item -->
                                <li class="nav-item" data-target-form="#educationDetailForm">
                                    <a href="#educationDetail" data-bs-toggle="tab" data-toggle="tab"
                                        class="nav-link icon-btn">
                                        <i class="ph-duotone ph-graduation-cap"></i>
                                        <span class="d-none d-sm-inline">Education Detail</span>
                                    </a>
                                </li>
                                <!-- end nav item -->
                                <li class="nav-item">
                                    <a href="#finish" data-bs-toggle="tab" data-toggle="tab" class="nav-link icon-btn">
                                        <i class="ph-duotone ph-check-circle"></i>
                                        <span class="d-none d-sm-inline">Finish</span>
                                    </a>
                                </li>
                                <!-- end nav item -->
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="tab-content">
                                <!-- START: Define your progress bar here -->
                                <div id="bar" class="progress mb-3" style="height: 7px;">
                                    <div class="bar progress-bar progress-bar-striped progress-bar-animated bg-success">
                                    </div>
                                </div>
                                <!-- END: Define your progress bar here -->
                                <!-- START: Define your tab pans here -->
                                <div class="tab-pane show active" id="contactDetail">
                                    <form id="contactForm" method="post" action="#">
                                        <div class="text-center">
                                            <h3 class="mb-2">Let's start with the basic information</h3>
                                            <small class="text-muted">Let us know your name and email address. Use an
                                                address you don't
                                                mind other users contacting you at</small>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-sm-auto text-center">
                                                <div class="position-relative me-3 d-inline-flex">
                                                    <div class="position-absolute top-50 start-100 translate-middle">
                                                        <button class="btn btn-sm btn-primary btn-icon">
                                                            <i class="ti ti-pencil"></i>
                                                        </button>
                                                    </div>
                                                    <img src="{{ URL::asset('build/images/application/img-prod-3.jpg') }}" alt="user-image"
                                                        class="wid-150 rounded img-fluid ms-2">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label class="form-label">First Name</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter First Name">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label class="form-label">Last Name</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter Last Name">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label class="form-label">Email Address</label>
                                                            <input type="email" class="form-control"
                                                                placeholder="Enter Email Address">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- end contact detail tab pane -->
                                <div class="tab-pane" id="jobDetail">
                                    <form id="jobForm" method="post" action="#">
                                        <div class="text-center">
                                            <h3 class="mb-2">Tell me something about Home address</h3>
                                            <small class="text-muted">Let us know your name and email address. Use an
                                                address you don't
                                                mind other users contacting you at</small>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="form-label">Street Name</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Street Name">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="form-label">Street No</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Street No">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="form-label">City</label>
                                                    <input type="text" class="form-control" placeholder="Enter City">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="form-label">Country</label>
                                                    <select class="form-select">
                                                        <option>Select Contry</option>
                                                        <option>India</option>
                                                        <option>Rusia</option>
                                                        <option>Dubai</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- end job detail tab pane -->
                                <div class="tab-pane" id="educationDetail">
                                    <form id="educationForm" method="post" action="#">
                                        <div class="text-center">
                                            <h3 class="mb-2">Tell us about your education</h3>
                                            <small class="text-muted">Let us know your name and email address. Use an
                                                address you don't
                                                mind other users contacting you at</small>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label" for="schoolName">School Name</label>
                                                    <input type="text" class="form-control" id="schoolName"
                                                        placeholder="enter your school name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label" for="schoolLocation">School Location</label>
                                                    <input type="text" class="form-control" id="schoolLocation"
                                                        placeholder="enter your school location" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- end education detail tab pane -->
                                <div class="tab-pane" id="finish">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-lg-6">
                                            <div class="text-center">
                                                <i class="ph-duotone ph-gift f-50 text-danger"></i>
                                                <h3 class="mt-4 mb-3">Thank you !</h3>
                                                <div class="mb-3">
                                                    <div class="form-check d-inline-block">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="customCheck1" />
                                                        <label class="form-check-label" for="customCheck1">I agree with
                                                            the Terms and
                                                            Conditions</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </div>
                                <!-- END: Define your tab pans here -->
                                <!-- START: Define your controller buttons here-->
                                <div class="d-flex wizard justify-content-between mt-3">
                                    <div class="first">
                                        <a href="javascript:void(0);" class="btn btn-secondary">
                                            First
                                        </a>
                                    </div>
                                    <div class="d-flex">
                                        <div class="previous me-2">
                                            <a href="javascript:void(0);" class="btn btn-secondary">
                                                Back To Previous
                                            </a>
                                        </div>
                                        <div class="next">
                                            <a href="javascript:void(0);" class="btn btn-secondary mt-3 mt-md-0">
                                                Next Step
                                            </a>
                                        </div>
                                    </div>
                                    <div class="last">
                                        <a href="javascript:void(0);" class="btn btn-secondary mt-3 mt-md-0">
                                            Finish
                                        </a>
                                    </div>
                                </div>
                                <!-- END: Define your controller buttons here-->
                            </div>
                        </div>
                    </div>
                    <!-- end tab content-->
                </div>
            </div>
        </div>
        <!-- [ sample-page ] end -->
    </div>
    <!-- [ Main Content ] end -->
@endsection
@section('scripts')
    <!-- [Page specific Javascript] start -->
    <script src="{{ URL::asset('build/js/plugins/wizard.min.js') }}"></script>
    <script>
        new Wizard("#basicwizard", {
            validate: true,
            progress: true
        });
    </script>
    <!-- [Page specific Javascript] end -->
@endsection
