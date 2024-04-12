<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => 'Code verification')); ?> <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('loader') ?>
  <div class="auth-main v2">
    <div class="bg-overlay bg-dark"></div>
    <div class="auth-wrapper">
      <div class="auth-sidecontent">
        <?= $this->element('auth-footer-block') ?>
      </div>
      <div class="auth-form">
        <div class="card my-5 mx-3">
          <div class="card-body">
            <h4 class="f-w-500 mb-1">Please confirm with OTP</h4>
            <p class="mb-0">We`ve send you code on jone. ****@company.com</p>
            <p class="mb-3">Did not receive the email?<a href="#" class="link-primary ms-1">Resend code</a></p>
            <div class="row my-4 text-center">
              <div class="col">
                <input type="text" class="form-control text-center" placeholder="0">
              </div>
              <div class="col">
                <input type="text" class="form-control text-center" placeholder="0">
              </div>
              <div class="col">
                <input type="text" class="form-control text-center" placeholder="0">
              </div>
              <div class="col">
                <input type="text" class="form-control text-center" placeholder="0">
              </div>
            </div>
            <div class="d-grid mt-4">
              <button type="button" class="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>