<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
  <?= $this->element('head-page-meta', array('title' => 'Loading')); ?>
  <?= $this->element('head-css') ?> 
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
  <?= $this->element('layout-vertical') ?>

  <!-- [ Main Content ] start -->
  <div class="pc-container">
    <div class="pc-content">
      <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Ui kit', 'breadcrumbitemactive' =>'Loading')); ?>

      <!-- [ Main Content ] start -->
      <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="form-group row mb-0">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Loader</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                  <button class="btn btn-primary" id="show-loader">Loading</button>
                  <p class="text-muted mt-3 mb-0">click above button to open loader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ sample-page ] end -->
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <!-- Loader -->
  <div class="loader">
    <div class="p-4 text-center">
      <div class="custom-loader"></div>
      <h2 class="my-3 f-w-400">Loading..</h2>
      <p class="mb-0">Please wait while we get your information from the web</p>
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>
  <script>

    var control = document.querySelector('#show-loader');
    var elem = document.querySelector('.loader'),
      fadeInInterval,
      fadeOutInterval;

    if (control) {
      control.addEventListener('click', function () {
        if (!elem.classList.contains('is-active')) {
          clearInterval(fadeInInterval);
          clearInterval(fadeOutInterval);
          elem.fadeIn = function (timing) {
            var newValue = 0;
            elem.style.display = 'flex';
            elem.style.opacity = 0;
            fadeInInterval = setInterval(function () {
              if (newValue < 1) {
                newValue += 0.01;
              } else if (newValue === 1) {
                clearInterval(fadeInInterval);
              }
              elem.style.opacity = newValue;
            }, timing);
          }
          elem.fadeIn(3);
          setTimeout(function () {
            clearInterval(fadeInInterval);
            clearInterval(fadeOutInterval);
            elem.fadeOut = function (timing) {
              var newValue = 1;
              elem.style.opacity = 1;
              fadeOutInterval = setInterval(function () {
                if (newValue > 0) {
                  newValue -= 0.01;
                } else if (newValue < 0) {
                  elem.style.opacity = 0;
                  elem.style.display = 'none';
                  clearInterval(fadeOutInterval);
                }
                elem.style.opacity = newValue;
              }, timing);
            }
            elem.fadeOut(3);
          }, 4000)
        }
      });
    }
  </script>
  <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>