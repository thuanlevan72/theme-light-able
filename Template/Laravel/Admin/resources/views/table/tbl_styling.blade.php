@extends('layouts.main')

@section('title', 'Styling')
@section('breadcrumb-item', 'Table')

@section('breadcrumb-item-active', 'Styling')

@section('css')
@endsection

@section('content')
        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- Default Styling table start -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Default Styling</h5>
                <span class="d-block m-t-5">This is default table style</span>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Default Styling table start -->
          <!-- [ Footer-Styling ] start -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Table Footer Styling</h5>
                <span class="d-block m-t-5">use class <code>table-info</code> inside tfoot element</span>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table table-styling">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                    <tfoot class="table-info">
                      <tr>
                        <td>#</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- [ Footer-Styling ] end -->
          <!-- [ Custom-Table-Color ] start -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Custom Table Color</h5>
                <span class="d-block m-t-5">use class <code>table-*</code> inside table element</span>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table table-styling table-primary">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Mark</td>
                        <td>Thornton</td>
                        <td>@facebook</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- [ Custom-Table-Color ] end -->
          <!-- Custom Table color with hover and stripped table start -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Custom Table Color with Hover and Stripped</h5>
                <span class="d-block m-t-5">use class <code>table-*</code> inside table element</span>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table table-styling table-hover table-striped table-dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Custom Table color with hover and stripped table end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
@endsection