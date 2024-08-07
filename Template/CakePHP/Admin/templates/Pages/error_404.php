<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => '404')); ?> <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('loader') ?>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="error-card">
          <div class="card-body">
            <div class="error-image-block">
              <img class="img-fluid" src="images/pages/img-error-404.png" alt="img">
            </div>
            <div class="text-center">
              <h1 class="mt-2">Oops! Something Went wrong</h1>
              <p class="mt-2 mb-4 text-muted f-20">We couldn’t find the page you were looking for. Why not try back to the Homepage.</p>
              <a class="btn btn-primary d-inline-flex align-items-center mb-3" href="index"><i class="ph-duotone ph-house me-2"></i> Back to Home</a>              
            </div>
          </div>
        </div>
      </div>
      <?= $this->element('auth-footer-block') ?>
    </div>
  </div>
  <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>