<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Pagination')); ?>
  <!-- [Page specific CSS] start -->
  <link href="css/plugins/animate.min.css" rel="stylesheet" type="text/css">
  <!-- [Page specific CSS] end -->
  <?= $this->element('head-css') ?> 
  <link rel="stylesheet" href="css/uikit.css">
</head>

<?= $this->element('body') ?>
  <!-- [ Main Content ] start -->
  <?= $this->element('loader') ?>
  <?= $this->element('component-header') ?>
  <section class="component-block">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <?= $this->element('component-menu-list') ?>
        </div>
        <div class="col-xl-9">
          <div class="row">
            <?= $this->element('component-breadcrumb', array('title' => 'Pagination', 'text' =>'Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.', 'link' =>'https://getbootstrap.com/docs/5.3/components/pagination/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ Breadcrumbs & Pagination ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Pagination</h5>
                </div>
                <div class="card-body pc-component">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Working with Icons</h5>
                  <hr class="mt-2">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#!" aria-label="Previous"><span
                            aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!" aria-label="Next"><span
                            aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Disabled and Active States</h5>
                  <hr class="mt-2">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled"><span class="page-link">Previous</span></li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item active"><span class="page-link">2<span
                            class="sr-only">(current)</span></span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Sizing</h5>
                  <hr class="mt-2">
                  <nav class="mb-3" aria-label="...">
                    <ul class="pagination pagination-lg">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">1</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">1</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Alignment</h5>
                  <hr class="mt-2">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#!">Next</a>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#!">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- [ Breadcrumbs & Pagination ] end -->
          </div>
          <!-- [ Main Content ] end -->
        </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-js') ?>
  <?= $this->element('layout-component-footer-js') ?>
  <?= $this->element('customizer') ?>
</body>

</html>