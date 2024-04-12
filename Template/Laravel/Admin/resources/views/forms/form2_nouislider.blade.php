@extends('layouts.main')

@section('title', 'NoUiSlider')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'NoUiSlider')

@section('css')
@endsection

@section('content')
        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Basic Setup</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center g-3">
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="pc-no_ui_slider-1-input" placeholder="Quantity">
                        </div>
                        <div class="col-sm-8">
                          <div id="pc-no_ui_slider-1" class="pc-no_ui_slider--drag-danger"></div>
                        </div>
                      </div>
                      <small class="form-text text-muted">Input control is attached to slider</small>
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Working with dates</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center g-3">
                        <div class="col-sm-6">
                          <input type="text" class="form-control mb-2" id="event-start" placeholder="Date">
                          <input type="text" class="form-control" id="event-end" placeholder="Date">
                        </div>
                        <div class="col-sm-6">
                          <div id="pc-no_ui_slider-9" class="pc-nouislider"></div>
                        </div>
                      </div>
                      <small class="form-text text-muted"
                        >dates to numerical ranges, and then use the update event to display them in a pretty format.</small
                      >
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Moving the slider by clicking pips</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center g-3">
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="pc-no_ui_slider-10-input" placeholder="Currency">
                        </div>
                        <div class="col-sm-8 mb-4">
                          <div id="pc-no_ui_slider-10" class="pc-nouislider pc-no_ui_slider--handle-danger"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Slider With Tooltip</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center g-3">
                        <div class="col-6 col-sm-3 pb-5 pb-sm-0">
                          <input type="text" class="form-control" id="pc-no_ui_slider-3-input" placeholder="Quantity">
                        </div>
                        <div class="col-6 col-sm-3 pb-5 pb-sm-0">
                          <input type="text" class="form-control" id="pc-no_ui_slider-3.1-input" placeholder="Quantity">
                        </div>
                        <div class="col-sm-6">
                          <div id="pc-no_ui_slider-3" class="pc-nouislider"></div>
                        </div>
                      </div>
                      <small class="form-text text-muted">always show slider values.</small>
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Using HTML5 input elements</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center g-3">
                        <div class="col-6 col-sm-3">
                          <select class="form-control" id="pc-no_ui_slider-input-select"></select>
                        </div>
                        <div class="col-6 col-sm-3">
                          <input type="number" class="form-control" id="pc-no_ui_slider-input-number" placeholder="Quantity">
                        </div>
                        <div class="col-sm-6">
                          <div
                            id="pc-no_ui_slider-4"
                            class="pc-nouislider pc-no_ui_slider--handle-primary pc-no_ui_slider--connect-warning"
                          ></div>
                        </div>
                      </div>
                      <small class="form-text text-muted"
                        >noUiSlider's <code>'update'</code> method is useful for synchronizing with other elements</small
                      >
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Soft Limits</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row align-items-center mb-4 g-3">
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="pc-no_ui_slider-5-input" placeholder="Quantity">
                        </div>
                        <div class="col-sm-8 pb-4">
                          <div id="pc-no_ui_slider-5"></div>
                        </div>
                      </div>
                      <small class="form-text text-muted"
                        >If you want to disable the edges of a slider, the set event can be used to reset the value if a limit is
                        passed.</small
                      >
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Vertical Slider</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="row mb-3 g-3">
                        <div class="col-sm-4">
                          <input type="text" class="form-control mb-3" id="pc-no_ui_slider-6-input" placeholder="Quantity">
                        </div>
                        <div class="col-sm-8">
                          <div id="pc-no_ui_slider-6" class="pc-toggle-noUiSlider"></div>
                        </div>
                      </div>
                      <small class="form-text text-muted">Vertical orientation slider example</small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ form-element ] end -->
        </div>
        <!-- [ Main Content ] end -->
@endsection

