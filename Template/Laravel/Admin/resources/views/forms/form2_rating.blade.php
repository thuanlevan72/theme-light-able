@extends('layouts.main')

@section('title', 'Rating')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'Rating')

@section('css')
    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="{{ URL::asset('build/css/plugins/star-rating.min.css') }}">
    <style>
        :root {
            --gl-star-empty: url("/build/images/rating/star-empty.svg");
            --gl-star-full: url("/build/images/rating/star-full.svg");
            --gl-star-size: 35px;
        }

        .gl-star-rating [data-value]:not(.gl-active) .gl-emote-bg {
            fill: #dcdce6;
        }

        .gl-active svg.feather {
            fill: var(--bs-danger);
            stroke: var(--bs-danger);
        }
    </style>
    <!-- [Page specific CSS] end -->
@endsection

@section('content')
    <!-- [ Main Content ] start -->
    <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h5>Rating</h5>
                    <!-- <a href="https://pryley.github.io/star-rating.js/">https://pryley.github.io/star-rating.js/</a> -->
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group row align-items-center">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Prebuilt</label>
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <span class="gl-star-rating">
                                    <select id="glsr-prebuilt" class="star-rating-prebuilt">
                                        <option value="">Select a rating</option>
                                        <option value="5">5 Stars</option>
                                        <option value="4">4 Stars</option>
                                        <option value="3">3 Stars</option>
                                        <option value="2">2 Stars</option>
                                        <option value="1">1 Star</option>
                                    </select>
                                    <span class="gl-star-rating--stars">
                                        <span data-value="1" class=""><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" class="gl-emote" style="pointer-events: none;">
                                                <circle class="gl-emote-bg" fill="#FFA98D" cx="12" cy="12"
                                                    r="10"></circle>
                                                <path fill="#393939"
                                                    d="M12 14.6c1.48 0 2.9.38 4.15 1.1a.8.8 0 01-.79 1.39 6.76 6.76 0 00-6.72 0 .8.8 0 11-.8-1.4A8.36 8.36 0 0112 14.6zm4.6-6.25a1.62 1.62 0 01.58 1.51 1.6 1.6 0 11-2.92-1.13c.2-.04.25-.05.45-.08.21-.04.76-.11 1.12-.18.37-.07.46-.08.77-.12zm-9.2 0c.31.04.4.05.77.12.36.07.9.14 1.12.18.2.03.24.04.45.08a1.6 1.6 0 11-2.34-.38z">
                                                </path>
                                            </svg></span>
                                        <span data-value="2" class=""><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" class="gl-emote" style="pointer-events: none;">
                                                <circle class="gl-emote-bg" fill="#FFC385" cx="12" cy="12"
                                                    r="10"></circle>
                                                <path fill="#393939"
                                                    d="M12 14.8c1.48 0 3.08.28 3.97.75a.8.8 0 11-.74 1.41A8.28 8.28 0 0012 16.4a9.7 9.7 0 00-3.33.61.8.8 0 11-.54-1.5c1.35-.48 2.56-.71 3.87-.71zM15.7 8c.25.31.28.34.51.64.24.3.25.3.43.52.18.23.27.33.56.7A1.6 1.6 0 1115.7 8zM8.32 8a1.6 1.6 0 011.21 2.73 1.6 1.6 0 01-2.7-.87c.28-.37.37-.47.55-.7.18-.22.2-.23.43-.52.23-.3.26-.33.51-.64z">
                                                </path>
                                            </svg></span>
                                        <span data-value="3" class=""><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" class="gl-emote" style="pointer-events: none;">
                                                <circle class="gl-emote-bg" fill="#FFD885" cx="12" cy="12"
                                                    r="10"></circle>
                                                <path fill="#393939"
                                                    d="M15.33 15.2a.8.8 0 01.7.66.85.85 0 01-.68.94h-6.2c-.24 0-.67-.26-.76-.7-.1-.38.17-.81.6-.9zm.35-7.2a1.6 1.6 0 011.5 1.86A1.6 1.6 0 1115.68 8zM8.32 8a1.6 1.6 0 011.21 2.73A1.6 1.6 0 118.33 8z">
                                                </path>
                                            </svg></span>
                                        <span data-value="4" class=""><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" class="gl-emote" style="pointer-events: none;">
                                                <circle class="gl-emote-bg" fill="#FFD885" cx="12" cy="12"
                                                    r="10"></circle>
                                                <path fill="#393939"
                                                    d="M15.45 15.06a.8.8 0 11.8 1.38 8.36 8.36 0 01-8.5 0 .8.8 0 11.8-1.38 6.76 6.76 0 006.9 0zM15.68 8a1.6 1.6 0 011.5 1.86A1.6 1.6 0 1115.68 8zM8.32 8a1.6 1.6 0 011.21 2.73A1.6 1.6 0 118.33 8z">
                                                </path>
                                            </svg></span>
                                        <span data-value="5" class=""><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" class="gl-emote" style="pointer-events: none;">
                                                <circle class="gl-emote-bg" fill="#FFD885" cx="12" cy="12"
                                                    r="10"></circle>
                                                <path fill="#393939"
                                                    d="M16.8 14.4c.32 0 .59.2.72.45.12.25.11.56-.08.82a6.78 6.78 0 01-10.88 0 .78.78 0 01-.05-.87c.14-.23.37-.4.7-.4zM15.67 8a1.6 1.6 0 011.5 1.86A1.6 1.6 0 1115.68 8zM8.32 8a1.6 1.6 0 011.21 2.73A1.6 1.6 0 118.33 8z">
                                                </path>
                                            </svg></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Left to Right</label>
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <select id="glsr-ltr" class="star-rating">
                                    <option value="">Select a rating</option>
                                    <option value="5">Fantastic</option>
                                    <option value="4">Great</option>
                                    <option value="3">Good</option>
                                    <option value="2">Poor</option>
                                    <option value="1">Terrible</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Heart</label>
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <select id="glsr-heart" class="heart-rating">
                                    <option value="">Select a rating</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Right to Left</label>
                            <div class="col-lg-9 col-md-9 col-sm-12" style="direction: rtl;">
                                <select id="glsr-rtl" class="star-rating-old">
                                    <option value="">Select a rating</option>
                                    <option value="5">Fantastic</option>
                                    <option value="4">Great</option>
                                    <option value="3">Good</option>
                                    <option value="2">Poor</option>
                                    <option value="1">Terrible</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row ">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Hide tooltip</label>
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <select id="glsr-custom-options" class="star-rating"
                                    data-options='{"clearable":false, "tooltip":false}'>
                                    <option value="">Select a rating</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8" selected>8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                                <label for="glsr-custom-options" s tyle="pointer-events: none;">Using the "data-options"
                                    attribute
                                    to
                                    hide the tooltip and prevent the control from being cleared</label>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-form-label col-lg-3 col-sm-12 text-lg-end"></label>
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <button type="button" class="btn btn-primary toggle-star-rating">Toggle Star
                                    Rating</button>
                                <button type="reset" class="btn btn-secondary">Reset form</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- [ sample-page ] end -->
    </div>
    <!-- [ Main Content ] end -->
