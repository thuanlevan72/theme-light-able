<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Fetch API')); ?>
    <link rel="stylesheet" href="css/plugins/style.css" >
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Table', 'breadcrumbitemactive' =>'Fetch API')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ basic-table ] start -->
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5>Fetch API</h5>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table" id="pc-dt-fetchapi"> </table>
                </div>
              </div>
            </div>
          </div>
          <!-- [ basic-table ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/simple-datatables.js"></script>
    <script>
      fetch('json/datatable.json')
        .then((response) => response.json())
        .then((data) => {
          if (!data.length) {
            return;
          }

          let table = new simpleDatatables.DataTable('#pc-dt-fetchapi', {
            data: {
              headings: Object.keys(data[0]),
              data: data.map((item) => Object.values(item))
            }
          });
        });
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
