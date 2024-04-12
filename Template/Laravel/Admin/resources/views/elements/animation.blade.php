@extends('layouts.layout-components')

@section('title', 'Animation')
@section('breadcrumb-title', 'UI Components')
@section('breadcrumb-text', 'Animation.')

@section('css')
    <!-- [Page specific CSS] start -->
    <link href="{{ URL::asset('build/css/plugins/animate.min.css') }}" rel="stylesheet" type="text/css">
    <!-- [Page specific CSS] end -->
@endsection

@section('css-bottom')
    <link rel="stylesheet" href="{{ URL::asset('build/css/uikit.css') }}">
@endsection

@section('content')
    <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h5>Animation</h5>
                </div>
                <div class="card-body">
                    <form class="animation-type">
                        <div class="container">
                            <div class="row align-items-center mb-3">
                                <div class="col-lg-4 offset-lg-3 col-md-12">
                                    <select class="form-select select-animations">
                                        <optgroup label="Attention Seekers">
                                            <option value="bounce">bounce</option>
                                            <option value="flash">flash</option>
                                            <option value="pulse">pulse</option>
                                            <option value="rubberBand">rubberBand</option>
                                            <option value="shake">shake</option>
                                            <option value="swing">swing</option>
                                            <option value="tada">tada</option>
                                            <option value="wobble">wobble</option>
                                            <option value="jello">jello</option>
                                        </optgroup>
                                        <optgroup label="Bouncing Entrances">
                                            <option value="bounceIn">bounceIn</option>
                                            <option value="bounceInDown">bounceInDown</option>
                                            <option value="bounceInLeft">bounceInLeft</option>
                                            <option value="bounceInRight">bounceInRight</option>
                                            <option value="bounceInUp">bounceInUp</option>
                                        </optgroup>
                                        <optgroup label="Bouncing Exits">
                                            <option value="bounceOut">bounceOut</option>
                                            <option value="bounceOutDown">bounceOutDown</option>
                                            <option value="bounceOutLeft">bounceOutLeft</option>
                                            <option value="bounceOutRight">bounceOutRight</option>
                                            <option value="bounceOutUp">bounceOutUp</option>
                                        </optgroup>
                                        <optgroup label="Fading Entrances">
                                            <option value="fadeIn">fadeIn</option>
                                            <option value="fadeInDown">fadeInDown</option>
                                            <option value="fadeInDownBig">fadeInDownBig</option>
                                            <option value="fadeInLeft">fadeInLeft</option>
                                            <option value="fadeInLeftBig">fadeInLeftBig</option>
                                            <option value="fadeInRight">fadeInRight</option>
                                            <option value="fadeInRightBig">fadeInRightBig</option>
                                            <option value="fadeInUp">fadeInUp</option>
                                            <option value="fadeInUpBig">fadeInUpBig</option>
                                        </optgroup>
                                        <optgroup label="Fading Exits">
                                            <option value="fadeOut">fadeOut</option>
                                            <option value="fadeOutDown">fadeOutDown</option>
                                            <option value="fadeOutDownBig">fadeOutDownBig</option>
                                            <option value="fadeOutLeft">fadeOutLeft</option>
                                            <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                                            <option value="fadeOutRight">fadeOutRight</option>
                                            <option value="fadeOutRightBig">fadeOutRightBig</option>
                                            <option value="fadeOutUp">fadeOutUp</option>
                                            <option value="fadeOutUpBig">fadeOutUpBig</option>
                                        </optgroup>
                                        <optgroup label="Flippers">
                                            <option value="flip">flip</option>
                                            <option value="flipInX">flipInX</option>
                                            <option value="flipInY">flipInY</option>
                                            <option value="flipOutX">flipOutX</option>
                                            <option value="flipOutY">flipOutY</option>
                                        </optgroup>
                                        <optgroup label="Lightspeed">
                                            <option value="lightSpeedIn">lightSpeedIn</option>
                                            <option value="lightSpeedOut">lightSpeedOut</option>
                                        </optgroup>
                                        <optgroup label="Rotating Entrances">
                                            <option value="rotateIn">rotateIn</option>
                                            <option value="rotateInDownLeft">rotateInDownLeft</option>
                                            <option value="rotateInDownRight">rotateInDownRight</option>
                                            <option value="rotateInUpLeft">rotateInUpLeft</option>
                                            <option value="rotateInUpRight">rotateInUpRight</option>
                                        </optgroup>
                                        <optgroup label="Rotating Exits">
                                            <option value="rotateOut">rotateOut</option>
                                            <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                                            <option value="rotateOutDownRight">rotateOutDownRight</option>
                                            <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                                            <option value="rotateOutUpRight">rotateOutUpRight</option>
                                        </optgroup>
                                        <optgroup label="Sliding Entrances">
                                            <option value="slideInUp">slideInUp</option>
                                            <option value="slideInDown">slideInDown</option>
                                            <option value="slideInLeft">slideInLeft</option>
                                            <option value="slideInRight">slideInRight</option>
                                        </optgroup>
                                        <optgroup label="Sliding Exits">
                                            <option value="slideOutUp">slideOutUp</option>
                                            <option value="slideOutDown">slideOutDown</option>
                                            <option value="slideOutLeft">slideOutLeft</option>
                                            <option value="slideOutRight">slideOutRight</option>
                                        </optgroup>
                                        <optgroup label="Zoom Entrances">
                                            <option value="zoomIn">zoomIn</option>
                                            <option value="zoomInDown">zoomInDown</option>
                                            <option value="zoomInLeft">zoomInLeft</option>
                                            <option value="zoomInRight">zoomInRight</option>
                                            <option value="zoomInUp">zoomInUp</option>
                                        </optgroup>
                                        <optgroup label="Zoom Exits">
                                            <option value="zoomOut">zoomOut</option>
                                            <option value="zoomOutDown">zoomOutDown</option>
                                            <option value="zoomOutLeft">zoomOutLeft</option>
                                            <option value="zoomOutRight">zoomOutRight</option>
                                            <option value="zoomOutUp">zoomOutUp</option>
                                        </optgroup>
                                        <optgroup label="Specials">
                                            <option value="hinge">hinge</option>
                                            <option value="rollIn">rollIn</option>
                                            <option value="rollOut">rollOut</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <button type="button" class="btn btn-primary triggerAnimation">Animate me!</button>
                                </div>
                            </div>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 col-sm-8">
                                    <div class="text-center animation-image">
                                        <img class="img-fluid img-thumbnail" src="{{ URL::asset('build/images/light-box/l3.jpg') }}"
                                            alt="animate images">
                                    </div>
                                </div>
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
    <script>
        var btn_animate = document.querySelector('.triggerAnimation');
        if (btn_animate) {
            btn_animate.addEventListener('click', function() {
                animate()
            });
        }
        var select_animate = document.querySelector('.select-animations');
        if (select_animate) {
            select_animate.addEventListener('change', function() {
                animate()
            });
        }

        function animate() {
            var anim = document.querySelector('.select-animations').value;
            var animation_image = document.querySelector('.animation-image');
            if (animation_image) {
                clr_animate()
                animation_image.classList.add('animate__animated', `animate__${anim}`)
                setTimeout(function() {
                    clr_animate()
                }, 1800);
            }
        }

        function clr_animate() {
            var animation_image = document.querySelector('.animation-image');
            if (animation_image) {
                animation_image.classList.remove('animate__animated');
                removeClassByPrefix(animation_image, 'animate__');
            }
        }
    </script>
@endsection
