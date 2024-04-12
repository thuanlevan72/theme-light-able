<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Notifications')); ?>
  <!-- [Page specific CSS] start -->
  <!-- notification css -->
  <link rel="stylesheet" href="css/plugins/notifier.css">
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
            <?= $this->element('component-breadcrumb', array('title' => 'Notifications', 'text' =>'Beautiful notifications with CSS and Vanilla JavaScript!', 'link' =>'https://csilva2810.github.io/notifier/docs/en/index.html')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ single-light ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Notification Alert</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Notification with Icons</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default-i">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info-i">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success-i">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning-i">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger-i">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Auto Close Notifications</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default-ac">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info-ac">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success-ac">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning-ac">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger-ac">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Using the notification.hide() method</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-nt-show">Show Notification</button>
                  <button type="button" class="btn btn-danger" id="btn-nt-hide">Hide Notification</button>
                </div>
              </div>
            </div>
            <!-- [ single-light ] end -->
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
  <!-- notification Js -->
  <script src="js/plugins/notifier.js"></script>
  <script src="js/pages/ac-notification.js"></script>
  <!-- [Page Specific JS] end -->
  <?= $this->element('customizer') ?>
</body>

</html>