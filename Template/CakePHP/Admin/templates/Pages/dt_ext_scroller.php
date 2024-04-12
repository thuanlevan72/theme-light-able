<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Scroller')); ?>
    <!-- [Page specific CSS] start -->
    <!-- data tables css -->
    <link rel="stylesheet" href="css/plugins/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="css/plugins/scroller.bootstrap5.min.css">
    <!-- [Page specific CSS] end -->
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'DataTable', 'breadcrumbitemactive' =>'Scroller')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- Basic scroll table start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Basic Table Scroll</h5>
                <small
                  >This example shows how Scroller for DataTables can be initialised, when the Scroller Javascript file is included, by
                  simply setting the scroller option to true.
                </small>
              </div>
              <div class="card-body">
                <div class="dt-responsive table-responsive">
                  <table id="basic-scroller" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ZIP / Post code</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Basic Scroll table end -->
          <!-- State saving scroll table start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>State Saving</h5>
                <small
                  >Scroller will automatically integrate with DataTables in order to save the scrolling position of the table, if state
                  saving is enabled in the DataTable</small
                >
              </div>
              <div class="card-body">
                <div class="dt-responsive table-responsive">
                  <table id="state-scroller" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ZIP / Post code</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- State saving Scroll table end -->
          <!-- Using APi scroll table start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>API</h5>
                <small
                  >This example shows a trivial use of the API methods that Scroller adds to the DataTables API to scroll to a row once the
                  table's data has been loaded.</small
                >
              </div>
              <div class="card-body">
                <div class="dt-responsive table-responsive">
                  <table id="api-scroller" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ZIP / Post code</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Using API Scroll table end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <!-- datatable Js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/plugins/dataTables.min.js"></script>
    <script src="js/plugins/dataTables.bootstrap5.min.js"></script>
    <script src="js/plugins/scroller.bootstrap5.min.js"></script>
    <script>
      // [ Basic Table Scroll ]
      $('#basic-scroller').DataTable({
        ajax: 'json/2500.txt',
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true
      });

      // [ State Saving ]
      $('#state-scroller').DataTable({
        ajax: 'json/2500.txt',
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true,
        stateSave: true
      });

      // [ API scroller ]
      $('#api-scroller').DataTable({
        ajax: 'json/2500.txt',
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true,
      });
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
