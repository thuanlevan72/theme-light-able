@extends('layouts.layout-components')

@section('title', 'Offcanvas')
@section('breadcrumb-title', 'Offcanvas')
@section('breadcrumb-text', 'Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.')

@section('breadcrumb-link', 'https://getbootstrap.com/docs/5.2/components/offcanvas/')

@section('css')
  <!-- [Page specific CSS] start -->
  <link href="{{ URL::asset('build/css/plugins/animate.min.css') }}" rel="stylesheet" type="text/css">
  <!-- [Page specific CSS] end -->
@endsection

@section('css-bottom')
  <link rel="stylesheet" href="{{ URL::asset('build/css/uikit.css') }}">
@endsection

@section('content')
          <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ demo-Offcanvas ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Live demo</h5>
                </div>
                <div class="card-body">
                  <div class="bd-example-modal">
                    <div class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasLabel">
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                          aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body">
                        Content for the offcanvas goes here. You can place just about any Bootstrap component or custom
                        elements here.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body btn-page pc-component">
                  <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample">
                    Link with href
                  </a>
                  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Button with data-bs-target
                  </button>
                  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body customer-body">
                      <h5 class="mb-2">$746.5k <small class="text-success f-w-400">+20.6 <i class="ti ti-arrow-up"></i></small></h5>
                      <p class="text-muted mb-3">Past 30 days</p>
                      <div class="table-body">
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Customer</th>
                                <th class="text-end">Plan</th>
                                <th class="text-end">MRP</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Logicoma</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-star f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">UAC</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span>$199</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Matsumura</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Logicoma</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-star f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">UAC</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span>$199</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Matsumura</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="text-end">
                        <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ demo-Offcanvas ] end -->
            <!-- [ Placement ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Placement</h5>
                </div>
                <div class="card-body btn-page pc-component">
                  <!-- Top Offcanvas start -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Top offcanvas <i
                      data-feather="chevrons-up"></i></button>
                  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"
                    aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                      <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body py-0">
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <div class="dropdown mb-3 d-inline-block">
                        <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                          data-bs-toggle="dropdown">
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                    </div>
                  </div>
                  <!-- Top Offcanvas end -->
                  <!-- Right Offcanvas start -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Right offcanvas <i
                      data-feather="chevrons-right"></i></button>
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <h5 class="mb-2">$746.5k <small class="text-success f-w-400">+20.6 <i class="ti ti-arrow-up"></i></small></h5>
                      <p class="text-muted mb-3">Past 30 days</p>
                      <div class="table-body">
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Customer</th>
                                <th class="text-end">Plan</th>
                                <th class="text-end">MRP</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Logicoma</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-star f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">UAC</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span>$199</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Matsumura</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Logicoma</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-star f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">UAC</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span>$199</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-arrow-down f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Matsumura</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex align-items-center text-muted">
                                    <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                      <i class="ti ti-wallet f-16"></i>
                                    </div>
                                    <span class="text-truncate w-100">Biffco</span>
                                  </div>
                                </td>
                                <td class="text-end"><span class="badge bg-light-success">Team</span></td>
                                <td class="text-end f-w-600"><span class="text-danger">-$72</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="text-end">
                        <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                      </div>
                    </div>
                  </div>
                  <!-- Right Offcanvas end -->
                  <!-- Bottom Offcanvas end -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Bottom offcanvas <i
                      data-feather="chevrons-down"></i></button>

                  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body py-0">
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <div class="dropdown mb-3 d-inline-block">
                        <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                          data-bs-toggle="dropdown">
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                    </div>
                  </div>
                  <!-- Bottom Offcanvas start -->
                </div>
              </div>
            </div>
            <!-- [ Placement ] end -->
            <!-- [ Backdrop ] start -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Backdrop</h5>
                </div>
                <div class="card-body btn-page pc-component">
                  <!-- body scrolling start -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body
                    scrolling</button>
                  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <div class="alert alert-success mb-4" role="alert">
                        <p class="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in action.</p>
                      </div>
                      <h4 class="mb-4">Main Title</h4>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <div class="dropdown mb-3 d-inline-block">
                        <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                          data-bs-toggle="dropdown">
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                    </div>
                  </div>
                  <!-- body scrolling end -->
                  <!-- Enable backdrop start -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop
                    (default)</button>
                  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop"
                    aria-labelledby="offcanvasWithBackdropLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <div class="alert alert-success mb-4" role="alert">
                        <p class="m-0 fw-bold fs-6">This is "Default behavior" of offcanvas.</p>
                      </div>
                      <h4 class="mb-4">Main Title</h4>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <div class="dropdown mb-3 d-inline-block">
                        <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                          data-bs-toggle="dropdown">
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                    </div>
                  </div>
                  <!-- Enable backdrop end -->
                  <!-- both scrolling end -->
                  <button class="btn btn-light-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both
                    scrolling & backdrop</button>
                  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                    id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling </h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <div class="alert alert-success mb-4" role="alert">
                        <p class="m-0 fw-bold fs-6">Try scrolling the rest of the page to see this option in action.</p>
                      </div>
                      <h4 class="mb-4">Main Title</h4>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <h6>Some Title</h6>
                      <p class="mb-4">
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                      </p>
                      <div class="dropdown mb-3 d-inline-block">
                        <button class="btn btn-light-secondary btn-sm dropdown-toggle" type="button"
                          data-bs-toggle="dropdown">
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-light-danger btn-sm" data-bs-dismiss="offcanvas"> Close </button>
                    </div>
                  </div>
                  <!-- both scrolling start -->
                </div>
              </div>
            </div>
            <!-- [ Backdrop ] end -->
          </div>
          <!-- [ Main Content ] end -->
@endsection

@section('scripts')
  <script>
    if (!!document.querySelector('.customer-body')) {
      new SimpleBar(document.querySelector('.customer-body'));
    }
  </script>
@endsection