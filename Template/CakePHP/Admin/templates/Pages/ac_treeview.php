<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Tree View')); ?>
  <!-- [Page specific CSS] start -->
  <!-- jstree css -->
  <link rel="stylesheet" href="css/plugins/vanillatree.css">
  <!-- Page specific CSS end  -->
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
            <?= $this->element('component-breadcrumb', array('title' => 'Tree View', 'text' =>'Standalone tree view library', 'link' =>'https://github.com/finom/vanillatree')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ rangeslider ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>HTML Demo</h5>
                </div>
                <div class="card-body">
                  <div id="tree-demo"> </div>
                  <p id="tree-msg"></p>
                </div>
              </div>
            </div>
            <!-- [ rangeslider ] end -->
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
  <!-- jstree Js -->
  <script src="js/plugins/vanillatree.min.js"></script>
  <script src="js/pages/ac-treeview.js"></script>
  <!-- [Page Specific JS] end -->
  <?= $this->element('customizer') ?>
</body>

</html>