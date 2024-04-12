<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Quill Editor')); ?>

    <!-- [Page specific CSS] start -->
    <link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/plugins/quill.core.css">
    <link rel="stylesheet" href="css/plugins/quill.snow.css">
    <link rel="stylesheet" href="css/plugins/quill.bubble.css">
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
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'Quill Editor')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5>Basic snow theme</h5>
              </div>
              <div class="card-body">
                <div id="pc-quil-1" style="height: 325px">
                  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
                  <p><br></p>
                  <p
                    >Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web.
                    With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive
                    <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p
                  >
                  <p><br></p>
                  <iframe
                    class="ql-video ql-align-center"
                    src="https://player.vimeo.com/video/253905163"
                    width="500"
                    height="280"
                    allowfullscreen
                  ></iframe>
                  <p><br></p>
                  <h2 class="ql-align-center">Getting Started is Easy</h2>
                  <p><br></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5>bubble Theme</h5>
              </div>
              <div class="card-body">
                <div id="pc-quil-2" style="height: 325px">
                  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
                  <p><br></p>
                  <p
                    >Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web.
                    With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive
                    <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p
                  >
                  <p><br></p>
                  <iframe
                    class="ql-video ql-align-center"
                    src="https://player.vimeo.com/video/253905163"
                    width="500"
                    height="280"
                    allowfullscreen
                  ></iframe>
                  <p><br></p>
                  <h2 class="ql-align-center">Getting Started is Easy</h2>
                  <p><br></p>
                </div>
              </div>
            </div>
          </div>
          <!-- [ form-element ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/quill.min.js"></script>
    <script>
      (function () {
        var quill = new Quill('#pc-quil-1', {
          modules: {
            toolbar: [
              [
                {
                  header: [1, 2, false]
                }
              ],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block']
            ]
          },
          placeholder: 'Type your text here...',
          theme: 'snow'
        });
      })();
      (function () {
        var Delta = Quill.import('delta');
        var quill = new Quill('#pc-quil-2', {
          modules: {
            toolbar: true
          },
          placeholder: 'Type your text here...',
          theme: 'bubble'
        });
      })();
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
