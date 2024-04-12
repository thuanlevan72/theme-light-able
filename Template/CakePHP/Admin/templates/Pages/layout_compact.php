<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Compact Layout')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <body data-pc-preset="preset-1" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light" class="component-page" data-pc-direction="ltr">
    <?= $this->element('layout-compact') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Layout', 'breadcrumbitemactive' =>'Compact Layout')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ sample-page ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Hello card</h5>
              </div>
              <div class="card-body">
                <p
                  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
          <!-- [ sample-page ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
    <script src="js/layout-compact.js"></script>
  </body>
  <!-- [Body] end -->
</html>