@endsection
@section('scripts')
    <!-- [Page specific Javascript] start -->
    <script src="{{ URL::asset('build/js/plugins/star-rating.min.js') }}"></script>
    <script>
        var destroyed = false;
        var starratingPrebuilt = new StarRating('.star-rating-prebuilt', {
            prebuilt: true,
            maxStars: 5,
        });
        var starrating = new StarRating('.star-rating', {
            stars: function(el, item, index) {
                el.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect class="gl-star-full" width="19" height="19" x="2.5" y="2.5"/><polygon fill="#FFF" points="12 5.375 13.646 10.417 19 10.417 14.665 13.556 16.313 18.625 11.995 15.476 7.688 18.583 9.333 13.542 5 10.417 10.354 10.417"/></svg>';
            },
        });
        var starratingOld = new StarRating('.star-rating-old');
        document.querySelector('.toggle-star-rating').addEventListener('click', function() {
            if (!destroyed) {
                starrating.destroy();
                starratingOld.destroy();
                starratingPrebuilt.destroy()
                heartrating.destroy()
                destroyed = true;
            } else {
                starrating.rebuild();
                starratingOld.rebuild();
                starratingPrebuilt.rebuild()
                heartrating.rebuild()
                destroyed = false;
            }
        });
        var heartrating = new StarRating('.heart-rating', {
            stars: function(el, item, index) {
                el.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style="width:var(--gl-star-size);height:var(--gl-star-size);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
            },
        });
    </script>
    <!-- [Page specific Javascript] end -->
@endsection
