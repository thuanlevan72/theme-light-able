<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Horizontal Layout')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <body data-pc-preset="preset-1" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light" class="component-page" data-pc-direction="ltr">
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Layout', 'breadcrumbitemactive' =>'Horizontal Layout')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
    <script src="js/layout-horizontal.js"></script>
  </body>
  <!-- [Body] end -->
</html>
