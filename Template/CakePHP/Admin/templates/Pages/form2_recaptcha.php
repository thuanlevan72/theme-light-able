<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'ReCaptcha')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'ReCaptcha')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="form-group mb-0 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">reCaptcha</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="g-recaptcha" data-sitekey="6LdnLwgUAAAAAAIb9L3PQlHQgvSCi16sYgbMIMFR"></div>
                    </div>
                    <script src="https://www.google.com/recaptcha/api.js"></script>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- [ form-element ] end -->
      </div>
      <!-- [ Main Content ] end -->
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
  </body>
  <!-- [Body] end -->
</html>
