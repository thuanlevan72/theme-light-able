<!DOCTYPE html>
<html lang="en">

<head>
  <title>Live Preview | Light Able Laravel 11 Admin & Dashboard Template</title>
  <!-- [Meta] -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Light Able is trending dashboard template made using Laravel 11 &  Bootstrap 5 design framework. Light Able is available in Bootstrap, React, CodeIgniter, Angular,  and .net Technologies.">
  <meta name="keywords" content="Laravel 11 Bootstrap admin template, Dashboard UI Kit, Dashboard Template, Backend Panel, react dashboard, angular dashboard">
  <meta name="author" content="phoenixcoded">

  <!-- [Favicon] icon -->
  <link rel="icon" href="{{ URL::asset('build/images/favicon.svg') }}" type="image/x-icon">
  
  <!-- [Page specific CSS] start -->
  <link href="{{ URL::asset('build/css/plugins/animate.min.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ URL::asset('build/css/plugins/swiper-bundle.css') }}" rel="stylesheet">
  <!-- [Page specific CSS] end -->
  
      <!-- [Google Font : Public Sans] icon -->
      <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- [Tabler Icons] https://tablericons.com -->
  <link rel="stylesheet" href="{{ URL::asset('build/fonts/tabler-icons.min.css') }}" >
  <!-- [Feather Icons] https://feathericons.com -->
  <link rel="stylesheet" href="{{ URL::asset('build/fonts/feather.css') }}" >
  <!-- [Font Awesome Icons] https://fontawesome.com/icons -->
  <link rel="stylesheet" href="{{ URL::asset('build/fonts/fontawesome.css') }}" >
  <!-- [Material Icons] https://fonts.google.com/icons -->
  <link rel="stylesheet" href="{{ URL::asset('build/fonts/material.css') }}" >
  <!-- [Template CSS Files] -->
  <link rel="stylesheet" href="{{ URL::asset('build/css/style.css') }}" id="main-style-link" >
  <link rel="stylesheet" href="{{ URL::asset('build/css/style-preset.css') }}" >

  <link rel="stylesheet" href="{{ URL::asset('build/css/landing.css') }}">
</head>

