<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->

  <head>
    <?= $this->element('head-page-meta', array('title' => 'Layout 2')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->

  <body class="layout-2" data-pc-preset="preset-1" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light" class="component-page">
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Layout', 'breadcrumbitemactive' =>'Layout 2')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ sample-page ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5>Brand Color</h5>
                <small>set background utility class in <code>.m-header</code> in sidebar</small>
                <div class="row g-3 mt-3">
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-brand-color-1" onclick="changebrand('bg-brand-color-1')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-brand-color-2" onclick="changebrand('bg-brand-color-2')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-brand-color-3" onclick="changebrand('bg-brand-color-3')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-primary" onclick="changebrand('bg-primary')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-secondary" onclick="changebrand('bg-secondary')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-danger" onclick="changebrand('bg-danger')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-success" onclick="changebrand('bg-success')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-warning" onclick="changebrand('bg-warning')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="avtar avtar-s bg-info" onclick="changebrand('bg-info')">
                      <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                    </a>
                  </div>

              </div>
            </div>
          </div>
          <!-- [ sample-page ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>
    <?= $this->element('customizer') ?>
    <script>
      document.querySelector('.pc-sidebar .m-header .badge').classList.add('bg-dark');
      document.querySelector('.pc-sidebar .m-header .badge').classList.remove('bg-brand-color-2');
      layout_sidebar_change('dark');
      layout_caption_change('false');
      if (document.querySelector('.pc-sidebar .m-header .logo-lg')) {
        document.querySelector('.pc-sidebar .m-header .logo-lg').setAttribute('src', 'images/logo-white.svg');
        document.querySelector('.pc-sidebar .m-header').classList.add('bg-brand-color-2');
      }
      function changebrand(temp){
        removeClassByPrefix(document.querySelector('.pc-sidebar .m-header'), "bg-");
        document.querySelector('.pc-sidebar .m-header').classList.add(temp);
      }
    </script>
  </body>
  <!-- [Body] end -->
</html>
