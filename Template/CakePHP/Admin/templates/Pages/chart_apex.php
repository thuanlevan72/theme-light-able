<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->

  <head>
    <?= $this->element('head-page-meta', array('title' => 'Apex Charts')); ?> 
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->

  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Charts', 'breadcrumbitemactive' =>'Apex Charts')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ variant-chart ] start -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bar chart</h5>
              </div>
              <div class="card-body">
                <div id="bar-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bar chart stacked</h5>
              </div>
              <div class="card-body">
                <div id="bar-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bar chart horizontal</h5>
              </div>
              <div class="card-body">
                <div id="bar-chart-3"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bar chart horizontal stacked</h5>
              </div>
              <div class="card-body">
                <div id="bar-chart-4"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Pie Charts</h5>
              </div>
              <div class="card-body">
                <div id="pie-chart-1" style="width: 100%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Pie Charts donut</h5>
              </div>
              <div class="card-body">
                <div id="pie-chart-2" style="width: 100%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>RadialBar Charts</h5>
              </div>
              <div class="card-body">
                <div id="radialBar-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>RadialBar Charts Custom Angle</h5>
              </div>
              <div class="card-body">
                <div id="radialBar-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Basic line chart</h5>
              </div>
              <div class="card-body">
                <div id="line-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Realtime Chart</h5>
              </div>
              <div class="card-body">
                <div id="line-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Different line chart</h5>
              </div>
              <div class="card-body">
                <div id="line-chart-3"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Area chart</h5>
              </div>
              <div class="card-body">
                <div id="area-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Area chart</h5>
              </div>
              <div class="card-body">
                <div class="toolbar btn-group">
                  <button id="one_month" class="btn btn-sm btn-outline-primary">1M</button>
                  <button id="six_months" class="btn btn-sm btn-outline-primary">6M</button>
                  <button id="one_year" class="btn btn-sm btn-outline-primary active">1Y</button>
                  <button id="ytd" class="btn btn-sm btn-outline-primary">YTD</button>
                  <button id="all" class="btn btn-sm btn-outline-primary">ALL</button>
                </div>
                <div id="area-chart-2"></div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Mixed Chart</h5>
              </div>
              <div class="card-body">
                <div id="mixed-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Mixed Chart</h5>
              </div>
              <div class="card-body">
                <div id="mixed-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Candlestick Chart</h5>
              </div>
              <div class="card-body">
                <div id="candlestick-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bubble Chart</h5>
              </div>
              <div class="card-body">
                <div id="bubble-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Bubble Chart 3d</h5>
              </div>
              <div class="card-body">
                <div id="bubble-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Scatter Chart</h5>
              </div>
              <div class="card-body">
                <div id="scatter-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Scatter Chart Datetime</h5>
              </div>
              <div class="card-body">
                <div id="scatter-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Heatmap Charts</h5>
              </div>
              <div class="card-body">
                <div id="heatmap-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Heatmap Charts Rounded</h5>
              </div>
              <div class="card-body">
                <div id="heatmap-chart-2"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Radar Charts</h5>
              </div>
              <div class="card-body">
                <div id="radar-chart-1"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Radar Charts Multiple Series</h5>
              </div>
              <div class="card-body">
                <div id="radar-chart-2"></div>
              </div>
            </div>
          </div>
          <!-- [ variant-chart ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> 
    <?= $this->element('footer-js') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/apexcharts.min.js"></script>
    <script src="js/pages/chart-apex.js"></script>
    <!-- [Page Specific JS] end -->
    <?= $this->element('customizer') ?>
  </body>
  <!-- [Body] end -->
</html>