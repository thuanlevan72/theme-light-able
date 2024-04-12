@extends('layouts.main')

@section('title', 'Invoice Create')
@section('breadcrumb-item', 'Invoice')

@section('breadcrumb-item-active', 'Create')

@section('css')
@endsection

@section('content')
        <div class="row">
          <!-- [ sample-page ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-between align-items-center mb-3 g-3">
                  <div class="col-sm-auto">
                    <form class="form-search">
                      <i class="ph-duotone ph-magnifying-glass icon-search"></i>
                      <input type="search" class="form-control" placeholder="Search..." />
                      <button class="btn btn-light-secondary btn-search">Search</button>
                    </form>
                  </div>
                  <div class="col-sm-auto">
                    <input type="date" class="form-control">
                  </div>
                </div>
                <div class="card shadow-none bg-body mb-0">
                  <div class="card-body">
                    <div class="card mb-0">
                      <div class="card-body">
                        <div class="row g-3">
                          <div class="col-sm-6 col-xl-3">
                            <div class="form-group mb-0">
                              <label class="form-label">Invoice id</label>
                              <input type="text" class="form-control" placeholder="#xxxx" />
                            </div>
                          </div>
                          <div class="col-sm-6 col-xl-3">
                            <div class="form-group mb-0">
                              <label class="form-label">Status</label>
                              <select class="form-select" id="exampleFormControlSelect1">
                                <option>Please Select</option>
                                <option>Paid</option>
                                <option>Unpaid</option>
                                <option>Partial Paid</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-6 col-xl-3">
                            <div class="form-group mb-0">
                              <label class="form-label">Start Date</label>
                              <input type="datetime-local" class="form-control" />
                            </div>
                          </div>
                          <div class="col-sm-6 col-xl-3">
                            <div class="form-group mb-0">
                              <label class="form-label">Due Date</label>
                              <input type="datetime-local" class="form-control" />
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="border rounded p-3">
                              <div class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0">From:</h6>
                                <button
                                  class="btn btn-sm btn-light-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#address-edit_add-modal"
                                  ><i class="ph-duotone ph-pencil-simple-line"></i> Change</button
                                >
                              </div>
                              <h5>Garcia-Cameron and Sons</h5>
                              <p class="mb-0">8534 Saunders Hill Apt. 583</p>
                              <p class="mb-0">(970) 982-3353</p>
                              <p class="mb-0">brandon07@pierce.com</p>
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="border rounded p-3">
                              <div class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0">To:</h6>
                                <button
                                  class="btn btn-sm btn-light-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#address-edit_add-modal"
                                  ><i class="ph-duotone ph-pencil-simple-line"></i> Change</button
                                >
                              </div>
                              <h5>Dickinson-Cummerata</h5>
                              <p class="mb-0">55D Leatha Way Ernaburgh, NT 2146</p>
                              <p class="mb-0">75-9079921</p>
                              <p class="mb-0">kasandra.conn@borer.com</p>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="table-responsive mb-2">
                              <table class="table table-hover mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th><span class="text-danger">*</span>Name</th>
                                    <th><span class="text-danger">*</span>Description</th>
                                    <th><span class="text-danger">*</span>Qty</th>
                                    <th>Total Amount</th>
                                    <th class="text-center">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td><input type="text" class="form-control" placeholder="Name" value="Mauris" /></td>
                                    <td
                                      ><input type="text" class="form-control" placeholder="Description" value="Malesuada adipiscing"
                                    /></td>
                                    <td><input type="number" class="form-control" placeholder="Qty" value="2" /></td>
                                    <td><input type="text" class="form-control" placeholder="Total Amount" value="$80.00" /></td>
                                    <td class="text-center"
                                      ><a href="#" class="avtar avtar-s btn-link-danger btn-pc-default"><i class="ti ti-trash f-20"></i></a
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td><input type="text" class="form-control" placeholder="Name" value="Vitae" /></td>
                                    <td><input type="text" class="form-control" placeholder="Description" value="Hac egestas" /></td>
                                    <td><input type="number" class="form-control" placeholder="Qty" value="3" /></td>
                                    <td><input type="text" class="form-control" placeholder="Total Amount" value="$40.00" /></td>
                                    <td class="text-center"
                                      ><a href="#" class="avtar avtar-s btn-link-danger btn-pc-default"><i class="ti ti-trash f-20"></i></a
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td><input type="text" class="form-control" placeholder="Name" /></td>
                                    <td><input type="text" class="form-control" placeholder="Description" /></td>
                                    <td><input type="number" class="form-control" placeholder="Qty" /></td>
                                    <td><input type="text" class="form-control" placeholder="Total Amount" /></td>
                                    <td class="text-center"
                                      ><a href="#" class="avtar avtar-s btn-link-danger btn-pc-default"><i class="ti ti-trash f-20"></i></a
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="text-start">
                              <button class="btn btn-sm btn-light-primary"><i class="ti ti-plus"></i> Add new item</button>
                              <hr class="mb-0" />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="invoice-total ms-auto">
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-group">
                                    <label class="form-label">Discount</label>
                                    <input type="text" class="form-control" value="10" />
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="form-group">
                                    <label class="form-label">Taxes</label>
                                    <input type="text" class="form-control" value="5" />
                                  </div>
                                </div>
                                <div class="col-6"> <p class="text-muted mb-1 text-start">Sub Total :</p></div>
                                <div class="col-6"> <p class="f-w-600 mb-1 text-end">$20.00</p></div>
                                <div class="col-6"> <p class="text-muted mb-1 text-start">Discount :</p></div>
                                <div class="col-6"> <p class="f-w-600 mb-1 text-end text-success">$10.00</p></div>
                                <div class="col-6"> <p class="text-muted mb-1 text-start">Taxes :</p></div>
                                <div class="col-6"> <p class="f-w-600 mb-1 text-end">$5.000</p></div>
                                <div class="col-6"> <p class="f-w-600 mb-1 text-start">Grand Total :</p></div>
                                <div class="col-6"> <p class="f-w-600 mb-1 text-end">$25.00</p></div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group mb-0">
                              <label class="form-label">Note</label>
                              <textarea class="form-control" rows="3" placeholder="Note"></textarea>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row align-items-center justify-content-between g-3">
                              <div class="col-sm-auto">
                                <select class="form-select w-auto">
                                  <option>USD (US Dollar)</option>
                                  <option>INR (Rupes)</option>
                                </select>
                              </div>
                              <div class="col-sm-auto btn-page">
                                <a href="application/invoice-view" class="btn btn-primary">Preview</a>
                                <button class="btn btn-outline-secondary">Download</button>
                                <button class="btn btn-outline-secondary">Update & Send</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- [ sample-page ] end -->
        </div>
        <!-- [ Main Content ] end -->
      
    <div class="modal fade" id="address-edit_add-modal" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <div class="collapse multi-collapse show">
              <h5 class="mb-0">Select address</h5>
            </div>
            <div class="collapse multi-collapse">
              <h5 class="mb-0">Add New address</h5>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <div class="collapse multi-collapse show" data-bs-toggle="tooltip" title="Add New">
                <a href="#" class="avtar avtar-s btn-link-secondary" data-bs-toggle="collapse" data-bs-target=".multi-collapse">
                  <i class="ti ti-plus f-20"></i>
                </a>
              </div>
              <a href="#" class="avtar avtar-s btn-link-danger" data-bs-dismiss="modal" data-bs-toggle="tooltip" title="Close">
                <i class="ti ti-x f-20"></i>
              </a>
            </div>
          </div>
          <div class="modal-body">
            <div class="collapse multi-collapse show">
              <div class="address-check-block">
                <div class="address-check border rounded p-3">
                  <div class="form-check">
                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-1" checked="" />
                    <label class="form-check-label d-block" for="address-check-1">
                      <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                      <span class="text-muted address-details"
                        >1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span
                      >
                      <span class="row align-items-center justify-content-between">
                        <span class="col-6">
                          <span class="text-muted mb-0">+91 1234567890</span>
                        </span>
                        <span class="col-6 text-end">
                          <span class="address-btns d-flex align-items-center justify-content-end">
                            <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-20"></i>
                            </a>
                            <span class="btn btn-sm btn-outline-primary">Deliver to this address</span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div class="address-check border rounded p-3">
                  <div class="form-check">
                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-2" />
                    <label class="form-check-label d-block" for="address-check-2">
                      <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                      <span class="text-muted address-details"
                        >1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span
                      >
                      <span class="row align-items-center justify-content-between">
                        <span class="col-6">
                          <span class="text-muted mb-0">+91 1234567890</span>
                        </span>
                        <span class="col-6 text-end">
                          <span class="address-btns d-flex align-items-center justify-content-end">
                            <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-20"></i>
                            </a>
                            <span class="btn btn-sm btn-outline-primary">Deliver to this address</span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div class="address-check border rounded p-3">
                  <div class="form-check">
                    <input type="radio" name="radio1" class="form-check-input input-primary" id="address-check-3" />
                    <label class="form-check-label d-block" for="address-check-3">
                      <span class="h6 mb-0 d-block">Ian Carpenter <small class="text-muted">(Home)</small></span>
                      <span class="text-muted address-details"
                        >1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO</span
                      >
                      <span class="row align-items-center justify-content-between">
                        <span class="col-6">
                          <span class="text-muted mb-0">+91 1234567890</span>
                        </span>
                        <span class="col-6 text-end">
                          <span class="address-btns d-flex align-items-center justify-content-end">
                            <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-20"></i>
                            </a>
                            <span class="btn btn-sm btn-outline-primary">Deliver to this address</span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse multi-collapse">
              <div class="row">
                <div class="col-12">
                  <div class="form-group row align-items-center">
                    <label class="col-lg-4 col-form-label">Address Type :<small class="text-muted d-block">Enter Add Type</small></label>
                    <div class="col-lg-8">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck1" checked />
                        <label class="form-check-label" for="addtypecheck1"> Home (All day Delivery) </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="addtypecheck2" />
                        <label class="form-check-label" for="addtypecheck2"> Work (Between 10 AM to 5 PM) </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label"
                      >First Name :<small class="text-muted d-block">Enter your first name</small></label
                    >
                    <div class="col-lg-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">Last Name :<small class="text-muted d-block">Enter your last name</small></label>
                    <div class="col-lg-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">Email Id :<small class="text-muted d-block">Enter Email id</small></label>
                    <div class="col-lg-8">
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label"
                      >Date of Birth :<small class="text-muted d-block">Enter the date of birth</small></label
                    >
                    <div class="col-lg-8">
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label"
                      >Phone number :<small class="text-muted d-block">Enter Phone number</small></label
                    >
                    <div class="col-lg-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">City :<small class="text-muted d-block">Enter City name</small></label>
                    <div class="col-lg-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="checkaddres" checked />
                      <label class="form-check-label" for="checkaddres"> Save this new address for future shipping </label>
                    </div>
                  </div>
                  <div class="text-end btn-page mb-0 mt-4">
                    <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
                      >Cancel</button
                    >
                    <button class="btn btn-primary" data-bs-dismiss="modal">Save & Deliver to this Address</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-between collapse multi-collapse show">
            <ul class="list-inline me-auto mb-0">
              <li class="list-inline-item align-bottom">
                <a href="#" class="avtar avtar-s btn-link-danger w-sm-auto" data-bs-toggle="tooltip" title="Delete">
                  <i class="ti ti-trash f-18"></i>
                </a>
              </li>
            </ul>
            <div class="flex-grow-1 text-end">
              <button type="button" class="btn btn-link-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->

@endsection

@section('scripts')
@endsection