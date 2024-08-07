<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->

  <head>
    <?= $this->element('head-page-meta', array('title' => 'Vector Map')); ?>
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
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Maps', 'breadcrumbitemactive' =>'Vector Map')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ Basic-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>Basic Map With Markers</h5>
                  </div>
                  <div class="card-body">
                      <div id="world-map-markers" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ Basic-Map ] end -->
          <!-- [ world-merc-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>world [merc] Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="world-merc" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ world-merc-Map ] end -->
          <!-- [ Canada-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>Canada Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="canada" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ Canada-Map ] end -->
          <!-- [ iraq-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>iraq Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="iraq" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ iraq-Map ] end -->
          <!-- [ italy-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>italy Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="italy" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ italy-Map ] end -->
          <!-- [ russia-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>russia Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="russia" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ russia-Map ] end -->
          <!-- [ spain-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>spain Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="spain" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ spain-Map ] end -->
          <!-- [ us-aea-en-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-aea-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-aea-en" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ us-aea-en-Map ] end -->
          <!-- [ us-lcc-en-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-lcc-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-lcc-en" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ us-lcc-en-Map ] end -->
          <!-- [ us-merc-en ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-merc-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-merc-en" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ us-merc-en-Map ] end -->
          <!-- [ us-mill-en-Map ] start -->
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-mill-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-mill-en" class="set-map" style="height:400px;"></div>
                  </div>
              </div>
          </div>
          <!-- [ us-mill-en-Map ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/jsvectormap.min.js"></script>
    <script src="js/plugins/world.js"></script>
    <script src="js/plugins/world-merc.js"></script>
    <script src="js/pages/canada.js"></script>
    <script src="js/pages/iraq.js"></script>
    <script src="js/pages/italy.js"></script>
    <script src="js/pages/russia.js"></script>
    <script src="js/pages/spain.js"></script>
    <script src="js/pages/us-aea-en.js"></script>
    <script src="js/pages/us-lcc-en.js"></script>
    <script src="js/pages/us-merc-en.js"></script>
    <script src="js/pages/us-mill-en.js"></script>
    
    <script src="js/pages/map-vector.js"></script>
    <!-- [Page Specific JS] end -->
    <?= $this->element('customizer') ?>
  </body>
  <!-- [Body] end -->
</html>
