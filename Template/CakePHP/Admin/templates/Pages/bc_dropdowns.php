<!DOCTYPE html>
<html lang="en">

<head>
  <?= $this->element('head-page-meta', array('title' => 'Dropdowns')); ?>
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
            <?= $this->element('component-breadcrumb', array('title' => 'Dropdowns', 'text' =>'Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.', 'link' =>'https://getbootstrap.com/docs/5.2/components/dropdowns/')); ?>
          </div>
          <!-- [ Main Content ] start -->
          <div class="row btn-page">
            <!-- [ basic-dropdown-button ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Basic Dropdown Button</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Primary</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Secondary</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Success</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Danger</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Warning</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Info</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ basic-dropdown-button ] end -->
            <!-- [ split-danger-button ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Split Dropdown Button</h5>
                </div>
                <div class="card-body pc-component">
                  <!-- Example split danger button -->
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-info">Info</button>
                    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ split-danger-button ] end -->
            <!-- [ outline-dropdown-button ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Basic Outline Dropdown Button</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="d-flex flex-wrap gap-2">
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Primary</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Secondary</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Success</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Danger</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Warning</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                    <div class="btn-group-dropdown">
                      <button class="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Info</button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ outline-dropdown-button ] end -->
            <!-- [ split-dropdown-button ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Split Outline Dropdown Button</h5>
                </div>
                <div class="card-body pc-component">
                  <!-- Example split danger button -->
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-secondary">Secondary</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-success">Success</button>
                    <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-danger">Danger</button>
                    <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-warning">Warning</button>
                    <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button type="button" class="btn btn-outline-info">Info</button>
                    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle
                        Dropdown</span></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#!">Separated link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ split-dropdown-button ] end -->
            <!-- [ basic-dropdown-button ] start -->
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Dark dropdowns</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Primary</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Secondary</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Success</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Danger</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Warning</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Info</button>
                    <div class="dropdown-menu dropdown-menu-dark">
                      <a class="dropdown-item" href="#!">Action</a>
                      <a class="dropdown-item" href="#!">Another action</a>
                      <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ basic-dropdown-button ] end -->
            <!-- [ Dropright ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Dropright</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="d-flex flex-wrap gap-2">
                    <!-- Default dropend button -->
                    <div class="btn-group dropend">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"> Dropright </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>

                    <!-- Split dropend button -->
                    <div class="btn-group dropend">
                      <button type="button" class="btn btn-light-primary"> Split dropup </button>
                      <button type="button" class="btn btn-light-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Dropright ] end -->
            <!-- [ Dropleft ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Dropleft</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="d-flex flex-wrap gap-2">
                    <!-- Default Dropleft button -->
                    <div class="btn-group dropstart">
                      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"> Dropup </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>

                    <!-- Split Dropleft button -->
                    <div class="btn-group dropstart">
                      <button type="button" class="btn btn-light-secondary"> Split dropup </button>
                      <button type="button" class="btn btn-light-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Dropleft ] end -->
            <!-- [ Dropup ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Dropup</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="d-flex flex-wrap gap-2">
                    <!-- Default dropup button -->
                    <div class="btn-group dropup">
                      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"> Dropup </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>

                    <!-- Split dropup button -->
                    <div class="btn-group dropup">
                      <button type="button" class="btn btn-light-success"> Split dropup </button>
                      <button type="button" class="btn btn-light-success dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Dropup ] end -->
            <!-- [ Menu alignment ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Menu alignment</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Right-aligned menu example
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><button class="dropdown-item" type="button">Action</button></li>
                      <li><button class="dropdown-item" type="button">Another action</button></li>
                      <li><button class="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Menu alignment ] end -->
            <!-- [ Responsive alignment ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Responsive alignment</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="row">
                    <div class="col-12">
                      <h6>Left-aligned but right aligned when large screen</h6>
                      <div class="btn-group mb-2">
                        <button type="button" class="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown"
                          data-bs-display="static" aria-expanded="false">
                          Dropdown
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                          <li><button class="dropdown-item" type="button">Action</button></li>
                          <li><button class="dropdown-item" type="button">Another action</button></li>
                          <li><button class="dropdown-item" type="button">Something else here</button> </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 mt-3">
                      <h6>Right-aligned but left aligned when large screen</h6>
                      <div class="btn-group mb-2">
                        <button type="button" class="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown"
                          data-bs-display="static" aria-expanded="false">
                          Dropdown
                          
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                          <li><button class="dropdown-item" type="button">Action</button></li>
                          <li><button class="dropdown-item" type="button">Another action</button></li>
                          <li><button class="dropdown-item" type="button">Something else here</button> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Responsive alignment ] end -->
            <!-- [ Alignment options ] start -->
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Alignment options</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mr-2 mb-2">
                    <button class="btn btn-light-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Right-aligned menu
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      data-bs-display="static" aria-expanded="false">
                      Left-aligned, right-aligned lg
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      data-bs-display="static" aria-expanded="false">
                      Right-aligned, left-aligned lg
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2 dropstart">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropstart
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2 dropend">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropend
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                  <div class="btn-group mr-2 mb-2 dropup">
                    <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropup
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Alignment options ] end -->
            <!-- [ Text ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Text</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-light-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Text</button>
                    <div class="p-4 dropdown-menu">
                      <h6>Some title example</h6>
                      <p class="mb-2 text-muted small">And this is more</p>
                      <p class="mb-0 text-muted">Some example text that's free-flowing within the dropdown menu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Text ] end -->
            <!-- [ Forms ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Forms</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mb-2 me-2">
                    <button class="btn btn-light-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Forms</button>
                    <div class="dropdown-menu" style="min-width: 16rem">
                      <form class="px-4 py-3">
                        <div class="mb-3">
                          <label for="exampleDropdownFormEmail1" class="form-label">Email Address</label>
                          <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                            placeholder="email@example.com">
                        </div>
                        <div class="mb-3">
                          <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                            placeholder="Password">
                        </div>
                        <div class="mb-3">
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck">
                            <label class="form-check-label" for="dropdownCheck">Remember me</label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm">Sign in</button>
                        <button type="submit" class="btn btn-light btn-sm">Reset</button>
                      </form>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">New around here? Sign up</a>
                      <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Forms ] end -->
            <!-- [ Offset & Reference ] start -->
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <h5>Offset & Reference</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="dropdown me-1">
                    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
                      data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                      Offset
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary">Reference</button>
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                      data-bs-reference="parent">
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Offset & Reference ] end -->
            <!-- [ Auto close behavior ] start -->
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Auto close behavior</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="btn-group mr-2 mb-2">
                    <button class="btn btn-light-info dropdown-toggle" type="button" id="defaultDropdown"
                      data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                      Default dropdown
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>

                  <div class="btn-group mr-2 mb-2">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
                      data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                      Clickable outside
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>

                  <div class="btn-group mr-2 mb-2">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside"
                      data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                      Clickable inside
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>

                  <div class="btn-group mr-2 mb-2">
                    <button class="btn btn-light-info dropdown-toggle" type="button" id="dropdownMenuClickable"
                      data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                      Manual close
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ Auto close behavior ] end -->
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