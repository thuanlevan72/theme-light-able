<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => 'Sample Page')); ?> <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('layout-vertical') ?>

  <!-- [ Main Content ] start -->
  <div class="pc-container">
    <div class="pc-content">
      <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Other', 'breadcrumbitemactive' =>'Sample Page')); ?>

      <!-- [ Main Content ] start -->
      <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Hello card</h5>
            </div>
            <div class="card-body">
            </div>
          </div>
        </div>
        <!-- [ sample-page ] end -->
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>
  <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>