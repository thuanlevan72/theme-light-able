<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Breadcrumb')); ?>
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
            <?= $this->element('component-breadcrumb', array('title' => 'Breadcrumb', 'text' =>'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.', 'link' =>'https://getbootstrap.com/docs/5.2/components/breadcrumb/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ Breadcrumbs & Pagination ] start -->
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Breadcrumb</h5>
                </div>
                <div class="card-body pc-component">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item"><a href="#!">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item"><a href="#!">Home</a></li>
                      <li class="breadcrumb-item"><a href="#!">Library</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Breadcrumb Icon</h5>
                </div>
                <div class="card-body pc-component">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2 fs-6"></i></a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-default-icon">
                      <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                      <li class="breadcrumb-item"><a href="#!">Library</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Breadcrumb Dividers [ character ]</h5>
                </div>
                <div class="card-body pc-component">
                  <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2"></i></a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                      <li class="breadcrumb-item"><a href="#!">Library</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Breadcrumb Dividers [ embedded SVG icon ]</h5>
                </div>
                <div class="card-body pc-component">
                  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-home-2"></i></li>
                    </ol>
                  </nav>
                  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#!"> <i class="ti ti-home-2"></i></a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>
                  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#!"><i class="ti ti-home-2"></i></a></li>
                      <li class="breadcrumb-item"><a href="#!">Library</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
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