<body data-pc-preset="preset-1" data-pc-sidebar-theme="light" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light" class="landing-page">
  <!-- [ Main Content ] start -->
  @include('layouts.loader')
  <!-- [ Header ] start -->
  <header id="home">
    <!-- [ Nav ] start -->
    @include('layouts.component-header')
    <!-- [ Nav ] start -->
    <img src="{{ URL::asset('build/images/landing/img-header-bg.svg') }}" alt="img" class="img-fluid img-header-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7 header-content">
          <div class="header-badge wow animate__zoomIn" data-wow-delay="0.6s">
            <span>Chat app</span>
            <img src="{{ URL::asset('build/images/landing/img-h-badge-bg.svg') }}" alt="img" class="img-fluid">
          </div>
          <h4 class="mb-0 wow animate__fadeInUp" data-wow-delay="0.2s">It’s easy talking to your</h4>
          <h1 class="my-3 wow animate__fadeInUp" data-wow-delay="0.4s">Friends with Light able</h1>
          <p class="text-muted f-16 mb-3 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.</p>
          <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
            <a href="../dashboard" class="btn btn-primary">Get Light able <i
                class="ph-duotone ph-arrow-square-out"></i></a>
          </div>
        </div>
        <div class="col-md-5">
          <div class="wow animate__zoomIn" data-wow-delay="0.8s">
            <img src="{{ URL::asset('build/images/landing/img-header-moke.png') }}" alt="img" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- [ Header ] End -->
  <!-- [ Key features ] start -->
  <section class="bg-white pb-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card bg-dark counter-block wow animate__fadeInUp mb-0" data-wow-delay="0.7s">
            <img src="{{ URL::asset('build/images/landing/img-customer-bg.svg') }}" alt="img" class="img-fluid img-customer-bg">
            <div class="card-body p-4 p-md-5">
              <div class="row align-items-center">
                <div class="col-lg-6 my-3">
                  <h2 class="text-white mb-4">1000 + happy customer</h2>
                  <a href="https://phoenixcoded.com/" class="btn btn-primary" target="_blank">See more review <i
                      class="ph-duotone ph-arrow-square-out"></i></a>
                </div>
                <div class="col-lg-6 my-3">
                  <div class="row g-3 align-items-center text-center">
                    <div class="col-6">
                      <span class="counter text-white">2.5K+</span>
                      <h4 class="f-w-400 mb-0 text-white text-opacity-50">Sales</h4>
                    </div>
                    <div class="col-6">
                      <span class="counter text-white">4.8/5</span>
                      <h4 class="f-w-400 my-3 text-white text-opacity-50">2,442 Average rating</h4>
                      <div class="star f-20">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
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
  </section>
  <!-- [ Key features ] end -->
  <!-- [ UI Board ] start -->
  <section class="bg-white board-section">
    <img src="{{ URL::asset('build/images/landing/img-dot-bg.png') }}" alt="img" class="img-fluid img-dots-bg">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-xl-6">
          <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">The most powerful Light able UI Board
          </h2>
          <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
            text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="bard-block">
            <div class="board-color-option card">
              <div class="form-check form-check-inline board-color-checkbox mb-0 bg-primary">
                <input class="form-check-input" type="radio" name="product_color" checked>
                <i class="ph-duotone ph-eyedropper-sample"></i>
              </div>
              <div class="form-check form-check-inline board-color-checkbox mb-0 bg-secondary">
                <input class="form-check-input" type="radio" name="product_color">
                <i class="ph-duotone ph-eyedropper-sample"></i>
              </div>
              <div class="form-check form-check-inline board-color-checkbox mb-0 bg-success">
                <input class="form-check-input" type="radio" name="product_color">
                <i class="ph-duotone ph-eyedropper-sample"></i>
              </div>
              <div class="form-check form-check-inline board-color-checkbox mb-0 bg-danger">
                <input class="form-check-input" type="radio" name="product_color">
                <i class="ph-duotone ph-eyedropper-sample"></i>
              </div>
              <div class="form-check form-check-inline board-color-checkbox mb-0 bg-info">
                <input class="form-check-input" type="radio" name="product_color">
                <i class="ph-duotone ph-eyedropper-sample"></i>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11 col-sm-9 wow animate__fadeInUp text-center" data-wow-delay="0.4s">
                <img src="{{ URL::asset('build/images/landing/img-board.jpg') }}" alt="img" class="img-fluid rounded border">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ UI Board ] end -->
  <!-- [ product ] start -->
  <section class="bg-dark product-section pb-0">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-xl-10">
          <h2 class="text-white wow animate__fadeInUp section-title mb-0" data-wow-delay="0.2s">Run your entire business
            from one single
            product, built just for moving companies.</h2>
        </div>
        <div class="col-md-8 col-xl-6">
          <p class="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
            Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </div>
      <div class="row justify-content-center product-cards-block">
        <div class="col-12 position-relative">
          <img src="{{ URL::asset('build/images/landing/img-click-prod.png') }}" alt="img"
            class="img-fluid img-arrow d-none d-lg-inline-block">
        </div>
        <div class="col-xl-10">
          <div class="row justify-content-center text-center">
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="0.5s">
                <div class="card-body">
                  <i class="ph-duotone ph-wechat-logo text-primary"></i>
                  <h5 class="mt-3 mb-0">Chat with friends </h5>
                </div>
              </a>
            </div>
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="0.6s">
                <div class="card-body">
                  <i class="ph-duotone ph-shopping-cart text-primary"></i>
                  <h5 class="mt-3 mb-0">Shopping store</h5>
                </div>
              </a>
            </div>
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="0.7s">
                <div class="card-body">
                  <i class="ph-duotone ph-envelope-simple text-primary"></i>
                  <h5 class="mt-3 mb-0">Inbox </h5>
                </div>
              </a>
            </div>
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="0.8s">
                <div class="card-body">
                  <i class="ph-duotone ph-user-circle-plus text-primary"></i>
                  <h5 class="mt-3 mb-0">Post your story</h5>
                </div>
              </a>
            </div>
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="0.9s">
                <div class="card-body">
                  <i class="ph-duotone ph-calendar-plus text-primary"></i>
                  <h5 class="mt-3 mb-0">Set Schedule</h5>
                </div>
              </a>
            </div>
            <div class="col-xl-2 col-md-3 col-6">
              <a href="#" class="card wow animate__fadeInUp" data-wow-delay="1.0s">
                <div class="card-body">
                  <i class="ph-duotone ph-lock-key text-primary"></i>
                  <h5 class="mt-3 mb-0">Chat with friends </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ product ] end -->
  <!-- [ platform ] start -->
  <section class="bg-white">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-xl-6">
          <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Integrate with platform</h2>
          <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
            text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.</p>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-9 wow animate__zoomIn" data-wow-delay="0.4s">
          <img src="{{ URL::asset('build/images/landing/img-platform.png') }}" alt="img" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
  <!-- [ platform ] end -->
  <!-- [ comminuties ] start -->
  <section class="bg-primary comminuties-section">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-xl-6">
          <h2 class="text-white wow animate__fadeInUp section-title" data-wow-delay="0.2s">Trusted by open-source
            comminuties</h2>
          <p class="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">
            Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-12 wow animate__fadeInUp" data-wow-delay="0.6s">
          <div class="swiper comminuties-slides">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="card mb-0">
                  <div class="card-body">
                    <h3>Glad to see the designs and the components cleaness. Quality product with the great
                      documenation.
                      Congratulations for the good work</h3>
                    <p class="my-3 text-primary text-end">- Design Quality</p>
                    <div class="media align-items-start">
                      <div class="flex-shrink-0">
                        <img src="{{ URL::asset('build/images/user/avatar-1.jpg') }}" alt="user image" class="img-radius"
                          style="width:40px;">
                      </div>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">karanveer s.</h6>
                        <p class="mb-0 text-muted text-sm">Administrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card mb-0">
                  <div class="card-body">
                    <h3>Glad to see the designs and the components cleaness. Quality product with the great
                      documenation.
                      Congratulations for the good work</h3>
                    <p class="my-3 text-primary text-end">- Design Quality</p>
                    <div class="media align-items-start">
                      <div class="flex-shrink-0">
                        <img src="{{ URL::asset('build/images/user/avatar-1.jpg') }}" alt="user image" class="img-radius"
                          style="width:40px;">
                      </div>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">karanveer s.</h6>
                        <p class="mb-0 text-muted text-sm">Administrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card mb-0">
                  <div class="card-body">
                    <h3>Glad to see the designs and the components cleaness. Quality product with the great
                      documenation.
                      Congratulations for the good work</h3>
                    <p class="my-3 text-primary text-end">- Design Quality</p>
                    <div class="media align-items-start">
                      <div class="flex-shrink-0">
                        <img src="{{ URL::asset('build/images/user/avatar-1.jpg') }}" alt="user image" class="img-radius"
                          style="width:40px;">
                      </div>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">karanveer s.</h6>
                        <p class="mb-0 text-muted text-sm">Administrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="card mb-0">
                  <div class="card-body">
                    <h3>Glad to see the designs and the components cleaness. Quality product with the great
                      documenation.
                      Congratulations for the good work</h3>
                    <p class="my-3 text-primary text-end">- Design Quality</p>
                    <div class="media align-items-start">
                      <div class="flex-shrink-0">
                        <img src="{{ URL::asset('build/images/user/avatar-1.jpg') }}" alt="user image" class="img-radius"
                          style="width:40px;">
                      </div>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">karanveer s.</h6>
                        <p class="mb-0 text-muted text-sm">Administrator</p>
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
  </section>
  <!-- [ comminuties ] end -->
  <!-- [ why ] start -->
  <section class="bg-white why-section">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-xl-6">
          <h2 class="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Why Choose Light able</h2>
          <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
            text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-12 wow animate__fadeInUp" data-wow-delay="0.6s">
          <div class="why-slider-wrapper">
            <div class="swiper why-slides">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-tag text-primary f-32"></i>
                      <h5 class="my-3">We offer the best customer experience in the industry.</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                      <h5 class="my-3">Light able gets better and give updates.</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-alarm text-primary f-32"></i>
                      <h5 class="my-3">Time and cost</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-tag text-primary f-32"></i>
                      <h5 class="my-3">We offer the best customer experience in the industry.</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-arrows-clockwise text-primary f-32"></i>
                      <h5 class="my-3">Light able gets better and give updates.</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card mb-2">
                    <div class="card-body">
                      <i class="ph-duotone ph-alarm text-primary f-32"></i>
                      <h5 class="my-3">Time and cost</h5>
                      <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="why-slider-arrows d-flex justify-content-center">
                <div class="slidePrev-btn">
                  <span class="avtar avtar-s btn btn-link-secondary border-0"><i
                      class="ti ti-arrow-left f-18"></i></span>
                </div>
                <div class="slideNext-btn">
                  <span class="avtar avtar-s btn btn-link-secondary border-0"><i
                      class="ti ti-arrow-right f-18"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ why ] end -->
  <!-- [ Pricing ] start -->
  <section class="bg-white pt-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card bg-dark wow animate__fadeInUp" data-wow-delay="0.2s">
            <div class="card-body p-4 p-md-5">
              <div class="row align-items-center justify-content-between">
                <div class="col-lg-4 my-3 text-center text-sm-start">
                  <h2 class="text-white mb-3">Pricing</h2>
                  <p class="mb-4 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <ul class="list-inline ms-auto mb-0">
                    <li class="list-inline-item">
                      <button class="avtar avtar-s btn btn-outline-light border-0 customPrev-btn">
                        <i class="ti ti-arrow-left f-18"></i>
                      </button>
                    </li>
                    <li class="list-inline-item">
                      <button class="avtar avtar-s btn btn-outline-light border-0 customNext-btn">
                        <i class="ti ti-arrow-right f-18"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 my-3 counter-block">
                  <div class="swiper price-slides">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s"
                          id="pills-1tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-1home-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-1home" type="button" role="tab" aria-controls="pills-1home"
                              aria-selected="true">Monthly</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-1profile-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-1profile" type="button" role="tab" aria-controls="pills-1profile"
                              aria-selected="false">Yearly</button>
                          </li>
                        </ul>
                        <div class="row g-3 text-center align-items-center">
                          <div class="col-sm-6">
                            <div class="tab-content" id="pills-1tabContent">
                              <div class="tab-pane fade show active" id="pills-1home" role="tabpanel"
                                aria-labelledby="pills-1home-tab" tabindex="0">
                                <span class="counter text-white">$69</span>
                              </div>
                              <div class="tab-pane fade" id="pills-1profile" role="tabpanel"
                                aria-labelledby="pills-1profile-tab" tabindex="0">
                                <span class="counter text-white">$269</span>
                              </div>
                            </div>
                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Standard License</h4>
                          </div>
                          <div class="col-sm-6">
                            <ul class="list-unstyled text-start text-white text-opacity-50">
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> Use for single site</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6 month premium Support
                              </li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1 year updates</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> For Non-Paying users only
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s"
                          id="pills-2tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-2home-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-2home" type="button" role="tab" aria-controls="pills-2home"
                              aria-selected="true">Monthly</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-2profile-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-2profile" type="button" role="tab" aria-controls="pills-2profile"
                              aria-selected="false">Yearly</button>
                          </li>
                        </ul>
                        <div class="row g-3 text-center align-items-center">
                          <div class="col-6">
                            <div class="tab-content" id="pills-2tabContent">
                              <div class="tab-pane fade show active" id="pills-2home" role="tabpanel"
                                aria-labelledby="pills-2home-tab" tabindex="0">
                                <span class="counter text-white">$169</span>
                              </div>
                              <div class="tab-pane fade" id="pills-2profile" role="tabpanel"
                                aria-labelledby="pills-2profile-tab" tabindex="0">
                                <span class="counter text-white">$469</span>
                              </div>
                            </div>
                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Extended License</h4>
                          </div>
                          <div class="col-6">
                            <ul class="list-unstyled text-start text-white text-opacity-50">
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> Use for single site</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6 month premium Support
                              </li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1 year updates</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> For Non-Paying users only
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <ul class="nav nav-pills price-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s"
                          id="pills-3tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-3home-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-3home" type="button" role="tab" aria-controls="pills-3home"
                              aria-selected="true">Monthly</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-3profile-tab" data-bs-toggle="pill"
                              data-bs-target="#pills-3profile" type="button" role="tab" aria-controls="pills-3profile"
                              aria-selected="false">Yearly</button>
                          </li>
                        </ul>
                        <div class="row g-3 text-center align-items-center">
                          <div class="col-6">
                            <div class="tab-content" id="pills-3tabContent">
                              <div class="tab-pane fade show active" id="pills-3home" role="tabpanel"
                                aria-labelledby="pills-3home-tab" tabindex="0">
                                <span class="counter text-white">$369</span>
                              </div>
                              <div class="tab-pane fade" id="pills-3profile" role="tabpanel"
                                aria-labelledby="pills-3profile-tab" tabindex="0">
                                <span class="counter text-white">$969</span>
                              </div>
                            </div>
                            <h4 class="f-w-400 mb-0 text-white text-opacity-50">Enterprise License</h4>
                          </div>
                          <div class="col-6">
                            <ul class="list-unstyled text-start text-white text-opacity-50">
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> Use for single site</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 6 month premium Support
                              </li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> 1 year updates</li>
                              <li class="my-2"><i class="me-1 ti ti-check text-success"></i> For Non-Paying users only
                              </li>
                            </ul>
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
      </div>
    </div>
  </section>
  <!-- [ Pricing ] end -->
  <!-- [ widgets ] start -->
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="{{ URL::asset('build/images/landing/img-widget.png') }}" alt="img" class="img-fluid wow animate__fadeInUp"
            data-wow-delay="0.2s">
        </div>
        <div class="col-md-6">
          <ul class="nav nav-pills widget-tabs rounded mb-4 wow animate__fadeInUp" data-wow-delay="0.4s" id="pills-tab"
            role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                type="button" role="tab" aria-controls="pills-home" aria-selected="true">Visual report</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Statistic</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
              tabindex="0">
              <h2 class="mb-3 wow animate__fadeInUp" data-wow-delay="0.4s">All widgets designed for different
                Applications categories</h2>
              <p class="mb-4 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.</p>
              <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
                <a href="../dashboard" class="btn btn-primary me-2">Explore</a>
                <a href="../dashboard" class="btn btn-outline-secondary">Live preview</a>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
              tabindex="0">
              <h2 class="mb-3 wow animate__fadeInUp" data-wow-delay="0.4s">All widgets designed for different
                Applications categories</h2>
              <p class="mb-4 wow animate__fadeInUp" data-wow-delay="0.6s">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.</p>
              <div class="wow animate__fadeInUp" data-wow-delay="0.8s">
                <a href="../dashboard" class="btn btn-primary me-2">Explore</a>
                <a href="../dashboard" class="btn btn-outline-secondary">Live preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ widgets ] end -->
  <!-- [ Key features ] start -->
  <section class="bg-white feature-section">
    <div class="container title mb-0">
      <div class="row justify-content-center text-center wow animate__fadeInUp" data-wow-delay="0.2s"
        style="visibility: visible; animation-delay: 0.2s; animation-name: animate__fadeInUp">
        <div class="col-md-8 col-xl-6">
          <h2 class="mb-0 wow animate__fadeInUp section-title" data-wow-delay="0.1s">Key features</h2>
          <p class="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">Lorem Ipsum is simply dummy
            text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-center g-sm-4 g-3">
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.1s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-gauge f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Boost Performance</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.2s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-sidebar-simple f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Advance Layout</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.3s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-device-mobile-camera f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Responsive</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.4s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-sun-dim f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Dark layout</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.5s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-headset f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Help Desk</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border border-secondary border-opacity-25 shadow-none wow animate__fadeInUp mb-0"
            data-wow-delay="0.6s">
            <div class="card-body">
              <div class="media align-items-start">
                <div class="avtar bg-light-primary flex-shrink-0">
                  <i class="ph-duotone ph-arrow-clockwise f-24"></i>
                </div>
                <div class="media-body ms-3">
                  <h5>Live customizer</h5>
                  <p class="mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ Key features ] end -->
  <!-- [ Banner ] start -->
  <section class="bg-white pt-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card bg-dark counter-block mb-0 wow animate__fadeInUp" data-wow-delay="0.7s">
            <img src="{{ URL::asset('build/images/landing/img-counter-bg.svg') }}" alt="img" class="img-fluid img-counter-bg">
            <div class="card-body p-4 p-md-5">
              <div class="row align-items-center">
                <div class="col-lg-6 my-3">
                  <span class="h1 text-white mb-3 d-block">High-performance, scalability and durability</span>
                  <p class="mb-0 text-white text-opacity-50">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard</p>
                </div>
                <div class="col-lg-6 my-3">
                  <div class="row g-3 text-center">
                    <div class="col-4">
                      <span class="counter text-white">150+</span>
                      <h4 class="f-w-400 mb-0 text-white text-opacity-50">Components</h4>
                    </div>
                    <div class="col-4">
                      <span class="counter text-white">8+</span>
                      <h4 class="f-w-400 mb-0 text-white text-opacity-50">Application</h4>
                    </div>
                    <div class="col-4">
                      <span class="counter text-white">100+</span>
                      <h4 class="f-w-400 mb-0 text-white text-opacity-50">Pages</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ Banner ] end -->
  <!-- [ companies apps ] start -->
  <section class="border-bottom py-lg-5 py-4">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-xl-6">
          <h2 class="wow animate__fadeInUp" data-wow-delay="0.1s">Trusted By</h2>
          <p class="mt-4 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.2s">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.</p>
        </div>
        <div class="col-md-12">
          <div class="row justify-content-center client-block g-5">
            <div class="col-auto wow animate__fadeInRight" data-wow-delay="0.3s"><img
                src="{{ URL::asset('build/images/landing/client-eagames.svg') }}" alt="img" class="img-fluid"></div>
            <div class="col-auto wow animate__fadeInRight" data-wow-delay="0.4s"><img
                src="{{ URL::asset('build/images/landing/client-haswent-2.svg') }}" alt="img" class="img-fluid"></div>
            <div class="col-auto wow animate__fadeInRight" data-wow-delay="0.5s"><img
                src="{{ URL::asset('build/images/landing/client-crystal-1.svg') }}" alt="img" class="img-fluid"></div>
            <div class="col-auto wow animate__fadeInRight" data-wow-delay="0.6s"><img
                src="{{ URL::asset('build/images/landing/client-vodafone.svg') }}" alt="img" class="img-fluid"></div>
            <div class="col-auto wow animate__fadeInRight" data-wow-delay="0.7s"><img
                src="{{ URL::asset('build/images/landing/client-eagames.svg') }}" alt="img" class="img-fluid"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [ companies apps ] End -->
  <!-- [ footer apps ] start -->
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 wow animate__fadeInUp" data-wow-delay="0.2s">
            <img src="{{ URL::asset('build/images/logo-dark.svg') }}" alt="image" class="img-fluid mb-3">
            <p class="mb-4">Since 2017, More than 50K+ Developers trust the phoenixcoded Digital Product. Mantis React is
              Manage under their Experienced
              Team Players.</p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="0.6s">
                <h5 class="mb-4">Company</h5>
                <ul class="list-unstyled footer-link">
                  <li><a href="#" target="_blank">About</a></li>
                  <li><a href="#" target="_blank">Blog</a></li>
                  <li><a href="#" target="_blank">Team</a></li>
                  <li><a href="#" target="_blank">Free Version</a></li>
                </ul>
              </div>
              <div class="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="0.8s">
                <h5 class="mb-4">Help & Support</h5>
                <ul class="list-unstyled footer-link">
                  <li><a href="#" target="_blank">Documentation</a></li>
                  <li><a href="#" target="_blank">Contact us</a></li>
                  <li><a href="#" target="_blank">Support</a></li>
                  <li><a href="#" target="_blank">RoadMap</a></li>
                </ul>
              </div>
              <div class="col-sm-4 my-3 my-sm-0 wow animate__fadeInUp" data-wow-delay="1s">
                <h5 class="mb-4">Useful Resources</h5>
                <ul class="list-unstyled footer-link">
                  <li><a href="#" target="_blank">Terms & Condition</a></li>
                  <li><a href="#" target="_blank">Privacy Policy</a></li>
                  <li><a href="#" target="_blank">Licencse</a></li>
                  <li><a href="#" target="_blank">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col my-1 wow animate__fadeInUp" data-wow-delay="0.4s">
            <p class="mb-0">© Handcrafted by Team <a href="https://themeforest.net/user/phoenixcoded"
                target="_blank">phoenixcoded</a></p>
          </div>
          <div class="col-auto my-1">
            <ul class="list-inline footer-sos-link mb-0">
              <li class="list-inline-item wow animate__fadeInUp" data-wow-delay="0.4s">
                <a href="https://fb.com/phoenixcoded">
                  <i class="ph-duotone ph-facebook-logo f-20"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- [ footer apps ] End -->
  <!-- [ Main Content ] end -->
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
  @include('layouts.footerjs')
  <!-- [Page Specific JS] start -->
  <script src="{{ URL::asset('build/js/plugins/wow.min.js') }}"></script>
  <script src="{{ URL::asset('build/js/plugins/swiper-bundle.js') }}"></script>
  <script>
    // Start [ Menu hide/show on scroll ]
    let ost = 0;
    document.addEventListener('scroll', function () {
      let cOst = document.documentElement.scrollTop;
      if (cOst == 0) {
        document.querySelector('.navbar').classList.add('top-nav-collapse');
      } else if (cOst > ost) {
        document.querySelector('.navbar').classList.add('top-nav-collapse');
        document.querySelector('.navbar').classList.remove('default');
      } else {
        document.querySelector('.navbar').classList.add('default');
        document.querySelector('.navbar').classList.remove('top-nav-collapse');
      }
      ost = cOst;
    });
    // End [ Menu hide/show on scroll ]
    var wow = new WOW({
      animateClass: 'animate__animated'
    });
    wow.init();

    // slider start
    const price_Swiper = new Swiper('.price-slides', {
      loop: true,
      slidesPerView: '1',
      centeredSlides: true,
      spaceBetween: 20,
      navigation: {
        prevEl: '.customPrev-btn',
        nextEl: '.customNext-btn'
      },
    });

    const why_Swiper = new Swiper('.why-slides', {
      loop: true,
      slidesPerView: '3.5',
      centeredSlides: true,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        592: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: '3.5',
          spaceBetween: 20,
        },
      },
    });
    var swiper = new Swiper(".comminuties-slides", {
      slidesPerView: 1.6,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
      },
    });
  </script>
  <!-- [Page Specific JS] end -->
  @include('layouts.customizer')
</body>

</html>