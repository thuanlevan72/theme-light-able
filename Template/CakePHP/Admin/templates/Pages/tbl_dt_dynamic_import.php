<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => 'Dynamic Import')); ?>
  <link rel="stylesheet" href="css/plugins/style.css">
  <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('layout-vertical') ?>

  <!-- [ Main Content ] start -->
  <section class="pc-container">
    <div class="pc-content">
      <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Table', 'breadcrumbitemactive' =>'Dynamic Import')); ?>

      <!-- [ Main Content ] start -->
      <div class="row">
        <!-- [ Dynamic Import ] start -->
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header">
              <h5>Dynamic Import</h5>
            </div>
            <div class="card-body table-border-style">
              <div class="table-responsive">
                <table class="table" id="pc-dt-dynamic-import"> </table>
              </div>
            </div>
          </div>
        </div>
        <!-- [ Dynamic Import ] end -->
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </section>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>
  <?= $this->element('customizer') ?>
  <script type="module">
    import {
      DataTable,
      convertCSV
    } from "/js/plugins/module.js"
    const dataTable = new DataTable("#pc-dt-dynamic-import")
    const convertedData = convertCSV({
      type: "csv",
      data:"Name,Ext.,City,Start Date|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07",
      headings: true,
      columnDelimiter: ",",
      lineDelimiter: "|"
    })
    dataTable.insert(convertedData)
  </script>
</body>
<!-- [Body] end -->

</html>