@section('scripts')
    <!-- [Page Specific JS] start -->
    <!-- tagify -->
    <script src="{{ URL::asset('build/js/plugins/wNumb.min.js') }}"></script>
    <script src="{{ URL::asset('build/js/plugins/nouislider.min.js') }}"></script>
    <script>
      (function () {
        // init slider
        var slider = document.getElementById('pc-no_ui_slider-1');

        noUiSlider.create(slider, {
          start: [2],
          step: 2,
          range: {
            min: [0],
            max: [10]
          },
          format: wNumb({
            decimals: 0
          })
        });

        // init slider input
        var sliderInput = document.getElementById('pc-no_ui_slider-1-input');

        slider.noUiSlider.on('update', function (values, handle) {
          sliderInput.value = values[handle];
        });

        sliderInput.addEventListener('change', function () {
          slider.noUiSlider.set(this.value);
        });
      })();
      (function () {
        // init slider
        var slider = document.getElementById('pc-no_ui_slider-3');

        noUiSlider.create(slider, {
          start: [20, 80],
          connect: true,
          direction: 'rtl',
          tooltips: [
            true,
            wNumb({
              decimals: 1
            })
          ],
          range: {
            min: [0],
            '10%': [10, 10],
            '50%': [80, 50],
            '80%': 150,
            max: 200
          }
        });

        // init slider input
        var sliderInput0 = document.getElementById('pc-no_ui_slider-3-input');
        var sliderInput1 = document.getElementById('pc-no_ui_slider-3.1-input');
        var sliderInputs = [sliderInput1, sliderInput0];

        slider.noUiSlider.on('update', function (values, handle) {
          sliderInputs[handle].value = values[handle];
        });
      })();
      (function () {
        var slider = document.getElementById('pc-no_ui_slider-input-select');

        // Append the option elements
        for (var i = -20; i <= 40; i++) {
          var option = document.createElement('option');
          option.text = i;
          option.value = i;

          slider.appendChild(option);
        }

        // init slider
        var html5Slider = document.getElementById('pc-no_ui_slider-4');

        noUiSlider.create(html5Slider, {
          start: [10, 30],
          connect: true,
          range: {
            min: -20,
            max: 40
          }
        });

        // init slider input
        var inputNumber = document.getElementById('pc-no_ui_slider-input-number');

        html5Slider.noUiSlider.on('update', function (values, handle) {
          var value = values[handle];

          if (handle) {
            inputNumber.value = value;
          } else {
            slider.value = Math.round(value);
          }
        });

        slider.addEventListener('change', function () {
          html5Slider.noUiSlider.set([this.value, null]);
        });

        inputNumber.addEventListener('change', function () {
          html5Slider.noUiSlider.set([null, this.value]);
        });
      })();
      (function () {
        // init slider
        var slider = document.getElementById('pc-no_ui_slider-5');

        noUiSlider.create(slider, {
          start: 20,
          range: {
            min: 0,
            max: 100
          },
          pips: {
            mode: 'values',
            values: [20, 80],
            density: 4
          }
        });

        var sliderInput = document.getElementById('pc-no_ui_slider-5-input');

        slider.noUiSlider.on('update', function (values, handle) {
          sliderInput.value = values[handle];
        });

        sliderInput.addEventListener('change', function () {
          slider.noUiSlider.set(this.value);
        });

        slider.noUiSlider.on('change', function (values, handle) {
          if (values[handle] < 20) {
            slider.noUiSlider.set(20);
          } else if (values[handle] > 80) {
            slider.noUiSlider.set(80);
          }
        });
      })();
      (function () {
        var verticalSlider = document.getElementById('pc-no_ui_slider-6');
        noUiSlider.create(verticalSlider, {
          orientation: 'vertical',
          start: 0,
          range: {
            min: [0, 1],
            max: 1
          },
          format: wNumb({
            decimals: 0
          })
        });
        verticalSlider.noUiSlider.on('update', function (values, handle) {
          if (values[handle] === '1') {
            verticalSlider.classList.add('off');
          } else {
            verticalSlider.classList.remove('off');
          }
        });
        var sliderInput = document.getElementById('pc-no_ui_slider-6-input');
        verticalSlider.noUiSlider.on('update', function (values, handle) {
          sliderInput.value = values[handle];
        });
        sliderInput.addEventListener('change', function () {
          verticalSlider.noUiSlider.set(this.value);
        });
      })();
      (function () {
        function timestamp(str) {
          return new Date(str).getTime();
        }
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];

        function nth(d) {
          if (d > 3 && d < 21) return 'th';
          switch (d % 10) {
            case 1:
              return 'st';
            case 2:
              return 'nd';
            case 3:
              return 'rd';
            default:
              return 'th';
          }
        }

        function formatDate(date) {
          return (
            weekdays[date.getDay()] + ', ' + date.getDate() + nth(date.getDate()) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
          );
        }
        var dateSlider = document.getElementById('pc-no_ui_slider-9');
        noUiSlider.create(dateSlider, {
          range: {
            min: timestamp('2010'),
            max: timestamp('2016')
          },
          step: 7 * 24 * 60 * 60 * 1000,
          start: [timestamp('2011'), timestamp('2015')],
          format: wNumb({
            decimals: 0
          })
        });

        var sliderInput0 = document.getElementById('event-start');
        var sliderInput1 = document.getElementById('event-end');
        var sliderInputs = [sliderInput1, sliderInput0];

        dateSlider.noUiSlider.on('update', function (values, handle) {
          sliderInputs[handle].value = formatDate(new Date(+values[handle]));
        });
      })();
      (function () {
        var pipsSlider = document.getElementById('pc-no_ui_slider-10');
        noUiSlider.create(pipsSlider, {
          range: {
            min: 0,
            max: 100
          },
          start: [50],
          pips: {
            mode: 'count',
            values: 5
          }
        });
        var pips = pipsSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
          var value = Number(this.getAttribute('data-value'));
          pipsSlider.noUiSlider.set(value);
        }
        for (var i = 0; i < pips.length; i++) {
          pips[i].style.cursor = 'pointer';
          pips[i].addEventListener('click', clickOnPip);
        }
        var sliderInput = document.getElementById('pc-no_ui_slider-10-input');
        pipsSlider.noUiSlider.on('update', function (values, handle) {
          sliderInput.value = values[handle];
        });
      })();
    </script>
@endsection