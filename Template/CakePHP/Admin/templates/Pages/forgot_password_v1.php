<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => 'Forgot password')); ?> <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('loader') ?>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <img src="images/authentication/img-auth-fporgot-password.png" alt="images" class="img-fluid mb-3">
              <h4 class="f-w-500 mb-1">Forgot Password</h4>
              <p class="mb-3">Back to <a href="login-v1" class="link-primary ms-1">Log in</a></p>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" id="floatingInput" placeholder="Email Address">
            </div>
            <div class="d-grid mt-3">
              <button type="button" class="btn btn-primary">Send reset email</button>
            </div>
          </div>
        </div>
      </div>
      <?= $this->element('auth-footer-block') ?>
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>