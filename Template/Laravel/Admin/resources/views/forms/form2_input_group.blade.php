@extends('layouts.main')

@section('title', 'Input Group')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'Input Group')

@section('css')
@endsection

@section('content')
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ form-element ] start -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Basic example</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-primary">
          <div class="media align-items-center">
            <i class="ti ti-info-circle h2 f-w-400 mb-0"></i>
            <div class="media-body ms-3">
              Place one add-on or button on either side of an input. You may also place one on both sides of an input.
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" placeholder="Username">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username">
            <span class="input-group-text">@example.com</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="basic-url">Your vanity URL</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" placeholder="Rate" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">With textarea</label>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
        <hr>
        <div class="form-group">
          <label class="form-label" for="multiple-addons">Multiple Addons</label>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <span class="input-group-text">0.00</span>
            <input type="text" class="form-control" id="multiple-addons">
          </div>
          <div class="input-group">
            <input type="text" class="form-control">
            <span class="input-group-text">$</span>
            <span class="input-group-text">0.00</span>
          </div>
        </div>
        <div class="form-group mb-0">
          <label class="form-label" for="multiple-inputs">Multiple Inputs</label>
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" id="multiple-inputs" class="form-control">
            <input type="text" aria-label="Last name" class="form-control">
          </div>
        </div>
      </div>
      <div class="card-footer pt-0">
        <button class="btn btn-primary me-2">Submit</button>
        <button class="btn btn-light">Reset</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5>Input Group Sizing</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-primary">
          <div class="media align-items-center">
            <i class="ti ti-info-circle h2 f-w-400 mb-0"></i>
            <div class="media-body ms-3"> Add sizing class <code>.input-group-sm, .input-group-lg</code> </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group input-group-sm">
            <span class="input-group-text">Small</span>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-text">Default</span>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group mb-0">
          <div class="input-group input-group-lg">
            <span class="input-group-text">Large</span>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="card-footer pt-0">
        <button class="btn btn-primary me-2">Submit</button>
        <button class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Input Group Options</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-primary">
          <div class="media align-items-center">
            <i class="ti ti-info-circle h2 f-w-400 mb-0"></i>
            <div class="media-body ms-3">
              Input Group with more options like Button, Button with Dropdown, Colors, Checkbox & with Radio
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">With Button</label>
          <div class="input-group">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <input type="text" class="form-control" placeholder="Left Button">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Right Button">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <input type="text" class="form-control" placeholder="Left & Right Button">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
        <hr>
        <div class="form-group">
          <label class="form-label">Button with Dropdown</label>
          <div class="input-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
            <input type="text" class="form-control" placeholder="Left Dropdown">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Right Dropdown">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Color variants with Icons</label>
          <div class="input-group">
            <button class="btn btn-outline-primary"><i class="feather icon-aperture"></i> Outline color</button>
            <input type="text" class="form-control" placeholder="Left Button">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Right Button">
            <button class="btn btn-success"><i class="feather icon-download-cloud"></i> Fill color</button>
          </div>
        </div>
        <hr>
        <div class="form-group mb-0">
          <label class="form-label">Checkbox & Radio</label>
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" checked>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
          </div>
          <div class="input-group">
            <div class="input-group-text">
              <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input" checked>
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button">
          </div>
        </div>
      </div>
      <div class="card-footer pt-0">
        <button class="btn btn-primary me-2">Submit</button>
        <button type="reset" class="btn btn-light">Reset</button>
      </div>
    </div>
  </div>
  <!-- [ form-element ] end -->
</div>
<!-- [ Main Content ] end -->
@endsection