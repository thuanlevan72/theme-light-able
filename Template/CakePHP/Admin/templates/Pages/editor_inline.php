<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Inline Ckeditor')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'Inline Editor')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ Classic-editor ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Inline Editor</h5>
              </div>
              <div class="card-body">
                <div id="cke5-inline-demo">
                  <header class="ck-content" data-inline-inject="true">
                    <h2>Gone traveling</h2>
                    <h3>Monthly travel news and inspiration</h3>
                  </header>
                  <div class="ck-content ck-content1" data-inline-inject="true">
                    <h3>Destination of the Month</h3>
                    <h4>Valletta</h4>
                    <figure class="image image-style-side"
                      ><img
                        alt="Picture of a sunlit facade of a Maltan building."
                        src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/malta.jpg"
                     >
                      <figcaption>It's siesta time in Valletta.</figcaption>
                    </figure>
                    <p
                      >The capital city of <a href="https://en.wikipedia.org/wiki/Malta" target="_blank" rel="noopener">Malta</a> is the top
                      destination this summer. It’s home to a cutting-edge contemporary architecture, baroque masterpieces, delicious local
                      cuisine and at least 8 months of sun. It’s also a top destination for filmmakers, so you can take a tour through
                      locations familiar to you from Game of Thrones, Gladiator, Troy and many more.</p
                    >
                  </div>
                  <div class="demo-row">
                    <div class="demo-row__half">
                      <div class="ck-content ck-content2" data-inline-inject="true">
                        <h3>The three greatest things you learn from traveling</h3>
                        <p><a href="#">Find out more</a></p>
                      </div>
                    </div>
                    <div class="demo-row__half">
                      <div class="ck-content ck-content3" data-inline-inject="true">
                        <h3>Walking the capitals of Europe: Warsaw</h3>
                        <p><a href="#">Find out more</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- [ Classic-editor ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <!-- Ckeditor js -->
    <script src="js/plugins/ckeditor/inline/ckeditor.js"></script>
    <script>
      (function () {
        InlineEditor.create(document.querySelector('.ck-content')).catch((error) => {
          console.error(error);
        });
      })();
      (function () {
        InlineEditor.create(document.querySelector('.ck-content1')).catch((error) => {
          console.error(error);
        });
      })();
      (function () {
        InlineEditor.create(document.querySelector('.ck-content2')).catch((error) => {
          console.error(error);
        });
      })();
      (function () {
        InlineEditor.create(document.querySelector('.ck-content3')).catch((error) => {
          console.error(error);
        });
      })();
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
