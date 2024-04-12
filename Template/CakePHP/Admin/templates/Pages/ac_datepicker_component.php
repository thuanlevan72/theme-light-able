<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'DatePicker')); ?>
  <!-- [Page specific CSS] start -->
  <!-- Bootstrap DatePicker -->
  <link rel="stylesheet" href="css/plugins/datepicker-bs5.min.css">
  <!-- [Page specific CSS] end -->
  <?= $this->element('head-css') ?> 
  <link rel="stylesheet" href="css/uikit.css">
</head>

<?= $this->element('body') ?>
  <!-- [ Main Content ] start -->
  <?= $this->element('loader') ?>
  <?= $this->element('component-header') ?>
  <section class="component-block">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <?= $this->element('component-menu-list') ?>
        </div>
        <div class="col-xl-9">
          <div class="row">
            <?= $this->element('component-breadcrumb', array('title' => 'DatePicker', 'text' =>'Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.', 'link' =>'https://bootstrap-datepicker.readthedocs.io/en/latest/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ bootstrap-datetimepicker ] start -->
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Disabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_week" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Highlighted</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_highlight" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>AutoClose</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_auto" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>DatesDisabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_disable" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Today Highlight</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_today" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Calendar Weeks</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="disp_week" >
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Date Range</h5>
                </div>
                <div class="card-body">
                  <div class="input-daterange input-group" id="datepicker_range">
                    <input type="text" class="form-control text-left" placeholder="Start date" name="range-start" >
                    <input type="text" class="form-control text-end" placeholder="End date" name="range-end" >
                  </div>
                </div>
              </div>
            </div>
            <!-- [ bootstrap-datetimepicker ] End -->
          </div>
          <!-- [ Main Content ] end -->
        </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?>
  <?= $this->element('layout-component-footer-js') ?>
  <!-- [Page Specific JS] start -->
  <!-- DatePicker js -->
  <script src="js/plugins/datepicker-full.min.js"></script>
  <script src="js/pages/ac-datepicker.js"></script>
  <!-- [Page Specific JS] end -->
  <?= $this->element('customizer') ?>
</body>

</html>