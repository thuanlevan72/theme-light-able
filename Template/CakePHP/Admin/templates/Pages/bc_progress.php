<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Progress')); ?>
  <!-- [Page specific CSS] start -->
  <link href="css/plugins/animate.min.css" rel="stylesheet" type="text/css">
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
            <?= $this->element('component-breadcrumb', array('title' => 'Progress', 'text' =>'Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.', 'link' =>'https://getbootstrap.com/docs/5.2/components/progress/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ progress ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Progress</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Labels</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4" style="height: 20px">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100">25%</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Height</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4" style="height: 1px">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4" style="height: 20px">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Backgrounds</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Multiple Bars</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress-stacked">
                    <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
                      <div class="progress-bar"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                      <div class="progress-bar bg-success"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                      <div class="progress-bar bg-info"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Striped</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%"
                      aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%"
                      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%"
                      aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%"
                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Animated Stripes</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                      aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
                      aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                      aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                      aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                      aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style="width: 35%"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ progress ] end -->
          </div>
          <!-- [ Main Content ] end -->
        </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?>
  <?= $this->element('layout-component-footer-js') ?>
  <?= $this->element('customizer') ?>
</body>

</html>