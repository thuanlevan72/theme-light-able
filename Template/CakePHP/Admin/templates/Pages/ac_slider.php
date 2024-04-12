<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Slider')); ?>
  <!-- [Page specific CSS] start -->
  <link rel="stylesheet" href="css/plugins/tiny-slider.css">
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
            <?= $this->element('component-breadcrumb', array('title' => 'Slider', 'text' =>'tiny-slider works with static content and it works in the browser only. If the HTML is loaded dynamically.', 'link' =>'http://ganlanyuan.github.io/tiny-slider/demo/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ rangeslider ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Slider1</h5>
                </div>
                <div class="card-body">
                  <div class="slider1 owl-carousel owl-theme">
                    <div class="item">
                      <img src="images/slider/img-slide-1.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="images/slider/img-slide-2.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="images/slider/img-slide-3.jpg" alt="" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Vertical</h5>
                </div>
                <div class="card-body">
                  <div class="slider2 owl-carousel owl-theme">
                    <div class="item">
                      <img src="images/slider/img-slide-1.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="images/slider/img-slide-2.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="images/slider/img-slide-3.jpg" alt="" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Customize</h5>
                </div>
                <div class="card-body">
                  <div id="slider3">
                    <div class="customize" id="customize">
                      <div>
                        <div>
                          <img src="images/slider/img-slide-1.jpg" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="images/slider/img-slide-2.jpg" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="images/slider/img-slide-3.jpg" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="images/slider/img-slide-4.jpg" alt="" class="img-fluid">
                        </div>
                      </div>
                    </div>
                    <div class="customize-tools">
                      <ul class="thumbnails" id="customize-thumbnails">
                        <li>
                          <img src="images/slider/img-slide-1.jpg" alt="">
                        </li>
                        <li>
                          <img src="images/slider/img-slide-2.jpg" alt="">
                        </li>
                        <li>
                          <img src="images/slider/img-slide-3.jpg" alt="">
                        </li>
                        <li>
                          <img src="images/slider/img-slide-4.jpg" alt="">
                        </li>
                      </ul>
                      <ul class="controls" id="customize-controls">
                        <li class="prev">
                          <i class="feather icon-chevron-left"></i>
                        </li>
                        <li class="next">
                          <i class="feather icon-chevron-right"></i>
                        </li>
                      </ul>
                      <div class="playbutton-wrapper">
                        <button id="customize-toggle">Pause</button>
                      </div>
                    </div>
                  </div>
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
  <script src="js/plugins/tiny-slider.js"></script>
  <script src="js/pages/ac-slider.js"></script>
  <!-- [Page Specific JS] end -->
  <?= $this->element('customizer') ?>
</body>

</html>