
<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
<?= $this->element('head-page-meta', array('title' => 'Login')); ?>
 <?= $this->element('head-css') ?> 
</head>
<!-- [Body] Start -->

<body data-pc-preset="preset-1" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light" class="component-page" data-pc-direction="ltr">
  <?= $this->element('loader') ?> 
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <div class="text-center">
              <img src="/images/authentication/img-auth-login.png" alt="images" class="img-fluid mb-3">
              <h4 class="f-w-500 mb-1">Login with your email</h4>
              <p class="mb-3">Don't have an Account? <a href="register-v1" class="link-primary ms-1">Create Account</a></p>
              <?= $this->Flash->render(); ?>
            </div>
            <?= $this->Form->create(); ?>
            <div class="form-group mb-3">
              <input type="email" name="email" value="admin@themesbrand.com" class="form-control" id="floatingInput" placeholder="Email Address">
            </div>
            <div class="form-group mb-3">
              <input type="password" name="password" value="123456" class="form-control" id="floatingInput1" placeholder="Password">
            </div>
            <div class="d-flex mt-1 justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
              </div>
              <a href="forgot-password-v1"><h6 class="f-w-400 mb-0">Forgot Password?</h6></a>
            </div>
            <div class="d-grid mt-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <?= $this->Form->end(); ?>
             <div class="saprator my-3">
              <span>Or continue with</span>
            </div>
            <div class="text-center">
              <ul class="list-inline mx-auto mt-3 mb-0">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/" class="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                    <i class="fab fa-facebook-f text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/" class="avtar avtar-s rounded-circle bg-twitter" target="_blank">
                    <i class="fab fa-twitter text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://myaccount.google.com/" class="avtar avtar-s rounded-circle bg-googleplus" target="_blank">
                    <i class="fab fa-google text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <?= $this->element('auth-footer-block') ?> 
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?> 
   <?= $this->element('customizer') ?> 
</body>
<!-- [Body] end -->

</html>