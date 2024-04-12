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
  <div class="auth-main v2">
    <div class="bg-overlay bg-dark"></div>
    <div class="auth-wrapper">
      <div class="auth-sidecontent">
        <?= $this->element('auth-footer-block') ?>
      </div>
      <div class="auth-form">
        <div class="card my-5 mx-3">
          <div class="card-body">
            <h4 class="f-w-500 mb-1">Forgot Password</h4>
            <p class="mb-3">Back to <a href="login-v2" class="link-primary">Log in</a></p>
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
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>