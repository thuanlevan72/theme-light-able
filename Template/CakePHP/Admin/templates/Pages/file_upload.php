<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'File Upload')); ?>
    <!-- [Page specific CSS] start -->
    <!-- fileupload-custom css -->
    <link rel="stylesheet" href="css/plugins/dropzone.min.css">
    <!-- [Page specific CSS] end -->
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'File Upload')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ file-upload ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>File Upload</h5>
              </div>
              <div class="card-body">
                <form action="json/file-upload.php" class="dropzone">
                  <div class="fallback">
                    <input name="file" type="file" multiple>
                  </div>
                </form>
                <div class="text-center m-t-20">
                  <button class="btn btn-primary">Upload Now</button>
                </div>
              </div>
            </div>
          </div>
          <!-- [ file-upload ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <!-- file-upload Js -->
    <script src="js/plugins/dropzone-amd-module.min.js"></script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
