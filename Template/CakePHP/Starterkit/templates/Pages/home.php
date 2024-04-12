<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->

  <head>
    <?= $this->element('head-page-meta', array('title' => 'Home')); ?>
    <!-- map-vector css -->
    <link rel="stylesheet" href="css/plugins/jsvectormap.min.css">
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->

  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
      <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Dashboard', 'breadcrumbitemactive' =>'Home')); ?>
        
      <!-- [ Main Content ] start -->
        <!-- [ Main Content ] end -->

      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?>
     <?= $this->element('customizer') ?>
    <!-- [Page Specific JS] end -->
    <?= $this->element('footer-js') ?>
  </body>
  <!-- [Body] end -->
</html>
