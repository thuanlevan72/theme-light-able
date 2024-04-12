<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Date Picker')); ?>

    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="css/plugins/datepicker-bs5.min.css">
    <!-- [Page specific CSS] end -->
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'Date Picker')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Preview</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Input</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input type="text" class="form-control" id="pc-datepicker-1" placeholder="Select date">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">With Input Group</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-group date">
                        <input type="text" class="form-control" placeholder="Select date" id="pc-datepicker-2">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Helper Button</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-group date">
                        <input type="text" class="form-control" value="05/20/2017" id="pc-datepicker-3">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Range Picker</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-daterange input-group" id="pc-datepicker-5">
                        <input type="text" class="form-control text-left" placeholder="Start date" name="range-start">
                        <span class="input-group-text">to</span>
                        <input type="text" class="form-control text-end" placeholder="End date" name="range-end">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Inline Mode</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class id="pc-datepicker-6"></div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Position</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-group date mb-3">
                        <input type="text" class="form-control" placeholder="Top left" id="pc-datepicker-4_1">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                      <div class="input-group date mb-3">
                        <input type="text" class="form-control" placeholder="Top right" id="pc-datepicker-4_2">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                      <div class="input-group date mb-3">
                        <input type="text" class="form-control" placeholder="Bottom left" id="pc-datepicker-4_3">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                      <div class="input-group date mb-0">
                        <input type="text" class="form-control" placeholder="Bottom right" id="pc-datepicker-4_4">
                        <span class="input-group-text">
                          <i class="feather icon-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ form-element ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <!-- bootstrap-datepicker -->
    <script src="js/plugins/datepicker-full.min.js"></script>
    <script>
      // minimum setup
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-1'), {
          buttonClass: 'btn'
        });
      })();
      // input group layout
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-2'), {
          buttonClass: 'btn'
        });
      })();
      // enable clear button
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-3'), {
          buttonClass: 'btn',
          todayBtn: true,
          clearBtn: true
        });
      })();

      // orientation
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-4_1'), {
          buttonClass: 'btn',
          orientation: 'top left'
        });
      })();
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-4_2'), {
          buttonClass: 'btn',
          orientation: 'top right'
        });
      })();
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-4_3'), {
          buttonClass: 'btn',
          orientation: 'bottom left'
        });
      })();
      (function () {
        const d_week = new Datepicker(document.querySelector('#pc-datepicker-4_4'), {
          buttonClass: 'btn',
          orientation: 'bottom right'
        });
      })();

      // range picker
      (function () {
        const datepicker_range = new DateRangePicker(document.querySelector('#pc-datepicker-5'), {
          buttonClass: 'btn'
        });
      })();

      // inline picker
      (function () {
        const datepicker_inline = new Datepicker(document.querySelector('#pc-datepicker-6'), {
          buttonClass: 'btn'
        });
      })();
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
