<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Date Range Picker')); ?>

    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="css/plugins/flatpickr.min.css">
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
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'Date Range Picker')); ?>
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
                      <input type="text" class="form-control" id="pc-date_range_picker-1" placeholder="Select date range">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">With Input Group</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-group">
                        <input type="text" id="pc-date_range_picker-2" class="form-control" placeholder="Select date range">
                        <span class="input-group-text"><i class="feather icon-calendar"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Disable date</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input type="text" class="form-control" id="pc-date_range_picker-3">
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Predefined Ranges</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input type="text" class="form-control" id="pc-date_range_picker-4" placeholder="Select date range">
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
    <!-- daterangepicker -->
    <script src="js/plugins/flatpickr.min.js"></script>
    <script>
      // minimum setup
      flatpickr(document.querySelector('#pc-date_range_picker-1'),{
        mode: 'range'
      });
      flatpickr(document.querySelector('#pc-date_range_picker-2'),{
        mode: 'range'
      });
      flatpickr(document.querySelector('#pc-date_range_picker-3'),{
        mode: 'range',
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disable: [
          function (date) {
            return !(date.getDate() % 8);
          }
        ]
      });
      flatpickr(document.querySelector('#pc-date_range_picker-4'),{
        mode: 'range',
        dateFormat: 'Y-m-d',
        defaultDate: ['2016-10-10', '2016-10-20']
      });
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
